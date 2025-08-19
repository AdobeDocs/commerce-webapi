---
title: PayPal Payflow Pro payment method
description: Learn how to use the GraphQL API mutation for the PayPal Payflow Pro payment solution.
keywords:
  - GraphQL
  - Payments
edition: paas
---

# PayPal Payflow Pro payment method

Payflow Pro is a payment gateway that processes debit and credit card payments. It is available for customers of the United States, Canada, Australia, and New Zealand.

Other PayPal solutions have the same GraphQL workflow as Payflow Pro. The information in this topic also applies to the following PayPal solution:

-  Payments Pro

If Payflow Pro has been configured to implement Express Checkout, use the [PayPal Express Checkout for Payflow payment method](payflow-express.md) instead.

<InlineAlert variant="info" slots="text" />

If the `is_active_payment_token_enabler` attribute is set to `1` (true), in future orders, the logged-in customer can use the [Payflow Pro Vault payment method](payflow-pro-vault.md).

## Payflow Pro workflow

The following diagram shows the workflow for placing an order when Payflow Pro is the selected payment method.

![PayPal Payflow Pro sequence diagram](../../_images/graphql/paypal-payflow-pro.svg)

1. On the checkout page, the customer selects **Credit Card** as the payment method and enters the credit card information as well as the billing and shipping addresses. When the customer clicks **Place Order**, the PWA client uses the [`setPaymentMethodOnCart`](../schema/cart/mutations/set-payment-method.md) mutation to set the payment method to `payflowpro`.

1. The mutation returns a `Cart` object.

1. The client runs the [`createPayflowProToken`](../schema/checkout/mutations/create-payflow-pro-token.md) mutation to initiate a transaction.

1. The application requests a secure token from the PayPal gateway. The request also contains billing and shipping information, which the application extracts from the `Cart` object.

1. The gateway response includes a secure token, a secure token ID, and result codes and descriptions.

1. The application returns the secure token, a secure token ID, and result codes and descriptions in response to the `createPayflowProToken` mutation.

1. The client uses a hidden iframe to send a silent post request directly to the PayPal gateway for account verification. For live requests, send the silent post to `https://payflowlink.paypal.com`. Send test requests to `https://pilot-payflowlink.paypal.com`.

1. The gateway responds directly to the client. The response contains a payload that includes secure token information and billing and shipping information.

1. The client uses the [`handlePayflowProResponse`](../schema/checkout/mutations/handle-payflow-pro-response.md) mutation to send the payload to the application. The application stores this information without modifying the cart.

1. The mutation returns a `Cart` object.

1. The client runs the [`placeOrder`](../schema/cart/mutations/place-order.md) mutation, which creates an order and begins the authorization process.

1. The application sends an authorization request to the gateway.

1. The gateway sends the response to Magento.

1. The application creates an order and sends an order ID in response to the `placeOrder` mutation.

## Additional Payment information

When you set the payment method to Payflow Pro in the [`setPaymentMethodOnCart`](../schema/cart/mutations/set-payment-method.md) mutation, the `payment_method` object must contain a `payflowpro` object and a `CreditCardDetailsInput` object.

### payflowpro object

The `payflowpro` object must contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`cc_details` | CreditCardDetailsInput! | Required input for credit card related information
`is_active_payment_token_enabler` | Boolean | States whether details about the customer's credit/debit card should be tokenized for later use. Required only if Vault is enabled for PayPal Payflow Pro payment integration.

### CreditCardDetailsInput object

The `CreditCardDetailsInput` object must contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`cc_exp_month` | Int! | Credit card expiration month
`cc_exp_year` | Int! | Credit card expiration year
`cc_last_4` | Int! | Last four digits of the credit card
`cc_type` | String! | Credit card type

### Example usage

The following example shows the `setPaymentMethodOnCart` mutation constructed for the Payflow Pro payment method.

**Request:**

```graphql
mutation {
  setPaymentMethodOnCart(input: {
    cart_id: "IeTUiU0oCXjm0uRqGCOuhQ2AuQatogjG"
    payment_method: {
      code: "payflowpro"
      payflowpro: {
        cc_details: {
          cc_exp_month: 12
          cc_exp_year: 2023
          cc_last_4: 1111
          cc_type: "VI"
        }
        is_active_payment_token_enabler: 1
      }
    }
  })
  {
    cart {
      selected_payment_method {
        code
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
        "selected_payment_method": {
          "code": "payflowpro"
        }
      }
    }
  }
}
```
