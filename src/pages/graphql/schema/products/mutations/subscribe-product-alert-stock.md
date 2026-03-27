---
title: subscribeProductAlertStock mutation
edition: saas
---

# subscribeProductAlertStock mutation

The `subscribeProductAlertStock` mutation subscribes the logged-in customer to a stock availability alert for the specified product. When the product comes back in stock, the customer receives an email notification.

This mutation requires a valid [customer authentication token](../../customer/mutations/generate-token.md).

## Syntax

```graphql
mutation {
  subscribeProductAlertStock(
    input: ProductAlertStockInput!
  ): ProductAlertSubscriptionResult
}
```

<!--
## Reference

The [`subscribeProductAlertStock`](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-subscribeProductAlertStock) reference provides detailed information about the types and fields defined in this mutation.
-->

## Example usage

The following example subscribes the logged-in customer to a stock alert for the product with SKU `ADB111`.

**Request:**

```graphql
mutation {
  subscribeProductAlertStock(
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
    "subscribeProductAlertStock": {
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
`Unable to subscribe to stock alert` | An internal error occurred while creating the subscription.

## Related topics

*  [`isSubscribedProductAlertStock` query](../queries/is-subscribed-product-alert-stock.md)
*  [`unsubscribeProductAlertStock` mutation](unsubscribe-product-alert-stock.md)
*  [`unsubscribeProductAlertStockAll` mutation](unsubscribe-product-alert-stock-all.md)
*  [`subscribeProductAlertPrice` mutation](subscribe-product-alert-price.md)
