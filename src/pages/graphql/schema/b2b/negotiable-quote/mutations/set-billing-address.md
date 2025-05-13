---
title: setNegotiableQuoteBillingAddress mutation
keywords:
  - B2B
---

import CommerceOnly from '/src/_includes/commerce-only.md'

<CommerceOnly />

# setNegotiableQuoteBillingAddress mutation

The `setNegotiableQuoteBillingAddress` mutation assigns the billing address for the specified negotiable quote. You can assign an address from the company user's address book, or define a new one. The negotiable quote must be in the UPDATED state to successfully set the billing address.

To return a list of valid billing addresses, construct a [`company` query](../../company/queries/company.md) that includes the `user` input attribute.

This query requires a valid [customer authentication token](../../../customer/mutations/generate-token.md).

## Syntax

```graphql
{
    setNegotiableQuoteBillingAddress(
        input: SetNegotiableQuoteBillingAddressInput!
    ): SetNegotiableQuoteBillingAddressOutput
}
```

## Reference

The [`setNegotiableQuoteBillingAddress`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-setNegotiableQuoteBillingAddress) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example adds a new billing address to a negotiable quote.

**Request:**

```graphql
mutation {
  setNegotiableQuoteBillingAddress(input: {
    quote_uid: "prFSdZyHOpMXeiJ32XlBzd8e1Mte9loS",
    billing_address: {
      address: {
        company: "TestCo"
        firstname: "Taina"
        lastname: "Garofalo"
        street: "100 Big Oak Tree Dr"
        city: "San Francisco"
        postcode: "9999"
        region: "CA"
        region_id: 12
        country_code: "US"
        telephone: "555 999-9999"
      }
    }
  }) {
    quote {
      billing_address {
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
    "setNegotiableQuoteBillingAddress": {
      "quote": {
        "billing_address": {
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
      }
    }
  }
}
```
