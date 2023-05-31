---
title: updateCustomerV2 mutation | Commerce Web APIs
---

import Customer from '/src/pages/_includes/graphql/customer-output-24.md'
import Example246 from '/src/pages/_includes/graphql/examples/update-v2-246.md'
import Example247 from '/src/pages/_includes/graphql/examples/update-v2-247beta.md'

# updateCustomerV2 mutation

The `updateCustomerV2` mutation updates the personal information in an existing customer account. Use the [`updateCustomerEmail` mutation](update-email.md) to update the customer's email address.

The `updateCustomerV2` mutation supersedes the `updateCustomer` mutation as the means to update a customer account. The input objects differ between these two mutations. The `updateCustomer` mutation required the `CustomerInput` object, as did the `createCustomer` mutation. Updating a customer does not require any specific attribute, while several attributes are required when you create a customer. You could not determine this by looking at the schema for those mutations. The `updateCustomerV2` mutation requires the `CustomerUpdateInput` object, which it does not share with the [`createCustomerV2` mutation](create-v2.md).

To return or modify information about a customer, we recommend you use customer tokens in the header of your GraphQL calls. However, you also can use [session authentication](https://developer.adobe.com/commerce/webapi/get-started/authentication/gs-authentication-session).

## Syntax

`mutation: {updateCustomerV2(input: CustomerUpdateInput!) {CustomerOutput}}`

## Example usage

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2" theme="light"/>

### 2.4.6

<Example246 />

### 2.4.7-beta

<Example247 />

## Input attributes

The following table lists the attributes you can use as input for the `updateCustomerV2` mutation.

Attribute |  Data Type | Description
--- | --- | ---
`allow_remote_shopping_assistance` | Boolean | Indicates whether the customer has enabled remote shopping assistance
`custom_attributes` | [AttributeValueInput!] | The customer's custom attributes (2.4.7-beta only)
`date_of_birth` | String | The customer's date of birth. In keeping with current security and privacy best practices, be sure you are aware of any potential legal and security risks associated with the storage of customers' full date of birth (month, day, year) along with other personal identifiers, such as full name, before collecting or processing such data.
`dob` | String | Deprecated. Use `date_of_birth` instead. The customer's date of birth
`firstname` | String | The customer's first name
`gender` | Int | The customer's gender (Male - 1, Female - 2)
`is_subscribed` | Boolean | Indicates whether the customer subscribes to the store's newsletter
`lastname` | String | The customer's last name
`middlename` | String | The customer's middle name
`password` | String | The customer's password
`prefix` | String | An honorific, such as Dr., Mr., or Mrs.
`suffix` | String | A value such as Sr., Jr., or III
`taxvat` | String | The customer's Tax/VAT number (for corporate customers)

The `AttributeValueInput` object contains the following attributes:

import BetaNote from '/src/pages/_includes/graphql/notes/beta.md'

<BetaNote />

Attribute |  Data Type | Description
--- | --- | ---
`attribute_code` | String! | The code of the attribute
`selected_options` | [AttributeInputSelectedOption!] | An array containing selected options for a select or multiselect attribute
`value` | String | The value assigned to the attribute

The `AttributeInputSelectedOption` specifies selected option for dropdown or multiselect attribute value.
This object contains the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`value` | String! | The attribute option value

## Output attributes

The `CustomerOutput` object contains the `Customer` object.

The following table lists the top-level attributes of the `customer` object. See the [`customer` query](../../customer/queries/customer.md) for complete details about this object.

<Customer />

## Related topics

*  [customer query](../../customer/queries/customer.md)
*  [createCustomerV2 mutation](create-v2.md)
*  [createCustomerAddress mutation](create-address.md)
*  [updateCustomerAddress mutation](update-address.md)
*  [updateCustomerEmail mutation](update-email.md)
*  [deleteCustomerAddress mutation](delete-address.md)
