---
title: updateCustomerEmail mutation
description: Use the updateCustomerEmail mutation to change the email address for the logged-in customer.
---

# updateCustomerEmail mutation

Use the `updateCustomerEmail` mutation to change the email address for the logged-in customer.

To return or modify information about a customer, we recommend you use customer tokens in the header of your GraphQL calls. However, you also can use [session authentication](/get-started/authentication/gs-authentication-session/index.md).

## Syntax

`mutation: updateCustomerEmail(email: String! password: String!): CustomerOutput`

## Reference

The `updateCustomerEmail` reference provides detailed information about the types and fields defined in this mutation.

* [Adobe Commerce as a Cloud Service](/reference/graphql/saas/index.md#updatecustomeremail)

* [On-Premises/Cloud](/reference/graphql/index.md#updatecustomeremail)

## Example usage

The following call updates the customer's email address.

**Request:**

```graphql
mutation {
  updateCustomerEmail(email: "new_email@example.com", password: "roni_cost3@example.com") {
    customer {
      email
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "updateCustomerEmail": {
      "customer": {
        "email": "new_email@example.com"
      }
    }
  }
}
```

## Related topics

*  [customer query](../queries/customer.md)
*  [updateCustomerV2 mutation](create-v2.md)
