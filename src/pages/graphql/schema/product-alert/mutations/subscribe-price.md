---
title: subscribeProductAlertPrice mutation
description: The subscribeProductAlertPrice mutation subscribes a logged-in customer to a price-drop alert for a product.
---

# subscribeProductAlertPrice mutation

The `subscribeProductAlertPrice` mutation subscribes the logged-in customer to a price-drop alert for the specified product. When the product's price decreases, the customer receives an email notification.

This mutation requires a valid [customer authentication token](../../customer/mutations/generate-token.md).

## Syntax

```graphql
mutation {
  subscribeProductAlertPrice(input: ProductAlertPriceInput!) {
    success
    message
  }
}
```

## Example usage

The following example subscribes the logged-in customer to a price-drop alert for a product with SKU `MH01-XS-Black`.

**Request:**

```graphql
mutation {
  subscribeProductAlertPrice(input: { sku: "MH01-XS-Black" }) {
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

## Input attributes

The `ProductAlertPriceInput` object contains the following attribute:

| Attribute | Data type | Description |
| --- | --- | --- |
| `sku` | String! | The SKU of the product to subscribe to price-drop alerts for. |

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
