---
title: Payment Services extension mutations
description: Learn how to use the GraphQL mutations to integrate the Payment Services extension.
keywords:
  - GraphQL
  - Payments
---

# Payment Services extension mutations

The Payment Services extension mutations allow you to perform operations such as creating, updating, and deleting payment-related data, enabling you to manage the payment services extension with ease.

If you have installed [Payment Services for Adobe Commerce](https://commercemarketplace.adobe.com/magento-payment-services.html) 2.3.0 or higher, you can use the following mutations during checkout:

* [`createPaymentOrder`](../mutations/create-payment-order.md)

* [`syncPaymentOrder`](../mutations/sync-payment-order.md)

If you have installed [Payment Services for Adobe Commerce](https://commercemarketplace.adobe.com/magento-payment-services.html) 2.10.0 or higher, you can use the following mutations to vault a credit card without a purchase:

* [`createVaultCardSetupToken`](../mutations/create-vault-card-setup-token.md)

* [`createVaultCardPaymentToken`](../mutations/create-vault-card-payment-token.md)
