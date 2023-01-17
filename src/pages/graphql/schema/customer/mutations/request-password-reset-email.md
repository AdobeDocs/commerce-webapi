---
title: requestPasswordResetEmail mutation | Commerce Web APIs
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

# requestPasswordResetEmail mutation

The `requestPasswordResetEmail` mutation triggers the password reset email by the provided email address. Use it to initiate the process to reset the registered customer's password before calling the [resetPassword](reset-password.md) mutation.

When the customer clicks the `Set a New Password` button, the application sends an email to the customer that contains a URL for resetting their password.

![Reset password email](../../../../_images/graphql/reset-password-email.png)

The URL has the following format:

```text
https://<MAGENTOSITE>/customer/account/createPassword/?token=gh80pkjGdsPyiXc0sUUXswX1uGN7crUr
```

Use the value of the token in the `resetPassword` mutation.

## Syntax

`mutation: {requestPasswordResetEmail(email: String!): Boolean}`

## Example usage

The following call triggers the password reset email.

**Request:**

```graphql
mutation {
  requestPasswordResetEmail(
    email: "roni_cost@example.com"
  )
}
```

**Response:**

```json
{
  "data": {
    "requestPasswordResetEmail": true
  }
}
```

## Input arguments

You must specify the customer's email address in the `email` input argument.

## Output attributes

The `requestPasswordResetEmail` mutation returns `true` if both of the following operations are successful:

-  The reset password operation initiates.
-  The application sends an email containing a reset link.

Otherwise, the mutation returns `false`.

## Errors

Error | Description
--- | ---
`Cannot reset the customer's password` | A general error message that appears on some internal system errors. The original error is logged and can be found in the application logs.
`The account is locked` | You cannot modify a locked customer account.
`The email address has an invalid format.` | The value provided in the `email` argument has an invalid format.
`You must specify an email address.` | An empty value is provided in the `email` argument.

## Related topics

[resetPassword mutation](reset-password.md)
