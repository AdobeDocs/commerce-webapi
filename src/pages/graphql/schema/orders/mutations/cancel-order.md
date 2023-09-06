---
title: cancelOrder mutation | Commerce Web APIs
---
import BetaNote from '/src/_includes/graphql/notes/beta.md'

<BetaNote />

# cancelOrder mutation

The `cancelOrder` mutation allows a customer to cancel an order, passing its identifier and a cancellation reason.

A customer can cancel an order only if the following conditions are true:

 * The customer has previously placed the order.
 * The `order_cancellation_enabled` configuration setting is `true`.
 * The order has a status of **RECEIVED** or **PENDING**.

If the customer has been charged for the order, the order is placed in the CLOSED state, and the customer will be issued a refund. Otherwise, the status of the order is set to CANCELED.

The mutation returns an error if the order cannot be cancelled.

## Syntax

`mutation: {cancelOrder(input: CanceOrderInput!) {CancelOrderOutput}}`

## Reference

The [`cancelOrder`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-cancelOrder) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example cancels order ID `99999999` and includes the reason for its cancellation.

**Request:**

```graphql
mutation {
    cancelOrder(
        input: {
            order_id: "99999999",
            reason: "The order was placed by mistake"
        }
    ){
        error
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
    "cancelOrder": {
      "error": null,
      "order": {
        "status": "Canceled"
      }
    }
  }
}
```

## Related topics

 * [order cancellation](/src/pages/graphql/schema/store/queries/store-config.md#query-a-stores-order-cancellation-configuration) configuration example on `storeConfig` page.
