---
title: setNegotiableQuoteShippingMethods mutation
keywords:
  - B2B
---

# setNegotiableQuoteShippingMethods mutation

The `setNegotiableQuoteShippingMethods` mutation sets one or more delivery methods on a negotiable quote. By default, the following delivery methods are supported:

Label | Carrier code | Method code
--- | --- | ---
DHL | dhl | Varies
Federal Express | fedex | Varies
Flat Rate | flatrate | flatrate
Free Shipping | freeshipping | freeshipping
Best Way | tablerate | bestway
United Parcel Service | ups | Varies
United States Postal Service | usps | Varies

The negotiable quote must be in the UPDATED state to successfully set a shipping address.

This query requires a valid [customer authentication token](../../../customer/mutations/generate-token.md).

## Syntax

```graphql
setNegotiableQuoteShippingMethods(
    input: SetNegotiableQuoteShippingMethodsInput!
): SetNegotiableQuoteShippingMethodsOutput
```

## Reference

The [`setNegotiableQuoteShippingMethods`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-setNegotiableQuoteShippingMethods) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example sets the shipping method for a negotiable quote.

**Request:**

```graphql

mutation {
  setNegotiableQuoteShippingMethods(
    input: {
      quote_uid: "z13H2xRCqEiyVoPJmSmekvhOo4GdsVSp",
      shipping_methods: [
        {
          carrier_code: "tablerate"
          method_code: "bestway"
        }
      ]
    }
  ) {
    quote {
      uid
      shipping_addresses {
        selected_shipping_method {
          carrier_code
          carrier_title
          method_code
          method_title
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

```json
{
  "data": {
    "setNegotiableQuoteShippingMethods": {
      "quote": {
        "uid": "prFSdZyHOpMXeiJ32XlBzd8e1Mte9loS",
        "shipping_addresses": [
          {
            "selected_shipping_method": {
              "carrier_code": "tablerate",
              "carrier_title": "Best Way",
              "method_code": "bestway",
              "method_title": "Table Rate",
              "amount": {
                "value": 29.95,
                "currency": "USD"
              }
            }
          }
        ]
      }
    }
  }
}
```
