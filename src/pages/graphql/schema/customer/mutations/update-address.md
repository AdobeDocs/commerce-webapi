---
title: updateCustomerAddress mutation
---

import BetaNote from '/src/_includes/graphql/notes/beta.md'

# updateCustomerAddress mutation

Use the `updateCustomerAddress` mutation to update the customer's address.

To return or modify information about a customer, we recommend you use customer tokens in the header of your GraphQL calls. However, you also can use [session authentication](https://developer.adobe.com/commerce/webapi/get-started/authentication/gs-authentication-session).

## Syntax

`mutation: {updateCustomerAddress(id: Int!, input: CustomerAddressInput) {CustomerAddress}}`

## Reference

The [`updateCustomerAddress`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-updateCustomerAddress) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

### Update a customer address

The following call updates the customer's city and postcode.

**Request:**

```graphql
mutation {
  updateCustomerAddress(id:3, input: {
    city: "New City"
    postcode: "55555"
  }) {
    id
    city
    postcode
  }
}
```

**Response:**

```json
{
  "data": {
    "updateCustomerAddress": {
      "id": 3,
      "city": "New City",
      "postcode": 55555
    }
  }
}
```


### Update a customer address with custom attributes

<BetaNote />

The following call updates the customer's city, postcode, and custom attributes. The merchant has previously created the `station` and `services` attributes for customer addresses.

**Request:**

```graphql
mutation {
  updateCustomerAddress(id:3, input: {
    city: "New City"
    postcode: "55555"
    custom_attributesV2: [
      {
        attribute_code: "station",
        value: "Times Sq - 42 St"
      },
      {
        attribute_code: "services"
        value: "507"
        selected_options: [
          {
            uid: "NTA3"
            value: "507"
          }
        ]
      }
    ]
  }) {
    id
    city
    postcode
    custom_attributesV2 {
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
```

**Response:**

```json
{
  "data": {
    "updateCustomerAddress": {
      "id": 3,
      "city": "New City",
      "postcode": 55555,
      "custom_attributesV2": [
        {
          "code": "station",
          "value": "Times Sq - 42 St"
        },
        {
          "code": "services",
          "selected_options": [
            {
              "label": "hospital",
              "value": "507"
            }
          ]
        }
      ]
    }
  }
}
```

## Errors

Error | Description
--- | ---
`Address "id" value should be specified` | The `id` argument is zero.
`Could not find a address with ID "XXX"` | The customer address specified in the `id` argument does not exist.
`Current customer does not have permission to address with ID "XXX"` | The customer tries to update the address of another customer.
`Field "updateCustomerAddress" argument "id" of type "Int!" is required but not provided.` | The `id` argument was omitted.
`Field "updateCustomerAddress" argument "id" requires type Int!, found "XXX".` | The specified `id` argument value has the wrong type.
`"input" value must be specified` | The `input` argument was omitted or was specified but is empty.
`Syntax Error: Expected Name, found )` | The `id` and `input` arguments are omitted.
`The current customer isn't authorized.` | The current customer is not currently logged in, or the customer's token does not exist in the `oauth_token` table.

## Related topics

*  [customer query](../queries/customer.md)
*  [createCustomer mutation](create.md)
*  [updateCustomer mutation](update.md)
*  [createCustomerAddress mutation](create-address.md)
*  [deleteCustomerAddress mutation](delete-address.md)
