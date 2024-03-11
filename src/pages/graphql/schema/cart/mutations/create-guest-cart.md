---
title: createGuestCart mutation
---

# createGuestCart mutation

The `createGuestCart` mutation creates an empty shopping cart for a guest shopper. You can allow the system to generate a cart ID, or assign a specific ID.

## Syntax

```graphql
mutation {
  createGuestCart(input: ApplyCouponToCartInput) {
      CreateGuestCartOutput
  }
}
```

## Reference

The `createGuestCart` reference provides detailed information about the types and fields defined in this mutation.

## Example usage

### Create a cart with a randomly-generated cart ID

**Request:**

```graphql
mutation {
  createGuestCart {
      cart {
          id
      }
  }
}
```

**Response:**

The response is the newly created cart.

```json
{
  "data": {
    "createGuestCart": {
      "cart": {
        "id": "4JQaNVJokOpFxrykGVvYrjhiNv9qt31C"
      }
    }
  }
}
```

### Create a guest cart with an assigned cart ID

You can also create a guest cart with a specified `cart_id`.

**Request:**

```graphql
mutation {
    createGuestCart (input: {cart_uid: "x2345678901234567890123456789012"}) {
        cart {
            id
        }
    }
}
```

**Response:**

The mutation returns a cart using the same `cart_id`.

```json
{
  "data": {
    "createGuestCart": {
      "cart": {
        "id": "x2345678901234567890123456789012"
      }
    }
  }
}
```

## Input attributes

### CreateGuestCartInput object

The `CreateGuestCartInput` object contains the following attributes:

Attribute | Type | Description
--- |----| ---
`cart_uid` | ID | Optional client-generated ID

## Output attributes

The `createGuestCart` mutation returns the newly created cart.

## Errors

Error | Description
--- | ---
`Cart with ID "XXX" already exists.` | The specified cart ID was previously used to create a cart.
`Cart ID length should to be 32 symbols.` | The cart ID is not the required length.
`Use 'Query.customerCart' for logged in customer.` | A logged in customer is trying to create a guest customer cart.
