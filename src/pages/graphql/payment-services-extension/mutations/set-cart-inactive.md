---
title: setCartAsInactive mutation
description: This mutation marks a cart as inactive in Payment Services, helping prevent multiple active carts for logged-in customers during specific payment flows.
---

# setCartAsInactive mutation

<InlineAlert variant="info" slots="text" />

This mutation is available only if you have installed [Payment Services for Adobe Commerce](https://commercemarketplace.adobe.com/magento-payment-services.html) 2.12.0 or higher.

The `setCartAsInactive` mutation sets a specific `cartId` as inactive. Use this mutation when a cart error occurs,  or to cancel callback of an Apple Pay specific payment flow. This mutation helps prevent a customer having multiple active carts created with the [`addProductsToNewCart`](add-products-new-cart.md) mutation.

## Syntax

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

## Example usage

These examples show when the `setCartAsInactive` mutation return a success, or errors, when adding a product to a new cart for logged-in customers.

### Create a new cart returns success

The following response example shows what the mutation returns when adding a simple product to a new cart succesfully, returning a `"success": true`, and no error.

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

### Create a new cart returns fails

The following response example fails to add a simple product to a new cart, returning a `"success": false`, and displaying an error message.

**Response:**

```json
{
    "data": {
        "setCartAsInactive": {
            "success": false,
            "error": "Error when setting the cart gVFVNBSJPt7L6uCQis4Q1ryj6QtcwM2 as inactive - No such entity with cartId = "
        }
    }
}
```
