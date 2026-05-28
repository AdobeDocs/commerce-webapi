---
title: removeGiftRegistry mutation
description: The removeGiftRegistry mutation deletes the specified registry from the customers list of gift registries.
---

| |
|:--|
| \<span style="display:inline-block; vertical-align:middle;"\>\<img src="../pages/_images/adobe-logo.svg" alt="Adobe Commerce feature" style="height:20px; margin-right:8px; vertical-align:middle;" /\>\</span\>\<span style="display:inline-block; vertical-align:middle;"\>\<strong\>Exclusive feature only in Adobe Commerce\</strong\> (\<a href="https://experienceleague.adobe.com/docs/commerce-admin/user-guides/home.html#product-editions"\>Learn more\</a\>)\</span\> |

# removeGiftRegistry mutation

The `removeGiftRegistry` mutation deletes the specified registry from the customers list of gift registries.

This mutation requires a valid [customer authentication token](../../customer/mutations/generate-token.md).

## Syntax

```graphql
removeGiftRegistry ( giftRegistryUid ID! ) RemoveGiftRegistryOutput
```

## Reference

The `removeGiftRegistry` reference provides detailed information about the types and fields defined in this mutation.

* [SaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-removeGiftRegistry)

* [PaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-removeGiftRegistry)

## Example usage

The following example deletes the specified gift registry.

**Request:**

```graphql
mutation{
  removeGiftRegistry(giftRegistryUid: "lobehNsInxfDeTt290DO5vH6DVltN74S"){
    success
  }
}
```

**Response:**

```json
{
  "data": {
    "removeGiftRegistry": {
      "success": true
    }
  }
}
```

