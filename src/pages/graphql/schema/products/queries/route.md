---
title: route query
edition: paas
---

# route query

A merchant can reconfigure (rewrite) the URL to any product, category, or CMS page. When the rewrite goes into effect, any links that point to the previous URL are redirected to the new address.

The `route` query returns the canonical URL for a specified product, category, or CMS page. An external app can render a page by a URL without any prior knowledge about the landing page. To query for product and category pages, the `url` value must contain the URL key and suffix. For CMS page queries, the `url` value must contain the URL key only.

## Syntax

`{route(url: String!): RoutableInterface}`

## Reference

The [`route`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-route) reference provides detailed information about the types and fields defined in this query.

## Example usage

The following query returns information about the product with the URL key of `joust-duffle-bag.html`. The response indicates the URL key has been permanently redirected to `new-joust-duffle-bag.html`.

**Request:**

```graphql
{
  route(url: "joust-duffle-bag.html") {
    __typename
    relative_url
    redirect_code
    type
    ... on SimpleProduct {
      sku
      url_key
      uid
      url_rewrites {
        url
        parameters {
          name
          value
        }
      }
      relative_url
      redirect_code
      type
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "route": {
      "__typename": "SimpleProduct",
      "relative_url": "new-joust-duffle-bag.html",
      "redirect_code": 301,
      "type": "PRODUCT",
      "sku": "24-MB01",
      "url_key": "new-joust-duffle-bag",
      "uid": "MQ==",
      "url_rewrites": [
        {
          "url": "new-joust-duffle-bag.html",
          "parameters": [
            {
              "name": "id",
              "value": "1"
            }
          ]
        },
        {
          "url": "gear/new-joust-duffle-bag.html",
          "parameters": [
            {
              "name": "id",
              "value": "1"
            },
            {
              "name": "category",
              "value": "3"
            }
          ]
        },
        {
          "url": "gear/bags/new-joust-duffle-bag.html",
          "parameters": [
            {
              "name": "id",
              "value": "1"
            },
            {
              "name": "category",
              "value": "4"
            }
          ]
        }
      ]
    }
  }
}
```

## Related topics

[RoutableInterface](../interfaces/routable.md)
