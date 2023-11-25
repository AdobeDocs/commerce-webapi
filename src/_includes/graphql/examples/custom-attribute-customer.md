The following call returns custom attributes for the logged-in customer. Provide the customer's token in the header section of the query.

**Request:**

```graphql
{
  customer {
    firstname
    lastname
    suffix
    email
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
```

**Response:**

```json
{
  "data": {
    "customer": {
      "firstname": "John",
      "lastname": "Doe",
      "suffix": null,
      "email": "jdoe@example.com",
      "custom_attributes": [
        {
          "code": "reward_update_notification",
          "value": "0"
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
```