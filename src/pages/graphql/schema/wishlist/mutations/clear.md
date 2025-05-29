---
title: clearWishlist mutation
---

<InlineAlert variant="info" slots="text1" />

This mutation is part of the [Storefront Compatibility Package](https://experienceleague.adobe.com/developer/commerce/storefront/setup/storefront-compatibility/). It will be added to Adobe Commerce 2.4.9.

# clearWishlist mutation

The `clearWishlist` mutation removes all items from a wish list for the logged in customer.

This mutation requires a valid [customer authentication token](../../customer/mutations/generate-token.md).

## Syntax

```graphql
mutation {
  clearWishlist(wishlistId: int) {
      user_errors {
          code
          message
      }
      wishlist {
          id
          items_count
          name
          sharing_code
          updated_at
          visibility
      }
  }
}
```

## Reference

The [`clearWishlist`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-clearWishlist) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example clears the wishlist with ID `15` for the customer.

**Request:**

``` graphql
mutation {
  clearWishlist(wishlistId: 15) {
    user_errors {
        code
        message
    }
    wishlist {
        id
        items_count
        name
        sharing_code
        updated_at
        visibility
    }
}
```

**Response:**

```json
{
  "data": {
    "clearWishlist": {
      "user_errors": [],
      "wishlist": {
        "id": "15",
        "items_count": 0,
        "name": "Wish List",
        "sharing_code": "l6jgZ3VJxNeJguCJpbFTMMagkr5TKaep",
        "updated_at": "2025-05-27 07:26:09",
        "visibility": "PRIVATE"
      }
    }
  }
}
```
