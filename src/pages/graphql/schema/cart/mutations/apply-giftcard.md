---
title: applyGiftCardToCart mutation
edition: ee
---

# applyGiftCardToCart mutation

The `applyGiftCardToCart` mutation applies a pre-defined gift card code to the specified cart.

## Syntax

 `mutation: applyGiftCardToCart(input: ApplyGiftCardToCartInput): ApplyGiftCardToCartOutput`

## Reference

The [`applyGiftCardToCart`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-applyGiftCardToCart) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example adds a gift card with the code `0330CEIVTLB4` to the cart. The gift card has a value of $20.

**Request:**

```graphql
mutation {
  applyGiftCardToCart(
    input: {
      cart_id: "lY8PnKhlHBGc4WS5v0Y3dWjxiA5PvvgY"
      gift_card_code: "0330CEIVTLB4"
    }
  ) {
    cart {
      applied_gift_cards {
        applied_balance {
          value
          currency
        }
        code
        current_balance {
          value
          currency
        }
        expiration_date
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "applyGiftCardToCart": {
      "cart": {
        "applied_gift_cards": [
          {
            "applied_balance": {
              "value": 20,
              "currency": "USD"
            },
            "code": "0330CEIVTLB4",
            "current_balance": {
              "value": 20,
              "currency": "USD"
            },
            "expiration_date": null
          }
        ]
      }
    }
  }
}
```

## Errors

Error | Description
--- | ---
`The gift card code couldn't be added. Verify your information and try again.` | The specified `gift_card_code` is incorrect.
`Could not find a cart with ID "XXX"` | The specified `cart_id` value does not exist in the `quote_id_mask` table.
`Field ApplyGiftCardToCartInput.gift_card_code of required type String! was not provided.` | The required field `gift_card_code` was not provided.
`Required parameter \"gift_card_code\" is missing` | The value provided in the field `gift_card_code` is empty.
`Field ApplyGiftCardToCartInput.cart_id of required type String! was not provided.` | The required field `cart_id` was not provided.
`Required parameter \"cart_id\" is missing` | The value provided in the field `cart_id` is empty.
