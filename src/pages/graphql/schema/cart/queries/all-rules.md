---
title: allCartRules query
edition: ee
---

# allCartRules query

<InlineAlert variant="info" slots="text1" />

This query is part of the [Storefront Compatibility Package](https://experienceleague.adobe.com/developer/commerce/storefront/setup/storefront-compatibility/). It will be added to Adobe Commerce 2.4.8-beta4.

The `allCartRules` query returns a list of all active cart rules in the store.

## Syntax

```graphql
{
    allCartRules {
        name
    }
}
```

<!---
## Reference

The [`allCartRules`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-all-cart-rules) reference provides detailed information about the types and fields defined in this query.
-->

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
