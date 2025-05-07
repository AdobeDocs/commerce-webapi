---
title: validatePurchaseOrders mutation
---

# validatePurchaseOrders mutation

By default, Adobe Commerce validates purchase orders automatically. However, purchase orders can become stuck in certain circumstances, such as when the message queue system is down and the purchase order is in the PENDING state. You might need to run the `validatePurchaseOrders` mutation to manually validate purchase orders.

You must specify one or more purchase order UIDs as input.

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

## Reference

The [`validatePurchaseOrders`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-validatePurchaseOrders) reference provides detailed information about the types and fields defined in this mutation.

## Headers

A valid [customer authentication token](../../../customer/mutations/generate-token.md) is required.

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
