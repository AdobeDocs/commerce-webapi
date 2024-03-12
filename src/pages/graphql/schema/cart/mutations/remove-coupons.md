---
title: removeCouponsFromCart mutation
edition: ee
---

# removeCouponsFromCart mutation

The `removeCouponsFromCart` mutation removes previously-applied coupons from the cart. The cart must contain at least one item in order to remove coupons.

## Syntax

`mutation: {removeCouponsFromCart(input: RemoveCouponsFromCartInput)  {RemoveCouponFromCartOutput}}`

## Reference

The [`removeCouponsFromCart`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-removeCouponsFromCart) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example removes coupons `H2O` and `CO2` from the cart.

**Request:**

``` text
mutation {
  removeCouponsFromCart(
    input:
      {
        cart_id: "IeTUiU0oCXjm0uRqGCOuhQ2AuQatogjG"
        coupon_codes: ["H2O", "CO2"]
      }
    ) {
    cart {
      items {
        product {
          name
        }
        quantity
      }
      applied_coupons {
        code
      }
      prices {
        grand_total{
          value
          currency
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
    "removeCouponFromCart": {
      "cart": {
        "items": [
          {
            "product": {
              "name": "Strive Shoulder Pack"
            },
            "quantity": 1
          },
          {
            "product": {
              "name": "Affirm Water Bottle "
            },
            "quantity": 1
          }
        ],
        "applied_coupons": null,
        "prices": {
          "grand_total": {
            "value": 39,
            "currency": "USD"
          }
        }
      }
    }
  }
}
```

## Errors

Error | Description
--- | ---
`Cart does not contain products.` | The coupon cannot be removed from the empty cart.
`Could not find a cart with ID "XXX"` | The specified `cart_id` value does not exist in the `quote_id_mask` table.
`The cart isn't active.` | The user cannot perform this mutation on the inactive cart.
`Required parameter "cart_id" is missing` | The required `cart_id` argument contains an empty value.
`The coupon code couldn't be deleted. Verify the coupon code and try again.` | The coupon was not removed from the cart. Check the existing shopping cart price rules for details.
