---
title: Payment Services product page workflow
description: Learn how to use the GraphQL API mutations for the Payment Services solution.
keywords:
  - GraphQL
  - Payments
---

# Payment services product page workflow

![Payment Services sequence diagram](../../_images/graphql/payment-services-minicart.svg)

These steps describe the additional flow of requests and responses required to place an order after [adding a product to your cart](../tutorials/checkout/add-product-to-cart.md) with the [Payment Services](https://experienceleague.adobe.com/docs/commerce-merchant-services/payment-services/guide-overview.html){target=_blank} solution enabled.

1. Fetch the payment configuration by running the `getPaymentConfig` mutation in order to render payment methods.

1. Adobe Commerce returns available payment configuration.

1. Creates the order with the `createPaymentOrder` mutation.

1. Request forwarded to PayPal.

1. PayPal returns `order_id` and `mp_order_id` values.

1. Adobe Commerce forwards values to client.

1. Run the `syncPaymentOrder` mutation  to get payment details and update the quote with shipping, billing, email and phone number details. This step redirects to the review page.

1. Run the `setShippingMethodsOnCart` mutation to define the delivery methods for your order.

1. Use `applyCouponToCart` to apply a discount coupon to the specified `cart_id`.

1. Update the order with the `UpdatePaymentOrder` mutation to check new amounts if the price changes.

1.  Continue to [place the order](../tutorials/checkout/place-order.md).

1.  Request to `placeOrder` is forwarded with additional data  from `CreatePaymentOrder`.

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
