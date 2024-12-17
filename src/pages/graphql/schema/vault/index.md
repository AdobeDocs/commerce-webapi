---
title: Vault
---

# Vault

<InlineAlert variant="info" slots="text" />

This functionality is available only if you have installed [Payment Services for Adobe Commerce](https://commercemarketplace.adobe.com/magento-payment-services.html) 2.10.0 or higher.

The vault-related changes to the schema allow you to generate stored payment details and to modify a payment tokens.

Once vaulted, a payment method can be reused as many times as possible without your customer needing to re-enter or authenticate their payment information.

These endpoints can be used to vault stored payment details without a purchase, but it is possible to [vault a payment method during checkout](https://developer.adobe.com/commerce/webapi/graphql/payment-services/vault/), see the [`customer-payment-tokens`](https://developer.adobe.com/commerce/webapi/graphql/schema/checkout/queries/customer-payment-tokens/) query for more information.
