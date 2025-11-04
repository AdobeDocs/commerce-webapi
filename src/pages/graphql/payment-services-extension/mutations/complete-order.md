---
title: completeOrder mutation
description: This mutation synchronizes order details before you run the `placeOrder` mutation.
---

# completeOrder mutation

<InlineAlert variant="info" slots="text" />

This mutation is available only if you have installed [Payment Services for Adobe Commerce](https://commercemarketplace.adobe.com/magento-payment-services.html) 2.12.0 or higher.

The `completeOrder` mutation synchronizes order details before you run the `placeOrder` mutation.

When the mutation runs, Commerce generates and returns a token in the `orderV2.token` field. You can supply the token value to the [`guestOrderByToken` query](../../schema/orders/queries/guest-order-by-token.md) to retrieve details about an order created by a guest shopper.

## Preconditions

Before you run the `completeOrder` mutation, ensure that:

1. A cart has been created (guest or logged-in customer).
1. Products have been added to the cart.
1. Billing and shipping addresses have been set, if applicable.
1. A shipping method has been selected (for physical products).
1. A payment or checkout ID has been generated and is available.
1. For guest carts, a valid email address has been assigned.

## Limitations

- The `completeOrder` mutation is similar to the [`placeOrder`](../../schema/cart/mutations/place-order.md) mutation, but includes an additional required field `id` to capture the payment identifier.
- On success, the mutation returns the `orderV2` object containing the `number` and `token` fields.
- The `token` field allows guest users to retrieve their order using queries such as `guestOrderByToken`.

## Syntax

```graphql
mutation {
  completeOrder(
    input: CompleteOrderInput
  ) {
    CompleteOrderOutput
  }
}
```

## Example usage

**Request:**

```graphql
mutation {
  completeOrder(input: {
    cartId: "AJCY8dhIfuch9LcDHAxEkw7oG3DjGdKt"
    id: "88455624KT013492F"
  }) {
    orderV2 {
      number
      token
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
    "completeOrder": {
      "orderV2": {
        "number": "0000000012",
        "token": "0:3:OSScWU6PKLn3kFyMhNWyskG0opgVvFBnJmtuaFHKGwDFT83S6Kv9U39iYwixuU+vhwDz2AF4pCs3GtLhHbQ="
      },
      "errors": []
    }
  }
}
```

## Input attributes

### CompleteOrderInput

| Field | Type | Description |
|-------|------|--------------|
| `cartId` | String! | The unique identifier of the shopping cart (quote). |
| `id` | String! | The payment, checkout, or transaction identifier tied to the order. |

## Output attributes

### CompleteOrderOutput

| Field | Type | Description |
|-------|------|--------------|
| `errors` | Error! | List of error objects. The array is empty if there are no errors. |
| `orderV2` | OrderV2 | Contains minimal order details if successful. |

### OrderV2 object

| Field | Type | Description |
|-------|------|--------------|
| `number` | String | The order number assigned by the system. |
| `token` | String | A token that can be used to retrieve the order, especially for guest checkouts. |

### Error object

| Field | Type | Description |
|-------|------|--------------|
| `code` | String | A machine-readable error code. |
| `message` | String | A human-readable message describing the error. |

#### Possible error codes

| Code | Description |
|------|--------------|
| `CART_NOT_FOUND` | The provided cart ID does not exist. |
| `CART_NOT_ACTIVE` | The cart is not active (already converted or expired). |
| `GUEST_EMAIL_MISSING` | A guest cart does not have an email address assigned. |
| `PAYMENT_ID_INVALID` | The provided payment or transaction ID is invalid. |
| `UNABLE_TO_COMPLETE_ORDER` | A general error occurred while finalizing the order (for example, missing information or out-of-stock items). |
