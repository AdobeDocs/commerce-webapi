---
title: deleteRequisitionListItems mutation
description: The deleteRequisitionListItems mutation removes items from the specified requisition list for the logged in customer.
keywords:
  - B2B
---

<Fragment src="../../../../../includes/commerce-only.md"/>

# deleteRequisitionListItems mutation

The `deleteRequisitionListItems` mutation removes items from the specified requisition list for the logged in customer.

<InlineAlert variant="info" slots="text" />

Use the [storeConfig query](../../../store/queries/store-config.md) with the `is_requisition_list_active` attribute to determine whether requisition lists are enabled.

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

The `deleteRequisitionListItems` reference provides detailed information about the types and fields defined in this mutation.

* [Adobe Commerce as a Cloud Service](/reference/graphql/saas/index.md#deleterequisitionlistitems)

* [On-Premises/Cloud](/reference/graphql/latest/index.md#deleterequisitionlistitems)

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

<Edition slots="text" backgroundcolor="gray"/>

Thanks to EY for contributing this topic!
