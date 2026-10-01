---
title: RequisitionListItemInterface attributes and implementations
description: RequisitionListItemInterface provides details about items in a requisition list. It has the following implementations:
keywords:
  - B2B
---

<Fragment src="../../../../../includes/commerce-only.md"/>

# RequisitionListItemInterface attributes and implementations

[`RequisitionListItemInterface`](/reference/graphql/latest/types-q-s.md#requisitionlistiteminterface) provides details about items in a requisition list. It has the following implementations:

*  [`BundleRequisitionListItem`](/reference/graphql/latest/types-a-b.md#bundlerequisitionlistitem)
*  [`ConfigurableRequisitionListItem`](/reference/graphql/latest/types-c-e.md#configurablerequisitionlistitem)
*  [`DownloadableRequisitionListItem`](/reference/graphql/latest/types-c-e.md#downloadablerequisitionlistitem)
*  [`GiftCardRequisitionListItem`](/reference/graphql/latest/types-f-i.md#giftcardrequisitionlistitem)
*  [`SimpleRequisitionListItem`](/reference/graphql/latest/types-q-s.md#simplerequisitionlistitem)
*  [`VirtualRequisitionListItem`](/reference/graphql/latest/types-t-z.md#virtualrequisitionlistitem)

<InlineAlert variant="info" slots="text" />

There is not an implementation for grouped products. The items within a grouped product are managed individually.

## Example usage

The following mutation adds a product to a requisition list and returns information about the products in the list.

**Request:**

```graphql
mutation {
  addProductsToRequisitionList(
      requisitionListUid: "Mg=="
      requisitionListItems: [
        {
            sku: "MS10"
            quantity: 1
            selected_options: ["Y29uZmlndXJhYmxlLzkzLzUw","Y29uZmlndXJhYmxlLzE2MC8xNjg"]
        }
      ]
    ) {
    requisition_list {
      uid
      items {
        items {
          ... on RequisitionListItemInterface {
            uid
            product {
              uid
              sku
              name
            }
            quantity
          }
        }
      }
      items_count
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "addProductsToRequisitionList": {
      "requisition_list": {
        "uid": "Mg==",
        "items": {
          "items": [
            {
              "uid": "Mg==",
              "product": {
                "uid": "MTA=",
                "sku": "24-WB05",
                "name": "Savvy Shoulder Tote"
              },
              "quantity": 1
            },
            {
              "uid": "Mw==",
              "product": {
                "uid": "NTk2",
                "sku": "MS10",
                "name": "Logan  HeatTec&reg; Tee"
              },
              "quantity": 1
            }
          ]
        },
        "items_count": 2
      }
    }
  }
}
```
