---
title: addRequisitionListItemsToCart mutation
contributor_name: EY
---

# addRequisitionListItemsToCart mutation

The `addRequisitionListItemsToCart` mutation adds requisition list items to the cart. The requisition list does not change after adding items to the cart.

<InlineAlert variant="info" slots="text" />

Use the [storeConfig query](../../../../schema/store/queries/store-config.md) with the `is_requisition_list_active` attribute to determine whether requisition lists are enabled.

This mutation requires a valid [customer authentication token](../../../customer/mutations/generate-token.md).

## Syntax

```graphql
mutation {
  addRequisitionListItemsToCart (
    requisitionListUid: ID
    requisitionListItemUids: [ID!]
  ) {
    AddRequisitionListItemsToCartOutput
  }
}
```

## Reference

The [`addRequisitionListItemsToCart`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-addRequisitionListItemsToCart) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example adds items to the cart.

**Request:**

```graphql
mutation {
  addRequisitionListItemsToCart (
    requisitionListUid: "Mg=="
    requisitionListItemUids:
    ["Mw==", "Ng==", "Nw=="]
  )
  {
    status
    cart {
      items {
        uid
        product {
          uid
          sku
          name
        }
      }
    }
  }
}
```

**Response:**

``` json
{
  "data": {
    "addRequisitionListItemsToCart": {
      "status": true,
      "cart": {
        "items": [
          {
            "uid": "NQ==",
            "product": {
              "uid": "NTk2",
              "sku": "MS10",
              "name": "Logan  HeatTec&reg; Tee"
            }
          },
          {
            "uid": "Nw==",
            "product": {
              "uid": "MTI=",
              "sku": "24-WB03",
              "name": "Driven Backpack"
            }
          },
          {
            "uid": "OA==",
            "product": {
              "uid": "Mg==",
              "sku": "24-MB04",
              "name": "Strive Shoulder Pack"
            }
          }
        ]
      }
    }
  }
}
```
