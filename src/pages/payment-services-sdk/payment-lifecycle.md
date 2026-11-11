---
title: Payment Services SDK payment lifecycle
description: Initialize, render, and complete payments with the Payment Services JavaScript SDK.
keywords:
  - Payments
  - SDK
---

# Payment Services SDK payment lifecycle

<InlineAlert variant="warning" slots="text"/>

The Payment Services SDK is version 0.x (pre-1.0) and is under active development.

Payment methods follow the same lifecycle: initialize, check availability, render, start the payment, and complete the order.

These examples assume that you have [instantiated the SDK](instantiating-the-sdk.md). The functions `getCartId`, `placeOrder`, `handleError`, and `isCheckoutFormValid` represent your application's cart, order-placement, error-display, and validation logic. They are not SDK APIs.

## Initialize

Call `sdk.Payment.init` with the location where you render the payment methods, and wait for it to resolve. It fetches the Payment Services configuration for that location from Adobe Commerce.

```js
await sdk.Payment.init({ location: "CHECKOUT" })
```

Calling `isAvailable()` or `render()` on a payment method before initialization resolves throws an error. Handle initialization failures before attempting to render payment methods.

An SDK instance initializes its payment methods for a single location. To render payment methods in several locations on the same page, such as the product detail page and minicart, create one SDK instance per location.

## Check availability

A payment method can be unavailable because it is disabled in the Commerce Admin or because the shopper's browser or device does not support it. Call `isAvailable()` before rendering a payment method.

```js
if (sdk.Payment.GooglePay.isAvailable()) {
  // Render Google Pay here.
}
```

## Render

`render()` renders the payment method and returns an instance that you can keep to update or remove it later. Apple Pay, Google Pay, and PayPal render buttons in the `container` element. Credit card renders its card fields in the elements specified by its `fields` configuration.

Each payment method has its own render configuration. The common configuration includes:

| Option | Purpose |
| --- | --- |
| `getCartId` | Required. Returns the ID of the cart to pay for. |
| `onStart` | Runs before the SDK creates the payment for the cart. Can stop the payment. |
| `onSuccess` | Runs when the shopper approves the payment. Place the order next. |
| `onCancel` | Runs when the shopper cancels the payment. |
| `onError` | Receives a `PaymentMethodError` when an error occurs after rendering. |

For example, after initialization, render Google Pay if available. Create the `#google-pay-container` element in your page before rendering.

```js
let googlePay

if (sdk.Payment.GooglePay.isAvailable()) {
  try {
    googlePay = await sdk.Payment.GooglePay.render({
      container: "#google-pay-container",
      getCartId: async () => getCartId(),
      getCartDetails: () => ({ isVirtual: false }),
      useGooglePayShippingAddress: true,
      useGooglePayBillingAddress: true,
      onSuccess: async ({ cartId }) => {
        await placeOrder(cartId)
      },
      onError: (error) => handleError(error),
    })
  } catch (error) {
    handleError(error)
  }
}
```

This example describes a non-virtual cart. Set `isVirtual` according to your cart. The Google Pay address options are specific to Google Pay.

If rendering fails before setup completes, the returned promise rejects. Errors after setup are passed to `onError`. Handle both paths.

## Start the payment

Apple Pay, Google Pay, and PayPal start payment when the shopper clicks their button. For credit cards, call `submit()` on the rendered credit card instance when the shopper submits your payment form.

### Validate button-based payments

For Apple Pay, Google Pay, and PayPal, set `onButtonClick` in the render configuration to validate your checkout form before opening the payment sheet. It receives a `showPaymentSheet` function. Call it synchronously to open the payment sheet; omit the call to stop.

```js
onButtonClick: (showPaymentSheet) => {
  if (isCheckoutFormValid()) {
    showPaymentSheet()
  }
}
```

### Validate credit card payments

For credit cards, set `onStart` in the render configuration. It receives a `preventCheckout` function. Calling `preventCheckout(reason)` stops the payment by throwing, so code after that call in `onStart` does not run.

```js
onStart: async (preventCheckout) => {
  if (!isCheckoutFormValid()) {
    preventCheckout("Checkout form is invalid.")
  }
}
```

Apple Pay, Google Pay, and PayPal also call `onStart`, but later. Apple Pay and Google Pay call it after the shopper confirms payment in the payment sheet. PayPal calls it when the PayPal window opens. For these methods, use `onStart` for work that must happen before the SDK creates the payment, such as setting the billing address on the cart.

## Complete the order

When the shopper approves payment, the SDK calls `onSuccess` with a success event. The SDK does not place the order. Your application must place the order for `event.cartId`, for example with the [`placeOrder` GraphQL mutation](../graphql/schema/cart/mutations/place-order.md).

Return the order-placement promise from `onSuccess`, or use an `async` callback and await it, as in the rendering example. The SDK waits for the promise and passes a rejection to `onError`. While waiting, it keeps the Apple Pay or Google Pay payment sheet or the PayPal window open where possible.

If `onSuccess` does not return a promise, the sheet or window closes immediately and your application must handle subsequent order-placement errors itself.

For the API-level checkout sequence, see the [Payment Services checkout workflow](../graphql/payment-services-extension/workflows/checkout.md). Do not duplicate the payment requests that the SDK already performs.

## Handle errors

`onError` receives a `PaymentMethodError`. Its `code` property identifies the error so that your application can handle it programmatically and display an appropriate message to the shopper. Consult the types shipped with your SDK version for available error codes.

## Remove a payment method

Call `teardown()` on the rendered payment method to remove it from the page, for example before rendering it again with a different configuration. For the Google Pay instance retained in the rendering example:

```js
if (googlePay) {
  googlePay.teardown()
}
```
