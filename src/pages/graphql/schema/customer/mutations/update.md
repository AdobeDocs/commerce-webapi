---
title: updateCustomer mutation
---

# updateCustomer mutation

<InlineAlert variant="warning" slots="text" />

We recommend using the [updateCustomerV2 mutation](update-v2.md) to update a customer.

The `updateCustomer` mutation updates the customer's personal information.

To return or modify information about a customer, we recommend you use customer tokens in the header of your GraphQL calls. However, you also can use [session authentication](https://developer.adobe.com/commerce/webapi/get-started/authentication/gs-authentication-session).

## Syntax

`mutation: {updateCustomer(input: CustomerInput!) {CustomerOutput}}`

## Reference

The [`updateCustomer`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-updateCustomer) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following call updates the first name and email address for a specific customer.

**Request:**

```graphql
mutation {
  updateCustomer(
    input: {
      firstname: "Rob"
      email: "robloblaw@example.com"
    }
  ) {
    customer {
      firstname
      email
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "updateCustomer": {
      "customer": {
        "firstname": "Rob",
        "email": "robloblaw@example.com"
      }
    }
  }
}
```

## Errors

Error | Description
--- | ---
`"input" value should be specified` | The `input` argument is empty.
`"Email" is not a valid email address.` | The value provided in the `input`.`email` argument has an invalid format.
`Provide the current "password" to change "email".` | To change an email address, specify the correct customer password in the `password` argument.
`A customer with the same email address already exists in an associated website.` | You cannot apply a new email address to a current customer because another user has the same email address.
`Invalid login or password.` | The value specified in the `password` argument is incorrect.
`The current customer isn't authorized.` | The current customer is not currently logged in, or the customer's token does not exist in the `oauth_token` table.

## Related topics

*  [customer query](../queries/customer.md)
*  [createCustomer mutation](create.md)
*  [createCustomerAddress mutation](create-address.md)
*  [updateCustomerAddress mutation](update-address.md)
*  [deleteCustomerAddress mutation](delete-address.md)
