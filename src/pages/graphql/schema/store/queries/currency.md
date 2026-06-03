---
title: currency query
description: Use the currency query to return information about the store's currency configuration.
---

# currency query

Use the `currency` query to return information about the store's currency configuration.

## Syntax

`{currency {Currency}}`

## Reference

The `currency` reference provides detailed information about the types and fields defined in this query.

* [Adobe Commerce as a Cloud Service](/reference/graphql/saas/index.md#currency)

* [On-Premises/Cloud](/reference/graphql/index.md#currency)

## Example usage

The following query returns currency information for an instance of the application that is configured for multiple currencies, USD and EUR. The default (base) currency for the store is US Dollar (USD). The response includes a list of currencies in the `available_currency_codes` attribute as well as a set of exchange rates.

**Request:**

```graphql
query {
    currency {
        base_currency_code
        base_currency_symbol
        default_display_currency_code
        default_display_currency_symbol
        available_currency_codes
        exchange_rates {
            currency_to
            rate
        }
    }
}
```

**Response:**

```json
{
  "data": {
    "currency": {
      "base_currency_code": "USD",
      "base_currency_symbol": "$",
      "default_display_currency_code": "USD",
      "default_display_currency_symbol": "$",
      "available_currency_codes": [
        "EUR",
        "USD"
      ],
      "exchange_rates": [
        {
          "currency_to": "EUR",
          "rate": 0.7067
        },
        {
          "currency_to": "USD",
          "rate": 1
        }
      ]
    }
  }
}
```

## Related topics

*  [countries query](countries.md)
*  [country query](country.md)
