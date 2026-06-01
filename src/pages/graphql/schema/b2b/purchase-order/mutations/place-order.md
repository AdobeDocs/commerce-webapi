---
title: placeOrderForPurchaseOrder mutation
description: The placeOrderForPurchaseOrder mutation converts an approved purchase order to an order. If the request is successful, the status of the purchase order is...
keywords:
  - B2B
---

| |
|:--|
| ![Adobe Commerce feature](../../../../../images/adobe-logo.svg) **Exclusive feature only in Adobe Commerce** ([Learn more](https://experienceleague.adobe.com/docs/commerce-admin/user-guides/home.html#product-editions)) |

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

* [SaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-placeOrderForPurchaseOrder)

* [PaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-placeOrderForPurchaseOrder)

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
