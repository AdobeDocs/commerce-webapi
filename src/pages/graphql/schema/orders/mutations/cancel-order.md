---
title: cancelOrder mutation | Commerce Web APIs
---

# cancelOrder mutation

The `cancelOrder` mutation allows the owner of the order and admin users to cancel an order, passing an order number and a cancellation reason.

Orders can only be cancelled if `order_cancellation_enabled` config is `true` and if they are in status *RECEIVED*, *PENDING* or *PROCESSING*. If any charge has been done to the customer, the order will be refunded.

The mutation returns an error if the order cannot be cancelled.

## Syntax

`mutation: {cancelOrder(input: CanceOrderInput!) {CancelOrderOutput}}`

## Example usage

The following example cancels the order with id `99999999` using reason with id `1`.

**Request:**

```graphql
mutation{
    cancelOrder(
        input: {
            order_id: 99999999,
            reason_id: 1
        }
    ) {
        error {
            code
            message
        }
    }
}
```

**Response:**

```json
{
  #tbd
}
```

## Input attributes

The `CancelOrderInput` object contains the following attributes:

Attribute | Data type | Description
--- | --- | ---
`order_id` | ID! | Order ID
`reason_id` | Integer! | Cancellation reason identifier

## Output attributes

The `CancelOrderOutput` object contains the following attributes:

Attribute | Data type | Description
--- | --- | ---
`status` | String | Cancelled order status

## Related topics

-  [order cancellation](/src/pages/graphql/schema/store/queries/store-config.md#query-a-stores-order-cancellation-configuration) configuration example on `storeConfig` page.

