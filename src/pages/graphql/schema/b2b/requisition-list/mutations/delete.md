---
title: deleteRequisitionList mutation
description: The deleteRequisitionList mutation deletes a requisition list of the logged in customer. The response can include any remaining requisition lists.
contributor_name: Zilker Technology
contributor_link: https://www.ztech.io/
keywords:
  - B2B
---

<Fragment src="../../../../../includes/commerce-only.md"/>

# deleteRequisitionList mutation

The `deleteRequisitionList` mutation deletes a requisition list of the logged in customer. The response can include any remaining requisition lists.

<InlineAlert variant="info" slots="text" />

Use the [storeConfig query](../../../store/queries/store-config.md) with the `is_requisition_list_active` attribute to determine whether requisition lists are enabled.

This mutation requires a valid [customer authentication token](../../../customer/mutations/generate-token.md).

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

## Reference

The `deleteRequisitionList` reference provides detailed information about the types and fields defined in this mutation.

* [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-deleteRequisitionList)

* [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-deleteRequisitionList)

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

## Related topics

*  [createRequisitionList mutation](create.md)
*  [updateRequisitionList mutation](update.md)

<Edition slots="text" backgroundcolor="blue"/>

[Thanks to Zilker Technology for contributing this topic!](https://www.ztech.io/)
