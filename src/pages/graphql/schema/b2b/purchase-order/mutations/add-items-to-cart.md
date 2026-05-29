---
title: addPurchaseOrderItemsToCart mutation
description: The addPurchaseOrderItemsToCart mutation adds all purchase order items to the shopping cart. The request must specify a cartid and a purchaseorderuid. If t...
keywords:
  - B2B
---

| |
|:--|
| ![Adobe Commerce feature](../../../../../images/adobe-logo.svg) **Exclusive feature only in Adobe Commerce** ([Learn more](https://experienceleague.adobe.com/docs/commerce-admin/user-guides/home.html#product-editions)) |

# addPurchaseOrderItemsToCart mutation

The `addPurchaseOrderItemsToCart` mutation adds all purchase order items to the shopping cart. The request must specify a `cart_id` and a `purchase_order_uid`. If the value of `replace_existing_cart_items` is set to `true`, the mutation deletes the pre-existing items from the purchase order. Otherwise, the mutation merges the pre-existing items with the new items.

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

## Reference

The `addPurchaseOrderItemsToCart` reference provides detailed information about the types and fields defined in this mutation.

* [SaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-addPurchaseOrderItemsToCart)

* [PaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-addPurchaseOrderItemsToCart)

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
              "sku": "Simple-product"
            }
          }
        ]
      },
      "user_errors": []
    }
  }
}
```

