---
title: isSubscribedProductAlertStock query
description: The isSubscribedProductAlertStock query checks whether the logged-in customer is subscribed to a stock availability alert for the specified product. Use th...

---

# isSubscribedProductAlertStock query

<InlineAlert variant="info" slots="text1"/>

This query is part of the Storefront Compatibility Package and is available on [Adobe Commerce as a Cloud Service](https://experienceleague.adobe.com/en/docs/commerce/cloud-service/overview) and [Adobe Commerce Optimizer](https://experienceleague.adobe.com/en/docs/commerce/aco-optimizer-connector/overview) on Adobe Commerce on Cloud or on-premises.

The `isSubscribedProductAlertStock` query checks whether the logged-in customer is subscribed to a stock availability alert for the specified product. Use this query to determine whether to show a subscribe or unsubscribe option in the storefront UI.

This query requires a valid [customer authentication token](../../customer/mutations/generate-token.md).

## Syntax

```graphql
{
  isSubscribedProductAlertStock(
    input: ProductAlertStockInput!
  ): IsProductAlertSubscriptionResult!
}
```

## Reference

The [`isSubscribedProductAlertStock`](/reference/graphql/saas/index.md#issubscribedproductalertstock) reference provides detailed information about the types and fields defined in this query.

## Example usage

The following example checks whether the logged-in customer is subscribed to a stock alert for the product with SKU `ADB111`.

**Request:**

```graphql
{
  isSubscribedProductAlertStock(
    input: { sku: "ADB111" }
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
    "isSubscribedProductAlertStock": {
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
    "isSubscribedProductAlertStock": {
      "isSubscribed": false,
      "message": "You are not subscribed to this product."
    }
  }
}
```

## Errors

| Error | Description |
| --- | --- |
| `Customer is not logged in.` | The request does not include a valid customer authentication token. |
| `Required parameter "sku" is missing.` | The `sku` field was not provided in the input. |
| `Unable to check if subscribed to stock alert. No such entity.` | No product exists with the specified SKU. |

## Related topics

*  [`isSubscribedProductAlertPrice` query](is-subscribed-product-alert-price.md)
*  [`subscribeProductAlertStock` mutation](../mutations/subscribe-product-alert-stock.md)
*  [`unsubscribeProductAlertStock` mutation](../mutations/unsubscribe-product-alert-stock.md)
