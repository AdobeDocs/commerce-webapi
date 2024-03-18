---
title: Step 10. Place the order
description: Learn how to place an order with the GraphQL API.
contributor_name: Atwix
contributor_link: https://www.atwix.com/
keywords:
  - GraphQL
  - Checkout
---

# Step 10. Place the order

The `placeOrder` mutation places an order.

`{ CART_ID }` is the unique shopping cart ID from [Step 2. Create empty cart](../../tutorials/checkout/add-product-to-cart.md).

Send the customer's authorization token in the `Authorization` parameter of the header. See [Authorization tokens](../../usage/authorization-tokens.md) for more information.

**Request:**

```graphql
mutation {
  placeOrder(input: {cart_id: "{ CART_ID }"}) {
    orderV2 {
      number
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
    "placeOrder": {
      "orderV2": {
        "number": "000000001"
      },
      "errors": []
    }
  }
}
```

## Verify this step

1. Sign in as a customer to the website using the email `john.doe@example.com` and password `b1b2b3l@w+`.

1. Go to **My Account** > **My Orders**. The order you created is displayed.  The order is also displayed on the Orders grid (**Sales** > **Orders**) in the Admin.
