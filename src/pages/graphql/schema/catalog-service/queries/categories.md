---
title: Categories query | GraphQL Developer Guide
edition: ee
description: Describes how to construct and use the Catalog Service Categories query.
---

# Categories query

The `Categories` query returns Categories and the products assigned to those categories.

## Syntax

```graphql
query Categories($roles: [String!]) {
  categories(roles: $roles) {
    id
    name
    level
    path
    parentId
    children
    roles
  }
}
```

## Required headers

You must specify the following HTTP headers to run this query.

import Headers from '/src/pages/_includes/graphql/catalog-service/headers.md'

<Headers />

## Example usage

### Return a basic category list

The following query returns the category tree.

**Request:**

```graphql
query Categories($roles: [String!]) {
  categories(roles: $roles) {
    id
    name
    level
    path
    parentId
    children
    roles
  }
}
```

**Response:**

The full response has been shortened for brevity.

```json
{
  "data": {
    "categories": [
      {
        "id": "22",
        "name": "Bottoms",
        "level": 3,
        "path": "1/2/20/22",
        "parentId": "20",
        "children": [
          "27",
          "28"
        ],
        "roles": [
          "show_in_menu"
        ]
      },
      {
        "id": "23",
        "name": "Jackets",
        "level": 4,
        "path": "1/2/20/21/23",
        "parentId": "21",
        "children": [],
        "roles": [
          "show_in_menu"
        ]
      },
      {
        "id": "24",
        "name": "Hoodies & Sweatshirts",
        "level": 4,
        "path": "1/2/20/21/24",
        "parentId": "21",
        "children": [],
        "roles": [
          "show_in_menu"
        ]
      },
      {
        "id": "25",
        "name": "Tees",
        "level": 4,
        "path": "1/2/20/21/25",
        "parentId": "21",
        "children": [],
        "roles": [
          "show_in_menu"
        ]
      },
      {
        "id": "26",
        "name": "Bras & Tanks",
        "level": 4,
        "path": "1/2/20/21/26",
        "parentId": "21",
        "children": [],
        "roles": [
          "show_in_menu"
        ]
      },
      {
        "id": "27",
        "name": "Pants",
        "level": 4,
        "path": "1/2/20/22/27",
        "parentId": "22",
        "children": [],
        "roles": [
          "show_in_menu"
        ]
      },
      {
        "id": "28",
        "name": "Shorts",
        "level": 4,
        "path": "1/2/20/22/28",
        "parentId": "22",
        "children": [],
        "roles": [
          "show_in_menu"
        ]
      },
      {
        "id": "29",
        "name": "Promotions",
        "level": 2,
        "path": "1/2/29",
        "parentId": "2",
        "children": [
          "30",
          "31",
          "32",
          "33"
        ],
        "roles": [
          "not_active"
        ]
      },
      {
        "id": "30",
        "name": "Women Sale",
        "level": 3,
        "path": "1/2/29/30",
        "parentId": "29",
        "children": [],
        "roles": []
      },
      {
        "id": "31",
        "name": "Men Sale",
        "level": 3,
        "path": "1/2/29/31",
        "parentId": "29",
        "children": [],
        "roles": []
      },
      {
        "id": "10",
        "name": "Video Download",
        "level": 3,
        "path": "1/2/9/10",
        "parentId": "9",
        "children": [],
        "roles": [
          "show_in_menu"
        ]
      }
    ]
  }
}
```

## Input fields

Field | Data type | Description
--- | --- | ---
`ids` | [String!] | A list of IDs assigned to the product options the shopper has selected, such specific colors and sizes.
`roles` | [String!]! |  The SKU of a complex product.

## Output fields

import Output from '/src/pages/_includes/graphql/catalog-service/categories.md'

<Output />
