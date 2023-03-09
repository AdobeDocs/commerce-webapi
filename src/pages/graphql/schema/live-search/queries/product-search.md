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
    page_size: Int = 20
    current_page: Int = 1
    filter: [SearchClauseInput!]
    sort: [ProductSearchSortInput!]
    context: [QueryContextInput!]
): ProductSearchResponse!
```

## Construct the query

The `productSearch` query accepts the following fields as input:

- `phrase` - The string of text to search for. This field is required.
- `filter` - An object that defines one or more product attributes to use to narrow the search results. In the Luma theme, the `sku`, `price`, and `size` attributes are among the product attributes that can be used to filter query results. See [`categories`](#categories) and [`categoryPath`](#categorypath) for category level filtering.
- `sort` - An object that defines one or more product attributes to use to sort the search results. The default sortable product attributes in Luma are `price`, `name`, and `position`. A product's position is assigned within a category.
- `page_size` and `current_page` - These optional fields allow the search results to be broken down into smaller groups so that a limited number of items are returned at a time. The default value of `page_size` is `20`, and the default value for `current_page` is `1`. In the response, counting starts at page one.
- `context` - Query context that allows customized search results to be returned based on the customer group passed. This is used to get the view history of a SKU.

<InlineAlert variant="info" slots="text" />

The initial release does not allow for different merchandising strategies per customer group.

### Field Reference

The following sections describe each field in detail.

#### phrase

The `phrase` field contains the text that a shopper enters on the storefront. Live Search applies all configured rules, synonyms, and other configuration settings to determine the search results. All `productSearch` queries must contain the `phrase` field.

The following example sets `Watch` as the phrase to search for:

```graphql
phrase: "Watch"
```

#### filter

Filters are the part of the query that uses product attributes as facets that have been previously defined in the Admin. For example, to filter results by color, a color facet must be defined in Live Search, based on the existing `color` attribute.

A filter consists of a product `attribute`, a comparison operator, and the value that is being searched for. Together, they help narrow down the search results, based on shopper input. For example, if you want to set up a filter for jackets based on size, you could set the product attribute to `size`. To filter on medium-sized jackets only, set the `eq` field to `M`. To filter on both medium- and large-sized jackets, set the `in` field to `["M", "L"]`. If an attribute is numeric, you can filter on it as a price range, such as between $50 and $100. To filter on a price range, set the `attribute` to `price`, and assign the `range` field with `from` and `to` values as `50` and `100`, respectively.

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

#### sort

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

<InlineAlert variant="info" slots="text"/>

Use the [`attributeMetadata` query](./attribute-metadata.md) to return a list of product attributes that can be used to define a filter.

#### page_size

When you run a query, you do not know in advance how many items the query will return. The query could return a few items, or it could return hundreds. The `page_size` field determines how many items to return at one time. If you use the default value of 20, and the query returns 97 items, the results are stored in four pages containing 20 items each, and one page containing 17 items.

The following example sets the page size to 10:

```graphql
page_size: 10
```

#### current_page

The `currentPage` field specifies which page of results to return. If no value is specified, the first page is returned. To continue with the values mentioned in the `page_size` field, page number `5` contains items 81 - 97.

The system returns an error if you specify a value that is greater than the number of available pages.

The following example sets the current page to 5:

```graphql
current_page: 5
```

#### context

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

The `items` object primarily provides details about each item returned. If Catalog Service is not installed, then you must specify the `product` field to return details about each item. The `product` field uses the [`ProductInterface`](https://developer.adobe.com/commerce/webapi/graphql/schema/products/interfaces/attributes/), which is defined in Adobe Commerce and Magento Open Source, to return details about the product. A typical query might return the product name, price, SKU, and image.

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

The Catalog Service [products query](../catalog-service/products.md) describes the contents of the `ProductView` object.

The `items` object can also optionally return highlighted text that shows the matching search terms.

### categories and categoryPath

Results can be refined by category with the `categories` and `categoryPath` filters.
They are slightly different in the type of facets returned:

- `categories` is preferred for category filtering: selecting from a category filter.
- `categoryPath` is preferred for browsing by category. `categoryPath` returns the immediate subcategories of the category path being filtered.

#### categoryPath

This example shows how to filter returned facets when browsing a category page.

`categoryPath` performs strict filtering, meaning that the facets returned are limited to the immediate children of the current category page.

The following query corresponds to a shopper selecting **Gear** > **Fitness Equipment**.

```graphql
query productSearch {
  productSearch(
    phrase: "",
    filter:[{attribute:"categoryPath", eq: "gear/fitness-equipment"}]) {
    total_count
    items {
      product {
        name
        sku
      }
    }
  }
}
```

The response only includes the immediate children:

```graphql
"data": {
  "productSearch": {
    "total_count": 11,
    "items": [
      {
        "product": {
          "name": "Sprite Foam Yoga Brick",
          "sku": "24-WG084"
        }
      },
      {
        "product": {
          "name": "Sprite Foam Roller",
          "sku": "24-WG088"
        }
      },
      {
        "product": {
          "name": "Harmony Lumaflex&trade; Strength Band Kit ",
          "sku": "24-UG03"
        }
      },
      {
        "product": {
          "name": "Zing Jump Rope",
          "sku": "24-UG04"
        }
      },
      {
        "product": {
          "name": "Go-Get'r Pushup Grips",
          "sku": "24-UG05"
        }
      },
      {
        "product": {
          "name": "Dual Handle Cardio Ball",
          "sku": "24-UG07"
        }
      },
      {
        "product": {
          "name": "Sprite Yoga Companion Kit",
          "sku": "24-WG080"
        }
      },
      {
        "product": {
          "name": "Pursuit Lumaflex&trade; Tone Band",
          "sku": "24-UG02"
        }
      },
      {
        "product": {
          "name": "Affirm Water Bottle ",
          "sku": "24-UG06"
        }
      },
      {
        "product": {
          "name": "Set of Sprite Yoga Straps",
          "sku": "24-WG085_Group"
        }
      },
      {
        "product": {
          "name": "Quest Lumaflex&trade; Band",
          "sku": "24-UG01"
        }
      }
    ]
  }
}
```

#### categories

`categories` can be used as a filter in a query when a category facet is selected in the layered navigation.
This does not result in strict filtering when used by itself. It can be used with the `categoryPath` filter.

Example 1: Search results when filtering on a category. Although the category filter is for `women/bottoms-women`, pinned categories such as `men/bottoms-men` are always returned.

**Request:**

```graphql
productSearch(
  phrase:"pants",
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
){
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
        ... on ScalarBucket {
          title
          id
          count
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
```

**Response:**

<details>
<summary><b>Response</b></summary>

```graphql
"data": {
  "productSearch": {
    "total_count": 13,
    "page_info": {
      "current_page": 1,
      "page_size": 13,
      "total_pages": 1
    },
    "facets": [
      {
        "attribute": "categories",
        "title": "Categories",
        "type": "PINNED",
        "buckets": [
          {
            "title": "promotions/pants-all",
            "__typename": "ScalarBucket",
            "id": "32",
            "count": 25
          },
          {
            "title": "men/bottoms-men",
            "__typename": "ScalarBucket",
            "id": "13",
            "count": 12
          },
          {
            "title": "men/bottoms-men/pants-men",
            "__typename": "ScalarBucket",
            "id": "18",
            "count": 12
          },
          {
            "title": "women/bottoms-women",
            "__typename": "ScalarBucket",
            "id": "22",
            "count": 13
          },
          {
            "title": "women/bottoms-women/pants-women",
            "__typename": "ScalarBucket",
            "id": "27",
            "count": 13
          },
          {
            "title": "collections/yoga-new",
            "__typename": "ScalarBucket",
            "id": "8",
            "count": 6
          },
          {
            "title": "collections/erin-recommends",
            "__typename": "ScalarBucket",
            "id": "34",
            "count": 6
          },
          {
            "title": "collections/performance-fabrics",
            "__typename": "ScalarBucket",
            "id": "35",
            "count": 5
          }
        ]
      },
      {
        "attribute": "price",
        "title": "Price",
        "type": "PINNED",
        "buckets": [
          {
            "title": "25.0-50.0",
            "__typename": "RangeBucket"
          },
          {
            "title": "50.0-75.0",
            "__typename": "RangeBucket"
          }
        ]
      },
      {
        "attribute": "climate",
        "title": "Climate",
        "type": "INTELLIGENT",
        "buckets": [
          {
            "title": "Indoor",
            "__typename": "ScalarBucket",
            "id": "Indoor",
            "count": 13
          },
          {
            "title": "Mild",
            "__typename": "ScalarBucket",
            "id": "Mild",
            "count": 11
          },
          {
            "title": "Spring",
            "__typename": "ScalarBucket",
            "id": "Spring",
            "count": 7
          },
          {
            "title": "Hot",
            "__typename": "ScalarBucket",
            "id": "Hot",
            "count": 6
          },
          {
            "title": "Warm",
            "__typename": "ScalarBucket",
            "id": "Warm",
            "count": 6
          },
          {
            "title": "All-Weather",
            "__typename": "ScalarBucket",
            "id": "All-Weather",
            "count": 3
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
        "type": "INTELLIGENT",
        "buckets": [
          {
            "title": "28",
            "__typename": "ScalarBucket",
            "id": "28",
            "count": 13
          },
          {
            "title": "29",
            "__typename": "ScalarBucket",
            "id": "29",
            "count": 13
          }
        ]
      },
      {
        "attribute": "color",
        "title": "Color",
        "type": "INTELLIGENT",
        "buckets": [
          {
            "title": "Blue",
            "__typename": "ScalarBucket",
            "id": "Blue",
            "count": 10
          },
          {
            "title": "Black",
            "__typename": "ScalarBucket",
            "id": "Black",
            "count": 8
          },
          {
            "title": "Gray",
            "__typename": "ScalarBucket",
            "id": "Gray",
            "count": 4
          },
          {
            "title": "Green",
            "__typename": "ScalarBucket",
            "id": "Green",
            "count": 4
          },
          {
            "title": "Red",
            "__typename": "ScalarBucket",
            "id": "Red",
            "count": 4
          },
          {
            "title": "Orange",
            "__typename": "ScalarBucket",
            "id": "Orange",
            "count": 3
          },
          {
            "title": "Purple",
            "__typename": "ScalarBucket",
            "id": "Purple",
            "count": 3
          },
          {
            "title": "White",
            "__typename": "ScalarBucket",
            "id": "White",
            "count": 3
          }
        ]
      },
      {
        "attribute": "eco_collection",
        "title": "Eco Collection",
        "type": "INTELLIGENT",
        "buckets": [
          {
            "title": "no",
            "__typename": "ScalarBucket",
            "id": "no",
            "count": 9
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
        "attribute": "new",
        "title": "New",
        "type": "INTELLIGENT",
        "buckets": [
          {
            "title": "no",
            "__typename": "ScalarBucket",
            "id": "no",
            "count": 12
          },
          {
            "title": "yes",
            "__typename": "ScalarBucket",
            "id": "yes",
            "count": 1
          }
        ]
      },
      {
        "attribute": "material",
        "title": "Material",
        "type": "INTELLIGENT",
        "buckets": [
          {
            "title": "Organic Cotton",
            "__typename": "ScalarBucket",
            "id": "Organic Cotton",
            "count": 8
          },
          {
            "title": "Spandex",
            "__typename": "ScalarBucket",
            "id": "Spandex",
            "count": 6
          },
          {
            "title": "LumaTech&trade;",
            "__typename": "ScalarBucket",
            "id": "LumaTech&trade;",
            "count": 3
          },
          {
            "title": "Microfiber",
            "__typename": "ScalarBucket",
            "id": "Microfiber",
            "count": 3
          },
          {
            "title": "Cocona&reg; performance fabric",
            "__typename": "ScalarBucket",
            "id": "Cocona&reg; performance fabric",
            "count": 2
          },
          {
            "title": "CoolTech&trade;",
            "__typename": "ScalarBucket",
            "id": "CoolTech&trade;",
            "count": 2
          },
          {
            "title": "Nylon",
            "__typename": "ScalarBucket",
            "id": "Nylon",
            "count": 2
          },
          {
            "title": "Polyester",
            "__typename": "ScalarBucket",
            "id": "Polyester",
            "count": 2
          }
        ]
      }
    ],
    "items": [
      {
        "product": {
          "name": "Daria Bikram Pant",
          "sku": "WP10"
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
          "name": "Karmen Yoga Pant",
          "sku": "WP01"
        }
      },
      {
        "product": {
          "name": "Ida Workout Parachute Pant",
          "sku": "WP03"
        }
      },
      {
        "product": {
          "name": "Bardot Capri",
          "sku": "WP08"
        }
      },
      {
        "product": {
          "name": "Carina Basic Capri",
          "sku": "WP09"
        }
      },
      {
        "product": {
          "name": "Sylvia Capri",
          "sku": "WP11"
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
          "name": "Aeon Capri",
          "sku": "WP07"
        }
      },
      {
        "product": {
          "name": "Portia Capri",
          "sku": "WP13"
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
          "name": "Sahara Leggings",
          "sku": "WP05"
        }
      },
      {
        "product": {
          "name": "Emma Leggings",
          "sku": "WP02"
        }
      }
    ],
    "suggestions": [
      "pants-all",
      "pants-men",
      "pants-women"
    ]
  }
}
```

</details>

Example 2: A "category browse" page when filtering on a category.

The shopper navigates to "Womens -> Bottoms" and filters on "pants". In this case, both "Pants" and "Shorts" appear as facets in the layered navigation.

**Request:**

```graphql
productSearch(
    phrase: "pants"
    filter: [
        {
            attribute: "visibility",
            in: ["Catalog", "Catalog, Search"]
        },
        {
            attribute:"categoryPath", eq: ["women/bottoms-women"]
        },
        {
            attribute:"categories", in: ["women/bottoms-women/pants-women"]
        }
    ]
){
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
        ... on ScalarBucket {
          title
          id
          count
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
```

**Response:**

<details>
<summary><b>Response</b></summary>

```graphql
"data": {
  "productSearch": {
    "total_count": 13,
    "page_info": {
      "current_page": 1,
      "page_size": 13,
      "total_pages": 1
    },
    "facets": [
      {
        "attribute": "categories",
        "title": "Categories",
        "type": "PINNED",
        "buckets": [
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
            "title": "25.0-50.0",
            "__typename": "RangeBucket"
          },
          {
            "title": "50.0-75.0",
            "__typename": "RangeBucket"
          }
        ]
      },
      {
        "attribute": "climate",
        "title": "Climate",
        "type": "INTELLIGENT",
        "buckets": [
          {
            "title": "Indoor",
            "__typename": "ScalarBucket",
            "id": "Indoor",
            "count": 13
          },
          {
            "title": "Mild",
            "__typename": "ScalarBucket",
            "id": "Mild",
            "count": 11
          },
          {
            "title": "Spring",
            "__typename": "ScalarBucket",
            "id": "Spring",
            "count": 7
          },
          {
            "title": "Hot",
            "__typename": "ScalarBucket",
            "id": "Hot",
            "count": 6
          },
          {
            "title": "Warm",
            "__typename": "ScalarBucket",
            "id": "Warm",
            "count": 6
          },
          {
            "title": "All-Weather",
            "__typename": "ScalarBucket",
            "id": "All-Weather",
            "count": 3
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
        "type": "INTELLIGENT",
        "buckets": [
          {
            "title": "28",
            "__typename": "ScalarBucket",
            "id": "28",
            "count": 13
          },
          {
            "title": "29",
            "__typename": "ScalarBucket",
            "id": "29",
            "count": 13
          }
        ]
      },
      {
        "attribute": "color",
        "title": "Color",
        "type": "INTELLIGENT",
        "buckets": [
          {
            "title": "Blue",
            "__typename": "ScalarBucket",
            "id": "Blue",
            "count": 10
          },
          {
            "title": "Black",
            "__typename": "ScalarBucket",
            "id": "Black",
            "count": 8
          },
          {
            "title": "Gray",
            "__typename": "ScalarBucket",
            "id": "Gray",
            "count": 4
          },
          {
            "title": "Green",
            "__typename": "ScalarBucket",
            "id": "Green",
            "count": 4
          },
          {
            "title": "Red",
            "__typename": "ScalarBucket",
            "id": "Red",
            "count": 4
          },
          {
            "title": "Orange",
            "__typename": "ScalarBucket",
            "id": "Orange",
            "count": 3
          },
          {
            "title": "Purple",
            "__typename": "ScalarBucket",
            "id": "Purple",
            "count": 3
          },
          {
            "title": "White",
            "__typename": "ScalarBucket",
            "id": "White",
            "count": 3
          }
        ]
      },
      {
        "attribute": "eco_collection",
        "title": "Eco Collection",
        "type": "INTELLIGENT",
        "buckets": [
          {
            "title": "no",
            "__typename": "ScalarBucket",
            "id": "no",
            "count": 9
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
        "attribute": "new",
        "title": "New",
        "type": "INTELLIGENT",
        "buckets": [
          {
            "title": "no",
            "__typename": "ScalarBucket",
            "id": "no",
            "count": 12
          },
          {
            "title": "yes",
            "__typename": "ScalarBucket",
            "id": "yes",
            "count": 1
          }
        ]
      },
      {
        "attribute": "material",
        "title": "Material",
        "type": "INTELLIGENT",
        "buckets": [
          {
            "title": "Organic Cotton",
            "__typename": "ScalarBucket",
            "id": "Organic Cotton",
            "count": 8
          },
          {
            "title": "Spandex",
            "__typename": "ScalarBucket",
            "id": "Spandex",
            "count": 6
          },
          {
            "title": "LumaTech&trade;",
            "__typename": "ScalarBucket",
            "id": "LumaTech&trade;",
            "count": 3
          },
          {
            "title": "Microfiber",
            "__typename": "ScalarBucket",
            "id": "Microfiber",
            "count": 3
          },
          {
            "title": "Cocona&reg; performance fabric",
            "__typename": "ScalarBucket",
            "id": "Cocona&reg; performance fabric",
            "count": 2
          },
          {
            "title": "CoolTech&trade;",
            "__typename": "ScalarBucket",
            "id": "CoolTech&trade;",
            "count": 2
          },
          {
            "title": "Nylon",
            "__typename": "ScalarBucket",
            "id": "Nylon",
            "count": 2
          },
          {
            "title": "Polyester",
            "__typename": "ScalarBucket",
            "id": "Polyester",
            "count": 2
          }
        ]
      }
    ],
    "items": [
      {
        "product": {
          "name": "Daria Bikram Pant",
          "sku": "WP10"
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
          "name": "Karmen Yoga Pant",
          "sku": "WP01"
        }
      },
      {
        "product": {
          "name": "Ida Workout Parachute Pant",
          "sku": "WP03"
        }
      },
      {
        "product": {
          "name": "Sylvia Capri",
          "sku": "WP11"
        }
      },
      {
        "product": {
          "name": "Bardot Capri",
          "sku": "WP08"
        }
      },
      {
        "product": {
          "name": "Carina Basic Capri",
          "sku": "WP09"
        }
      },
      {
        "product": {
          "name": "Portia Capri",
          "sku": "WP13"
        }
      },
      {
        "product": {
          "name": "Sahara Leggings",
          "sku": "WP05"
        }
      },
      {
        "product": {
          "name": "Emma Leggings",
          "sku": "WP02"
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
          "name": "Diana Tights",
          "sku": "WP06"
        }
      },
      {
        "product": {
          "name": "Aeon Capri",
          "sku": "WP07"
        }
      }
    ],
    "suggestions": [
      "pants-all",
      "pants-men"
    ]
  }
}
```

</details>

### Other fields and objects

The query response can also contain the following top-level fields and objects:

- `page_info` - An object that lists the `page_size` and `current_page` input arguments and the total number of pages available.
- `suggestions` - An array of strings that include the names of products and categories that exist in the catalog that are similar to the search query.
- `total_count` - The number of products returned.

## Required headers

You must specify the following HTTP headers to run this query.

import Docs from '/src/pages/_includes/graphql/live-search-headers.md'

<Docs />

## Example usage

### Live Search

The following example uses "bag" as the search phrase. The query uses the core `ProductInterface` to access product information. As a result, the query has a longer response time than using Catalog Service to retrieve this information.

For an example of using Live Search with Catalog Service, see [Catalog Service productSearch query](../../catalog-service/queries/product-search.md). Other than returning the `productView` object, all other attributes are the same. See full references on this page.

**Request:**

```graphql
{
  productSearch (
    phrase: "bag"
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
    page_size: 9
  ){
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
    suggestions
  }
}
```

**Response:**

<details>
<summary><b>Response</b></summary>

```json
{
  "extensions": {
    "request-id": "gUVUauyM294qbMJEkWaxHFmziwug423h"
  },
  "data": {
    "productSearch": {
      "total_count": 17,
      "page_info": {
        "current_page": 1,
        "page_size": 9,
        "total_pages": 2
      },
      "facets": [
        {
          "attribute": "categories",
          "title": "categories",
          "type": "PINNED",
          "buckets": [
            {
              "title": "gear",
              "__typename": "ScalarBucket",
              "id": "3",
              "count": 16
            },
            {
              "title": "gear/bags",
              "__typename": "ScalarBucket",
              "id": "4",
              "count": 14
            },
            {
              "title": "collections",
              "__typename": "ScalarBucket",
              "id": "7",
              "count": 7
            },
            {
              "title": "collections/yoga-new",
              "__typename": "ScalarBucket",
              "id": "8",
              "count": 3
            },
            {
              "title": "gear/fitness-equipment",
              "__typename": "ScalarBucket",
              "id": "5",
              "count": 2
            },
            {
              "title": "men/tops-men",
              "__typename": "ScalarBucket",
              "id": "12",
              "count": 1
            },
            {
              "title": "men/tops-men/tanks-men",
              "__typename": "ScalarBucket",
              "id": "17",
              "count": 1
            }
          ]
        },
        {
          "attribute": "price",
          "title": "price",
          "type": "PINNED",
          "buckets": [
            {
              "title": "0.0-10.0",
              "__typename": "RangeBucket",
              "to": 10,
              "from": 0,
              "count": 1
            },
            {
              "title": "10.0-25.0",
              "__typename": "RangeBucket",
              "to": 25,
              "from": 10,
              "count": 3
            },
            {
              "title": "25.0-50.0",
              "__typename": "RangeBucket",
              "to": 50,
              "from": 25,
              "count": 11
            },
            {
              "title": "50.0-75.0",
              "__typename": "RangeBucket",
              "to": 75,
              "from": 50,
              "count": 2
            }
          ]
        },
        {
          "attribute": "activity",
          "title": "activity",
          "type": "INTELLIGENT",
          "buckets": [
            {
              "title": "Gym",
              "__typename": "ScalarBucket",
              "id": "Gym",
              "count": 11
            },
            {
              "title": "Yoga",
              "__typename": "ScalarBucket",
              "id": "Yoga",
              "count": 7
            },
            {
              "title": "School",
              "__typename": "ScalarBucket",
              "id": "School",
              "count": 6
            },
            {
              "title": "Travel",
              "__typename": "ScalarBucket",
              "id": "Travel",
              "count": 5
            },
            {
              "title": "Urban",
              "__typename": "ScalarBucket",
              "id": "Urban",
              "count": 5
            },
            {
              "title": "Hiking",
              "__typename": "ScalarBucket",
              "id": "Hiking",
              "count": 4
            },
            {
              "title": "Overnight",
              "__typename": "ScalarBucket",
              "id": "Overnight",
              "count": 4
            },
            {
              "title": "Trail",
              "__typename": "ScalarBucket",
              "id": "Trail",
              "count": 2
            },
            {
              "title": "Recreation",
              "__typename": "ScalarBucket",
              "id": "Recreation",
              "count": 1
            },
            {
              "title": "Sports",
              "__typename": "ScalarBucket",
              "id": "Sports",
              "count": 1
            }
          ]
        }
      ],
      "items": [
        {
          "product": {
            "name": "Impulse Duffle",
            "sku": "24-UB02",
            "price_range": {
              "maximum_price": {
                "final_price": {
                  "value": 74,
                  "currency": "USD"
                }
              },
              "minimum_price": {
                "final_price": {
                  "value": 74,
                  "currency": "USD"
                }
              }
            }
          }
        },
        {
          "product": {
            "name": "Fusion Backpack",
            "sku": "24-MB02",
            "price_range": {
              "maximum_price": {
                "final_price": {
                  "value": 59,
                  "currency": "USD"
                }
              },
              "minimum_price": {
                "final_price": {
                  "value": 59,
                  "currency": "USD"
                }
              }
            }
          }
        },
        {
          "product": {
            "name": "Wayfarer Messenger Bag",
            "sku": "24-MB05",
            "price_range": {
              "maximum_price": {
                "final_price": {
                  "value": 45,
                  "currency": "USD"
                }
              },
              "minimum_price": {
                "final_price": {
                  "value": 45,
                  "currency": "USD"
                }
              }
            }
          }
        },
        {
          "product": {
            "name": "Rival Field Messenger",
            "sku": "24-MB06",
            "price_range": {
              "maximum_price": {
                "final_price": {
                  "value": 45,
                  "currency": "USD"
                }
              },
              "minimum_price": {
                "final_price": {
                  "value": 45,
                  "currency": "USD"
                }
              }
            }
          }
        },
        {
          "product": {
            "name": "Push It Messenger Bag",
            "sku": "24-WB04",
            "price_range": {
              "maximum_price": {
                "final_price": {
                  "value": 45,
                  "currency": "USD"
                }
              },
              "minimum_price": {
                "final_price": {
                  "value": 45,
                  "currency": "USD"
                }
              }
            }
          }
        },
        {
          "product": {
            "name": "Overnight Duffle",
            "sku": "24-WB07",
            "price_range": {
              "maximum_price": {
                "final_price": {
                  "value": 45,
                  "currency": "USD"
                }
              },
              "minimum_price": {
                "final_price": {
                  "value": 45,
                  "currency": "USD"
                }
              }
            }
          }
        },
        {
          "product": {
            "name": "Crown Summit Backpack",
            "sku": "24-MB03",
            "price_range": {
              "maximum_price": {
                "final_price": {
                  "value": 38,
                  "currency": "USD"
                }
              },
              "minimum_price": {
                "final_price": {
                  "value": 38,
                  "currency": "USD"
                }
              }
            }
          }
        },
        {
          "product": {
            "name": "Driven Backpack",
            "sku": "24-WB03",
            "price_range": {
              "maximum_price": {
                "final_price": {
                  "value": 36,
                  "currency": "USD"
                }
              },
              "minimum_price": {
                "final_price": {
                  "value": 36,
                  "currency": "USD"
                }
              }
            }
          }
        },
        {
          "product": {
            "name": "Joust Duffle Bag",
            "sku": "24-MB01",
            "price_range": {
              "maximum_price": {
                "final_price": {
                  "value": 34,
                  "currency": "USD"
                }
              },
              "minimum_price": {
                "final_price": {
                  "value": 34,
                  "currency": "USD"
                }
              }
            }
          }
        }
      ],
      "suggestions": [
        "bag",
        "it messenger bag",
        "messenger bag",
        "voyage yoga bag"
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
`context` | [[QueryContextInput!]](#QueryContextInput) | Query context that allows customized search results to be returned based on the context passed
`current_page` | Int | Specifies which page of results to return. Default value: 1
`filter` | [[SearchClauseInput!]](#SearchClauseInput) | Identifies which attributes to search for and return
`page_size` | Int | Specifies the maximum number of results to return at once. Default value: 20
`phrase` | String! | The text to search for
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
`product` | [ProductInterface!](https://developer.adobe.com/commerce/webapi/graphql/schema/products/interfaces/attributes/) | Contains details about the product. Go to `productInterface` for more information.
`productView` | ProductView | If Catalog Service is installed, contains details about the product view. The Catalog Service [`products` query](../catalog-service/products.md) fully describes this object.

### SearchResultPageInfo data type {#SearchResultPageInfo}

The `SearchResultPageInfo` data type can contain the following fields:

Field | Data Type | Description
--- | --- | ---
`current_page` | Int | Specifies which page of results to return
`page_size` | Int | Specifies the maximum number of items to return
`total_pages` | Int | Specifies the total number of pages returned
