---
title: rejectPurchaseOrders mutation
edition: b2b
---

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
