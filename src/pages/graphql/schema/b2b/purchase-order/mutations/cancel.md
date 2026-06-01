---
title: cancelPurchaseOrders mutation
description: The cancelPurchaseOrders mutation cancels the specified purchase orders. If the request is successful, the status of each purchase order is CANCELED.
keywords:
  - B2B
---

<Fragment src="../../../../../includes/commerce-only.md"/>

# cancelPurchaseOrders mutation

The `cancelPurchaseOrders` mutation cancels the specified purchase orders. If the request is successful, the status of each purchase order is `CANCELED`.

## Syntax

```graphql
mutation {
    cancelPurchaseOrders(
        input: PurchaseOrdersActionInput!
    ) {
        PurchaseOrdersActionOutput
    }
}
```

## Reference

The `cancelPurchaseOrders` reference provides detailed information about the types and fields defined in this mutation.

* [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-cancelPurchaseOrders)

* [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-cancelPurchaseOrders)

## Example usage

The following example cancels purchase orders.

**Request:**

``` graphql
mutation {
  cancelPurchaseOrders(
    input: {
        purchase_order_uids: ["NQ=="]
    }
  ) {
    purchase_orders {
        number
        status
    }
    errors {
        message
        type
    }
  }
}
```

**Response:**

``` json
{
  "data": {
    "cancelPurchaseOrders": {
      "purchase_orders": [
        {
          "number": "000000005",
          "status": "CANCELED"
        }
      ],
      "errors": []
    }
  }
}
```
