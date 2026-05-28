---
title: addRequisitionListItemsToCart mutation
description: The addRequisitionListItemsToCart mutation adds requisition list items to the cart. The requisition list does not change after adding items to the cart.
contributor_name: EY
keywords:
  - B2B
---

| |
|:--|
| \<span style="display:inline-block; vertical-align:middle;"\>\<img src="../../../../../images/adobe-logo.svg" alt="Adobe Commerce feature" style="height:20px; margin-right:8px; vertical-align:middle;" /\>\</span\>\<span style="display:inline-block; vertical-align:middle;"\>\<strong\>Exclusive feature only in Adobe Commerce\</strong\> (\<a href="https://experienceleague.adobe.com/docs/commerce-admin/user-guides/home.html#product-editions"\>Learn more\</a\>)\</span\> |

# addRequisitionListItemsToCart mutation

The `addRequisitionListItemsToCart` mutation adds requisition list items to the cart. The requisition list does not change after adding items to the cart.

<InlineAlert variant="info" slots="text" />

Use the [storeConfig query](../../../store/queries/store-config.md) with the `is_requisition_list_active` attribute to determine whether requisition lists are enabled.

This mutation requires a valid [customer authentication token](../../../customer/mutations/generate-token.md).

## Syntax

```graphql
mutation {
  addRequisitionListItemsToCart (
    requisitionListUid: ID
    requisitionListItemUids: [ID!]
  ) {
    AddRequisitionListItemsToCartOutput
  }
}
```

## Reference

The `addRequisitionListItemsToCart` reference provides detailed information about the types and fields defined in this mutation.

* [SaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-addRequisitionListItemsToCart)

* [PaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-addRequisitionListItemsToCart)

## Example usage

The following example adds items to the cart.

**Request:**

```graphql
mutation {
  addRequisitionListItemsToCart (
    requisitionListUid: "Mg=="
    requisitionListItemUids:
    ["Mw==", "Ng==", "Nw=="]
  )
  {
    status
    cart {
      items {
        uid
        product {
          uid
          sku
          name
        }
      }
    }
  }
}
```

**Response:**

``` json
{
  "data": {
    "addRequisitionListItemsToCart": {
      "status": true,
      "cart": {
        "items": [
          {
            "uid": "NQ==",
            "product": {
              "uid": "NTk2",
              "sku": "MS10",
              "name": "Logan  HeatTec&reg; Tee"
            }
          },
          {
            "uid": "Nw==",
            "product": {
              "uid": "MTI=",
              "sku": "24-WB03",
              "name": "Driven Backpack"
            }
          },
          {
            "uid": "OA==",
            "product": {
              "uid": "Mg==",
              "sku": "24-MB04",
              "name": "Strive Shoulder Pack"
            }
          }
        ]
      }
    }
  }
}
```

<Edition slots="text" backgroundcolor="blue"/>

Thanks to EY for contributing this topic!
