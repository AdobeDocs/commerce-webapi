---
title: Instantiate the Payment Services SDK
description: Load the Payment Services SDK and configure its GraphQL endpoint and shopper authentication.
keywords:
  - Payments
  - SDK
---

# Instantiate the Payment Services SDK

Start with an instance of the `PaymentServicesSDK` class, which is defined by the SDK's JavaScript bundle on a CDN. Load the bundle with `loadPaymentServicesSDK` from the npm package, or with a script tag. Then instantiate the class with the configuration for your Commerce deployment.

Before using these examples, review the [release, support, and deployment requirements](index.md). In particular, ACCS endpoints and authentication have not been verified by the source documentation.

## Load with the npm package

Install the package, which contains the loader and TypeScript definitions:

```bash
npm install @adobe-commerce/payment-services-sdk
```

The loader adds a script tag for the latest CDN bundle compatible with the package's version, then returns the SDK class.

```js
import { loadPaymentServicesSDK } from "@adobe-commerce/payment-services-sdk"

const PaymentServicesSDK = await loadPaymentServicesSDK()
const sdk = new PaymentServicesSDK({
  gqlApiUrl: "https://example.com/graphql",
})
```

Replace the example endpoint with the GraphQL endpoint for your supported Commerce deployment. Loading or initializing the SDK can fail; handle rejected promises in your application's initialization error handling.

## Load with a script tag

Alternatively, add the bundle to your page. The source documentation specifies this URL format for the future release:

```html
<script src="https://commerce-payments-sdk.adobe.io/v0/{minor}/PaymentSDK.js"></script>
```

Replace `{minor}` with the minor version you intend to use. Confirm that the selected version is available before using this URL. The script adds the SDK class to `window`.

```js
const sdk = new window.PaymentServicesSDK({
  gqlApiUrl: "https://example.com/graphql",
})
```

## Versioning

A bundle URL does not receive breaking changes. In version 0.x, the URL includes the minor version: `v0/{minor}/PaymentSDK.js` receives patch releases for that minor version. The source documentation describes a major-version-only URL, such as `v1/PaymentSDK.js`, for version 1.0 onward; this is not confirmation that version 1.0 is available.

By default, `npm install` saves the version with a caret (`^`). For version 0.x, this accepts only patch releases of the same minor version.

## Shopper authentication

Use `getCustomerToken` to return the shopper's customer token, or `null` for a guest. If your application knows whether the shopper is a guest, also set `isGuestCustomer` to avoid an extra request.

In this example, `getCustomerTokenOrNull` is an application-provided function, not an SDK API. It must return the current shopper's token or `null`.

```js
const sdk = new PaymentServicesSDK({
  gqlApiUrl: "https://example.com/graphql",
  getCustomerToken: () => getCustomerTokenOrNull(),
  isGuestCustomer: () => getCustomerTokenOrNull() === null,
})
```

Storefronts served by Adobe Commerce itself can instead rely on its session cookie. For that case, the source documentation requires `gqlApiUrl` to be the store's base URL followed by `graphql`, such as `/default/graphql`, so that the browser sends the cookie. Do not assume that session-cookie authentication applies to a separately hosted custom frontend or to ACCS.

## TypeScript types

The npm package exports SDK types even when you load the bundle with a script tag:

```ts
import type {
  PaymentServicesSDK,
  SdkConfig,
} from "@adobe-commerce/payment-services-sdk"
import type {
  CreditCardRenderConfig,
} from "@adobe-commerce/payment-services-sdk/payment"
import type {
  CreditCardVaultRenderConfig,
} from "@adobe-commerce/payment-services-sdk/vault"
```

Next, follow the [payment lifecycle](payment-lifecycle.md) to initialize and render payment methods.
