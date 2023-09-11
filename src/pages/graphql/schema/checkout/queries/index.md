---
title: Checkout queries
---

# Checkout queries

The checkout queries gather data necessary for completing the checkout process. Each has a limited scope:

*  [`checkoutAgreements`](agreements.md) is applicable only if the [**Enable Terms and Conditions** option](https://experienceleague.adobe.com/docs/commerce-admin/stores-sales/point-of-purchase/checkout/checkout-process.html) has been enabled in the Admin.

*  [`customerPaymentTokens`](customer-payment-tokens.md) retrieves the customer's stored payment information when the [**Enable Vault for Card Payments**](https://experienceleague.adobe.com/docs/commerce-admin/config/sales/payment-methods/braintree.html) option has been enabled for Braintree.

*  [`getHostedProUrl`](get-hosted-pro-url.md) is required for the PayPal Website Payments Pro Hosted Solution payment method.

*  [`getPayflowLinkToken`](get-payflow-link-token.md) is required for PayPal Payflow transactions.
