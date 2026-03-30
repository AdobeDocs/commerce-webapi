---
title: unsubscribeProductAlertStockAll mutation
edition: saas
---

# unsubscribeProductAlertStockAll mutation

The `unsubscribeProductAlertStockAll` mutation removes all stock availability alert subscriptions for the logged-in customer across the current website. After calling this mutation, the customer no longer receives any stock alert email notifications.

This mutation requires a valid [customer authentication token](../../customer/mutations/generate-token.md).

## Syntax

```graphql
mutation {
  unsubscribeProductAlertStockAll: ProductAlertSubscriptionResult
}
```

## Reference

The [`unsubscribeProductAlertStockAll`](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-unsubscribeProductAlertStockAll) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example removes all stock alert subscriptions for the logged-in customer.

**Request:**

```graphql
mutation {
  unsubscribeProductAlertStockAll {
    success
    message
  }
}
```

**Response:**

```json
{
  "data": {
    "unsubscribeProductAlertStockAll": {
      "success": true,
      "message": "You will no longer receive stock alerts."
    }
  }
}
```

## Errors

Error | Description
--- | ---
`Customer is not logged in.` | The request does not include a valid customer authentication token.
`Unable to unsubscribe to all stock alert` | An internal error occurred while removing the subscriptions.

## Related topics

*  [`isSubscribedProductAlertStock` query](../queries/is-subscribed-product-alert-stock.md)
*  [`subscribeProductAlertStock` mutation](subscribe-product-alert-stock.md)
*  [`unsubscribeProductAlertStock` mutation](unsubscribe-product-alert-stock.md)
*  [`unsubscribeProductAlertPriceAll` mutation](unsubscribe-product-alert-price-all.md)
