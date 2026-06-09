---
title: getPaymentSDK query
description: This query retrieves the payment PayPal SDK URLs and other related values.
---

# getPaymentSDK query

<InlineAlert variant="info" slots="text" />

This query is available automatically on Adobe Commerce as a Cloud Service. On Adobe Commerce on Cloud and on-premises instances, you must install [Payment Services for Adobe Commerce](https://commercemarketplace.adobe.com/magento-payment-services.html) 2.10.0 or higher to use this query.

The `getPaymentSDK` query gets the payment PayPal SDK URLs and other related values.

## Syntax

```graphql
{
    getPaymentSDK(
      location: PaymentLocation!
    )GetPaymentSDKOutput
}
```

## Reference

The [`getPaymentSDK`](/reference/graphql/saas/index.md#getpaymentsdk) reference provides detailed information about the types and fields defined in this query.

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
                            "value": "https:\/\/www.paypal.com\/sdk\/js?client-id=..."
                        }
                    ]
                },
                {
                    "code": "payment_services_paypal_apple_pay",
                    "params": [
                        {
                            "name": "src",
                            "value": "https:\/\/www.paypal.com\/sdk\/js?client-id=..."
                        }
                    ]
                },
                {
                    "code": "payment_services_paypal_google_pay",
                    "params": [
                        {
                            "name": "src",
                            "value": "https:\/\/www.paypal.com\/sdk\/js?client-id=..."
                        }
                    ]
                },
                {
                    "code": "payment_services_paypal_hosted_fields",
                    "params": [
                        {
                            "name": "src",
                            "value": "https:\/\/www.paypal.com\/sdk\/js?client-id=..."
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
