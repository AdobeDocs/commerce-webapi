---
title: createCustomerAddress mutation | Commerce Web APIs
---

import Example246 from '/src/pages/_includes/graphql/examples/create-address-246.md'
import Example247 from '/src/pages/_includes/graphql/examples/create-address-247beta.md'
import CustomerAddressInput from '/src/pages/_includes/graphql/customer-address-input-24.md'
import CustomerAddressOutput from '/src/pages/_includes/graphql/customer-address-output-24.md'

# createCustomerAddress mutation

Use the `createCustomerAddress` mutation to create the customer's address.

To return or modify information about a customer, we recommend you use customer tokens in the header of your GraphQL calls. However, you also can use [session authentication](https://developer.adobe.com/commerce/webapi/get-started/authentication/gs-authentication-session).

## Syntax

`mutation: {createCustomerAddress(input: CustomerAddressInput!) {CustomerAddress}}`

## Example usage

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2" theme="light"/>

### 2.4.6

<Example246 />

### 2.4.7-beta

<Example247 />

## Input attributes

Attribute |  Data Type | Description
--- | --- | ---
`id` | Int | The ID assigned to the address object
`CustomerAddressInput` | [CustomerAddress](#customeraddressinput-attributes) | An array containing the customer's shipping and billing addresses

<CustomerAddressInput />

## Output attributes

The `createCustomerAddress` mutation returns a `CustomerAddress` object.

### CustomerAddress attributes


<CustomerAddressOutput />

## Errors

Error | Description
--- | ---
`Expected type CustomerAddressInput!, found "".` | The `input` attribute contains an empty value.
`"input" value should be specified` | The `input` argument is specified but is empty.
`Required parameters are missing: firstname` | The `input.firstname` argument was omitted or contains an empty value.
`"Street Address" cannot contain more than 2 lines.` | The `input.street` argument contains array with more than two elements.
`Syntax Error: Expected Name, found )` | The `input` argument was omitted.
`The current customer isn't authorized.` | The current customer is not currently logged in, or the customer's token does not exist in the `oauth_token` table.

## Related topics

*  [customer query](../queries/customer.md)
*  [createCustomer mutation](create.md)
*  [updateCustomer mutation](update.md)
*  [updateCustomerAddress mutation](update-address.md)
*  [deleteCustomerAddress mutation](delete-address.md)
