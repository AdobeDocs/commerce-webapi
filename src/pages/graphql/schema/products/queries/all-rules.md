---
title: all catalog rules query
---

# All catalog rules query

The `allCatalogRules` query returns information about all active catalog rules in the store.

## Syntax

```graphql
{
    allCatalogRules {
        name
    }
}
```

## Reference

The [`allCatalogRules`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-all-catalog-rules) reference provides detailed information about the types and fields defined in this query.

## Example usage

### Retrieve all catalog rules

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
