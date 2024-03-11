---
title: setPaymentMethodOnCart mutation
---

# setPaymentMethodOnCart mutation

The `setPaymentMethodOnCart` mutation defines which payment method to apply to the cart. Adobe Commerce and Magento Open Source GraphQL supports the following offline payment methods:

Title | Code
--- | ---
Bank Transfer Payment | `banktransfer`
Cash on Delivery | `cashondelivery`
Check / Money order | `checkmo`
No Payment Information Required | `free`
Purchase Order | `purchaseorder`

Supported online payment methods include:

-  [Braintree](../../../payment-methods/braintree.md)
-  [Braintree Vault](../../../payment-methods/braintree-vault.md)
-  [PayPal Express Checkout](../../../payment-methods/paypal-express-checkout.md)
-  [PayPal Payflow Link](../../../payment-methods/payflow-link.md)
-  [PayPal Payflow Pro](../../../payment-methods/payflow-pro.md)
-  [PayPal Payflow Pro Vault](../../../payment-methods/payflow-pro-vault.md)
-  [PayPal Payments Advanced](../../../payment-methods/payments-advanced.md)
-  [PayPal Website Payments Pro Hosted Solution](../../../payment-methods/hosted-pro.md)
-  [Express Checkout for other PayPal solutions](../../../payment-methods/payflow-express.md)

For all online payment methods, the payload must include an object that defines additional information specific to that payment method. For example, the payload for Braintree payment method includes the following object:

```graphql
braintree: {
  payment_method_nonce: "fake-nonce"
  is_active_payment_token_enabler: false
}
```

## Syntax

`mutation: {setPaymentMethodOnCart(input: SetPaymentMethodOnCartInput): SetPaymentMethodOnCartOutput}}`

## Reference

The [`setPaymentMethodOnCart`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-setPaymentMethodOnCart) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

### Offline payment method

The following example assigns the `banktransfer` payment method to the specified cart.

**Request:**

```graphql
mutation {
  setPaymentMethodOnCart(input: {
      cart_id: "rMQdWEecBZr4SVWZwj2AF6y0dNCKQ8uH"
      payment_method: {
          code: "banktransfer"
      }
  }) {
    cart {
      selected_payment_method {
        code
        title
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
          "code": "banktransfer",
          "title": "Bank Transfer Payment"
        }
      }
    }
  }
}
```

## Online payment method

The following example shows the `setPaymentMethodOnCart` mutation constructed for the Braintree payment method.

**Request:**

```graphql
mutation {
  setPaymentMethodOnCart(input: {
    cart_id: "IeTUiU0oCXjm0uRqGCOuhQ2AuQatogjG"
    payment_method: {
      code: "braintree"
      braintree: {
        payment_method_nonce: "fake-nonce"
        is_active_payment_token_enabler: false
      }
    }
  }) {
  cart {
    selected_payment_method {
      code
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
          "code": "braintree"
        }
      }
    }
  }
}
```

## Input attributes

The top-level `SetPaymentMethodOnCartInput` object is listed first. All child objects are listed in alphabetical order.

### SetPaymentMethodOnCartInput attributes

The `SetPaymentMethodOnCartInput` object must contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`cart_id` | String! | The unique ID that identifies the customer's cart
`payment_method` | [PaymentMethodInput!](#paymentmethodinput-attributes) | An object containing the payment method code

### PaymentMethodInput attributes

The `PaymentMethodInput` object can contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`code` | String! | The internal name for the payment method
`purchase_order_number` | String | The purchase order number. Optional for most payment methods

For all online payment methods, the payload must include an object that defines additional information specific to that payment method.

## Errors

Error | Description
--- | ---
`Could not find a cart with ID "XXX"` | The specified `cart_id` value does not exist in the `quote_id_mask` table.
`Required parameter "cart_id" is missing.` | The value specified in the `cart_id` argument is empty.
`Required parameter "code" for "payment_method" is missing.` | The value specified in the `code` argument is empty.
`The current user cannot perform operations on cart "XXX"` | An unauthorized user (guest) tried to set a payment method for an order on behalf of an authorized user (customer), or a customer tried to set a payment method for an order on behalf of another customer.
`The requested Payment Method is not available.` | Specified in the `payment_method` argument payment method is disabled or does not exist.
`The shipping address is missing. Set the address and try again.` | You ran `setPaymentMethodOnCart` mutation before [setShippingAddressesOnCart](set-shipping-method.md). Set a shipping address first. [GraphQL checkout tutorial](../../../tutorials/checkout/index.md) shows the order placement sequence.
