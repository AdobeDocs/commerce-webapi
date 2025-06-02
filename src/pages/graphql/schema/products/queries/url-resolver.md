---
title: urlResolver query
edition: paas
---

# urlResolver query

<InlineAlert variant="warning" slots="text" />

The `urlResolver` query has been deprecated. Use the [route](route.md) query instead.

A merchant can reconfigure (rewrite) the URL to any product, category, or CMS page. When the rewrite goes into effect, any links that point to the previous URL are redirected to the new address.

The `urlResolver` query returns the canonical URL for a specified product, category, or CMS page. An external app can render a page by a URL without any prior knowledge about the landing page.

## Syntax

`{urlResolver(url: String!): EntityUrl}`

## Reference

The [`urlResolver`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-urlResolver) reference provides detailed information about the types and fields defined in this query.

## Example usage

### Query information about the URL

The following query returns information about the URL containing `joust-duffle-bag.html`.

**Request:**

```graphql
{
  urlResolver(url: "joust-duffle-bag.html") {
    entity_uid
    relative_url
    redirectCode
    type
  }
}
```

**Response:**

```json
{
  "data": {
    "urlResolver": {
      "entity_uid": "MQ==",
      "relative_url": "joust-duffle-bag.html",
      "redirectCode": 0,
      "type": "PRODUCT"
    }
  }
}
```

## Related topics

[products query](products.md)
