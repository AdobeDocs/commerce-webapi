---
title: Bundle product data types
---

# Bundle product data types

The [`BundleProduct`](https://developer.adobe.com/commerce/webapi/graphql-api/beta/index.html#definition-BundleProduct) data type implements the following interfaces:

-  [ProductInterface](https://developer.adobe.com/commerce/webapi/graphql-api/beta/index.html#definition-ProductInterface)
-  [PhysicalProductInterface](https://developer.adobe.com/commerce/webapi/graphql-api/beta/index.html#definition-PhysicalProductInterface)
-  [CustomizableProductInterface](https://developer.adobe.com/commerce/webapi/graphql-api/beta/index.html#definition-CustomizableProductInterface)
-  [RoutableInterface](https://developer.adobe.com/commerce/webapi/graphql-api/beta/index.html#definition-RoutableInterface)

Attributes that are specific to bundle products can be used when performing a [`products`](../../queries/products.md) query.

## Sample query

The following query returns information about bundle product `24-WG080`, which is defined in the sample data.

```graphql
{
  products(filter: {sku:
    {eq: "24-WG080"}
  })
   {
      items{
         sku
         __typename
         uid
         name
          ... on BundleProduct {
          dynamic_sku
          dynamic_price
          dynamic_weight
          price_view
          ship_bundle_items
          items {
            uid
            title
            required
            type
            position
            sku
            options {
              uid
              quantity
              position
              is_default
              price
              price_type
              can_change_quantity
              label
              product {
                uid
                name
                sku
                __typename
              }
            }
          }
        }
      }
   }
}
```

```json
{
  "data": {
    "products": {
      "items": [
        {
          "sku": "24-WG080",
          "__typename": "BundleProduct",
          "uid": "NDY=",
          "name": "Sprite Yoga Companion Kit",
          "dynamic_sku": true,
          "dynamic_price": true,
          "dynamic_weight": true,
          "price_view": "PRICE_RANGE",
          "ship_bundle_items": "TOGETHER",
          "items": [
            {
              "uid": "YnVuZGxlLzE=",
              "title": "Sprite Stasis Ball",
              "required": true,
              "type": "radio",
              "position": 1,
              "sku": "24-WG080",
              "options": [
                {
                  "uid": "YnVuZGxlLzEvMS8x",
                  "quantity": 1,
                  "position": 1,
                  "is_default": true,
                  "price": 0,
                  "price_type": "FIXED",
                  "can_change_quantity": true,
                  "label": "Sprite Stasis Ball 55 cm",
                  "product": {
                    "uid": "MjY=",
                    "name": "Sprite Stasis Ball 55 cm",
                    "sku": "24-WG081-blue",
                    "__typename": "SimpleProduct"
                  }
                },
                {
                  "uid": "YnVuZGxlLzEvMi8x",
                  "quantity": 1,
                  "position": 2,
                  "is_default": false,
                  "price": 0,
                  "price_type": "FIXED",
                  "can_change_quantity": true,
                  "label": "Sprite Stasis Ball 65 cm",
                  "product": {
                    "uid": "Mjk=",
                    "name": "Sprite Stasis Ball 65 cm",
                    "sku": "24-WG082-blue",
                    "__typename": "SimpleProduct"
                  }
                },
                {
                  "uid": "YnVuZGxlLzEvMy8x",
                  "quantity": 1,
                  "position": 3,
                  "is_default": false,
                  "price": 0,
                  "price_type": "FIXED",
                  "can_change_quantity": true,
                  "label": "Sprite Stasis Ball 75 cm",
                  "product": {
                    "uid": "MzI=",
                    "name": "Sprite Stasis Ball 75 cm",
                    "sku": "24-WG083-blue",
                    "__typename": "SimpleProduct"
                  }
                }
              ]
            },
            {
              "uid": "YnVuZGxlLzI=",
              "title": "Sprite Foam Yoga Brick",
              "required": true,
              "type": "radio",
              "position": 2,
              "sku": "24-WG080",
              "options": [
                {
                  "uid": "YnVuZGxlLzIvNC8x",
                  "quantity": 1,
                  "position": 1,
                  "is_default": true,
                  "price": 0,
                  "price_type": "FIXED",
                  "can_change_quantity": true,
                  "label": "Sprite Foam Yoga Brick",
                  "product": {
                    "uid": "MjE=",
                    "name": "Sprite Foam Yoga Brick",
                    "sku": "24-WG084",
                    "__typename": "SimpleProduct"
                  }
                }
              ]
            },
            {
              "uid": "YnVuZGxlLzM=",
              "title": "Sprite Yoga Strap",
              "required": true,
              "type": "radio",
              "position": 3,
              "sku": "24-WG080",
              "options": [
                {
                  "uid": "YnVuZGxlLzMvNS8x",
                  "quantity": 1,
                  "position": 1,
                  "is_default": true,
                  "price": 0,
                  "price_type": "FIXED",
                  "can_change_quantity": true,
                  "label": "Sprite Yoga Strap 6 foot",
                  "product": {
                    "uid": "MzM=",
                    "name": "Sprite Yoga Strap 6 foot",
                    "sku": "24-WG085",
                    "__typename": "SimpleProduct"
                  }
                },
                {
                  "uid": "YnVuZGxlLzMvNi8x",
                  "quantity": 1,
                  "position": 2,
                  "is_default": false,
                  "price": 0,
                  "price_type": "FIXED",
                  "can_change_quantity": true,
                  "label": "Sprite Yoga Strap 8 foot",
                  "product": {
                    "uid": "MzQ=",
                    "name": "Sprite Yoga Strap 8 foot",
                    "sku": "24-WG086",
                    "__typename": "SimpleProduct"
                  }
                },
                {
                  "uid": "YnVuZGxlLzMvNy8x",
                  "quantity": 1,
                  "position": 3,
                  "is_default": false,
                  "price": 0,
                  "price_type": "FIXED",
                  "can_change_quantity": true,
                  "label": "Sprite Yoga Strap 10 foot",
                  "product": {
                    "uid": "MzU=",
                    "name": "Sprite Yoga Strap 10 foot",
                    "sku": "24-WG087",
                    "__typename": "SimpleProduct"
                  }
                }
              ]
            },
            {
              "uid": "YnVuZGxlLzQ=",
              "title": "Sprite Foam Roller",
              "required": true,
              "type": "radio",
              "position": 4,
              "sku": "24-WG080",
              "options": [
                {
                  "uid": "YnVuZGxlLzQvOC8x",
                  "quantity": 1,
                  "position": 1,
                  "is_default": true,
                  "price": 0,
                  "price_type": "FIXED",
                  "can_change_quantity": true,
                  "label": "Sprite Foam Roller",
                  "product": {
                    "uid": "MjI=",
                    "name": "Sprite Foam Roller",
                    "sku": "24-WG088",
                    "__typename": "SimpleProduct"
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
```

## Related topics

-  [addBundleProductsToCart mutation](../../../cart/mutations/add-bundle-products.md)
