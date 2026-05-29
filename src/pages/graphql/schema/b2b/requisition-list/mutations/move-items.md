---
title: moveItemsBetweenRequisitionLists mutation
description: The moveItemsBetweenRequisitionLists mutation moves items from one requisition list to another.
contributor_name: EY
keywords:
  - B2B
---

| |
|:--|
| ![Adobe Commerce feature](../../../../../images/adobe-logo.svg) **Exclusive feature only in Adobe Commerce** ([Learn more](https://experienceleague.adobe.com/docs/commerce-admin/user-guides/home.html#product-editions)) |

# moveItemsBetweenRequisitionLists mutation

The `moveItemsBetweenRequisitionLists` mutation moves items from one requisition list to another.

<InlineAlert variant="info" slots="text" />

Use the [storeConfig query](../../../store/queries/store-config.md) with the `is_requisition_list_active` attribute to determine whether requisition lists are enabled.

This mutation requires a valid [customer authentication token](../../../customer/mutations/generate-token.md).

## Syntax

```graphql
mutation {
  moveItemsBetweenRequisitionLists(
    sourceRequisitionListUid: ID!
    destinationRequisitionListUid: ID
    requisitionListItem: MoveItemsBetweenRequisitionListsInput
  ) {
    MoveItemsBetweenRequisitionListsOutput
  }
}
```

## Reference

The `moveItemsBetweenRequisitionLists` reference provides detailed information about the types and fields defined in this mutation.

* [SaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-moveItemsBetweenRequisitionLists)

* [PaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-moveItemsBetweenRequisitionLists)

## Example usage

The following example moves an item from one requisition list to another.

**Request:**

```graphql
mutation {
  moveItemsBetweenRequisitionLists(
      sourceRequisitionListUid: "Mg=="
      destinationRequisitionListUid: "Mw=="
      requisitionListItem: {
        requisitionListItemUids:
          ["MTI="]
        }
        ) {
      source_requisition_list {
        uid
        name
        items_count
      }
      destination_requisition_list {
        uid
        name
        items_count
      }
  }
}
```

**Response:**

``` json
{
  "data": {
    "moveItemsBetweenRequisitionLists": {
      "source_requisition_list": {
        "uid": "Mg==",
        "name": "Frequently Ordered Products",
        "items_count": 3
      },
      "destination_requisition_list": {
        "uid": "Mw==",
        "name": "Rarely ordered items",
        "items_count": 2
      }
    }
  }
}
```

## Related topics

*  [copyItemsBetweenRequisitionLists mutation](copy-items.md)
*  [deleteRequisitionListItems mutation](delete-items.md)

<Edition slots="text" backgroundcolor="blue"/>

Thanks to EY for contributing this topic!
