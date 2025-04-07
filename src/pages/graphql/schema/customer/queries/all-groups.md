---
title: allCustomerGroups query
edition: ee
---

# allCustomerGroups query

The `allCustomerGroups` query returns a list of available customer groups.

Customer groups determine which discounts are available and the tax class that is associated with the group.

## Syntax

```graphql
{
    allCustomerGroups {
        name
    }
}
```

## Reference

The [`allCustomerGroups`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-allCustomerGroups) reference provides detailed information about the types and fields defined in this query.

## Example usage

The following call returns a list of all customer groups.

**Request:**

```graphql
{
    allCustomerGroups {
        name
    }
}
```

**Response:**

```json
{
  "allCustomerGroups": [
    {
      "name": "Group A"
    },
    {
      "name": "Group B"
    }
  ]
}
```

## Related topics

*  [allCustomerSegments query](all-segments.md)
