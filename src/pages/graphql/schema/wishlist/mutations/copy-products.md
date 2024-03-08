---
title: copyProductsBetweenWishlists mutation
edition: ee
---

# copyProductsBetweenWishlists mutation

The `copyProductsBetweenWishlists` mutation copies the specified quantities of one or more products to a different wish list. The original wish list is unchanged.

Use the [`customer` query](../../customer/queries/customer.md) to return a list of wish list IDs and item IDs.

This mutation requires a valid [customer authentication token](../../customer/mutations/generate-token.md).

## Syntax

```graphql
mutation {
  copyProductsBetweenWishlists(
    sourceWishlistUid: ID!,
    destinationWishlistUid: ID!,
    wishlistItems: [WishlistItemCopyInput!]!
  ){
    CopyProductsBetweenWishlistsOutput
  }
}
```

## Reference

The [`copyProductsBetweenWishlists`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-copyProductsBetweenWishlists) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example copies two items to another wish list.

**Request:**

``` graphql
mutation{
  copyProductsBetweenWishlists(sourceWishlistUid: 1, destinationWishlistUid: 2, wishlistItems: [
    {
      wishlist_item_id: 6
      quantity: 1
    }
    {
      wishlist_item_id: 7
      quantity: 1
    }
  ]){
    destination_wishlist {
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
    user_errors {
      code
      message
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "copyProductsBetweenWishlists": {
      "destination_wishlist": {
        "id": "2",
        "items_v2": {
          "items": [
            {
              "id": "8",
              "product": {
                "uid": "NDk=",
                "sku": "240-LV08",
                "name": "Advanced Pilates & Yoga (Strength)"
              }
            },
            {
              "id": "9",
              "product": {
                "uid": "MTg=",
                "sku": "24-UG02",
                "name": "Pursuit Lumaflex&trade; Tone Band"
              }
            },
            {
              "id": "10",
              "product": {
                "uid": "MTQ1MA==",
                "sku": "WS04",
                "name": "Layla Tee"
              }
            },
            {
              "id": "11",
              "product": {
                "uid": "MTU2Mg==",
                "sku": "WS12",
                "name": "Radiant Tee"
              }
            },
            {
              "id": "12",
              "product": {
                "uid": "MTYxMA==",
                "sku": "WB01",
                "name": "Electra Bra Top"
              }
            },
            {
              "id": "13",
              "product": {
                "uid": "MTY0Mg==",
                "sku": "WB03",
                "name": "Celeste Sports Bra"
              }
            },
            {
              "id": "15",
              "product": {
                "uid": "MTcyMg==",
                "sku": "WT03",
                "name": "Nora Practice Tank"
              }
            },
            {
              "id": "16",
              "product": {
                "uid": "MTY5MA==",
                "sku": "WT01",
                "name": "Bella Tank"
              }
            }
          ]
        }
      },
      "user_errors": []
    }
  }
}
```
