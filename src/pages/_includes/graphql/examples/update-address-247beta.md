The following call updates the customer's city, postcode, and custom attributes. The merchant has previously created the `station` and `services` attributes for customer addresses.

<CodeBlock slots="heading, code" repeat="2" languages="GRAPHQL,JSON"/>

#### Request

```graphql
mutation {
  updateCustomerAddress(id:3, input: {
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
    id
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

#### Response

```json
{
  "data": {
    "updateCustomerAddress": {
      "id": 3,
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
