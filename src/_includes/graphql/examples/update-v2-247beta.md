The following call updates the first name, newsletter subscription status, and custom attribute values for a specific customer. The merchant has previously created the `random_attribute` and `studies` attributes for customer addresses.

<CodeBlock slots="heading, code" repeat="2" languages="GRAPHQL,JSON"/>

#### Request

```graphql
mutation {
  updateCustomerV2(
    input: {
      firstname: "Robert"
      is_subscribed: false
      custom_attributes: [
        {
          attribute_code: "random_attribute"
          value: "abc123"
        },
        {
          attribute_code: "studies"
          value: "502"
          selected_options: [
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
    "updateCustomerV2": {
      "customer": {
        "firstname": "Robert",
        "is_subscribed": false,
        "custom_attributes": [
          {
            "code": "random_attribute",
            "value": "abc123"
          },
          {
            "code": "studies",
            "selected_options": [
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
