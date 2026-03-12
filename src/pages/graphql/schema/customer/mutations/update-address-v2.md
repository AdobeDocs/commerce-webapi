---
title: updateCustomerAddressV2 mutation
---

# updateCustomerAddressV2 mutation

Use the `updateCustomerAddressV2` mutation to update the customer's address.

To return or modify information about a customer, we recommend you use customer tokens in the header of your GraphQL calls. However, you also can use [session authentication](https://developer.adobe.com/commerce/webapi/get-started/authentication/gs-authentication-session).

<InlineAlert variant="info" slots="text1" />

This mutation is part of the [Storefront Compatibility Package](https://experienceleague.adobe.com/developer/commerce/storefront/setup/configuration/storefront-compatibility/v248/). It will be added to Adobe Commerce 2.4.9.

## Syntax

```graphql
mutation {
  updateCustomerAddressV2(
    uid: ID!,
    input: CustomerAddressInput
  ) {
    CustomerAddress
  }
}
```

<!---
## Reference

The [`updateCustomerAddressV2`](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-updateCustomerAddressV2) reference provides detailed information about the types and fields defined in this mutation.
-->

## Example usage

### Update a customer address

The following call updates the customer's city and postcode.

**Request:**

```graphql
mutation {
  updateCustomerAddressV2(uid:"ODU=", input: {
    city: "New City"
    postcode: "55555"
  }) {
    uid
    city
    postcode
  }
}
```

**Response:**

```json
{
  "data": {
    "updateCustomerAddressV2": {
      "uid": "ODU=",
      "city": "New City",
      "postcode": 55555
    }
  }
}
```

### Update a customer address with custom attributes

The following call updates the customer's city, postcode, and custom attributes. The merchant has previously created the `station` and `services` attributes for customer addresses.

**Request:**

```graphql
mutation {
  updateCustomerAddressV2(uid: "ODU=", input: {
    city: "New City"
    postcode: "55555"
    custom_attributesV2: [
      {
        attribute_code: "station",
        value: "Times Sq - 42 St"
      },
      {
        attribute_code: "services"
        value: "507"
        selected_options: [
          {
            uid: "NTA3"
            value: "507"
          }
        ]
      }
    ]
  }) {
    uid
    city
    postcode
    custom_attributesV2 {
      code
      ... on AttributeValue {
        value
      }
      ... on AttributeSelectedOptions {
        selected_options {
          label
          value
        }
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "updateCustomerAddressV2": {
      "uid": "ODU=",
      "city": "New City",
      "postcode": 55555,
      "custom_attributesV2": [
        {
          "code": "station",
          "value": "Times Sq - 42 St"
        },
        {
          "code": "services",
          "selected_options": [
            {
              "label": "hospital",
              "value": "507"
            }
          ]
        }
      ]
    }
  }
}
```

## Errors

Error | Description
--- | ---
`Address "uid" value must be specified` | The `uid` argument is null or empty.
`Could not find an address with ID "XXX"` | The customer address specified in the `uid` argument does not exist.
`Current customer does not have permission to address with ID "XXX"` | The customer tries to update the address of another customer.
`Field "updateCustomerAddressV2" argument "uid" of type "ID!" is required but not provided.` | The `uid` argument was omitted.
`Field "updateCustomerAddressV2" argument "uid" requires type ID!, found "XXX".` | The specified `uid` argument value has the wrong type.
`"input" value must be specified` | The `input` argument was omitted or was specified but is empty.
`Syntax Error: Expected Name, found )` | The `uid` and `input` arguments are omitted.
`The current customer isn't authorized.` | The current customer is not currently logged in, or the customer's token does not exist in the `oauth_token` table.

## Related topics

*  [customer query](../queries/customer.md)
*  [createCustomer mutation](create.md)
*  [updateCustomer mutation](update.md)
*  [createCustomerAddress mutation](create-address.md)
*  [deleteCustomerAddress mutation](delete-address.md)
