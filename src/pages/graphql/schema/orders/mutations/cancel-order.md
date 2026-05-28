---
title: cancelOrder mutation | Commerce Web APIs
description: The cancelOrder mutation allows a customer to cancel an order, passing its encoded order id and a cancellation reason.
---

# cancelOrder mutation

The `cancelOrder` mutation allows a customer to cancel an order, passing its encoded order id and a cancellation reason.

A customer can cancel an order only if the following conditions are true:

 * The customer has previously placed the order.
 * The `order_cancellation_enabled` configuration setting is `true`.
 * The order has a status of **RECEIVED**, **PENDING**, or **PROCESSING**.

If the customer has been charged for the order, the order is placed in the CLOSED state, and the customer will be issued a refund. Otherwise, the status of the order is set to CANCELED.

The mutation returns an error if the order cannot be cancelled.

## Syntax

`mutation: {cancelOrder(input: CanceOrderInput!) {CancelOrderOutput}}`

## Reference

The `cancelOrder` reference provides detailed information about the types and fields defined in this mutation.

* [SaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-cancelOrder)

* [PaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-cancelOrder)

## Example usage

The following example cancels order ID `Nzg=` and includes the reason for its cancellation.

**Request:**

```graphql
mutation {
    cancelOrder(
        input: {
            order_id: "Nzg=",
            reason: "The order was placed by mistake"
        }
    ){
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
    "cancelOrder": {
      "errorV2": null,
      "order": {
        "status": "Canceled"
      }
    }
  }
}
```

## Related topics

 * [order cancellation](../../store/queries/store-config.md#query-a-stores-order-cancellation-configuration) configuration example on `storeConfig` page.
