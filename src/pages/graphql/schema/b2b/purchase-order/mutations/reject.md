---
title: rejectPurchaseOrders mutation | Commerce Web APIs
edition: b2b
---

# rejectPurchaseOrders mutation

The `rejectPurchaseOrders` mutation rejects purchase orders.

## Syntax

```graphql
mutation {
    rejectPurchaseOrders(
        input: PurchaseOrdersActionInput!
    ) {
        PurchaseOrdersActionOutput
    }
}
```

## Example usage

The following example rejects purchase orders.

**Request:**

``` graphql
mutation {
  rejectPurchaseOrders(
    input: {
        purchase_order_uids: ["NA=="]
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
    "rejectPurchaseOrders": {
      "purchase_orders": [
        {
          "number": "000000004"
        }
      ],
      "errors": []
    }
  }
}
```

