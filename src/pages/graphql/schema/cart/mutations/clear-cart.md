---
title: clearCart mutation
description: The clearCart mutation removes all items from the specified cart.

---

<Edition slots="text" backgroundcolor="blue"/>

[PaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions)

| |
|:--|
| \<span style="display:inline-block; vertical-align:middle;"\>\<img src="../../../../images/adobe-logo.svg" alt="Adobe Commerce feature" style="height:20px; margin-right:8px; vertical-align:middle;" /\>\</span\>\<span style="display:inline-block; vertical-align:middle;"\>\<strong\>Exclusive feature only in Adobe Commerce\</strong\> (\<a href="https://experienceleague.adobe.com/docs/commerce-admin/user-guides/home.html#product-editions"\>Learn more\</a\>)\</span\> |

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

