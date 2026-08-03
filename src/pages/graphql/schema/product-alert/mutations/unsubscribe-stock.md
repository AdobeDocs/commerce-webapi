---
title: unsubscribeProductAlertStock mutation
description: The unsubscribeProductAlertStock mutation removes a logged-in customer's back-in-stock alert subscription for a product.
---

# unsubscribeProductAlertStock mutation

The `unsubscribeProductAlertStock` mutation removes the logged-in customer's back-in-stock alert subscription for the specified product.

This mutation requires a valid [customer authentication token](../../customer/mutations/generate-token.md).

## Syntax

```graphql
mutation {
  unsubscribeProductAlertStock(input: ProductAlertStockInput!) {
    success
    message
  }
}
```

## Example usage

The following example removes the logged-in customer's back-in-stock alert subscription for a product with SKU `MH01-XS-Black`.

**Request:**

```graphql
mutation {
  unsubscribeProductAlertStock(input: { sku: "MH01-XS-Black" }) {
    success
    message
  }
}
```

**Response:**

```json
{
  "data": {
    "unsubscribeProductAlertStock": {
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
| `sku` | String! | The SKU of the product to unsubscribe from back-in-stock alerts for. |

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
