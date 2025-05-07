---
title: applyRewardPointsToCart mutation
edition: paas
---

# applyRewardPointsToCart mutation

The `applyRewardPointsToCart` mutation applies reward points to the customer's cart. You cannot specify a quantity of reward points. If the reward points balance is less than the cart total, the application applies the entire reward points balance. Otherwise, the application applies as many reward points needed to bring the total to 0. Fractional reward points are discarded.

Use the [`removeRewardPointsFromCart` mutation](remove-reward-points.md) to undo the results of the `applyRewardPointsToCart` mutation.

## Syntax

`mutation: applyRewardPointsToCart(cartId: ID!): ApplyRewardPointsToCartOutput`

## Reference

The [`applyRewardPointsToCart`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-applyRewardPointsToCart) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example applies $5 to the cart. In this example, the exchange rate is defined as 25 reward points equals $5.

**Request:**

```graphql
mutation {
  applyRewardPointsToCart(cartId: "8k0Q4MpH2IGahWrTRtqM61YV2MtLPApz")
  {
    cart {
      itemsV2 {
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
        total_count
        page_info {
          page_size
          current_page
          total_pages
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
        "itemsV2": {
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
          "total_count": 1,
          "page_info": {
            "page_size": 20,
            "current_page": 1,
            "total_pages": 1
          }
        },
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

## Errors

Error | Description
--- | ---
`Required parameter "cart_id" is missing` | The mutation does not contain a `cart_id` argument.
`Could not find a cart with ID "XXX"` | The specified `cart_id` value does not exist in the `quote_id_mask` table.
