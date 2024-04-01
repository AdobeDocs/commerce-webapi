---
title: estimateShippingMethods mutation
---

# estimateShippingMethods mutation

The `estimateShippingMethods` mutation returns information about estimated cost of available shipping methods, depending on location.

## Syntax

```graphql
mutation {
  estimateShippingMethods(input: EstimateTotalsInput!)
  {
      [AvailableShippingMethod]
  }
}
```

## Reference

The [`estimateShippingMethods`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-estimateShippingMethods) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

In the following example, the customer located in Republic of Ireland wants to check estimated cost of shipping for the cart (`IJGaHxS7p6u5Nu7tQIGQpADRXSoZRbJw`).

**Request:**

```graphql

mutation {
  estimateShippingMethods(input:{
    cart_id: "IJGaHxS7p6u5Nu7tQIGQpADRXSoZRbJw"
    address: {
         country_code:IE
    }
  })
  {
    amount{
      currency
      value
    }
    available
    carrier_code
    price_incl_tax {
      currency
      value
    }
    price_excl_tax {
      currency
      value
    }
  }
}
```

**Response:**

The response contains the estimated shipping, cost based on selected location and store configuration:

```json
{
  "data": {
    "estimateShippingMethods": [
      {
        "amount": {
          "currency": "EUR",
          "value": 0
        },
        "available": true,
        "carrier_code": "freeshipping",
        "price_incl_tax": {
          "currency": "EUR",
          "value": 0
        },
        "price_excl_tax": {
          "currency": "EUR",
          "value": 0
        }
      },
      {
        "amount": {
          "currency": "EUR",
          "value": 10
        },
        "available": true,
        "carrier_code": "flatrate",
        "price_incl_tax": {
          "currency": "EUR",
          "value": 10
        },
        "price_excl_tax": {
          "currency": "EUR",
          "value": 10
        }
      }
    ]
  }
}
```
