---
title: Vaulting a card during a checkout authorization
description: Learn how to vault a credit card during a typical checkout authorization.
keywords:
  - GraphQL
  - Payments
---

# Vaulting a card during a checkout authorization

These steps describe the flow of requests and responses required to [vault a credit card](https://experienceleague.adobe.com/en/docs/commerce-merchant-services/payment-services/payments-checkout/vaulting#vaulting-a-payment-method-during-checkout) during a typical checkout authorization with Payment Services enabled.

## Vault during checkout workflow

![Payment Services sequence diagram](../../../_images/graphql/payment-services-vault-with-purchase.svg)

1. Run the [`getPaymentConfig`](../../payment-services-extension/queries/get-payment-config.md) query to fetch the payment configuration needed to render details about PayPal components, such as hosted fields, smart buttons, and Apple Pay.

1. Commerce returns payment configuration information.

1. Run [`setPaymentMethodOnCart`](../../schema/cart/mutations/set-payment-method.md) to [set the payment method](../../tutorials/checkout/set-payment-method.md).

1. Adobe Commerce returns a `Cart` object.

1. Run [`createPaymentOrder`](../../payment-services-extension/mutations/create-payment-order.md) to begin the authorization process.

1. Commerce forwards the request to PayPal.

1. PayPal returns an `id` value.

1. Adobe Commerce generates a `order_id` and forwards the value in the `mp_order_id` field and the PayPal response in the `id` field.

1. (Optional) If hosted fields and the Signifyd integration are enabled, run [`getPaymentOrder`](../../payment-services-extension/queries/get-payment-order.md).

1. (Optional) Adobe Commerce returns details about the payment order.

1. Run [`placeOrder`](../../schema/cart/mutations/place-order.md).

1. Commerce sends an authorization request to PayPal.

1. PayPal returns the result to Commerce.

1. Commerce creates an order.