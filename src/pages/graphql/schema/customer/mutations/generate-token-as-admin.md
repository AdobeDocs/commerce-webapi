---
title: generateCustomerTokenAsAdmin mutation | Commerce Web APIs
contributor_name: EY 
---

# generateCustomerTokenAsAdmin mutation

The `generateCustomerTokenAsAdmin` mutation generates a new customer token as an admin so that an administrator can perform remote shopping assistance on behalf of the customer. For example, if a customer has asked for help adding a product into their cart, you would specify the token returned by the `generateCustomerTokenAsAdmin` mutation in the header of your [`addProductsToCart` mutation](../../cart/mutations/add-products.md).

To run this mutation, the customer must have enabled the **Allow remote shopping assistance** feature. You can specify the `allow_remote_shopping_assistance` attribute in a [`customer` query](../../customer/queries/customer.md) to determine whether the customer enabled this feature.

## Syntax

```graphql
mutation {generateCustomerTokenAsAdmin(input: GenerateCustomerTokenAsAdminInput!) {GenerateCustomerTokenAsAdminOutput}}
```

## Example usage

The following call creates a new customer token.

**Request:**

```graphql
mutation{
  generateCustomerTokenAsAdmin(input: {
    customer_email: "customer1@mail.com"
  }){
    customer_token
  }
}
```

**Response:**

```json
{
  "data": {
    "generateCustomerTokenAsAdmin": {
      "customer_token": "cr0717abzoagxty1xjn4lj13kim36r6x"
    }
  }
}
```

## Input attributes

The `generateCustomerTokenAsAdmin` mutation requires the following input attribute:

Attribute |  Data Type | Description
--- | --- | ---
`customer_email` | String! | The customer's email address

## Output attributes

The `generateCustomerTokenAsAdmin` mutation returns a valid customer token as the output.

Attribute |  Data Type | Description
--- | --- | ---
`customer_token` | String! | The customer token

## Related topics

*  [customer query](../queries/customer.md)
*  [revokeCustomerToken mutation](revoke-token.md)
