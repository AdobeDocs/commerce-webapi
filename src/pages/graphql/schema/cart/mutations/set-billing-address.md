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

## Errors

Error | Description
--- | ---
`Could not find a cart with ID "XXX"` | The specified `cart_id` value does not exist in the `quote_id_mask` table.
`Required parameter "cart_id" is missing` | The `cart_id` argument was omitted or contains an empty value.
`Required parameter "billing_address" is missing` | The `billing_address` argument was omitted or contains an empty array.
`The billing address must contain either "customer_address_id", "address", or "same_as_shipping".` | The billing address input object must include at least one of the following fields: `customer_address_id`, `address`, or `same_as_shipping`.
`The billing address cannot contain "customer_address_id" and "address" at the same time.` | The billing address input contains both `customer_address_id` and `address`. Only one can be used.
`Could not use the "same_as_shipping" option, because multiple shipping addresses have been set.` | The `same_as_shipping` option was provided, but the cart has multiple shipping addresses, making this option invalid.
`Could not use the "same_as_shipping" option, because the shipping address has not been set.` | The `same_as_shipping` option was provided, but no valid shipping address exists on the cart.
`Could not use the "use_for_shipping" option, because multiple shipping addresses have already been set.` | The `use_for_shipping` flag was provided, but the cart already has multiple shipping addresses.
`The current customer isn't authorized.` | An unauthorized user (guest) tried to set a billing address on behalf of an authorized user (customer), or a customer tried to set a billing address on behalf of another customer.
`An error occurred while processing the billing address.` | The billing address could not be validated. One or more required fields may be missing or invalid.
