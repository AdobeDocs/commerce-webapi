---
title: updateWishlist mutation
edition: ee
---

The `updateWishlist` mutation updates the properties of a wish list. Adobe Commerce allows customers to change the name and visibility of wish lists.

<InlineAlert variant="info" slots="text" />

Use the [updateProductsInWishlist mutation]({{page.baseurl}}/graphql/mutations/update-products-in-wishlist.html) to modify the contents of a wish list.

This mutation requires a valid [customer authentication token]({{page.baseurl}}/graphql/mutations/generate-customer-token.html).

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

## Input attributes

The `updateWishlist` mutation requires the following input.

Attribute |  Data Type | Description
--- | --- | ---
`name` | String! | The unique ID of `Wishlist` object
`visibility`| WishlistVisibilityEnum! | Describes the visibility of the wish list. Possible values are `PRIVATE` and `PUBLIC`
`wishlistUid` | ID! | The ID of the wish list to update

## Output attributes

The `UpdateWishlistOutput` object can contain the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`name` | String! | The wish list name
`uid` | ID! | The ID of the updated wish list
`visibility` | WishlistVisibilityEnum! | The wish list visibility. Possible values are `PRIVATE` and `PUBLIC`
