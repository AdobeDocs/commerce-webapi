---
title: addRequisitionListItemsToCart mutation
description: The addRequisitionListItemsToCart mutation adds requisition list items to the cart. The requisition list does not change after adding items to the cart.
keywords:
  - B2B
---

<Fragment src="../../../../../includes/commerce-only.md"/>

# addRequisitionListItemsToCart mutation

The `addRequisitionListItemsToCart` mutation adds requisition list items to the cart. The requisition list does not change after adding items to the cart.

<InlineAlert variant="info" slots="text" />

Use the [storeConfig query](../../../store/queries/store-config.md) with the `is_requisition_list_active` attribute to determine whether requisition lists are enabled.

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

The `addRequisitionListItemsToCart` reference provides detailed information about the types and fields defined in this mutation.

* [Adobe Commerce as a Cloud Service](/reference/graphql/saas/index.md#addrequisitionlistitemstocart)

* [On-Premises/Cloud](/reference/graphql/latest/index.md#addrequisitionlistitemstocart)

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

<Edition slots="text" backgroundcolor="gray"/>

Thanks to EY for contributing this topic!
