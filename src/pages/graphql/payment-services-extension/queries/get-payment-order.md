---
title: getPaymentOrder query
description: This query retrieves the payment details for the order.
---

# getPaymentOrder query

<InlineAlert variant="info" slots="text" />

This query is available automatically on Adobe Commerce as a Cloud Service. On Adobe Commerce on Cloud and on-premises instances, you must install [Payment Services for Adobe Commerce](https://commercemarketplace.adobe.com/magento-payment-services.html) 2.10.0 or higher to use this query.

The `getPaymentOrder` query retrieves the payment details for the order. You must run the `getPaymentOrder` query  when the Signifyd integration and `hosted_fields` are enabled in [Payment Services](https://experienceleague.adobe.com/en/docs/commerce/payment-services/payments-checkout/payments-options).

## Syntax

```graphql
{ 
    getPaymentOrder(
      cartId: String!
      id: String!
    ) PaymentOrderOutput
}
```

## Reference

The [`getPaymentOrder`](/reference/graphql/saas/index.md#getpaymentorder) reference provides detailed information about the types and fields defined in this query.

## Example usage

The following example runs the `getPaymentOrder` query:

**Request:**

```graphql
{
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
