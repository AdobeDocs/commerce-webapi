---
title: getPaymentSDK query
---

# getPaymentSDK query

The `getPaymentSDK` query gets the payment paypal SDK urls and other related values.

## Syntax

```graphql
{ 
    getPaymentSDK(
        getPaymentSDKInput: getPaymentOrderInput! 
    ): getPaymentSDKOutput    
}
```

## Input attributes

The `getPaymentSDKInput` object must contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`location` | PaymentLocation! | The origin location for that payment request. The possible values are
PRODUCT_DETAIL, MINICART, CART, CHECKOUT, ADMIN
`methodCode` | String! | Optional. The code for the selected payment method

## Output attributes

The `getPaymentSDKOutput` object must contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`code` | String! | The code for the payment method used in the order
`params` | String! | The SDK parameters for the payment method

### `params` object

The `params` object provides details about the SDK parameters:

Attribute |  Data Type | Description
--- | --- | ---
`name` | String! | The name of the SDK parameter
`value` | String! | The value of the SDK parameter

### `getPaymentSDK` query example

The following example runs the `getPaymentSDK` query. The payment method was previously set to `payment_services_paypal_hosted_fields`.

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
