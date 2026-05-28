---
title: updateRequisitionListItems mutation
description: The updateRequisitionListItems mutation updates products in a requisition list.
contributor_name: EY
keywords:
  - B2B
---

| |
|:--|
| \<span style="display:inline-block; vertical-align:middle;"\>\<img src="../../../../../images/adobe-logo.svg" alt="Adobe Commerce feature" style="height:20px; margin-right:8px; vertical-align:middle;" /\>\</span\>\<span style="display:inline-block; vertical-align:middle;"\>\<strong\>Exclusive feature only in Adobe Commerce\</strong\> (\<a href="https://experienceleague.adobe.com/docs/commerce-admin/user-guides/home.html#product-editions"\>Learn more\</a\>)\</span\> |

# updateRequisitionListItems mutation

The `updateRequisitionListItems` mutation updates products in a requisition list.

<InlineAlert variant="info" slots="text" />

Use the [storeConfig query](../../../store/queries/store-config.md) with the `is_requisition_list_active` attribute to determine whether requisition lists are enabled.

This mutation requires a valid [customer authentication token](../../../customer/mutations/generate-token.md).

## Syntax

```graphql
mutation {
  updateRequisitionListItems(
    requisitionListUid: ID!
    requisitionListItems: [UpdateRequisitionListItemsInput!]!
  ) {
    UpdateRequisitionListItemsOutput
  }
}
```

## Reference

The `updateRequisitionListItems` reference provides detailed information about the types and fields defined in this mutation.

* [SaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-updateRequisitionListItems)

* [PaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-updateRequisitionListItems)

## Example usage

The following example updates the quantity of an item in a requisition list.

**Request:**

```graphql
mutation {
  updateRequisitionListItems(
    requisitionListUid: "Mg==",
    requisitionListItems: [
      {
          item_id: "Mw=="
          quantity: 2
      }
    ]
    ){
    requisition_list {
      uid
      name
      items_count
      items {
        items {
          uid
          quantity
          product {
            uid
            name
            sku
          }
        }
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "updateRequisitionListItems": {
      "requisition_list": {
        "uid": "Mg==",
        "name": "Frequently Ordered Products",
        "items_count": 1,
        "items": {
          "items": [
            {
              "uid": "Mw==",
              "quantity": 2,
              "product": {
                "uid": "NTk2",
                "name": "Logan  HeatTec&reg; Tee",
                "sku": "MS10"
              }
            }
          ]
        }
      }
    }
  }
}
```

<Edition slots="text" backgroundcolor="blue"/>

Thanks to EY for contributing this topic!
