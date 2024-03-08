---
title: updateCustomerAddress mutation
---

import Example246 from '/src/_includes/graphql/examples/update-address-246.md'
import Example247 from '/src/_includes/graphql/examples/update-address-247beta.md'
import CustomerAddressInput from '/src/_includes/graphql/customer-address-input-24.md'
import CustomerAddressOutput from '/src/_includes/graphql/customer-address-output-24.md'

# updateCustomerAddress mutation

Use the `updateCustomerAddress` mutation to update the customer's address.

To return or modify information about a customer, we recommend you use customer tokens in the header of your GraphQL calls. However, you also can use [session authentication](https://developer.adobe.com/commerce/webapi/get-started/authentication/gs-authentication-session).

## Syntax

`mutation: {updateCustomerAddress(id: Int!, input: CustomerAddressInput) {CustomerAddress}}`

## Example usage

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2" theme="light"/>

### 2.4.6

<Example246 />

### 2.4.7-beta

<Example247 />

## Input attributes

The `updateCustomerAddress` object contains the following inputs:

Attribute |  Data Type | Description
--- | --- | ---
`id` | Int! | The ID assigned to the address object
`CustomerAddressInput` | [CustomerAddress](#customeraddressinput-attributes)| An array containing the customer's shipping and billing addresses

<CustomerAddressInput />

## Output attributes

The `updateCustomerAddress` mutation returns the `CustomerAddress` object.

### CustomerAddress attributes

<CustomerAddressOutput />

## Errors

Error | Description
--- | ---
`Address "id" value should be specified` | The `id` argument is zero.
`Could not find a address with ID "XXX"` | The customer address specified in the `id` argument does not exist.
`Current customer does not have permission to address with ID "XXX"` | The customer tries to update the address of another customer.
`Field "updateCustomerAddress" argument "id" of type "Int!" is required but not provided.` | The `id` argument was omitted.
`Field "updateCustomerAddress" argument "id" requires type Int!, found "XXX".` | The specified `id` argument value has the wrong type.
`"input" value must be specified` | The `input` argument was omitted or was specified but is empty.
`Syntax Error: Expected Name, found )` | The `id` and `input` arguments are omitted.
`The current customer isn't authorized.` | The current customer is not currently logged in, or the customer's token does not exist in the `oauth_token` table.

## Related topics

*  [customer query](../queries/customer.md)
*  [createCustomer mutation](create.md)
*  [updateCustomer mutation](update.md)
*  [createCustomerAddress mutation](create-address.md)
*  [deleteCustomerAddress mutation](delete-address.md)
