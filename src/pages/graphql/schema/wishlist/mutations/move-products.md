---
title: moveProductsBetweenWishlists mutation | Commerce Web APIs
ee_only: true
---

# moveProductsBetweenWishlists mutation

The `moveProductsBetweenWishlists` mutation moves the specified quantities of one or more products to a different wish list.

If you do not specify a quantity for a product, the mutation moves the entire quantity of that product to the target wish list.

Use the [`customer` query](../../customer/queries/customer.md) to return a list of wish list IDs and item IDs.

This mutation requires a valid [customer authentication token](../../customer/mutations/generate-token.md).

## Syntax

```graphql
mutation {
    moveProductsBetweenWishlists(
        sourceWishlistUid: ID!,
        destinationWishlistUid: ID!,
        wishlistItems: [WishlistItemMoveInput!]!
    ) {
        MoveProductsBetweenWishlistsOutput
    }
}
```

## Reference

The [`moveProductsBetweenWishlists`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-moveProductsBetweenWishlists) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example moves an item to another wish list. The ID of the moved product changes.

**Request:**

``` graphql
mutation{
  moveProductsBetweenWishlists(sourceWishlistUid: 2, destinationWishlistUid: 1, wishlistItems: [
    {
      wishlist_item_id: 9
      quantity: 1
    }
  ]){
    source_wishlist {
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
    "moveProductsBetweenWishlists": {
      "source_wishlist": {
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
      "destination_wishlist": {
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
              "id": "2",
              "product": {
                "uid": "MTA=",
                "sku": "24-WB05",
                "name": "Savvy Shoulder Tote"
              }
            },
            {
              "id": "3",
              "product": {
                "uid": "MTE=",
                "sku": "24-WB06",
                "name": "Endeavor Daytrip Backpack"
              }
            },
            {
              "id": "4",
              "product": {
                "uid": "MTA5OA==",
                "sku": "WH04",
                "name": "Miko Pullover Hoodie"
              }
            },
            {
              "id": "5",
              "product": {
                "uid": "MTIyNg==",
                "sku": "WJ01",
                "name": "Stellar Solar Jacket"
              }
            },
            {
              "id": "6",
              "product": {
                "uid": "MTcyMg==",
                "sku": "WT03",
                "name": "Nora Practice Tank"
              }
            },
            {
              "id": "7",
              "product": {
                "uid": "MTY5MA==",
                "sku": "WT01",
                "name": "Bella Tank"
              }
            },
            {
              "id": "17",
              "product": {
                "uid": "MTg=",
                "sku": "24-UG02",
                "name": "Pursuit Lumaflex&trade; Tone Band"
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
