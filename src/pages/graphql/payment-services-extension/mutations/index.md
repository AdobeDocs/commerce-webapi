---
title: Payment Services extension mutations
description: Learn how to use the GraphQL mutations to integrate the Payment Services extension.
keywords:
  - GraphQL
  - Payments
---

# Payment Services extension mutations

The mutations described in this section allow you to create, update, and delete payment-related data with the Payment Services extension.

If you have installed [Payment Services for Adobe Commerce](https://commercemarketplace.adobe.com/magento-payment-services.html) 2.3.0 or higher, you can use the following mutations during checkout:

* [`createPaymentOrder`](../mutations/create-payment-order.md)

* [`syncPaymentOrder`](../mutations/sync-payment-order.md)

If you have installed [Payment Services for Adobe Commerce](https://commercemarketplace.adobe.com/magento-payment-services.html) 2.10.0 or higher, you can use the following mutations to vault a credit card without a purchase:

* [`createVaultCardSetupToken`](../mutations/create-vault-card-setup-token.md)

* [`createVaultCardPaymentToken`](../mutations/create-vault-card-payment-token.md)

If you have installed [Payment Services for Adobe Commerce](https://commercemarketplace.adobe.com/magento-payment-services.html) 2.12.0 or higher, you can use the following mutations to checkout from the product page:

* [`addProductsToNewCart`](../mutations/add-products-new-cart.md)

* [`setCartAsInactive`](../mutations/set-cart-inactive.md)
