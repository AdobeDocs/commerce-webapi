---
title: updateRequisitionList mutation
description: The updateRequisitionList mutation updates the name and, optionally, the description of a requisition list.
keywords:
  - B2B
---

<Edition slots="text"/>

[Thanks to Zilker Technology for contributing this topic!](https://www.ztech.io/)

| |
|:--|
| \<span style="display:inline-block; vertical-align:middle;"\>\<img src="../pages/_images/adobe-logo.svg" alt="Adobe Commerce feature" style="height:20px; margin-right:8px; vertical-align:middle;" /\>\</span\>\<span style="display:inline-block; vertical-align:middle;"\>\<strong\>Exclusive feature only in Adobe Commerce\</strong\> (\<a href="https://experienceleague.adobe.com/docs/commerce-admin/user-guides/home.html#product-editions"\>Learn more\</a\>)\</span\> |

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

* [SaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-updateRequisitionList)

* [PaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-updateRequisitionList)

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
