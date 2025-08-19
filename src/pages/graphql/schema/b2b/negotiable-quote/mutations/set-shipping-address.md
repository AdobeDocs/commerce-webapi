---
title: setNegotiableQuoteShippingAddress mutation
keywords:
  - B2B
---

import CommerceOnly from '/src/_includes/commerce-only.md'

<CommerceOnly />

# setNegotiableQuoteShippingAddress mutation

The `setNegotiableQuoteShippingAddress` mutation assigns the shipping address for the specified negotiable quote. You can assign an address from the company user's address book, or define a new one. The negotiable quote must be in the UPDATED state to successfully set a shipping address.

To return a list of valid shipping addresses, construct a [`company` query](../../company/queries/company.md) that includes the `user` input attribute.

This query requires a valid [customer authentication token](../../../customer/mutations/generate-token.md).

## Syntax

```graphql
{
    setNegotiableQuoteShippingAddress(
        input: SetNegotiableQuoteShippingAddressInput!
    ): SetNegotiableQuoteShippingAddressOutput
}
```

## Reference

The [`setNegotiableQuoteShippingAddress`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-setNegotiableQuoteShippingAddress) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example adds a predefined shipping address to a negotiable quote.

**Request:**

```graphql
mutation {
  setNegotiableQuoteShippingAddress(input: {
    quote_uid: "prFSdZyHOpMXeiJ32XlBzd8e1Mte9loS"
    shipping_addresses: {
      customer_address_uid: "MQ=="
    }
  }) {
    quote {
      shipping_addresses {
        company
        firstname
        lastname
        street
        city
        region {
          label
          code
        }
        country {
          label
          code
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
    "setNegotiableQuoteShippingAddress": {
      "quote": {
        "shipping_addresses": [
          {
            "company": "TestCo",
            "firstname": "Taina",
            "lastname": "Garofalo",
            "street": [
              "100 Big Oak Tree Dr"
            ],
            "city": "San Francisco",
            "region": {
              "label": "California",
              "code": "CA"
            },
            "country": {
              "label": "US",
              "code": "US"
            }
          }
        ]
      }
    }
  }
}
```
