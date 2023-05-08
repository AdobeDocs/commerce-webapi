---
title: createCustomerV2 mutation | Commerce Web APIs
---

# createCustomerV2 mutation

The `createCustomerV2` mutation creates a customer account. Use the [`createCustomerAddress` mutation](create-address.md) to complete the customer profile and define billing and shipping addresses.

The `createCustomerV2` mutation supersedes the `createCustomer` mutation as the means to create a customer account. The input objects differ between these two mutations. The `createCustomer` mutation required the `CustomerInput` object, as did the `updateCustomer` mutation. The attributes required for creating a customer are different than those for updating a customer, but you could not determine this by looking at the schema. The `createCustomerV2` mutation requires the `CustomerCreateInput` object, which it does not share with the [`updateCustomerV2` mutation](create-v2.md).

## Syntax

`mutation: {createCustomerV2(input: CustomerCreateInput!) {CustomerOutput}}`

## Example usage

The following call creates a new customer.

**Request:**

```graphql
mutation {
  createCustomerV2(
    input: {
      firstname: "Bob"
      lastname: "Loblaw"
      email: "bobloblaw@example.com"
      password: "b0bl0bl@w"
      is_subscribed: true
      custom_attributes: [
        {
          attribute_code: "alternative_email"
          value: "abc@example.com"
        },
        {
          attribute_code: "studies"
          value: "501,502"
          selected_options: [
            {
              uid: "NTEw"
              value: "501"
            },
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
      lastname
      email
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
    "createCustomer": {
      "customer": {
        "firstname": "Bob",
        "lastname": "Loblaw",
        "email": "bobloblaw@example.com",
        "is_subscribed": true,
        "custom_attributes": [
          {
            "code": "alternative_email",
            "value": "abc@example.com"
          },
          {
            "code": "studies",
            "selected_options": [
              {
                "label": "BSc",
                "value": "501"
              },
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

## Input attributes

The following table lists the attributes you can use as input for the `createCustomerV2` mutation.

Attribute |  Data Type | Description
--- | --- | ---
`allow_remote_shopping_assistance` | Boolean | Indicates whether the customer has enabled remote shopping assistance
`date_of_birth` | String | The customer's date of birth. In keeping with current security and privacy best practices, be sure you are aware of any potential legal and security risks associated with the storage of customers' full date of birth (month, day, year) along with other personal identifiers, such as full name, before collecting or processing such data.
`custom_attributes` | [AttributeValueInput!] | The customer's custom attributes
`dob` | String | Deprecated. Use `date_of_birth` instead. The customer's date of birth
`email` | String! | The customer's email address
`firstname` | String! | The customer's first name
`gender` | Int | The customer's gender (Male - 1, Female - 2)
`is_subscribed` | Boolean | Indicates whether the customer subscribes to the store's newsletter
`lastname` | String! | The customer's last name
`middlename` | String | The customer's middle name
`password` | String | The customer's password
`prefix` | String | An honorific, such as Dr., Mr., or Mrs.
`suffix` | String | A value such as Sr., Jr., or III
`taxvat` | String | The customer's Tax/VAT number (for corporate customers)

The `AttributeValueInput` object contains the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`attribute_code` | String! | The code of the attribute
`selected_options` | [AttributeInputSelectedOption!] | An array containing selected options for a select or multiselect attribute
`value` | String | The value assigned to the attribute

The `AttributeInputSelectedOption` specifies selected option for dropdown or multiselect attribute value.
This object contains the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`value` | String! | The attribute option value

## Output attributes

The `CustomerOutput` object contains the `Customer` object.

The following table lists the top-level attributes of the `customer` object. See the [`customer` query](../../customer/queries/customer.md) for complete details about this object.

import Customer from '/src/pages/_includes/graphql/customer-output-24.md'

<Customer />

## Errors

Error | Description
--- | ---
`A customer with the same email address already exists in an associated website.` | The email provided in the `input`.`email` argument belongs to an existing customer.
`"Email" is not a valid email address.` | The value provided in the `input`.`email` argument has an invalid format.
`Field CustomerInput.email of required type String! was not provided` | The `input`.`email` argument was omitted.
`Field "xxx" is not defined by type CustomerInput.` | The `input`.`xxx` argument is undefined.
`Required parameters are missing: First Name` | The `input`.`firstname` argument was omitted or contains an empty value.

## Related topics

*  [customer query](../../customer/queries/customer.md)
*  [updateCustomerV2 mutation](update-v2.md)
*  [createCustomerAddress mutation](create-address.md)
*  [updateCustomerAddress mutation](update-address.md)
*  [deleteCustomerAddress mutation](delete-address.md)
