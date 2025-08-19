---
title: deleteRequisitionListItems mutation
contributor_name: EY
keywords:
  - B2B
---

import CommerceOnly from '/src/_includes/commerce-only.md'

<CommerceOnly />

# deleteRequisitionListItems mutation

The `deleteRequisitionListItems` mutation removes items from the specified requisition list for the logged in customer.

<InlineAlert variant="info" slots="text" />

Use the [storeConfig query](../../../../schema/store/queries/store-config.md) with the `is_requisition_list_active` attribute to determine whether requisition lists are enabled.

This mutation requires a valid [customer authentication token](../../../customer/mutations/generate-token.md).

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

## Reference

The [`deleteRequisitionListItems`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-deleteRequisitionListItems) reference provides detailed information about the types and fields defined in this mutation.

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

## Related topics

*  [updateRequisitionList mutation](update.md)
*  [deleteRequisitionList mutation](delete.md)
