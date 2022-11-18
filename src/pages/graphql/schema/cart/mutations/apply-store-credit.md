---
title: applyStoreCreditToCart mutation | Commerce Web APIs
edition: ee
---

# applyStoreCreditToCart mutation

The `applyStoreCreditToCart` mutation applies store credit to the specified cart. Store credit must be enabled on the store to run this mutation.

Store credit is an amount that the merchant applies to a customer account as a result of a refund or similar transaction. If gift cards are enabled for a store, then a customer receives store credit when redeeming a gift card. No matter how the customer obtains store credit, these funds can be used to pay for purchases.

The amount returned in the `current_balance` indicates how much store credit at the time you run the `applyStoreCreditToCart` mutation. This amount is not decreased until you place the order.

<InlineAlert variant="info" slots="text" />

If the amount of available store credit equals or exceeds the grand total of the quote, set the payment method to `free` in the `setPaymentMethodOnCart` mutation.

## Syntax

`mutation: {applyStoreCreditToCart(input: ApplyStoreCreditToCartInput): {ApplyStoreCreditToCartOutput}}`

## Example usage

In the following example, the customer starts with $10 of store credit. The subtotal of the items in the cart before applying the store credit plus shipping and tax is $34.64. The grand total on the cart after applying the store credit is $24.64.

**Request:**

```graphql
mutation {
  applyStoreCreditToCart(
    input: {
      cart_id: "4HHaKzxpKM2ZwD0IcheRfcPNBWS3OvRM"
    }
  ) {
    cart {
      applied_store_credit {
        applied_balance {
          currency
          value
        }
        current_balance {
          currency
          value
        }
      }
      prices {
        grand_total {
          currency
          value
        }
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "applyStoreCreditToCart": {
      "cart": {
        "applied_store_credit": {
          "applied_balance": {
            "currency": "USD",
            "value": 34.64
          },
          "current_balance": {
            "currency": "USD",
            "value": 10
          }
        },
        "prices": {
          "grand_total": {
            "currency": "USD",
            "value": 24.64
          }
        }
      }
    }
  }
}
```

## Input attributes

The `ApplyStoreCreditToCartInput` object must contain the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`cart_id` | String! | The unique ID that identifies the customer's cart

## Output attributes

The `ApplyStoreCreditToCartOutput` object returns the `Cart` object.

Attribute |  Data Type | Description
--- | --- | ---
`cart` |[Cart!](#CartObject) | Describes the contents of the specified shopping cart

### Cart object {#CartObject}

import CartObject from '/src/pages/_includes/graphql/cart-object-24.md'

<CartObject />

[Cart query output](../../cart/queries/cart.md#output-attributes) provides more information about the `Cart` object.

## Errors

Error | Description
--- | ---
`Could not find a cart with ID \"xxxxx\"` | The ID provided in the `cart_id` field is invalid or the cart does not exist for the customer.
`The cart isn't active` | The cart with the given cart ID is unavailable, because the items have been purchased and the cart ID becomes inactive.
`Field ApplyStoreCreditToCartInput.cart_id of required type String! was not provided` | The value specified in the `ApplyStoreCreditToCartInput.cart_id` argument is empty.