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

* [**Onboarding**](https://experienceleague.adobe.com/en/docs/commerce/payment-services/get-started/onboard)---Commercial signup, technical configuration, entitlements, sandbox environment configuration, and live payment enablement.
* [**Payment options**](https://experienceleague.adobe.com/en/docs/commerce/payment-services/payments-checkout/payments-options)---Set the payment options to customize the methods available for your store (or multistore) customers.
* **Cash flow management financial reporting**---Synchronize [payment details](https://experienceleague.adobe.com/en/docs/commerce/payment-services/financial-reports/order-payment-status) with orders to get full order and payment transparency, [payouts](https://experienceleague.adobe.com/en/docs/commerce/payment-services/financial-reports/payouts), and detailed [transaction-level reporting](https://experienceleague.adobe.com/en/docs/commerce/payment-services/financial-reports/reporting) for financial reconciliation.
* **Efficient checkout experience**---Remove any barriers to a fast and simple checkout with [card vaulting](https://experienceleague.adobe.com/en/docs/commerce/payment-services/payments-checkout/vaulting) and [Instant Purchase](https://experienceleague.adobe.com/en/docs/commerce-admin/stores-sales/point-of-purchase/checkout-instant-purchase) (enabled by default for Adobe Commerce) features.

## Payment Services GraphQL

[Payment Services for Adobe Commerce](https://commercemarketplace.adobe.com/magento-payment-services.html) 2.3.0 and higher provides enhanced payment method capabilities. With this extension, you can implement the following payment methods:

* Apple Pay with PayPal
* Google Pay with PayPal
* PayPal Hosted Fields
* PayPal Smart Buttons
* Credit card vaulting

## Payment method availability

<InlineAlert variant="info" slots="text" />

Payment Services 2.18.0 and later returns only enabled Payment Services methods in the [`cart` query](../schema/cart/queries/cart.md). Both Payment Services and the individual method must be enabled. Other payment eligibility requirements for the cart also apply.

Display settings control where an enabled method appears. They do not determine whether the method is returned in `available_payment_methods`. For headless and Edge Delivery Services storefronts, use:

* `available_payment_methods` to identify the methods available for the cart.
* `is_visible` from [`getPaymentConfig`](queries/get-payment-config.md) to determine which methods to display at the requested location.

See [Payment Services configuration](https://experienceleague.adobe.com/en/docs/commerce/payment-services/configure/configure-admin) to configure individual methods. For extension upgrade instructions for Adobe Commerce on Cloud, on-premises, and Magento Open Source, see [Upgrade the extension](https://experienceleague.adobe.com/en/docs/commerce/payment-services/get-started/install#upgrade-the-extension).

### Query available methods

Replace `YOUR_CART_ID` with the ID of a cart that is ready for checkout. Use the `Store` header to specify the store view.

```graphql
query {
  cart(cart_id: "YOUR_CART_ID") {
    available_payment_methods {
      code
      title
    }
  }
}
```

The following sample responses assume that Fastlane, Local Payment Methods, credit card vaulting, and other payment providers are disabled. The methods use their default titles. The returned methods and their order depend on your store configuration and cart.

### Enabled methods are returned

With Payment Services, Credit Card Fields, PayPal payment buttons, Apple Pay, and Google Pay enabled, the query returns:

```json
{
  "data": {
    "cart": {
      "available_payment_methods": [
        {
          "code": "payment_services_paypal_hosted_fields",
          "title": "Credit Card"
        },
        {
          "code": "payment_services_paypal_smart_buttons",
          "title": "PayPal"
        },
        {
          "code": "payment_services_paypal_apple_pay",
          "title": "Apple Pay"
        },
        {
          "code": "payment_services_paypal_google_pay",
          "title": "Google Pay"
        }
      ]
    }
  }
}
```

### Disabled methods are omitted

With Apple Pay and Google Pay disabled, the same query returns only Credit Card Fields and PayPal Smart Buttons:

```json
{
  "data": {
    "cart": {
      "available_payment_methods": [
        {
          "code": "payment_services_paypal_hosted_fields",
          "title": "Credit Card"
        },
        {
          "code": "payment_services_paypal_smart_buttons",
          "title": "PayPal"
        }
      ]
    }
  }
}
```

### Payment Services is disabled

When Payment Services is disabled, no Payment Services methods are returned, regardless of the individual method settings:

```json
{
  "data": {
    "cart": {
      "available_payment_methods": []
    }
  }
}
```

This example returns an empty array because no other payment providers are enabled. Available methods from other providers can still be returned when Payment Services is disabled.

## Credit card vaulting

The vault-related changes to the schema allow you to generate stored payment details and to modify a payment token.

The Payment Services Vault method is a solution in which shoppers can store—or "vault"—their credit card credentials to use in a later purchase:

* Logged-in customers can [vault a credit card during checkout](https://experienceleague.adobe.com/en/docs/commerce/payment-services/payments-checkout/vaulting#vaulting-a-payment-method-during-checkout) to use in a later purchase in the current store or other stores within the same merchant account.

* Logged-in customers can vault a payment method in the **My Account** dashboard [without a purchase](https://experienceleague.adobe.com/en/docs/commerce/payment-services/payments-checkout/vaulting#vaulting-without-purchase). This functionality is available only if you have installed [Payment Services for Adobe Commerce](https://commercemarketplace.adobe.com/magento-payment-services.html) 2.10.0 or higher.

See [Payment Services vaulted card workflow](workflows/vaulted-card.md) for more information.
