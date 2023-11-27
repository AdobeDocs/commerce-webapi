---
title: Virtual product data types
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

# Virtual product data types

The `VirtualProduct` data type implements the following interfaces:

-  [ProductInterface](https://developer.adobe.com/commerce/webapi/graphql-api/beta/index.html#definition-ProductInterface)
-  [CustomizableProductInterface](https://developer.adobe.com/commerce/webapi/graphql-api/beta/index.html#definition-CustomizableProductInterface)
-  [RoutableInterface](https://developer.adobe.com/commerce/webapi/graphql-api/beta/index.html#definition-RoutableInterface)

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
