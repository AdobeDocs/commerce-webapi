---
title: copyItemsBetweenRequisitionLists mutation
edition: b2b
contributor_name: EY
---

# copyItemsBetweenRequisitionLists mutation

The `copyItemsBetweenRequisitionLists` mutation copies items from one requisition list to another.

This mutation requires a valid [customer authentication token](../../../customer/mutations/generate-token.md).

<InlineAlert variant="info" slots="text" />

Use the [storeConfig query](../../../../schema/store/queries/store-config.md) with the `is_requisition_list_active` attribute to determine whether requisition lists are enabled.

## Syntax

```graphql
mutation {
  copyItemsBetweenRequisitionLists(
    sourceRequisitionListUid: ID!,
    destinationRequisitionListUid: ID,
    requisitionListItem: CopyItemsBetweenRequisitionListsInput
  ) {
    CopyItemsFromRequisitionListsOutput
  }
}
```

## Example usage

The following example copies an item from one requisition list to another.

**Request:**

``` graphql
mutation {
  copyItemsBetweenRequisitionLists(
      sourceRequisitionListUid: "Mg==",
      destinationRequisitionListUid: "Mw==",
      requisitionListItem: {
        requisitionListItemUids: [
          "Nw=="
        ]
      }
    ) {
    requisition_list {
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
    "copyItemsBetweenRequisitionLists": {
      "requisition_list": {
        "uid": "Mw==",
        "name": "Rarely ordered items",
        "items_count": 3
      }
    }
  }
}
```

## Input attributes

The `copyItemsBetweenRequisitionLists` mutation requires the following input.

Attribute |  Data Type | Description
--- | --- | ---
`destinationRequisitionListUid`| ID | The unique ID of the destination requisition list. If null, a new requisition list will be created
`requisitionListItem`| [[CopyItemsBetweenRequisitionListsInput](#copyitemsbetweenrequisitionlistsinput-attributes)] | An array of selected requisition list items that are to be copied
`sourceRequisitionListUid`| ID! | The unique ID of the source requisition list

### CopyItemsBetweenRequisitionListsInput attributes

The `CopyItemsBetweenRequisitionListsInput` type contains the list of products to copy from one requisition list to other.

Attribute |  Data Type | Description
--- | --- | ---
`requisitionListItemUids` | [ID!]! | An array of IDs representing products copied from one requisition list to another

## Output attributes

The `copyItemsBetweenRequisitionLists` mutation returns the requisition list object to which the products were copied to.

Attribute |  Data Type | Description
--- | --- | ---
`requisition_list` | [[RequisitionList](#requisitionlist-attributes)] | The destination requisition list after the items were copied

### RequisitionList attributes

import RequisitionList from '/src/pages/_includes/graphql/requisition-list.md'

<RequisitionList />

## Related topics

*  [moveItemsBetweenRequisitionLists mutation](move-items.md)
*  [deleteRequisitionListItems mutation](delete.md)
