---
title: placePurchaseOrder mutation
description: The placePurchaseOrder mutation places a purchase order using the specified cartid. If the request is successful, the status of the purchase order is ORDER...
keywords:
  - B2B
---

<Fragment src="../../../../../includes/commerce-only.md"/>

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

* [Adobe Commerce as a Cloud Service](/reference/graphql/saas/index.md#placepurchaseorder)

* [On-Premises/Cloud](/reference/graphql/index.md#placepurchaseorder)

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
