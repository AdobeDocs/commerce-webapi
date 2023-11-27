---
title: resetPassword mutation
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

# resetPassword mutation

The `resetPassword` mutation resets customer password using a reset password token and the customer's email address. Use it to set a new password for the registered customer after calling the [requestPasswordResetEmail](request-password-reset-email.md) mutation.

The new password must satisfy the password policies set for the store.

The mutation returns `true` if the request was successful. Otherwise, it returns `false`.

<InlineAlert variant="info" slots="text" />

The reset password token value can also be found in the `customer_entity`.`rp_token` database table.

## Syntax

`mutation: {resetPassword(email: String!, resetPasswordToken: String!, newPassword: String!): Boolean}`

## Reference

The [`resetPassword`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-resetPassword) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following call sets a new customer password.

**Request:**

```graphql
mutation {
  resetPassword(
    email: "roni_cost@example.com",
    resetPasswordToken: "gh80pkjGdsPyiXc0sUUXswX1uGN7crUr",
    newPassword: "new_password"
  )
}
```

**Response:**

```json
{
  "data": {
    "resetPassword": true
  }
}
```

## Errors

Error | Description
--- | ---
`Cannot set the customer's password` | A general error message that appears on some internal system errors. The original error is logged and can be found in the application logs.
`newPassword must be specified` | The `newPassword` argument is empty.
`resetPasswordToken must be specified` | The `resetPasswordToken` argument is empty.
`The account is locked` | You cannot modify a locked customer account.
`The email address has an invalid format.` | The value provided in the `email` argument has an invalid format.
`You must specify an email address.` | The `email` argument is empty.

## Related topics

-  [requestPasswordResetEmail mutation](request-password-reset-email.md)
