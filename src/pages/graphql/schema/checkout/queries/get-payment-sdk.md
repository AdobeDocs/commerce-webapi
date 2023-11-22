---
title: getPaymentSDK query
---

# getPaymentSDK query

The `getPaymentSDK` query gets the payment paypal SDK urls and other related values.

## getPaymentSDK object

The `getPaymentSDK` object must contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`code` | String! | The code for the payment method used in the order
`params` | String! | The SDK parameters for the payment method

## Example usage

### `getPaymentSDK`

The following example shows the `getPaymentSDK` query:

**Request:**

```text
query {
  getPaymentSDK(input: { location: "CHECKOUT", methodCode: "payment_services_paypal_hosted_fields" }) {
    sdkParams {
      code
      params {
        name
        value
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "getPaymentSDK": {
      "sdkParams": [
        {
          "code": "payment_services_paypal_hosted_fields",
          "params": [
            {
              "name": "src",
              "value": "https://www.paypal.com/sdk/js?client-id=AeFUI2PCqy7MicQ1gLbJf_8T7XUlEG51Pdd7sn2LE3d0_qAVhVBm4VOpPGmV08S9qsMCPXSCiBslhV53&intent=authorize&locale=en_US&merchant-id=2PZE7VHLY4B94&currency=USD&disable-funding=bancontact,boleto,boletobancario,blik,eps,giropay,ideal,itau,mercadopago,multibanco,mybank,oxxo,payu,p24,satispay,sepa,sofort,trustly,wechatpay&components=hosted-fields"
            },
            {
              "name": "data-partner-attribution-id",
              "value": "MagentoPayments_SP_PCP_Int"
            },
            {
              "name": "data-client-token",
              "value": "eyJicmFpbnRyZWUiOnsiYXV0aG9yaXphdGlvbkZpbmdlcnByaW50IjoiYmZhNzc0YjUxOTNkZDlmYzI1MTk1ZGUxZGRkZjAwMDJkYjUzMmUyNWU4YjA3YjQwMzFhNTlkMjMyMjA4MTdkNnxtZXJjaGFudF9pZD1yd3dua3FnMnhnNTZobTJuJnB1YmxpY19rZXk9NjNrdm4zN3Z0MjlxYjRkZiZjcmVhdGVkX2F0PTIwMjMtMTAtMTFUMTQ6NDY6MzkuNzI2WiIsInZlcnNpb24iOiIzLXBheXBhbCJ9LCJwYXlwYWwiOnsiaWRUb2tlbiI6bnVsbCwiYWNjZXNzVG9rZW4iOiJBMjFBQUlSQWw2N2tQZm1FVndkYl9fOU1XSEd6OFlHNjVlWmZxdjJTVHhfcUUwTU1kQno3M1NWRDRHSlh1MlNEVGs2dlVhLXZad1R2TmZ6WEF6ZDBkWDFsM1A4UDhlTXN3In19"
            },
            {
              "name": "data-expires-in",
              "value": "3600"
            }
          ]
        }
      ]
    }
  }
}
```
