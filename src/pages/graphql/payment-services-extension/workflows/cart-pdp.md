---
title: Add product to a new cart in the Product Details Page
description: Learn how Adobe Commerce uses GraphQL to create a new cart in the Product Details Page with smart buttons (Apple Pay).
keywords:
  - GraphQL
  - Payments
---

# Create a new cart in the Product Details Page workflows

<InlineAlert variant="info" slots="text" />

This workflow is available only with Apple Pay if you have installed [Payment Services for Adobe Commerce](https://commercemarketplace.adobe.com/magento-payment-services.html) 2.12.0 or higher.

These steps describe the flow of requests and responses with the [Payment Services](https://experienceleague.adobe.com/docs/commerce-merchant-services/payment-services/guide-overview.html) solution enabled for guests and logged-in customers. This workflow is required to [create a new cart](../mutations/add-products-new-cart.md) in the Product Details Page (PDP) with smart buttons.

## Add product to a new cart in a PDP workflow

These steps describe the use case when a shopper adds a product to the cart in the PDP.

![Payment Services sequence diagram](../../../_images/graphql/payment-services-pdp.svg)

1. Run the [`getPaymentConfig`](../../payment-services-extension/queries/get-payment-config.md) query to fetch the payment configuration needed to render details about PayPal components, such as hosted fields, smart buttons, and Apple Pay.

1. Adobe Commerce returns payment configuration information.

1. Run [`addProductsToNewCart`](../../payment-services-extension/mutations/add-products-new-cart.md) to create a new cart and add the item.

1. Commerce returns a `cart` object, which includes the cart `id` field.

1. Run [`createPaymentOrder`](../../payment-services-extension/mutations/create-payment-order.md) to begin the authorization process.

1. Commerce forwards the request to PayPal.

  If there is an error during the payment process, or the shopper cancels the payment process in the PDP, run [`setCartAsInactive`](../../payment-services-extension/mutations/set-cart-inactive.md) to set a specific `cartId` as inactive and to avoid having multiple active carts for logged-in customers.

1. PayPal returns an `id` value.

1. Adobe Commerce generates a `order_id` and forwards the value in the `mp_order_id` field and the PayPal response in the `id` field.

1.  Run the [`placeOrder`](../../schema/cart/mutations/place-order.md) mutation.

1.  Commerce sends an authorization request to PayPal.

1.  PayPal returns the result to Commerce.

1.  Commerce creates an order.

## Payment cancellation while on a PDP workflow

These steps describe the use case when a shopper cancels the payment process in the PDP.

![Payment Services sequence diagram](../../../_images/graphql/payment-services-pdp-cartinactive.svg)

1. Run the [`getPaymentConfig`](../../payment-services-extension/queries/get-payment-config.md) query to fetch the payment configuration needed to render details about PayPal components, such as hosted fields, smart buttons, and Apple Pay.

1. Adobe Commerce returns payment configuration information.

1. Run [`addProductsToNewCart`](../../payment-services-extension/mutations/add-products-new-cart.md) to create a new cart and add the item.

1. Commerce returns a `cart` object, which includes the cart `id` field.

1. Run [`setCartAsInactive`](../../payment-services-extension/mutations/set-cart-inactive.md) to set a specific `cartId` as inactive.

1. Commerce returns a confirmation that a specific `cartId` is inactive.

1. If the shopper clicks the smartbutton again, `addProductsToNewCart` mutation runs once more to return a new `cart` object.
