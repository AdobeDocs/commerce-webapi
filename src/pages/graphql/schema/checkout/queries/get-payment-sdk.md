---
title: getPaymentSDK query
---

# getPaymentSDK query

<InlineAlert variant="info" slots="text" />

This query is available only if you have installed [Payment Services for Adobe Commerce](https://commercemarketplace.adobe.com/magento-payment-services.html) 2.3.0 or higher.

The `getPaymentSDK` query gets the payment paypal SDK URLs and other related values.

## Syntax

```graphql
{
    getPaymentSDK(
      location: PaymentLocation!
    )GetPaymentSDKOutput
}
```

## Example usage

The following example runs the `getPaymentSDK` query.

**Request:**

```graphql
query {
  getPaymentSDK(location: CHECKOUT) {
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
                    "code": "payment_services_paypal_smart_buttons",
                    "params": [
                        {
                            "name": "src",
                            "value": "https:\/\/www.paypal.com\/sdk\/js?client-id=AeFUI2PCqy7MicQ1gLbJf_8T7XUlEG51Pdd7sn2LE3d0_qAVhVBm4VOpPGmV08S9qsMCPXSCiBslhV53&intent=capture&locale=en_US&merchant-id=2PZE7VHLY4B94&currency=USD&commit=false&disable-funding=bancontact,boleto,boletobancario,blik,eps,giropay,ideal,itau,mercadopago,multibanco,mybank,oxxo,payu,p24,satispay,sepa,sofort,trustly,wechatpay,applepay&enable-funding=card,paylater&components=buttons"
                        }
                    ]
                },
                {
                    "code": "payment_services_paypal_apple_pay",
                    "params": [
                        {
                            "name": "src",
                            "value": "https:\/\/www.paypal.com\/sdk\/js?client-id=AeFUI2PCqy7MicQ1gLbJf_8T7XUlEG51Pdd7sn2LE3d0_qAVhVBm4VOpPGmV08S9qsMCPXSCiBslhV53&intent=capture&locale=en_US&merchant-id=2PZE7VHLY4B94&currency=USD&commit=false&disable-funding=bancontact,boleto,boletobancario,blik,eps,giropay,ideal,itau,mercadopago,multibanco,mybank,oxxo,payu,p24,satispay,sepa,sofort,trustly,wechatpay,credit,card&enable-funding=applepay&components=buttons"
                        }
                    ]
                },
                {
                    "code": "payment_services_paypal_google_pay",
                    "params": [
                        {
                            "name": "src",
                            "value": "https:\/\/www.paypal.com\/sdk\/js?client-id=AeFUI2PCqy7MicQ1gLbJf_8T7XUlEG51Pdd7sn2LE3d0_qAVhVBm4VOpPGmV08S9qsMCPXSCiBslhV53&intent=authorize&locale=en_US&merchant-id=2PZE7VHLY4B94&currency=USD&disable-funding=bancontact,boleto,boletobancario,blik,eps,giropay,ideal,itau,mercadopago,multibanco,mybank,oxxo,payu,p24,satispay,sepa,sofort,trustly,wechatpay&components=googlepay"
                        }
                    ]
                },
                {
                    "code": "payment_services_paypal_hosted_fields",
                    "params": [
                        {
                            "name": "src",
                            "value": "https:\/\/www.paypal.com\/sdk\/js?client-id=AeFUI2PCqy7MicQ1gLbJf_8T7XUlEG51Pdd7sn2LE3d0_qAVhVBm4VOpPGmV08S9qsMCPXSCiBslhV53&intent=capture&locale=en_US&merchant-id=2PZE7VHLY4B94&currency=USD&disable-funding=bancontact,boleto,boletobancario,blik,eps,giropay,ideal,itau,mercadopago,multibanco,mybank,oxxo,payu,p24,satispay,sepa,sofort,trustly,wechatpay&components=hosted-fields"
                        },
                        {
                            "name": "data-partner-attribution-id",
                            "value": "MagentoPayments_SP_PCP_Int"
                        },
                        {
                            "name": "data-client-token",
                            "value": "eyJicmFpbnRyZWUiOnsiYXV0aG9yaXphdGlvbkZpbmdlcnByaW50IjoiMTFiZmFjZGM5YWEyM2ZhZjdmNTQwMzc0NGZmYzEwMjI4YjFjODBmZjg4NDdlYjcyMjMyMmM1OTE0MTU3OWYzZHxtZXJjaGFudF9pZD1yd3dua3FnMnhnNTZobTJuJnB1YmxpY19rZXk9NjNrdm4zN3Z0MjlxYjRkZiZjcmVhdGVkX2F0PTIwMjQtMDItMTNUMTU6Mjc6NTkuNDg5WiIsInZlcnNpb24iOiIzLXBheXBhbCJ9LCJwYXlwYWwiOnsiaWRUb2tlbiI6bnVsbCwiYWNjZXNzVG9rZW4iOiJBMjFBQUlEc1hFbHFlVzh6d1FTTGZsVFdkMHR1UkhIYlBYVTdfYTQzNVFxUVQ5MTRmUjhzclN1RTQzdlg4TnVXV0N1NHZIeUVoVG1BUnhVekdnU3R3VDJCNVFtczBrVjRnIn19"
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

## Input attributes

The `getPaymentSDK` query must contain the following attribute:

Attribute |  Data Type | Description
--- | --- | ---
`location` | PaymentLocation! | The origin location for that payment request. The possible values are PRODUCT_DETAIL, MINICART, CART, CHECKOUT, ADMIN

## Output attributes

The `GetPaymentSDKOutput` object must contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`code` | String | The payment method code as defined in the payment gateway
`params` | [SDKParams] | PayPal parameters required to load JS SDK

### `SDKParams` object

The `SDKParams` object provides details about the SDK parameters:

Attribute |  Data Type | Description
--- | --- | ---
`name` | String! | The name of the SDK parameter
`value` | String! | The value of the SDK parameter
