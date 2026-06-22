---
title: confirmCancelOrder mutation
description: The confirmCancelOrder mutation allows a guest shopper to cancel an order by passing its encoded identifier and a confirmation key.
---

# confirmCancelOrder mutation

The `confirmCancelOrder` mutation allows a guest shopper to cancel an order by passing its encoded identifier and a confirmation key.

A guest can cancel an order only if the following conditions are true:

 * The guest previously placed the order.
 * The `order_cancellation_enabled` configuration setting is `true`.
 * The order has a status of **RECEIVED**, **PENDING**, or **PROCESSING**.

If the guest customer has been charged for the order, the order is placed in the CLOSED state, and the user will be issued a refund. Otherwise, the status of the order is set to CANCELED.

The mutation returns an error if the order cannot be cancelled.

## Syntax

`mutation: { confirmCancelOrder(input: ConfirmCancelOrderInput!) {CancelOrderOutput}}`

## Reference

The `confirmCancelOrder` reference provides detailed information about the types and fields defined in this mutation.

* [Adobe Commerce as a Cloud Service](/reference/graphql/saas/index.md#confirmcancelorder)

* [On-Premises/Cloud](/reference/graphql/latest/index.md#confirmcancelorder)

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

 * [`storeConfig` query](../../store/queries/store-config.md#query-a-stores-order-cancellation-configuration) configuration example on `storeConfig` page.
