---
title: cancelPurchaseOrders mutation | Commerce Web APIs
edition: b2b
---

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
