---
title: deleteCustomerAddressV2 mutation
---

# deleteCustomerAddressV2 mutation

Use the `deleteCustomerAddressV2` mutation to delete the specified customer address. It returns a Boolean value that indicates whether the operation was successful.

We recommend you use a customer token in the header of your call to delete a customer. However, you also can use [session authentication](https://developer.adobe.com/commerce/webapi/get-started/authentication/gs-authentication-session).

<InlineAlert variant="info" slots="text1" />

This mutation is part of the [Storefront Compatibility Package](https://experienceleague.adobe.com/developer/commerce/storefront/setup/configuration/storefront-compatibility/v248/). It will be added to Adobe Commerce 2.4.9.

## Syntax

```graphql
mutation {
  deleteCustomerAddressV2(
    uid: ID!
  ) {
    Boolean
  }
}
```

<!--->
## Reference

The [`deleteCustomerAddressV2`](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-deleteCustomerAddressV2) reference provides detailed information about the types and fields defined in this mutation.
-->

## Example usage

The following call deletes a customer's address.

**Request:**

```graphql
mutation {
  deleteCustomerAddressV2(uid: "ODU=")
}
```

**Response:**

```json
{
  "data": {
    "deleteCustomerAddressV2": true
  }
}
```

## Input attributes

The `deleteCustomerAddressV2` mutation requires the following input:

Attribute |  Data Type | Description
--- | --- | ---
`uid` | ID! | The unique ID for a `CustomerAddress` object.

## Output attributes

The `deleteCustomerAddressV2` mutation returns a Boolean value that indicates whether the operation was successful.

## Errors

Error | Description
--- | ---
`Address "uid" value must be specified` | The `uid` argument is null or empty.
`Could not find an address with ID "XXX"` | The customer address specified in the `uid` argument does not exist.
`Customer Address XXX is set as default billing address and cannot be deleted` | You cannot delete a default billing address.
`Customer Address XXX is set as default shipping address and cannot be deleted` | You cannot delete a default shipping address.
`Field "deleteCustomerAddressV2" argument "uid" requires type ID!, found "XXX".` | The specified `uid` argument value has the wrong type.
`Syntax Error: Expected Name, found )` | The `uid` argument was omitted or does not have a value.
`The current customer isn't authorized.` | The current customer is not currently logged in, or the customer's token does not exist in the `oauth_token` table.

## Related topics

*  [customer query](../queries/customer.md)
*  [createCustomer mutation](create.md)
*  [updateCustomer mutation](update.md)
*  [createCustomerAddress mutation](create-address.md)
*  [updateCustomerAddress mutation](update-address.md)
