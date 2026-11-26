---
title: customerProductAlertStockSubscriptions query
description: The customerProductAlertStockSubscriptions query returns the logged-in customer's active stock availability alert subscriptions, newest first.
---

# customerProductAlertStockSubscriptions query

<Fragment src="/_includes/scp-query.md" />

The `customerProductAlertStockSubscriptions` query returns the logged-in customer's active stock availability alert subscriptions on the current website, newest first. A subscription is active until the customer is notified that the product is back in stock or the subscription is cancelled.

Each subscription returns the exact SKU the customer subscribed to. For configurable products, a variant SKU identifies a variant-level subscription. The query does not return other product information. Use the Catalog Service [`products` query](../../catalog-service/queries/products.md) to retrieve product details, such as name, image, and price, by SKU.

Use the subscription `uid` with the [`unsubscribeProductAlertStockById` mutation](../mutations/unsubscribe-product-alert-stock-by-id.md) to cancel a single subscription. The `uid` is an opaque value that changes between requests. Always use a `uid` from a recent response.

This query requires a valid [customer authentication token](../../customer/mutations/generate-token.md).

## Syntax

```graphql
{
  customerProductAlertStockSubscriptions(
    currentPage: Int = 1
    pageSize: Int = 20
  ): CustomerProductAlertStockSubscriptions!
}
```

[//]: # (## Reference)
[//]: # ()
[//]: # (The [`customerProductAlertStockSubscriptions`]&#40;/reference/graphql/saas/index.md#customerproductalertstocksubscriptions&#41; reference provides detailed information about the types and fields defined in this query.)

## Input attributes

| Attribute | Data type | Description |
| --- | --- | --- |
| `currentPage` | Int | Specifies which page of results to return. The default value is `1`. |
| `pageSize` | Int | Specifies the maximum number of results to return at once. The default value is `20`. |

## Output attributes

The `CustomerProductAlertStockSubscriptions` object contains the following attributes.

| Attribute | Data type | Description |
| --- | --- | --- |
| `items` | [[ProductAlertStockSubscription!]!](#productalertstocksubscription-attributes) | The stock alert subscriptions for the current page. |
| `page_info` | SearchResultPageInfo! | Pagination metadata. |
| `total_count` | Int! | The total number of active stock alert subscriptions of the customer. |

### ProductAlertStockSubscription attributes

| Attribute | Data type | Description |
| --- | --- | --- |
| `sku` | String! | The exact SKU the customer subscribed to. |
| `status` | ProductAlertStockSubscriptionStatus! | The status of the subscription. The only value is `ACTIVE`, which indicates that the customer has not been notified yet. |
| `subscribed_at` | String! | The date and time the subscription was created, in UTC. |
| `uid` | ID! | The opaque unique ID of the subscription. |

## Example usage

The following example returns the first page of the logged-in customer's stock alert subscriptions.

**Request:**

```graphql
{
  customerProductAlertStockSubscriptions(currentPage: 1, pageSize: 20) {
    total_count
    page_info {
      current_page
      page_size
      total_pages
    }
    items {
      uid
      sku
      status
      subscribed_at
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "customerProductAlertStockSubscriptions": {
      "total_count": 2,
      "page_info": {
        "current_page": 1,
        "page_size": 20,
        "total_pages": 1
      },
      "items": [
        {
          "uid": "MDozOnNkeERKZDJqRmdMSWM4WGhBSDh0dWRIMWc5Lzdkb2h2SzhERXdFMHdnTkFEdlhHTmxmME1ETk9QTk13NnNmRHk3QT09",
          "sku": "MH01-XS-Black",
          "status": "ACTIVE",
          "subscribed_at": "2026-11-24 13:44:29"
        },
        {
          "uid": "MDozOmk5bXBKTXRSR3JWb09jWkxoZllwSUR0dXJPNXI0eHoyWjR1M0ZETXg3VzlDa0cwVVJXV0RLT0QwL0lYY2RhNTkwQT09",
          "sku": "ADB111",
          "status": "ACTIVE",
          "subscribed_at": "2026-11-20 09:12:05"
        }
      ]
    }
  }
}
```

## Errors

| Error | Description |
| --- | --- |
| `Customer is not logged in.` | The request does not include a valid customer authentication token. |
| `currentPage value must be greater than 0.` | The `currentPage` value is less than `1`. |
| `pageSize value must be greater than 0.` | The `pageSize` value is less than `1`. |

## Related topics

*  [`unsubscribeProductAlertStockById` mutation](../mutations/unsubscribe-product-alert-stock-by-id.md)
*  [`isSubscribedProductAlertStock` query](is-subscribed-product-alert-stock.md)
*  [`subscribeProductAlertStock` mutation](../mutations/subscribe-product-alert-stock.md)
*  [`unsubscribeProductAlertStockAll` mutation](../mutations/unsubscribe-product-alert-stock-all.md)
