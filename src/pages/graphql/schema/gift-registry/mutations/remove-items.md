---
title: removeGiftRegistryItems mutation | Commerce Web APIs
edition: ee
---

# removeGiftRegistryItems mutation

The `removeGiftRegistryItems` mutation removes one or more items from the specified gift registry.

This mutation requires a valid [customer authentication token](../../customer/mutations/generate-token.md).

## Syntax

```graphql
mutation {
  removeGiftRegistryItems(
    giftRegistryUid: ID!,
    itemsUid: [ID!]!
  ) {
    RemoveGiftRegistryItemsOutput
  }
}
```

## Example usage

The following example removes an item from the specified gift registry.

**Request:**

```graphql
mutation{
  removeGiftRegistryItems(
    giftRegistryUid: "iSJHFdAtF8YBM5ALgNyNIgQmnbOW9t69",
    itemsUid: ["MTM="]
  ){
    gift_registry {
      uid
      event_name
      items {
        uid
        product {
          sku
        }
        quantity
        quantity_fulfilled
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "removeGiftRegistryItems": {
      "gift_registry": {
        "uid": "iSJHFdAtF8YBM5ALgNyNIgQmnbOW9t69",
        "event_name": "Bill and Julie's wedding",
        "items": [
          {
            "uid": "OQ==",
            "product": {
              "sku": "24-WB03"
            },
            "quantity": 3,
            "quantity_fulfilled": 0
          }
        ]
      }
    }
  }
}
```

## Input attributes

The `removeGiftRegistryItems` mutation requires the following input.

Attribute |  Data Type | Description
--- | --- | ---
`giftRegistryUid` | ID! | The unique ID of a `GiftRegistry` object
`itemsUid` | [ID!]! | An array of item IDs to remove

## Output attributes

The `RemoveGiftRegistryItemsOutput` output object contains the following attribute.

Attribute |  Data Type | Description
--- | --- | ---
`gift_registry` | [GiftRegistry](#giftregistry-attributes) | The gift registry after removing items

### GiftRegistry attributes

import GiftRegistry from '/src/pages/_includes/graphql/gift-registry.md'

<GiftRegistry />
