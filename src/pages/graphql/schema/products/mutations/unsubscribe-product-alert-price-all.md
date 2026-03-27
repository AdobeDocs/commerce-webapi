---
title: unsubscribeProductAlertPriceAll mutation
edition: saas
---

# unsubscribeProductAlertPriceAll mutation

The `unsubscribeProductAlertPriceAll` mutation removes all price drop alert subscriptions for the logged-in customer across the current website. After calling this mutation, the customer no longer receives any price alert email notifications.

This mutation requires a valid [customer authentication token](../../customer/mutations/generate-token.md).

## Syntax

```graphql
mutation {
  unsubscribeProductAlertPriceAll: ProductAlertSubscriptionResult
}
```

## Reference

The [`unsubscribeProductAlertPriceAll`](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-unsubscribeProductAlertPriceAll) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example removes all price alert subscriptions for the logged-in customer.

**Request:**

```graphql
mutation {
  unsubscribeProductAlertPriceAll {
    success
    message
  }
}
```

**Response:**

```json
{
  "data": {
    "unsubscribeProductAlertPriceAll": {
      "success": true,
      "message": "You will no longer receive price alerts."
    }
  }
}
```

## Errors

Error | Description
--- | ---
`Customer is not logged in.` | The request does not include a valid customer authentication token.
`Unable to unsubscribe to all price alerts` | An internal error occurred while removing the subscriptions.

## Related topics

*  [`isSubscribedProductAlertPrice` query](../queries/is-subscribed-product-alert-price.md)
*  [`subscribeProductAlertPrice` mutation](subscribe-product-alert-price.md)
*  [`unsubscribeProductAlertPrice` mutation](unsubscribe-product-alert-price.md)
*  [`unsubscribeProductAlertStockAll` mutation](unsubscribe-product-alert-stock-all.md)
