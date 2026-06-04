---
title: addProductsToRequisitionList mutation
description: The addProductsToRequisitionList mutation adds products to a requisition list.
contributor_name: EY
keywords:
  - B2B
---

<Fragment src="../../../../../includes/commerce-only.md"/>

# addProductsToRequisitionList mutation

The `addProductsToRequisitionList` mutation adds products to a requisition list.

<InlineAlert variant="info" slots="text" />

Use the [storeConfig query](../../../store/queries/store-config.md) with the `is_requisition_list_active` attribute to determine whether requisition lists are enabled.

This mutation requires a valid [customer authentication token](../../../customer/mutations/generate-token.md).

## Syntax

```graphql
mutation {
  addProductsToRequisitionList(
    requisitionListUid: ID!
    requisitionListItems: [RequisitionListItemsInput!]!
  ) {
    AddProductsToRequisitionListOutput
  }
}
```

## Reference

The `addProductsToRequisitionList` reference provides detailed information about the types and fields defined in this mutation.

* [Adobe Commerce as a Cloud Service](/reference/graphql/saas/index.md#addproductstorequisitionlist)

* [On-Premises/Cloud](/reference/graphql/index.md#addproductstorequisitionlist)

## Example usage

The following example adds products to a requisition list.

**Request:**

``` graphql
mutation {
  addProductsToRequisitionList(
      requisitionListUid: "Mg=="
      requisitionListItems: [
        {
            sku: "MS10"
            quantity: 1
            selected_options: ["Y29uZmlndXJhYmxlLzkzLzUw","Y29uZmlndXJhYmxlLzE2MC8xNjg"]
        }
      ]
    ) {
    requisition_list {
      uid
      items {
        items {
          ... on RequisitionListItemInterface {
            uid
            product {
              uid
              sku
              name
            }
            quantity
          }
        }
      }
      items_count
    }
  }
}
```

**Response:**

``` json
{
  "data": {
    "addProductsToRequisitionList": {
      "requisition_list": {
        "uid": "Mg==",
        "items": {
          "items": [
            {
              "uid": "Mw==",
              "product": {
                "uid": "NTk2",
                "sku": "MS10",
                "name": "Logan  HeatTec&reg; Tee"
              },
              "quantity": 1
            }
          ]
        },
        "items_count": `
      }
    }
  }
}
```

<Edition slots="text" backgroundcolor="blue"/>

Thanks to EY for contributing this topic!
