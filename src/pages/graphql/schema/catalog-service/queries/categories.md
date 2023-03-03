---
title: categories query | GraphQL Developer Guide
edition: ee
description: Describes how to construct and use the Catalog Service categories query.
---

# categories query

The `categories` query returns category data and using `subtree`, their sub-categories.

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

Specify the following HTTP headers to run this query.

import Headers from '/src/pages/_includes/graphql/catalog-service/headers.md'

<Headers />

## Example usage

The following query returns a category tree.

**Request:**

```graphql
query() {
    categories(ids: "2", roles: ["show_in_menu", "active"], subtree: {
       "depth": 2,
       "startLevel": 1
   }) {
       id,
       name,
       level,
       parentId,
       urlKey,
       urlPath,
       children,
       roles
    }
}
```

**Response:**

```json
{
    "data": {
        "categories": [
            {
                "id": "41",
                "name": "Gift Cards",
                "level": 2,
                "parentId": "2",
                "urlKey": "gift-cards",
                "urlPath": "gift-cards",
                "children": [],
                "roles": [
                    "active",
                    "show_in_menu"
                ]
            },
            {
                "id": "10",
                "name": "Video Download",
                "level": 3,
                "parentId": "9",
                "urlKey": "training-video",
                "urlPath": "training/training-video",
                "children": [],
                "roles": [
                    "active",
                    "show_in_menu"
                ]
            },
            {
                "id": "12",
                "name": "Tops",
                "level": 3,
                "parentId": "11",
                "urlKey": "tops-men",
                "urlPath": "men/tops-men",
                "children": [
                    "14",
                    "15",
                    "16",
                    "17"
                ],
                "roles": [
                    "active",
                    "show_in_menu"
                ]
            },
            {
                "id": "38",
                "name": "What's New",
                "level": 2,
                "parentId": "2",
                "urlKey": "what-is-new",
                "urlPath": "what-is-new",
                "children": [],
                "roles": [
                    "active",
                    "show_in_menu"
                ]
            },
            {
                "id": "48",
                "name": "testCategory",
                "level": 2,
                "parentId": "2",
                "urlKey": "testtree",
                "urlPath": "testtree",
                "children": [
                    "49",
                    "51"
                ],
                "roles": [
                    "active",
                    "show_in_menu"
                ]
            },
            {
                "id": "49",
                "name": "Child1",
                "level": 3,
                "parentId": "48",
                "urlKey": "sub1",
                "urlPath": "testtree/sub1",
                "children": [
                    "50",
                    "53"
                ],
                "roles": [
                    "active",
                    "show_in_menu"
                ]
            },
            {
                "id": "51",
                "name": "Child2",
                "level": 3,
                "parentId": "48",
                "urlKey": "child12",
                "urlPath": "testtree/child12",
                "children": [
                    "52",
                    "54"
                ],
                "roles": [
                    "active",
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
`ids` | [String!] | Array of category ids to return. If using `subtree`, must contain only one id.
`roles` | [String!]! |  The list of category roles to be queried.
`subtree` | [[subtree](#subtree-input)] | Number of subcategories to return.

### subtree input

Field | Data type | Description
--- | --- | ---
`startLevel` | [Int!] |The level in the category tree where the search should begin. Minimum of 1.
`depth` | [Int!]! |  The number of subtrees to return. Values over 3 may impact performance.

## Output fields

import Output from '/src/pages/_includes/graphql/catalog-service/categories.md'

<Output />
