---
title: PayPal Payments Advanced payment method | Commerce Web APIs
---

# PayPal Payments Advanced payment method

The PayPal Payments Advanced payment solution allows merchants to enable their online stores to collect payments directly via credit card or from the PayPal Credit service. If Payments Advanced has been configured to implement Express Checkout, use the [PayPal Express Checkout for Payflow payment method](payflow-express.md) instead.

From a GraphQL integration standpoint, PayPal Payments Advanced payment method is identical to the PayPal [Payflow Link](payflow-link.md) payment method, with the exception of the payment method `code`. The PayPal [Payments Advanced documentation](https://developer.paypal.com/docs/classic/products/paypal-payments-advanced/) describes other ways in which the payment methods differ.

PayPal Payments Advanced is available in the US and Canada only.

## PayPal Payments Advanced workflow

The following diagram shows the workflow for placing an order when Payments Advanced is the selected payment method.

![PayPal Payments Advanced sequence diagram](../../_images/graphql/paypal-payflow-link.svg)

import PayflowLinkWorkflow from '/src/pages/_includes/graphql/payment-methods/payflow-link-workflow.md'

<PayflowLinkWorkflow />

## Additional Payment information

## `setPaymentMethodOnCart` mutation

When you set the payment method to PayPal Payments Advanced, you must set the `code` attribute to `payflow_advanced`. In addition, the payload must contain a `payflow_link` object, which defines the following attributes:

import PayflowLinkAttributes from '/src/pages/_includes/graphql/payment-methods/payflow-link-attributes.md'

<PayflowLinkAttributes />

### Example usage

The following example shows the `setPaymentMethodOnCart` mutation constructed for the Payments Advanced payment method.

**Request:**

```graphql
mutation {
  setPaymentMethodOnCart(input: {
    payment_method: {
      code: "payflow_advanced"
      payflow_link: {
        return_url: "paypal/action/return.html"
        error_url: "paypal/action/error.html"
        cancel_url: "paypal/action/cancel.html"
        }
      }
    cart_id: "IeTUiU0oCXjm0uRqGCOuhQ2AuQatogjG"
    }) {
        cart {
          selected_payment_method {
            code
            title
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
        "selected_payment_method": {
          "code": "payflow_advanced",
          "title": "Credit Card"
        }
      }
    }
  }
}
```
