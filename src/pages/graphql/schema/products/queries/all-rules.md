---
title: allCatalogRules query
edition: ee
---

# allCatalogRules query

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

## Reference

The [`allCatalogRules`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-allCatalogRules) query returns a list of catalog rule names.

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
