---
title: updateRequisitionListItems mutation
edition: b2b
contributor_name: EY
---

# updateRequisitionListItems mutation

The `updateRequisitionListItems` mutation updates products in a requisition list.

This mutation requires a valid [customer authentication token](../../../customer/mutations/generate-token.md).

<InlineAlert variant="info" slots="text" />

Use the [storeConfig query](../../../../schema/store/queries/store-config.md) with the `is_requisition_list_active` attribute to determine whether requisition lists are enabled.

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

## Input attributes

The `updateRequisitionListItems` mutation requires the following input.

Attribute |  Data Type | Description
--- | --- | ---
`requisitionListItems`| [[UpdateRequisitionListItemsInput](#updaterequisitionlistitemsinput-attributes)!]! | An array of products to be updated in the requisition list
`requisitionListUid`| ID! | The unique ID of the requisition list

### UpdateRequisitionListItemsInput attributes

The `UpdateRequisitionListItemsInput` type contains the list of products to be updated in the requisition list.

Attribute |  Data Type | Description
--- | --- | ---
`entered_options` | [EnteredOptionInput!] | An array of customer entered option IDs
`item_id` | ID! | The ID of the requisition list item to update
`quantity` | Float | The new quantity of the item
`selected_options` | [String!] | An array of selected option IDs

## Output attributes

The `updateRequisitionListItems` object returns the requisition list object.

Attribute |  Data Type | Description
--- | --- | ---
`requisition_list` | [[RequisitionList](#requisitionlist-attributes)] | The requisition list after the items were updated

### RequisitionList attributes

import RequisitionList from '/src/pages/_includes/graphql/requisition-list.md'

<RequisitionList />
