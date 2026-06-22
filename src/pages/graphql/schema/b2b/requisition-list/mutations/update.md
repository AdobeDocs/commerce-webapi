---
title: updateRequisitionList mutation
description: The updateRequisitionList mutation updates the name and, optionally, the description of a requisition list.
keywords:
  - B2B
---

<Fragment src="../../../../../includes/commerce-only.md"/>

# updateRequisitionList mutation

The `updateRequisitionList` mutation updates the name and, optionally, the description of a requisition list.

<InlineAlert variant="info" slots="text" />

Use the [storeConfig query](../../../store/queries/store-config.md) with the `is_requisition_list_active` attribute to determine whether requisition lists are enabled.

This mutation requires a valid [customer authentication token](../../../customer/mutations/generate-token.md).

## Syntax

```graphql
mutation {
  updateRequisitionList(
    requisitionListUid: ID!
    name: String!
    description: String
  ) {
    updateRequisitionListOutput
  }
}
```

## Reference

The `updateRequisitionList` reference provides detailed information about the types and fields defined in this mutation.

* [Adobe Commerce as a Cloud Service](/reference/graphql/saas/index.md#updaterequisitionlist)

* [On-Premises/Cloud](/reference/graphql/latest/index.md#updaterequisitionlist)

## Example usage

The following example renames the `Frequently Ordered Products` requisition list and updates its description.

**Request:**

```graphql
mutation {
  updateRequisitionList(input:{
    name: "Frequently Ordered Essential Products"
    description: "Frequently ordered essential products list"
  }
    requisitionListUid: "Mw=="
  ) {
    requisition_list {
      uid
      name
      description
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "updateRequisitionList": {
      "requisition_list": {
          "uid": "Mw=="
          "name": "Frequently Ordered Essential Products"
          "description": "Frequently ordered essential products list"
        }
    }
  }
}
```

## Related topics

*  [createRequisitionList mutation](create.md)
*  [deleteRequisitionList mutation](delete.md)

<Edition slots="text" backgroundcolor="gray"/>

Thanks to Zilker Technology for contributing this topic!
