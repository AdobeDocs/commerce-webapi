---
title: createWishlist mutation
edition: ee
---

The `createWishlist` mutation creates a wish list for the logged in customer. Adobe Commerce allows customers to have multiple wish lists.

This mutation requires a valid [customer authentication token]({{page.baseurl}}/graphql/mutations/generate-customer-token.html).

<InlineAlert variant="info" slots="text" />

Use the [`storeConfig` query]({{page.baseurl}}/graphql/queries/store-config.html) with the following attributes to determine whether multiple wish lists are supported:

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

## Input attributes

The `CreateWishlistInput` object requires the following input.

Attribute |  Data Type | Description
--- | --- | ---
`name` | String! | The ID of the customer's wish list
`visibility`| WishlistVisibilityEnum! | Describes the visibility of the wish list. Possible values are `PRIVATE` and `PUBLIC`

## Output attributes

The `createWishlist` mutation returns the Wishlist object.

{% include graphql/wishlist.md %}
