---
title: createRequisitionList mutation
contributor_name: Zilker Technology
contributor_link: https://www.ztech.io/
keywords:
  - B2B
---

# createRequisitionList mutation

The `createRequisitionList` mutation creates a requisition list for the logged in customer.

<InlineAlert variant="info" slots="text" />

Use the [`storeConfig` query](../../../../schema/store/queries/store-config.md) with the `is_requisition_list_active` attribute to determine whether requisition lists are enabled.

This mutation requires a valid [customer authentication token](../../../customer/mutations/generate-token.md).

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

## Reference

The [`createRequisitionList`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-createRequisitionList) reference provides detailed information about the types and fields defined in this mutation.

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
