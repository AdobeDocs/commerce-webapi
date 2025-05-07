---
title: updateRequisitionList mutation
contributor_name: Zilker Technology
contributor_link: https://www.ztech.io/
---

# updateRequisitionList mutation

The `updateRequisitionList` mutation updates the name and, optionally, the description of a requisition list.

<InlineAlert variant="info" slots="text" />

Use the [storeConfig query](../../../../schema/store/queries/store-config.md) with the `is_requisition_list_active` attribute to determine whether requisition lists are enabled.

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

The [`updateRequisitionList`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-updateRequisitionList) reference provides detailed information about the types and fields defined in this mutation.

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
