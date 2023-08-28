The following call updates the customer's city and postcode.

<CodeBlock slots="heading, code" repeat="2" languages="GRAPHQL,JSON"/>

#### Request

```graphql
mutation {
  updateCustomerAddress(id:3, input: {
    city: "New City"
    postcode: "55555"
  }) {
    id
    city
    postcode
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
      "postcode": 55555
    }
  }
}
```
