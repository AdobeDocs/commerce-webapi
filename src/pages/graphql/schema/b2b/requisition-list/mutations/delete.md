---
title: deleteRequisitionList mutation
edition: b2b
contributor_name: Zilker Technology
contributor_link: https://www.ztech.io/
---

# deleteRequisitionList mutation

The `deleteRequisitionList` mutation deletes a requisition list of the logged in customer. The response can include any remaining requisition lists.

This mutation requires a valid [customer authentication token](../../../customer/mutations/generate-token.md).

<InlineAlert variant="info" slots="text" />

Use the [storeConfig query](../../../../schema/store/queries/store-config.md) with the `is_requisition_list_active` attribute to determine whether requisition lists are enabled.

## Syntax

```graphql
mutation {
  deleteRequisitionList(
    requisitionListUid: ID!
  ) {
    deleteRequisitionListOutput
  }
}
```

## Example usage

The following example deletes a requisition list.

**Request:**

```graphql
mutation {
  deleteRequisitionList(
    requisitionListUid: "Mw=="
  ) {
    status
    requisition_lists {
      total_count
      items {
        uid
        name
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "deleteRequisitionList": {
      "status": true,
      "requisition_lists": {
        "total_count": 1
        "items": [
          {
            "uid": "Mg==",
            "name": "Frequently Ordered Products"
          }
        ]
      }
    }
  }
}
```

## Input attributes

The `deleteRequisitionList` mutation requires the following input.

Attribute |  Data Type | Description
--- | --- | ---
`requisitionListUid` | ID! | The ID of the requisition list to delete

## Output attributes

The `deleteRequisitionList` mutation returns the status of the operation and any undeleted requisition lists.

Attribute |  Data Type | Description
--- | --- | ---
`requisition_lists` | [[RequisitionLists](#requisitionlists-attributes)] | Contains the customer's remaining requisition lists
`status` | Boolean | Indicates whether the request to delete the requisition list was successful

### RequisitionLists attributes

The RequisitionLists object contains array of requisition list items and pagination information.

Attribute |  Data Type | Description
--- | --- | ---
`items` | [[RequisitionList](#requisitionlists-attributes)] | An array of requisition lists
`page_info` | SearchResultPageInfo | Contains pagination metadata
`total_count` | Int | The number of returned requisition lists

### RequisitionList attributes

import RequisitionList from '/src/pages/_includes/graphql/requisition-list.md'

<RequisitionList />

## Related topics

*  [createRequisitionList mutation](create.md)
*  [updateRequisitionList mutation](update.md)
