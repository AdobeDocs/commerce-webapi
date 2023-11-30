---
title: Payment Services Paypal Vault payment method
description: Learn how to use the GraphQL API mutation for the Payment Services Paypal Vault payment solution.
keywords:
  - GraphQL
  - Payments
---

# Payment Services Paypal Vault payment method

Payment Services Paypal Vault is a payment method where a stored card is used for the transaction.

The following conditions must be true to use this payment method:

-  The shopper must be a logged-in customer.

-  The customer must have previously saved their payment information in the vault.

You cannot use this payment method if the customer decides to use a credit or debit card that is not stored in the vault.

## Payment Services Paypal Vault workflow

The following diagram shows the workflow for placing an order when Payflow Pro Vault is the selected payment method.

![Payment Services Paypal Vault sequence diagram](../../_images/graphql/payment-services-paypal-vault.svg)

1. Use the [`customerPaymentTokens`](../schema/checkout/queries/customer-payment-tokens.md) query to retrieve the payment tokens the customer has stored in the vault.

1. The application returns an array of payment tokens.

1. The client renders the token information, and the customer selects a payment method.

   When the customer selects a stored payment method, the PWA uses the [`setPaymentMethodOnCart`](../schema/cart/mutations/set-payment-method.md) mutation to set the payment method to `payflowpro_cc_vault`. The vaulted public hash is passed in the [`payflowpro_cc_vault`](#payflowpro_cc_vault-attributes) object.

1. The application returns a `Cart` object.

1. The client runs the [`placeOrder`](../schema/cart/mutations/place-order.md) mutation.

1. The application sends an authorization request to the gateway.

1. The gateway sends the response to Magento.

1. The application creates an order and sends an order ID in response to the `placeOrder` mutation.

## Additional Payment information

When you set the payment method to Payment Services Paypal Vault in the [`setPaymentMethodOnCart`](../schema/cart/mutations/set-payment-method.md) mutation, this mutation has an extra field, `public_hash`, which identifies the stored card being used.

This public_hash comes from the `customerPaymentTokens` query:

```graphql
{
    customerPaymentTokens {
        items {
            public_hash
            details
            payment_method_code
            type
        }
    }
}
```

### `payment_services_paypal_vault` attributes

The `setPaymentMethodOnCart` mutation has a `payment_services_paypal_vault` object that contains the following attribute:

Attribute |  Data Type | Description
--- | --- | ---
`public_hash` | String! | The public hash of the payment token

### Example usage

The following example shows the `setPaymentMethodOnCart` mutation constructed for the Payment Services Paypal Vault payment method.

**Request:**

```graphql
mutation {
    setPaymentMethodOnCart ( input: {
        cart_id: "uocGxUi5H97XFAMhY3s66q4aFYG3Bmdr",
        payment_method: {
            code: "payment_services_paypal_vault",
            payment_services_paypal_vault: {
                payment_source: "vault",
                payments_order_id: "mp-order-a4babd34-13d3-4ac0-b1b0-109bb7be1574",
                paypal_order_id: "9R90936863877801D",
                public_hash: "shew83bdbd83y2bdjbwb2ib2ds"
            }
        }
    }
    ) {
        cart {
            id
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
        "id": "r8TKHa58b7Y8VaZHLyABNxrEdS8hJJTZ",
        "selected_payment_method": {
          "code": "payment_services_paypal_vault"
        }
      }
    }
  }
}
```
