---
title: removeRewardPointsFromCart mutation
description: The removeRewardPointsFromCart mutation removes all reward points that were previously applied to the customer's cart with the applyRewardPointsToCart muta...
---

| |
|:--|
| ![Adobe Commerce feature](../../../../images/adobe-logo.svg) **Exclusive feature only in Adobe Commerce** ([Learn more](https://experienceleague.adobe.com/docs/commerce-admin/user-guides/home.html#product-editions)) |

# removeRewardPointsFromCart mutation

The `removeRewardPointsFromCart` mutation removes all reward points that were previously applied to the customer's cart with the [`applyRewardPointsToCart` mutation](apply-reward-points.md).

## Syntax

`mutation: removeRewardPointsFromCart(cartId: ID!): RemoveRewardPointsFromCartOutput`

## Reference

The `removeRewardPointsFromCart` reference provides detailed information about the types and fields defined in this mutation.

* [SaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-removeRewardPointsFromCart)

* [PaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-removeRewardPointsFromCart)

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

## Errors

| Error | Description |
| --- | --- |
| `Could not find a cart with ID \"xxxxx\"` | The ID provided in the `cart_id` field is invalid or the cart does not exist for the customer. |
| `The cart isn't active` | The cart with the specified cart ID is unavailable, because the items have been purchased and the cart ID becomes inactive. |
| `Field removeRewardPointsFromCart.cart_id of required type String! was not provided` | The value specified in the `removeRewardPointsFromCart.cart_id` argument is empty. |
