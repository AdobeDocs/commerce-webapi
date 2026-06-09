---
title: createPaymentOrder mutation
description: This mutation creates a payment order for later processing when Payment Services extension is enabled.
---

# createPaymentOrder mutation

<InlineAlert variant="info" slots="text" />

This mutation is available automatically on Adobe Commerce as a Cloud Service. On Adobe Commerce on Cloud and on-premises instances, you must install [Payment Services for Adobe Commerce](https://commercemarketplace.adobe.com/magento-payment-services.html) 2.10.0 or higher to use this mutation.

The `createPaymentOrder` mutation creates a payment order for later processing with Payment Services enabled.

The mutation can return details about the following payment methods supported in [Payment Services](https://experienceleague.adobe.com/en/docs/commerce/payment-services/payments-checkout/payments-options):

* Apple Pay
* Google Pay
* PayPal Hosted Fields
* PayPal Smart Buttons

Each of these payment methods can have a different payment source, for example, PayPal Hosted Fields only works with credit cards. You need to run `getPaymentConfig` and `setPaymentMethodOnCart` endpoints before running the `createPaymentOrder` mutation.

See [PayPal currency codes](https://developer.paypal.com/reference/currency-codes/) documentation for more information about the value of the `currency_code` in the response.

## Syntax

```graphql
mutation { 
    createPaymentOrder(
        input: CreatePaymentOrderInput! 
    ) CreatePaymentOrderOutput    
}
```

## Reference

The [`createPaymentOrder`](/reference/graphql/saas/index.md#createpaymentorder) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example creates a payment order. The payment method was previously set to `payment_services_paypal_hosted_fields`.

**Request:**

```graphql
mutation {
  createPaymentOrder(input: {
    cartId: "AJCY8dhIfuch9LcDHAxEkw7oG3DjGdKt"
    methodCode: "payment_services_paypal_hosted_fields"
    paymentSource: "cc"
    location: CHECKOUT
    vaultIntent: false
  }) {
    id
    mp_order_id
    status
    amount
    currency_code
  }
}
```

**Response:**

```json
{
  "data": {
    "createPaymentOrder": {
      "id": "9SA28234K9340625D",
      "mp_order_id": "mp-order-8b0488f9-46c5-4640-b577-c5f7d90cf224",
      "status": "CREATED",
      "amount": 50,
      "currency_code": "USD"
    }
  }
}
```
