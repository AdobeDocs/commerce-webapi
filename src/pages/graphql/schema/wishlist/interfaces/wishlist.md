---
title: WishlistItemInterface attributes and implementations | Commerce Web APIs
---

# WishlistItemInterface attributes and implementations

`WishlistItemInterface` provides details about items in a wish list. It has the following implementations:

*  `BundleWishlistItem`
*  `ConfigurableWishlistItem`
*  `DownloadableWishlistItem`
*  `GiftCardWishlistItem`
*  `GroupedProductWishlistItem`
*  `SimpleWishlistItem`
*  `VirtualWishlistItem`

## Reference

The [`WishlistItemInterface`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-WishlistItemInterface) reference provides detailed information about the types and fields defined in this interface.

## Example usage

The following mutation adds a downloadable product to a wish list and returns detailed information about the product.

**Request:**

```graphql
mutation {
  addProductsToWishlist(
    wishlistId: 3,
    wishlistItems: [
      {
        sku: "240-LV06"
        quantity: 1
      }
    ]
) {
    user_errors {
      code
      message
    }
    wishlist {
      id
      sharing_code
      items_count
      updated_at
      items_v2 {
        uid
        quantity
        added_at
        ... on DownloadableWishlistItem {
          links_v2 {
            uid
            title
            sample_url
          }
          samples {
            title
            sample_url
          }
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
    "addProductsToWishlist": {
      "user_errors": [],
      "wishlist": {
        "id": "3",
        "sharing_code": "cVeOljNmNKm0e1jRFj7PRMyBXrpu88Sf",
        "items_count": 1,
        "updated_at": "2020-11-12 03:01:46",
        "items_v2": [
          {
            "uid": "MTQ=",
            "quantity": 1,
            "added_at": "2020-11-12 03:01:46",
            "links_v2": [
              {
                "uid": "ZG93bmxvYWRhYmxlLzM=",
                "title": "Yoga Adventure",
                "sample_url": "http://example.com/downloadable/download/linkSample/link_id/3/"
              }
            ],
            "samples": [
              {
                "title": "Trailer #1",
                "sample_url": "http://example.com/downloadable/download/sample/sample_id/7/"
              },
              {
                "title": "Trailer #2",
                "sample_url": "http://example.com/downloadable/download/sample/sample_id/8/"
              },
              {
                "title": "Trailer #3",
                "sample_url": "http://example.com/downloadable/download/sample/sample_id/9/"
              }
            ]
          }
        ]
      }
    }
  }
}
```
