---
title: Categories query | GraphQL Developer Guide
edition: ee
description: Describes how to construct and use the Catalog Service Categories query.
---

# Categories query

The `Categories` query returns Categories and the products assigned to those categories.

## Syntax

```graphql
type Query {
  categories(ids: [String!], roles: [String!], subtree: Subtree): [CategoryView]
}
```

Where `subtree` is:

```graphql
input Subtree {
    startLevel: Int!,
    depth: Int!
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
      }
      ...
    ]
  }
}
```

## Input fields

Field | Data type | Description
--- | --- | ---
`startLevel` | [Int!] |The level in the category tree where the search should begin.
`depth` | [Int!]! |  The number of subtrees to return.

## Output fields

import Output from '/src/pages/_includes/graphql/catalog-service/categories.md'

<Output />
