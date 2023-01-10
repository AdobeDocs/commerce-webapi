---
title: placeOrderForPurchaseOrder mutation | Commerce Web APIs
edition: b2b
---

# placeOrderForPurchaseOrder mutation

The `placeOrderForPurchaseOrder` mutation places an order based on the approved purchase order.

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

