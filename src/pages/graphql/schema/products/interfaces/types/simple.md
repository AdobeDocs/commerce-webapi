---
title: Simple product data types
description: The SimpleProduct data type implements the following interfaces:
---

# Simple product data types

The `SimpleProduct` data type implements the following interfaces:

-  [ProductInterface](/reference/graphql/latest/types-k-p.md#productinterface)
-  [PhysicalProductInterface](/reference/graphql/latest/types-k-p.md#physicalproductinterface)
-  [CustomizableProductInterface](/reference/graphql/latest/types-c-e.md#customizableproductinterface)
-  [RoutableInterface](/reference/graphql/latest/types-q-s.md#routableinterface)

Attributes that are specific to the simple products can be used when performing a [`products`](../../queries/products.md) query.

## Sample query

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

<Edition slots="text" backgroundcolor="gray"/>

[Thanks to Atwix for contributing this topic!](https://www.atwix.com/)
