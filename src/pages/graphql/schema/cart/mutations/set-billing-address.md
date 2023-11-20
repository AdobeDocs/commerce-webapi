---
title: setBillingAddressOnCart mutation
---

# setBillingAddressOnCart mutation

The `setBillingAddressOnCart` mutation sets the billing address for a specific cart. If you set the `same_as_shipping` attribute to `true`, the application assigns the billing address to be the same as the shipping address.

## Syntax

`mutation: {setBillingAddressOnCart(input: SetBillingAddressOnCartInput) {SetBillingAddressOnCartOutput}}`

## Reference

The [`setBillingAddressOnCart`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-setBillingAddressOnCart) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example creates a new billing address for a specific cart.

**Request:**

```graphql
mutation {
  setBillingAddressOnCart(
    input: {
      cart_id: "4JQaNVJokOpFxrykGVvYrjhiNv9qt31C"
      billing_address: {
        address: {
          firstname: "Bob"
          middlename: "Joe"
          lastname: "Roll"
          prefix: "Mr."
          suffix: "Jr."
          company: "Magento"
          street: ["Magento Pkwy", "Main Street"]
          city: "Austin"
          region: "TX"
          postcode: "78758"
          country_code: "US"
          telephone: "8675309"
          fax: "8675311"
          save_in_address_book: true
        }
        same_as_shipping: false
      }
    }
  ) {
    cart {
      billing_address {
        firstname
        middlename
        lastname
        prefix
        suffix
        company
        street
        city
        region{
          code
          label
        }
        postcode
        telephone
        fax
        country{
          code
          label
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
    "setBillingAddressOnCart": {
      "cart": {
        "billing_address": {
          "firstname": "Bob",
          "middlename": "Joe",
          "lastname": "Roll",
          "prefix": "Mr.",
          "suffix": "Jr.",
          "company": "Magento",
          "street": [
            "Magento Pkwy",
            "Main Street"
          ],
          "city": "Austin",
          "region": {
              "code": "TX",
              "label": "Texas"
            },
          "postcode": "78758",
          "telephone": "8675309",
          "fax": "8675311",
           "country": {
             "code": "US",
             "label": "US"
          }
        }
      }
    }
  }
}
```
