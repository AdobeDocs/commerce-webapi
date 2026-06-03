---
title: placeOrderForPurchaseOrder mutation
description: The placeOrderForPurchaseOrder mutation converts an approved purchase order to an order. If the request is successful, the status of the purchase order is...
keywords:
  - B2B
---

<Fragment src="../../../../../includes/commerce-only.md"/>

# placeOrderForPurchaseOrder mutation

The `placeOrderForPurchaseOrder` mutation converts an approved purchase order to an order. If the request is successful, the status of the purchase order is `ORDER_PLACED`.

<InlineAlert variant="info" slots="text" />

If you want to place a purchase order using the cart ID instead of the purchase order UID, use the [`placePurchaseOrder` mutation](place-purchase-order.md).

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

## Reference

The `placeOrderForPurchaseOrder` reference provides detailed information about the types and fields defined in this mutation.

* [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-placeOrderForPurchaseOrder)

* [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-placeOrderForPurchaseOrder)

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
