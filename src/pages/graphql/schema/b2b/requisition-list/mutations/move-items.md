---
title: moveItemsBetweenRequisitionLists mutation
edition: b2b
contributor_name: EY
---

# moveItemsBetweenRequisitionLists mutation

The `moveItemsBetweenRequisitionLists` mutation moves items from one requisition list to another.

This mutation requires a valid [customer authentication token](../../../customer/mutations/generate-token.md).

<InlineAlert variant="info" slots="text" />

Use the [storeConfig query](../../../../schema/store/queries/store-config.md) with the `is_requisition_list_active` attribute to determine whether requisition lists are enabled.

## Syntax

```graphql
mutation {
  moveItemsBetweenRequisitionLists(
    sourceRequisitionListUid: ID!
    destinationRequisitionListUid: ID
    requisitionListItem: MoveItemsBetweenRequisitionListsInput
  ) {
    MoveItemsBetweenRequisitionListsOutput
  }
}
```

## Example usage

The following example moves an item from one requisition list to another.

**Request:**

```graphql
mutation {
  moveItemsBetweenRequisitionLists(
      sourceRequisitionListUid: "Mg=="
      destinationRequisitionListUid: "Mw=="
      requisitionListItem: {
        requisitionListItemUids:
          ["MTI="]
        }
        ) {
      source_requisition_list {
        uid
        name
        items_count
      }
      destination_requisition_list {
        uid
        name
        items_count
      }
  }
}
```

**Response:**

``` json
{
  "data": {
    "moveItemsBetweenRequisitionLists": {
      "source_requisition_list": {
        "uid": "Mg==",
        "name": "Frequently Ordered Products",
        "items_count": 3
      },
      "destination_requisition_list": {
        "uid": "Mw==",
        "name": "Rarely ordered items",
        "items_count": 2
      }
    }
  }
}
```

## Input attributes

The `moveItemsBetweenRequisitionLists` mutation requires the following input.

Attribute |  Data Type | Description
--- | --- | ---
`destinationRequisitionListUid`| ID! | The unique ID of the destination requisition list. If null, a new requisition list will be created
`requisitionListItem`| [[MoveItemsBetweenRequisitionListsInput](#MoveItemsBetweenRequisitionListsInput)]  | An array of selected requisition list items that are to be moved from the source to the destination list
`sourceRequisitionListUid`| ID! | The unique ID of the source requisition list

### MoveItemsBetweenRequisitionListsInput attributes {#MoveItemsBetweenRequisitionListsInput}

The `MoveItemsBetweenRequisitionListsInput` type contains the list of products to move from one requisition list to other.

Attribute |  Data Type | Description
--- | --- | ---
`requisitionListItemUids` | [ID!]! | An array of IDs representing products moved from one requisition list to another

## Output attributes

The `moveItemsBetweenRequisitionLists` object returns the source requisition list and the destination requisition list object.

Attribute |  Data Type | Description
--- | --- | ---
`destination_requisition_list` | [[RequisitionList](#RequisitionList)] | The destination requisition list after moving items
`source_requisition_list` | [[RequisitionList](#RequisitionList)] | The source requisition list after moving items

### RequisitionList attributes {#RequisitionList}

import RequisitionList from '/src/pages/_includes/graphql/requisition-list.md'

<RequisitionList />

## Related topics

*  [copyItemsBetweenRequisitionLists mutation](copy-items.md)
*  [deleteRequisitionListItems mutation](delete-items.md)
