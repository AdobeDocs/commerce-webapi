---
title: isSubscribedProductAlertPrice query
edition: saas
---

# isSubscribedProductAlertPrice query

The `isSubscribedProductAlertPrice` query checks whether the logged-in customer is subscribed to a price drop alert for the specified product. Use this query to determine whether to show a subscribe or unsubscribe option in the storefront UI.

This query requires a valid [customer authentication token](../../customer/mutations/generate-token.md).

## Syntax

```graphql
{
  isSubscribedProductAlertPrice(
    input: ProductAlertPriceInput!
  ): IsProductAlertSubscriptionResult!
}
```

## Reference

The [`isSubscribedProductAlertPrice`](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#query-isSubscribedProductAlertPrice) reference provides detailed information about the types and fields defined in this query.

## Example usage

The following example checks whether the logged-in customer is subscribed to a price alert for the product with SKU `ADB112`.

**Request:**

```graphql
{
  isSubscribedProductAlertPrice(
    input: { sku: "ADB112" }
  ) {
    isSubscribed
    message
  }
}
```

**Response (subscribed):**

```json
{
  "data": {
    "isSubscribedProductAlertPrice": {
      "isSubscribed": true,
      "message": "You are already subscribed to this product."
    }
  }
}
```

**Response (not subscribed):**

```json
{
  "data": {
    "isSubscribedProductAlertPrice": {
      "isSubscribed": false,
      "message": "You are not subscribed to this product."
    }
  }
}
```

## Errors

Error | Description
--- | ---
`Customer is not logged in.` | The request does not include a valid customer authentication token.
`Required parameter "sku" is missing.` | The `sku` field was not provided in the input.
`Unable to check if subscribed to price alert. No such entity.` | No product exists with the specified SKU.

## Related topics

*  [`isSubscribedProductAlertStock` query](is-subscribed-product-alert-stock.md)
*  [`subscribeProductAlertPrice` mutation](../mutations/subscribe-product-alert-price.md)
*  [`unsubscribeProductAlertPrice` mutation](../mutations/unsubscribe-product-alert-price.md)
