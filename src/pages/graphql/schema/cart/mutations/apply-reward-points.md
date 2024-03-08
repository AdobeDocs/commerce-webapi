---
title: applyRewardPointsToCart mutation
edition: ee
---

# applyRewardPointsToCart mutation

The `applyRewardPointsToCart` mutation applies reward points to the customer's cart. You cannot specify a quantity of reward points. If the reward points balance is less than the cart total, the application applies the entire reward points balance. Otherwise, the application applies as many reward points needed to bring the total to 0. Fractional reward points are discarded.

Use the [`removeRewardPointsFromCart` mutation](remove-reward-points.md) to undo the results of the `applyRewardPointsToCart` mutation.

## Syntax

`mutation: applyRewardPointsToCart(cartId: ID!): ApplyRewardPointsToCartOutput`

## Example usage

The following example applies $5 to the cart. In this example, the exchange rate is defined as 25 reward points equals $5.

**Request:**

```graphql
mutation {
  applyRewardPointsToCart(cartId: "8k0Q4MpH2IGahWrTRtqM61YV2MtLPApz")
  {
    cart {
      items {
        quantity
        product {
          sku
          name
          price_range {
            maximum_price {
              final_price {
                currency
                value
              }
            }
          }
        }
      }
      applied_reward_points {
        money {
          currency
          value
        }
        points
      }
      prices {
        grand_total {
          currency
          value
        }
        applied_taxes {
          amount {
            currency
            value
          }
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
    "applyRewardPointsToCart": {
      "cart": {
        "items": [
          {
            "quantity": 1,
            "product": {
              "sku": "WJ04",
              "name": "Ingrid Running Jacket",
              "price_range": {
                "maximum_price": {
                  "final_price": {
                    "currency": "USD",
                    "value": 84
                  }
                }
              }
            }
          }
        ],
        "applied_reward_points": {
          "money": {
            "currency": "USD",
            "value": 5
          },
          "points": 25
        },
        "prices": {
          "grand_total": {
            "currency": "USD",
            "value": 90.93
          },
          "applied_taxes": [
            {
              "amount": {
                "currency": "USD",
                "value": 6.93
              }
            }
          ]
        }
      }
    }
  }
}
```

## Input attributes

The `applyRewardPointsToCart` mutation requires the `cart_id` attribute.

Attribute | Data Type | Description
--- | --- | ---
`cart_id` | String! | The unique ID that identifies the customer's cart

## Output attributes

The `ApplyRewardPointsToCartOutput` object contains the `Cart` object.

Attribute |  Data Type | Description
--- | --- | ---
`cart` |[Cart!](#cart-object) | Describes the contents of the specified shopping cart

### Cart object

 import CartObject from '/src/_includes/graphql/cart-object-24.md'

<CartObject />

[Cart query output](../../cart/queries/cart.md#output-attributes) provides more information about the `Cart` object.

## Errors

Error | Description
--- | ---
`Required parameter "cart_id" is missing` | The mutation does not contain a `cart_id` argument.
`Could not find a cart with ID "XXX"` | The specified `cart_id` value does not exist in the `quote_id_mask` table.
