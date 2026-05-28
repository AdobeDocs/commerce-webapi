---
title: moveCartItemsToGiftRegistry mutation
description: The moveCartItemsToGiftRegistry mutation moves all items from the cart to a gift registry.
---

<Edition slots="text"/>

[Thanks to Atwix for contributing this topic!](https://www.atwix.com/)

| |
|:--|
| \<span style="display:inline-block; vertical-align:middle;"\>\<img src="../pages/_images/adobe-logo.svg" alt="Adobe Commerce feature" style="height:20px; margin-right:8px; vertical-align:middle;" /\>\</span\>\<span style="display:inline-block; vertical-align:middle;"\>\<strong\>Exclusive feature only in Adobe Commerce\</strong\> (\<a href="https://experienceleague.adobe.com/docs/commerce-admin/user-guides/home.html#product-editions"\>Learn more\</a\>)\</span\> |

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

The `moveCartItemsToGiftRegistry` reference provides detailed information about the types and fields defined in this mutation.

* [SaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-moveCartItemsToGiftRegistry)

* [PaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-moveCartItemsToGiftRegistry)

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

