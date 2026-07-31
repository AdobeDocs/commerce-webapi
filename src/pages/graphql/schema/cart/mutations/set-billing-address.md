---
title: setBillingAddressOnCart mutation
description: The setBillingAddressOnCart mutation sets the billing address for a specific cart. If you set the sameasshipping attribute to true, the application assigns...
---

# setBillingAddressOnCart mutation

The `setBillingAddressOnCart` mutation sets the billing address for a specific cart. If you set the `same_as_shipping` attribute to `true`, the application assigns the billing address to be the same as the shipping address.

## Syntax

`mutation: {setBillingAddressOnCart(input: SetBillingAddressOnCartInput) {SetBillingAddressOnCartOutput}}`

## Reference

The `setBillingAddressOnCart` reference provides detailed information about the types and fields defined in this mutation.

* [Adobe Commerce as a Cloud Service](/reference/graphql/saas/mutations.md#setbillingaddressoncart)

* [On-Premises/Cloud](/reference/graphql/latest/mutations.md#setbillingaddressoncart)

## Example usage

### Create a new billing address

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

### Assign an existing customer address

The following example assigns a billing address from the customer's address book by specifying the `customer_address_uid` value. This value is a UID-encoded reference to the address, not the raw `id` value. This field requires a valid [customer authentication token](../../customer/mutations/generate-token.md); guests cannot use `customer_address_uid`.

**Request:**

```graphql
mutation {
  setBillingAddressOnCart(
    input: {
      cart_id: "4JQaNVJokOpFxrykGVvYrjhiNv9qt31C"
      billing_address: {
        customer_address_uid: "MQ=="
      }
    }
  ) {
    cart {
      billing_address {
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
    "setBillingAddressOnCart": {
      "cart": {
        "billing_address": {
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

The following example assigns a billing address from the company's address book by specifying the `company_address_id` value returned by the [`createCompanyAddress`](../../b2b/company/mutations/create-address.md) mutation.

**Request:**

```graphql
mutation {
  setBillingAddressOnCart(
    input: {
      cart_id: "4JQaNVJokOpFxrykGVvYrjhiNv9qt31C"
      billing_address: {
        company_address_id: "MjAy"
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
    "setBillingAddressOnCart": {
      "cart": {
        "billing_address": {
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
      }
    }
  }
}
```

## Errors

| Error | Description |
| --- | --- |
| `Could not find a cart with ID "XXX"` | The specified `cart_id` value does not exist in the `quote_id_mask` table. |
| `Required parameter "cart_id" is missing` | The `cart_id` argument was omitted or contains an empty value. |
| `Required parameter "billing_address" is missing` | The `billing_address` argument was omitted or contains an empty array. |
| `The billing address must contain either "customer_address_id", "address", or "same_as_shipping".` | The billing address input object must include at least one of the following fields: `customer_address_id`, `address`, or `same_as_shipping`. |
| `The billing address cannot contain "customer_address_id" and "address" at the same time.` | The billing address input contains both `customer_address_id` and `address`. Only one can be used. |
| `Could not use the "same_as_shipping" option, because multiple shipping addresses have been set.` | The `same_as_shipping` option was provided, but the cart has multiple shipping addresses, making this option invalid. |
| `Could not use the "same_as_shipping" option, because the shipping address has not been set.` | The `same_as_shipping` option was provided, but no valid shipping address exists on the cart. |
| `Could not use the "use_for_shipping" option, because multiple shipping addresses have already been set.` | The `use_for_shipping` flag was provided, but the cart already has multiple shipping addresses. |
| `The current customer isn't authorized.` | An unauthorized user (guest) tried to set a billing address on behalf of an authorized user (customer), or a customer tried to set a billing address on behalf of another customer. |
| `An error occurred while processing the billing address.` | The billing address could not be validated. One or more required fields may be missing or invalid. |
| `Company address book is not enabled for this company.` | The `company_address_id` field was specified, but the customer's company does not have `is_company_address_book_enabled` set. |
