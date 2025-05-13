---
title: placePurchaseOrder mutation
keywords:
  - B2B
---

import CommerceOnly from '/src/_includes/commerce-only.md'

<CommerceOnly />

# placePurchaseOrder mutation

The `placePurchaseOrder` mutation places a purchase order using the specified `cart_id`. If the request is successful, the status of the purchase order is `ORDER_PLACED`.

<InlineAlert variant="info" slots="text" />

To convert a purchase order to an order using the purchase order UID instead of the cart ID, use the  [`placeOrderforPurchase` mutation](place-order.md).

## Syntax

```graphql
mutation {
    placePurchaseOrder(
        input: PlacePurchaseOrderInput!
    ) {
        PlacePurchaseOrderOutput
    }
}
```

## Reference

The [`placePurchaseOrder`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-placePurchaseOrder) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example places a purchase order.

**Request:**

``` graphql
mutation {
  placePurchaseOrder(
    input: {
        cart_id: "hJUrIcPm77uCyYkSTBRGyjSvS40mw1Qd"
    }
  ) {
    purchase_order {
        number
    }
  }
}
```

**Response:**

``` json
{
  "data": {
    "placePurchaseOrder": {
      "purchase_order": {
        "number": "000000002"
      }
    }
  }
}
```
