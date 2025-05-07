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

The [`updateWishlist`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-updateWishlist) reference provides detailed information about the types and fields defined in this mutation.

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
