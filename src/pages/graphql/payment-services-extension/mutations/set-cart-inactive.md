---
title: setCartAsInactive mutation
description: This mutation marks a cart as inactive in Payment Services, helping prevent multiple active carts for logged-in customers during specific payment flows.
---

# setCartAsInactive mutation

<InlineAlert variant="info" slots="text" />

This mutation is available only if you have installed [Payment Services for Adobe Commerce](https://commercemarketplace.adobe.com/magento-payment-services.html) 2.12.0 or higher.

The `setCartAsInactive` mutation sets a specific `cartId` as inactive. Use this mutation when a payment error occurs, or when a shopper cancels a payment flow, after the [`addProductsToNewCart`](add-products-new-cart.md) mutation returns a `cartId`. This mutation helps prevent a customer having multiple active carts created with the [`addProductsToNewCart`](add-products-new-cart.md) mutation.

See the [`addProductsToNewCart` mutation use case](add-products-new-cart.md#use-case-smart-button-on-the-product-details-page-pdp) for more information about a common workflow for the `setCartAsInactive` mutation.

## Syntax

```graphql
mutation {
    setCartAsInactive(
        cartId: String!
    ): SetCartAsInactiveOutput
    }
```

## Reference

The [`setCartAsInactive`](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-setCartAsInactive) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following examples show responses to the `setCartAsInactive` mutation.

**Request:**

```graphql
mutation {
    setCartAsInactive(
        cartId: "gVFVNBSJPt7L6uCQis4Q1ryj6DQtcwM2"
    ) {
           success
           error 
        }
    }
```

### Set cart as inactive (success)

The following response example shows what the mutation returns when `setCartAsInactive` is successful, and no error.

**Response:**

```json
{
    "data": {
        "setCartAsInactive": {
            "success": true,
            "error": null
        }
    }
}
```

### Set cart as inactive (failure)

The following example response indicates the mutation failed due to a non-existent `cartId`.

**Response:**

```json
{
    "data": {
        "setCartAsInactive": {
            "success": false,
            "error": "Error when setting the cart gVFVNBSJPt7L6uCQis4Q1ryj6QtcwM2 as inactive - No such entity with cartId = null "
        }
    }
}
```
