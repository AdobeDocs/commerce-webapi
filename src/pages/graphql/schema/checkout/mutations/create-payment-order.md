---
title: createPaymentOrder mutation
---

# createPaymentOrder mutation

The `createPaymentOrder` mutation creates a payment order for later processing with the Payment Services enabled.

## createPaymentOrder object

The `createPaymentOrder` object must contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`cartId` | String! | The unique id for the generated cart. Required field for sale transactions
`methodCode` | String! | The code for the payment method used in the order. Required field for sale transactions
`payment_source` | String! | The identifiable payment source for the payment method
`vaultIntent` | String | Defines the intent for vaulting. Set by default to `false`

## Example usage

### `createPaymentOrder`

The following example shows the `createPaymentOrder` mutation constructed for the Payment Services payment method.

**Request:**

```text
mutation {
  createPaymentOrder(input: {
    cartId: "AJCY8dhIfuch9LcDHAxEkw7oG3DjGdKt"
    methodCode: "payment_services_paypal_hosted_fields"
    paymentSource: "cc"
    vaultIntent: false
  }) {
    id
    mp_order_id
    status
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
      "status": "CREATED"
    }
  }
}
```
