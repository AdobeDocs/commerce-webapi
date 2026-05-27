---
title: unsubscribeProductAlertStock mutation
edition: saas
---

# unsubscribeProductAlertStock mutation

The `unsubscribeProductAlertStock` mutation removes the logged-in customer's subscription to a stock availability alert for the specified product. After unsubscribing, the customer no longer receives email notifications when the product comes back in stock.

This mutation requires a valid [customer authentication token](../../customer/mutations/generate-token.md).

## Syntax

```graphql
mutation {
  unsubscribeProductAlertStock(
    input: ProductAlertStockInput!
  ): ProductAlertSubscriptionResult
}
```

## Reference

The [`unsubscribeProductAlertStock`](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example unsubscribes the logged-in customer from the stock alert for the product with SKU `ADB111`.

**Request:**

```graphql
mutation {
  unsubscribeProductAlertStock(
    input: { sku: "ADB111" }
  ) {
    success
    message
  }
}
```

**Response:**

```json
{
  "data": {
    "unsubscribeProductAlertStock": {
      "success": true,
      "message": "You saved the alert subscription."
    }
  }
}
```

## Errors

Error | Description
--- | ---
`Customer is not logged in.` | The request does not include a valid customer authentication token.
`Required parameter "sku" is missing.` | The `sku` field was not provided in the input.
`Unable to subscribe to price alert. No such entity.` | No product exists with the specified SKU.
`Unable to unsubscribe to stock alert` | An internal error occurred while removing the subscription.

## Related topics

*  [`isSubscribedProductAlertStock` query](../queries/is-subscribed-product-alert-stock.md)
*  [`subscribeProductAlertStock` mutation](subscribe-product-alert-stock.md)
*  [`unsubscribeProductAlertStockAll` mutation](unsubscribe-product-alert-stock-all.md)
