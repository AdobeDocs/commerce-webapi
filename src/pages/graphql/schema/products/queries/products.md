---
title: products query
edition: paas
---

import CustomAttributeFilterProduct from '/src/_includes/graphql/examples/custom-attribute-filter-product.md'

# products query

The `products` query allows you to search for catalog items.

<InlineAlert variant="important" slots="text" />

Adobe Commerce as a Cloud Service does not support the `products` query. Use the Catalog Service [`products` query](../../catalog-service/queries/products.md) instead.

## Syntax

```graphql
products(
  search: String
  filter: ProductAttributeFilterInput
  pageSize: Int
  currentPage: Int
  sort: ProductAttributeSortInput
): Products
```

## Reference

The [`products`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-products) reference provides detailed information about the types and fields defined in this query.

## Input attributes

The query can contain the following input attributes:

- `search` - Performs a full-text search using the specified key words
- `filter` - Identifies which attributes to search for and return.
- `pageSize` - Specifies the maximum number of results to return at once.
- `currentPage` - Specifies which page of results to return.
- `sort` - Specifies which attribute to sort on, and whether to return the results in ascending or descending order.

Each attribute is described in detail below.

### search attribute

The `search` attribute causes the application perform a full text search on the specified keywords. This is the same type of search that is performed from the storefront. If multiple keywords are specified, each keyword is evaluated separately.

Each query must contain a `search` or `filter` attribute, or both.

### filter attribute

The `ProductAttributeFilterInput` object determines which attributes are used to narrow the results in a `products` query. A filter contains at least one attribute, a comparison operator, and the value that is being searched for. The following example filter searches for products that have a `name` that contains the string `Bag` with a `price` that's less than or equal to `40`.

```graphql
filter: {
  name: {
    match: "Bag"
  }
  price: {
    to: "40"
  }
}
```

The application processes the attribute values specified in a `ProductAttributeFilterInput` as simple data types (strings, integers, Booleans). However, returned attributes can be a different, complex data type. For example, in a response, `price` is an object that contains a monetary value and a currency code.

Attribute | Description
--- | ---
`category_uid` | Filters by the unique ID of a category for objects that implement `CategoryInterface`
`description` | Filters on the Description attribute
`name` | Filters on the Product Name attribute
`price` | Filters on the Price attribute
`short_description` | Filters on the Short Description attribute
`sku` | Filters on the SKU attribute
`url_key` | The part of the URL that identifies the product

