---
title: Vaulting a card during a checkout authorization
description: Learn how to vault a credit card during a typical checkout authorization.
keywords:
  - GraphQL
  - Payments
---

# Vaulting a card during a checkout authorization

These steps describe the flow of requests and responses required to [vault a credit card](https://experienceleague.adobe.com/en/docs/commerce-merchant-services/payment-services/payments-checkout/vaulting#vaulting-a-payment-method-during-checkout) during a typical checkout authorization with Payment Services enabled.

The following conditions must be true to vault a card during checkout:

* You must have installed [Payment Services for Adobe Commerce](https://commercemarketplace.adobe.com/magento-payment-services.html) 2.10.0 or higher.
* The customer must be logged in.

## Vault during checkout workflow

![Payment Services sequence diagram](../../../_images/graphql/payment-services-vault-with-purchase.svg)

1. Run the [`getPaymentConfig`](../../payment-services-extension/queries/get-payment-config.md) query to fetch the payment configuration needed to render details about PayPal components, such as hosted fields, smart buttons, and Apple Pay.

1. Commerce returns the payment configuration information.

1. Run the [`setPaymentMethodOnCart`](../../schema/cart/mutations/set-payment-method.md) mutation to [set the payment method](../../tutorials/checkout/set-payment-method.md).

1. Adobe Commerce returns a `Cart` object.

1. Run the [`createPaymentOrder`](../../payment-services-extension/mutations/create-payment-order.md) mutation with `vaultIntent` set to `true` to begin the authorization process.

1. Commerce forwards the request to PayPal.

1. PayPal returns an `id` value.

1. Adobe Commerce generates a `order_id` and forwards the value in the `mp_order_id` field and the PayPal response in the `id` field.

1. Run [`setPaymentMethodOnCart`](../../schema/cart/mutations/set-payment-method.md) again with [`is_active_payment_token_enabler`](https://developer.adobe.com/commerce/webapi/graphql/payment-services-extension/workflows/checkout/#setpaymentmethodoncartinput-object) set to `true`. This indicates whether a customer-entered credit/debit card should be tokenized for later usage.

1. Adobe Commerce returns a token.

1. (Optional) If hosted fields and the Signifyd integration are enabled, run the [`getPaymentOrder`](../../payment-services-extension/queries/get-payment-order.md) query.

1. (Optional) Adobe Commerce returns details about the payment order.

1. Run the [`placeOrder`](../../schema/cart/mutations/place-order.md) mutation.

1. Commerce sends an authorization request to PayPal.

1. PayPal returns the result to Commerce.

1. Commerce creates an order.

1. Paypal returns a vault token.

1. Commerce stores the vault token for the vaulted card.

### `setPaymentMethodOnCart` mutation example

The following example shows the `setPaymentMethodOnCart` mutation with the attribute `is_active_payment_token_enabler` set to `true`.

**Request:**

```graphql
mutation {
    setPaymentMethodOnCart ( input: {
      cart_id: "uocGxUi5H97XFAMhY3s66q4aFYG3Bmdr",
      payment_method: {
        code: "payment_services_paypal_hosted_fields",
        payment_services_paypal_hosted_fields: {
          payment_source: "cc",
          payments_order_id: "mp-order-a4babd34-13d3-4ac0-b1b0-109bb7be1574",
          paypal_order_id: "9R90936863877801D",
          is_active_payment_token_enabler: true
        }
      }
    }
    ) {
       cart {
         id
         selected_payment_method {
           code
         }
       }
    }
  } 
```

**Response:**

```json
{
  "data": {
    "setPaymentMethodOnCart": {
      "cart": {
        "id": "uocGxUi5H97XFAMhY3s66q4aFYG3Bmdr",
        "selected_payment_method": {
          "code": "payment_services_paypal_hosted_fields"
        }
      }
    }
  }
}
```
