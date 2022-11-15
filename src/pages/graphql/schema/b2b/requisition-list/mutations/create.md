---
title: createRequisitionList mutation
edition: b2b
contributor_name: Zilker Technology
contributor_link: https://www.ztech.io/
---

# createRequisitionList mutation

The `createRequisitionList` mutation creates a requisition list for the logged in customer.

This mutation requires a valid [customer authentication token](../../../customer/mutations/generate-token.md).

<InlineAlert variant="info" slots="text" />

Use the [`storeConfig` query](../../../../schema/store/queries/store-config.md) with the `is_requisition_list_active` attribute to determine whether requisition lists are enabled.

## Syntax

```graphql
mutation {
  createRequisitionList(
    name: String!
    description: String
  ) {
    CreateRequisitionListOutput
  }
}
```

## Example usage

The following example creates the `Frequently Ordered Products` requisition list.

**Request:**

```graphql
mutation {
  createRequisitionList(input:{
    name: "Frequently Ordered Products"
    description: "Frequently ordered products list"
  }
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
    "createRequisitionList": {
      "requisition_list": {
          "uid": "Mw=="
          "name": "Frequently Ordered Products"
          "description": "Frequently ordered products list"
        }
    }
  }
}
```

## Input attributes

The `createRequisitionList` mutation requires the following input.

Attribute |  Data Type | Description
--- | --- | ---
`description`| String | Description of the customer's requisition list
`name` | String! | The name of the customer's requisition list

## Output attributes

The `createRequisitionList` mutation returns the new requisition list.

Attribute |  Data Type | Description
--- | --- | ---
`requisition_list` | [[RequisitionList](#RequisitionList)] | The created requisition list

### RequisitionList attributes {#RequisitionList}

import RequisitionList from '/src/pages/_includes/graphql/requisition-list.md'

<RequisitionList />

## Related topics

*  [updateRequisitionList mutation](update.md)
*  [deleteRequisitionList mutation](delete.md)
