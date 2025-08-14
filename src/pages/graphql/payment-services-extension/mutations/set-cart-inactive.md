---
title: setCartAsInactive mutation
---

# setCartAsInactive mutation

The `setCartAsInactive` mutation sets a specific `cartId` as inactive. It is recommended to be used in case of an error, or cancel callback of an Apple Pay specific payment flow, to avoid having multiple active carts for logged-in customers created with the [`AddProductsToNewCart`](add-products-new-cart.md) mutation.

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
