---
title: setNegotiableQuoteBillingAddress mutation
description: The setNegotiableQuoteBillingAddress mutation assigns the billing address for the specified negotiable quote. You can assign an address from the company us...
keywords:
  - B2B
---

<Fragment src="../../../../../includes/commerce-only.md"/>

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

The `setNegotiableQuoteBillingAddress` reference provides detailed information about the types and fields defined in this mutation.

* [Adobe Commerce as a Cloud Service](/reference/graphql/saas/mutations.md#setnegotiablequotebillingaddress)

* [On-Premises/Cloud](/reference/graphql/latest/mutations.md#setnegotiablequotebillingaddress)

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
