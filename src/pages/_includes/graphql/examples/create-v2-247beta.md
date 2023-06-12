The following call creates a new customer, assigning values for custom attributes.

The merchant has previously created the custom attributes `alternative_email` and `studies` for customers.

<CodeBlock slots="heading, code" repeat="2" languages="GRAPHQL,JSON"/>

#### Request

```graphql
mutation {
  createCustomerV2(
    input: {
      firstname: "Bob"
      lastname: "Loblaw"
      email: "bobloblaw@example.com"
      password: "b0bl0bl@w"
      is_subscribed: true
      custom_attributes: [
        {
          attribute_code: "alternative_email"
          value: "abc@example.com"
        },
        {
          attribute_code: "studies"
          value: "501,502"
          selected_options: [
            {
              uid: "NTEw"
              value: "501"
            },
            {
              uid: "NTEx"
              value: "502"
            }
          ]
        }
      ]
    }
  ) {
    customer {
      firstname
      lastname
      email
      is_subscribed
      custom_attributes {
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
}
```

#### Response

```json
{
  "data": {
    "createCustomer": {
      "customer": {
        "firstname": "Bob",
        "lastname": "Loblaw",
        "email": "bobloblaw@example.com",
        "is_subscribed": true,
        "custom_attributes": [
          {
            "code": "alternative_email",
            "value": "abc@example.com"
          },
          {
            "code": "studies",
            "selected_options": [
              {
                "label": "BSc",
                "value": "501"
              },
              {
                "label": "MBA",
                "value": "502"
              }
            ]
          }
        ]
      }
    }
  }
}
```
