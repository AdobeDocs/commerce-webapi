---
title: unsubscribeProductAlertPrice mutation
description: The unsubscribeProductAlertPrice mutation removes a logged-in customer's price-drop alert subscription for a product.
---

# unsubscribeProductAlertPrice mutation

The `unsubscribeProductAlertPrice` mutation removes the logged-in customer's price-drop alert subscription for the specified product.

This mutation requires a valid [customer authentication token](../../customer/mutations/generate-token.md).

<InlineAlert variant="info" slots="text1" />

This mutation is part of the Storefront Compatibility Package and is only available on [Adobe Commerce as a Cloud Service](https://experienceleague.adobe.com/en/docs/commerce/cloud-service/overview) and [PaaS(With ACO License)](https://experienceleague.adobe.com/en/docs/commerce/optimizer/get-started).

## Syntax

```graphql
mutation {
  unsubscribeProductAlertPrice(input: ProductAlertPriceInput!) {
    success
    message
  }
}
```

## Example usage

The following example removes the logged-in customer's price-drop alert subscription for a product with SKU `MH01-XS-Black`.

**Request:**

```graphql
mutation {
  unsubscribeProductAlertPrice(input: { sku: "MH01-XS-Black" }) {
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

## Input attributes

The `ProductAlertPriceInput` object contains the following attribute:

| Attribute | Data type | Description |
| --- | --- | --- |
| `sku` | String! | The SKU of the product to unsubscribe from price-drop alerts for. |

## Output attributes

The `ProductAlertSubscriptionResult` object contains the following attributes:

| Attribute | Data type | Description |
| --- | --- | --- |
| `success` | Boolean! | Indicates whether the unsubscription was successful. |
| `message` | String | A message describing the result of the unsubscription action. |

## Errors

| Error | Description |
| --- | --- |
| `Customer is not logged in.` | The request did not include a valid customer authentication token. |
| `Required parameter "sku" is missing.` | The `sku` field was not provided in the input. |
| `Product with SKU "%1" does not exist.` | No product was found matching the provided SKU. |