You can define a custom attribute to be a filter by specifying the `custom_attributesV2` attribute within the output of your query, as shown in [Filter custom_attributesV2 of a product](#filter-custom_attributesv2-of-a-product).

You can also modify the codebase and [create a custom attribute](../../../usage/custom-filters.md) that can be used as a top-level filter. Use the `input_type` output attribute of the [`customAttributeMetadata` query](../../attributes/queries/custom-attribute-metadata.md) to determine the type of filter to use.

#### FilterEqualTypeInput attributes

The `category_id`, `sku`, and `url_key` filters require a `FilterEqualTypeInput` object as input. You must specify a `FilterEqualTypeInput` object to filter on a custom product attribute of the following types:

-  Boolean
-  Select
-  Multiple select

The comparison operator must be either `eq` or `in`. Use `eq` to exactly match the specified string. For example, to filter on a specific category ID, specify a value like `5`.
Use `in` to filter on an array of values. For example, to filter on category IDs 4, 5, and 6, specify a value of `["4", "5", "6"]`

#### FilterMatchTypeInput attributes

Use the `FilterMatchTypeInput` object to construct a filter that returns products that partially match a string or contain the specified pattern. By default, the query returns full matches. You can set the `match_type` field to `PARTIAL` return partial matches.

You must specify a `FilterMatchTypeInput` object to filter on a custom product attribute of the following types:

-  Text field
-  Text area
-  Any other type not explicitly listed in `FilterEqualTypeInput`, `FilterMatchTypeInput`, or `FilterRangeTypeInput`

#### FilterRangeTypeInput attributes

Use the `FilterRangeTypeInput` object to construct a filter that returns products that fall within a range of prices or dates. This object contains `from` and `to` attributes.

### pageSize attribute

Magento's GraphQL implementation of pagination uses offsets so that it operates in the same manner as REST and SOAP API requests.

The `pageSize` attribute specifies the maximum number of items to return. If no value is specified, 20 items are returned.

### currentPage attribute

The `currentPage` attribute specifies which page of results to return. If no value is specified, the first page is returned. The application returns an error if you specify a value that is greater than the number of available pages.

### sort attribute

The `sort` attribute allows you to specify which field or fields to use for sorting the results. If you specify more than one field, the application sorts by the first field listed. Then, if any items have the same value, those items will be sorted by the secondary field. The value for each field can be set to either `ASC` or `DESC`.

If you do not specify a `sort` object, the application sorts as follows:

-  If you specify the `search` attribute, the query sorts by relevance, in descending order.
-  If you specify the `filter` attribute without specifying the  `search` attribute, the query sorts by position, in ascending order.

In previous versions, the `sort` attribute required a `ProductSortInput` object as input. The `sort` attribute now requires a `ProductAttributeSortInput` object, which can contain the following attributes:

Attribute | Description
--- | ---
`name` | Sorts by Product Name
`position` | Sorts by the position of products
`price` | Sorts by Price
`relevance` | (Default) Sorts by the search relevance score

To enable sorting by an attribute that is not in the `ProductAttributeSortInput` object, set the **Stores** > Attributes > **Product** > `Attribute Name` > **Storefront Properties** > **Use in Search** and **Used in Sorting in Product Listing** fields to Yes.

## Output attributes

The query returns a `Products` object. This can contain an array of aggregations. Each aggregation within the `aggregations` object is a separate bucket that contains the attribute code and label for each filterable option (such as price, category UID, and custom attributes). It also includes the number of products within the filterable option that match the specified search criteria.

<InlineAlert variant="info" slots="text" />

To enable a custom attribute to return layered navigation and aggregation data from the Admin, set the **Stores** > Attributes > **Product** > `Attribute Name` > **Storefront Properties** > **Use in Layered Navigation** field to **Filterable (with results)** or **Filterable (no results)**.

When the `category_id` field is specified as part of the `ProductAttributeFilterInput` input object, the `includeDirectChildrenOnly` field of the `AggregationsCategoryFilterInput` object can be used in the response to refine the returned aggregations. If `includeDirectChildrenOnly` is set to true, then the aggregations will contain only direct child categories. Otherwise, the category aggregations will follow the default algorithm. The default value is false.

The `Products` object also contains an array of items that match the search criteria. [ProductInterface](../interfaces/index.md/) describes the possible contents of this object.

## Sample queries

This section illustrates some of the many ways that you can use the `products` query.

### Full text search

The following search returns items that contain the word `yoga` or `pants`. The Catalog Search index contains search terms taken from the product `name`, `description`, `short_description` and related attributes.

**Request:**

```graphql
{
  products(search: "Yoga pants", pageSize: 2) {
    total_count
    items {
      name
      sku
      price_range {
        minimum_price {
          regular_price {
            value
            currency
          }
        }
      }
    }
    page_info {
      page_size
      current_page
    }
  }
}
```

**Response:**

The search returns 45 items, but only the first two items are returned on the current page.

```json
{
  "data": {
    "products": {
      "total_count": 45,
      "items": [
        {
          "name": "Josie Yoga Jacket",
          "sku": "WJ02",
          "price_range": {
            "minimum_price": {
              "regular_price": {
                "value": 56.25,
                "currency": "USD"
              }
            }
          }
        },
        {
          "name": "Selene Yoga Hoodie",
          "sku": "WH05",
          "price_range": {
            "minimum_price": {
              "regular_price": {
                "value": 42,
                "currency": "USD"
              }
            }
          }
        }
      ],
      "page_info": {
        "page_size": 2,
        "current_page": 1
      }
    }
  }
}
```

### Full text search with filter by price attribute

The following sample query returns a list of products that meets the following criteria:

-  The product name, product description, or related field contains the string `Messenger` (which causes it to be available for full text searches).
-  The price is less than $50.

The response for each item includes the `name`, `sku`, and `price` only. Up to 25 results are returned at a time, in decreasing order of price.

**Request:**

```graphql
{
  products(
    search: "Messenger"
    filter: { price: { to: "50" } }
    pageSize: 25
    sort: { price: DESC }
  ) {
    items {
      name
      sku
      price_range {
        minimum_price {
          regular_price {
            value
            currency
          }
        }
      }
    }
    total_count
    page_info {
      page_size
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "products": {
      "items": [
        {
          "name": "Rival Field Messenger",
          "sku": "24-MB06",
          "price_range": {
            "minimum_price": {
              "regular_price": {
                "value": 45,
                "currency": "USD"
              }
            }
          }
        },
        {
          "name": "Push It Messenger Bag",
          "sku": "24-WB04",
          "price_range": {
            "minimum_price": {
              "regular_price": {
                "value": 45,
                "currency": "USD"
              }
            }
          }
        },
        {
          "name": "Wayfarer Messenger Bag",
          "sku": "24-MB05",
          "price_range": {
            "minimum_price": {
              "regular_price": {
                "value": 45,
                "currency": "USD"
              }
            }
          }
        }
      ],
      "total_count": 3,
      "page_info": {
        "page_size": 25
      }
    }
  }
}
```

### Query with filter by SKU attribute

The following sample query returns product by SKU. You have to pass SKU value to return product information.

**Request:**

```graphql
{
  products(filter: { sku: { eq: "24-MB01" } }) {
    items {
      name
      sku
      url_key
      stock_status
      price_range {
        minimum_price {
          regular_price {
            value
            currency
          }
        }
      }
    }
    total_count
    page_info {
      page_size
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "products": {
      "items": [
        {
          "name": "Joust Duffle Bag",
          "sku": "24-MB01",
          "url_key": "joust-duffle-bag",
          "stock_status": "IN_STOCK",
          "price_range": {
            "minimum_price": {
              "regular_price": {
                "value": 34,
                "currency": "USD"
              }
            }
          }
        }
      ],
      "total_count": 1,
      "page_info": {
        "page_size": 20
      }
    }
  }
}
```

### Query with filter by `name` attribute and `match_type`

The following sample query returns different results, depending on the value of `match_type`. The default value of `FULL`
indicates the query returns full word matches. If you specify `PARTIAL`, the query performs a partial word search,

**Request:**

```graphql
{
  products(filter: { name: { match: "Life", match_type: FULL } }) {
    items {
      name
      sku
      url_key
      stock_status
      price_range {
        minimum_price {
          regular_price {
            value
            currency
          }
        }
      }
    }
    total_count
    page_info {
      page_size
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "products": {
      "items": [
        {
          "name": "Luma Yoga For Life",
          "sku": "240-LV09",
          "url_key": "luma-yoga-for-life",
          "stock_status": "IN_STOCK",
          "price_range": {
            "minimum_price": {
              "regular_price": {
                "value": 0,
                "currency": "USD"
              }
            }
          }
        }
      ],
      "total_count": 1,
      "page_info": {
        "page_size": 20
      }
    }
  }
}
```

```graphql
{
  products(filter: { name: { match: "Life", match_type: PARTIAL } }) {
    items {
      name
      sku
      url_key
      stock_status
      price_range {
        minimum_price {
          regular_price {
            value
            currency
          }
        }
      }
    }
    total_count
    page_info {
      page_size
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "products": {
      "items": [
        {
          "name": "Luma Yoga For Life",
          "sku": "240-LV09",
          "url_key": "luma-yoga-for-life",
          "stock_status": "IN_STOCK",
          "price_range": {
            "minimum_price": {
              "regular_price": {
                "value": 0,
                "currency": "USD"
              }
            }
          }
        },
        {
          "name": "LifeLong Fitness IV",
          "sku": "240-LV05",
          "url_key": "lifelong-fitness-iv",
          "stock_status": "IN_STOCK",
          "price_range": {
            "minimum_price": {
              "regular_price": {
                "value": 14,
                "currency": "USD"
              }
            }
          }
        }
      ],
      "total_count": 2,
      "page_info": {
        "page_size": 20
      }
    }
  }
}
```

### Query with layered navigation

The following query returns aggregations for a query that filters on items with these characteristics:

-  Women's pants (category ID `27`)
-  In the price range of $30 - $39.99
-  Comes in black (color `49`)

<InlineAlert variant="info" slots="text" />

By default, you cannot filter on the `color` attribute. [Filtering with custom attributes](../../../usage/custom-filters.md) describes how to enable this attribute for filtering. You can also run the following query without enabling the attribute by deleting `, color: {eq: "49"}`.

**Request:**

```graphql
{
  products(filter: {category_id: {eq: "27"}, price: {from: "30", to: "39.99"}, color: {eq: "49"}}, pageSize: 25, sort: {name: DESC}) {
    aggregations {
      attribute_code
      count
      label
      options {
        label
        value
        count
      }
    }
    items {
      name
      sku
      price_range {
        minimum_price {
          regular_price {
            value
            currency
          }
        }
      }
    }
    page_info {
      page_size
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "products": {
      "aggregations": [
        {
          "attribute_code": "price",
          "count": 1,
          "label": "Price",
          "options": [
            {
              "label": "30-*",
              "value": "30_*",
              "count": 4
            }
          ]
        },
        {
          "attribute_code": "category_id",
          "count": 5,
          "label": "Category",
          "options": [
            {
              "label": "New Luma Yoga Collection",
              "value": "8",
              "count": 1
            },
            {
              "label": "Bottoms",
              "value": "22",
              "count": 4
            },
            {
              "label": "Pants",
              "value": "27",
              "count": 4
            },
            {
              "label": "Pants",
              "value": "32",
              "count": 4
            },
            {
              "label": "Performance Fabrics",
              "value": "35",
              "count": 2
            }
          ]
        },
        {
          "attribute_code": "color",
          "count": 8,
          "label": "Color",
          "options": [
            {
              "label": "Black",
              "value": "49",
              "count": 4
            },
            {
              "label": "Blue",
              "value": "50",
              "count": 2
            },
            {
              "label": "Gray",
              "value": "52",
              "count": 1
            },
            {
              "label": "Green",
              "value": "53",
              "count": 1
            },
            {
              "label": "Orange",
              "value": "56",
              "count": 1
            },
            {
              "label": "Purple",
              "value": "57",
              "count": 1
            },
            {
              "label": "Red",
              "value": "58",
              "count": 1
            },
            {
              "label": "White",
              "value": "59",
              "count": 1
            }
          ]
        },
        {
          "attribute_code": "material",
          "count": 7,
          "label": "Material",
          "options": [
            {
              "label": "Nylon",
              "value": "37",
              "count": 1
            },
            {
              "label": "Rayon",
              "value": "39",
              "count": 1
            },
            {
              "label": "LumaTech&trade;",
              "value": "148",
              "count": 1
            },
            {
              "label": "Microfiber",
              "value": "150",
              "count": 2
            },
            {
              "label": "Spandex",
              "value": "151",
              "count": 2
            },
            {
              "label": "Organic Cotton",
              "value": "154",
              "count": 2
            },
            {
              "label": "CoolTech&trade;",
              "value": "156",
              "count": 2
            }
          ]
        },
        {
          "attribute_code": "size",
          "count": 2,
          "label": "Size",
          "options": [
            {
              "label": "28",
              "value": "172",
              "count": 4
            },
            {
              "label": "29",
              "value": "173",
              "count": 4
            }
          ]
        },
        {
          "attribute_code": "eco_collection",
          "count": 2,
          "label": "Eco Collection",
          "options": [
            {
              "label": "0",
              "value": "0",
              "count": 3
            },
            {
              "label": "1",
              "value": "1",
              "count": 1
            }
          ]
        },
        {
          "attribute_code": "performance_fabric",
          "count": 2,
          "label": "Performance Fabric",
          "options": [
            {
              "label": "0",
              "value": "0",
              "count": 2
            },
            {
              "label": "1",
              "value": "1",
              "count": 2
            }
          ]
        },
        {
          "attribute_code": "erin_recommends",
          "count": 1,
          "label": "Erin Recommends",
          "options": [
            {
              "label": "0",
              "value": "0",
              "count": 4
            }
          ]
        },
        {
          "attribute_code": "new",
          "count": 2,
          "label": "New",
          "options": [
            {
              "label": "0",
              "value": "0",
              "count": 3
            },
            {
              "label": "1",
              "value": "1",
              "count": 1
            }
          ]
        },
        {
          "attribute_code": "sale",
          "count": 1,
          "label": "Sale",
          "options": [
            {
              "label": "0",
              "value": "0",
              "count": 4
            }
          ]
        },
        {
          "attribute_code": "style_bottom",
          "count": 5,
          "label": "Style Bottom",
          "options": [
            {
              "label": "Capri",
              "value": "107",
              "count": 2
            },
            {
              "label": "Leggings",
              "value": "109",
              "count": 1
            },
            {
              "label": "Parachute",
              "value": "110",
              "count": 1
            },
            {
              "label": "Sweatpants",
              "value": "113",
              "count": 1
            },
            {
              "label": "Track Pants",
              "value": "115",
              "count": 1
            }
          ]
        },
        {
          "attribute_code": "pattern",
          "count": 2,
          "label": "Pattern",
          "options": [
            {
              "label": "Color-Blocked",
              "value": "195",
              "count": 3
            },
            {
              "label": "Solid",
              "value": "197",
              "count": 1
            }
          ]
        },
        {
          "attribute_code": "climate",
          "count": 5,
          "label": "Climate",
          "options": [
            {
              "label": "Indoor",
              "value": "205",
              "count": 4
            },
            {
              "label": "Mild",
              "value": "206",
              "count": 4
            },
            {
              "label": "Spring",
              "value": "208",
              "count": 1
            },
            {
              "label": "Warm",
              "value": "209",
              "count": 2
            },
            {
              "label": "Hot",
              "value": "212",
              "count": 3
            }
          ]
        }
      ],
      "items": [
        {
          "name": "Karmen Yoga Pant",
          "sku": "WP01",
          "price_range": {
            "minimum_price": {
              "regular_price": {
                "value": 39,
                "currency": "USD"
              }
            }
          }
        },
        {
          "name": "Ida Workout Parachute Pant",
          "sku": "WP03",
          "price_range": {
            "minimum_price": {
              "regular_price": {
                "value": 48,
                "currency": "USD"
              }
            }
          }
        },
        {
          "name": "Bardot Capri",
          "sku": "WP08",
          "price_range": {
            "minimum_price": {
              "regular_price": {
                "value": 48,
                "currency": "USD"
              }
            }
          }
        },
        {
          "name": "Aeon Capri",
          "sku": "WP07",
          "price_range": {
            "minimum_price": {
              "regular_price": {
                "value": 48,
                "currency": "USD"
              }
            }
          }
        }
      ],
      "page_info": {
        "page_size": 25
      }
    }
  }
}
```

### Query with layered navigation and includeDirectChildrenOnly input filter applied

The following query returns aggregations that filters on items with these characteristics:

-  Women's Bottoms (category ID 22)
-  In the price range of $40 - $49.99
-  Comes in black (color 49)

Because the `includeDirectChildrenOnly` input filter is set to true, the category aggregation in the response will include only the Women's Pants and Shorts categories, which are direct children of the Women's Bottoms category.

<InlineAlert variant="info" slots="text" />

By default, you cannot filter on the `color` attribute. [Filtering with custom attributes](../../../usage/custom-filters.md) describes how to enable this attribute for filtering. You can also run the following query without enabling the attribute by deleting `, color: {eq: "49"}`.

**Request:**

```graphql
{
products(filter: {category_id: {eq: "22"}, price: {from: "40", to: "49.99"}, color: {eq: "49"}}, pageSize: 25, sort: {name: DESC}) {
    aggregations (filter: {category: {includeDirectChildrenOnly: true}}) {
      attribute_code
      count
      label
      options {
        label
        value
        count
      }
    }
    items {
      name
      sku
      price_range {
        minimum_price {
          regular_price {
            value
            currency
          }
        }
      }
    }
    page_info {
      page_size
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "products": {
      "aggregations": [
        {
          "attribute_code": "price",
          "count": 1,
          "label": "Price",
          "options": [
            {
              "label": "40-50",
              "value": "40_50",
              "count": 5
            }
          ]
        },
        {
          "attribute_code": "category_id",
          "count": 2,
          "label": "Category",
          "options": [
            {
              "label": "Pants",
              "value": "27",
              "count": 3
            },
            {
              "label": "Shorts",
              "value": "28",
              "count": 2
            }
          ]
        },
        {
          "attribute_code": "climate",
          "count": 7,
          "label": "Climate",
          "options": [
            {
              "label": "All-Weather",
              "value": "201",
              "count": 5
            },
            {
              "label": "Cool",
              "value": "203",
              "count": 1
            },
            {
              "label": "Indoor",
              "value": "204",
              "count": 4
            },
            {
              "label": "Mild",
              "value": "205",
              "count": 4
            },
            {
              "label": "Spring",
              "value": "207",
              "count": 3
            },
            {
              "label": "Warm",
              "value": "208",
              "count": 5
            },
            {
              "label": "Hot",
              "value": "211",
              "count": 1
            }
          ]
        },
        {
          "attribute_code": "pattern",
          "count": 3,
          "label": "Pattern",
          "options": [
            {
              "label": "Color-Blocked",
              "value": "194",
              "count": 1
            },
            {
              "label": "Solid",
              "value": "196",
              "count": 2
            },
            {
              "label": "Solid-Highlight",
              "value": "197",
              "count": 2
            }
          ]
        },
        {
          "attribute_code": "style_bottom",
          "count": 4,
          "label": "Style",
          "options": [
            {
              "label": "Basic",
              "value": "105",
              "count": 2
            },
            {
              "label": "Capri",
              "value": "106",
              "count": 3
            },
            {
              "label": "Compression",
              "value": "107",
              "count": 1
            },
            {
              "label": "Leggings",
              "value": "108",
              "count": 2
            }
          ]
        },
        {
          "attribute_code": "sale",
          "count": 1,
          "label": "Sale",
          "options": [
            {
              "label": "0",
              "value": "0",
              "count": 5
            }
          ]
        },
        {
          "attribute_code": "new",
          "count": 1,
          "label": "New",
          "options": [
            {
              "label": "0",
              "value": "0",
              "count": 5
            }
          ]
        },
        {
          "attribute_code": "erin_recommends",
          "count": 2,
          "label": "Erin Recommends",
          "options": [
            {
              "label": "0",
              "value": "0",
              "count": 4
            },
            {
              "label": "1",
              "value": "1",
              "count": 1
            }
          ]
        },
        {
          "attribute_code": "performance_fabric",
          "count": 1,
          "label": "Performance Fabric",
          "options": [
            {
              "label": "0",
              "value": "0",
              "count": 5
            }
          ]
        },
        {
          "attribute_code": "eco_collection",
          "count": 2,
          "label": "Eco Collection",
          "options": [
            {
              "label": "0",
              "value": "0",
              "count": 3
            },
            {
              "label": "1",
              "value": "1",
              "count": 2
            }
          ]
        },
        {
          "attribute_code": "size",
          "count": 5,
          "label": "Size",
          "options": [
            {
              "label": "28",
              "value": "171",
              "count": 5
            },
            {
              "label": "29",
              "value": "172",
              "count": 5
            },
            {
              "label": "30",
              "value": "173",
              "count": 1
            },
            {
              "label": "31",
              "value": "174",
              "count": 1
            },
            {
              "label": "32",
              "value": "175",
              "count": 1
            }
          ]
        },
        {
          "attribute_code": "material",
          "count": 7,
          "label": "Material",
          "options": [
            {
              "label": "Cotton",
              "value": "33",
              "count": 1
            },
            {
              "label": "Polyester",
              "value": "38",
              "count": 2
            },
            {
              "label": "Microfiber",
              "value": "149",
              "count": 1
            },
            {
              "label": "Spandex",
              "value": "150",
              "count": 4
            },
            {
              "label": "Organic Cotton",
              "value": "153",
              "count": 2
            },
            {
              "label": "CoolTech&trade;",
              "value": "155",
              "count": 1
            },
            {
              "label": "Wool",
              "value": "158",
              "count": 1
            }
          ]
        },
        {
          "attribute_code": "color",
          "count": 7,
          "label": "Color",
          "options": [
            {
              "label": "Black",
              "value": "49",
              "count": 5
            },
            {
              "label": "Blue",
              "value": "50",
              "count": 2
            },
            {
              "label": "Gray",
              "value": "52",
              "count": 1
            },
            {
              "label": "Green",
              "value": "53",
              "count": 1
            },
            {
              "label": "Orange",
              "value": "56",
              "count": 3
            },
            {
              "label": "Purple",
              "value": "57",
              "count": 1
            },
            {
              "label": "White",
              "value": "59",
              "count": 2
            }
          ]
        }
      ],
      "items": [
        {
          "name": "Diana Tights",
          "sku": "WP06",
          "price_range": {
            "minimum_price": {
              "regular_price": {
                "value": 59,
                "currency": "USD"
              }
            }
          }
        },
        {
          "name": "Daria Bikram Pant",
          "sku": "WP10",
          "price_range": {
            "minimum_price": {
              "regular_price": {
                "value": 51,
                "currency": "USD"
              }
            }
          }
        },
        {
          "name": "Carina Basic Capri",
          "sku": "WP09",
          "price_range": {
            "minimum_price": {
              "regular_price": {
                "value": 51,
                "currency": "USD"
              }
            }
          }
        },
        {
          "name": "Artemis Running Short",
          "sku": "WSH04",
          "price_range": {
            "minimum_price": {
              "regular_price": {
                "value": 45,
                "currency": "USD"
              }
            }
          }
        },
        {
          "name": "Ana Running Short",
          "sku": "WSH10",
          "price_range": {
            "minimum_price": {
              "regular_price": {
                "value": 40,
                "currency": "USD"
              }
            }
          }
        }
      ],
      "page_info": {
        "page_size": 25
      }
    }
  }
}
```

### Return minimum and maximum prices and discount information

In the following example, a catalog price rule that provides a 10% discount on all fitness equipment is in effect. The product queried, `24-WG080`, is the Sprite Yoga Companion Kit bundle product. This product has two user-selected options that cause the price to vary. If you choose to query a product that is not a composite (bundle, group, or configurable) product, the minimum and maximum prices are the same.

**Request:**

```graphql
{
  products(filter: {sku: {eq: "24-WG080"}}, sort: {name: ASC}) {
    items {
      name
      sku
      price_range {
        minimum_price {
          regular_price {
            value
            currency
          }
          final_price {
            value
            currency
          }
          discount {
            amount_off
            percent_off
          }
        }
        maximum_price {
          regular_price {
            value
            currency
          }
          final_price {
            value
            currency
          }
          discount {
            amount_off
            percent_off
          }
        }
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "products": {
      "items": [
        {
          "name": "Sprite Yoga Companion Kit",
          "sku": "24-WG080",
          "price_range": {
            "minimum_price": {
              "regular_price": {
                "value": 61,
                "currency": "USD"
              },
              "final_price": {
                "value": 54.9,
                "currency": "USD"
              },
              "discount": {
                "amount_off": 6.1,
                "percent_off": 10
              }
            },
            "maximum_price": {
              "regular_price": {
                "value": 77,
                "currency": "USD"
              },
              "final_price": {
                "value": 69.3,
                "currency": "USD"
              },
              "discount": {
                "amount_off": 7.7,
                "percent_off": 10
              }
            }
          }
        }
      ]
    }
  }
}
```

### Sort by a custom attribute

In this example, the `description` attribute has been enabled by setting the **Stores** > Attributes > **Product** > description > **Storefront Properties** > **Use in Search** and **Used for Sorting in Product Listing** fields to Yes. The query returns all products with a price range of $28 to $30, sorted by the description.

**Request:**

```graphql
{
  products(filter: { price: { from: "28" to: "30"} }
  sort: {
    description: ASC
  }) {
    total_count
    items {
      name
      sku
      description {
        html
      }
      price_range {
        maximum_price {
          regular_price {
            value
          }
        }
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "products": {
      "total_count": 25,
      "items": [
        {
          "name": "Erikssen CoolTech&trade; Fitness Tank",
          "sku": "MT01",
          "description": {
            "html": "<p>A good running tank helps make the miles pass by keep you cool. The Erikssen CoolTech&trade; Fitness Tank completes that mission, with performance fabric engineered to wick perspiration and promote airflow.</p>\n<p>&bull; Red performance tank.<br />&bull; Slight scoop neckline. <br />&bull; Reflectivity. <br />&bull; Machine wash/dry.</p>"
          },
          "price_range": {
            "maximum_price": {
              "regular_price": {
                "value": 29
              }
            }
          }
        },
        {
          "name": "Primo Endurance Tank",
          "sku": "MT03",
          "description": {
            "html": "<p>Chances are your workout goes beyond free weights, which is why the Primo Endurance Tank employs maximum versatility. Run, lift or play ball &ndash; this breathable mesh top will keep you cool during all your activities.</p>\n<p>&bull; Red heather tank with gray pocket.<br />&bull; Chafe-resistant flatlock seams. <br />&bull; Relaxed fit. <br />&bull; Contrast topstitching.<br />&bull; Machine wash/dry.</p>"
          },
          "price_range": {
            "maximum_price": {
              "regular_price": {
                "value": 29
              }
            }
          }
        },
        ...
    }
  }
}
```

### Retrieve related products, up-sells, and cross-sells

<Edition name="paas" />

The following query shows how to get related products, up-sells, and cross-sells for a product:

**Request:**

```graphql
{
  products(filter: { sku: { eq: "24-WB06" } }) {
    items {
      uid
      name
      related_products {
        uid
        name
      }
      upsell_products {
        uid
        name
      }
      crosssell_products {
        uid
        name
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "products": {
      "items": [
        {
          "uid": "MTE=",
          "name": "Endeavor Daytrip Backpack",
          "related_products": [
            {
              "uid": "MTU=",
              "name": "Affirm Water Bottle "
            },
            {
              "uid": "MTg=",
              "name": "Pursuit Lumaflex&trade; Tone Band"
            },
            {
              "uid": "MTY=",
              "name": "Dual Handle Cardio Ball"
            },
            {
              "uid": "MTc=",
              "name": "Zing Jump Rope"
            }
          ],
          "upsell_products": [
            {
              "uid": "MQ==",
              "name": "Joust Duffle Bag"
            },
            {
              "uid": "Mw==",
              "name": "Crown Summit Backpack"
            },
            {
              "uid": "NA==",
              "name": "Wayfarer Messenger Bag"
            },
            {
              "uid": "NQ==",
              "name": "Rival Field Messenger"
            },
            {
              "uid": "Ng==",
              "name": "Fusion Backpack"
            },
            {
              "uid": "Nw==",
              "name": "Impulse Duffle"
            },
            {
              "uid": "MTI=",
              "name": "Driven Backpack"
            },
            {
              "uid": "MTM=",
              "name": "Overnight Duffle"
            },
            {
              "uid": "MTQ=",
              "name": "Push It Messenger Bag"
            }
          ],
          "crosssell_products": [
            {
              "uid": "MTI=",
              "name": "Driven Backpack"
            },
            {
              "uid": "OA==",
              "name": "Voyage Yoga Bag"
            },
            {
              "uid": "Ng==",
              "name": "Fusion Backpack"
            },
            {
              "uid": "Nw==",
              "name": "Impulse Duffle"
            },
            {
              "uid": "OQ==",
              "name": "Compete Track Tote"
            },
            {
              "uid": "Mw==",
              "name": "Crown Summit Backpack"
            },
            {
              "uid": "MTQ=",
              "name": "Push It Messenger Bag"
            },
            {
              "uid": "MQ==",
              "name": "Joust Duffle Bag"
            },
            {
              "uid": "MTA=",
              "name": "Savvy Shoulder Tote"
            },
            {
              "uid": "Mg==",
              "name": "Strive Shoulder Pack"
            },
            {
              "uid": "NA==",
              "name": "Wayfarer Messenger Bag"
            },
            {
              "uid": "MTM=",
              "name": "Overnight Duffle"
            },
            {
              "uid": "NQ==",
              "name": "Rival Field Messenger"
            },
            {
              "uid": "MTg=",
              "name": "Pursuit Lumaflex&trade; Tone Band"
            },
            {
              "uid": "MjE=",
              "name": "Sprite Foam Yoga Brick"
            },
            {
              "uid": "MzI=",
              "name": "Sprite Stasis Ball 75 cm"
            },
            {
              "uid": "NDU=",
              "name": "Set of Sprite Yoga Straps"
            }
          ]
        }
      ]
    }
  }
}
```

### Media gallery search

The following query returns media gallery information about the product with the `sku` of `24-MB01`.

**Request:**

```graphql
query {
  productDetail: products(
    pageSize: 5
    filter: {
       sku: { eq: "24-MB01" }
    }
  ) {
    total_count
    items {
      sku
      uid
      name
      image {
        url
        label
      }
      small_image{
          url
          label
      }
      media_gallery {
          url
          label
          ... on ProductVideo {
              video_content {
                  media_type
                  video_provider
                  video_url
                  video_title
                  video_description
                  video_metadata
              }
          }
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "productDetail": {
      "total_count": 1,
      "items": [
        {
          "sku": "24-MB01",
          "uid": "MQ==",
          "name": "Joust Duffle Bag",
          "image": {
            "url": "http://h3.test/media/catalog/product/cache/f2894681b4002ea001bba48638ea0dbc/m/b/mb01-blue-0.jpg",
            "label": "Joust Duffle Bag"
          },
          "small_image": {
            "url": "http://h3.test/media/catalog/product/cache/f2894681b4002ea001bba48638ea0dbc/m/b/mb01-blue-0.jpg",
            "label": "Joust Duffle Bag"
          },
          "media_gallery": [
            {
              "url": "http://h3.test/media/catalog/product/cache/f2894681b4002ea001bba48638ea0dbc/m/b/mb01-blue-0.jpg",
              "label": "Image"
            }
          ]
        }
      ]
    }
  }
}
```

### Query the rewrite information for a URL

The following product query returns URL rewrite information about the Joust Duffle Bag.

**Request:**

```graphql
{
  products(search: "Joust") {
    items {
      name
      sku
      url_rewrites {
        url
        parameters {
          name
          value
        }
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "products": {
      "items": [
        {
          "name": "Joust Duffle Bag",
          "sku": "24-MB01",
          "url_rewrites": [
            {
              "url": "no-route",
              "parameters": [
                {
                  "name": "page_id",
                  "value": "1"
                }
              ]
            },
            {
              "url": "joust-duffle-bag.html",
              "parameters": [
                {
                  "name": "id",
                  "value": "1"
                }
              ]
            },
            {
              "url": "gear/joust-duffle-bag.html",
              "parameters": [
                {
                  "name": "id",
                  "value": "1"
                },
                {
                  "name": "category",
                  "value": "3"
                }
              ]
            },
            {
              "url": "gear/bags/joust-duffle-bag.html",
              "parameters": [
                {
                  "name": "id",
                  "value": "1"
                },
                {
                  "name": "category",
                  "value": "4"
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
```

### Retrieve variant `uid` values

The following query returns information about each variant of the configurable product `WSH12`. Each variant has a unique combination of color and size values. Specify the `uid` values in the `selected_options` array of the [`addProductsToCart` mutation](../../cart/mutations/add-products.md) to indicate which variants the shopper selected.

**Request:**

```graphql
{
  products(filter: {sku: {eq: "WSH12"}}) {
    items {
      sku
      ... on ConfigurableProduct {
        variants {
          attributes {
            uid
            label
            code
          }
        }
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "products": {
      "items": [
        {
          "sku": "WSH12",
          "variants": [
            {
              "attributes": [
                {
                  "uid": "Y29uZmlndXJhYmxlLzkzLzUz",
                  "label": "Green",
                  "code": "color"
                },
                {
                  "uid": "Y29uZmlndXJhYmxlLzE2MC8xNzE=",
                  "label": "28",
                  "code": "size"
                }
              ]
            },
            {
              "attributes": [
                {
                  "uid": "Y29uZmlndXJhYmxlLzkzLzU3",
                  "label": "Purple",
                  "code": "color"
                },
                {
                  "uid": "Y29uZmlndXJhYmxlLzE2MC8xNzE=",
                  "label": "28",
                  "code": "size"
                }
              ]
            },
            {
              "attributes": [
                {
                  "uid": "Y29uZmlndXJhYmxlLzkzLzU4",
                  "label": "Red",
                  "code": "color"
                },
                {
                  "uid": "Y29uZmlndXJhYmxlLzE2MC8xNzE=",
                  "label": "28",
                  "code": "size"
                }
              ]
            },
            {
              "attributes": [
                {
                  "uid": "Y29uZmlndXJhYmxlLzkzLzUz",
                  "label": "Green",
                  "code": "color"
                },
                {
                  "uid": "Y29uZmlndXJhYmxlLzE2MC8xNzI=",
                  "label": "29",
                  "code": "size"
                }
              ]
            },
            {
              "attributes": [
                {
                  "uid": "Y29uZmlndXJhYmxlLzkzLzU3",
                  "label": "Purple",
                  "code": "color"
                },
                {
                  "uid": "Y29uZmlndXJhYmxlLzE2MC8xNzI=",
                  "label": "29",
                  "code": "size"
                }
              ]
            },
            {
              "attributes": [
                {
                  "uid": "Y29uZmlndXJhYmxlLzkzLzU4",
                  "label": "Red",
                  "code": "color"
                },
                {
                  "uid": "Y29uZmlndXJhYmxlLzE2MC8xNzI=",
                  "label": "29",
                  "code": "size"
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
```

### Filter `custom_attributesV2` of a product

< CustomAttributeFilterProduct />
