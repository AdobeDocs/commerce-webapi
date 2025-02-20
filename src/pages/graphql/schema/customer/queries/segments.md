---
title: customer segments query
---

# customer segments query

The `customerSegments` query returns information about the customer segments associated with the current customer or guest/visitor.

## Syntax

```graphql
{
    customerSegments(
        cartId: String!
    ): [CustomerSegment!]
}
```

## Reference

The [`customerSegments`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-customer-segments) reference provides detailed information about the types and fields defined in this query.

## Example usage

### Retrieve segments information of a visitor

The following call returns segments currently applied to the visitor.

**Request:**

```graphql
{
  customerSegments(cartId: "kw6mLEvl6vjjPNsjtJqwpamv5o0iT1bc") {
    name
    description
    apply_to
  }
}
```

**Response:**

```json
{
  "customerSegments": [
    {
      "name": "Segment A",
      "description": "Segment applied to visitors only",
      "apply_to": "VISITOR"
    }
  ]
}
```

## Related topics

*  [allCustomerSegments query](all-segments.md)
