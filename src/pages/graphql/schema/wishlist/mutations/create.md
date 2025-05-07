---
title: createWishlist mutation
---

import CommerceOnly from '/src/_includes/commerce-only.md'

<CommerceOnly />

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

The [`createWishlist`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-createWishlist) reference provides detailed information about the types and fields defined in this mutation.

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
