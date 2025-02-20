---
title: all customer segments query
---

# All customer segments query

The `allCustomerSegments` query returns information about all the customer segments available.

## Syntax

```graphql
{
    allCustomerSegments {
        name
        description
        apply_to
    }
}
```

## Reference

The [`allCustomerSegments`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-all-customer-segments) reference provides detailed information about the types and fields defined in this query.

## Example usage

### Retrieve all active customer segments

The following call returns a list of all active customer segments.

**Request:**

```graphql
{
    allCustomerSegments {
        name
        description
        apply_to
    }
}
```

**Response:**

```json
{
  "allCustomerSegments": [
    {
      "name": "Segment A",
      "description": "Lorem ipsum",
      "apply_to": "VISITOR"
    },
    {
      "name": "Segment B",
      "description": "Lorem ipsum",
      "apply_to": "VISITOR"
    }
  ]
}
```

## Related topics

*  [customerSegments query](segments.md)
