The following call creates an address for the specified customer, assigning values for custom attributes.

The merchant has previously created the custom attributes `station` and `services` for customer addresses.

<CodeBlock slots="heading, code" repeat="2" languages="GRAPHQL,JSON"/>

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
