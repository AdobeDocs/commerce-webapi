---
title: addProductsToNewCart mutation
description: This mutation creates a new cart in Payment Services, supporting guest and logged-in customers in the Product Details Page (PDP).
---

# addProductsToNewCart mutation

<InlineAlert variant="info" slots="text" />

This mutation is available only if you have installed [Payment Services for Adobe Commerce](https://commercemarketplace.adobe.com/magento-payment-services.html) 2.12.0 or higher.

The `addProductsToNewCart` mutation always creates a new cart for the shopper then adds the specified products to that cart. This contrasts with the `addProductsToCart` mutation, which requires you to specify an existing cart ID as input.

>[!NOTE]
>
> For a logged-in customer, the customer token is passed in the [Authorization header](../../usage/authorization-tokens.md#customer-tokens).

## Use case: smart button on the Product Details Page (PDP)

1. When a shopper clicks a smartbutton on the Product Details Page (PDP), the `addProductsToNewCart` mutation creates a new cart and adds the items, then returns a `cart` object, which includes the `cart ID` field.

1. It is recommended to use the [`setCartAsInactive`](set-cart-inactive.md) mutation after the `addProductsToNewCart` mutation is successful, in case of an error during the payment process, or the shopper cancelling the payment process in the PDP, to avoid having multiple active carts for logged-in customers.

1. If the shopper clicks the smartbutton again, `addProductsToNewCart` mutation runs once more to return a new `cart` object.

## Syntax

```graphql
mutation {
addProductsToNewCart(
        cartItems: [CartItemInput!]!
    ): AddProductsToNewCartOutput 
}
```

## Reference

The `addProductsToNewCart` mutation reference is based on the [`addProductsToCart`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-addProductsToCart) reference, which provides detailed information about the types and fields defined in the mutation.

## Example usage

These examples show when the `addProductsToNewCart` mutation returns a successful, or error message, when creating a new cart in the PDP.

### Create a new cart (success)

The following example adds a simple product to a new cart successfully, returning a [Cart](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-Cart) object.

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

### Create a new cart (failure)

The following example fails to create a new cart beccause the `sku` does not exist in the catalog. It returns a [CartUserInputError](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-CartUserInputError) object.

**Request:**

```graphql
mutation {
    addProductsToNewCart(
        cartItems: [
        {
            quantity: 1
            sku: "24-MB0ee4"
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
