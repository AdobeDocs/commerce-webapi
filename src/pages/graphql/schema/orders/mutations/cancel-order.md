---
title: cancelOrder mutation | Commerce Web APIs
---

# cancelOrder mutation

The `cancelOrder` mutation allows the owner of the order and admin users to cancel an order, passing an order identifier and a cancellation reason.

Orders can only be cancelled if `order_cancellation_enabled` config is `true` and if they are in status *RECEIVED* or *PENDING*. If any charge has been done to the customer, the order will be refunded.

The mutation returns an error if the order cannot be cancelled.

## Syntax

`mutation: {cancelOrder(input: CanceOrderInput!) {CancelOrderOutput}}`

## Example usage

The following example cancels the order with id `99999999` providing a reason for its cancellation.

**Request:**

```graphql
mutation{
    cancelOrder(
        input: {
            order_id: "99999999",
            reason: "The order was placed by mistake"
        }
    ) {
        status
    }
}
```

**Response:**

```json
{
  "data": {
    "cancelOrder": {
      "status": "canceled"
    }
  }
}
```

## Reference

The [`cancelOrder`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-cancelOrder) reference provides detailed information about the types and fields defined in this mutation.

## Related topics

-  [order cancellation](/src/pages/graphql/schema/store/queries/store-config.md#query-a-stores-order-cancellation-configuration) configuration example on `storeConfig` page.
