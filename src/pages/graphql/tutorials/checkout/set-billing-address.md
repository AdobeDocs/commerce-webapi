---
title: Step 5. Set billing address
description: Learn how to set a billing address for an order with the GraphQL API.
contributor_name: Atwix
contributor_link: https://www.atwix.com/
keywords:
  - GraphQL
  - Checkout
---

# Step 5. Set billing address

<InlineAlert variant="success" slots="text" />

You must always set the billing address to place an order.

Use the [setBillingAddressOnCart](../../schema/cart/mutations/set-billing-address.md) mutation to set a billing address.

## Add a billing address to the cart

Similar to the shipping address, add a billing address to the cart. `{ CART_ID }` is the unique shopping cart ID from [Step 2. Create empty cart](../../tutorials/checkout/add-product-to-cart.md). The street address is also different, so we can see that different addresses are being created.

Send the customer's authorization token in the `Authorization` parameter of the header. See [Authorization tokens](../../usage/authorization-tokens.md) for more information.

**Request:**

```graphql
mutation {
  setBillingAddressOnCart(
    input: {
      cart_id: "{ CART_ID }"
      billing_address: {
        address: {
          firstname: "John"
          lastname: "Doe"
          company: "Company Name"
          street: ["64 Strawberry Dr", "Beverly Hills"]
          city: "Los Angeles"
          region: "CA"
          region_id: 12
          postcode: "90210"
          country_code: "US"
          telephone: "123-456-0000"
          save_in_address_book: true
        }
      }
    }
  ) {
    cart {
      billing_address {
        firstname
        lastname
        company
        street
        city
        region{
          code
          label
        }
        postcode
        telephone
        country {
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
          "firstname": "John",
          "lastname": "Doe",
          "company": "Company Name",
          "street": [
            "64 Strawberry Dr",
            "Beverly Hills"
          ],
          "city": "Los Angeles",
          "region": {
            "code": "CA",
            "label": "California"
          },
          "postcode": "90210",
          "telephone": "123-456-0000",
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

## Verify this step

Verification is possible after [Step 6: Set the delivery method](../../tutorials/checkout/set-delivery-method.md).

1. Sign in as a customer to the website using the email `john.doe@example.com` and password `b1b2b3l@w+`.

1. Go to Checkout.

1. Go to the Review & Payments step. The Billing Address form is populated with the address details you entered.
