---
title: estimateTotals mutation
---

# estimateTotals mutation

The `estimateTotals` mutation returns information about estimated total cost of items in cart, including taxes.

## Syntax

```graphql
mutation {
  estimateTotals(input: EstimateTotalsInput!)
  {
      EstimateTotalsOutput!
  }
}
```

## Reference

The `estimateTotals` reference provides detailed information about the types and fields defined in this mutation.

## Example usage

In the following example, the customer located in Republic of Ireland wants to check the total estimated cost of the cart (`IJGaHxS7p6u5Nu7tQIGQpADRXSoZRbJw`). The cart contains two products with the price of 99.00 Euro each,
and the applied tax amount configured for Republic of Ireland is 10%:

**Request:**

```graphql
mutation {
  estimateTotals(input: {
    cart_id: "IJGaHxS7p6u5Nu7tQIGQpADRXSoZRbJw",
    address: {
      country_code: IE
    },
    shipping_method: {
      carrier_code: "CARRIER",
      method_code: "example_method_code"
    }
  }) {
    cart {
      prices {
        grand_total {
          value
          currency
        }
        applied_taxes {
          amount {
            value
            currency
          }
        }
      }
    }
  }
}
```

**Response:**

The response contains the calculated total cost based on the selected location and shipping method:

```json
{
  "data": {
    "estimateTotals": {
      "cart": {
        "prices": {
          "grand_total": {
            "value": 217.8,
            "currency": "EUR"
          },
          "applied_taxes": [
            {
              "amount": {
                "value": 19.8,
                "currency": "EUR"
              }
            }
          ]
        }
      }
    }
  }
}
```
