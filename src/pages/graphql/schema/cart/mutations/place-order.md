---
title: placeOrder mutation
---

# placeOrder mutation

The `placeOrder` mutation converts the cart into an order and returns an order ID. You cannot manage orders with GraphQL, because orders are part of the backend. You can use REST or SOAP calls to manage orders to their completion.

Perform the following actions before using the `placeOrder` mutation:

-  Create an empty cart
-  Add one or more products to the cart
-  Set the billing address
-  Set the shipping address
-  Set the shipping method
-  Set the payment method
-  For guest customers, assign an email to the cart

As of Commerce 2.4.9, the `PlaceOrderOutput` object contains the errors available on the top of the response node. This assures easy error control and provides compatibility with older versions.

As of Commerce 2.4.7, the `PlaceOrderOutput` object can contain `orderV2`, which provides full details about the order. When the mutation runs, Commerce generates and returns a token in the `orderV2.token` field. You can supply the token value to the [`guestOrderByToken` query](../../orders/queries/guest-order-by-token.md) to retrieve details about an order created by a guest shopper.

<InlineAlert variant="info" slots="text" />

The `placeOrder` mutation runs asynchronously if the `AsyncOrder` module has been enabled. By default, the mutation runs synchronously. [Asynchronous order placement](https://experienceleague.adobe.com/docs/commerce-operations/performance-best-practices/high-throughput-order-processing.html#asynchronous-order-placement) describes the benefits of enabling the module.

## Syntax

```graphql
mutation {
  placeOrder(
    input: PlaceOrderInput
  ) {
    PlaceOrderOutput
  }
}
```

## Reference

The [`placeOrder`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-placeOrder) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

**Request:**

```graphql
mutation {
  placeOrder(
    input: {
      cart_id: "IeTUiU0oCXjm0uRqGCOuhQ2AuQatogjG"
    }
  ) {
    orderV2 {
      number
      token
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "placeOrder": {
      "orderV2": {
        "number": "000000006",
        "token": "0:3:OSScWU6PKLn3kFyMhNWyskG0opgVvFBnJmtuaFHKGwDFT83S6Kv9U39iYwixuU+vhwDz2AF4pCs3GtLhHbQ="
      }
    }
  }
}
```

## Errors

Code | Error | Description
--- | --- | ---
`CART_NOT_FOUND` | `Could not find a cart with ID` | The specified cart ID is invalid.
`CART_NOT_ACTIVE` | `The cart isn't active.` | The specified cart ID is not active.
`GUEST_EMAIL_MISSING` | `Guest email for cart is missing.` | The guest attempted to place an order but did not provide an email address. See [setGuestEmailOnCart](../../cart/mutations/set-guest-email.md) mutation.
`UNABLE_TO_PLACE_ORDER` | `A server error stopped your order from being placed. Please try to place your order again` | The shopper tried to place an order when no products are in the shopping cart.
`UNABLE_TO_PLACE_ORDER` | `Some addresses can't be used due to the configurations for specific countries` | The shipping method was not set. See [setShippingMethodsOnCart](set-shipping-method.md) mutation.
`UNABLE_TO_PLACE_ORDER` | `The shipping method is missing. Select the shipping method and try again` | The shipping method was not set. See [setShippingMethodsOnCart](set-shipping-method.md) mutation.
`UNABLE_TO_PLACE_ORDER` | `Please check the billing address information` | The billing address was not set. See [setBillingAddressOnCart](../../cart/mutations/set-billing-address.md) mutation.
`UNABLE_TO_PLACE_ORDER` | `Enter a valid payment method and try again` | The payment method was not set. See [setPaymentMethodOnCart](../../cart/mutations/set-payment-method.md) mutation.
`UNABLE_TO_PLACE_ORDER` | `Some of the products are out of stock` | One of the products in the shopping cart are currently out of stock.
`UNDEFINED` | `UNDEFINED` | The error message does not match any error code

