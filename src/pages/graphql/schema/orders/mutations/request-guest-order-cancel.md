---
title: requestGuestOrderCancel mutation
---

# requestGuestOrderCancel mutation

The `requestGuestOrderCancel` mutation allows a guest customer to request for cancelling an order, passing the order token and a cancellation reason.

A guest customer can request for the cancellation of an order only if the following conditions are true:

 * The guest customer has previously placed the order.
 * The `order_cancellation_enabled` configuration setting is `true`.
 * The order has a status of **RECEIVED**, **PENDING**, or **PROCESSING**.

The mutation returns an error if the order cannot be cancelled.

## Syntax

`mutation: { requestGuestOrderCancel(input: GuestOrderCancelInput!) {CancelOrderOutput}}`

## Reference

The [`requestGuestOrderCancel`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-requestGuestOrderCancel) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example cancels order with token `0:3:LCFJT5Gbt1iGgeJJ2PWDA0yAQ+Z7yRZy3Ne7wjxG5QwHGsZgoXm1mACd5EHPZe6V5z9uR48EswbB` and includes the cancellation reason.

**Request:**

```graphql
mutation {
    requestGuestOrderCancel(
        input: {
            reason: "Other",
            token: "0:3:LCFJT5Gbt1iGgeJJ2PWDA0yAQ+Z7yRZy3Ne7wjxG5QwHGsZgoXm1mACd5EHPZe6V5z9uR48EswbB"
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
    "requestGuestOrderCancel": {
      "error": null,
      "errorV2": null,
      "order": {
        "status": "Pending"
      }
    }
  }
}
```

## Related topics

 * [order cancellation](/src/pages/graphql/schema/store/queries/store-config.md#query-a-stores-order-cancellation-configuration) configuration example on `storeConfig` page.
