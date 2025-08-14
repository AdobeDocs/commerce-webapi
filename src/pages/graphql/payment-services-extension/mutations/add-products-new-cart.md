---
title: addProductsToNewCart mutation
description: This mutation creates a new cart and payment order in Payment Services, supporting guest and logged-in customers during checkout flows.
---

# addProductsToNewCart mutation

<InlineAlert variant="info" slots="text" />

This mutation is available only if you have installed [Payment Services for Adobe Commerce](https://commercemarketplace.adobe.com/magento-payment-services.html) 2.12.0 or higher.

The `addProductsToNewCart` mutation always creates a new cart for guest, or logged-in customers, as opposite to the `addProductsToCart` mutation when a the customer is already logged-in, it was not possible to create a new cart.

>[!NOTE]
>
> For a logged-in customer, the customer token is passed in the [Authorization header](https://developer.adobe.com/commerce/webapi/graphql/usage/authorization-tokens/#customer-tokens).

The `addProductsToNewCart` mutation creates a new cart and adds the items, then returns the Cart ID.

You must specify the Cart ID along with the list of SKU and quantity pairs as parameters to add the products to the shopping cart.

It is important to use the [`setCartAsInactive`](set-cart-inactive.md) mutation with the `addProductsToNewCart` mutation in case on error, or cancel of the payment flow, to avoid having multiple active carts for logged-in customers.

## Syntax

```graphql
mutation {
    addProductsToNewCart(
        cartItems [
        {
            quantity
            sku
        }
        ]
    ) {
        cart {
            id
        }
        user_errors {
            code
            message
        }
    }
}
```

## Reference

The `addProductsToNewCart` mutation reference is based in the [`addProductsToCart`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-addProductsToCart) reference, which provides detailed information about the types and fields defined in this mutation.

## Example usage

These examples show when the `addProductsToNewCart` mutation return a success, or errors, when adding a product to a new cart for logged-in customers.

### Create a new cart returns success

The following example adds a simple product to a new cart succesfully, returning a [Cart](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-Cart) object.

**Request:**

```graphql
mutation {
    addProductsToNewCart(
        cartItems: [
        {
            quantity: 1
            sku: "24-MB04"
        }
        ]
    ) {
        cart {
            id
        }
        user_errors {
            code
            message
        }
    }
}
```

**Response:**

```json
{
    "data": {
        "addProductsToNewCart": {
            "cart": {
                "id": "848QJWDI9WJr0LrIz3n6lRdJQkoGRGYf"
            },
            "user_errors": null
        }
    }
}
```

### Create a new cart returns fails

The following example fails to add a simple product to a new cart, returning a [CartUserInputError](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-CartUserInputError) object.

**Request:**

```graphql
mutation {
    addProductsToNewCart(
        cartItems: [
        {
            quantity: 1
            sku: "24-MB04"
        }
        ]
    ) {
        cart {
            id
        }
        user_errors {
            code
            message
        }
    }
}
```

**Response:**

```json
{
    "data": {
        "addProductsToNewCart": {
            "cart": null,
            "user_errors": [
                {
                    "code": "PRODUCT_NOT_FOUND",
                    "message": "Could not find a product with SKU \"24-MB0ee4\""
                }
            ]
        }
    }
}
```
