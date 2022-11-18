---
title: removeStoreCreditFromCart mutation | Commerce Web APIs
edition: ee
---

# removeStoreCreditFromCart mutation

The `removeStoreCreditFromCart` mutation removes store credit previously applied to the specified cart with the [`applyStoreCreditToCart`](apply-store-credit.md) mutation. The application restores the customer's available store credit to its original amount and recalculates all cart totals.

Store credit must be enabled on the store to run this mutation.

## Syntax

`mutation: {RemoveStoreCreditFromCart(input: RemoveStoreCreditFromCartInput): {RemoveStoreCreditFromCartOutput}}`

## Example usage

**Request:**

```graphql
mutation {
  removeStoreCreditFromCart(
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
    "removeStoreCreditFromCart": {
      "cart": {
        "applied_store_credit": {
          "applied_balance": {
            "currency": "USD",
            "value": 0
          },
          "current_balance": {
            "currency": "USD",
            "value": 10
          }
        },
        "prices": {
          "grand_total": {
            "currency": "USD",
            "value": 34.64
          }
        }
      }
    }
  }
}
```

## Input attributes

The `RemoveStoreCreditFromCartInput` object must contain the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`cart_id` | String! | The unique ID that identifies the customer's cart

## Output attributes

The `RemoveStoreCreditFromCartOutput` object returns the `Cart` object.

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
`Please specify a valid customer.` | The mutation requires a valid authorization token.
`Required parameter "cart_id" is missing` | The value specified in `cart_id` is empty.
