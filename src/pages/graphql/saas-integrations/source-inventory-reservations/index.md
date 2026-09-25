---
title: Source-Level Inventory Reservations
description: Nominate an inventory source on cart items, read per-source availability, and track reservations.
keywords:
  - GraphQL
  - Integration
  - Inventory
---

<Fragment src="../../../includes/saas-only.md"/>

# Source-level inventory reservations

Source-level inventory reservations allow shoppers and backends commit a cart line to inventory sources before checkout, such as a store for pickup, a preferred warehouse, or a ship-from-store location. Use this feature to build buy online, pick up in store (BOPIS) and other nominated-source experiences.

Inventory Management holds stock at the stock level and selects a source only at shipment. Source-level reservations keep the inventory hold, the order placement guard, and the physical deduction aligned to the nominated source. Cart items without a nomination are unaffected. They continue to use native Inventory Management, which creates a stock-level reservation and selects a source at shipment through the source selection algorithm.

Storefront interaction uses the following:

- Mutation - [`setNominatedSourceOnCartItems`](#nominate-a-source-on-cart-items) sets or clears the nominated source on cart items.
- Query - [`sourceAvailability`](#read-availability-and-saleability) reports saleability per SKU and availability per source.
- Cart item fields - [`nominated_source` and `nominated_source_errors`](#read-nomination-fields-on-cart-items) report the live state of a nomination on any cart item.

## Configure the storefront query

By default, this inventory information is not accessible on the storefront. To enable it, complete the following steps.

### Enable the per-source availability query

The per-source portion of the `sourceAvailability` query is disabled by default because it discloses which sources stock a SKU. Enable it for each store view.

1. In the Admin, go to **Stores** > Settings > **Configuration** > **Catalog** > **Inventory** > **Per-Source Availability (Storefront)**.

1. Set **Enable `sourceAvailability` GraphQL Query** to `Yes` and save the configuration.

While this setting is disabled, the `sources` list in the query response is empty.

For more information, see [Global options](https://experienceleague.adobe.com/en/docs/commerce-admin/inventory/configuration/global-options) and [Inventory configuration](https://experienceleague.adobe.com/en/docs/commerce-admin/config/catalog/inventory#per-source-availability-storefront).

### Make a source visible on the storefront

Even when the query is enabled, a source is reported only if it is explicitly flagged.

1. In the Admin, go to **Stores** > Inventory > **Sources** and edit a source.

1. Enable **Visible on Storefront** and save the source.

A source is reported on the storefront only when it is assigned to the stock of the current sales channel.

For more information, see [Add a source](https://experienceleague.adobe.com/en/docs/commerce-admin/inventory/sources/sources-add) in the _Adobe Commerce Admin Systems Guide_.

## Review nominated sources in the Admin

After orders begin to carry nominations, you can review each nomination and receive early validation in the Admin:

- **Sales** > **Orders** > _[order]_ > **Items Ordered** - Each nominated line displays a **Nominated source** label. Lines without a nomination are unchanged.

- **Ship** > **Source Selection** - On a multi-source order, each nominated line displays its nominated source, so you can ship the item from the correct location.

- **Ship** > **Source Selection validation** - Before submission, nominated lines are validated against the source that is selected for deduction. A mismatch returns an inline error that names each SKU and its required source.

<InlineAlert variant="info" slots="text" />

Authoritative shipment enforcement occurs outside the Admin and rejects a deduction from the wrong source for non-Admin callers, such as REST clients and asynchronous consumers.

## Nominate a source on cart items

The `setNominatedSourceOnCartItems` mutation is the single canonical write path for a nomination. Specify a `source_code` to set a nomination, or `null` or an empty string to clear it.

Domain validation failures are returned for each item in `rejected_items`, which allows valid nominations in the same request to succeed. An invalid or foreign `cart_item_uid`, or any other malformed input, fails the entire operation with a GraphQL input error before any nomination is written.

### Get the cart item UID

The mutation requires the masked cart ID and the UID of each cart item to nominate. Create a cart with the `createGuestCart` mutation or retrieve one with the `customerCart` query, add products to it, and then query the cart items.

**Request:**

```graphql
query GetCartItems($cartId: String!) {
  cart(cart_id: $cartId) {
    itemsV2 {
      items {
        uid
        product { sku name }
        quantity
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "cart": {
      "itemsV2": {
        "items": [
          { "uid": "OTk=", "product": { "sku": "24-MB01", "name": "Joust Duffle Bag" }, "quantity": 1
          }
        ]
      }
    }
  }
}
```

### Set the nominated source

The following mutation nominates the `store_nyc_001` source for one cart item.

**Request:**

```graphql
mutation SetSource($cartId: String!) {
  setNominatedSourceOnCartItems(
    input: {
      cart_id: $cartId
      items: [{ cart_item_uid: "OTk=", source_code: "store_nyc_001" }]
    }
  ) {
    cart {
      itemsV2 {
        items {
          uid
          nominated_source { source_code name is_in_stock available_qty }
          nominated_source_errors { code message }
        }
      }
    }
    rejected_items {
      cart_item_uid
      code
      message
      requested_qty
      available_qty
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "setNominatedSourceOnCartItems": {
      "cart": {
        "itemsV2": {
          "items": [
            {
              "uid": "OTk=",
              "nominated_source": {
                "source_code": "store_nyc_001",
                "name": "NYC Flagship Store",
                "is_in_stock": true,
                "available_qty": null
              },
              "nominated_source_errors": []
            }
          ]
        }
      },
      "rejected_items": []
    }
  }
}
```

<InlineAlert variant="info" slots="text" />

Setting a `pickup_location_code` with the `setShippingAddressesOnCart` mutation automatically nominates that location as the source for every cart item. In-store pickup reuses this write path internally, so no separate call is required.

### Handle rejected items

When a nomination fails domain validation, the item is returned in `rejected_items` and the remaining nominations in the request are applied. The following response shows one item that does not have the necessary quantity available at the selected source.

```json
{
  "data": {
    "setNominatedSourceOnCartItems": {
      "cart": { "itemsV2": { "items": [ <...> ] } },
      "rejected_items": [
        {
          "cart_item_uid": "MTAw",
          "code": "NOT_ENOUGH_QTY",
          "message": "Not enough quantity at the selected source.",
          "requested_qty": 5,
          "available_qty": 2
        }
      ]
    }
  }
}
```

The `code` field returns one of the following `NominatedSourceErrorCode` values.

| Code | Description |
| --- | --- |
| `UNKNOWN_SOURCE` | The `source_code` value does not exist. |
| `SOURCE_DISABLED` | The source exists, but it is disabled. |
| `NOT_ENOUGH_QTY` | The available quantity at the source is less than the quantity of the item. |
| `SKU_SOURCE_CONFLICT` | The same SKU is already nominated to a different source on another cart line. A cart supports one nominated source per SKU. |

## Read availability and saleability

The `sourceAvailability` query returns a SKU-level saleability assessment for each requested SKU. When per-source disclosure is enabled, the query also returns per-source availability, which is calculated the same way as the order placement guard, as physical quantity net of open source-level reservations.

A request accepts a maximum of 100 `skus` values and, when supplied, a maximum of 100 `source_codes` values. Consider splitting larger lists into batches that stay within both limits.

**Request:**

```graphql
query Availability {
  sourceAvailability(skus: ["24-MB01"], only_in_stock: true) {
    sku
    is_saleable          # authoritative Add-to-Cart gate (backorders considered)
    backorder_message    # pre-order notice, or null
    sources {
      source_code
      name
      is_in_stock
      available_qty
      is_pickup_location_active
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "sourceAvailability": [
      {
        "sku": "24-MB01",
        "is_saleable": true,
        "backorder_message": null,
        "sources": [
          {
            "source_code": "store_nyc_001",
            "name": "NYC Flagship Store",
            "is_in_stock": true,
            "available_qty": null,
            "is_pickup_location_active": true
          }
        ]
      }
    ]
  }
}
```

For the full argument and type reference, see the [`sourceAvailability`](../../schema/products/queries/source-availability.md) query.

### Gate Add to Cart on is_saleable

Use `is_saleable`, not `is_in_stock`, to determine whether a shopper can add a product to the cart. The `is_saleable` field is the authoritative purchase-eligibility signal and accounts for backorders. It is `true` when the SKU is physically in stock, or when the SKU is out of stock but backorders are enabled, which indicates a pre-order.

The per-source `is_in_stock` field is a physical-inventory statement about a single source. It can be `false` for a SKU that remains purchasable through backorder, so gating the **Add to Cart** button on it incorrectly hides pre-order products. The `is_saleable` field is returned for every SKU, regardless of the per-source disclosure setting for the store.

### Identify pre-order products

The `backorder_message` field only populates when the SKU is saleable solely because notify-mode backorders are enabled and the salable quantity is depleted. Salable quantity is the physical quantity minus open reservations and the configured out-of-stock threshold. The field is `null` when salable quantity remains, when backorders are silent, or when the SKU is not saleable. Use the presence of a message to render a pre-order label next to the Add to Cart button.

### Interpret `available_qty`

The `available_qty` field returns an exact quantity only when the quantity is at or below the **Only X left Threshold** setting. Above the threshold, the field returns `null`. The threshold defaults to `0`, so by default every positive quantity is masked and the boolean fields carry the information.

### Control source visibility

The `sources` list only populates when per-source disclosure is enabled, and it is narrowed to the storefront-visible sources in the stock of the current sales channel. When disclosure is disabled, the list is empty, but `is_saleable` and `backorder_message` are still returned.

Specify `source_codes` to restrict the report to named sources. A requested source that is not visible on the storefront, or that is not assigned to the stock of the sales channel, is silently omitted. Omit `only_in_stock`, which defaults to `false`, to include out-of-stock sources.

## Read nomination fields on cart items

Any cart query can read the live state of the nomination on an item through the following fields:

- `nominated_source: SourceAvailability` returns the nominated source with a live availability snapshot. The field is `null` when the item has no nomination, or when the source no longer resolves or is disabled.

- `nominated_source_errors: [NominatedSourceError!]!` returns live validation of the current nomination, which can be `UNKNOWN_SOURCE`, `SOURCE_DISABLED`, or `NOT_ENOUGH_QTY` if availability has dropped since the nomination. The list is empty when the nomination is valid. `SKU_SOURCE_CONFLICT` never appears in this list, because it is enforced only on the write path.

## Order lifecycle

After an order that contains nominations is placed, the reservation lifecycle runs automatically.

1. **Quote to order.** The nomination is copied from the quote item to the order item and persisted as the source of truth for the line.

1. **Placement.** A hold is recorded at the nominated source for each nominated line, and the stock-level reservation is suppressed for that line so the hold is not counted twice. A placement validation rule rejects the order if the nominated source cannot cover the line. The open hold is also included in the shared salable quantity total, so both the displayed quantity and the Add to Cart guard account for it while the order is unshipped.

1. **Shipment.** A release is recorded at the nominated source, and the physical deduction is forced to that same source. A mismatched source is rejected before any decrement occurs. The hold and the release net to zero.

1. **Cancellation.** For each nominated line that has an open hold, a release is recorded at the nominated source. Only the unshipped quantity is compensated, because quantity that was already shipped was released during shipment. Cancellation is an alternative to shipment, not a later step.

1. **Cleanup.** A daily cron job removes fully compensated rows from the append-only reservation ledger.

## Related documentation

- [`sourceAvailability` query](../../schema/products/queries/source-availability.md)
- [`setNominatedSourceOnCartItems` mutation reference](/reference/graphql/saas/mutations.md#setnominatedsourceoncartitems)
- [Add a source](https://experienceleague.adobe.com/en/docs/commerce-admin/inventory/sources/sources-add)
- [Global options](https://experienceleague.adobe.com/en/docs/commerce-admin/inventory/configuration/global-options)
- [Inventory configuration](https://experienceleague.adobe.com/en/docs/commerce-admin/config/catalog/inventory#per-source-availability-storefront)
