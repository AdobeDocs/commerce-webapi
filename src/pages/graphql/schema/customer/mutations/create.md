---
title: createCustomer mutation
edition: paas
---

# createCustomer mutation

<InlineAlert variant="warning" slots="text" />

We recommend using the [createCustomerV2 mutation](create-v2.md) to create a customer.

The `createCustomer` mutation creates a new customer.

In keeping with current security and privacy best practices, if you include the `date_of_birth` input attribute, be sure you are aware of any potential legal and security risks associated with the storage of customers' full date of birth (month, day, year) along with other personal identifiers, such as full name, before collecting or processing such data.

To return or modify information about a customer, we recommend you use customer tokens in the header of your GraphQL calls. However, you also can use [session authentication](https://developer.adobe.com/commerce/webapi/get-started/authentication/gs-authentication-session).

## Syntax

`mutation: {createCustomer(input: CustomerInput!) {CustomerOutput}}`

## Reference

The [`createCustomer`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-createCustomer) reference provides detailed information about the types and fields defined in this mutation.

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
