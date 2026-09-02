---
title: sourceAvailability query
description: Use the sourceAvailability query to check per-source inventory availability for one or more SKUs, scoped to the current sales channel's assigned stock sources.
---

<Fragment src="../../../../includes/saas-only.md"/>

# sourceAvailability query

Use the `sourceAvailability` query to check per-source inventory availability for one or more SKUs. The query reports availability only for the inventory sources assigned and enabled for the current sales channel's stock, so a storefront read never disagrees with what checkout allows.

An admin must enable this query before it returns data. Go to **Stores** > Configuration > **Catalog** > **Inventory** > **Per-Source Availability (Storefront)** and set **Enable `sourceAvailability` GraphQL Query** to **Yes**. The query is disabled by default because it discloses which sources stock a SKU, and returns an error while disabled.

The exact `available_qty` value is returned only when it is at or below the store's **Only X left Threshold** setting. Above the threshold, `available_qty` is `null` and `is_in_stock` is the only reliable signal. This threshold defaults to `0`, so by default every positive quantity is masked and `is_in_stock` is the authoritative field to check. To change it, go to **Stores** > Configuration > **Catalog** > **Inventory** > **Stock Options** and set **Only X left Threshold**.

## Syntax

```graphql
sourceAvailability (skus: [String!]! source_codes: [String!] only_in_stock: Boolean): [SkuSourceAvailability!]!
```

| Argument | Description |
| --- | --- |
| `skus` | The product SKUs to report availability for. Required. Accepts up to 100 entries. |
| `source_codes` | Restricts the report to these inventory sources. Accepts up to 100 entries. When omitted, the query reports every source assigned to the current sales channel's stock. |
| `only_in_stock` | When `true`, omits sources where the SKU is not salable. Defaults to `false`. |

## Reference

The [`sourceAvailability`](/reference/graphql/saas/index.md#sourceavailability) reference provides detailed information about the types and fields defined in this query.

## Example usage

The following query checks availability for a single SKU at two named sources.

**Request:**

```graphql
{
  sourceAvailability(
    skus: ["24-MB01"]
    source_codes: ["default", "east-warehouse"]
    only_in_stock: false
  ) {
    sku
    sources {
      source_code
      sku
      available_qty
      is_in_stock
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
        "sources": [
          {
            "source_code": "default",
            "sku": "24-MB01",
            "available_qty": null,
            "is_in_stock": true
          },
          {
            "source_code": "east-warehouse",
            "sku": "24-MB01",
            "available_qty": 0,
            "is_in_stock": false
          }
        ]
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
| `Parameter "source_codes" must be a list of source codes.` | The `source_codes` argument was provided as a non-list value. |
| `Parameter "source_codes" may contain at most 100 entries.` | The `source_codes` argument contains more than 100 entries. |
| `The per-source availability query is not enabled for this store.` | An admin has not enabled the query for the current store. |
