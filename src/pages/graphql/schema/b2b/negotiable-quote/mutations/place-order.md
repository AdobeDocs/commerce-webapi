---
title: placeNegotiableQuoteOrder mutation
edition: b2b
---

# placeNegotiableQuoteOrder mutation

The `placeNegotiableQuoteOrder` mutation converts a negotiable quote into an order and returns an order ID.

The negotiable quote must have one of the following statuses:

-  SUBMITTED
-  DECLINED
-  EXPIRED

If the status is DECLINED or EXPIRED, the negotiable quote is processed like a standard cart, without applying any discounts. The negotiable quote is not converted to a standard cart.

Perform the following actions before using the `placeNegotiableQuoteOrder` mutation. It might be necessary to perform additional steps during the process of coming to an agreement during the negotiable quote lifecycle.

-  [Create an empty cart](../../../cart/mutations/create-empty-cart.md)
-  [Add one or more products](../../../cart/mutations/add-products.md) to the cart
-  [Request a negotiable quote](request.md)
-  [Set the billing address](set-billing-address.md)
-  [Set the shipping address](set-shipping-address.md)
-  [Set the shipping method](set-shipping-methods.md)
-  [Set the payment method](set-payment-method.md)

You cannot manage orders with GraphQL, because orders are part of the backend. You can use REST or SOAP calls to manage orders to their completion.

## Syntax

```graphql
mutation {
  placeNegotiableQuoteOrder(
    input: PlaceNegotiableQuoteOrderInput
  ) {
    PlaceNegotiableQuoteOrderOutput
  }
}
```

## Reference

The [`placeNegotiableQuoteOrder`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-placeNegotiableQuoteOrder) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

**Request:**

```graphql
mutation {
  placeNegotiableQuoteOrder(
    input: {
      quote_uid: "xCA4wSZEHsb5QbFiKfoq5k1Dk8vIPBgb"
    }
  ) {
    order {
      order_number
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "placeNegotiableQuoteOrder": {
      "order": {
        "order_number": "000000006"
      }
    }
  }
}
```
