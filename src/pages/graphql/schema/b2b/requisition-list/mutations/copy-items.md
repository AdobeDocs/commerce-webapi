---
title: copyItemsBetweenRequisitionLists mutation
description: The copyItemsBetweenRequisitionLists mutation copies items from one requisition list to another.
keywords:
  - B2B
---

<Fragment src="../../../../../includes/commerce-only.md"/>

# copyItemsBetweenRequisitionLists mutation

The `copyItemsBetweenRequisitionLists` mutation copies items from one requisition list to another.

This mutation requires a valid [customer authentication token](../../../customer/mutations/generate-token.md).

<InlineAlert variant="info" slots="text" />

Use the [storeConfig query](../../../store/queries/store-config.md) with the `is_requisition_list_active` attribute to determine whether requisition lists are enabled.

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

The `copyItemsBetweenRequisitionLists` reference provides detailed information about the types and fields defined in this mutation.

* [Adobe Commerce as a Cloud Service](/reference/graphql/saas/index.md#copyitemsbetweenrequisitionlists)

* [On-Premises/Cloud](/reference/graphql/latest/index.md#copyitemsbetweenrequisitionlists)

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

<Edition slots="text" backgroundcolor="gray"/>

Thanks to EY for contributing this topic!
