---
title: validatePurchaseOrders mutation | Commerce Web APIs
edition: b2b
---

# validatePurchaseOrders mutation

The `validatePurchaseOrders` mutation validates purchase orders.

## Syntax

```graphql
mutation {
    validatePurchaseOrders(
        input: ValidatePurchaseOrdersInput!
    ) {
        ValidatePurchaseOrdersOutput
    }
}
```

## Example usage

The following example validates purchase orders.

**Request:**

``` graphql
mutation {
  validatePurchaseOrders(
    input: {
        purchase_order_uids: ["Nw==", "OA=="]
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
    "validatePurchaseOrders": {
      "purchase_orders": [
        {
          "number": "000000007",
          "status": "APPROVAL_REQUIRED"
        },
        {
          "number": "000000008",
          "status": "APPROVAL_REQUIRED"
        }
      ],
      "errors": []
    }
  }
}
```

