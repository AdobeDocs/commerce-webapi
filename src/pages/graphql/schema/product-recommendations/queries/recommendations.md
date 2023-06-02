---
title: recommendations query | GraphQL Developer Guide
edition: ee
description: Describes how to construct and use the Product Recommendations recommendations query.
---

# recommendations query

The `recommendations` query returns information about product recommendation blocks for a given SKU.

## Syntax

```graphql
type Query {
    recommendations(
        currentSku: String,
        userPurchaseHistory: [PurchaseHistory],
        userViewHistory: [ViewHistory],
        cartSkus: [String],
        category: String,
        pageType: PageType
    ): Recommendations
}
```

## Example usage

The following query returns product recommendations for a related SKU.

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
{
    "extensions": {
        "request-id": "Eea6hXWBLa5H8sjTdVj4BLdfrvFg4uM2"
    },
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
}
```

## Input fields

Field | Data type | Description
--- | --- | ---
`cartSKUs` | [String] | SKUs of the products in the cart.
`category` | String | The category currently being viewed.
`currentSKU` | String |  SKU of the product currently being viewed on the product detail page.
`pageType` | PageType | Type of page on which recommendations are requested.
`userPurchaseHistory` | [PurchaseHistory] | User purchase history with timestamp.
`userViewHistory` | [ViewHistory] | User view history with timestamp.

### PurchasedHistory

Field | Data type | Description
--- | --- | ---
`date` | DateTime | Date of purchase
`items` | [String]! | Items purchased

### ViewHistory

Field | Data type | Description
--- | --- | ---
`date` | DateTime | Date the items were viewed
`sku` | [String]! | SKU of items viewed

## Output fields

import Output from '/src/pages/_includes/graphql/catalog-service/categories.md'

<Output />
