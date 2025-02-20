---
title: all cart rules query
---

# All cart rules query

The `allCartRules` query returns information about all active cart rules in the store.

## Syntax

```graphql
{
    allCartRules {
        name
    }
}
```

## Reference

The [`allCartRules`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-all-cart-rules) reference provides detailed information about the types and fields defined in this query.

## Example usage

### Retrieve all cart rules

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
