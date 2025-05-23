---
title: copyItemsBetweenRequisitionLists mutation
contributor_name: EY
keywords:
  - B2B
---

import CommerceOnly from '/src/_includes/commerce-only.md'

<CommerceOnly />

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

## Reference

The [`copyItemsBetweenRequisitionLists`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-copyItemsBetweenRequisitionLists) reference provides detailed information about the types and fields defined in this mutation.

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

## Related topics

*  [moveItemsBetweenRequisitionLists mutation](move-items.md)
*  [deleteRequisitionListItems mutation](delete.md)
