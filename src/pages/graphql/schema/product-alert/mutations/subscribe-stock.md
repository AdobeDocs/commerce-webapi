---
title: subscribeProductAlertStock mutation
description: The subscribeProductAlertStock mutation subscribes a logged-in customer to a back-in-stock alert for a product.
---

# subscribeProductAlertStock mutation

The `subscribeProductAlertStock` mutation subscribes the logged-in customer to a back-in-stock alert for the specified product. When the product becomes available, the customer receives an email notification.

This mutation requires a valid [customer authentication token](../../customer/mutations/generate-token.md).

This mutation is part of the Storefront Compatibility Package and is only available on [Adobe Commerce as a Cloud Service](https://experienceleague.adobe.com/en/docs/commerce/cloud-service/overview) and [PaaS(With ACO License)](https://experienceleague.adobe.com/en/docs/commerce/optimizer/get-started).

## Syntax

```graphql
mutation {
  subscribeProductAlertStock(input: ProductAlertStockInput!) {
    success
    message
  }
}
```

## Example usage

The following example subscribes the logged-in customer to a back-in-stock alert for a product with SKU `MH01-XS-Black`.

**Request:**

```graphql
mutation {
  subscribeProductAlertStock(input: { sku: "MH01-XS-Black" }) {
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

## Input attributes

The `ProductAlertStockInput` object contains the following attribute:

| Attribute | Data type | Description |
| --- | --- | --- |
| `sku` | String! | The SKU of the product to subscribe to back-in-stock alerts for. |

## Output attributes

The `ProductAlertSubscriptionResult` object contains the following attributes:

| Attribute | Data type | Description |
| --- | --- | --- |
| `success` | Boolean! | Indicates whether the subscription was successful. |
| `message` | String | A message describing the result of the subscription action. |

## Errors

| Error | Description |
| --- | --- |
| `Customer is not logged in.` | The request did not include a valid customer authentication token. |
| `Required parameter "sku" is missing.` | The `sku` field was not provided in the input. |
| `Product with SKU "%1" does not exist.` | No product was found matching the provided SKU. |
