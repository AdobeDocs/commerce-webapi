The following call updates the first name and the newsletter subscription status for a specific customer.

<CodeBlock slots="heading, code" repeat="2" languages="GRAPHQL,JSON"/>

#### Request

```graphql
mutation {
  updateCustomerV2(
    input: {
      firstname: "Robert"
      is_subscribed: false
    }
  ) {
    customer {
      firstname
      is_subscribed
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
        "is_subscribed": false
      }
    }
  }
}
```
