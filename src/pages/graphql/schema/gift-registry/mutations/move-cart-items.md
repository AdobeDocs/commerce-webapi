---
title: moveCartItemsToGiftRegistry mutation | Commerce Web APIs
edition: ee
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

# moveCartItemsToGiftRegistry mutation

The `moveCartItemsToGiftRegistry` mutation moves all items from the cart to a gift registry.

This mutation requires a valid [customer authentication token](../../customer/mutations/generate-token.md).

## Syntax

```graphql
mutation {
    moveCartItemsToGiftRegistry (
        cartUid: ID!,
        giftRegistryUid: ID!
    ) {
        MoveCartItemsToGiftRegistryOutput
    }
}
```

## Reference

The [`moveCartItemsToGiftRegistry`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-moveCartItemsToGiftRegistry) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example moves all items from the cart to a gift registry.

**Request:**

``` graphql
mutation {
  moveCartItemsToGiftRegistry (
      cartUid:"8k0Q4MpH2IGahWrTRtqM61YV2MtLPApz",
      giftRegistryUid:"Owu5mdQ3uyfOAWzj8lFlHZW4uCDaMWC6"
  ) {
  gift_registry {
      uid
      created_at
      owner_name
      status
      type {
        label
      }
      message
      items {
        product {
          sku
          name
        }
      }
    }
    status
    user_errors {
      code
      message
      product_uid
      gift_registry_uid
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "moveCartItemsToGiftRegistry": {
      "gift_registry": {
        "uid": "Owu5mdQ3uyfOAWzj8lFlHZW4uCDaMWC6",
        "status": "ACTIVE",
        "created_at": "2021-05-06 21:19:05",
        "owner_name": "Veronica Costello",
        "type": {
          "label": "Birthday"
        },
        "message": "Birthday",
        "items": [
          {
            "product": {
              "sku": "24-UG06",
              "name": "Affirm Water Bottle "
            }
          }
        ]
      },
      "status": true,
      "user_errors": []
    }
  }
}
```
