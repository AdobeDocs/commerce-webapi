---
title: deleteRequisitionListItems mutation
edition: b2b
contributor_name: EY
---

# deleteRequisitionListItems mutation

The `deleteRequisitionListItems` mutation removes items from the specified requisiton list for the logged in customer.

This mutation requires a valid [customer authentication token](../../../customer/mutations/generate-token.md).

<InlineAlert variant="info" slots="text" />

Use the [storeConfig query](../../../../schema/store/queries/store-config.md) with the `is_requisition_list_active` attribute to determine whether requisition lists are enabled.

## Syntax

```graphql
mutation {
  deleteRequisitionListItems(
    requisitionListUid: ID!
    requisitionListItemUids: [ID!]!
  ) {
    DeleteRequisitionListItemsOutput
  }
}
```

## Example usage

The following example removes the specified items from the requisition list.

**Request:**

``` graphql
mutation {
  deleteRequisitionListItems(
    requisitionListUid: "Mg==",
    requisitionListItemUids: ["NA==","NQ=="]
  ) {
    requisition_list {
      uid
      items_count
    }
  }
}
```

**Response:**

``` json
{
  "data": {
    "deleteRequisitionListItems": {
      "requisition_list": {
        "uid": "Mg==",
        "items_count": 1
      }
    }
  }
}
```

## Input attributes

The `deleteRequisitionListItems` mutation requires the following input.

Attribute |  Data Type | Description
--- | --- | ---
`requisitionListItemUids`| [ID!]! | An array of UIDs representing products to be removed from the requisition list
`requisitionListUid`| ID! | The unique ID of the requisition list

## Output attributes

The `deleteRequisitionListItems` object returns the requisition list after the deletion of items.

Attribute |  Data Type | Description
--- | --- | ---
`requisition_list` | [RequisitionList](#requisitionlist-attributes) | The requisition list after removing items

### RequisitionList attributes

import RequisitionList from '/src/pages/_includes/graphql/requisition-list.md'

<RequisitionList />

## Related topics

*  [updateRequisitionList mutation](update.md)
*  [deleteRequisitionList mutation](delete.md)
