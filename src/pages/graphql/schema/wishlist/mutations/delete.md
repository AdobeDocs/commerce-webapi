---
title: deleteWishlist mutation
description: The deleteWishlist mutation deletes the specified wish list. In Adobe Commerce, you cannot delete the customer's default (first) wish list. This mutation i...
---

| |
|:--|
| \<span style="display:inline-block; vertical-align:middle;"\>\<img src="../../../../images/adobe-logo.svg" alt="Adobe Commerce feature" style="height:20px; margin-right:8px; vertical-align:middle;" /\>\</span\>\<span style="display:inline-block; vertical-align:middle;"\>\<strong\>Exclusive feature only in Adobe Commerce\</strong\> (\<a href="https://experienceleague.adobe.com/docs/commerce-admin/user-guides/home.html#product-editions"\>Learn more\</a\>)\</span\> |

# deleteWishlist mutation

The `deleteWishlist` mutation deletes the specified wish list. In Adobe Commerce, you cannot delete the customer's default (first) wish list. This mutation is not available in Magento Open Source.

This mutation requires a valid [customer authentication token](../../customer/mutations/generate-token.md).

## Syntax

```graphql
mutation {
  deleteWishlist(wishlistId: ID!): DeleteWishlistOutput
}
```

## Reference

The `deleteWishlist` reference provides detailed information about the types and fields defined in this mutation.

* [SaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-deleteWishlist)

* [PaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-deleteWishlist)

## Example usage

The following example deletes a wish list.

**Request:**

``` graphql
mutation{
  deleteWishlist(wishlistId: 3){
    status
    wishlists {
      id
      name
      items_count
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "deleteWishlist": {
      "status": true,
      "wishlists": [
        {
          "id": "1",
          "name": "Vacation Wants",
          "items_count": 7
        },
        {
          "id": "2",
          "name": "Lose the Muffintop",
          "items_count": 6
        }
      ]
    }
  }
}
```

