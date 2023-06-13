---
title: recommendations query | GraphQL Developer Guide
edition: ee
description: Describes how to construct and use the Product Recommendations recommendations query.
---

import BetaNote from '/src/pages/_includes/graphql/notes/beta.md'

# recommendations query

<BetaNote />

The `recommendations` query returns information about product recommendation blocks for a given SKU.

## Required headers

You must specify the following HTTP headers to run this query.

import Docs from '/src/pages/_includes/graphql/catalog-service/headers.md'

<Docs />

## Syntax

```graphql
recommendations(
    currentSku: String,
    userPurchaseHistory: [PurchaseHistory],
    userViewHistory: [ViewHistory],
    cartSkus: [String],
    category: String,
    pageType: PageType
): Recommendations
```

## Example usage

The following query returns product recommendations for SKU `MP01`.

**Request:**

```graphql
{
recommendations(currentSku: "MP01", pageType: Product) {
    totalResults
    results {
        unitId
        unitName
        totalProducts
        pageType
        typeId
        storefrontLabel
        displayOrder
        productsView {
            sku
            rank
            score
            queryType
            categories
            visibility
        }
    }
}
}
```

**Response:**

```json
"data": {
    "recommendations": {
        "totalResults": 1,
        "results": [
            {
                "unitId": "6401de2a-7499-4648-847c-b1d62f6ee947",
                "unitName": "PDMLT",
                "totalProducts": 5,
                "pageType": "Product",
                "typeId": "more-like-this",
                "storefrontLabel": "PDMLT",
                "displayOrder": 2,
                "productsView": [
                    {
                        "sku": "MP08",
                        "rank": 1,
                        "score": 80.98603,
                        "queryType": "primary",
                        "categories": [
                            "collections/yoga-new",
                            "men/bottoms-men",
                            "men/bottoms-men/pants-men",
                            "promotions/pants-all",
                            "sale"
                        ],
                        "visibility": "Catalog, Search"
                    },
                    {
                        "sku": "WP05",
                        "rank": 2,
                        "score": 47.418564,
                        "queryType": "primary",
                        "categories": [
                            "women/bottoms-women",
                            "women/bottoms-women/pants-women",
                            "promotions/pants-all",
                            "collections/erin-recommends"
                        ],
                        "visibility": "Catalog, Search"
                    },
                    {
                        "sku": "WP04",
                        "rank": 3,
                        "score": 46.906868,
                        "queryType": "primary",
                        "categories": [
                            "women/bottoms-women",
                            "women/bottoms-women/pants-women",
                            "promotions/pants-all"
                        ],
                        "visibility": "Catalog, Search"
                    },
                    {
                        "sku": "WP02",
                        "rank": 4,
                        "score": 44.674534,
                        "queryType": "primary",
                        "categories": [
                            "women/bottoms-women",
                            "women/bottoms-women/pants-women",
                            "promotions/pants-all",
                            "collections/performance-fabrics"
                        ],
                        "visibility": "Catalog, Search"
                    },
                    {
                        "sku": "WP01",
                        "rank": 5,
                        "score": 41.731136,
                        "queryType": "primary",
                        "categories": [
                            "women/bottoms-women",
                            "women/bottoms-women/pants-women",
                            "promotions/pants-all",
                            "collections/performance-fabrics"
                        ],
                        "visibility": "Catalog, Search"
                    }
                ]
            }
        ]
    }
}
```

## Input fields

Field | Data type | Description
--- | --- | ---
`cartSKUs` | [String] | SKUs of the products in the cart.
`category` | String | The category currently being viewed.
`currentSKU` | String |  SKU of the product currently being viewed on the product detail page.
`pageType` | Enum | Type of page on which recommendations are requested. Possible values are Cart, Category, Checkout, CMS, PageBuilder and Product.
`userPurchaseHistory` | [PurchaseHistory] | User purchase history with timestamp.
`userViewHistory` | [ViewHistory] | User view history with timestamp.

### PurchasedHistory

Field | Data type | Description
--- | --- | ---
`date` | DateTime | Date of purchase
`items` | [String]! | A list of items purchased

### ViewHistory

Field | Data type | Description
--- | --- | ---
`date` | DateTime | The time the items were viewed
`sku` | [String]! | A list of SKUs viewed

## Output fields

The `Recommendations` object contains details about recommended products for a given SKU. It contains the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`results` | [RecommendationUnit] | Array of recommendation units for recommended products
`totalResults` | Int | Total number of recommendation units for returned recommendation

### RecommendationUnit attributes

Attribute |  Data Type | Description
--- | --- | ---
`displayOrder` | Int | Order in which recommendation units are displayed
`pageType` | String | Page Type
`productsView` | [ProductView] | List of product view
`storefrontLabel` | String | Storefront label to be displayed on the storefront
`totalProducts` | Int | Total number of products returned for a recommendation
`typeId` | String | Type of recommendation
`unitId` | String | Id of the preconfigured unit
`unitName` | String | Name of the preconfigured unit

### ProductView interface

The `ProductView` return object is an interface that can contain the following fields. It is implemented by the `SimpleProductView` and `ComplexProductView` types. Both these types contain the same set of fields as `ProductView`.

Attribute |  Data Type | Description
--- | --- | ---
`categories` | [String] | List of categories to which the product belongs
`rank` | Int | Rank given to a product
`queryType` | String | Indicates if the product was retrieved from the primary or backup query
`score` | Float | Score indicating relevance of the product to the recommendation type
`sku` | String! | The product SKU
`visibility` | String | Visibility setting of the product
