---
title: Vaulting a credit card without a purchase
description: Learn how to vault a payment method without a typical checkout authorization.
keywords:
  - GraphQL
  - Payments
---

# Vaulting a credit card without a checkout authorization

These steps describe the flow of requests and responses required to [vault a payment method](https://experienceleague.adobe.com/en/docs/commerce-merchant-services/payment-services/payments-checkout/vaulting#vaulting-without-purchase) without the typical checkout authorization with Payment Services enabled.

## Vault without purchase workflow

![Payment Services sequence diagram](../../../_images/graphql/payment-services-vault-without-purchase.svg)

1. Run the [`getPaymentConfig`](../../payment-services-extension/queries/get-payment-config.md) query to fetch the payment configuration needed to render details about PayPal components, such as hosted fields, smart buttons, and Apple Pay.

1. Commerce returns payment configuration information.