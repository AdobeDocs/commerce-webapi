---
title: reorderItems mutation
---

# reorderItems mutation

The `reorderItems` mutation allows a logged-in user to add all the products from a previous order into their cart. The **Stores** > Settings > **Sales** > **Sales** > **Reorder** > **Allow Reorder** field must be set to **Yes** to enable reorders. You must provide a customer authorization token with the call. The customer associated with the authorization token must match the customer who placed the specified order.

The mutation returns an error if it cannot add a product to the customer's cart:

Error code | Description
--- | ---
INSUFFICIENT_STOCK | The requested quantity is greater than the available stock.
NOT_SALABLE | The product is out of stock, disabled, or otherwise prevented from being sold.
REORDER_NOT_AVAILABLE | Reorders have been disabled.
PRODUCT_NOT_FOUND | The product has been deleted.
UNDEFINED | An unknown error occurred.

The `reorderItems` mutation will not add any products to the cart if it encounters the REORDER_NOT_AVAILABLE error. For any other error code, the mutation will add the product to the cart, if possible, and it will continue adding other products, if applicable.

## Syntax

`mutation: {reorderItems(orderNumber: String!) {ReorderItemsOutput}}`

## Reference

The [`reorderItems`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-reorderItems) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

In the following example, the customer previously created an order containing the following items:

Item Name | SKU | Quantity Ordered
--- | --- | ---
Aeon Capri | WP07-29-Black | 3
Dual Handle Cardio Ball | 24-UG07 | 1
Elisa EverCool Tee | WS06-S-Gray | 1
Sprite Foam Yoga Brick | 24-WG084 | 1

The customer wants to reorder these items, but the status of some of these items has changed:

-  Aeon Capri (WP07-29-Black) is in stock, but fewer than three items are available for sale.
-  The Sprite Foam Yoga Brick (24-WG084) is out of stock.

These items will not be added to the cart.

**Request:**

```graphql
mutation{
  reorderItems(orderNumber: "000000003"){
    cart {
      id
      itemsV2 {
        items {
          uid
          product {
            sku
          }
          quantity
          prices {
            price {
              value
            }
          }
        }
        total_count
        page_info {
          page_size
          current_page
          total_pages
        }          
      }
    }
    userInputErrors{
      code
      message
      path
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "reorderItems": {
      "cart": {
        "id": "LrMHhWHUaOqiBGC6S0KOcnYKsINUHTWz",
        "itemsV2": {
          "items": [
            {
              "uid": "NDQ=",
              "product": {
                "sku": "24-UG07"
              },
              "quantity": 1,
              "prices": {
                "price": {
                  "value": 12
                }
              }
            },
            {
              "uid": "NDU=",
              "product": {
                "sku": "WS06"
              },
              "quantity": 1,
              "prices": {
                "price": {
                  "value": 29
                }
              }
            }
          ],
          "total_count": 2,
          "page_info": {
            "page_size": 20,
            "current_page": 1,
            "total_pages": 1
          }
        }
      },
      "userInputErrors": [
        {
          "code": "NOT_SALABLE",
          "message": "Could not add the product with SKU \"24-WG084\" to the shopping cart: Product that you are trying to add is not available.",
          "path": [
            "orderNumber"
          ]
        },
        {
          "code": "INSUFFICIENT_STOCK",
          "message": "Could not add the product with SKU \"WP07-29-Black\" to the shopping cart: The requested qty is not available",
          "path": [
            "orderNumber"
          ]
        }
      ]
    }
  }
}
```

## Related topics

-  [customer](../../customer/queries/customer.md) query
