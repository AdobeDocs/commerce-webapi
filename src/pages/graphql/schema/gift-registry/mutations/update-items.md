---
title: updateGiftRegistryItems mutation
description: The updateGiftRegistryItems mutation modifies the requested quantity of an item in the specified gift registry. It can also change the description of the i...
---

| |
|:--|
| \<span style="display:inline-block; vertical-align:middle;"\>\<img src="../pages/_images/adobe-logo.svg" alt="Adobe Commerce feature" style="height:20px; margin-right:8px; vertical-align:middle;" /\>\</span\>\<span style="display:inline-block; vertical-align:middle;"\>\<strong\>Exclusive feature only in Adobe Commerce\</strong\> (\<a href="https://experienceleague.adobe.com/docs/commerce-admin/user-guides/home.html#product-editions"\>Learn more\</a\>)\</span\> |

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

## Reference

The `updateGiftRegistryItems` reference provides detailed information about the types and fields defined in this mutation.

* &#8203;<Edition name="saas" /> [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-updateGiftRegistryItems)

* &#8203;<Edition name="paas" /> [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-updateGiftRegistryItems)

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

