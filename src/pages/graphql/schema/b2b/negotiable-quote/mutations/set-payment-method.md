---
title: setNegotiableQuotePaymentMethod mutation
---

# setNegotiableQuotePaymentMethod mutation

The `setNegotiableQuotePaymentMethod` mutation defines which payment method to apply to the cart. The negotiable quote must be in the UPDATED state to successfully apply the payment method.

Supported online payment methods include:

-  [Braintree](../../../../payment-methods/braintree.md)
-  [Braintree Vault](../../../../payment-methods/braintree-vault.md)
-  [PayPal Express Checkout](../../../../payment-methods/paypal-express-checkout.md)
-  [PayPal Payflow Link](../../../../payment-methods/payflow-link.md)
-  [PayPal Payflow Pro](../../../../payment-methods/payflow-pro.md)
-  [PayPal Payflow Pro Vault](../../../../payment-methods/payflow-pro-vault.md)
-  [PayPal Payments Advanced](../../../../payment-methods/payments-advanced.md)
-  [PayPal Website Payments Pro Hosted Solution](../../../../payment-methods/hosted-pro.md)
-  [Express Checkout for other PayPal solutions](../../../../payment-methods/payflow-express.md)

The following offline payment methods are also supported:

Title | Code
--- | ---
Bank Transfer Payment | `banktransfer`
Cash on Delivery | `cashondelivery`
Check / Money order | `checkmo`
No Payment Information Required | `free`
Purchase Order | `purchaseorder`

This mutation requires a valid [customer authentication token](../../../customer/mutations/generate-token.md).

## Syntax

```graphql
{
    setNegotiableQuotePaymentMethod(
        input: SetNegotiableQuotePaymentMethodInput!
    ): SetNegotiableQuotePaymentMethodOutput
}
```

## Reference

The [`setNegotiableQuotePaymentMethod`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-setNegotiableQuotePaymentMethod) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example sets the payment method .

**Request:**

```graphql
mutation {
  setNegotiableQuotePaymentMethod(
    input: {
      quote_uid: "xCA4wSZEHsb5QbFiKfoq5k1Dk8vIPBgb"
      payment_method: { code: "checkmo" }
    }
  ) {
    quote {
      uid
      name
      status
      available_payment_methods {
        code
        title
      }
      selected_payment_method {
        code
        title
        purchase_order_number
      }
      items {
        product {
          sku
          name
        }
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "setNegotiableQuotePaymentMethod": {
      "quote": {
        "uid": "xCA4wSZEHsb5QbFiKfoq5k1Dk8vIPBgb",
        "name": "April 22 request",
        "status": "UPDATED",
        "available_payment_methods": [
          {
            "code": "checkmo",
            "title": "Check / Money order"
          }
        ],
        "selected_payment_method": {
          "code": "checkmo",
          "title": "Check / Money order",
          "purchase_order_number": null
        }
      }
    }
  }
}
```
