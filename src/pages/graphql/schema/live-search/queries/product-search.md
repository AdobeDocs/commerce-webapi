---
title: productSearch query | Commerce Web APIs
edition: ee
description: Describes how to construct and use the Live Search productSearch query.
---

# productSearch query

Live Search uses the `productSearch` query to search for products instead of the `products` query, which is provided with Adobe Commerce and Magento Open Source. Although the two queries are functionally similar, they have different input requirements. The `products` query returns information that is relevant for layered navigation, while the `productSearch` query returns faceting data and other features that are specific to Live Search.

## Syntax

```graphql
productSearch(
    phrase: String!
    context: [QueryContextInput!]
    current_page: Int = 1
    page_size: Int = 20
    sort: [ProductSearchSortInput!]
    filter: [SearchClauseInput!]
): ProductSearchResponse!
```

The `productSearch` query accepts the following fields as input:

- `phrase` - The string of text to search for. This field is required but an empty string may be used if only filtering by `category` or `categoryPath`.
- `context` - Query context that allows customized search results to be returned based on the customer group passed. This is used to get the view history of a SKU.
- `current_page` and `page_size`- These optional fields allow the search results to be broken down into smaller groups so that a limited number of items are returned at a time. The default value of `page_size` is `20`, and the default value for `current_page` is `1`. In the response, counting starts at page one.
- `sort` - An object that defines one or more product attributes to use to sort the search results. The default sortable product attributes in Luma are `price`, `name`, and `position`. A product's position is assigned within a category.
- `filter` - An object that defines one or more product attributes or categories used to narrow the search results. In the Luma theme, the `sku`, `price`, and `size` attributes are among the product attributes that can be used to filter query results.

<InlineAlert variant="info" slots="text" />

The initial release does not allow for different merchandising strategies per customer group.

### phrase

The `phrase` field contains the text that a shopper enters on the storefront. Live Search applies all configured rules, synonyms, and other configuration settings to determine the search results. All `productSearch` queries must contain the `phrase` field. If the query filters on a category or category path, the value of the `phrase` field can be an empty string.

The following example sets `pants` as the phrase to search for:

```graphql
phrase: "pants"
```

<InlineAlert variant="info" slots="text"/>

Use the [`attributeMetadata` query](./attribute-metadata.md) to return a list of product attributes that can be used to define a filter.

### context

 The `context` object passes both the customer group code and user view history to the query.
 If no value is passed, the "Not Logged In" group is used.

 ```graphql
 context: {
  customerGroup: "b6589fc6ab0dc82cf12099d1c2d40ab994e8410c",
  userViewHistory: [
    {
      sku: "sku-01",
      dateTime: "2022-10-13T20:53:21.338Z"
    },
    {
      sku: "sku-02",
      dateTime: "2022-10-13T20:53:21.338Z"
    }
  ]
} 
```

### current_page

The `currentPage` field specifies which page of results to return. If no value is specified, the first page is returned.

The system returns an error if you specify a value that is greater than the number of available pages.

The following example sets the current page to 5:

```graphql
current_page: 5
```

### page_size

When you run a query, you do not know in advance how many items the query will return. The query could return a few items, or it could return hundreds. The `page_size` field determines how many items to return at one time. If you use the default value of 20, and the query returns 97 items, the results are stored in four pages containing 20 items each, and one page containing 17 items.

The following example sets the page size to 10:

```graphql
page_size: 10
```

### sort

The `sort` field allows you to specify one or more product attributes to be used to sort the results. If you specify more than one attribute, Live Search sorts by the first field listed. If any items have the same value, those items are sorted by the secondary field. The value for each field can be set to either `ASC` or `DESC`.

The following example causes the query to filter first by `price`, and then by `name`:

```graphql
sort: [
    {
      attribute: "price"
      direction: DESC
    }
    {
      attribute: "name"
      direction: DESC
    }
]
```

## Filtering

The `filter` attribute is the part of the query that uses product attributes as facets or categories that are defined in the Admin. For example, to filter results by color, a color facet must be defined in Live Search, based on the existing `color` attribute.

### Filtering by attributes

An attribute filter consists of a product `attribute`, a comparison operator, and the value that is being searched for. Together, they help narrow down the search results, based on shopper input. For example, if you want to set up a filter for jackets based on size, you could set the product attribute to `size`. To filter on medium-sized jackets only, set the `eq` field to `M`. To filter on both medium- and large-sized jackets, set the `in` field to `["M", "L"]`. If an attribute is numeric, you can filter on it as a price range, such as between $50 and $100. To filter on a price range, set the `attribute` to `price`, and assign the `range` field with `from` and `to` values as `50` and `100`, respectively.

