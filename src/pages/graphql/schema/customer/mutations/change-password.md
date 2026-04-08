---
title: changeCustomerPassword mutation
---

# changeCustomerPassword mutation

Use the `changeCustomerPassword` mutation to change the password for the logged-in customer.

To return or modify information about a customer, we recommend you use customer tokens in the header of your GraphQL calls. However, you also can use [session authentication](https://developer.adobe.com/commerce/webapi/get-started/authentication/gs-authentication-session).

## Syntax

`mutation: {changeCustomerPassword(currentPassword: String! newPassword: String!) {Customer}}`

## Reference

The `changeCustomerPassword` reference provides detailed information about the types and fields defined in this mutation.

* &#8203;<Edition name="saas" /> [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-changeCustomerPassword)

* &#8203;<Edition name="paas" /> [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-changeCustomerPassword)

## Example usage

The following call updates the customer's password.

**Request:**

```graphql
mutation {
  changeCustomerPassword(
    currentPassword: "roni_cost3@example.com"
    newPassword: "roni_cost4@example.com"
  ) {
    id
    email
  }
}
```

**Response:**

```json
{
  "data": {
    "changeCustomerPassword": {
      "id": 1,
      "email": "roni_cost@example.com"
    }
  }
}
```

## Errors

Error | Description
--- | ---
`The current customer isn't authorized.` | The customer's token does not exist in the `oauth_token` table.
`Invalid login or password.` | The password specified in the `currentPassword` argument is not valid.
`Specify the "currentPassword" value.` | The password specified in the `currentPassword` argument is empty.
`Specify the "newPassword" value.` | The password specified in the `newPassword` argument is empty.
`The account is locked.` | The customer's password cannot be changed because the account is locked.

## Related topics

*  [customer query](../queries/customer.md)
*  [createCustomer mutation](create.md)
*  [updateCustomer mutation](update.md)
