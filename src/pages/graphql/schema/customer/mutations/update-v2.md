---
title: updateCustomerV2 mutation
---

import BetaNote from '/src/_includes/graphql/notes/beta.md'
import BetaNote2 from '/src/_includes/graphql/notes/beta.md'

# updateCustomerV2 mutation

The `updateCustomerV2` mutation updates the personal information in an existing customer account. Use the [`updateCustomerEmail` mutation](update-email.md) to update the customer's email address.

The `updateCustomerV2` mutation supersedes the `updateCustomer` mutation as the means to update a customer account. The input objects differ between these two mutations. The `updateCustomer` mutation required the `CustomerInput` object, as did the `createCustomer` mutation. Updating a customer does not require any specific attribute, while several attributes are required when you create a customer. You could not determine this by looking at the schema for those mutations. The `updateCustomerV2` mutation requires the `CustomerUpdateInput` object, which it does not share with the [`createCustomerV2` mutation](create-v2.md).

To return or modify information about a customer, we recommend you use customer tokens in the header of your GraphQL calls. However, you also can use [session authentication](https://developer.adobe.com/commerce/webapi/get-started/authentication/gs-authentication-session).

In keeping with current security and privacy best practices, if you include the `date_of_birth` input attribute, be sure you are aware of any potential legal and security risks associated with the storage of customers' full date of birth (month, day, year) along with other personal identifiers, such as full name, before collecting or processing such data.

<BetaNote />

As of version 2.4.7, you can use the `custom_attributes` field to define an array of custom attributes to update.

## Syntax

`mutation: {updateCustomerV2(input: CustomerUpdateInput!) {CustomerOutput}}`

## Reference

The [`updateCustomerV2`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-updateCustomerV2) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

### Update a customer

The following call updates the first name and the newsletter subscription status for a specific customer.

**Request:**

```graphql
mutation {
  updateCustomerV2(
    input: {
      firstname: "Robert"
      is_subscribed: false
    }
  ) {
    customer {
      firstname
      is_subscribed
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "updateCustomerV2": {
      "customer": {
        "firstname": "Robert",
        "is_subscribed": false
      }
    }
  }
}
```

### Update a customer with custom attributes

<BetaNote2 />

The following call updates the first name, newsletter subscription status, and custom attribute values for a specific customer. The merchant has previously created the `random_attribute` and `studies` attributes for customer addresses.

**Request:**

```graphql
mutation {
  updateCustomerV2(
    input: {
      firstname: "Robert"
      is_subscribed: false
      custom_attributes: [
        {
          attribute_code: "random_attribute"
          value: "abc123"
        },
        {
          attribute_code: "studies"
          value: "502"
          selected_options: [
            {
              uid: "NTEx"
              value: "502"
            }
          ]
        }
      ]
    }
  ) {
    customer {
      firstname
      is_subscribed
      custom_attributes {
        code
        ... on AttributeValue {
          value
        }
        ... on AttributeSelectedOptions {
          selected_options {
            label
            value
          }
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
    "updateCustomerV2": {
      "customer": {
        "firstname": "Robert",
        "is_subscribed": false,
        "custom_attributes": [
          {
            "code": "random_attribute",
            "value": "abc123"
          },
          {
            "code": "studies",
            "selected_options": [
              {
                "label": "MBA",
                "value": "502"
              }
            ]
          }
        ]
      }
    }
  }
}
```

## Related topics

*  [customer query](../queries/customer.md)
*  [createCustomerV2 mutation](create-v2.md)
*  [createCustomerAddress mutation](create-address.md)
*  [updateCustomerAddress mutation](update-address.md)
*  [updateCustomerEmail mutation](update-email.md)
*  [deleteCustomerAddress mutation](delete-address.md)
