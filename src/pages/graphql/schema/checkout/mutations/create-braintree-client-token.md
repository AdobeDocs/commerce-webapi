---
title: createBraintreeClientToken mutation
contributor_name: Something Digital (now Rightpoint)
contributor_link: https://www.rightpoint.com/
---

# createBraintreeClientToken mutation

The `createBraintreeClientToken` mutation creates the client token for Braintree JavaScript SDK initialization.

## Syntax

```graphql
mutation {
  createBraintreeClientToken {
    String
  }
}
```

## Reference

The [`createBraintreeClientToken`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-createBraintreeClientToken) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

**Request:**

```graphql
mutation {
  createBraintreeClientToken
}
```

**Response:**

```json
{
  "data": {
    "createBraintreeClientToken": "4JQaNVJokOpFxrykGVvYrjhiNv9qt31C"
  }
}
```

## Errors

Error | Description
--- | ---
`The Braintree payment method is not active.` | The [Braintree](https://experienceleague.adobe.com/en/docs/commerce-admin/stores-sales/payments/braintree) payment method is disabled in admin.
