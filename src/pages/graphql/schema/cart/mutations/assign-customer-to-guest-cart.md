---
title: assignCustomerToGuestCart mutation
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

# assignCustomerToGuestCart mutation

The `assignCustomerToGuestCart` mutation merges a logged-in customer's shopping cart into the specified guest cart. The mutation inactivates the customer's shopping cart and moves the products to the guest cart. The guest cart is then assigned to the customer.

<InlineAlert variant="info" slots="text" />

The `masked_id` of the guest cart contains a new value. The `quote_id` remains the same.

This mutation requires a valid [customer authentication token](../../customer/mutations/generate-token.md).

<InlineAlert variant="info" slots="text" />

Use the [mergeCarts](merge.md) mutation to transfer the contents of a guest cart into a customer's cart.

## Syntax

```graphql
mutation {
    assignCustomerToGuestCart(
        cart_id: String!
    ) {
        Cart!
    }
}
```

## Reference

The [`assignCustomerToGuestCart`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-assignCustomerToGuestCart) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

In the following example, the customer and guest carts each contain one item. The mutation merges the customer's cart to the guest cart. As a result, the guest cart contains two items.

**Request:**

```graphql
mutation {
  assignCustomerToGuestCart(
    cart_id: "MDYKgqIdWMKr7VD1zlYwxrB7kuX8lR5s"
  ) {
    items {
      quantity
      product {
        sku
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "assignCustomerToGuestCart": {
      "items": [
        {
          "quantity": 1,
          "product": {
            "sku": "customer_item"
          }
        },
        {
          "quantity": 1,
          "product": {
            "sku": "guest_item"
          }
        }
      ]
    }
  }
}
```

## Errors

Error | Description
--- | ---
`The current customer isn't authorized.` | The current customer is not currently logged in.
`Unable to assign the customer to the guest cart` | The current customer can't be assigned to the provided guest cart.
`The cart isn't active` | The cart with the specified cart ID is unavailable, because the items have been purchased and the cart ID becomes inactive.
`Could not find a cart with ID "XXX"` | The specified `cart_id` value does not exist in the `quote_id_mask` table.
`The current user cannot perform operations on cart "XXX"` | Tried to assign the customer to the customer's cart.
