---
title: addRequisitionListItemsToCart mutation
edition: b2b
contributor_name: EY
---

# addRequisitionListItemsToCart mutation

The `addRequisitionListItemsToCart` mutation adds requisition list items to the cart. The requisition list does not change after adding items to the cart.

This mutation requires a valid [customer authentication token](../../../customer/mutations/generate-token.md).

<InlineAlert variant="info" slots="text" />

Use the [storeConfig query](../../../../schema/store/queries/store-config.md) with the `is_requisition_list_active` attribute to determine whether requisition lists are enabled.

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

## Input attributes

The `addRequisitionListItemsToCart` mutation requires the following input.

Attribute |  Data Type | Description
--- | --- | ---
`requisitionListItemUids`| [ID!] | An array of UIDs presenting products to be added to the cart. If no UIDs are specified, all items in the requisition list will be added to the cart
`requisitionListUid`| ID! | The unique ID of the requisition list

## Output attributes

The `addRequisitionListItemsToCart` object returns the status, cart and errors object.

Attribute |  Data Type | Description
--- | --- | ---
`add_requisition_list_items_to_cart_user_errors` | [[AddRequisitionListItemToCartUserError!](#addrequisitionlistitemtocartusererror-attributes)] | Indicates why the attempt to add items to the requisition list was not successful
`cart` | [Cart](#cart-object) | The cart after adding requisition list items
`status` | Boolean! | Indicates whether the attempt to add items to the requisition list was successful

### AddRequisitionListItemToCartUserError attributes

The `AddRequisitionListItemToCartUserError` type contains the list of errors that describe why the attempt to add items to the requistion list was not successful.

Attribute |  Data Type | Description
--- | --- | ---
`message` | String! | A description of the error
`type` | [AddRequisitionListItemToCartUserErrorType!](#AddRequisitionListItemToCartUserErrorType) | The error type

### AddRequisitionListItemToCartUserErrorType

The AddRequisitionListItemToCartUserErrorType object can be one of the following values.

Type | Description
--- | ---
`LOW_QUANTITY` | The quantity of one of the items is low
`OPTIONS_UPDATED` | The options have been updated
`OUT_OF_STOCK` | One of the items is out of stock
`UNAVAILABLE_SKU` | One of the items is unavailable

### Cart object

The `Cart` object can contain the following attributes.

import CartObject from '/src/pages/_includes/graphql/cart-object-24.md'

<CartObject />
