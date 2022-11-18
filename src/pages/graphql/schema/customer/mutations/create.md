---
title: createCustomer mutation | Commerce Web APIs
---

# createCustomer mutation

<InlineAlert variant="warning" slots="text" />

We recommend using the [createCustomerV2 mutation](create-v2.md) to create a customer.

The `createCustomer` mutation creates a new customer.

To return or modify information about a customer, we recommend you use customer tokens in the header of your GraphQL calls. However, you also can use [session authentication](https://developer.adobe.com/commerce/webapi/get-started/authentication/gs-authentication-session).

## Syntax

`mutation: {createCustomer(input: CustomerInput!) {CustomerOutput}}`

## Example usage

The following call creates a new customer.

**Request:**

```graphql
mutation {
  createCustomer(
    input: {
      firstname: "Bob"
      lastname: "Loblaw"
      email: "bobloblaw@example.com"
      password: "b0bl0bl@w"
      is_subscribed: true
    }
  ) {
    customer {
      firstname
      lastname
      email
      is_subscribed
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
        "is_subscribed": true
      }
    }
  }
}
```

## Input attributes

The following table lists the attributes you can use as input for the `createCustomer` mutation. The [Customer attributes](../../customer/queries/customer.md#customer-attributes) table lists the attributes the application returns.

import CreateCustomer from '/src/pages/_includes/graphql/create-customer.md'

<CreateCustomer />

## Output attributes

The `createCustomer` mutation returns the `CustomerOutput` object.

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

*  [customer query](../queries/customer.md)
*  [updateCustomer mutation](update.md)
*  [createCustomerAddress mutation](create-address.md)
*  [updateCustomerAddress mutation](update-address.md)
*  [deleteCustomerAddress mutation](delete-address.md)
