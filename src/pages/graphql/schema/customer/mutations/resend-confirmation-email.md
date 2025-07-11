---
title: resendConfirmationEmail mutation
---

# resendConfirmationEmail mutation

The `resendConfirmationEmail` mutation resends the confirmation email to a customer who has not completed the activation process.

The mutation returns `true` if the request was successful. Otherwise, it returns `false`.

## Syntax

`mutation: {resendConfirmationEmail(email: String!): Boolean}`

## Reference

The [`resendConfirmationEmail`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-resendConfirmationEmail) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following call sends a confirmation email to the specified email address if the customer is not confirmed.

**Request:**

```graphql
mutation ResendConfirmationEmail {
    resendConfirmationEmail(email: "roni_cost@example.com")
}
```

**Response:**

```json
{
  "data": {
    "resendConfirmationEmail": true
  }
}
```

## Errors

Error | Description
--- | ---
`There is no user registered with that email address.` | The `email` provided in the input does not belong to a registered customer.
`There was an error when sending the confirmation email'` | A general error message that appears on some internal system errors. The original error is logged and can be found in the application logs..
`Confirmation isn't needed.` | The customer with specified `email` is already confirmed.

## Related topic

*  [confirmEmail mutation](confirm-email.md)
