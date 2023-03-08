---
title: createPaypalExpressToken mutation | Commerce Web APIs
---

# createPaypalExpressToken mutation

The `createPaypalExpressToken` mutation begins the authorization process for the following payment methods:

*  PayPal Express Checkout
*  PayPal Payflow Pro with Express Checkout
*  PayPal Payflow Link with Express Checkout

The `PaypalExpressUrlsInput` object contains a set of relative URLs that PayPal will use in response to various actions during the authorization process. The application prepends the base URL to this value to create a full URL. For example, if the full URL is `https://www.example.com/path/to/page.html`, the relative URL is `path/to/page.html`. Use this input for Express Checkout and Payments Standard payment methods.

If the request is successful, PayPal returns a token. The [`setPaymentMethodOnCart`](../../cart/mutations/set-payment-method.md) mutation uses this token later in the authorization process.

## Syntax

```graphql
mutation {
  createPaypalExpressToken(
    input: PaypalExpressTokenInput!
  ) {
    PaypalExpressTokenOutput
  }
}
```

## Reference

The [`createPaypalExpressToken`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-createPaypalExpressToken) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

**Request:**

```graphql
mutation {
  createPaypalExpressToken(
    input: {
      cart_id: "rMQdWEecBZr4SVWZwj2AF6y0dNCKQ8uH"
      code: "paypal_express"
      express_button: true
      urls: {
        return_url: "paypal/action/return.html"
        cancel_url: "paypal/action/cancel.html"
      }
    }
  ) {
    token
    paypal_urls {
      start
      edit
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "createPaypalExpressToken": {
      "token": "<PayPal_Token>",
      "paypal_urls": {
        "start": "https://www.sandbox.paypal.com/checkoutnow?token=<PayPal_Token>",
        "edit": "https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_express-checkout&useraction=continue&token=<PayPal_Token>"
      }
    }
  }
}
```

## Errors

Error | Description
--- | ---
`Required parameter "cart_id" is missing` | The mutation does not contain a `cart_id` argument.
`Could not find a cart with ID "XXX"` | The specified `cart_id` value does not exist in the `quote_id_mask` table.
`Field PaypalExpressTokenInput.code of required type String! was not provided.` | The required attribute `code` is missing.
`The requested Payment Method is not available.` | The payment method is not configured.
`Field PaypalExpressUrlsInput.cancel_url of required type String! was not provided.` | The required attribute `cancel_url` is missing.
`Field PaypalExpressUrlsInput.return_url of required type String! was not provided.` | The required attribute `return_url` is missing.
