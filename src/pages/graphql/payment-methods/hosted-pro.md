---
title: PayPal Website Payments Pro Hosted Solution payment method
description: Learn how to use the GraphQL API mutation for the PayPal Website Payments Pro Hosted payment solution.
edition: paas
keywords:
  - GraphQL
  - Payments
---

# PayPal Website Payments Pro Hosted Solution payment method

<InlineAlert variant="info" slots="text" />

PayPal has designated Website Payments Pro Hosted Solution as a legacy product.

PayPal's [Website Payments Pro Hosted Solution](https://developer.paypal.com/api/nvp-soap/payflow/website-payments-pro-hosted-solution/) allows merchants to accept credit cards, debit cards, and PayPal payments directly on their websites. The merchant must be based in the United Kingdom to create a new integration with this payment method. PayPal continues to support merchants with existing integrations outside the UK.

This payment method is applicable to Direct Payment and Express Checkout implementations of the Website Payments Pro Hosted Solution.

PayPal's product name for this payment method varies from country to country. [PayPal Website Payments
Pro Hosted Solution Integration Guide](https://www.paypalobjects.com/webstatic/en_GB/developer/docs/pdf/hostedsolution_uk.pdf) provides more information.

## Website Payments Pro Hosted Solution workflow

The following diagram shows the workflow for placing an order when Website Payments Pro Hosted Solution is the selected payment method.

![PayPal Website Payments Pro Hosted Solution sequence diagram](../../images/graphql/paypal-hosted-pro.svg)

1. The PWA client uses the [`setPaymentMethodOnCart`](/src/pages/graphql/schema/cart/mutations/set-payment-method.md) mutation to set the payment method.

1. The mutation returns a `Cart` object.

1. The client runs the [`placeOrder`](/src/pages/graphql/schema/cart/mutations/place-order.md) mutation, which creates an order and begins the authorization process.

1. The application sends information about the order to PayPal and requests a secure URL that the PWA client will later use to connect to PayPal.

1. PayPal's response includes the secure URL.

1. The `placeOrder` mutation returns an order ID. The order has the status `payment pending`.

1. The client runs the [`getHostedProUrl`](/src/pages/graphql/schema/checkout/queries/get-hosted-pro-url.md) query to retrieve the secure URL.

1. The application returns the secure URL in the `secure_form_url` attribute.

1. The PWA client displays a payment form in an iframe rendered from the secure URL. When the customer completes the form, the client sends the payment information directly to the PayPal gateway, bypassing the application server.

1. After PayPal processes the payment, the gateway runs a silent post request against the application server. As a result, the application sets the order status to processing, and the order is ready to be invoiced.

1. The PayPal gateway returns control of the customer's browser to the client.

## `setPaymentMethodOnCart` mutation

When you set the payment method for a Website Payments Pro Hosted Solution, you must set the `code` attribute to `hosted_pro`. In addition, the payload must contain a `hosted_pro` object, which defines the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`cancel_url` | String! | The relative URL of the page that PayPal will redirect to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is `https://www.example.com/paypal/action/cancel.html`, the relative URL is `paypal/action/cancel.html`
`return_url` | String! | The relative URL of the final confirmation page that PayPal will redirect to upon payment success. If the full URL to this page is `https://www.example.com/paypal/action/return.html`, the relative URL is `paypal/action/return.html`

### Example usage

The following example shows the `setPaymentMethodOnCart` mutation constructed for the Website Payments Pro Hosted Solution payment method.

**Request:**

```graphql
mutation {
  setPaymentMethodOnCart(input: {
    cart_id: "H87OmEkvusP7ZPkd2634pQFxY4dKI3a4"
    payment_method: {
      code: "hosted_pro"
      hosted_pro: {
        cancel_url: "paypal/hostedpro/cancel"
        return_url: "paypal/hostedpro/return"
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
}
```

**Response:**

```json
{
  "data": {
    "setPaymentMethodOnCart": {
      "cart": {
        "selected_payment_method": {
          "code": "hosted_pro",
        }
      }
    }
  }
}
```

