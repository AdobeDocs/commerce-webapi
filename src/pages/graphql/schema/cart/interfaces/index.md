---
title: CartItemInterface attributes and implementations
---

# CartItemInterface attributes and implementations

The [`CartItemInterface`](https://developer.adobe.com/commerce/webapi/graphql-api/beta/index.html#definition-CartItemInterface) has the following implementations:

*  [BundleCartItem]https://developer.adobe.com/commerce/webapi/graphql-api/beta/index.html#definition-BundleCartItem
*  [ConfigurableCartItem](https://developer.adobe.com/commerce/webapi/graphql-api/beta/index.html#definition-ConfigurableCartItem)
*  [DownloadableCartItem](https://developer.adobe.com/commerce/webapi/graphql-api/beta/index.html#definition-DownloadableCartItem)
*  [GiftCardCartItem](https://developer.adobe.com/commerce/webapi/graphql-api/beta/index.html#definition-GiftCardCartItem)
*  [SimpleCartItem](https://developer.adobe.com/commerce/webapi/graphql-api/beta/index.html#definition-SimpleCartItem)
*  [VirtualCartItem](https://developer.adobe.com/commerce/webapi/graphql-api/beta/index.html#definition-VirtualCartItem)

## Example usage

The following mutation adds a configurable product and a bundle product to the cart. The response contains details about these items.

**Request:**

```graphql
mutation {
  addProductsToCart(
    cartId: "h7HmZwfU7zIGR94jsuzOVBUAYtyPefkr"
    cartItems: [
      {
        quantity: 1
        sku: "WSH12"
        selected_options: ["Y29uZmlndXJhYmxlLzkzLzUz","Y29uZmlndXJhYmxlLzE2MS8xNzQ="]
      }
      {
        quantity: 1
        sku: "24-WG080"
        selected_options: [
          "YnVuZGxlLzEvMS8x"
          "YnVuZGxlLzIvNC8x"
          "YnVuZGxlLzMvNS8x"
          "YnVuZGxlLzQvOC8x"
        ]
      }
    ]
  ) {
    cart {
      itemsV2 {
        items {
          uid
          product {
            name
            sku
          }
          quantity
          ... on ConfigurableCartItem {
            configurable_options {
              configurable_product_option_uid
              configurable_product_option_value_uid
              option_label
              value_label
            }
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
    "addProductsToCart": {
      "cart": {
        "itemsV2": {
          "items": [
            {
              "uid": "MjU=",
              "product": {
                "name": "Erika Running Short",
                "sku": "WSH12"
              },
              "quantity": 1,
              "configurable_options": [
                {
                  "configurable_product_option_uid": "Y29uZmlndXJhYmxlLzIwNDgvOTM=",
                  "configurable_product_option_value_uid": "Y29uZmlndXJhYmxlLzkzLzUz",
                  "option_label": "Color",
                  "value_label": "Green"
                },
                {
                  "configurable_product_option_uid": "Y29uZmlndXJhYmxlLzIwNDgvMTYx",
                  "configurable_product_option_value_uid": "Y29uZmlndXJhYmxlLzE2MS8xNzQ=",
                  "option_label": "Size",
                  "value_label": "28"
                }
              ]
            },
            {
              "uid": "Mjc=",
              "product": {
                "name": "Sprite Yoga Companion Kit",
                "sku": "24-WG080"
              },
              "quantity": 1,
              "bundle_options": [
                {
                  "uid": "YnVuZGxlLzE=",
                  "label": "Sprite Stasis Ball",
                  "type": "radio",
                  "values": [
                    {
                      "id": 1,
                      "label": "Sprite Stasis Ball 55 cm",
                      "price": 23,
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
                      "quantity": 1
                    }
                  ]
                },
                {
                  "uid": "YnVuZGxlLzM=",
                  "label": "Sprite Yoga Strap",
                  "type": "radio",
                  "values": [
                    {
                      "id": 5,
                      "label": "Sprite Yoga Strap 6 foot",
                      "price": 14,
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
          "total_count": 2,
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
