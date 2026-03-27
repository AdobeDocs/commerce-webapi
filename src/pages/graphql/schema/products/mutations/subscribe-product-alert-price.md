---
title: subscribeProductAlertPrice mutation
edition: saas
---

# subscribeProductAlertPrice mutation

The `subscribeProductAlertPrice` mutation subscribes the logged-in customer to a price drop alert for the specified product. When the product price decreases, the customer receives an email notification.

This mutation requires a valid [customer authentication token](../../customer/mutations/generate-token.md).

## Syntax

```graphql
mutation {
  subscribeProductAlertPrice(
    input: ProductAlertPriceInput!
  ): ProductAlertSubscriptionResult
}
```

<!--
## Reference

The [`subscribeProductAlertPrice`](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-subscribeProductAlertPrice) reference provides detailed information about the types and fields defined in this mutation.
-->

## Example usage

The following example subscribes the logged-in customer to a price alert for the product with SKU `ADB112`.

**Request:**

```graphql
mutation {
  subscribeProductAlertPrice(
    input: { sku: "ADB112" }
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
    "subscribeProductAlertPrice": {
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
`Unable to subscribe to price alert` | An internal error occurred while creating the subscription.

## Related topics

*  [`isSubscribedProductAlertPrice` query](../queries/is-subscribed-product-alert-price.md)
*  [`unsubscribeProductAlertPrice` mutation](unsubscribe-product-alert-price.md)
*  [`unsubscribeProductAlertPriceAll` mutation](unsubscribe-product-alert-price-all.md)
*  [`subscribeProductAlertStock` mutation](subscribe-product-alert-stock.md)
