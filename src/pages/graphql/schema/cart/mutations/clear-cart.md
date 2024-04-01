---
title: clearCart mutation
---

# clearCart mutation

The `clearCart` mutation removes all items from the specified cart.

## Syntax

```graphql
mutation {
  clearCart(input: ClearCartInput) {
      ClearCartOutput
  }
}
```

## Reference

The [`clearCart`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-clearCart) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

**Request:**

```graphql
mutation {
    clearCart(input: {uid: "B79Qefk7pUaxahYtO8WjOtr5UyEyjaYV"}) {
        cart {
            id
            itemsV2 {
                items {
                    uid
                }
            }
        }
        errors {
            message
        }
    }
}
```

**Response:**

The response is the cart with no items.

```json
{
  "data": {
    "clearCart": {
      "cart": {
        "id": "B79Qefk7pUaxahYtO8WjOtr5UyEyjaYV",
        "itemsV2": {
          "items": []
        }
      },
      "errors": null
    }
  }
}
```
