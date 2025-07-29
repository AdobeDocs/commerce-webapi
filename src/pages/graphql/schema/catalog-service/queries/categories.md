---
title: categories query | GraphQL Developer Guide
description: Describes how to construct and use the Catalog Service categories query.
keywords:
  - GraphQL
  - Services
---

# categories query

The `categories` query returns category data. If the `subtree` input object is specified, the query returns details about subcategories.

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

If using the `subtree` input, only one category `id` can be specified in the query.
The `subtree` object allows you to specify how many levels of subcategories to return. Some sites may have a high number of subcategories, and returning the entire category tree could cause performance issues. It is recommended to keep `depth` to a maximum of 3 for the same reason.

## Endpoints

import StorefrontAPIEndpoints from '/src/_includes/graphql/endpoints.md'

<StorefrontAPIEndpoints />

## Required headers

Specify the following HTTP headers to run this query.

import Headers from '/src/_includes/graphql/catalog-service/headers.md'

<Headers />

###  Find the customer group code

import CustomerGroupCode from '/src/_includes/graphql/customer-group-code.md'

<CustomerGroupCode />

## Example usage

The following query returns a category tree.

<CodeBlock slots="heading, code" repeat="2" languages="JSON" />

**Request:**

```graphql
categories(ids: ["11"], roles: ["show_in_menu", "active"], subtree: {
    "depth": 3,
    "startLevel": 1
}) {
    name
    id
    level
    roles
    path
    urlPath
    urlKey
    parentId
    children
    }
```

**Response:**

```json
[
   {
      "name":"Bottoms",
      "id":"13",
      "level":3,
      "roles":[
         "active",
         "show_in_menu"
      ],
      "path":"1/2/11/13",
      "urlPath":"men/bottoms-men",
      "urlKey":"bottoms-men",
      "parentId":"11",
      "children":[
         "18",
         "19"
      ]
   },
   {
      "name":"Tops",
      "id":"12",
      "level":3,
      "roles":[
         "active",
         "show_in_menu"
      ],
      "path":"1/2/11/12",
      "urlPath":"men/tops-men",
      "urlKey":"tops-men",
      "parentId":"11",
      "children":[
         "14",
         "15",
         "16",
         "17"
      ]
   },
   {
      "name":"Jackets",
      "id":"14",
      "level":4,
      "roles":[
         "active",
         "show_in_menu"
      ],
      "path":"1/2/11/12/14",
      "urlPath":"men/tops-men/jackets-men",
      "urlKey":"jackets-men",
      "parentId":"12",
      "children":[
      ]
   },
   {
      "name":"Pants",
      "id":"18",
      "level":4,
      "roles":[
         "active",
         "show_in_menu"
      ],
      "path":"1/2/11/13/18",
      "urlPath":"men/bottoms-men/pants-men",
      "urlKey":"pants-men",
      "parentId":"13",
      "children":[
      ]
   },
   {
      "name":"Tanks",
      "id":"17",
      "level":4,
      "roles":[
         "active",
         "show_in_menu"
      ],
      "path":"1/2/11/12/17",
      "urlPath":"men/tops-men/tanks-men",
      "urlKey":"tanks-men",
      "parentId":"12",
      "children":[
      ]
   },
   {
      "name":"Hoodies & Sweatshirts",
      "id":"15",
      "level":4,
      "roles":[
         "active",
         "show_in_menu"
      ],
      "path":"1/2/11/12/15",
      "urlPath":"men/tops-men/hoodies-and-sweatshirts-men",
      "urlKey":"hoodies-and-sweatshirts-men",
      "parentId":"12",
      "children":[
      ]
   },
   {
      "name":"Shorts",
      "id":"19",
      "level":4,
      "roles":[
         "active",
         "show_in_menu"
      ],
      "path":"1/2/11/13/19",
      "urlPath":"men/bottoms-men/shorts-men",
      "urlKey":"shorts-men",
      "parentId":"13",
      "children":[

      ]
   }
]
```

## Input fields

Field | Data type | Description
--- | --- | ---
`ids` | [String!] | Array of category IDs to return. If using `subtree`, must contain only one ID.
`roles` | [String!]! |  The list of category roles to be queried.
`subtree` | [[subtree](#subtree-input)] | Defines the number of sub-levels of categories to return.

### subtree input

Field | Data type | Description
--- | --- | ---
`startLevel` | [Int!] |The level in the category tree where the search should begin. Minimum of 1.
`depth` | [Int!]! |  The number of subtrees to return. Values over 3 may impact performance.

## Output fields

import Output from '/src/_includes/graphql/catalog-service/categories.md'

<Output />
