---
title: PayPal Website Payments Pro Hosted Solution payment method
description: Learn how to use the GraphQL API mutation for the PayPal Website Payments Pro Hosted payment solution.
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

![PayPal Website Payments Pro Hosted Solution sequence diagram](../../_images/graphql/paypal-hosted-pro.svg)

import HostedProWorkflow from '/src/_includes/graphql/payment-methods/hosted-pro-workflow.md'

<HostedProWorkflow />

## `setPaymentMethodOnCart` mutation

When you set the payment method for a Website Payments Pro Hosted Solution, you must set the `code` attribute to `hosted_pro`. In addition, the payload must contain a `hosted_pro` object, which defines the following attributes:

import HostedProAttributes from '/src/_includes/graphql/payment-methods/hosted-pro-attributes.md'

<HostedProAttributes />

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
