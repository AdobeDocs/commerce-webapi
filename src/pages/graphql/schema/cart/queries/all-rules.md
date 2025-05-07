---
title: allCartRules query
edition: paas
---

# allCartRules query

The `allCartRules` query returns a list of all active cart rules in the store.

Cart price rules apply discounts to items in the shopping cart, based on a set of conditions.

## Syntax

```graphql
{
    allCartRules {
        name
    }
}
```

## Reference

The [`allCartRules`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-allCartRules) reference provides detailed information about the types and fields defined in this query.

## Example usage

The following call returns a list of all active cart rules in the store.

**Request:**

```graphql
{
    allCartRules {
        name
    }
}
```

**Response:**

```json
{
  "allCartRules": [
    {
      "name": "Rule A"
    },
    {
      "name": "Rule B"
    }
  ]
}
```
