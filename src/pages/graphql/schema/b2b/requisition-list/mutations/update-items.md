---
title: updateRequisitionListItems mutation
contributor_name: EY
keywords:
  - B2B
---

# updateRequisitionListItems mutation

The `updateRequisitionListItems` mutation updates products in a requisition list.

<InlineAlert variant="info" slots="text" />

Use the [storeConfig query](../../../../schema/store/queries/store-config.md) with the `is_requisition_list_active` attribute to determine whether requisition lists are enabled.

This mutation requires a valid [customer authentication token](../../../customer/mutations/generate-token.md).

## Syntax

```graphql
mutation {
  updateRequisitionListItems(
    requisitionListUid: ID!
    requisitionListItems: [UpdateRequisitionListItemsInput!]!
  ) {
    UpdateRequisitionListItemsOutput
  }
}
```

## Reference

The [`updateRequisitionListItems`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-updateRequisitionListItems) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example updates the quantity of an item in a requisition list.

**Request:**

```graphql
mutation {
  updateRequisitionListItems(
    requisitionListUid: "Mg==",
    requisitionListItems: [
      {
          item_id: "Mw=="
          quantity: 2
      }
    ]
    ){
    requisition_list {
      uid
      name
      items_count
      items {
        items {
          uid
          quantity
          product {
            uid
            name
            sku
          }
        }
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "updateRequisitionListItems": {
      "requisition_list": {
        "uid": "Mg==",
        "name": "Frequently Ordered Products",
        "items_count": 1,
        "items": {
          "items": [
            {
              "uid": "Mw==",
              "quantity": 2,
              "product": {
                "uid": "NTk2",
                "name": "Logan  HeatTec&reg; Tee",
                "sku": "MS10"
              }
            }
          ]
        }
      }
    }
  }
}
```