You can define multiple filters in the same call. The following example filters on the price and size:

```graphql
filter: [
    {
      attribute: "price"
      range: {
        from: 50
        to: 100
      }
    },
    {
      attribute: "size"
      in: ["M", "L"]
    }
]
```

An attribute must be set to `filterableInSearch: true` if it is passed in as part of the filter. Otherwise, a "500 error" is returned.

Only facets specified in Live Search are returned.

<InlineAlert variant="info" slots="text"/>

Use the [`attributeMetadata` query](./attribute-metadata.md) to return a list of product attributes that can be used to define a filter.

### Filtering by categories

Results can be filtered by categories defined in the Admin with the `categories` and `categoryPath` filters.
They are slightly different in the type of facets returned:

`categories` is preferred when selecting from a category filter. Filtering on `categories` with "women/bottoms-women" and the phrase `pants`, the category facets returned are "promotions/pants-all", "women/bottoms-women/pants-women", and similar.

`categoryPath` is preferred when browsing by category. `categoryPath` returns the immediate subcategories of the category path being filtered. Filtering on `categoryPath` with "women/bottoms-women", the category facets returned are its children such as "women/bottoms-women/pants-women" and "women/bottoms-women/shorts-women".

A `phrase` attribute is required but it may be an empty string if you are filtering by `category` or `categoryPath`.

Pinned categories are always returned, regardless of the filtered category.

#### categoryPath

This example shows how to filter returned facets when browsing a category page.

`categoryPath` performs strict filtering, meaning that the facets returned are limited to the immediate children of the current category page.

The following snippet corresponds to a shopper selecting **Women** > **Bottoms**.

```graphql
filter:[
  {
    attribute:"categoryPath",
    eq: "women/bottoms-women"
    }
  ] 
```

#### categories

`categories` can be used as a filter in a query when a category facet is selected in the layered navigation.
This does not result in strict filtering when used by itself.

```graphql
filter: [
  {
    attribute:"categories", 
    in: "women/bottoms-women"
  },
  {
    attribute: "visibility",
    in: ["Catalog", "Catalog, Search"]
  },
]
```

Category filters can be used together.
Here, the shopper navigates to "Womens -> Bottoms" and filters on "pants". This query returns both "Pants" and "Shorts" as facets in the layered navigation.

```graphql
filter: [
  {
    attribute: "visibility",
    in: ["Catalog", "Catalog, Search"]
  },
  {
    attribute:"categoryPath",
    eq: ["women/bottoms-women"]
  },
  {
    attribute:"categories",
    in: ["women/bottoms-women/pants-women"]
  }
]
```

## Interpret the results

The response to the `productSearch` query can contain details about each product returned and information about the ordering of the results.

### Facets

