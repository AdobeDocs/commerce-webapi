---
title: setBillingAddressOnCart mutation | Commerce Web APIs
---

# setBillingAddressOnCart mutation

The `setBillingAddressOnCart` mutation sets the billing address for a specific cart. If you set the `same_as_shipping` attribute to `true`, the application assigns the billing address to be the same as the shipping address.

## Syntax

`mutation: {setBillingAddressOnCart(input: SetBillingAddressOnCartInput) {SetBillingAddressOnCartOutput}}`

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

## Input attributes

The top-level `SetBillingAddressOnCartInput` object is listed first. All child objects are listed in alphabetical order.

### SetBillingAddressOnCartInput object

Attribute |  Data Type | Description
--- | --- | ---
`billing_address` | [BillingAddressInput!](#billingaddressinput-object) | The billing address for a specific cart
`cart_id` | String! | The unique ID that identifies the customer's cart

### BillingAddressInput object

Attribute |  Data Type | Description
--- | --- | ---
`address` | [CartAddressInput](#cartaddressinput-object) | The billing address for the cart
`customer_address_id` | Int | The unique ID that identifies the customer's address
`same_as_shipping` | Boolean | Indicates whether to set the billing address based on the existing shipping address on the cart
`use_for_shipping` | Boolean | Indicates whether to additionally set the shipping address based on the provided billing address

### CartAddressInput object

import CartAddressInput from '/src/_includes/graphql/cart-address-input-24.md'

<CartAddressInput />

## Output attributes

The `SetBillingAddressOnCartOutput` object contains the `Cart` object.

Attribute |  Data Type | Description
--- | --- | ---
`cart` |[Cart!](#cart-object) | Describes the contents of the specified shopping cart

### Cart object

import CartObject from '/src/_includes/graphql/cart-object-24.md'

<CartObject />

[Cart query output](../../cart/queries/cart.md#output-attributes) provides more information about the `Cart` object.
