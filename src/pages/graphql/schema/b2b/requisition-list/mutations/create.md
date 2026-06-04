---
title: createRequisitionList mutation
description: The createRequisitionList mutation creates a requisition list for the logged in customer.
contributor_name: Zilker Technology
keywords:
  - B2B
---

<Fragment src="../../../../../includes/commerce-only.md"/>

# createRequisitionList mutation

The `createRequisitionList` mutation creates a requisition list for the logged in customer.

<InlineAlert variant="info" slots="text" />

Use the [`storeConfig` query](../../../store/queries/store-config.md) with the `is_requisition_list_active` attribute to determine whether requisition lists are enabled.

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

The `createRequisitionList` reference provides detailed information about the types and fields defined in this mutation.

* [Adobe Commerce as a Cloud Service](/reference/graphql/saas/index.md#createrequisitionlist)

* [On-Premises/Cloud](/reference/graphql/index.md#createrequisitionlist)

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

<Edition slots="text" backgroundcolor="blue"/>

Thanks to Zilker Technology for contributing this topic!
