---
title: applyCouponsToCart mutation
edition: ee
---

# applyCouponsToCart mutation

The `applyCouponsToCart` mutation applies one or more pre-defined coupon codes to the specified cart. Valid coupon codes are defined in cart price rules.

## Syntax

`mutation: {applyCouponsToCart(input: ApplyCouponsToCartInput) {ApplyCouponToCartOutput}}`

## Reference

The [`applyCouponsToCart`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-applyCouponsToCart) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example applies the coupon codes `H2O` and `CO2` to the cart. For these coupons to be valid, the Affirm Water Bottle (`sku`: 24-UG06) must be in the cart.

In this example we are using the `REPLACE` type to add coupons to cart, which means that any coupon previously used in the cart will be replaced by the one specified in the mutation.

**Request:**

```graphql
mutation {
  applyCouponsToCart(
    input: {
      cart_id: "IeTUiU0oCXjm0uRqGCOuhQ2AuQatogjG",
      coupon_codes: ["H20", "CO2"]
      type: REPLACE
    }
  ) {
    cart {
        itemsV2 {
          items {
            product {
              name
            }
            quantity
          }
          total_count
          page_info {
            page_size
            current_page
            total_pages
          }
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
    "applyCouponsToCart": {
      "cart": {
        "itemsV2": {
          "items": [
            {
              "product": {
                "name": "Gold Membership"
              },
              "quantity": 2
            },
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
          "total_count": 3,
          "page_info": {
            "page_size": 20,
            "current_page": 1,
            "total_pages": 1
          }
        },
        "applied_coupons": [
          {
            "code": "H20"
          },
          {
            "code": "CO2"
          }
        ],
        "prices": {
          "grand_total": {
            "value": 134.08,
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
`Cart does not contain products.` | The coupons cannot be applied to an empty cart.
`Could not find a cart with ID "XXX"` | The specified `cart_id` value does not exist in the `quote_id_mask` table.
`Required parameter "cart_id" is missing` | The required `cart_id` argument contains an empty value.
`Required parameter "coupon_codes" is missing` | The required `coupon_codes` argument contains an empty value.
`The following coupon codes could not be applied:.` | The entered coupon codes are not applicable. Check the existing shopping cart price rules for details.
`The current user cannot perform operations on cart XXX` | An unauthorized user (guest) tried to add the product into a customer's cart, or an authorized user (customer) tried to add the product into the cart of another customer.
`The cart isn't active.` | The cart is not active
`Maximum allowed number of applied coupons was exceeded.` | The customer's cart has exceeded the maximum number of applicable coupons.
