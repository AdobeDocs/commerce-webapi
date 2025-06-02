---
title: Downloadable product data types
---

# Downloadable product data types

The `DownloadableProduct` data type implements [`ProductInterface`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-ProductInterface) and [`CustomizableProductInterface`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-CustomizableProductInterface). As a result, attributes that are specific to downloadable products can be used when performing a [`products`](../../queries/products.md) query. It also implements [RoutableInterface](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-RoutableInterface).

## Sample query

Add the following inline fragment to the output section of your `products` query to return information specific to downloadable products:

```text
... on DownloadableProduct {
  items {
   <attributes>
  }
}
```

The following query returns information about downloadable product `240-LV04`, which is defined in the sample data.

**Request:**

```graphql
{
  products(filter: { sku: { eq: "240-LV04" } }) {
    items {
      uid
      name
      sku
      __typename
      price_range{
        minimum_price{
          regular_price{
            value
            currency
          }
        }
      }
      ... on DownloadableProduct {
        links_title
        links_purchased_separately
        downloadable_product_links {
          sample_url
          sort_order
          title
          uid
          price
        }
        downloadable_product_samples {
          title
          sort_order
          sample_url
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
    "products": {
      "items": [
        {
          "uid": "NDc=",
          "name": "Beginner's Yoga",
          "sku": "240-LV04",
          "__typename": "DownloadableProduct",
          "price_range": {
            "minimum_price": {
              "regular_price": {
                "value": 6,
                "currency": "USD"
              }
            }
          },
          "links_title": "Downloads",
          "links_purchased_separately": 0,
          "downloadable_product_links": [
            {
              "sample_url": "http://example.com/downloadable/download/linkSample/link_id/1/",
              "sort_order": 1,
              "title": "Beginner's Yoga",
              "uid": "ZG93bmxvYWRhYmxlLzE=",
              "price": 6
            }
          ],
          "downloadable_product_samples": [
            {
              "title": "Trailer #1",
              "sort_order": 1,
              "sample_url": "http://example.com/downloadable/download/sample/sample_id/1/"
            },
            {
              "title": "Trailer #2",
              "sort_order": 1,
              "sample_url": "http://example.com/downloadable/download/sample/sample_id/2/"
            },
            {
              "title": "Trailer #3",
              "sort_order": 1,
              "sample_url": "http://example.com/downloadable/download/sample/sample_id/3/"
            }
          ]
        }
      ]
    }
  }
}
```

## Related topics

-  [customerDownloadableProducts query](../../../customer/queries/downloadable-products.md)
