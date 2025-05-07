import CommerceOnly from '/src/_includes/commerce-only.md'

<CommerceOnly />

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

The [`deleteWishlist`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-deleteWishlist) reference provides detailed information about the types and fields defined in this mutation.

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
