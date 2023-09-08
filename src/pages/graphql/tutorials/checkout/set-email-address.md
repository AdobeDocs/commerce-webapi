---
title: Step 8. Set email on the cart
description: Learn how to set a an email address for an order with the GraphQL API.
contributor_name: Atwix
contributor_link: https://www.atwix.com/
keywords:
  - GraphQL
  - Checkout
---

# Step 8. Set email on the cart (guest customers only)

<InlineAlert variant="success" slots="text" />

Skip this step if you placed the order as a registered customer.

If you place an order as a guest user, you must set a quote email address. Use the `setGuestEmailOnCart` mutation query for that.

`{ CART_ID }` is the unique shopping cart ID from [Step 2. Create empty cart](../../tutorials/checkout/add-product-to-cart.md).

**Request:**

```graphql
mutation {
  setGuestEmailOnCart(input: {
    cart_id: "{ CART_ID }"
    email: "guest@example.com"
  }) {
    cart {
      email
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "setGuestEmailOnCart": {
      "cart": {
        "email": "guest@example.com"
      }
    }
  }
}
```

## Verify this step

There are no additional verification steps. `quote`.`customer_email` is displayed for administrator on back-end side.
