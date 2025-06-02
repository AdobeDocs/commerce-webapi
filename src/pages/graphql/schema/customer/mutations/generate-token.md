---
title: generateCustomerToken mutation
---

# generateCustomerToken mutation

Use the `generateCustomerToken` mutation to create a new customer token.

To return or modify information about a customer, we recommend you use customer tokens in the header of your GraphQL calls. However, you also can use [session authentication](https://developer.adobe.com/commerce/webapi/get-started/authentication/gs-authentication-session).

## Syntax

```graphql
mutation {
  generateCustomerToken(
    email: String!
    password: String!
  ) {
    token
  }
}
```

## Reference

The [`generateCustomerToken`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-generateCustomerToken) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following call creates a new customer token.

**Request:**

```graphql
mutation {
  generateCustomerToken(
    email: "bobloblaw@example.com"
    password: "b0bl0bl@w"
  ) {
    token
  }
}
```

**Response:**

```json
{
  "data": {
    "generateCustomerToken": {
      "token": "ar4116zozoagxty1xjn4lj13kim36r6x"
    }
  }
}
```

## Errors

Error | Description
--- | ---
`Specify the "email" value.` | The value specified in the `email` argument is empty.
`Specify the "password" value.` | The value specified value in the `password` argument is empty.
`The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.` | Authentication error. The email or password is incorrect, or the customer account is locked.
`This account isn't confirmed. Verify and try again.` | Authentication error. The email account is not confirmed.

## Related topics

*  [customer query](../queries/customer.md)
*  [revokeCustomerToken mutation](revoke-token.md)
