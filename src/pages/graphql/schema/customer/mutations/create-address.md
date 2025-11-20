---
title: createCustomerAddress mutation
---

# createCustomerAddress mutation

Use the `createCustomerAddress` mutation to create the customer's address.

To return or modify information about a customer, we recommend you use customer tokens in the header of your GraphQL calls. However, you also can use [session authentication](https://developer.adobe.com/commerce/webapi/get-started/authentication/gs-authentication-session).

## Syntax

`mutation: {createCustomerAddress(input: CustomerAddressInput!) {CustomerAddress}}`

## Reference

The [`createCustomerAddress`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-createCustomerAddress) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

### Create a customer address

The following call creates an address for the specified customer.

**Request:**

```graphql
mutation {
  createCustomerAddress(input: {
    region: {
      region: "Arizona"
      region_code: "AZ"
    }
    country_code: US
    street: ["123 Main Street"]
    telephone: "7777777777"
    postcode: "77777"
    city: "Phoenix"
    firstname: "Bob"
    lastname: "Loblaw"
    default_shipping: true
    default_billing: false
  }) {
    id
    region {
      region
      region_code
    }
    country_code
    street
    telephone
    postcode
    city
    default_shipping
    default_billing
  }
}
```

**Response:**

```json
{
  "data": {
    "createCustomerAddress": {
      "id": 4,
      "region": {
        "region": "Arizona",
        "region_code": "AZ"
      },
      "country_code": "US",
      "street": [
        "123 Main Street"
      ],
      "telephone": "7777777777",
      "postcode": "77777",
      "city": "Phoenix",
      "default_shipping": true,
      "default_billing": false
    }
  }
}
```

### Create an address with custom attributes

The following call creates an address for the specified customer, assigning values for custom attributes.

The merchant has previously created the custom attributes `station` and `services` for customer addresses.

#### Request

```graphql
mutation {
  createCustomerAddress(input: {
    region: {
      region_id: 4
      region: "Arizona"
      region_code: "AZ"
    }
    country_code: US
    street: ["123 Main Street"]
    telephone: "7777777777"
    postcode: "77777"
    city: "Phoenix"
    firstname: "Bob"
    lastname: "Loblaw"
    default_shipping: true
    default_billing: false
    custom_attributesV2: [
      {
        attribute_code: "station"
        value: "Encanto/Central Ave"
      },
      {
        attribute_code: "services"
        value: "507,508"
        selected_options: [
          {
            uid: "NTA3"
            value: "507"
          },
          {
            uid: "NTA4"
            value: "508"
          }
        ]
      }
    ]
  }) {
    region {
      region_id
      region
      region_code
    }
    country_code
    street
    telephone
    postcode
    city
    default_shipping
    default_billing
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

#### Response

```json
{
  "data": {
    "createCustomerAddress": {
      "id": 4,
      "region": {
        "region": "Arizona",
        "region_code": "AZ"
      },
      "country_code": "US",
      "street": [
        "123 Main Street"
      ],
      "telephone": "7777777777",
      "postcode": "77777",
      "city": "Phoenix",
      "default_shipping": true,
      "default_billing": false,
      "custom_attributesV2": [
        {
          "code": "station",
          "value": "Encanto/Central Ave"
        },
        {
          "code": "services",
          "selected_options": [
            {
              "label": "hospital",
              "value": "507"
            },
            {
              "label": "police",
              "value": "508"
            }
          ]
        }
      ]
    }
  }
}
```

### Create an address that includes a custom file

<Edition name="saas" />

The following call creates an address for the specified customer that includes a file that was uploaded to Amazon S3 using the [`initiateUpload` mutation](../../uploads/mutations/initiate-upload.md).

#### Request

```graphql
mutation {
  createCustomerAddress(
    input: {
      "region": {
        "region": "Arizona",
        "region_code": "AZ"
      },
      "country_code": "US",
      "street": [
        "123 Main Street"
      ],
      "telephone": "5553217890",
      "postcode": "77777",
      "city": "Phoenix",
      "default_shipping": true,
      "default_billing": false,
      custom_attributesV2: [
        {
          attribute_code: "test_file_add"
          value: "example_a367071e1639483de735c639.jpg"
        }
      ]
    }
  ) {
    id
  }
}
```

#### Response

```json
{
  "data": {
    "createCustomerAddress": {
      "id": 5,
    }
  }
}
```

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
