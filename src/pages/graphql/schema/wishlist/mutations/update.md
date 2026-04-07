---
title: updateWishlist mutation
---

import CommerceOnly from '/src/_includes/commerce-only.md'

<CommerceOnly />

# updateWishlist mutation

The `updateWishlist` mutation updates the properties of a wish list. Adobe Commerce allows customers to change the name and visibility of wish lists.

<InlineAlert variant="info" slots="text" />

Use the [updateProductsInWishlist mutation](update-products.md) to modify the contents of a wish list.

This mutation requires a valid [customer authentication token](../../customer/mutations/generate-token.md).

## Syntax

```graphql
mutation {
  updateWishlist(
    wishlistUid: ID!
    name: String
    visibility: WishlistVisibilityEnum
  ) {
    UpdateWishlistOutput
  }
}
```

## Reference

The `updateWishlist` reference provides detailed information about the types and fields defined in this mutation.

* &#8203;<Edition name="saas" /> [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-updateWishlist)

* &#8203;<Edition name="paas" /> [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-updateWishlist)

## Example usage

The following example changes the name of an existing wish list.

**Request:**

``` graphql
mutation {
  updateWishlist(
    wishlistUid: 4
    name: "My favorite things"
    visibility: PUBLIC
  ) {
    name
    uid
    visibility
  }
}
```

**Response:**

```json
{
  "data": {
    "updateWishlist": {
      "name": "My favorite things",
      "uid": "4",
      "visibility": "PUBLIC"
    }
  }
}
```
