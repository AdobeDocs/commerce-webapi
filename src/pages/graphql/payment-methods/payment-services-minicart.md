---
title: Payment Services cart workflow
description: Learn how to use the GraphQL API mutations for the Payment Services solution.
keywords:
  - GraphQL
  - Payments
---

# Payment services product page workflow

![Payment Services sequence diagram](../../_images/graphql/payment-services-minicart.svg)

These steps describe the additional flow of requests and responses required to place an order after [adding a product to your cart](../tutorials/checkout/add-product-to-cart.md) with the [Payment Services](https://experienceleague.adobe.com/docs/commerce-merchant-services/payment-services/guide-overview.html){target=_blank} solution enabled.

1. Run `getPaymentConfig` to fetch the payment configuration to retrieve and render details about PayPal components, such as hosted fields, smart buttons, and Apple Pay.

1. Commerce returns payment configuration information.

1. Run `createPaymentOrder` to begin the authorization process.

1. Commerce forwards the request to PayPal.

1. PayPal returns an `id` value.

1. Adobe Commerce generates an `order_id` and forwards the value in the `mp_order_id` field and the PayPal response in the `id` field.

1. Run `syncPaymentOrder` to get payment details and update the quote with shipping, billing, email and phone number details.

1. Commerce returns details about the payment order.

1. Run `setShippingMethodsOnCart` to define the delivery methods for your order.

1. Commerce returns details about the delivery methods for your order.

1.  Run `placeOrder`.

1.  Commerce sends an authorization request to PayPal.

1.  PayPal returns the result to Commerce.

1.  Commerce creates an order.

## Example usage

### `syncPaymentOrder`

The following example shows the `syncPaymentOrder` mutation constructed to get payment order details and update the quote with shipping, billing, email and phone number details.

**Request:**

```json
mutation {
  syncPaymentOrder(input: {
    cartId: "AJCY8dhIfuch9LcDHAxEkw7oG3DjGdKt"
    id: "8J864634M9466143S"
  })
}
```

**Response:**

```json
{
  "data": {
    "syncPaymentOrder": true
  }
}
```
