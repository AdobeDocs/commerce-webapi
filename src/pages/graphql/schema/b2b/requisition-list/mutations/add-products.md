---
title: addProductsToRequisitionList mutation
contributor_name: EY
keywords:
  - B2B
---

# addProductsToRequisitionList mutation

The `addProductsToRequisitionList` mutation adds products to a requisition list.

<InlineAlert variant="info" slots="text" />

Use the [storeConfig query](../../../../schema/store/queries/store-config.md) with the `is_requisition_list_active` attribute to determine whether requisition lists are enabled.

This mutation requires a valid [customer authentication token](../../../customer/mutations/generate-token.md).

## Syntax

```graphql
mutation {
  addProductsToRequisitionList(
    requisitionListUid: ID!
    requisitionListItems: [RequisitionListItemsInput!]!
  ) {
    AddProductsToRequisitionListOutput
  }
}
```

## Reference

The [`addProductsToRequisitionList`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-addProductsToRequisitionList) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example adds products to a requisition list.

**Request:**

``` graphql
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

``` json
{
  "data": {
    "addProductsToRequisitionList": {
      "requisition_list": {
        "uid": "Mg==",
        "items": {
          "items": [
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
        "items_count": `
      }
    }
  }
}
```
