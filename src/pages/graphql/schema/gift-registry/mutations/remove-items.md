---
title: removeGiftRegistryItems mutation
description: The removeGiftRegistryItems mutation removes one or more items from the specified gift registry.
---

| |
|:--|
| \<span style="display:inline-block; vertical-align:middle;"\>\<img src="../pages/_images/adobe-logo.svg" alt="Adobe Commerce feature" style="height:20px; margin-right:8px; vertical-align:middle;" /\>\</span\>\<span style="display:inline-block; vertical-align:middle;"\>\<strong\>Exclusive feature only in Adobe Commerce\</strong\> (\<a href="https://experienceleague.adobe.com/docs/commerce-admin/user-guides/home.html#product-editions"\>Learn more\</a\>)\</span\> |

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

## Reference

The `removeGiftRegistryItems` reference provides detailed information about the types and fields defined in this mutation.

* [SaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-removeGiftRegistryItems)

* [PaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-removeGiftRegistryItems)

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

