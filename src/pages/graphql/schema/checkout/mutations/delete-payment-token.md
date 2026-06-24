---
title: deletePaymentToken mutation
description: The deletePaymentToken mutation deletes a payment token from the system. Use the customerPaymentTokens query to retrieve all stored payment methods associa...
---

# deletePaymentToken mutation

The `deletePaymentToken` mutation deletes a payment token from the system. Use the [customerPaymentTokens query](../queries/customer-payment-tokens.md) to retrieve all stored payment methods associated with a particular customer.

<InlineAlert variant="info" slots="text" />

You must specify the customer's authorization token in the header of the call.

## Syntax

```graphql
mutation {
  deletePaymentToken(
    public_hash: String!
  ) {
    DeletePaymentTokenOutput
  }
}
```

## Reference

The `deletePaymentToken` reference provides detailed information about the types and fields defined in this mutation.

* [Adobe Commerce as a Cloud Service](/reference/graphql/saas/mutations.md#deletepaymenttoken)

* [On-Premises/Cloud](/reference/graphql/latest/mutations.md#deletepaymenttoken)

## Example usage

The following example deletes the Discover Card listed in the results of the `customerPaymentTokens` query. The `public_hash` you specify will be unique to your application.

**Request:**

```graphql
mutation {
  deletePaymentToken(
    public_hash: "377c1514e0..."
  ) {
    result
    customerPaymentTokens {
      items {
        details
        public_hash
        payment_method_code
        type
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "deletePaymentToken": {
      "result": true,
      "customerPaymentTokens": {
        "items": [
          {
            "details": "{\"type\":\"VI\",\"maskedCC\":\"1111\",\"expirationDate\":\"09\\/2022\"}",
            "public_hash": "f5816fe2ab...",
            "payment_method_code": "braintree",
            "type": "card"
          }
        ]
      }
    }
  }
}
```

## Errors

| Error | Description |
| --- | --- |
| `Could not find a token using public hash: xxxxxxxx` | The customer token specified in the `public_hash` argument does not exist in the `vault_payment_token` table. |
| `The current customer isn't authorized.` | The current customer is not currently logged in, or the customer's token does not exist in the `oauth_token` table. |

## Related topics

[customerPaymentTokens query](../queries/customer-payment-tokens.md)
