---
title: addProductsToRequisitionList mutation
edition: b2b
contributor_name: EY
---

# addProductsToRequisitionList mutation

The `addProductsToRequisitionList` mutation adds products to a requisition list.

This mutation requires a valid [customer authentication token](../../../customer/mutations/generate-token.md).

<InlineAlert variant="info" slots="text" />

Use the [storeConfig query](../../../../schema/store/queries/store-config.md) with the `is_requisition_list_active` attribute to determine whether requisition lists are enabled.

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

## Input attributes

The `addProductsToRequisitionList` mutation requires the following input.

Attribute |  Data Type | Description
--- | --- | ---
`requisitionListItems`| [[RequisitionListItemsInput](#requisitionlistitemsinput-attributes)!]! | An array of products to be added to the requisition list
`requisitionListUid`| ID! | The unique ID of the requisition list

### RequisitionListItemsInput attributes

The `RequisitionListItemsInput` type contains the list of products to add to a requisition list.

Attribute |  Data Type | Description
--- | --- | ---
`entered_options` | [EnteredOptionInput!] | An array of customer entered option IDs
`parent_sku` | String | For configurable products, the SKU of the parent product
`quantity` | Float | The quantity of the product to add
`selected_options` | [String!] | An array of selected option IDs
`sku` | String! | The product SKU

## Output attributes

The `addProductsToRequisitionList` object returns the requisition list object.

Attribute |  Data Type | Description
--- | --- | ---
`requisition_list` | [[RequisitionList](#requisitionlist-attributes)] | The requisition list after the items were added

### RequisitionList attributes

import RequisitionList from '/src/_includes/graphql/requisition-list.md'

<RequisitionList />
