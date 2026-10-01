---
title: createBraintreeClientToken mutation
description: The createBraintreeClientToken mutation creates the client token for Braintree JavaScript SDK initialization.
ediition: paas
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

The [`createBraintreeClientToken`](/reference/graphql/latest/mutations.md#createbraintreeclienttoken) reference provides detailed information about the types and fields defined in this mutation.

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

| Error | Description |
| --- | --- |
| `The Braintree payment method is not active.` | The [Braintree](https://experienceleague.adobe.com/en/docs/commerce-admin/stores-sales/payments/braintree) payment method is disabled in admin. |

<Edition slots="text" backgroundcolor="gray"/>

[Thanks to Something Digital (now Rightpoint) for contributing this topic!](https://www.rightpoint.com/)
