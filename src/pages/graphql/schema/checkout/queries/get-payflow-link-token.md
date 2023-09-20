---
title: getPayflowLinkToken query
---

# getPayflowLinkToken query

The `getPayflowLinkToken` query retrieves PayPal payment credentials for a PayPal Payflow transaction. You must run this query after you [set the payment method](../../cart/mutations/set-payment-method.md) and [place the order](../../cart/mutations/place-order.md).

See [Paypal Payflow Link payment method](../../../payment-methods/payflow-link.md) for detailed information about the workflow of PayPal Payflow Link transactions.

## Syntax

`getPayflowLinkToken(input: PayflowLinkTokenInput): PayflowLinkToken`

## Reference

The [`getPayflowLinkToken`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-getPayflowLinkToken) reference provides detailed information about the types and fields defined in this query.

## Example

The following example requests a token in a Payflow Link transaction.

**Request:**

```graphql
{
  getPayflowLinkToken(input: {cart_id: "123"}) {
    secure_token
    secure_token_id
    mode
    paypal_url
  }
}
```

**Response:**

```json
{
    "data": {
        "getPayflowLinkToken": {
            "secure_token": "<token-value>",
            "secure_token_id": "<token-value-id>",
            "mode": "TEST",
            "paypal_url": "https://pilot-payflowlink.paypal.com"
        }
    }
}
```

## Errors

Error | Description
--- | ---
`No such entity with cartId` | An invalid `cartId` was provided
