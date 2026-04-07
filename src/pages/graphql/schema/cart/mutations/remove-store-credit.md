---
title: removeStoreCreditFromCart mutation
---

import CommerceOnly from '/src/_includes/commerce-only.md'

<CommerceOnly />

# removeStoreCreditFromCart mutation

The `removeStoreCreditFromCart` mutation removes store credit previously applied to the specified cart with the [`applyStoreCreditToCart`](apply-store-credit.md) mutation. The application restores the customer's available store credit to its original amount and recalculates all cart totals.

Store credit must be enabled on the store to run this mutation.

## Syntax

`mutation: {removeStoreCreditFromCart(input: RemoveStoreCreditFromCartInput): {RemoveStoreCreditFromCartOutput}}`

## Reference

The `removeStoreCreditFromCart` reference provides detailed information about the types and fields defined in this mutation.

* &#8203;<Edition name="saas" /> [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-removeStoreCreditFromCart)

* &#8203;<Edition name="paas" /> [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-removeStoreCreditFromCart)

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

## Errors

Error | Description
--- | ---
`Please specify a valid customer.` | The mutation requires a valid authorization token.
`Required parameter "cart_id" is missing` | The value specified in `cart_id` is empty.
