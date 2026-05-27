---
title: PayPal Payments Advanced payment method
description: Learn how to use the GraphQL API mutation for the PayPal Payments Advanced payment solution.
keywords:
  - GraphQL
  - Payments
---

# PayPal Payments Advanced payment method

<InlineAlert variant="info" slots="text" />

PayPal has designated Payments Advanced as a legacy product.

The PayPal Payments Advanced payment solution allows merchants to enable their online stores to collect payments directly via credit card or from the PayPal Credit service. If Payments Advanced has been configured to implement Express Checkout, use the [PayPal Express Checkout for Payflow payment method](payflow-express.md) instead.

From a GraphQL integration standpoint, PayPal Payments Advanced payment method is identical to the PayPal [Payflow Link](payflow-link.md) payment method, with the exception of the payment method `code`.

PayPal Payments Advanced is available in the US and Canada only.

## PayPal Payments Advanced workflow

The following diagram shows the workflow for placing an order when Payments Advanced is the selected payment method.

![PayPal Payments Advanced sequence diagram](../../images/graphql/paypal-payflow-link.svg)

1. The PWA client uses the [`setPaymentMethodOnCart`](/src/pages/graphql/schema/cart/mutations/set-payment-method.md) mutation to set the payment method.

1. The mutation returns a `Cart` object.

1. The client runs the [`placeOrder`](/src/pages/graphql/schema/cart/mutations/place-order.md) mutation, which creates an order and begins the authorization process.

1. The application requests a secure token from the PayPal gateway.

1. The gateway response includes a secure token, a secure token ID, and the URL to use for requesting the form in step 9. This token secures the data for a one-time transaction and is valid for 30 minutes.

1. The `placeOrder` mutation returns an order ID. The application does not return secure token information. The order has the status `payment pending`.

1. The client runs the [`getPayflowLinkToken`](/src/pages/graphql/schema/checkout/queries/get-payflow-link-token.md) mutation to retrieve the secure token information.

1. The application returns the token information.

1. The client displays a payment form in an iframe rendered from the URL specified by the `paypal_url` from the `getPayflowLinkToken` mutation response. When the customer completes the form, the client sends the payment information directly to the PayPal gateway, bypassing the application server.

1. After PayPal processes the payment, the gateway runs a silent post request against the application server. As a result, the application sets the order status to processing, and the order is ready to be invoiced.

1. The PayPal gateway returns control of the customer's browser to the client.

## Additional Payment information

## `setPaymentMethodOnCart` mutation

When you set the payment method to PayPal Payments Advanced, you must set the `code` attribute to `payflow_advanced`. In addition, the payload must contain a `payflow_link` object, which defines the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`cancel_url` | String! | The relative URL of the page that PayPal will redirect to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is `https://www.example.com/paypal/action/cancel.html`, the relative URL is `paypal/action/cancel.html`
`error_url` | String! | The relative URL of the transaction error page that PayPal will redirect to upon payment error. If the full URL to this page is `https://www.example.com/paypal/action/error.html`, the relative URL is `paypal/action/error.html`
`return_url` | String! | The relative URL of the final confirmation page that PayPal will redirect to upon payment success. If the full URL to this page is `https://www.example.com/paypal/action/return.html`, the relative URL is `paypal/action/return.html`

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

