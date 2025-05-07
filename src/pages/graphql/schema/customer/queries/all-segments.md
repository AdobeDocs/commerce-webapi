---
title: allCustomerSegments query
---

import CommerceOnly from '/src/_includes/commerce-only.md'

<CommerceOnly />

# allCustomerSegments query

The `allCustomerSegments` query returns information about the available customer segments.

Customer segments allow merchants to dynamically display content and promotions to specific customers, based on various properties.
Examples include customer address, order history, and shopping cart contents.

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

The [`allCustomerSegments`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-allCustomerSegments) reference provides detailed information about the types and fields defined in this query.

## Example usage

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
      "name": "Guests",
      "description": "All shoppers who are not logged in",
      "apply_to": "VISITOR"
    },
    {
      "name": "Registered",
      "description": "Applies to all logged-in customers",
      "apply_to": "REGISTERED"
    }
  ]
}
```

## Related topics

*  [customerSegments query](segments.md)
