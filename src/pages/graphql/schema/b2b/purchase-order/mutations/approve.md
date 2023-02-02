---
title: approvePurchaseOrders mutation | Commerce Web APIs
edition: b2b
---

# approvePurchaseOrders mutation

The `approvePurchaseOrders` mutation approves one or more purchase orders. The specified purchase orders must have a status of PENDING.

## Syntax

```graphql
mutation {
    approvePurchaseOrders(
      input: PurchaseOrdersActionInput!
    ) {
      PurchaseOrdersActionOutput
    }
}
```

## Example usage

The following example approves a purchase order.

**Request:**

``` graphql
mutation {
  approvePurchaseOrders(
    input: {
      purchase_order_uids: ["Ng=="]
    }
  ) {
    purchase_orders {
      number
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
    "approvePurchaseOrders": {
      "purchase_orders": [
        {
          "number": "000000006"
        }
      ],
      "errors": []
    }
  }
}
```
