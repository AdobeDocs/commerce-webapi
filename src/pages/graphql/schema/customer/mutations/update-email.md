---
title: updateCustomerEmail mutation
---

# updateCustomerEmail mutation

Use the `updateCustomerEmail` mutation to change the email address for the logged-in customer.

To return or modify information about a customer, we recommend you use customer tokens in the header of your GraphQL calls. However, you also can use [session authentication](https://developer.adobe.com/commerce/webapi/get-started/authentication/gs-authentication-session).

## Syntax

`mutation: updateCustomerEmail(email: String! password: String!): CustomerOutput`

## Reference

The `updateCustomerEmail` reference provides detailed information about the types and fields defined in this mutation.

* &#8203;<Edition name="saas" /> [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-updateCustomerEmail)

* &#8203;<Edition name="paas" /> [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-updateCustomerEmail)

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
