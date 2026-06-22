---
title: Grouped product data types
description: The GroupedProduct data type implements ProductInterface and PhysicalProductInterface. As a result, attributes that are specific to grouped products can be...
---

# Grouped product data types

The `GroupedProduct` data type implements [ProductInterface](/reference/graphql/latest/index.md#productinterface) and [PhysicalProductInterface](/reference/graphql/latest/index.md#physicalproductinterface). As a result, attributes that are specific to grouped products can be used when performing a [products](../../queries/products.md) query. It also implements [RoutableInterface](/reference/graphql/latest/index.md#routableinterface).

## Sample query

The following query returns information about downloadable product `24-WG085_Group`, which is defined in the sample data.

```graphql
{
  products(filter:
    {sku: {eq: "24-WG085_Group"}}
  )
  {
    items {
      uid
      name
      sku
      __typename
      ... on GroupedProduct {
        items{
          qty
          position
          product{
            sku
            name
            __typename
            url_key
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
          "uid": "NDU=",
          "name": "Set of Sprite Yoga Straps",
          "sku": "24-WG085_Group",
          "__typename": "GroupedProduct",
          "items": [
            {
              "qty": 0,
              "position": 0,
              "product": {
                "sku": "24-WG085",
                "name": "Sprite Yoga Strap 6 foot",
                "__typename": "SimpleProduct",
                "url_key": "sprite-yoga-strap-6-foot"
              }
            },
            {
              "qty": 0,
              "position": 1,
              "product": {
                "sku": "24-WG086",
                "name": "Sprite Yoga Strap 8 foot",
                "__typename": "SimpleProduct",
                "url_key": "sprite-yoga-strap-8-foot"
              }
            },
            {
              "qty": 0,
              "position": 2,
              "product": {
                "sku": "24-WG087",
                "name": "Sprite Yoga Strap 10 foot",
                "__typename": "SimpleProduct",
                "url_key": "sprite-yoga-strap-10-foot"
              }
            }
          ]
        }
      ]
    }
  }
}
```
