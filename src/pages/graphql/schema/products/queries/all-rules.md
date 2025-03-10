---
title: allCatalogRules query
edition: ee
---

# allCatalogRules query

<InlineAlert variant="info" slots="text1" />

This query is part of the [Storefront Compatibility Package](https://experienceleague.adobe.com/developer/commerce/storefront/setup/storefront-compatibility/). It will be added to Adobe Commerce 2.4.8-beta4.

The `allCatalogRules` query returns a list of all active catalog rules in the store.

Catalog price rules can be used to offer products to buyers at a discounted price, based on a set of defined conditions.

## Syntax

```graphql
{
    allCatalogRules {
        name
    }
}
```

<!---
## Reference

The [`allCatalogRules`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-all-catalog-rules) query returns a list of catalog rule names.
-->

## Example usage

The following call returns a list of all active catalog rules in the store.

**Request:**

```graphql
{
    allCatalogRules {
        name
    }
}
```

**Response:**

```json
{
  "allCatalogRules": [
    {
      "name": "Rule A"
    },
    {
      "name": "Rule B"
    }
  ]
}
```
