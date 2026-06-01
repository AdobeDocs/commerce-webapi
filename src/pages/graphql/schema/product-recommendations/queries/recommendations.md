---
title: recommendations query | GraphQL Developer Guide
description: Describes how to construct and use the Product Recommendations recommendations query.
keywords:
  - GraphQL
  - Services
---

# recommendations query

The `recommendations` query returns information about product recommendation blocks for a given SKU.

Merchants must have both Product Recommendations and Catalog Service (v2.2.0+) installed to get complete data through the storefront gateway.

<InlineAlert variant="info" slots="text" />

The `recommendations` query does not support the `alternateEnvironmentId` attribute.

The [Commerce API playground](https://experienceleague.adobe.com/developer/commerce/storefront/playgrounds/commerce-services/) provides a sample `recommendations` query that you can run against a live instance of Adobe Commerce with Luma sample data. Note that the responses may vary, depending on the configuration of the Commerce instance.

## Required headers

You must specify the following HTTP headers to run this query.

Header | Description
--- | ---
`Magento-Customer-Group` | Specify the [customer group code](#find-the-customer-group-code) for the API request.
`Magento-Environment-Id` | This value is displayed at **System** > **Commerce Services Connector** > **SaaS Identifier** > **Data Space ID** or can be obtained by running the `bin/magento config:show services_connector/services_id/environment_id` command.
`Magento-Store-Code`| The code assigned to the store associated with the active store view. For example, `main_website_store`.
`Magento-Store-View-Code`| The code assigned to the active store view. For example, `default`.
`Magento-Website-Code`| The code assigned to the website associated with the active store view. For example, `base`.

<Edition slots="text" backgroundcolor="blue"/>

[PaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions)

`X-Api-Key` | Set this value to the [unique API key](https://experienceleague.adobe.com/en/docs/commerce-merchant-services/user-guides/integration-services/saas#genapikey) generated for your Commerce environment.

### Find the customer group code

The customer group code is the encrypted value of the customer group ID, which determines discounts and tax class for pricing contexts. For B2B implementations, the customer group ID also determines the Shared Catalog context.

Use one of the following codes for a default customer group based on your requirements.

Customer Group | Code
---------------| -----------------
**NOT LOGGED IN** | `b6589fc6ab0dc82cf12099d1c2d40ab994e8410c`
**General** | `356a192b7913b04c54574d18c28d46e6395428ab`
**Wholesale** | `da4b9237bacccdf19c0760cab7aec4a8359010b0`
**Retailer** |`77de68daecd823babbb58edb1c8e14d7106e83bb`

For merchant-defined groups, the customer group code is the encrypted value of the ID, `sha1(<customer_group_id>)`.

For B2B implementations, the customer group code is the encrypted value of the customer group ID associated with the shared catalog, `sha1(<customer_group_id>)`.

<InlineAlert variant="info" slots="text"/>

Find a list of available customer group IDs from the Admin (**Customers** > **Customer Groups**). For details, see [Customer Groups](https://experienceleague.adobe.com/en/docs/commerce-admin/customers/customer-groups) and [Shared Catalogs](https://experienceleague.adobe.com/en/docs/commerce-admin/b2b/shared-catalogs/catalog-shared) in the _Merchant Guide_.

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
`pageType` | PageType  | An enum indicating the type of page on which recommendations are requested. Possible values are Cart, Category, Checkout, CMS, PageBuilder and Product.
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
