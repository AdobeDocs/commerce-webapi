---
title: rejectPurchaseOrders mutation
description: The rejectPurchaseOrders mutation rejects one or more purchase orders. The specified purchase orders must have a status of PENDING.
keywords:
  - B2B
---

<Fragment src="../../../../../includes/commerce-only.md"/>

# rejectPurchaseOrders mutation

The `rejectPurchaseOrders` mutation rejects one or more purchase orders. The specified purchase orders must have a status of PENDING.

## Syntax

```graphql
mutation {
  rejectPurchaseOrders(
    input: PurchaseOrdersActionInput!
  ){
    PurchaseOrdersActionOutput
  }
}
```

## Reference

The `rejectPurchaseOrders` reference provides detailed information about the types and fields defined in this mutation.

* [Adobe Commerce as a Cloud Service](/reference/graphql/saas/mutations.md#rejectpurchaseorders)

* [On-Premises/Cloud](/reference/graphql/latest/mutations.md#rejectpurchaseorders)

## Example usage

The following example rejects a purchase order.

**Request:**

``` graphql
mutation {
  rejectPurchaseOrders(
    input: {
      purchase_order_uids: ["MTA="]
    }
  ) {
    purchase_orders {
      number
      uid
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
    "rejectPurchaseOrders": {
      "purchase_orders": [
        {
          "number": "000000010",
          "uid": "MTA=",
          "status": "REJECTED"
        }
      ],
      "errors": []
    }
  }
}
```
