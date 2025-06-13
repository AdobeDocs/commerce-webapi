---
title: categories query
edition: paas
---

# categories query

<InlineAlert variant="important" slots="text" />

Adobe Commerce as a Cloud Service does not support the `categories` query. Use the Catalog Service [`categories` query](../../catalog-service/queries/categories.md) instead.

The `categories` query returns a list of categories that match the specified filter. This query differs from the `categoryList` query in that it supports pagination.

The `categories` query supports the following types of filters. You can specify multiple filters in a query.

-  Category ID
-  Category name
-  Parent category ID
-  URL key
-  URL path

The query returns a `CategoryResult` object, which contains pagination information and an array of `CategoryTree` items. The top level of the `CategoryTree` object provides details about the queried category. This object includes the `children` attribute, which contains an array of its immediate subcategories.

If you omit the `filters` attribute, the query returns the store's default root category.

<InlineAlert variant="info" slots="text" />

You cannot return the entire category tree if the total number of nodes in the request exceeds the value specified in the `queryDepth` attribute defined in the GraphQL `di.xml` file. By default, this value is 20. [Query security](../../../usage/security-configuration.md) further describes query depths.

Use the `breadcrumbs` attribute to return information about the parent categories of the queried category.

## Syntax

```graphql
categories(filters: CategoryFilterInput pageSize: Int currentPage: Int): CategoryResult
```

## Reference

The [`categories`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-categories) reference provides detailed information about the types and fields defined in this query.

## Example usage

The following query returns the top-level categories (as well as two levels of children) displayed on the Luma storefront. Because the `currentPage` attribute is set to `2`, the second page of results are returned.

**Request:**

```graphql
{
  categories(
    filters: {
      ids: {in: ["3", "9", "12", "21", "38", "39"]}
      parent_id: {in: ["2"]}
    }
    pageSize:3
    currentPage: 2
  ) {
    total_count
    items {
      uid
      level
      name
      path
      children_count
      children {
        uid
        level
        name
        path
        children_count
        children {
          uid
          level
          name
          path
        }
      }
    }
    page_info {
      current_page
      page_size
      total_pages
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "categories": {
      "total_count": 6,
      "items": [
        {
          "uid": "Mw==",
          "level": 2,
          "name": "Gear",
          "path": "1/2/3",
          "children_count": "3",
          "children": [
            {
              "uid": "NA==",
              "level": 3,
              "name": "Bags",
              "path": "1/2/3/4",
              "children_count": "0",
              "children": []
            },
            {
              "uid": "NQ==",
              "level": 3,
              "name": "Fitness Equipment",
              "path": "1/2/3/5",
              "children_count": "0",
              "children": []
            },
            {
              "uid": "Ng==",
              "level": 3,
              "name": "Watches",
              "path": "1/2/3/6",
              "children_count": "0",
              "children": []
            }
          ]
        },
        {
          "uid": "OQ==",
          "level": 2,
          "name": "Training",
          "path": "1/2/9",
          "children_count": "1",
          "children": [
            {
              "uid": "MTA=",
              "level": 3,
              "name": "Video Download",
              "path": "1/2/9/10",
              "children_count": "0",
              "children": []
            }
          ]
        },
        {
          "uid": "Mzg=",
          "level": 2,
          "name": "Sale",
          "path": "1/2/38",
          "children_count": "0",
          "children": []
        }
      ],
      "page_info": {
        "current_page": 2,
        "page_size": 3,
        "total_pages": 2
      }
    }
  }
}
```
