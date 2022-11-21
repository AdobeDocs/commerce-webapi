---
title: removeRewardPointsFromCart mutation | Commerce Web APIs
edition: ee
---

# removeRewardPointsFromCart mutation

The `removeRewardPointsFromCart` mutation removes all reward points that were previously applied to the customer's cart with the [`applyRewardPointsToCart` mutation](apply-reward-points.md).

## Syntax

`mutation: removeRewardPointsFromCart(cartId: ID!): RemoveRewardPointsFromCartOutput`

## Example usage

The following example removes all reward points from the customer's cart. The `applied_rewards_points` object is now null.

**Request:**

```graphql
mutation {
  removeRewardPointsFromCart(cartId: "8k0Q4MpH2IGahWrTRtqM61YV2MtLPApz")
  {
    cart {
      applied_reward_points {
        money {
          currency
          value
        }
        points
      }
      prices {
        applied_taxes {
          amount {
            currency
            value
          }
        }
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
    "removeRewardPointsFromCart": {
      "cart": {
        "applied_reward_points": null,
        "prices": {
          "applied_taxes": [
            {
              "amount": {
                "currency": "USD",
                "value": 6.93
              }
            }
          ],
          "grand_total": {
            "currency": "USD",
            "value": 90.93
          }
        }
      }
    }
  }
}
```

## Input attributes

The `removeRewardPointsFromCart` mutation requires the `cart_id` attribute.

Attribute | Data Type | Description
--- | --- | ---
`cart_id` | String! | The unique ID that identifies the customer's cart

## Output attributes

The `RemoveRewardPointsFromCartOutput` object contains the `Cart` object.

Attribute |  Data Type | Description
--- | --- | ---
`cart` |[Cart!](#cart-object) | Describes the contents of the specified shopping cart

### Cart object

 import CartObject from '/src/pages/_includes/graphql/cart-object-24.md'

<CartObject />

[Cart query output](../../cart/queries/cart.md#output-attributes) provides more information about the `Cart` object.

## Errors

Error | Description
--- | ---
`Could not find a cart with ID \"xxxxx\"` | The ID provided in the `cart_id` field is invalid or the cart does not exist for the customer.
`The cart isn't active` | The cart with the specified cart ID is unavailable, because the items have been purchased and the cart ID becomes inactive.
`Field removeRewardPointsFromCart.cart_id of required type String! was not provided` | The value specified in the `removeRewardPointsFromCart.cart_id` argument is empty.
