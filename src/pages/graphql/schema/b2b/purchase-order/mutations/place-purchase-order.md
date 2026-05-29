---
title: placePurchaseOrder mutation
description: The placePurchaseOrder mutation places a purchase order using the specified cartid. If the request is successful, the status of the purchase order is ORDER...
keywords:
  - B2B
---

| |
|:--|
| ![Adobe Commerce feature](../../../../../images/adobe-logo.svg) **Exclusive feature only in Adobe Commerce** ([Learn more](https://experienceleague.adobe.com/docs/commerce-admin/user-guides/home.html#product-editions)) |

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

The `placePurchaseOrder` reference provides detailed information about the types and fields defined in this mutation.

* [SaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-placePurchaseOrder)

* [PaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-placePurchaseOrder)

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

