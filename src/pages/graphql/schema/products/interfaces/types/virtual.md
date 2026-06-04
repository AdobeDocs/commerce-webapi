---
title: Virtual product data types
description: The VirtualProduct data type implements the following interfaces:
---

# Virtual product data types

The `VirtualProduct` data type implements the following interfaces:

-  [ProductInterface](/reference/graphql/index.md#productinterface)
-  [CustomizableProductInterface](/reference/graphql/index.md#customizableproductinterface)
-  [RoutableInterface](/reference/graphql/index.md#routableinterface)

Attributes that are specific to the virtual products can be used when performing a [`products`](../../queries/products.md) query.

## Sample query

The following query returns information about virtual product.

```graphql
{
  products(
    filter: {
      sku: {
        eq: "test-virtual-product"
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
          "sku": "test-virtual-product",
          "__typename": "VirtualProduct",
          "uid": "MjA1MA==",
          "name": "test-virtual-product",
          "categories": [
            {
              "uid": "Mzg=",
              "name": "Sale",
              "path": "1/2/38"
            }
          ],
          "price_range": {
            "minimum_price": {
              "final_price": {
                "currency": "USD",
                "value": 123
              }
            },
            "maximum_price": {
              "final_price": {
                "currency": "USD",
                "value": 123
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

-  [addVirtualProductsToCart mutation](../../../cart/mutations/add-virtual-products.md)

<Edition slots="text" backgroundcolor="gray"/>

[Thanks to Atwix for contributing this topic!](https://www.atwix.com/)
