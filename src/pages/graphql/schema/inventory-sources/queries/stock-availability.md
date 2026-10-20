---
title: stockAvailability query
description: Use the stockAvailability query to retrieve stock-level salable quantity and Add to Cart eligibility for up to 100 SKUs, consistent with what the cart enforces.
keywords:
  - GraphQL
  - Inventory
---

<Fragment src="../../../../includes/saas-only.md"/>

# stockAvailability query

Use the `stockAvailability` query to check the stock-level salable quantity and purchase eligibility of one or more SKUs. The query evaluates each SKU against the sales channel's stock and reads from the inventory and reservation tables.

The salable quantity accounts for every open reservation, including orders placed without a [nominated source](../mutations/set-nominated-source-on-cart-items.md). The [`sourceAvailability`](source-availability.md) query cannot attribute those reservations to any single source, so use `stockAvailability` when you need the purchasable quantity or the Add to Cart decision. You can request both queries in a single GraphQL request.

The query returns only SKUs that the shopper can see in the current website's catalog. A SKU is silently omitted from the response when any of the following conditions apply:

- No product matches the SKU.
- The product is not assigned to the current website, or is disabled in the current store.
- The shopper's customer group cannot see the product because of B2B shared catalog assignments or category permissions.

## Salability

The `is_salable` value matches the cart's Add to Cart validation:

- It respects the minimum sale quantity and quantity increment configured for the SKU.
- It respects the merchant's stock status override. A SKU set to **Out of Stock** is not salable.
- For a composite parent, it respects the parent's own stock status. A configurable product whose parent is set to **Out of Stock** is not salable, even when its children are in stock.
- It is `true` for a SKU whose stock is not tracked. On a custom stock, the SKU must also be assigned to one of the stock's sources.

## Choose a field for the storefront

Use the following table to choose which field drives each storefront element:

| Storefront need | Field |
| --- | --- |
| Show or hide the **Add to Cart** button | `is_salable` |
| Limit the maximum quantity the cart accepts | `salable_qty` |
| Show an **In stock** or ships-now label | `is_in_stock` |
| Show an **Only X left** badge | `salable_qty`, only when `is_in_stock` is `true` and the SKU has no negative out-of-stock threshold. Otherwise, show `backorder_message` or the stock state. |

## Syntax

```graphql
stockAvailability(skus: [String!]!): [StockAvailability!]!
```

## Reference

[//]: # (The [`stockAvailability`](/reference/graphql/saas/index.md#stockavailability) reference provides detailed information about the types and fields defined in this query.)

The `stockAvailability` reference provides detailed information about the types and fields defined in this query.

## Example usage

The following query checks availability for a simple product and a configurable product. In this example, the store's **Only X left Threshold** is set to `5`, and the configurable product's parent is set to **Out of Stock**.

**Request:**

```graphql
{
  stockAvailability(skus: ["24-MB01", "24-WG080", "MH07"]) {
    sku
    salable_qty
    is_in_stock
    is_salable
    backorder_message
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
      },
      {
        "sku": "24-WG080",
        "salable_qty": 3,
        "is_in_stock": true,
        "is_salable": true,
        "backorder_message": null
      },
      {
        "sku": "MH07",
        "salable_qty": null,
        "is_in_stock": false,
        "is_salable": false,
        "backorder_message": null
      }
    ]
  }
}
```

## Errors

| Error | Description |
| --- | --- |
| `Required parameter "skus" is missing or empty.` | The `skus` argument was omitted or is an empty list. |
| `Parameter "skus" may contain at most 100 entries.` | The `skus` argument contains more than 100 entries. |
