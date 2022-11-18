---
title: setShippingAddressesOnCart mutation | Commerce Web APIs
---

# setShippingAddressesOnCart mutation

The `setShippingAddressesOnCart` mutation sets one or more shipping addresses on a specific cart. The shipping address does not need to be specified in the following circumstances:

*  The cart contains only virtual items
*  When you defined the billing address, you set the `same_as_shipping` attribute to `true`. The application assigns the same address as the shipping address.

## Syntax

`mutation: {setShippingAddressesOnCart(input: SetShippingAddressesOnCartInput) {SetShippingAddressesOnCartOutput}}`

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
            lastname: "Roll"
            company: "Magento"
            street: ["Magento Pkwy", "Main Street"]
            city: "Austin"
            region: "TX"
            postcode: "78758"
            country_code: "US"
            telephone: "8675309"
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
        lastname
        company
        street
        city
        region {
          code
          label
        }
        postcode
        telephone
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
            "lastname": "Roll",
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

## Input attributes

The top-level `SetShippingAddressesOnCartInput` object is listed first. All child objects are listed in alphabetical order.

### SetShippingAddressesOnCartInput object

Attribute |  Data Type | Description
--- | --- | ---
`cart_id` | String! | The unique ID that identifies the customer's cart
`shipping_addresses` | [ShippingAddressInput!](#shippingaddressinput-object) | The shipping address for a specific cart

### CartAddressInput object

import CartAddressInput from '/src/pages/_includes/graphql/cart-address-input-24.md'

<CartAddressInput />

### ShippingAddressInput object

Attribute |  Data Type | Description
--- | --- | ---
`address` | [CartAddressInput](#cartaddressinput-object) | The shipping address for the cart
`customer_address_id` | Int | The unique ID that identifies the customer's address
`customer_notes` | String | Text provided by the customer
`pickup_location_code` | String | The code of the in-store pickup location where the customer will receive the order.

## Output attributes

The `SetShippingAddressOnCartOutput` object contains the `Cart` object.

Attribute |  Data Type | Description
--- | --- | ---
`cart` |[Cart!](#cart-object) | Describes the contents of the specified shopping cart

### Cart object

import CartObject from '/src/pages/_includes/graphql/cart-object-24.md'

<CartObject />

[Cart query output](../../cart/queries/cart.md#output-attributes) provides more information about the `Cart` object.

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
