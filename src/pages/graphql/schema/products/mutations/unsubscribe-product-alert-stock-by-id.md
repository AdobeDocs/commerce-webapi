---
title: unsubscribeProductAlertStockById mutation
description: The unsubscribeProductAlertStockById mutation cancels one of the logged-in customer's stock availability alert subscriptions by its UID.
---

# unsubscribeProductAlertStockById mutation

<Fragment src="/_includes/scp-mutation.md" />

The `unsubscribeProductAlertStockById` mutation cancels one of the logged-in customer's stock availability alert subscriptions. After cancelling, the customer no longer receives an email notification when the product comes back in stock.

Use the [`customerProductAlertStockSubscriptions` query](../queries/customer-product-alert-stock-subscriptions.md) to retrieve the `uid` of the subscription. The `uid` is an opaque value that changes between requests. Always use a `uid` from a recent response.

Unlike the [`unsubscribeProductAlertStock` mutation](unsubscribe-product-alert-stock.md), which identifies the product by SKU, this mutation can also cancel subscriptions to products that are no longer available on the storefront, such as disabled products.

This mutation requires a valid [customer authentication token](../../customer/mutations/generate-token.md).

## Syntax

```graphql
mutation {
  unsubscribeProductAlertStockById(
    subscriptionUid: ID!
  ): UnsubscribeProductAlertStockByIdOutput!
}
```

[//]: # (## Reference)
[//]: # ()
[//]: # (The [`unsubscribeProductAlertStockById`]&#40;/reference/graphql/saas/index.md#unsubscribeproductalertstockbyid&#41; reference provides detailed information about the types and fields defined in this mutation.)

## Input attributes

| Attribute | Data type | Description |
| --- | --- | --- |
| `subscriptionUid` | ID! | The `uid` of the subscription, as returned by the `customerProductAlertStockSubscriptions` query. |

## Output attributes

The `UnsubscribeProductAlertStockByIdOutput` object contains the following attributes.

| Attribute | Data type | Description |
| --- | --- | --- |
| `message` | String | A message describing the result. |
| `success` | Boolean! | Indicates whether the subscription was cancelled. |

## Example usage

The following example cancels one of the logged-in customer's stock alert subscriptions.

**Request:**

```graphql
mutation {
  unsubscribeProductAlertStockById(
    subscriptionUid: "MDozOnNkeERKZDJqRmdMSWM4WGhBSDh0dWRIMWc5Lzdkb2h2SzhERXdFMHdnTkFEdlhHTmxmME1ETk9QTk13NnNmRHk3QT09"
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
    "unsubscribeProductAlertStockById": {
      "success": true,
      "message": "You will no longer receive stock alerts for this product."
    }
  }
}
```

## Errors

| Error | Description |
| --- | --- |
| `Customer is not logged in.` | The request does not include a valid customer authentication token. |
| `Could not find a stock alert subscription with the specified UID.` | The `uid` is invalid, the subscription does not exist or was already cancelled, or it belongs to another customer. |

## Related topics

*  [`customerProductAlertStockSubscriptions` query](../queries/customer-product-alert-stock-subscriptions.md)
*  [`subscribeProductAlertStock` mutation](subscribe-product-alert-stock.md)
*  [`unsubscribeProductAlertStock` mutation](unsubscribe-product-alert-stock.md)
*  [`unsubscribeProductAlertStockAll` mutation](unsubscribe-product-alert-stock-all.md)
