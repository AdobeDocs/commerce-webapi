---
title: placeOrderForPurchaseOrder mutation
edition: b2b
---

# placeOrderForPurchaseOrder mutation

The `placeOrderForPurchaseOrder` mutation converts an approved purchase order to an order. If the request is successful, the status of the purchase order is `ORDER_PLACED`.

Use the [`placePurchaseOrder` mutation](place-purchase-order.md) to place a purchase order using the cart ID.

## Syntax

```graphql
mutation {
    placeOrderForPurchaseOrder(
        input: PlaceOrderForPurchaseOrderInput!
    ) {
        PlaceOrderForPurchaseOrderOutput
    }
}
```

## Example usage

The following example places an order based on the approved purchase order.

**Request:**

``` graphql
mutation {
  placeOrderForPurchaseOrder(
    input: {
        purchase_order_uid: "MQ=="
    }
  ) {
   order {
    number
   }
  }
}
```

**Response:**

``` json
{
  "data": {
    "placeOrderForPurchaseOrder": {
      "order": {
        "number": "000000001"
      }
    }
  }
}
```
