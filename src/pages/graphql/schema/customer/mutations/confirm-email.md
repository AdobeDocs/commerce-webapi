---
title: confirmEmail mutation | Commerce Web APIs
---

# confirmEmail mutation

The `confirmEmail` mutation completes the customer activation process by confirming validity of a customer's email address. Adobe Commerce sends a confirmation key to the customer when they request to create an account. The customer must supply this confirmation key.

## Syntax

`mutation: {confirmEmail(input: ConfirmEmailInput!) {CustomerOutput}}`

## Reference

The [`confirmEmail`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-confirmEmail) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following call confirms `roni_cost@example.com` as the email address of the customer by using the confirmation key `abcde`.

**Request:**

```graphql
mutation {
    confirmEmail(input: {
        email: "roni_cost@example.com"
        confirmation_key: "abcde"
    }) {
        customer {
            email
        }
    }
}
```

**Response:**

```json
{
  "confirmEmail": {
    "customer": {
      "email": "roni_cost@example.com"
    }
  }
}
```

## Errors

Error | Description
--- | ---
`Email is invalid.` | The value provided in the `input`.`email` argument has an invalid format.
`The confirmation token is invalid. Verify the token and try again.` | The provided confirmation token is wrong or does not belong to the provided email.
`The account is already active.` | The provided email belongs to an account which is already active.

## Related topics

*  [customer query](../queries/customer.md)
