---
title: category query
edition: paas
---

# category query

<InlineAlert variant="warning" slots="text" />

The `category` query has been deprecated. Use the [categories](categories.md) query instead.

The `category` query allows you to search for a single category definition or the entire category tree.

<InlineAlert variant="info" slots="text" />

You cannot return the entire category tree if the total number of nodes in the request exceeds the value specified in the `queryDepth` attribute defined in the GraphQL `di.xml` file. By default, this value is 20. [Query security](../../../usage/security-configuration.md) further describes query depths.

## Syntax

```graphql
category (
  id: int
): CategoryTree
```

## Reference

The [`category`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-category) reference provides detailed information about the types and fields defined in this query.

## Example usage

### Return the category tree of a top-level category

The following query returns information about category ID `20` and four levels of subcategories. In the sample data, category ID `20` is assigned to the `Women` category.

**Request:**

```graphql
{
  category(id: 20) {
    products {
      total_count
      page_info {
        current_page
        page_size
      }
    }
    children_count
    children {
      id
      level
      name
      path
      children {
        id
        level
        name
        path
        children {
          id
          level
          name
          path
          children {
            id
            level
            name
            path
          }
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
    "category": {
      "products": {
        "total_count": 0,
        "page_info": {
          "current_page": 1,
          "page_size": 20
        }
      },
      "children_count": "8",
      "children": [
        {
          "id": 22,
          "level": 3,
          "name": "Bottoms",
          "path": "1/2/20/22",
          "children": [
            {
              "id": 27,
              "level": 4,
              "name": "Pants",
              "path": "1/2/20/22/27",
              "children": []
            },
            {
              "id": 28,
              "level": 4,
              "name": "Shorts",
              "path": "1/2/20/22/28",
              "children": []
            }
          ]
        },
        {
          "id": 21,
          "level": 3,
          "name": "Tops",
          "path": "1/2/20/21",
          "children": [
            {
              "id": 23,
              "level": 4,
              "name": "Jackets",
              "path": "1/2/20/21/23",
              "children": []
            },
            {
              "id": 24,
              "level": 4,
              "name": "Hoodies & Sweatshirts",
              "path": "1/2/20/21/24",
              "children": []
            },
            {
              "id": 25,
              "level": 4,
              "name": "Tees",
              "path": "1/2/20/21/25",
              "children": []
            },
            {
              "id": 26,
              "level": 4,
              "name": "Bras & Tanks",
              "path": "1/2/20/21/26",
              "children": []
            }
          ]
        }
      ]
    }
  }
}
```

### Return breadcrumb information

The following query returns breadcrumb information about the women's `Tops` category (`id` = 25).

**Request:**

```graphql
{
  category (
   id: 25
) {
    id
    level
    name
    breadcrumbs {
      category_id
      category_name
      category_level
      category_url_key
      category_url_path
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "category": {
      "id": 25,
      "level": 4,
      "name": "Tees",
      "breadcrumbs": [
        {
          "category_id": 20,
          "category_name": "Women",
          "category_level": 2,
          "category_url_key": "women",
          "category_url_path": "women"
        },
        {
          "category_id": 21,
          "category_name": "Tops",
          "category_level": 3,
          "category_url_key": "tops-women",
          "category_url_path": "women/tops-women"
        }
      ]
    }
  }
}
```

## Errors

Error | Description
--- | ---
`Category doesn't exist` | The specified category ID value does not exist.
`Field "category" argument "id" requires type Int, found "XXX"` | The specified `id` argument value has the wrong type.
