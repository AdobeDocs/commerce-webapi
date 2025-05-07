---
title: RequisitionListItemInterface attributes and implementations
keywords:
  - B2B
---

# RequisitionListItemInterface attributes and implementations

[`RequisitionListItemInterface`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-RequisitionListItemInterface) provides details about items in a requisition list. It has the following implementations:

*  [`BundleRequisitionListItem`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-BundleRequisitionListItem)
*  [`ConfigurableRequisitionListItem`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-ConfigurableRequisitionListItem)
*  [`DownloadableRequisitionListItem`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-DownloadableRequisitionListItem)
*  [`GiftCardRequisitionListItem`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-GiftCardRequisitionListItem)
*  [`SimpleRequisitionListItem`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-SimpleRequisitionListItem)
*  [`VirtualRequisitionListItem`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-VirtualRequisitionListItem)

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
