---
title: subscribeProductAlertPrice mutation
description: The subscribeProductAlertPrice mutation subscribes the logged-in customer to a price drop alert for the specified product. When the product price decreases...

---

# subscribeProductAlertPrice mutation

<InlineAlert variant="info" slots="text1"/>

This mutation is part of the Storefront Compatibility Package and is available on [Adobe Commerce as a Cloud Service](https://experienceleague.adobe.com/en/docs/commerce/cloud-service/overview) and [Adobe Commerce Optimizer](https://experienceleague.adobe.com/en/docs/commerce/aco-optimizer-connector/overview) on Adobe Commerce on Cloud or on-premises.

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

## Reference

The [`subscribeProductAlertPrice`](/reference/graphql/saas/mutations.md#subscribeproductalertprice) reference provides detailed information about the types and fields defined in this mutation.

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

| Error | Description |
| --- | --- |
| `Customer is not logged in.` | The request does not include a valid customer authentication token. |
| `Required parameter "sku" is missing.` | The `sku` field was not provided in the input. |
| `Unable to subscribe to price alert. No such entity.` | No product exists with the specified SKU. |
| `Unable to subscribe to price alert` | An internal error occurred while creating the subscription. |

## Related topics

*  [`isSubscribedProductAlertPrice` query](../queries/is-subscribed-product-alert-price.md)
*  [`unsubscribeProductAlertPrice` mutation](unsubscribe-product-alert-price.md)
*  [`unsubscribeProductAlertPriceAll` mutation](unsubscribe-product-alert-price-all.md)
*  [`subscribeProductAlertStock` mutation](subscribe-product-alert-stock.md)
