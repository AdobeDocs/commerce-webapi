---
title: Payment Services as payment method
description: Learn how to use the GraphQL API mutation for the Payment Services solution.
keywords:
  - GraphQL
  - Payment Services
---

# Payment services as payment method

Payment Services for Adobe Commerce and Magento Open Source is your turnkey self-service solution, including sandbox testing and a simple setup, for providing robust and secure payment processing for your Commerce websites.

## Payment services checkout workflow

![PayPal Payments Advanced sequence diagram](../../_images/graphql/payment-services.svg)

These steps describe the additional flow of calls required to complete a typical [Checkout](../tutorials/checkout/index.md) authorization with the `Payment Services` functionality enabled.

1. Fetch the payment configuration with `GetPaymentConfig` in order to render payment methods, or PayPal components.

1. Use the `setPaymentMethodOnCart` mutation to [set the payment method](../tutorials/checkout/set-payment-method.md) for the order.

1. Create the order needed with the `CreatePaymentOrder` mutation to set payment source.

1. Get order information with query `GetPaymentOrder`. PayPal order details for the user cart are needed for hosted fields if the Signifyd integration enabled.

1. [Place the order](../tutorials/checkout/place-order.md) with the additional data previously sent with the `SetPaymentAndPlaceOrder` call.

## Example Usage

The following example shows the `GetPaymentConfig` mutation constructed for the Payment Services payment method.

**Query:**

```text
getPaymentConfig(
    input: {
        location: $location,
        methodCode: $methodCode   
    }
) {
    config {
        code
        config {
            ... on HostedFieldsConfig {
                code
                sdkParams {
                    name
                    value
                }
                isVisible
                paymentSource
                threeDS
                isCommerceVaultEnabled
                ccVaultCode
            }
            ... on SmartButtonsConfig {
                code
                sdkParams {
                    name
                    value
                }
                isVisible
                messageStyles {
                    layout
                    logo {
                        type
                    }
                }
                canDisplayMessage
                buttonStyles {
                    layout
                    color
                    shape
                    height
                    label
                    tagline
                }
            }
            ... on ApplePayConfig {
                code
                sdkParams {
                    name
                    value
                }
                isVisible
                buttonStyles {
                    layout
                    color
                    shape
                    height
                    label
                    tagline
                }
            }
        }
    }
}}
```
