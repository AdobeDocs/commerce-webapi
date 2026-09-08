---
title: clearCart mutation
description: The clearCart mutation removes all items from the specified cart.

---

<Fragment src="../../../../includes/commerce-only.md"/>

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

The `clearCart` reference provides detailed information about the types and fields defined in this mutation.

* [Adobe Commerce as a Cloud Service](/reference/graphql/saas/mutations.md#clearcart)

* [On-Premises/Cloud](/reference/graphql/latest/mutations.md#clearcart)

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
