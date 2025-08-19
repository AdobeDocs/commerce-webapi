---
title: Payment Services extension
description: Learn how to use the GraphQL APIs to integrate the Payment Services extension.
keywords:
  - GraphQL
  - Payments
---

# Payment Services extension

Payment Services is your one-stop-shop for online checkout (from settlement and refunds to getting paid). Payment Services is designed to meet _all_ your payment needs.

It provides powerful tools to give you the insight and control needed for creating the best experience for your buyers.

* [**Onboarding**](https://experienceleague.adobe.com/docs/commerce-merchant-services/payment-services/get-started/onboard.html)---Commercial signup, technical configuration, entitlements, sandbox environment configuration, and live payment enablement.
* [**Payment options**](https://experienceleague.adobe.com/docs/commerce-merchant-services/payment-services/payments-checkout/payments-options.html)---Set the payment options to customize the methods available for your store (or multistore) customers.
* **Cash flow management financial reporting**---Synchronize [payment details](https://experienceleague.adobe.com/en/docs/commerce/payment-services/financial-reports/order-payment-status) with orders to get full order and payment transparency, [payouts](https://experienceleague.adobe.com/en/docs/commerce/payment-services/financial-reports/payouts), and detailed [transaction-level reporting](https://experienceleague.adobe.com/docs/commerce-merchant-services/payment-services/reporting/transactions.html) for financial reconciliation.
* **Efficient checkout experience**---Remove any barriers to a fast and simple checkout with [card vaulting](https://experienceleague.adobe.com/docs/commerce-merchant-services/payment-services/payments-checkout/vaulting.html) and [Instant Purchase](https://experienceleague.adobe.com/docs/commerce-admin/stores-sales/point-of-purchase/checkout-instant-purchase.html) (enabled by default for Adobe Commerce) features.

## Payment Services GraphQL

[Payment Services for Adobe Commerce](https://commercemarketplace.adobe.com/magento-payment-services.html) 2.3.0 and higher provides enhanced payment method capabilities. With this extension, you can implement the following payment methods:

* Apple Pay with PayPal
* Google Pay with PayPal
* PayPal Hosted Fields
* PayPal Smart Buttons
* Credit card vaulting

## Credit card vaulting

The vault-related changes to the schema allow you to generate stored payment details and to modify a payment token.

The Payment Services Vault method is a solution in which shoppers can store—or "vault"—their credit card credentials to use in a later purchase:

* Logged-in customers can [vault a credit card during checkout](https://experienceleague.adobe.com/en/docs/commerce-merchant-services/payment-services/payments-checkout/vaulting#vaulting-a-payment-method-during-checkout) to use in a later purchase in the current store or other stores within the same merchant account.

* Logged-in customers can vault a payment method in the **My Account** dashboard [without a purchase](https://experienceleague.adobe.com/en/docs/commerce-merchant-services/payment-services/payments-checkout/vaulting#vaulting-without-purchase). This functionality is available only if you have installed [Payment Services for Adobe Commerce](https://commercemarketplace.adobe.com/magento-payment-services.html) 2.10.0 or higher.

See [Payment Services vaulted card workflow](../payment-services-extension/workflows/vaulted-card.md) for more information.
