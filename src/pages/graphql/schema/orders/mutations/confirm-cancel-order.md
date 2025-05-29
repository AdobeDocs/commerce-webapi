---
title: confirmCancelOrder mutation
---

# confirmCancelOrder mutation

The `confirmCancelOrder` mutation allows a guest customer to cancel an order by passing its encoded identifier and a confirmation key.

A guest customer can cancel an order only if the following conditions are true:

 * The guest customer has previously placed the order.
 * The `order_cancellation_enabled` configuration setting is `true`.
 * The order has a status of **RECEIVED**, **PENDING**, or **PROCESSING**.

If the guest customer has been charged for the order, the order is placed in the CLOSED state, and the user will be issued a refund. Otherwise, the status of the order is set to CANCELED.

The mutation returns an error if the order cannot be cancelled.

## Syntax

`mutation: { confirmCancelOrder(input: ConfirmCancelOrderInput!) {CancelOrderOutput}}`

## Reference

The [`confirmCancelOrder`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-confirmCancelOrder) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example cancels order ID `Nzg=` and includes the confirmation key.

**Request:**

```graphql
mutation {
    confirmCancelOrder(
        input: {
            order_id: "Nzg=",
            confirmation_key: "z4ge1luFSkEes7VIO2aUa832LmGWNmu8"
        }
    ){
        error
        errorV2 {
            code
            message
        }
        order {
            status
        }
    }
}
```

**Response:**

```json
{
  "data": {
    "confirmCancelOrder": {
      "error": null,
      "errorV2": null,
      "order": {
        "status": "Canceled"
      }
    }
  }
}
```

## Related topics

 * [order cancellation](/src/pages/graphql/schema/store/queries/store-config.md#query-a-stores-order-cancellation-configuration) configuration example on `storeConfig` page.
