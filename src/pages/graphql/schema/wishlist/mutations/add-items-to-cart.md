---
title: addWishlistItemsToCart mutation | Commerce Web APIs
---

# addWishlistItemsToCart mutation

The `addWishlistItemsToCart` mutation moves items from the specified wish list to the customer's cart.

This mutation requires a valid [customer authentication token](../../customer/mutations/generate-token.md).

## Syntax

```graphql
mutation {
  addWishlistItemsToCart (
    wishlistId: ID!
    wishlistItemIds: [ID!]
  ) {
    AddWishlistItemsToCartOutput
  }
}
```

## Reference

The [`addWishlistItemsToCart`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-wishlist) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example moves two items from a wishlist to the cart.

**Request:**

```graphql
mutation {
  addWishlistItemsToCart(
    wishlistId: 1
    wishlistItemIds: [2, 3])
  {
    status
    add_wishlist_items_to_cart_user_errors {
      code
      message
    }
    wishlist {
      id
      items_v2 {
        items {
          id
          product {
            uid
            sku
            name
          }
        }
      }
    }
  }
}
```

**Response:**

``` json
{
  "data": {
    "addWishlistItemsToCart": {
      "status": true,
      "add_wishlist_items_to_cart_user_errors": [],
      "wishlist": {
        "id": "1",
        "items_v2": {
          "items": [
            {
              "id": "1",
              "product": {
                "uid": "MTM=",
                "sku": "24-WB07",
                "name": "Overnight Duffle"
              }
            },
            {
              "id": "4",
              "product": {
                "uid": "MTEwMA==",
                "sku": "WH04",
                "name": "Miko Pullover Hoodie"
              }
            },
            {
              "id": "5",
              "product": {
                "uid": "MTIyOA==",
                "sku": "WJ01",
                "name": "Stellar Solar Jacket"
              }
            },
            {
              "id": "6",
              "product": {
                "uid": "MTcyNA==",
                "sku": "WT03",
                "name": "Nora Practice Tank"
              }
            },
            {
              "id": "7",
              "product": {
                "uid": "MTY5Mg==",
                "sku": "WT01",
                "name": "Bella Tank"
              }
            }
          ]
        }
      }
    }
  }
}
```

## Errors

The `WishlistCartUserInputErrorType` field can contain the following values:

Type | Description
--- | ---
`INSUFFICIENT_STOCK` | The requested quantity of a product is greater than the quantity available
`NOT_SALABLE` | A requested product is not available
`PRODUCT_NOT_FOUND` | A product with the specified ID does not exist.
`UNDEFINED` | The error message does not match any error code
