---
title: addBundleProductsToCart mutation
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

# addBundleProductsToCart mutation

<InlineAlert variant="warning" slots="text" />

We recommend using the [addProductsToCart mutation](add-products.md) to add any type of product to the cart.

Use the `addBundleProductsToCart` mutation to add bundle products to a specific cart.

## Syntax

`mutation: {addBundleProductsToCart(input: AddBundleProductsToCartInput): {AddBundleProductsToCartOutput}}`

## Reference

The [`addBundleProductsToCart`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-addBundleProductsToCart) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example uses a bundle product "Sprite Yoga Companion Kit" from Adobe Commerce and Magento Open Source sample data.
The SKU of this product is: **24-WG080**

This example adds one bundle product with following children to the specified shopping cart:

-  Sprite Stasis Ball 65 cm (x1)
-  Sprite Foam Yoga Brick (x2)
-  Sprite Yoga Strap 10 foot (x1)
-  Sprite Foam Roller (x1)

The `cart_id` used in this example was [generated](create-empty-cart.md) by creating an empty cart.

**Request:**

```graphql
mutation {
  addBundleProductsToCart(
    input: {
      cart_id: "2m3Wpue1L3bNARhErAKbZ8Lb7czvgq6R"
      cart_items: [
      {
        data: {
          sku: "24-WG080"
          quantity: 1
        }
        bundle_options: [
          {
            id: 1
            quantity: 1
            value: [
              "2"
            ]
          },
          {
            id: 2
            quantity: 2
            value: [
              "4"
            ]
          },
          {
            id: 3
            quantity: 1
            value: [
              "7"
            ]
          },
          {
            id: 4
            quantity: 1
            value: [
              "8"
            ]
          }
        ]
      },
    ]
  }) {
    cart {
      itemsV2 {
        items {
          uid
          quantity
          product {
            sku
          }
          ... on BundleCartItem {
            bundle_options {
              uid
              label
              type
              values {
                id
                label
                price
                quantity
              }
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
  }
}
```

**Response:**

```json
{
  "data": {
    "addBundleProductsToCart": {
      "cart": {
        "itemsV2": {
          "items": [
            {
              "uid": "MjI=",
              "quantity": 1,
              "product": {
                "sku": "WSH12"
              }
            },
            {
              "uid": "MjQ=",
              "quantity": 3,
              "product": {
                "sku": "24-WB01"
              }
            },
            {
              "uid": "MzI=",
              "quantity": 1,
              "product": {
                "sku": "24-WG080"
              },
              "bundle_options": [
                {
                  "uid": "YnVuZGxlLzE=",
                  "label": "Sprite Stasis Ball",
                  "type": "radio",
                  "values": [
                    {
                      "id": 2,
                      "label": "Sprite Stasis Ball 65 cm",
                      "price": 27,
                      "quantity": 1
                    }
                  ]
                },
                {
                  "uid": "YnVuZGxlLzI=",
                  "label": "Sprite Foam Yoga Brick",
                  "type": "radio",
                  "values": [
                    {
                      "id": 4,
                      "label": "Sprite Foam Yoga Brick",
                      "price": 5,
                      "quantity": 2
                    }
                  ]
                },
                {
                  "uid": "YnVuZGxlLzM=",
                  "label": "Sprite Yoga Strap",
                  "type": "radio",
                  "values": [
                    {
                      "id": 7,
                      "label": "Sprite Yoga Strap 10 foot",
                      "price": 21,
                      "quantity": 1
                    }
                  ]
                },
                {
                  "uid": "YnVuZGxlLzQ=",
                  "label": "Sprite Foam Roller",
                  "type": "radio",
                  "values": [
                    {
                      "id": 8,
                      "label": "Sprite Foam Roller",
                      "price": 19,
                      "quantity": 1
                    }
                  ]
                }
              ]
            }
          ],
          "total_count": 3,
          "page_info": {
            "page_size": 20,
            "current_page": 1,
            "total_pages": 1
          }
        }
      }
    }
  }
}
```

## Errors

Error | Description
--- | ---
`Could not find a cart with ID "XXX"` | The specified `cart_id` value does not exist in the `quote_id_mask` database table.
`Could not find a product with SKU "XXX"` | A simple product with the SKU specified in the `data.sku` argument does not exist.
`Required parameter "cart_id" is missing` | The `cart_id` argument is omitted or contains an empty value.

## Related topics

-  [Bundle product data types](../../products/interfaces/types/bundle.md)
