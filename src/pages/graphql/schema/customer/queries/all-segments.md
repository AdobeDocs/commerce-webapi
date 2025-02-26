---
title: allCustomerSegments query
edition: ee
---

# allCustomerSegments query

<InlineAlert variant="info" slots="text1" />

This query is part of the [Storefront Compatibility Package](https://experienceleague.adobe.com/developer/commerce/storefront/setup/storefront-compatibility/). It will be added to Adobe Commerce 2.4.8-beta4.

The `allCustomerSegments` query returns information about the available customer segments.

Customers segments allow shoppers to dynamically display content and promotions to specific customers, based on various properties.
Some examples are customer address, order history, and shopping cart contents.

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

<!--->
## Reference

The [`allCustomerSegments`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-all-customer-segments) reference provides detailed information about the types and fields defined in this query.
-->

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
