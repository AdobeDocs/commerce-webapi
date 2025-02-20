---
title: all customer groups query
---

# All customer groups query

The `allCustomerGroups` query returns information about all customer groups available.

## Syntax

```graphql
{
    allCustomerGroups {
        name
    }
}
```

## Reference

The [`allCustomerGroups`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-all-customer-groups) reference provides detailed information about the types and fields defined in this query.

## Example usage

### Retrieve all customer groups

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
