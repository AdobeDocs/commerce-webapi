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

### Find the customer group code

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
    position
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
      "position":2,
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
      "position":1,
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
      "position":1,
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
      "position":1,
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
      "position":4,
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
      "position":2,
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
      "position":2,
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
`ids` | [String!] | List of category IDs to retrieve. For example, `123`, `456`, or `789`. If using `subtree`, must contain only one ID.
`roles` | [String!] | List of roles to filter the categories by. Only categories assigned one of the specified roles are returned. For example, `show_on_plp`, `show_in_pdp`, or `show_in_search`.
`subtree` | [Subtree](#subtree-input) | Limits the response to a subtree of the category hierarchy. Use `startLevel` to set the topmost level (root = 1) and `depth` to control how many levels of subcategories to include.

### Subtree input

Field | Data type | Description
--- | --- | ---
`startLevel` | Int! | The absolute level in the category tree hierarchy to begin retrieving categories from. Level `1` is the root category, level `2` is the first level of children, level `3` is the second, and so on.
`depth` | Int! | The number of category levels to retrieve below the `startLevel`. For example, a value of `2` returns two levels of subcategories beneath the `startLevel`. Values over 3 may impact performance.

## Output fields

import Output from '/src/_includes/graphql/catalog-service/categories.md'

<Output />
