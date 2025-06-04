---
title: exchangeExternalCustomerToken mutation
---

# exchangeExternalCustomerToken mutation

<InlineAlert variant="info" slots="text" />

This mutation is part of the [Storefront Compatibility Package](https://experienceleague.adobe.com/developer/commerce/storefront/setup/configuration/storefront-compatibility/v248/). It will be added to Adobe Commerce 2.4.9.

The `exchangeExternalCustomerToken` mutation provides the capability for social login authentication using App Builder. With integration token credentials, it allows a shopper to log in. If the shopper does not have an account, the mutation creates one.. It returns a customer authentication token.

This mutation requires that an [integration](https://experienceleague.adobe.com/en/docs/commerce-admin/systems/integrations) with the external authenticating system be configured and implemented. Adobe Commerce supports OAuth 1.0. Your calls must supply the following information:

* Consumer key
* Consumer secret
* Access token
* Token secret

You can view these values in the Admin at **System** > **Integrations**.

## Syntax

`mutation: {exchangeExternalCustomerToken(input: ExchangeExternalCustomerTokenInput!) {ExchangeExternalCustomerTokenOutput}}`

## Example usage

The following call creates a new customer if does not exist and returns the customer token.

**Request:**

```graphql
mutation {
    exchangeExternalCustomerToken(
        input: {
            customer: {
                firstname: "Roni"
                lastname: "Cost"
                email: "roni_cost@example.com"
                is_subscribed: false
            }
        }
    ) {
        customer {
            email
            firstname
            lastname
            is_subscribed
        }
        token
    }
}
```

**Response:**

```json
{
  "data": {
    "exchangeExternalCustomerToken": {
      "customer": {
        "email": "roni_cost@example.com",
        "firstname": "Roni",
        "lastname": "Cost",
        "is_subscribed": false
      },
      "token": "eyJraWQiOiIxIiwiYWxnIjoiSFMyNTYifQ.eyJ1aWQiOjYsInV0eXBpZCI6MywiaWF0IjoxNzQ4NDk5NDIxLCJleHAiOjE3NDg1MDMwMjF9.hDPDh41C4KOHloM2xlUYJ0asCqunQHCELG-3x_IsIZo"
    }
  }
}
```

## Errors

Error | Description
--- | ---
`"Email" is not a valid email address.` | The value provided in the `input`.`email` argument has an invalid format.
`Field CustomerCreateInput.email of required type String! was not provided` | The `input`.`email` argument was omitted.
`Field CustomerCreateInput.lastname of required type String! was not provided` | The `input`.`lastname` argument was omitted.
`Field CustomerCreateInput.firstname of required type String! was not provided` | The `input`.`firstname` argument was omitted.
`Field "xyz" is not defined by type CustomerCreateInput.` | The `input`.`xyz` argument is not defined in the schema.
`You do not have permission to access this resource.` | The user does not have required permission to use the mutation.

## Related topic

*  [customer query](../queries/customer.md)
