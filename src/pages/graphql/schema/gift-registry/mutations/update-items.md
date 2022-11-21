---
title: updateGiftRegistryItems mutation | Commerce Web APIs
edition: ee
---

# updateGiftRegistryItems mutation

The `updateGiftRegistryItems` mutation modifies the requested quantity of an item in the specified gift registry. It can also change the description of the item.

This mutation requires a valid [customer authentication token](../../customer/mutations/generate-token.md).

## Syntax

```graphql
mutation {
    updateGiftRegistryItems(
        giftRegistryUid: ID!,
        items: [UpdateGiftRegistryItemInput!]!
    ) {
    UpdateGiftRegistryItemsOutput
    }
}
```

## Example usage

The following example changes the quantity and description of an item in a gift registry

**Request:**

```graphql
mutation{
  updateGiftRegistryItems(giftRegistryUid: "iSJHFdAtF8YBM5ALgNyNIgQmnbOW9t69",
    items: [{
      gift_registry_item_uid: "OQ=="
      quantity: 3
      note:  "This is the number one thing on our list."}
    ]){
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

``` json
{
  "data": {
    "updateGiftRegistryItems": {
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
          },
          {
            "uid": "MTM=",
            "product": {
              "sku": "24-WB02"
            },
            "quantity": 1,
            "quantity_fulfilled": 0
          }
        ]
      }
    }
  }
}
```

## Input attributes

The `updateGiftRegistryItems` mutation requires the following input.

Attribute |  Data Type | Description
--- | --- | ---
`giftRegistryUid` | ID! | The unique ID of a `GiftRegistry` object
`items`| [[UpdateGiftRegistryItemInput!]!](#updategiftregistryiteminput-attributes) | An array of items to update

### UpdateGiftRegistryItemInput attributes

Attribute |  Data Type | Description
--- | --- | ---
`gift_registry_item_uid` | ID! | The unique ID of a `giftRegistryItem` object
`note` |String | The updated description of the item
`quantity` | Float! | The updated quantity of the gift registry item

## Output attributes

The `UpdateGiftRegistryItemsOutput` output object contains the following attribute.

Attribute |  Data Type | Description
--- | --- | ---
`gift_registry` | [GiftRegistry](#giftregistry-attributes) | The gift registry after updating items

### GiftRegistry attributes

import GiftRegistry from '/src/pages/_includes/graphql/gift-registry.md'

<GiftRegistry />
