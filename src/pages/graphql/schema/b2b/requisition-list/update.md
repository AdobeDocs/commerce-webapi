---
title: updateRequisitionList mutation
edition: b2b
contributor_name: Zilker Technology
contributor_link: https://www.ztech.io/
---
The `updateRequisitionList` mutation updates the name and, optionally, the description of a requisition list.

This mutation requires a valid [customer authentication token]({{page.baseurl}}/graphql/mutations/generate-customer-token.html).

<InlineAlert variant="info" slots="text" />

Use the [storeConfig query]({{page.baseurl}}/graphql/queries/store-config.html) with the `is_requisition_list_active` attribute to determine whether requisition lists are enabled.

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

## Input attributes

The `updateRequisitionList` mutation requires the following input.

Attribute |  Data Type | Description
--- | --- | ---
`description`| String | Description of the customer's requisition list
`name` | String! | The name of the customer's requisition list
`requisitionListUid` | ID! | The ID of the new requisition list

## Output attributes

The `updateRequisitionList` mutation returns the new requisition list after updating a list.

Attribute |  Data Type | Description
--- | --- | ---
`requisition_list` | [[RequisitionList](#RequisitionList)] | The updated requisition list

### RequisitionList attributes {#RequisitionList}

import RequisitionList from '/src/pages/_includes/graphql/requisition-list.md'

<RequisitionList />

## Related topics

*  [createRequisitionList mutation]({{page.baseurl}}/graphql/mutations/create-requisition-list.html)
*  [deleteRequisitionList mutation]({{page.baseurl}}/graphql/mutations/delete-requisition-list.html)