---
title: getPaymentOrder query
---

# getPaymentOrder query

The `getPaymentOrder` query gets the payment order details.

## getPaymentOrder object

The `getPaymentOrder` object must contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`code` | String! | The code for the payment method used in the order
`params` | String! | The SDK parameters for the payment method

## Example usage

### `getPaymentOrder`

The following example shows the `getPaymentOrder` query:

**Request:**

```text
query {
    getPaymentOrder (
      cartId: "rPG5SFUQN6ePsfNNDnhrmmr9SNWqpPSS"
      id: "9XD295279E1088104"
    ) {
      mp_order_id
      id
      status
      payment_source_details {
        card {
          name
          last_digits
          card_expiry_month
          card_expiry_year
          bin_details {
            bin
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
    "getPaymentOrder": {
      "mp_order_id": "mp-order-972b389e-690c-4deb-b68a-f83c9076a6e7",
      "id": "9XD295279E1088104",
      "status": "APPROVED",
      "payment_source_details": {
        "card": {
          "name": "Testf Testl",
          "last_digits": "7763",
          "card_expiry_month": "12",
          "card_expiry_year": "2026",
          "bin_details": {
            "bin": "455676"
          }
        }
      }
    }
  }
}
```
