---
title: confirmEmail mutation | Commerce Web APIs
---

# changeCustomerPassword mutation

Use the `confirmEmail` mutation to confirm the email address of a customer.

## Syntax

`mutation: {confirmEmail(input: ConfirmEmailInput!) {CustomerOutput}}`

The following call confirms `roni_cost@example.com` as the email address of the customer by using the confirmation key `abcde` that should have been received by the customer in his / her email inbox.

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

## Input attributes

The following table lists the attributes you can use as input for the `confirmEmail` mutation.

import ConfirmEmail from '/src/pages/_includes/graphql/confirm-email-input.md'

<ConfirmEmail />

## Output attributes

The `confirmEmail` mutation returns the `CustomerOutput` object.

The following table lists the top-level attributes of the `customer` object. See the [`customer` query](../../customer/queries/customer.md) for complete details about this object.

import Customer from '/src/pages/_includes/graphql/customer-output-24.md'

<Customer />

## Errors

Error | Description
--- | ---
`Email is invalid.` | The value provided in the `input`.`email` argument has an invalid format.
`The confirmation token is invalid. Verify the token and try again.` | The provided confirmation token is wrong or does not belong to the provided email.
`The account is already active.` | The provided email belongs to an account which is already active.

## Related topics

*  [customer query](../queries/customer.md)
*  [updateCustomer mutation](update.md)
*  [createCustomerAddress mutation](create-address.md)
*  [updateCustomerAddress mutation](update-address.md)
*  [deleteCustomerAddress mutation](delete-address.md)
