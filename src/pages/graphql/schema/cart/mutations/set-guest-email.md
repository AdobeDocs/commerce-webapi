---
title: setGuestEmailOnCart mutation
---

# setGuestEmailOnCart mutation

For guest customers, you must assign an email to the cart before you place the order.

A logged-in customer specifies an email address when they create an account. Therefore, you can place the order without explicitly setting the email.

## Syntax

`mutation: {setGuestEmailOnCart(input: SetGuestEmailOnCartInput): {SetGuestEmailOnCartOutput}}`

## Reference

The [`setGuestEmailOnCart`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-setGuestEmailOnCart) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

**Request:**

```graphql
mutation {
  setGuestEmailOnCart(
    input: {
      cart_id: "4JQaNVJokOpFxrykGVvYrjhiNv9qt31C"
      email: "jdoe@example.com"
    }
  ) {
    cart {
      email
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "setGuestEmailOnCart": {
      "cart": {
        "email": "jdoe@example.com"
      }
    }
  }
}
```

## Errors

Error | Description
--- | ---
`Could not find a cart with ID "XXX"` | The ID specified in the `cart` argument does not exist.
`Invalid email format` | The value specified in the `email` argument has an incorrect format.
`Required parameter "cart_id" is missing` | The `cart_id` argument was omitted or contains an empty value.
`Required parameter "email" is missing` | The `email` argument was omitted or contains an empty value.
`The current user cannot perform operations on cart "XXX"` | An unauthorized user (guest) tried to set the email address on the customer's cart.
`The request is not allowed for logged in customers` | An authorized user (customer) is not allowed to use the `setGuestEmailOnCart` mutation.
