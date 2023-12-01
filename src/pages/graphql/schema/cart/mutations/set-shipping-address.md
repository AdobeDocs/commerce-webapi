---
title: setShippingAddressesOnCart mutation
---

# setShippingAddressesOnCart mutation

The `setShippingAddressesOnCart` mutation sets one or more shipping addresses on a specific cart. The shipping address does not need to be specified in the following circumstances:

*  The cart contains only virtual items
*  When you defined the billing address, you set the `same_as_shipping` attribute to `true`. The application assigns the same address as the shipping address.

## Syntax

`mutation: {setShippingAddressesOnCart(input: SetShippingAddressesOnCartInput) {SetShippingAddressesOnCartOutput}}`

## Reference

The [`setShippingAddressesOnCart`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-setShippingAddressesOnCart) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

**Request:**

```graphql
mutation {
  setShippingAddressesOnCart(
    input: {
      cart_id: "4JQaNVJokOpFxrykGVvYrjhiNv9qt31C"
      shipping_addresses: [
        {
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
            save_in_address_book: false
          },
          pickup_location_code: "txspeqs"
        }
      ]
    }
  ) {
    cart {
      shipping_addresses {
        firstname
        middlename
        lastname
        prefix
        suffix
        company
        street
        city
        region {
          code
          label
        }
        postcode
        telephone
        fax
        country {
          code
          label
        }
        pickup_location_code
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "setShippingAddressesOnCart": {
      "cart": {
        "shipping_addresses": [
          {
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
            },
            "pickup_location_code": "txspeqs"
          }
        ]
      }
    }
  }
}
```

## Errors

Error | Description
--- | ---
`Could not find a cart with ID "XXX"` | The specified `cart_id` value does not exist in the `quote_id_mask` table.
`Field SetShippingAddressesOnCartInput.cart_id of required type String! was not provided.` | The value specified in the `SetShippingAddressesOnCartInput`.`cart_id` argument is empty.
`Field CartAddressInput.firstname of required type String! was not provided.` | The value specified in the `shipping_addresses`.`firstname` argument is empty.
`Field CartAddressInput.lastname of required type String! was not provided.` | The value specified in the `shipping_addresses`.`lastname` argument is empty.
`Field CartAddressInput.city of required type String! was not provided.` | The value specified in the `shipping_addresses`.`city` argument is empty.
`Field CartAddressInput.street of required type String! was not provided.` | The value specified in the `shipping_addresses`.`street` argument is empty.
`Field CartAddressInput.country_code of required type String! was not provided.` | The value specified in the `shipping_addresses`.`country_code` argument is empty.
`Field SetShippingAddressesOnCartInput.shipping_addresses of required type [ShippingAddressInput]! was not provided.` | The `shipping_addresses` input attribute of type `ShippingAddressInput` is missing.
`The current user cannot perform operations on cart "XXX"` | An unauthorized user (guest) tried to set a delivery method for an order on behalf of an authorized user (customer), or a customer tried to set a delivery method for an order on behalf of another customer.
