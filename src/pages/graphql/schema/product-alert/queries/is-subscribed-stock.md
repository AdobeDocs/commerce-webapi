---
title: isSubscribedProductAlertStock query
description: The isSubscribedProductAlertStock query checks whether the logged-in customer is subscribed to a back-in-stock alert for a product.
---

# isSubscribedProductAlertStock query

The `isSubscribedProductAlertStock` query returns whether the logged-in customer is currently subscribed to a back-in-stock alert for the specified product.

This query requires a valid [customer authentication token](../../customer/mutations/generate-token.md).

<InlineAlert variant="info" slots="text1" />

This query is part of the Storefront Compatibility Package and is only available on [Adobe Commerce as a Cloud Service](https://experienceleague.adobe.com/en/docs/commerce/cloud-service/overview) and [PaaS(With ACO License)](https://experienceleague.adobe.com/en/docs/commerce/optimizer/get-started).

## Syntax

```graphql
query {
  isSubscribedProductAlertStock(input: ProductAlertStockInput!) {
    isSubscribed
    message
  }
}
```

## Example usage

The following example checks whether the logged-in customer is subscribed to a back-in-stock alert for a product with SKU `MH01-XS-Black`.

**Request:**

```graphql
query {
  isSubscribedProductAlertStock(input: { sku: "MH01-XS-Black" }) {
    isSubscribed
    message
  }
}
```

**Response:**

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

## Input attributes

The `ProductAlertStockInput` object contains the following attribute:

| Attribute | Data type | Description |
| --- | --- | --- |
| `sku` | String! | The SKU of the product to check the back-in-stock alert subscription status for. |

## Output attributes

The `IsProductAlertSubscriptionResult` object contains the following attributes:

| Attribute | Data type | Description |
| --- | --- | --- |
| `isSubscribed` | Boolean! | Indicates whether the customer is currently subscribed to a back-in-stock alert for the product. |
| `message` | String | A message describing the current subscription status. |

## Errors

| Error | Description |
| --- | --- |
| `Customer is not logged in.` | The request did not include a valid customer authentication token. |
| `Required parameter "sku" is missing.` | The `sku` field was not provided in the input. |
| `Product with SKU "%1" does not exist.` | No product was found matching the provided SKU. |
