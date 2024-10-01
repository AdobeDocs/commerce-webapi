---
title: placePurchaseOrder mutation
edition: b2b
---

# placePurchaseOrder mutation

The `placePurchaseOrder` mutation places a purchase order using the specified `cart_id`. If the request is successful, the status of the purchase order is `ORDER_PLACED`.

Use the [`placePurchaseOrder` mutation](place-order.md) to convert a purchase order to an order using the UID.

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
