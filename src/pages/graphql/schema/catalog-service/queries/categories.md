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

<Edition slots="text" backgroundcolor="blue"/>

[PaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions)

| Environment | Endpoint    |
|------------ | ----------: |
| **Testing**    | `https://catalog-service-sandbox.adobe.io/graphql` |
| **Production** | `https://catalog-service.adobe.io/graphql` |

<Edition slots="text" backgroundcolor="green"/>

[SaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions)

|  Environment | Endpoint |
| ------------ | --------:|
| Testing | `https://{{region}}-{{environment}}.api.commerce.adobe.com/{{tenant-id}}/graphql` |
| Production | `https://{{region}}.api.commerce.adobe.com/{{tenant-id}}/graphql` |

**URL structure for SaaS endpoints**

- `region` is the cloud region where your instance is deployed.
- `environment` is the environment type, such as `sandbox`. If the environment is production, this value is omitted.
- `tenantId` is the unique identifier for your organization's specific instance within the Adobe Experience Cloud.

## Required headers

Specify the following HTTP headers to run this query.

| Header | Description |
| --- | --- |
| `Magento-Customer-Group` | Specify the [customer group code](#find-the-customer-group-code) for the API request. |
| `Magento-Environment-Id` | This value is displayed at **System** > **Commerce Services Connector** > **SaaS Identifier** > **Data Space ID** or can be obtained by running the `bin/magento config:show services_connector/services_id/environment_id` command. |
| `Magento-Store-Code`| The code assigned to the store associated with the active store view. For example, `main_website_store`. |
| `Magento-Store-View-Code`| The code assigned to the active store view. For example, `default`. |
| `Magento-Website-Code`| The code assigned to the website associated with the active store view. For example, `base`. |

<Edition slots="text" backgroundcolor="blue"/>

[PaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions)

`X-Api-Key` | Set this value to the [unique API key](https://experienceleague.adobe.com/en/docs/commerce-merchant-services/user-guides/integration-services/saas#genapikey) generated for your Commerce environment.

### Find the customer group code

The customer group code is the encrypted value of the customer group ID, which determines discounts and tax class for pricing contexts. For B2B implementations, the customer group ID also determines the Shared Catalog context.

Use one of the following codes for a default customer group based on your requirements.

| Customer Group | Code |
| ---------------| ----------------- |
| **NOT LOGGED IN** | `b6589fc6ab0dc82cf12099d1c2d40ab994e8410c` |
| **General** | `356a192b7913b04c54574d18c28d46e6395428ab` |
| **Wholesale** | `da4b9237bacccdf19c0760cab7aec4a8359010b0` |
| **Retailer** |`77de68daecd823babbb58edb1c8e14d7106e83bb` |

For merchant-defined groups, the customer group code is the encrypted value of the ID, `sha1(<customer_group_id>)`.

For B2B implementations, the customer group code is the encrypted value of the customer group ID associated with the shared catalog, `sha1(<customer_group_id>)`.

<InlineAlert variant="info" slots="text"/>

Find a list of available customer group IDs from the Admin (**Customers** > **Customer Groups**). For details, see [Customer Groups](https://experienceleague.adobe.com/en/docs/commerce-admin/customers/customer-groups) and [Shared Catalogs](https://experienceleague.adobe.com/en/docs/commerce-admin/b2b/shared-catalogs/catalog-shared) in the _Merchant Guide_.

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

| Field | Data type | Description |
| --- | --- | --- |
| `ids` | [String!] | List of category IDs to retrieve. For example, `123`, `456`, or `789`. If using `subtree`, must contain only one ID. |
| `roles` | [String!] | List of roles to filter the categories by. Only categories assigned one of the specified roles are returned. For example, `show_on_plp`, `show_in_pdp`, or `show_in_search`. |
| `subtree` | [Subtree](#subtree-input) | Limits the response to a subtree of the category hierarchy. Use `startLevel` to set the topmost level (root = 1) and `depth` to control how many levels of subcategories to include. |

### Subtree input

| Field | Data type | Description |
| --- | --- | --- |
| `startLevel` | Int! | The absolute level in the category tree hierarchy to begin retrieving categories from. Level `1` is the root category, level `2` is the first level of children, level `3` is the second, and so on. |
| `depth` | Int! | The number of category levels to retrieve below the `startLevel`. For example, a value of `2` returns two levels of subcategories beneath the `startLevel`. Values over 3 may impact performance. |

## Output fields

The `categories` query returns a list of `CategoryView` objects. Each `CategoryView` describes a category in the catalog tree, including identifiers, hierarchy, URL segments, display sort options, and storefront roles. It implements `CategoryViewInterface` for the shared field set documented below.

### CategoryView type

| Field | Data type | Description |
| --- | --- | --- |
| `availableSortBy` | [String] | List of available sort by options. For example, `name`, `position`, or `size`. Maps to the category configuration *Display Settings > Available Product List Sort By* in the Commerce Admin. |
| `children` | [String!] | List of subcategories by category ID. For example, `123`, `456`, or `789`. |
| `defaultSortBy` | String | Default sort by option. For example, `name`, `position`, or `size`. Maps to the category configuration *Display Settings > Available Product List Sort By* in the Commerce Admin. |
| `id` | ID! | The category ID. For example, `123`, `456`, or `789`. Maps to Display Settings > Default Product List Sort By in the Admin. |
| `level` | Int | Indicates the depth of the category within the tree. The root category is a level 1 category. For example, `men` is level 1, `men/clothing` is level 2, and `men/clothing/shorts` is level 3. |
| `name` | String | The category display name. For example, `Electronics`, `Clothing`, or `Books`. |
| `parentId` | String! | ID of the parent. For example, `123`, `456`, or `789`. |
| `path` | String | The path to the category as a string of category IDs separated by slashes (`/`). For example, `1/2/20`. |
| `position` | Int | The position of the category relative to other categories at the same level in the tree. Merchants set this value in the Admin to control display order in storefront navigation. A lower value means the category appears first. For example, `1`, `2`, `3`, or `10`. |
| `roles` | [String!]! | Storefront labels assigned during category ingestion that describe visibility and placement. Use them in your storefront logic (for example, show only `active` categories in navigation) or pass matching values in the query `roles` argument to filter results. For example, `active`, `show_in_menu`, `show_on_plp`, or `show_in_search`. |
| `urlKey` | String | The part of the URL that identifies the category. For example, `electronics`, `clothing`, or `books`. |
| `urlPath` | String | The URL path for the category URL path. For example, `men/bottoms-men` or `men/tops-men/jackets-men`. |

### CategoryViewInterface attributes

`CategoryViewInterface` defines the shared category metadata that `CategoryView` implements: identity and hierarchy (`id`, `name`, `level`, `path`, `position`), URL segments (`urlKey`, `urlPath`), product listing sort options (`availableSortBy`, `defaultSortBy`), and storefront roles (`roles`). The `CategoryView` type adds tree-navigation fields (`children`, `parentId`) that are not on the interface.

| Field | Data Type | Description |
| --- | --- | --- |
| `availableSortBy` | [String] | List of available sort by options. For example, `name`, `position`, or `size`. |
| `defaultSortBy` | String | Default sort by option. For example, `name`, `position`, or `size`. |
| `id` | ID! | Category ID. For example, `123`, `456`, or `789`. |
| `level` | Int | The level of the category. The root category is a level 1 category. For example, `men` is level 1, `men/clothing` is level 2, and `men/clothing/shorts` is level 3. |
| `name` | String | Category name. For example, `Electronics`, `Clothing`, or `Books`. |
| `path` | String | Category path. For example, `1/2/20` or `/electronics/laptops`. |
| `position` | Int | The position of the category relative to other categories at the same level in the tree. For example, `1`, `2`, `3`, or `10`. |
| `roles` | [String] | Storefront labels assigned during category ingestion that describe visibility and placement. Use them in your storefront logic (for example, show only `active` categories in navigation) or pass matching values in the query `roles` argument to filter results. For example, `active`, `show_in_menu`, `show_on_plp`, or `show_in_search`. |
| `urlKey` | String | Category URL key. For example, `electronics`, `clothing`, or `books`. |
| `urlPath` | String | Category URL path. For example, `/electronics/laptops`, `/clothing/shirts`, or `/books/fiction`. |
