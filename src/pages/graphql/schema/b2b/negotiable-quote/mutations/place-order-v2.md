---
title: placeNegotiableQuoteOrderV2 mutation
edition: saas
keywords:
  - B2B
---

import CommerceOnly from '/src/_includes/commerce-only.md'

<CommerceOnly />

# placeNegotiableQuoteOrderV2 mutation

<InlineAlert variant="info" slots="text1" />

This mutation is part of the B2B Storefront Compatibility Package and is only available on [Adobe Commerce as a Cloud Service](https://experienceleague.adobe.com/en/docs/commerce/cloud-service/overview).

The `placeNegotiableQuoteOrderV2` mutation converts a negotiable quote into an order and returns the full order object.

The negotiable quote must have one of the following statuses:

-  SUBMITTED
-  DECLINED
-  EXPIRED

If the status is DECLINED or EXPIRED, the negotiable quote is processed like a standard cart, without applying any discounts. The negotiable quote is not converted to a standard cart.

Perform the following actions before using the `placeNegotiableQuoteOrderV2` mutation. It might be necessary to perform additional steps during the process of coming to an agreement during the negotiable quote lifecycle.

-  [Create an empty cart](../../../cart/mutations/create-empty-cart.md)
-  [Add one or more products](../../../cart/mutations/add-products.md) to the cart
-  [Request a negotiable quote](request.md)
-  [Set the billing address](set-billing-address.md)
-  [Set the shipping address](set-shipping-address.md)
-  [Set the shipping method](set-shipping-methods.md)
-  [Set the payment method](set-payment-method.md)

You cannot manage orders with GraphQL, because orders are part of the backend. You can use REST calls to manage orders to their completion.

## Syntax

```graphql
mutation {
    placeNegotiableQuoteOrderV2(
    input: PlaceNegotiableQuoteOrderInput
  ) {
    PlaceNegotiableQuoteOrderOutputV2
  }
}
```

## Reference

The [`placeNegotiableQuoteOrderV2`](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-placeNegotiableQuoteOrderV2) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

**Request:**

```graphql
mutation {
    placeNegotiableQuoteOrderV2(
    input: {
      quote_uid: "xCA4wSZEHsb5QbFiKfoq5k1Dk8vIPBgb"
    }
  ) {
    order {
      number
      token
      #...
    }
    errors {
      message
      code
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "placeNegotiableQuoteOrderV2": {
      "order": {
        "number": "000000006",
        "token": "0:3:OSScWU6PKLn3kFyMhNWyskG0opgVvFBnJmtuaFHKGwDFT83S6Kv9U39iYwixuU+vhwDz2AF4pCs3GtLhHbQ="
      },
      "errors": []
    }
  }
}
```

## Errors

Code | Error | Description
--- | --- | ---
`CART_NOT_FOUND` | `Could not find a cart with ID` | The specified cart ID is invalid.
`CART_NOT_ACTIVE` | `The cart isn't active.` | The specified cart ID is not active.
`GUEST_EMAIL_MISSING` | `Guest email for cart is missing.` | The guest attempted to place an order but did not provide an email address. See [setGuestEmailOnCart](../../../cart/mutations/set-guest-email.md) mutation.
`UNABLE_TO_PLACE_ORDER` | `A server error stopped your order from being placed. Please try to place your order again` | The shopper tried to place an order when no products are in the shopping cart.
`UNABLE_TO_PLACE_ORDER` | `Some addresses can't be used due to the configurations for specific countries` | The shipping method was not set. See [setShippingMethodsOnCart](set-shipping-methods.md) mutation.
`UNABLE_TO_PLACE_ORDER` | `The shipping method is missing. Select the shipping method and try again` | The shipping method was not set. See [setShippingMethodsOnCart](set-shipping-methods.md) mutation.
`UNABLE_TO_PLACE_ORDER` | `Please check the billing address information` | The billing address was not set. See [setBillingAddressOnCart](../../../cart/mutations/set-billing-address.md) mutation.
`UNABLE_TO_PLACE_ORDER` | `Enter a valid payment method and try again` | The payment method was not set. See [setPaymentMethodOnCart](../../../cart/mutations/set-payment-method.md) mutation.
`UNABLE_TO_PLACE_ORDER` | `Some of the products are out of stock` | One of the products in the shopping cart are currently out of stock.
`UNDEFINED` | `UNDEFINED` | The error message does not match any error code
