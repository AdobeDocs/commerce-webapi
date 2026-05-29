---
title: copyItemsBetweenRequisitionLists mutation
description: The copyItemsBetweenRequisitionLists mutation copies items from one requisition list to another.
contributor_name: EY
keywords:
  - B2B
---

| |
|:--|
| ![Adobe Commerce feature](../../../../../images/adobe-logo.svg) **Exclusive feature only in Adobe Commerce** ([Learn more](https://experienceleague.adobe.com/docs/commerce-admin/user-guides/home.html#product-editions)) |

# copyItemsBetweenRequisitionLists mutation

The `copyItemsBetweenRequisitionLists` mutation copies items from one requisition list to another.

This mutation requires a valid [customer authentication token](../../../customer/mutations/generate-token.md).

<InlineAlert variant="info" slots="text" />

Use the [storeConfig query](../../../store/queries/store-config.md) with the `is_requisition_list_active` attribute to determine whether requisition lists are enabled.

## Syntax

```graphql
mutation {
  copyItemsBetweenRequisitionLists(
    sourceRequisitionListUid: ID!,
    destinationRequisitionListUid: ID,
    requisitionListItem: CopyItemsBetweenRequisitionListsInput
  ) {
    CopyItemsFromRequisitionListsOutput
  }
}
```

## Reference

The `copyItemsBetweenRequisitionLists` reference provides detailed information about the types and fields defined in this mutation.

* [SaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-copyItemsBetweenRequisitionLists)

* [PaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-copyItemsBetweenRequisitionLists)

## Example usage

The following example copies an item from one requisition list to another.

**Request:**

``` graphql
mutation {
  copyItemsBetweenRequisitionLists(
      sourceRequisitionListUid: "Mg==",
      destinationRequisitionListUid: "Mw==",
      requisitionListItem: {
        requisitionListItemUids: [
          "Nw=="
        ]
      }
    ) {
    requisition_list {
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
    "copyItemsBetweenRequisitionLists": {
      "requisition_list": {
        "uid": "Mw==",
        "name": "Rarely ordered items",
        "items_count": 3
      }
    }
  }
}
```

## Related topics

*  [moveItemsBetweenRequisitionLists mutation](move-items.md)
*  [deleteRequisitionListItems mutation](delete.md)

<Edition slots="text" backgroundcolor="blue"/>

Thanks to EY for contributing this topic!
