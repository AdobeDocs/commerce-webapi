---
title: updateCartItems mutation
---

# updateCartItems mutation

The `updateCartItems` mutation allows you to modify items in the specified cart. You can also replace the current quantity of one or more cart items with the specified quantities. The mutation does not perform calculations to determine the quantity of cart items.

<InlineAlert variant="info" slots="text" />

Setting the quantity to `0` removes an item from the cart.

## Syntax

`mutation: {updateCartItems(input: UpdateCartItemsInput): {UpdateCartItemsOutput}}`

## Reference

The [`updateCartItems`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-updateCartItems) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example changes the quantity of cart item `MjQ=`. The new quantity is `3`.

**Request:**

```graphql
mutation {
  updateCartItems(
    input: {
      cart_id: "2m3Wpue1L3bNARhErAKbZ8Lb7czvgq6R",
      cart_items: [
        {
          cart_item_uid: "MjQ="
          quantity: 3
        }
      ]
    }
  ){
    cart {
      items {
        uid
        product {
          name
        }
        quantity
      }
      prices {
        grand_total{
          value
          currency
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
    "updateCartItems": {
      "cart": {
        "items": [
          {
            "uid": "MjI=",
            "product": {
              "name": "Erika Running Short"
            },
            "quantity": 1
          },
          {
            "uid": "MjQ=",
            "product": {
              "name": "Voyage Yoga Bag"
            },
            "quantity": 3
          }
        ],
        "prices": {
          "grand_total": {
            "value": 152.63,
            "currency": "USD"
          }
        }
      }
    }
  }
}
```

## Errors

Error | Description
--- | ---
`Could not find cart item with id: XXX` | The specified `input`.`cart_items`.`cart_item_id` value does not exist in the `quote_item` database table.
`Could not find a cart with ID "XXX"` | The specified `cart_id` value does not exist in the `quote_id_mask` database table.
`Required parameter "cart_id" is missing.` | The value specified in the `cart_id` argument is empty.
`Required parameter "cart_items" is missing.` | The `cart_items` argument is empty, or its value is specified as a non-array value.
`Required parameter "quantity" for "cart_items" is missing.` | The required `input`.`cart_items`.`quantity` argument must be specified.
`The current user cannot perform operations on cart "XXX"` | An unauthorized user (guest) tried to update a customer's cart, or an authorized user (customer) tried to update the cart of another customer.
