---
title: addPurchaseOrderItemsToCart mutation | Commerce Web APIs
edition: b2b
---

# addPurchaseOrderItemsToCart mutation

The `addPurchaseOrderItemsToCart` mutation adds all purchase order items to the shopping cart. The request must specify a `cart_id` and a `purchase_order_uid`. If the value of `replace_existing_cart_items` is set `true`, the mutation deletes the pre-existing items from the purchase order. Otherwise, the mutation merges the pre-existing items with the new items.

## Syntax

```graphql
mutation {
  addPurchaseOrderItemsToCart(
    input: AddPurchaseOrderItemsToCartInput!
  ){
    AddProductsToCartOutput
  }
}
```

## Example usage

The following example adds all purchase order items to the shopping cart.

**Request:**

``` graphql
mutation {
  addPurchaseOrderItemsToCart(
    input: {
      purchase_order_uid: "MQ==",
      cart_id: "hJUrIcPm77uCyYkSTBRGyjSvS40mw1Qd",
      replace_existing_cart_items: false
    }
  ) {
    cart {
      id
      items {
        product {
          sku
        }
      }
    }
    user_errors {
      message
      code
    }
  }
}
```

**Response:**

``` json
{
  "data": {
    "addPurchaseOrderItemsToCart": {
      "cart": {
        "id": "hJUrIcPm77uCyYkSTBRGyjSvS40mw1Qd",
        "items": [
          {
            "product": {
              "sku": "Simple product"
            }
          }
        ]
      },
      "user_errors": []
    }
  }
}
```
