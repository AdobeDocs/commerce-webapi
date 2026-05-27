---
title: unsubscribeProductAlertPrice mutation
edition: saas
---

# unsubscribeProductAlertPrice mutation

The `unsubscribeProductAlertPrice` mutation removes the logged-in customer's subscription to a price drop alert for the specified product. After unsubscribing, the customer no longer receives email notifications when the product price decreases.

This mutation requires a valid [customer authentication token](../../customer/mutations/generate-token.md).

## Syntax

```graphql
mutation {
  unsubscribeProductAlertPrice(
    input: ProductAlertPriceInput!
  ): ProductAlertSubscriptionResult
}
```

## Reference

The [`unsubscribeProductAlertPrice`](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-unsubscribeProductAlertPrice) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example unsubscribes the logged-in customer from the price alert for the product with SKU `ADB115`.

**Request:**

```graphql
mutation {
  unsubscribeProductAlertPrice(
    input: { sku: "ADB115" }
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
    "unsubscribeProductAlertPrice": {
      "success": true,
      "message": "You saved the alert subscription."
    }
  }
}
```

## Output attributes

The `ProductAlertSubscriptionResult` object returns the following attributes:

Attribute | Data type | Description
--- | --- | ---
`success` | Boolean! | Indicates whether the unsubscription was successful
`message` | String | A message confirming the unsubscription action

## Errors

Error | Description
--- | ---
`Customer is not logged in.` | The request does not include a valid customer authentication token.
`Required parameter "sku" is missing.` | The `sku` field was not provided in the input.
`Unable to subscribe to price alert. No such entity.` | No product exists with the specified SKU.
`Unable to unsubscribe to price alert` | An internal error occurred while removing the subscription.

## Related topics

*  [`isSubscribedProductAlertPrice` query](../queries/is-subscribed-product-alert-price.md)
*  [`subscribeProductAlertPrice` mutation](subscribe-product-alert-price.md)
*  [`unsubscribeProductAlertPriceAll` mutation](unsubscribe-product-alert-price-all.md)
