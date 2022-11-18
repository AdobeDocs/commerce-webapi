---
title: updateCustomerEmail mutation | Commerce Web APIs
---

# updateCustomerEmail mutation

Use the `updateCustomerEmail` mutation to change the email address for the logged-in customer.

To return or modify information about a customer, we recommend you use customer tokens in the header of your GraphQL calls. However, you also can use [session authentication](https://developer.adobe.com/commerce/webapi/get-started/authentication/gs-authentication-session).

## Syntax

`mutation: updateCustomerEmail(email: String! password: String!): CustomerOutput`

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

## Input attributes

The `updateCustomerEmail` mutation requires the following inputs:

Attribute |  Data Type | Description
--- | --- | ---
`email` | String! | The customer's new email address
`password` | String! | The customer's password

## Output attributes

The `updateCustomerEmail` mutation returns the `customer` object.

The following table lists the top-level attributes of the `customer` object. See the [`customer` query](../../customer/queries/customer.md) for complete details about this object.

import Customer from '/src/pages/_includes/graphql/customer-output-24.md'

<Customer />

## Related topics

*  [customer query](../queries/customer.md)
*  [updateCustomerV2 mutation](create-v2.md)
