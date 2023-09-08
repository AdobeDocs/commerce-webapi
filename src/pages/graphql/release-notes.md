---
title: GraphQL release notes
description: Learn about new features, enhancements, and bug fixes for the Adobe Commerce and Magento Open Source GraphQL API.
---

# GraphQL release notes

<InlineAlert variant="info" slots="text" />

As of Adobe Commerce and Magento Open Source 2.4.1, the GraphQL release notes are included in the [Adobe Commerce and Magento Open Source Release Notes](https://experienceleague.adobe.com/docs/commerce-operations/release/notes/overview.html).

GraphQL is a flexible and performant API that allows you to build custom front-ends, including headless storefronts, [Progressive Web Apps](https://github.com/magento/pwa-studio) (PWA), and mobile apps for Magento.

To take part and contribute, see the [magento2](https://github.com/magento/magento2) GitHub repository and look for issues with the `Project: GraphQL` tag. Join us in our [Slack](https://magentocommeng.slack.com/archives/C8076E0KS) channel (or [self signup](https://opensource.magento.com/slack)) to discuss the project.

## Adobe Commerce and Magento Open Source 2.4.0

-  **Added the [`reorderItems` mutation](schema/orders/mutations/reorder-items.md).** This mutation enables the logged-in customer to add the contents of a previous order to their cart.

-  **Added the [`categories` query](schema/products/queries/categories.md) returns a list of categories that match a specified filter.** This query differs from the `categoryList` query in that it supports pagination.

-  **Added the [`pickupLocations` query](schema//cart/queries/pickup-locations.md).** When the Inventory in-store pickup feature is enabled, this query allows the shopper to select a pickup location. The `pickup_location_code` attribute has been added to the [`setShippingAddressesOnCart` mutation](schema/cart/mutations/set-shipping-address.md) to specify which source will serve as the pickup location.

The [Magento Open Source 2.4.0 Release Notes](https://experienceleague.adobe.com/docs/commerce-operations/release/notes/magento-open-source/2-4-0.html#graphql) and [Adobe Commerce 2.4.0 Release Notes](https://experienceleague.adobe.com/docs/commerce-operations/release/notes/adobe-commerce/2-4-0.html#graphql) list the bug fixes.

## Adobe Commerce and Magento Open Source 2.3.5

-  **The `products` and `categoryList` queries can now be used to retrieve information about products and categories that have been added to a staged campaign.** These queries require an admin authorization token. See [Staging queries](usage/staging-queries.md) for details.
-  Custom attributes used in layered navigation no longer require the **Use in Search**, **Visible in Advanced Search**, and **Use in Search Results Layered Navigation** fields be set to Yes.
-  Added the `position` and `disabled` attributes to the `MediaGalleryInterface`.
-  When you apply a gift card to a cart, an exception is no longer thrown when the last product is removed from the cart.
-  In a category search, the `image` attribute returns the full path to an image, rather than a truncated path.
-  Flat rate shipping amounts are calculated correctly when you add a configurable product to a cart.

## Adobe Commerce and Magento Open Source 2.3.4

-  **Guest carts can now be merged with customer carts.** The [`mergeCarts`](schema/cart/mutations/merge.md) mutation transfers the contents of a guest cart into the cart of a logged-in customer.
-  **A customer can start an order on one device and complete it on another.** Use the [`customerCart`](schema/customer/queries/cart.md) query to obtain the cart ID for a logged-in customer.
-  **Layered navigation can use custom filters.** The `filter` attribute of the [`products`](schema/products/queries/products.md) query now requires the `ProductAttributeFilterInput` object. You can specify a pre-defined filter in this object, or [define a custom filter](usage/custom-filters.md). As a result, layered navigation on your website filters on the attributes you need.
-  **You can search categories by ID, name, and/or URL key.** The [`categoryList`](schema/products/queries/category-list.md) query replaces the deprecated `category` query.
-  **A customer can add bundle and downloadable products to the cart with the [`addBundleProductsToCart`](schema/cart/mutations/add-bundle-products.md) and [`addDownloadableProductsToCart`](schema/cart/mutations/add-downloadable-products.md) mutations.**
-  **The [`ProductInterface`](schema/products/interfaces/index.md) supports fixed product taxes (such as WEEE).** Use the [`storeConfig`](schema/store/queries/store-config.md) query to determine whether the store supports these taxes.
-  **The [`cart`](schema/cart/queries/cart.md) object has been enhanced to include information about promotions and applied discounts at the line and cart levels.**
-  **Added test coverage in multiple GraphQL modules.**

The following queries and mutations have been deprecated:

Deprecated entity | Use this instead
--- | ---
`category` query | `categoryList` query
`setPaymentMethodOnCartAndPlaceOrder` mutation | Run the `setPaymentMethodOnCart` and `placeOrder` mutations in the same request
`wishlist` query | `customer` query

## Adobe Commerce and Magento Open Source 2.3.3

-  **GraphQL supports PayPal, Braintree, and Authorize.Net payment methods.** You can use mutations to set the payment method, retrieve payment method-specific tokens, and place an order. For details, see the following topics:

   -  Authorize.Net (removed for 2.4.0)
   -  [Braintree](payment-methods/braintree.md)
   -  [Braintree Vault](payment-methods/braintree-vault.md)
   -  [PayPal Express Checkout](payment-methods/paypal-express-checkout.md)
   -  [PayPal Payflow Link](payment-methods/payflow-link.md)
   -  [PayPal Payflow Pro](payment-methods/payflow-pro.md)
   -  [PayPal Payments Advanced](payment-methods/payments-advanced.md)
   -  [PayPal Website Payments Pro Hosted Solution](payment-methods/hosted-pro.md)
   -  [Express Checkout for other PayPal solutions](payment-methods/payflow-express.md)

-  **Added support for gift cards:** (Adobe Commerce only)
   -  [`giftCardAccount`](schema/customer/queries/giftcard-account.md) query
   -  [`applyGiftCardToAccount`](schema/cart/mutations/apply-giftcard.md) mutation
   -  [`removeGiftCardFromCart`](schema/cart/mutations/remove-giftcard.md) mutation

-  **Added the ability to manage store credit:** (Adobe Commerce only)
   -  [`applyStoreCreditToCart`](schema/cart/mutations/apply-store-credit.md) mutation
   -  [`removeStoreCreditFromCart`](schema/cart/mutations/remove-store-credit.md) mutation

-  **Added the [addConfigurableProductsToCart](schema/cart/mutations/add-configurable-products.md) mutation.**

## Magento Open Source 2.3.2

-  **Added mutations to support the following cart operations and checkout for logged-in and guest customers:**

   -  Add [simple products](schema/cart/mutations/add-simple-products.md) to a cart.
   -  Add [virtual products](schema/cart/mutations/add-virtual-products.md) to a cart.
   -  Set the [shipping address](schema/cart/mutations/set-shipping-address.md). Address books are supported.
   -  Set the [billing address](schema/cart/mutations/set-billing-address.md). Address books are supported.
   -  Set the [shipping method](schema/cart/mutations/set-shipping-method.md). Supported methods include DHL, FedEx, Flat Rate, Free Shipping, Table Rate, UPS, and USPS.
   -  Set the [payment method](schema/cart/mutations/set-payment-method.md). Supported methods include Bank Transfer, Cash on Delivery, Check/Money Order, Purchase Order, and Zero Subtotal Checkout.
   -  [Apply](schema/cart/mutations/apply-coupon.md) or [remove](schema/cart/mutations/remove-coupon.md) cart coupons.
   -  [Assign an email](schema/cart/mutations/set-guest-email.md) to a guest cart.
   -  [Place an order](schema/cart/mutations/place-order.md).

-  **Added support for payment methods that implement Vault. See [customerPaymentTokens query](schema/checkout/queries/customer-payment-tokens.md) and [deletePaymentToken mutation](schema/checkout/mutations/delete-payment-token.md)**

-  **Added new queries and extended the functionality of others.**

   -  The [`isEmailAvailable` query](schema/customer/queries/is-email-available.md) checks whether the specified email address has already been used to create an account.
   -  The [`cart` query](schema/cart/queries/cart.md) can now return information set by mutations that perform cart operations, including product information, shipping and billing addresses, shipping and payment methods, and applied coupons. The query also returns calculated totals.
   -  The `customerPaymentTokens` query returns the signed-in customer's payment tokens.

-  **Queries can now be performed as HTTP GET or POST operations.**

-  **Adobe Commerce and Magento Open Source can use Varnish or full-page caching to [cache](usage/caching.md) pages rendered from the results of the following GraphQL queries:**

   -  `category`
   -  `cmsBlocks`
   -  `cmsPage`
   -  `products`
   -  `urlResolver`

  You must send these queries as HTTP GET operations to cache the results.

## Magento Open Source 2.3.1

-  **Added mutations and queries that allow customers to manage My Account information.** Specific capabilities include:
   -  Create [customer](schema/customer/mutations/create.md) account
   -  Change account information
   -  Manage billing and shipping addresses
   -  Change customer password
   -  Manage newsletter subscriptions
   -  View [wish lists](schema/wishlist/queries/index.md)
   -  View [order history](schema/customer/queries/orders.md)
   -  View [downloadable products](schema/products/interfaces/types/downloadable.md)

-  **Added functionality to support complex Catalog features.** This version supports:
   -  Specifying absolute image paths for [products](schema/products/queries/products.md) and including extended image information
   -  Rendering fields that use WYSIWYG text
   -  URL rewrites for products​

-  **GraphQL framework enhancements**, including:
   -  Mutations that [generate](schema/customer/mutations/generate-token.md) and [revoke](schema/customer/mutations/revoke-token.md) customer tokens
   -  Page Builder and WYSIWYG fields support complex structures for PWA scenarios
   -  Adobe Commerce and Magento Open Source now calculate the complexity of queries and mutations and returns an error message if a query or mutation is deemed too complex
   -  Variable support in [queries](usage/index.md#queries) and [mutations](usage/index.md#mutations)
   -  A query that returns information about a store's [theme and CMS](schema/store/queries/store-config.md) configuration
   -  GraphQL tests are integrated with Travis CI​
   -  GraphQL browsers now display fields and objects alphabetically