[Facets](https://experienceleague.adobe.com/docs/commerce-merchant-services/live-search/live-search-admin/facets/facets.html) provide a method of high-performance filtering that uses multiple dimensions of attribute values as search criteria. Faceted search is similar, but considerably more advanced than the native layered navigation functionality.

The `facets` object contains details about each facet that affects the search results. By default, Live Search provides static facets for the `categories` and `price` product attributes that are pinned to the top of the Filters list in the storefront. The merchant can also pin other attributes to this list.

Dynamic facets appear only when relevant, and the selection changes according to the products returned. In the storefront Filters list, dynamic facets appear in alphabetic order after any pinned facets. To streamline search results, facets are set to `dynamic` by default.

Intelligent dynamic facets measure the frequency that an attribute appears in the results list and its prevalence throughout the catalog. Live Search uses this information to determine the order of returned products. This makes it possible to return two types of dynamic facets: Those that are most significant, followed by those that are most popular.

The `buckets` subobject divides the data into manageable groups. For the `price` and similar numeric attributes, each bucket defines a price range and counts the items within that price range. Meanwhile, the buckets associated with the `categories` attribute list details about each category a product is a member of. The contents of dynamic facet buckets vary.

The following snippet returns all information about the applicable facets for a search:

```graphql
facets {
    attribute
    title
    type
    buckets {
        title
        ... on RangeBucket {
          title
          to
          from
          count
        }
        ... on ScalarBucket {
          title
          id
          count
        }
        ... on StatsBucket {
          title
          min
          max
        }
    }
}
```

### Items list

The `items` object primarily provides details about each item returned. If Catalog Service is not installed, then you must specify the `product` field to return details about each item. The `product` field uses the [`ProductInterface`](../../products/interfaces/attributes/), which is defined in Adobe Commerce and Magento Open Source, to return details about the product. A typical query might return the product name, price, SKU, and image.

The following snippet returns relevant information about each item when Catalog Service is not installed or used:

```graphql
items {
    product {
        name
        sku
        price_range {
          maximum_price {
            final_price {
              value
              currency
            }
          }
          minimum_price {
            final_price {
              value
              currency
            }
          }
        }
    }
}
```

If [Catalog Service](https://experienceleague.adobe.com/docs/commerce-merchant-services/catalog-service/guide-overview.html) is installed, you can optionally use the `productView` field instead of the `product` field to return product details. Catalog Service uses [Catalog Sync](https://experienceleague.adobe.com/docs/commerce-merchant-services/user-guides/data-services/catalog-sync.html) to manage product data, resulting in query responses with less latency than is possible with the `ProductInterface`. With Catalog Service, the structure of the pricing information varies, depending on whether the product is designated as a `SimpleProduct` (simple, downloadable, gift card) or as a `ComplexProduct` (configurable, grouped, or bundle).

The following Catalog Service snippet returns relevant information about each item:

```graphql
items {
  productView {
    name
    sku
    ... on SimpleProductView {
      price {
        final {
          amount {
            value
            currency
          }
        }
        regular {
          amount {
            value
            currency
          }
        }
      }
    }
    ... on ComplexProductView {
      options {
        id
        title
        required
        values {
          id
          title
        }
      }
      priceRange {
        maximum {
          final {
            amount {
              value
              currency
            }
          }
          regular {
            amount {
              value
              currency
            }
          }
        }
        minimum {
          final {
            amount {
              value
              currency
            }
          }
          regular {
            amount {
              value
              currency
            }
          }
        }
      }
    }
  }
}
```

<InlineAlert variant="info" slots="text"/>

The Catalog Service [products query](../../catalog-service/products.md) describes the contents of the `ProductView` object.

The `items` object can also optionally return highlighted text that shows the matching search terms.

### Other fields and objects

The query response can also contain the following top-level fields and objects:

- `page_info` - An object that lists the `page_size` and `current_page` input arguments and the total number of pages available.
- `suggestions` - An array of strings that include the names of products and categories that exist in the catalog that are similar to the search query.
- `total_count` - The number of products returned.

## Required headers

You must specify the following HTTP headers to run this query.

import Docs from '/src/_includes/graphql/live-search-headers.md'

<Docs />

## Example usage

This is an example of using Live Search to retrieve and filter results. The query uses the core `ProductInterface` to access product information. As a result, the query has a longer response time than using [Catalog Service](https://experienceleague.adobe.com/docs/commerce-merchant-services/catalog-service/guide-overview.html) to retrieve this information.

For an example of using Live Search with Catalog Service, see [Catalog Service productSearch query](../../catalog-service/queries/product-search.md). Other than returning the `productView` object, all other attributes are the same.

In the example below, there is no search `phrase` passed and results are filtered on the "women/bottoms-women" category. In the response, two categories are returned:

```json
{
  "title": "women/bottoms-women/shorts-women",
  "__typename": "ScalarBucket",
  "id": "28",
  "count": 12
},
{
  "title": "women/bottoms-women/pants-women",
  "__typename": "ScalarBucket",
  "id": "27",
  "count": 13
}
```

If the `phrase` "pants" is added, only one category is returned and "shorts" are not returned by the query:

```json
{
  "title": "women/bottoms-women/pants-women",
  "__typename": "ScalarBucket",
  "id": "27",
  "count": 13
}
```

**Request:**

```graphql
{
  productSearch(
    phrase: ""
    sort: [
      { attribute: "price", direction: DESC }
      { attribute: "name", direction: DESC }
    ]
    filter: [
      { attribute: "categoryPath", in: ["women/bottoms-women"] }
    ]
    page_size: 9
  ) {
    total_count
    page_info {
      current_page
      page_size
      total_pages
    }
    facets {
      attribute
      title
      type
      buckets {
        title
        __typename
        ... on RangeBucket {
          title
          to
          from
          count
        }
        ... on ScalarBucket {
          title
          id
          count
        }
        ... on StatsBucket {
          title
          min
          max
        }
      }
    }
    items {
      product {
        name
        sku
      }
    }
    suggestions
  }
}
```

**Response:**

<details>
<summary><b>Response</b></summary>

```json
"data": {
  "productSearch": {
    "total_count": 25,
    "page_info": {
      "current_page": 1,
      "page_size": 9,
      "total_pages": 3
    },
    "facets": [
      {
        "attribute": "categories",
        "title": "Categories",
        "type": "PINNED",
        "buckets": [
          {
            "title": "women/bottoms-women/shorts-women",
            "__typename": "ScalarBucket",
            "id": "28",
            "count": 12
          },
          {
            "title": "women/bottoms-women/pants-women",
            "__typename": "ScalarBucket",
            "id": "27",
            "count": 13
          }
        ]
      },
      {
        "attribute": "price",
        "title": "Price",
        "type": "PINNED",
        "buckets": [
          {
            "title": "0.0-25.0",
            "__typename": "RangeBucket",
            "to": 25,
            "from": 0,
            "count": 1
          },
          {
            "title": "25.0-50.0",
            "__typename": "RangeBucket",
            "to": 50,
            "from": 25,
            "count": 20
          },
          {
            "title": "50.0-75.0",
            "__typename": "RangeBucket",
            "to": 75,
            "from": 50,
            "count": 4
          }
        ]
      },
      {
        "attribute": "material",
        "title": "Material",
        "type": "POPULAR",
        "buckets": [
          {
            "title": "Organic Cotton",
            "__typename": "ScalarBucket",
            "id": "Organic Cotton",
            "count": 13
          },
          {
            "title": "Spandex",
            "__typename": "ScalarBucket",
            "id": "Spandex",
            "count": 11
          },
          {
            "title": "Polyester",
            "__typename": "ScalarBucket",
            "id": "Polyester",
            "count": 7
          },
          {
            "title": "Cotton",
            "__typename": "ScalarBucket",
            "id": "Cotton",
            "count": 4
          },
          {
            "title": "LumaTech&trade;",
            "__typename": "ScalarBucket",
            "id": "LumaTech&trade;",
            "count": 5
          },
          {
            "title": "CoolTech&trade;",
            "__typename": "ScalarBucket",
            "id": "CoolTech&trade;",
            "count": 4
          },
          {
            "title": "Mesh",
            "__typename": "ScalarBucket",
            "id": "Mesh",
            "count": 3
          },
          {
            "title": "Cocona&reg; performance fabric",
            "__typename": "ScalarBucket",
            "id": "Cocona&reg; performance fabric",
            "count": 4
          }
        ]
      },
      {
        "attribute": "new",
        "title": "New",
        "type": "POPULAR",
        "buckets": [
          {
            "title": "no",
            "__typename": "ScalarBucket",
            "id": "no",
            "count": 21
          },
          {
            "title": "yes",
            "__typename": "ScalarBucket",
            "id": "yes",
            "count": 4
          }
        ]
      },
      {
        "attribute": "color",
        "title": "Color",
        "type": "POPULAR",
        "buckets": [
          {
            "title": "Blue",
            "__typename": "ScalarBucket",
            "id": "Blue",
            "count": 14
          },
          {
            "title": "Black",
            "__typename": "ScalarBucket",
            "id": "Black",
            "count": 12
          },
          {
            "title": "Orange",
            "__typename": "ScalarBucket",
            "id": "Orange",
            "count": 9
          },
          {
            "title": "Green",
            "__typename": "ScalarBucket",
            "id": "Green",
            "count": 8
          },
          {
            "title": "Purple",
            "__typename": "ScalarBucket",
            "id": "Purple",
            "count": 8
          },
          {
            "title": "Gray",
            "__typename": "ScalarBucket",
            "id": "Gray",
            "count": 8
          },
          {
            "title": "Red",
            "__typename": "ScalarBucket",
            "id": "Red",
            "count": 7
          },
          {
            "title": "White",
            "__typename": "ScalarBucket",
            "id": "White",
            "count": 5
          }
        ]
      },
      {
        "attribute": "eco_collection",
        "title": "Eco Collection",
        "type": "POPULAR",
        "buckets": [
          {
            "title": "no",
            "__typename": "ScalarBucket",
            "id": "no",
            "count": 18
          },
          {
            "title": "yes",
            "__typename": "ScalarBucket",
            "id": "yes",
            "count": 7
          }
        ]
      },
      {
        "attribute": "climate",
        "title": "Climate",
        "type": "POPULAR",
        "buckets": [
          {
            "title": "Indoor",
            "__typename": "ScalarBucket",
            "id": "Indoor",
            "count": 20
          },
          {
            "title": "Hot",
            "__typename": "ScalarBucket",
            "id": "Hot",
            "count": 16
          },
          {
            "title": "Mild",
            "__typename": "ScalarBucket",
            "id": "Mild",
            "count": 17
          },
          {
            "title": "Warm",
            "__typename": "ScalarBucket",
            "id": "Warm",
            "count": 15
          },
          {
            "title": "All-Weather",
            "__typename": "ScalarBucket",
            "id": "All-Weather",
            "count": 10
          },
          {
            "title": "Spring",
            "__typename": "ScalarBucket",
            "id": "Spring",
            "count": 7
          },
          {
            "title": "Cool",
            "__typename": "ScalarBucket",
            "id": "Cool",
            "count": 3
          }
        ]
      },
      {
        "attribute": "size",
        "title": "Size",
        "type": "POPULAR",
        "buckets": [
          {
            "title": "28",
            "__typename": "ScalarBucket",
            "id": "28",
            "count": 25
          },
          {
            "title": "29",
            "__typename": "ScalarBucket",
            "id": "29",
            "count": 25
          },
          {
            "title": "30",
            "__typename": "ScalarBucket",
            "id": "30",
            "count": 7
          },
          {
            "title": "31",
            "__typename": "ScalarBucket",
            "id": "31",
            "count": 7
          },
          {
            "title": "32",
            "__typename": "ScalarBucket",
            "id": "32",
            "count": 7
          }
        ]
      },
      {
        "attribute": "activity",
        "title": "Activity",
        "type": "POPULAR",
        "buckets": []
      },
      {
        "attribute": "custom_price",
        "title": "Custom Price",
        "type": "POPULAR",
        "buckets": []
      }
    ],
    "items": [
      {
        "product": {
          "name": "Sahara Leggings",
          "sku": "WP05"
        }
      },
      {
        "product": {
          "name": "Cora Parachute Pant",
          "sku": "WP04"
        }
      },
      {
        "product": {
          "name": "Deirdre Relaxed-Fit Capri",
          "sku": "WP12"
        }
      },
      {
        "product": {
          "name": "Gwen Drawstring Bike Short",
          "sku": "WSH03"
        }
      },
      {
        "product": {
          "name": "Ina Compression Short",
          "sku": "WSH11"
        }
      },
      {
        "product": {
          "name": "Diana Tights",
          "sku": "WP06"
        }
      },
      {
        "product": {
          "name": "Erika Running Short",
          "sku": "WSH12"
        }
      },
      {
        "product": {
          "name": "Artemis Running Short",
          "sku": "WSH04"
        }
      },
      {
        "product": {
          "name": "Sybil Running Short",
          "sku": "WSH08"
        }
      }
    ],
    "suggestions": []
  }
}
```

</details>

## Input fields

The `productSearch` query accepts the following fields as input:

Field | Data Type | Description
--- | --- | ---
`context` | [[QueryContextInput!]](#QueryContextInput) | Query context that allows customized search results to be returned based on the context passed
`current_page` | Int | Specifies which page of results to return. Default value: 1
`filter` | [[SearchClauseInput!]](#SearchClauseInput) | Identifies which attributes to search for and return
`page_size` | Int | Specifies the maximum number of results to return at once. Default value: 20
`phrase` | String! | The text to filter on. Can be an empty string.
`sort` | [[ProductSearchSortInput!]](#ProductSearchSortInput) | Specifies which attribute to sort on, and whether to return the results in ascending or descending order

### SearchClauseInput data type {#SearchClauseInput}

The `SearchClauseInput` object can contain the following fields:

Field | Data Type | Description
--- | --- | ---
`attribute` | String! | The attribute code of a product attribute
`eq` | String | A string value to filter on
`in` | [String] | An array of string values to filter on
`range` | [SearchRangeInput](#SearchRangeInput) | A range of numeric values to filter on

#### SearchRangeInput data type {#SearchRangeInput}

The `SearchRangeInput` object can contain the following fields:

Field | Data Type | Description
--- | --- | ---
`from` | Float | The minimum value to filter on. If not specified, the value of `0` is applied
`to` | Float | The maximum value to filter on

### ProductSearchSortInput data type {#ProductSearchSortInput}

The `ProductSearchSortInput` object can contain the following fields.

Field | Data Type | Description
--- | --- | ---
`attribute` | String! | The attribute code of a product attribute
`direction` | SortEnum! | ASC (ascending) or DESC (descending)

### QueryContextInput data type {#QueryContextInput}

The `QueryContextInput` object can contain the following fields.

Field | Data Type | Description
--- | --- | ---
`customerGroup` | String! | The customer group code. For storefront clients, this value is available in the `dataservices_customer_group` cookie.
`userViewHistory` | [ViewHistoryInput!]((#ViewHistoryInput)) | List of SKUs with timestamps. Used in "Recommended for you" ranking.

### ViewHistoryInput data type {#ViewHistoryInput}

The `ViewHistoryInput` object can contain the following fields.

Field | Data Type | Description
--- | --- | ---
`dateTime` | String! | Timestamps when the SKU was viewed
`sku` | String! | The SKU of the view history being requested

## Output fields

The `AttributeMetadataResponse` return object can contain the following fields:

Field | Data Type | Description
--- | --- | ---
`facets` | [[Aggregation]](#Aggregation) | Provides details about the static and dynamic facets relevant to the search
`items` | [[ProductSearchItem]](#ProductSearchItem) | An array of products returned by the query
`page_info` | [SearchResultPageInfo](#SearchResultPageInfo) | Contains information for rendering pages of search results
`related_terms` | [String] | Reserved for future use
`suggestions` | [String] | An array of product URL keys that are similar to the search query. A maximum of five items are returned
`total_count` | Int | The total number of items returned

### Aggregation data type {#Aggregation}

Field | Data Type | Description
--- | --- | ---
`attribute` | String! | The attribute code of the filter item
`buckets` | [[Bucket]!](#Bucket) | A container that divides the data into manageable groups. For example, attributes that can have numeric values might have buckets that define price ranges
`title` | String! | The filter name displayed in layered navigation
`type` | AggregationType | Identifies the data type as one of the following: `INTELLIGENT`, `PINNED`, or `POPULAR`

### Bucket data type {#Bucket}

The `Bucket` object defines one field, `title`. However, the object has three implementations that can be used to provide greater detail.

Field | Data Type | Description
--- | --- | ---
`title` | String! | A human-readable name of a bucket

#### RangeBucket implementation

Implement `RangeBucket` on numeric product fields.

Field | Data Type | Description
--- | --- | ---
`count` | Int! | The number of items in the bucket
`from` | Float! | The minimum amount in a price range
`title` | String! | The display text defining the price range
`to` | Float | The maximum amount in a price range

#### ScalarBucket implementation

Implement `ScalarBucket` on string and other scalar product fields.

Field | Data Type | Description
--- | --- | ---
`count` | Int! | The number of items in the bucket
`id` | ID! | An identifier that can be used for filtering and may contain non-human readable data
`title` | String! | The display text that defines the scalar value

#### StatsBucket implementation

Implement `StatsBucket` to retrieve statistics across multiple buckets.

Field | Data Type | Description
--- | --- | ---
`max` | Float! | The maximum value
`min` | Float! | The minimum value
`title` | String! | The display text defining the bucket

### ProductSearchItem data type {#ProductSearchItem}

The `ProductSearchItem` data type can contain the following fields:

Field | Data Type | Description
--- | --- | ---
`appliedQueryRule` | AppliedQueryRule | The query rule type that was applied to this product, if any (in preview mode only, returns null otherwise). Possible values: `BOOST`, `BURY`, and `PIN`
`product` | [ProductInterface!](../../products/interfaces/attributes/) | Contains details about the product. Go to `productInterface` for more information.
`productView` | ProductView | If Catalog Service is installed, contains details about the product view. The Catalog Service [`products` query](../../catalog-service/queries/products/) fully describes this object.

### SearchResultPageInfo data type {#SearchResultPageInfo}

The `SearchResultPageInfo` data type can contain the following fields:

Field | Data Type | Description
--- | --- | ---
`current_page` | Int | Specifies which page of results to return
`page_size` | Int | Specifies the maximum number of items to return
`total_pages` | Int | Specifies the total number of pages returned
