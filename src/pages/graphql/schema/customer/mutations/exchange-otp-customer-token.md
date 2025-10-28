---
title: exchangeOtpForCustomerToken mutation
edition: saas
---

# exchangeOtpForCustomerToken mutation

The `exchangeOtpForCustomerToken` mutation allows you specify a shopper's email address and one-time password (OTP) and receive a customer token in exchange. This mutation is typically used in scenarios where a customer needs to authenticate using an OTP sent to their email or phone.

Upon successful exchange, the module invalidates the OTP so it cannot be reused. The endpoint also integrates with reCAPTCHA configuration to mitigate automated abuse.

## Syntax

`mutation: {
    exchangeOtpForCustomerToken(email: String!, otp: String!) {CustomerToken}}`

## Example usage

The following example uses the specified email and one-time password (OTP) to return a customer token.

**Request:**

```graphql
mutation {
  exchangeOtpForCustomerToken(
    email: "customer@example.com"
    otp: "gTQySBnj2w4ql9EL6XdnF267mzkK3cQG"
  ) {
    token
  }
}
```

**Response:**

```json
{
  "data": {
    "exchangeOtpForCustomerToken": {
      "token": "<customer-access-token>"
    }
  }
}
```

## Related topic

*  [customer query](../queries/customer.md)
