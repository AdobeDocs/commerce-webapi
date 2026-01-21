---
title: deleteCustomerAddress mutation
---

# deleteCustomerAddress mutation

<InlineAlert variant="warning" slots="text" />

This mutation has been deprecated in Adobe Commerce as a Cloud Service and will be deprecated in Adobe Commerce 2.4.9. We recommend using the [deleteCustomerAddressV2 mutation](./delete-address-v2.md) instead.

Use the `deleteCustomerAddress` mutation to delete the specified customer address. It returns a Boolean value that indicates whether the operation was successful.

We recommend you use a customer token in the header of your call to delete a customer. However, you also can use [session authentication](https://developer.adobe.com/commerce/webapi/get-started/authentication/gs-authentication-session).

## Syntax

```graphql
mutation {
  deleteCustomerAddress(
    id: Int!
  ) {
    Boolean
  }
}
```

## Reference

The [`deleteCustomerAddress`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-deleteCustomerAddress) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following call deletes a customer's address.

**Request:**

```graphql
mutation {
  deleteCustomerAddress(id: 4)
}
```

**Response:**

```json
{
  "data": {
    "deleteCustomerAddress": true
  }
}
```

## Input attributes

The `deleteCustomerAddress` mutation requires the following input:

Attribute |  Data Type | Description
--- | --- | ---
`id` | Int! | The ID assigned to the address object

## Output attributes

The `deleteCustomerAddress` mutation returns a Boolean value that indicates whether the operation was successful.

## Errors

Error | Description
--- | ---
`Address "id" value should be specified` | The `id` argument is zero.
`Could not find a address with ID "XXX"` | The customer address specified in the `id` argument does not exist.
`Customer Address XXX is set as default billing address and cannot be deleted` | You cannot delete a default billing address.
`Customer Address XXX is set as default shipping address and cannot be deleted` | You cannot delete a default shipping address.
`Field "deleteCustomerAddress" argument "id" requires type Int!, found "XXX".` | The specified `id` argument value has the wrong type.
`Syntax Error: Expected Name, found )` | The `id` argument was omitted or does not have a value.
`The current customer isn't authorized.` | The current customer is not currently logged in, or the customer's token does not exist in the `oauth_token` table.

## Related topics

*  [customer query](../queries/customer.md)
*  [createCustomer mutation](create.md)
*  [updateCustomer mutation](update.md)
*  [createCustomerAddress mutation](create-address.md)
*  [updateCustomerAddress mutation](update-address.md)
