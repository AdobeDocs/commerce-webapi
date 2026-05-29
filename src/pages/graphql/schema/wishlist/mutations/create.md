---
title: createWishlist mutation
description: The createWishlist mutation creates a wish list for the logged in customer. Adobe Commerce allows customers to have multiple wish lists.
---

| |
|:--|
| ![Adobe Commerce feature](../../../../images/adobe-logo.svg) **Exclusive feature only in Adobe Commerce** ([Learn more](https://experienceleague.adobe.com/docs/commerce-admin/user-guides/home.html#product-editions)) |

# createWishlist mutation

The `createWishlist` mutation creates a wish list for the logged in customer. Adobe Commerce allows customers to have multiple wish lists.

This mutation requires a valid [customer authentication token](../../customer/mutations/generate-token.md).

<InlineAlert variant="info" slots="text" />

Use the [`storeConfig` query](../../store/queries/store-config.md) with the following attributes to determine whether multiple wish lists are supported:

*  `enable_multiple_wishlists`
*  `magento_wishlist_general_is_enabled`
*  `maximum_number_of_wishlists`

## Syntax

```graphql
mutation {
  createWishlist(input: CreateWishlistInput!) {
    CreateWishlistOutput
  }
}
```

## Reference

The `createWishlist` reference provides detailed information about the types and fields defined in this mutation.

* [SaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-createWishlist)

* [PaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-createWishlist)

## Example usage

The following example creates the `My favorites` public wish list.

**Request:**

``` graphql
mutation {
  createWishlist(input: {
    name: "My favorites"
    visibility: PUBLIC
    }
  ) {
    wishlist {
      id
      name
      visibility
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "createWishlist": {
      "wishlist": {
        "id": "3",
        "name": "My favorites",
        "visibility": "PUBLIC"
      }
    }
  }
}
```

