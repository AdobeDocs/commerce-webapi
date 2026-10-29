---
title: Inventory sources queries
description: Learn about the GraphQL queries that return inventory source and pickup location information for the storefront.
keywords:
  - GraphQL
  - Integration
  - Inventory
---

# Inventory sources queries

The [`pickupLocations`](pickup-locations.md) query returns the pickup locations that are available to the shopper. Filter the results by area, or by attributes such as country, region, city, street, name, and pickup location code.

<Fragment src="../../../../includes/saas-only.md"/>

The [`sourceAvailability`](source-availability.md) query returns per-source availability for each requested SKU.

The [`stockAvailability`](stock-availability.md) query returns the stock-level salable quantity and Add to Cart eligibility for up to 100 SKUs.

## Read availability and saleability

Two queries report availability, and you can request both in a single GraphQL request:

- The [`stockAvailability` query](../queries/stock-availability.md) returns the stock-level salable quantity and Add to Cart eligibility for each requested SKU. It accounts for every open reservation, including orders placed without a nominated source.
- The [`sourceAvailability` query](../queries/source-availability.md) returns per-source availability when per-source disclosure is enabled. Per-source availability is calculated the same way as the order placement guard, as physical quantity net of open source-level reservations.

Each query accepts a maximum of 100 `skus` values. The `sourceAvailability` query also accepts a maximum of 100 `source_codes` values. Consider splitting larger lists into batches that stay within these limits.

**Request:**

```graphql
query Availability {
  stockAvailability(skus: ["24-MB01"]) {
    sku
    salable_qty
    is_in_stock
    is_salable           # authoritative Add to Cart gate (backorders considered)
    backorder_message    # pre-order notice, or null
  }
  sourceAvailability(skus: ["24-MB01"], only_in_stock: true) {
    sku
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
    "stockAvailability": [
      {
        "sku": "24-MB01",
        "salable_qty": null,
        "is_in_stock": true,
        "is_salable": true,
        "backorder_message": null
      }
    ],
    "sourceAvailability": [
      {
        "sku": "24-MB01",
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

For the full argument and type reference, see the [`stockAvailability`](../queries/stock-availability.md) and [`sourceAvailability`](../queries/source-availability.md) queries.

### Gate Add to Cart on is_salable

Use the `stockAvailability` `is_salable` field, not `is_in_stock`, to determine whether a shopper can add a product to the cart. The `is_salable` field is the authoritative purchase-eligibility signal and accounts for backorders, the minimum sale quantity, and quantity increments. It is `true` when the SKU is in stock, or when the SKU is out of stock but backorders are enabled, which indicates a pre-order.

The per-source `is_in_stock` field is a physical-inventory statement about a single source. It can be `false` for a SKU that remains purchasable through backorder, so gating the **Add to Cart** button on it incorrectly hides pre-order products. The `stockAvailability` query returns `is_salable` for every visible SKU, regardless of the per-source disclosure setting for the store.

### Identify pre-order products

The `stockAvailability` `backorder_message` field only populates when the SKU is salable solely because notify-mode backorders are enabled, meaning the SKU is salable but not in stock. The field is `null` when the SKU is in stock, when backorders are silent, or when the SKU is not salable. Use the presence of a message to render a pre-order label next to the Add to Cart button.

### Interpret quantities

The `available_qty` and `salable_qty` fields return an exact quantity only when the quantity is at or below the **Only X left Threshold** setting. Above the threshold, the fields return `null`. The threshold defaults to `0`, so by default every positive quantity is masked and the boolean fields carry the information.

### Control source visibility

The `sourceAvailability` query returns results only when per-source disclosure is enabled, and the `sources` list is narrowed to the storefront-visible sources in the stock of the current sales channel. When disclosure is disabled, the query returns an empty list. Use `stockAvailability` for per-SKU availability on those stores.

Specify `source_codes` to restrict the report to named sources. A requested source that is not visible on the storefront, or that is not assigned to the stock of the sales channel, is silently omitted. Omit `only_in_stock`, which defaults to `false`, to include out-of-stock sources.
