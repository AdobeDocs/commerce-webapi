---
title: approvePurchaseOrders mutation
keywords:
  - B2B
---

import CommerceOnly from '/src/_includes/commerce-only.md'

<CommerceOnly />

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

## Reference

The [`approvePurchaseOrders`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-approvePurchaseOrders) reference provides detailed information about the types and fields defined in this mutation.

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
