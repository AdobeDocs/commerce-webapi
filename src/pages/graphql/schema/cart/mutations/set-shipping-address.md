---
title: setShippingAddressesOnCart mutation
description: The setShippingAddressesOnCart mutation sets one or more shipping addresses on a specific cart. The shipping address does not need to be specified in the f...
---

# setShippingAddressesOnCart mutation

The `setShippingAddressesOnCart` mutation sets one or more shipping addresses on a specific cart. The shipping address does not need to be specified in the following circumstances:

*  The cart contains only virtual items
*  When you defined the billing address, you set the `same_as_shipping` attribute to `true`. The application assigns the same address as the shipping address.

## Syntax

`mutation: {setShippingAddressesOnCart(input: SetShippingAddressesOnCartInput) {SetShippingAddressesOnCartOutput}}`

## Reference

The `setShippingAddressesOnCart` reference provides detailed information about the types and fields defined in this mutation.

* [Adobe Commerce as a Cloud Service](/reference/graphql/saas/mutations.md#setshippingaddressesoncart)

* [On-Premises/Cloud](/reference/graphql/latest/mutations.md#setshippingaddressesoncart)

## Example usage

### Create a new shipping address

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

### Assign an existing customer address

The following example assigns a shipping address from the customer's address book by specifying the `customer_address_uid` value. This value is a UID-encoded reference to the address, not the raw `id` value. This field requires a valid [customer authentication token](../../customer/mutations/generate-token.md); guests cannot use `customer_address_uid`.

**Request:**

```graphql
mutation {
  setShippingAddressesOnCart(
    input: {
      cart_id: "4JQaNVJokOpFxrykGVvYrjhiNv9qt31C"
      shipping_addresses: [
        {
          customer_address_uid: "MQ=="
        }
      ]
    }
  ) {
    cart {
      shipping_addresses {
        firstname
        lastname
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
        uid
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
            "firstname": "Jane",
            "lastname": "Doe",
            "street": [
              "123 Main Street"
            ],
            "city": "Austin",
            "region": {
              "code": "TX",
              "label": "Texas"
            },
            "postcode": "78758",
            "telephone": "5551234567",
            "country": {
              "code": "US",
              "label": "US"
            },
            "uid": "MQ=="
          }
        ]
      }
    }
  }
}
```

### Assign a company address (B2B)

<Edition slots="text" backgroundcolor="green"/>

[SaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions)

<InlineAlert variant="info" slots="text1"/>

The `company_address_id` field is part of the B2B Storefront Compatibility Package and is available with [Adobe Commerce as a Cloud Service](https://experienceleague.adobe.com/en/docs/commerce/cloud-service/overview), and with [Adobe Commerce Optimizer](https://experienceleague.adobe.com/en/docs/commerce/aco-optimizer-connector/overview) on Adobe Commerce on cloud infrastructure or on-premises. The field references the **company** address book, not the customer's personal address book, and is available only to an authenticated B2B company user whose company has the company address book feature enabled (`is_company_address_book_enabled`); guests cannot use this field. `company_address_id` is a GraphQL-only field with no REST equivalent. Like `customer_address_uid`, the value is a UID-encoded reference, not a raw integer.

The following example assigns a shipping address from the company's address book by specifying the `company_address_id` value returned by the [`createCompanyAddress`](../../b2b/company/mutations/create-address.md) mutation.

**Request:**

```graphql
mutation {
  setShippingAddressesOnCart(
    input: {
      cart_id: "4JQaNVJokOpFxrykGVvYrjhiNv9qt31C"
      shipping_addresses: [
        {
          company_address_id: "MjAy"
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
        company_address_id
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
            "firstname": "John",
            "lastname": "Doe",
            "company": "Company name",
            "street": [
              "123 Main St"
            ],
            "city": "Austin",
            "region": {
              "code": "TX",
              "label": "Texas"
            },
            "postcode": "78701",
            "telephone": "5551234567",
            "country": {
              "code": "US",
              "label": "US"
            },
            "company_address_id": "MjAy"
          }
        ]
      }
    }
  }
}
```

## Errors

| Error | Description |
| --- | --- |
| `Could not find a cart with ID "XXX"` | The specified `cart_id` value does not exist in the `quote_id_mask` table. |
| `Field SetShippingAddressesOnCartInput.cart_id of required type String! was not provided.` | The value specified in the `SetShippingAddressesOnCartInput`.`cart_id` argument is empty. |
| `Field CartAddressInput.firstname of required type String! was not provided.` | The value specified in the `shipping_addresses`.`firstname` argument is empty. |
| `Field CartAddressInput.lastname of required type String! was not provided.` | The value specified in the `shipping_addresses`.`lastname` argument is empty. |
| `Field CartAddressInput.city of required type String! was not provided.` | The value specified in the `shipping_addresses`.`city` argument is empty. |
| `Field CartAddressInput.street of required type String! was not provided.` | The value specified in the `shipping_addresses`.`street` argument is empty. |
| `Field CartAddressInput.country_code of required type String! was not provided.` | The value specified in the `shipping_addresses`.`country_code` argument is empty. |
| `Field SetShippingAddressesOnCartInput.shipping_addresses of required type [ShippingAddressInput]! was not provided.` | The `shipping_addresses` input attribute of type `ShippingAddressInput` is missing. |
| `The current user cannot perform operations on cart "XXX"` | An unauthorized user (guest) tried to set a delivery method for an order on behalf of an authorized user (customer), or a customer tried to set a delivery method for an order on behalf of another customer. |
| `Company address book is not enabled for this company.` | The `company_address_id` field was specified, but the customer's company does not have `is_company_address_book_enabled` set. |
