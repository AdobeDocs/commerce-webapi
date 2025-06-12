---
title: productSearch query
description: Describes how to construct and use the productSearch query in both Live Search and Catalog Service.
keywords:
  - GraphQL
  - Services
  - Search
---

# productSearch query

This article discusses the `productSearch` query that is available in the Live Search and Catalog Service extension. While similar in structure and functionality, there are differences in what they output.

See [Boundaries and Limits](https://experienceleague.adobe.com/en/docs/commerce-merchant-services/live-search/boundaries-limits) for the latest recommendations for creating performant queries.

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

## Construct a productSearch query

Live Search uses the `productSearch` query to search for products instead of the `products` query, which is provided with Adobe Commerce and Magento Open Source. Although the two queries are functionally similar, they have different input requirements. The `products` query returns information that is relevant for layered navigation, while the `productSearch` query returns faceting data and other features that are specific to Live Search.

<InlineAlert variant="info" slots="text" />

The Catalog Service `productSearch` query uses Live Search to return details about the SKUs specified as input. [Learn more](#catalog-service).

The `productSearch` query accepts the following fields as input:

- `phrase` - The string of text to search for. This field is required but an empty string may be used if only filtering by `category` or `categoryPath`.
- `context` - (Live Search only) Query context that allows customized search results to be returned based on the customer group passed. This is used to get the view history of a SKU.
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

<InlineAlert variant="info" slots="text"/>

The `context` object is only applicable to Live Search.

The `context` object passes both the customer group code and user view history to the query. If no value is passed, the "Not Logged In" group is used.

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

### Filtering

The `filter` attribute is the part of the query that uses product attributes as facets or categories that are defined in the Admin. For example, to filter results by color, a color facet must be defined in Live Search, based on the existing `color` attribute.

#### Filtering by attributes

An attribute filter consists of a product `attribute`, a comparison operator, and the value that is being searched for. Together, they help narrow the search results, based on shopper input. For example:

- To set up a filter for jackets based on size, set the product attribute to `size`.
- To filter on medium-sized jackets only, set the `eq` field to `M`.
- To filter on both medium- and large-sized jackets, set the `in` field to `["M", "L"]`.

If an attribute is numeric, you can filter on it as a price range, such as between $50 and $100. For example, to filter on a price range, set the `attribute` to `price`, and assign the `range` field with `from` and `to` values as `50` and `100`, respectively. Products that are equal to the upper range are not included in the results. This aligns with how price ranges are defined for facets.

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

#### Filtering using search capability

<InlineAlert variant="info" slots="text"/>

This feature is in beta. For installation information, see the [Live Search guide](https://experienceleague.adobe.com/en/docs/commerce-merchant-services/live-search/install#install-the-live-search-beta) in the merchant documentation.

This beta supports three new capabilities:

- **Layered search** - Search within another search context - With this capability, you can undertake up to two layers of search for your search queries. For example:
  
  - **Layer 1 search** - Search for "motor" on "product_attribute_1".
  - **Layer 2 search** - Search for "part number 123" on "product_attribute_2". This example searches for "part number 123" within the results for "motor".

  Layered search is available for both `startsWith` search indexation and `contains` search indexation as described below:

- **startsWith search indexation** - Search using `startsWith` indexation. This new capability allows:

  - Searching for products where the attribute value starts with a particular string.
  - Configuring an "ends with" search so shoppers can search for products where the attribute value ends with a particular string. To enable an "ends with" search, the product attribute needs to be ingested in reverse and the API call should also be a reversed string.

- **contains search indexation** -Search an attribute using contains indexation. This new capability allows:

    - Searching for a query within a larger string. For example, if a shopper searches for the product number "PE-123" in the string "HAPE-123".

        - Note: This search type is different from the existing [phrase search](https://developer.adobe.com/commerce/services/graphql/live-search/product-search/#phrase), which performs an autocomplete search. For example, if your product attribute value is "outdoor pants", a phrase search returns a response for "out pan", but does not return a response for "oor ants". A contains search, however, does return a response for "oor ants".

Refer to the following examples to learn how to implement these new search capabilities in your Live Search API.

##### startsWith condition example

The following example shows how you can search the "manufacturer" product attribute using a `startsWith` value of "Sieme".

```graphql
filter: [  
  {  
    attribute: "manufacturer",  
    startsWith: "Sieme"  
  }  
]
```

##### contains condition example

The following example shows how you can search the "manufacturer" product attribute using a `contains` value of "auto". The result of this query would match manufacturers named "ABC Auto Company" and "ABCauto" for example.

```graphql
filter: [  
  {  
    attribute: "manufacturer",  
    contains: "auto"  
  }  
]
```

##### endsWith filter example

To search an attribute value using `endsWith`, you must reverse the attribute value when you ingest the data. Then, you can use the `startsWith` condition on the specific attribute. In the following example, the part number is actually: `PN-5763`.

```graphql
filter: [  
  {  
    attribute: "part_number_reverse",  
    startsWith: "3675-NP"  
  }  
]
```

**Example queries**

The following example shows how to search within search results using "motor" as the search phrase and filtering on "manufacturer" that "startsWith" the term "Sieme":

```graphql
productSearch(  
  phrase: "motor",  
    filter: [  
      {  
        attribute: "manufacturer",  
        startsWith: "Sieme"  
      }  
    ]  
)
```

The following example shows how to search within search results using "motor" as the search phrase and filtering on "part_number" that "startsWith" the term "PE-123":

```graphql
productSearch(  
  phrase: "motor",  
    filter: [  
      {  
        attribute: "part_number",  
        startsWith: "PE-123"  
      }  
    ]  
)
```

The following example shows how to search within search results using "motor" as the search phrase and filtering on "manufacturer" that "endsWith" the term "PE-123":

```graphql
productSearch(  
  phrase: "motor",  
    filter: [  
      {  
        attribute: "reverse_part_number",  
        startsWith: "321-EP"  
      }  
    ]  
)
```

The following example shows how to search within search results using "motor" as the search phrase and filtering on "description" that "contains" the phrase "warranty included":

```graphql
productSearch(  
  phrase: "motor",  
    filter: [  
      {  
        attribute: "description",  
        contains: "warranty included"  
      }  
    ]  
)
```

The following example shows how to search a particular attribute for `startsWith` but not search within the search result:

```graphql
productSearch(  
  phrase: "",  
    filter: [  
      {  
        attribute: "part_number",  
        startsWith: "PE-123"  
      }  
  ]  
)
```

##### Limitations

The beta has the following limitations:

- You can specify a maximum of six attributes to be enabled for **Contains** and six attributes to be enabled for **Starts with**.
- Each aggregation returns a maximum of 1000 facets.
- `startsWith` and `contains` both require a minimum of two characters in the search.
- `startsWith` allows a maximum of 10 characters for search.
- `contains` allows a maximum of 10 characters for search in the API query and up to the first 50 characters are indexed for a true `contains` search. However, if more than 10 characters are passed in, the search results are returned for an autocomplete search result and not a true `contains` search. In this situation, the autocomplete search is enabled on the entire attribute string and not just the first 50 characters.
- You can paginate a maximum of 10,000 products for any `productSearch` query.
- These new search capabilities are not available in PLP widgets or the Live Search adapter extension.

For additional Live Search boundaries and limits, see [boundaries and limits](https://experienceleague.adobe.com/en/docs/commerce-merchant-services/live-search/boundaries-limits) in the Live Search merchant guide.

#### Filtering by categories

Results can be filtered by categories defined in the Admin with the `categories` and `categoryPath` filters. They are slightly different in the type of facets returned:

`categories` is preferred when selecting from a category filter. Filtering on `categories` with "women/bottoms-women" and the phrase `pants`, the category facets returned are "promotions/pants-all", "women/bottoms-women/pants-women", and similar.

`categoryPath` is preferred when browsing by category. `categoryPath` returns the immediate subcategories of the category path being filtered. Filtering on `categoryPath` with "women/bottoms-women", the category facets returned are its children such as "women/bottoms-women/pants-women" and "women/bottoms-women/shorts-women".

A `phrase` attribute is required but it may be an empty string if you are filtering by `category` or `categoryPath`.

Pinned categories are always returned, regardless of the filtered category.

<InlineAlert variant="info" slots="text"/>

For search merchandising rules to apply correctly, the `productSearch` query should sort by relevance or pass no sort variables at all. For category merchandising rules to apply correctly, the `productSearch` query should sort by `position`, filter on `categoryPath` for browsing a category page (otherwise, no category rules will be applied), and `phrase` should be "empty".

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

Category filters can be used together. Here, the shopper navigates to "Womens -> Bottoms" and filters on "pants". This query returns both "Pants" and "Shorts" as facets in the layered navigation.

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

## Define query output

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

The `items` object primarily provides details about each item returned. The structure of this object varies between Catalog Service and Live Search. For Catalog Service, specify a `ProductSearchItem.productView` object. For Live Search, specify a `ProductSearchItem.product` object

#### ProductSearchItem.product (Live Search)

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

#### ProductSearchItem.productView (Catalog Service)

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

The `items` object can also optionally return highlighted text that shows the matching search terms.

### Other fields and objects

The query response can also contain the following top-level fields and objects:

- `page_info` - An object that lists the `page_size` and `current_page` input arguments and the total number of pages available.
- `suggestions` - An array of strings that include the names of products and categories that exist in the catalog that are similar to the search query.
- `total_count` - The number of products returned.

## Endpoints

import StorefrontAPIEndpoints from '/src/_includes/graphql/endpoints.md'

<StorefrontAPIEndpoints />

## Required headers

You must specify the following HTTP headers to run this query.

Header name| Description
--- | -----
`Magento-Customer-Group` | (**Catalog Service Only**) Specify the [customer group code](#find-the-customer-group-code) for the API request.
`Magento-Environment-Id` | This value is displayed at **Stores** > **Configuration** > **Services** > **Magento Services** > **SaaS Environment** or can be obtained by running the `bin/magento config:show services_connector/services_id/environment_id` command.
`Magento-Store-Code` | The code assigned to the store associated with the active store view. For example, `main_website_store`.
`Magento-Store-View-Code` | The code assigned to the active store view. For example, `default`.
`Magento-Website-Code` | The code assigned to the website associated with the active store view. For example, `base`.
`X-Api-Key` | For Live Search queries, set this value to `search_gql`. For Catalog Service queries, set this value to the [unique API key](https://experienceleague.adobe.com/en/docs/commerce-merchant-services/user-guides/integration-services/saas#genapikey) generated for your Commerce environment.

###  Find the customer group code

import CustomerGroupCode from '/src/_includes/graphql/customer-group-code.md'

<CustomerGroupCode />

## Example usage

In the following sections provide examples for using Live Search and Catalog Service.

### Live Search

This is an example of using Live Search to retrieve and filter results. The query uses the core `ProductInterface` to access product information. As a result, the query has a longer response time than using [Catalog Service](https://experienceleague.adobe.com/docs/commerce-merchant-services/catalog-service/guide-overview.html) to retrieve this information.

For an example of using Live Search with Catalog Service, see [Catalog Service productSearch query](#catalog-service). Other than returning the `productView` object, all other attributes are the same.

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

### Catalog Service

In the following example, the query returns information on the same products as the Live Search [`productSearch` items list](#items-list) example. However, it has been constructed to return item information inside the Catalog Service `productView` object instead of the core `product` object. Note that the pricing information varies, depending on the product type. For the sake of brevity, facet information is not shown.

**Request:**

```graphql
{
  productSearch(
    phrase: "bag"
    sort: [
      {
        attribute: "price"
        direction: DESC }]
    page_size: 9
  ) {
    page_info {
      current_page
      page_size
      total_pages
    }
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
  }
}
```

<details>
<summary><b>Response</b></summary>

```json
{
  "data": {
    "productSearch": {
      "page_info": {
        "current_page": 1,
        "page_size": 9,
        "total_pages": 3
      },
      "items": [
        {
          "productView": {
            "name": "Impulse Duffle",
            "sku": "24-UB02",
            "price": {
              "final": {
                "amount": {
                  "value": 74,
                  "currency": "USD"
                }
              },
              "regular": {
                "amount": {
                  "value": 74,
                  "currency": "USD"
                }
              }
            }
          }
        },
        {
          "productView": {
            "name": "Fusion Backpack 567890",
            "sku": "24-MB02",
            "price": {
              "final": {
                "amount": {
                  "value": 59,
                  "currency": "USD"
                }
              },
              "regular": {
                "amount": {
                  "value": 59,
                  "currency": "USD"
                }
              }
            }
          }
        },
        {
          "productView": {
            "name": "Rival Field Messenger",
            "sku": "24-MB06",
            "price": {
              "final": {
                "amount": {
                  "value": 45,
                  "currency": "USD"
                }
              },
              "regular": {
                "amount": {
                  "value": 45,
                  "currency": "USD"
                }
              }
            }
          }
        },
        {
          "productView": {
            "name": "Push It Messenger Bag",
            "sku": "24-WB04",
            "price": {
              "final": {
                "amount": {
                  "value": 45,
                  "currency": "USD"
                }
              },
              "regular": {
                "amount": {
                  "value": 45,
                  "currency": "USD"
                }
              }
            }
          }
        },
        {
          "productView": {
            "name": "Overnight Duffle",
            "sku": "24-WB07",
            "price": {
              "final": {
                "amount": {
                  "value": 45,
                  "currency": "USD"
                }
              },
              "regular": {
                "amount": {
                  "value": 45,
                  "currency": "USD"
                }
              }
            }
          }
        },
        {
          "productView": {
            "name": "Wayfarer Messenger Bag 987",
            "sku": "24-MB05",
            "price": {
              "final": {
                "amount": {
                  "value": 44,
                  "currency": "USD"
                }
              },
              "regular": {
                "amount": {
                  "value": 44,
                  "currency": "USD"
                }
              }
            }
          }
        },
        {
          "productView": {
            "name": "Driven Backpack",
            "sku": "24-WB03",
            "price": {
              "final": {
                "amount": {
                  "value": 36,
                  "currency": "USD"
                }
              },
              "regular": {
                "amount": {
                  "value": 36,
                  "currency": "USD"
                }
              }
            }
          }
        }
      ]
    }
  }
}
```

</details>

## Input fields

The `productSearch` query accepts the following fields as input:

Field | Data Type | Description
--- | --- | ---
`context` | [[QueryContextInput!]](#querycontextinput-data-type) | Query context that allows customized search results to be returned based on the context passed
`current_page` | Int | Specifies which page of results to return. Default value: 1
`filter` | [[SearchClauseInput!]](#searchclauseinput-data-type) | Identifies which attributes to search for and return
`page_size` | Int | Specifies the maximum number of results to return at once. Default value: 20
`phrase` | String! | The text to filter on. Can be an empty string.
`sort` | [[ProductSearchSortInput!]](#productsearchsortinput-data-type) | Specifies which attribute to sort on, and whether to return the results in ascending or descending order

### SearchClauseInput data type

The `SearchClauseInput` object can contain the following fields:

Field | Data Type | Description
--- | --- | ---
`attribute` | String! | The attribute code of a product attribute
`eq` | String | A string value to filter on
`in` | [String] | An array of string values to filter on
`range` | [SearchRangeInput](#searchrangeinput-data-type) | A range of numeric values to filter on
`contains` | String | A string that searches for products containing specific attribute values
`startsWith` | String | A string that searches for products where the attribute value starts with a particular string

### SearchRangeInput data type

The `SearchRangeInput` object can contain the following fields:

Field | Data Type | Description
--- | --- | ---
`from` | Float | The minimum value to filter on. If not specified, the value of `0` is applied
`to` | Float | The maximum value to filter on

### ProductSearchSortInput data type

The `ProductSearchSortInput` object can contain the following fields.

Field | Data Type | Description
--- | --- | ---
`attribute` | String! | The attribute code of a product attribute
`direction` | SortEnum! | ASC (ascending) or DESC (descending)

### QueryContextInput data type

The `QueryContextInput` object can contain the following fields.

Field | Data Type | Description
--- | --- | ---
`customerGroup` | String! | The customer group code. For storefront clients, this value is available in the `dataservices_customer_group` cookie.
`userViewHistory` | [ViewHistoryInput!](#viewhistoryinput-data-type) | List of SKUs with timestamps. Used in "Recommended for you" ranking.

### ViewHistoryInput data type

The `ViewHistoryInput` object can contain the following fields.

Field | Data Type | Description
--- | --- | ---
`dateTime` | String! | Timestamps when the SKU was viewed
`sku` | String! | The SKU of the view history being requested

## Output fields

The `productSearchResponse` return object can contain the following fields:

### Common fields

Field | Data Type | Description
--- | --- | ---
`facets` | [[Aggregation]](#aggregation-data-type) | Provides details about the static and dynamic facets relevant to the search
`items` | [[ProductSearchItem]](#productsearchitem-data-type) | An array of products returned by the query
`page_info` | [SearchResultPageInfo](#searchresultpageinfo-data-type) | Contains information for rendering pages of search results
`related_terms` | [String] | Reserved for future use
`suggestions` | [String] | An array of product URL keys that are similar to the search query. A maximum of five items are returned
`total_count` | Int | The total number of items returned

#### Aggregation data type

Field | Data Type | Description
--- | --- | ---
`attribute` | String! | The attribute code of the filter item
`buckets` | [[Bucket]!](#bucket-data-type) | A container that divides the data into manageable groups. For example, attributes that can have numeric values might have buckets that define price ranges
`title` | String! | The filter name displayed in layered navigation
`type` | AggregationType | Identifies the data type as one of the following: `INTELLIGENT`, `PINNED`, or `POPULAR`

#### Bucket data type

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

#### ProductSearchItem data type

The `ProductSearchItem` data type can contain the following fields:

Field | Data Type | Description
--- | --- | ---
`appliedQueryRule` | AppliedQueryRule | The query rule type that was applied to this product, if any (in preview mode only, returns null otherwise). Possible values: `BOOST`, `BURY`, and `PIN`

#### SearchResultPageInfo data type

The `SearchResultPageInfo` data type can contain the following fields:

Field | Data Type | Description
--- | --- | ---
`current_page` | Int | Specifies which page of results to return
`page_size` | Int | Specifies the maximum number of items to return
`total_pages` | Int | Specifies the total number of pages returned

### Live Search fields

Live Search contains information about the product within the [ProductInterface!](https://developer.adobe.com/commerce/webapi/graphql/schema/products/interfaces/attributes/) attribute.

### Catalog Service fields

import Docs2 from '/src/_includes/graphql/catalog-service/product-view.md'

<Docs2 />
