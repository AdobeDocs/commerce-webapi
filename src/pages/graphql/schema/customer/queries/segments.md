---
title: customerSegments query
edition: ee
---

# customerSegments query

The `customerSegments` query returns information about the customer segments associated with the current customer or guest.

Customer segments allow merchants to dynamically display content and promotions to specific customers, based on various properties.
Examples include customer address, order history, and shopping cart contents.

## Syntax

```graphql
{
    customerSegments(
        cartId: String!
    ): [CustomerSegment!]
}
```

## Reference

The [`customerSegments`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-customerSegments) reference provides detailed information about the types and fields defined in this query.

## Example usage

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
      "name": "Guests",
      "description": "All shoppers who are not logged in",
      "apply_to": "VISITOR"
    }
  ]
}
```

## Related topics

*  [allCustomerSegments query](all-segments.md)
