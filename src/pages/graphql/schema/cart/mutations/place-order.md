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
    "placeOrder": {
      "order": {
        "order_number": "000000006"
      }
    }
  }
}
```

## Errors

Error | Description
--- | ---
`Enter a valid payment method and try again` | The payment method was not set. See [setPaymentMethodOnCart](../../cart/mutations/set-payment-method.md) mutation.
`Guest email for cart is missing.` | The guest attempted to place an order but did not provide an email address. See [setGuestEmailOnCart](../../cart/mutations/set-guest-email.md) mutation.
`Please check the billing address information` | The billing address was not set. See [setBillingAddressOnCart](../../cart/mutations/set-billing-address.md) mutation.
`Required parameter "cart_id" is missing` | The mutation does not contain a `cart_id` parameter.
`Some addresses can't be used due to the configurations for specific countries` | The shipping method was not set. See [setShippingMethodsOnCart](set-shipping-method.md) mutation.
`Some of the products are out of stock` | One of the products in the shopping cart are currently out of stock.
`The current user cannot perform operations on cart` | An unauthorized user (guest) tried to place an order on behalf of an authorized user (customer), or a customer tried to place an order on behalf of another customer.
`The shipping method is missing. Select the shipping method and try again` | The shipping method was not set. See [setShippingMethodsOnCart](set-shipping-method.md) mutation.
`Unable to place order: A server error stopped your order from being placed. Please try to place your order again` | The shopper tried to place an order when no products are in the shopping cart.
