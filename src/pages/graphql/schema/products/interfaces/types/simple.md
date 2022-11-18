---
title: Simple product data types | Commerce Web APIs
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

# Simple product data types

The `SimpleProduct` data type implements the following interfaces:

-  [ProductInterface](../index.md)
-  [PhysicalProductInterface](../index.md#physicalproductinterface)
-  [CustomizableProductInterface](../customizable-option.md)
-  [RoutableInterface](../routable.md)

Attributes that are specific to the simple products can be used when performing a [`products`](../../queries/products.md) query.

## SimpleProduct object

The `SimpleProduct` object contains attributes only from implemented interfaces:

## Sample Query

The following query returns information about simple product `24-MB01`, which is defined in the sample data.

```graphql
{
  products(
    filter: {
      sku: {
        eq: "24-MB01"
      }
    }
  ) {
    items {
      sku
      __typename
      uid
      name
      categories {
        uid
        name
        path
      }
      price_range {
        minimum_price {
          final_price {
            currency
            value
          }
        }
        maximum_price {
          final_price {
            currency
            value
          }
        }
      }
      stock_status
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
          "sku": "24-MB01",
          "__typename": "SimpleProduct",
          "uid": "MQ==",
          "name": "Joust Duffle Bag",
          "categories": [
            {
              "uid": "Mw==",
              "name": "Gear",
              "path": "1/2/3"
            },
            {
              "uid": "NA==",
              "name": "Bags",
              "path": "1/2/3/4"
            }
          ],
          "price_range": {
            "minimum_price": {
              "final_price": {
                "currency": "USD",
                "value": 34
              }
            },
            "maximum_price": {
              "final_price": {
                "currency": "USD",
                "value": 34
              }
            }
          },
          "stock_status": "IN_STOCK"
        }
      ]
    }
  }
}
```

## Related topics

-  [addSimpleProductsToCart mutation](../../../cart/mutations/add-simple-products.md)
