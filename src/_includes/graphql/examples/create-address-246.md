The following call creates an address for the specified customer.

<CodeBlock slots="heading, code" repeat="2" languages="GRAPHQL,JSON"/>

#### Request

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
      "default_billing": false
    }
  }
}
```
