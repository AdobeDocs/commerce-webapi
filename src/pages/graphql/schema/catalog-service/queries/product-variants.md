---
title: variants query
description: "Describes how to construct and use the Catalog Service `variants` query to retrieve details about the variants available for a product."
keywords:
  - GraphQL
  - Services
---

# variants query

The `variants` query returns details about all variations of a product.

The `variants` query is useful for showing variant images on product detail (PDP) or product listing (PLP) pages without submitting multiple API requests.

Query results are paginated with a default, maximum pagination size of 100. The query supports [cursor-based pagination](https://graphql.org/learn/pagination/#pagination-and-edges) as follows:

- The initial query returns a cursor value marking the last item in the current page.
- If all results are returned, the `cursor` value is `null`.
- If more results are available, use the `cursor` value returned in subsequent queries to fetch additional results. For an example, see [Paginate product variant results](#return-all-variants-using-pagination).

## Syntax

```graphql
variants(sku: String!, optionIds: [String!], pageSize: Int, cursor: String): ProductViewVariantResults
```

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

**URL structure for SaaS endpoints:**

- `region` is the cloud region where your instance is deployed.
- `environment` is the environment type, such as `sandbox`. If the environment is production, this value is omitted.
- `tenantId` is the unique identifier for your organization's specific instance within the Adobe Experience Cloud.

## Required headers

You must specify the following HTTP headers to run this query.

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

The `variants` query requires at least one SKU value as input. Optionally, you can specify `optionIDs` and pagination controls. Specify `optionIDs` to retrieve variants based on product options such as size or color. See [Input fields](#input-fields).

## Return all variants using pagination

The following query returns the SKU, name, and available image information for all variants of the MH07 product. Setting the query pagination to `10` fetches the first ten results.

<CodeBlock slots="heading, code" repeat="2" languages="JSON" />

**Request:**

```graphql
query {
  variants(sku: "MH07", pageSize: 10) {
    variants {
      selections
      product {
        sku
        name
        images(roles: []) {
          url
          label
          roles
        }
      }
    }
    cursor
  }
}
```

**Response:**

```json
{
  "data": {
    "variants": {
      "variants": [
        {
          "selections": [
            "Y29uZmlndXJhYmxlLzkzLzU4",
            "Y29uZmlndXJhYmxlLzE4Ni8xODM="
          ],
          "product": {
            "sku": "MH07-31-Black",
            "name": "Hero Hoodie28-31-Black",
            "images": []
          }
        },
        {
          "selections": [
            "Y29uZmlndXJhYmxlLzkzLzU5",
            "Y29uZmlndXJhYmxlLzE4Ni8xODM="
          ],
          "product": {
            "sku": "MH07-31-Blue",
            "name": "Hero Hoodie28-31-Blue",
            "images": []
          }
        },
        {
          "selections": [
            "Y29uZmlndXJhYmxlLzE4Ni8xODM=",
            "Y29uZmlndXJhYmxlLzkzLzYx"
          ],
          "product": {
            "sku": "MH07-31-Gray",
            "name": "Hero Hoodie28-31-Gray",
            "images": []
          }
        },
        {
          "selections": [
            "Y29uZmlndXJhYmxlLzkzLzYy",
            "Y29uZmlndXJhYmxlLzE4Ni8xODM="
          ],
          "product": {
            "sku": "MH07-31-Green",
            "name": "Hero Hoodie28-31-Green",
            "images": []
          }
        },
        {
          "selections": [
            "Y29uZmlndXJhYmxlLzkzLzU4",
            "Y29uZmlndXJhYmxlLzE4Ni8xODY="
          ],
          "product": {
            "sku": "MH07-34-Black",
            "name": "Hero Hoodie28-34-Black",
            "images": []
          }
        },
        {
          "selections": [
            "Y29uZmlndXJhYmxlLzE4Ni8xODY=",
            "Y29uZmlndXJhYmxlLzkzLzU5"
          ],
          "product": {
            "sku": "MH07-34-Blue",
            "name": "Hero Hoodie28-34-Blue",
            "images": []
          }
        },
        {
          "selections": [
            "Y29uZmlndXJhYmxlLzkzLzYx",
            "Y29uZmlndXJhYmxlLzE4Ni8xODY="
          ],
          "product": {
            "sku": "MH07-34-Gray",
            "name": "Hero Hoodie28-34-Gray",
            "images": []
          }
        },
        {
          "selections": [
            "Y29uZmlndXJhYmxlLzE4Ni8xODY=",
            "Y29uZmlndXJhYmxlLzkzLzYy"
          ],
          "product": {
            "sku": "MH07-34-Green",
            "name": "Hero Hoodie28-34-Green",
            "images": []
          }
        },
        {
          "selections": [
            "Y29uZmlndXJhYmxlLzkzLzU4",
            "Y29uZmlndXJhYmxlLzE4Ni8xNzg="
          ],
          "product": {
            "sku": "MH07-L-Black",
            "name": "Hero Hoodie-L-Black",
            "images": [
              {
                "url": "http://example.com/media/catalog/product/m/h/mh07-black_main_2.jpg",
                "label": "",
                "roles": [
                  "image",
                  "small_image",
                  "thumbnail"
                ]
              }
            ]
          }
        },
        {
          "selections": [
            "Y29uZmlndXJhYmxlLzE4Ni8xNzg=",
            "Y29uZmlndXJhYmxlLzkzLzU5"
          ],
          "product": {
            "sku": "MH07-L-Blue",
            "name": "Hero Hoodie28-L-Blue",
            "images": []
          }
        }
      ],
      "cursor": "TUgwNy1MLUJsdWU6Ojo6OjoxMA=="
    }
  }
}
```

#### Return results by `cursor` position

Using the cursor value from the previous response (`TUgwNy1MLUJsdWU6Ojo6OjoxMA==`) as input, run the same query to fetch the next set of results. When the last variant item is returned, the cursor value is `null`.

<CodeBlock slots="heading, code" repeat="2" languages="JSON" />

**Request:**

```graphql
query {
  variants(sku: "MH07", pageSize: 10 cursor: "TUgwNy1MLUJsdWU6Ojo6OjoxMA==") {
    variants {
      selections
      product {
        sku
        name
        images(roles: []) {
          url
          label
          roles
        }
      }
    }
    cursor
  }
}
```

**Response:**

```json
{
  "data": {
    "variants": {
      "variants": [
        {
          "selections": [
            "Y29uZmlndXJhYmxlLzkzLzYx",
            "Y29uZmlndXJhYmxlLzE4Ni8xNzg="
          ],
          "product": {
            "sku": "MH07-L-Gray",
            "name": "Hero Hoodie-L-Gray",
            "images": [
              {
                "url": "http://example.com/media/catalog/product/m/h/mh07-gray_main_2.jpg",
                "label": "",
                "roles": [
                  "image",
                  "small_image",
                  "thumbnail"
                ]
              },
              {
                "url": "http://example.com/media/catalog/product/m/h/mh07-gray_alt1_2.jpg",
                "label": "",
                "roles": []
              },
              {
                "url": "http://example.com/media/catalog/product/m/h/mh07-gray_back_2.jpg",
                "label": "",
                "roles": []
              }
            ]
          }
        },
        {
          "selections": [
            "Y29uZmlndXJhYmxlLzkzLzYy",
            "Y29uZmlndXJhYmxlLzE4Ni8xNzg="
          ],
          "product": {
            "sku": "MH07-L-Green",
            "name": "Hero Hoodie-L-Green",
            "images": [
              {
                "url": "http://example.com/media/catalog/product/m/h/mh07-green_main_2.jpg",
                "label": "",
                "roles": [
                  "image",
                  "small_image",
                  "thumbnail"
                ]
              }
            ]
          }
        },
        {
          "selections": [
            "Y29uZmlndXJhYmxlLzkzLzU4",
            "Y29uZmlndXJhYmxlLzE4Ni8xNzc="
          ],
          "product": {
            "sku": "MH07-M-Black",
            "name": "Hero Hoodie-M-Black",
            "images": [
              {
                "url": "http://example.com/media/catalog/product/m/h/mh07-black_main_2.jpg",
                "label": "",
                "roles": [
                  "image",
                  "small_image",
                  "thumbnail"
                ]
              }
            ]
          }
        },
        {
          "selections": [
            "Y29uZmlndXJhYmxlLzkzLzU5",
            "Y29uZmlndXJhYmxlLzE4Ni8xNzc="
          ],
          "product": {
            "sku": "MH07-M-Blue",
            "name": "Hero Hoodie28-M-Blue",
            "images": []
          }
        },
        {
          "selections": [
            "Y29uZmlndXJhYmxlLzkzLzYx",
            "Y29uZmlndXJhYmxlLzE4Ni8xNzc="
          ],
          "product": {
            "sku": "MH07-M-Gray",
            "name": "Hero Hoodie-M-Gray",
            "images": [
              {
                "url": "http://example.com/media/catalog/product/m/h/mh07-gray_main_2.jpg",
                "label": "",
                "roles": [
                  "image",
                  "small_image",
                  "thumbnail"
                ]
              },
              {
                "url": "http://example.com/media/catalog/product/m/h/mh07-gray_alt1_2.jpg",
                "label": "",
                "roles": []
              },
              {
                "url": "http://example.com/media/catalog/product/m/h/mh07-gray_back_2.jpg",
                "label": "",
                "roles": []
              }
            ]
          }
        },
        {
          "selections": [
            "Y29uZmlndXJhYmxlLzkzLzYy",
            "Y29uZmlndXJhYmxlLzE4Ni8xNzc="
          ],
          "product": {
            "sku": "MH07-M-Green",
            "name": "Hero Hoodie-M-Green",
            "images": [
              {
                "url": "http://example.com/media/catalog/product/m/h/mh07-green_main_2.jpg",
                "label": "",
                "roles": [
                  "image",
                  "small_image",
                  "thumbnail"
                ]
              }
            ]
          }
        },
        {
          "selections": [
            "Y29uZmlndXJhYmxlLzkzLzU4",
            "Y29uZmlndXJhYmxlLzE4Ni8xNzY="
          ],
          "product": {
            "sku": "MH07-S-Black",
            "name": "Hero Hoodie-S-Black",
            "images": [
              {
                "url": "http://example.com/media/catalog/product/m/h/mh07-black_main_1.jpg",
                "label": "",
                "roles": [
                  "image",
                  "small_image",
                  "thumbnail"
                ]
              }
            ]
          }
        },
        {
          "selections": [
            "Y29uZmlndXJhYmxlLzkzLzU5",
            "Y29uZmlndXJhYmxlLzE4Ni8xNzY="
          ],
          "product": {
            "sku": "MH07-S-Blue",
            "name": "Hero Hoodie28-S-Blue",
            "images": []
          }
        },
        {
          "selections": [
            "Y29uZmlndXJhYmxlLzkzLzYx",
            "Y29uZmlndXJhYmxlLzE4Ni8xNzY=",
            "Y29uZmlndXJhYmxlLzkzLzUwOA=="
          ],
          "product": {
            "sku": "MH07-S-Gray",
            "name": "Hero Hoodie-S-Gray",
            "images": [
              {
                "url": "http://example.com/media/catalog/product/m/h/mh07-gray_main_2.jpg",
                "label": "",
                "roles": [
                  "image",
                  "small_image",
                  "thumbnail"
                ]
              },
              {
                "url": "http://example.com/media/catalog/product/m/h/mh07-gray_alt1_2.jpg",
                "label": "",
                "roles": []
              },
              {
                "url": "http://example.com/media/catalog/product/m/h/mh07-gray_back_2.jpg",
                "label": "",
                "roles": []
              }
            ]
          }
        },
        {
          "selections": [
            "Y29uZmlndXJhYmxlLzE4Ni8xNzY=",
            "Y29uZmlndXJhYmxlLzkzLzYy"
          ],
          "product": {
            "sku": "MH07-S-Green",
            "name": "Hero Hoodie-S-Green",
            "images": [
              {
                "url": "http://example.com/media/catalog/product/m/h/mh07-green_main_2.jpg",
                "label": "",
                "roles": [
                  "image",
                  "small_image",
                  "thumbnail"
                ]
              }
            ]
          }
        }
      ],
      "cursor": "TUgwNy1TLUdyZWVuOjo6Ojo6MTA="
    }
  }
}
```

## Return variants by `optionId`

This query returns the SKU, name, and images for all size large variants of product MH07. The `optionIDs` input parameter value is sourced from the [Return details about a complex product](products.md#return-details-about-a-complex-product) example in the products query. The `optionIDs` parameter can be specified as a single string, or an array if you supply multiple values.

<CodeBlock slots="heading, code" repeat="2" languages="JSON, CURL, JSON" />

**Request:**

```graphql
query {
  variants(sku: "MH07", optionIds: "Y29uZmlndXJhYmxlLzE4Ni8xNzg=") {
    variants {
      selections
      product {
        sku
        name
        images(roles: []) {
          url
          label
          roles
        }
      }
    }
    cursor
  }
}

```

**Response:**

```json
{
  "data": {
    "variants": {
      "variants": [
        {
          "selections": [
            "Y29uZmlndXJhYmxlLzE4Ni8xNzg=",
            "Y29uZmlndXJhYmxlLzkzLzU4"
          ],
          "product": {
            "sku": "MH07-L-Black",
            "name": "Hero Hoodie-L-Black",
            "images": [
              {
                "url": "http://example.com/media/catalog/product/m/h/mh07-black_main_2.jpg",
                "label": "",
                "roles": [
                  "image",
                  "small_image",
                  "thumbnail"
                ]
              }
            ]
          }
        },
        {
          "selections": [
            "Y29uZmlndXJhYmxlLzE4Ni8xNzg=",
            "Y29uZmlndXJhYmxlLzkzLzU5"
          ],
          "product": {
            "sku": "MH07-L-Blue",
            "name": "Hero Hoodie28-L-Blue",
            "images": []
          }
        },
        {
          "selections": [
            "Y29uZmlndXJhYmxlLzE4Ni8xNzg=",
            "Y29uZmlndXJhYmxlLzkzLzYx"
          ],
          "product": {
            "sku": "MH07-L-Gray",
            "name": "Hero Hoodie-L-Gray",
            "images": [
              {
                "url": "http://example.com/media/catalog/product/m/h/mh07-gray_main_2.jpg",
                "label": "",
                "roles": [
                  "image",
                  "small_image",
                  "thumbnail"
                ]
              },
              {
                "url": "http://example.com/media/catalog/product/m/h/mh07-gray_alt1_2.jpg",
                "label": "",
                "roles": []
              },
              {
                "url": "http://example.com/media/catalog/product/m/h/mh07-gray_back_2.jpg",
                "label": "",
                "roles": []
              }
            ]
          }
        },
        {
          "selections": [
            "Y29uZmlndXJhYmxlLzkzLzYy",
            "Y29uZmlndXJhYmxlLzE4Ni8xNzg="
          ],
          "product": {
            "sku": "MH07-L-Green",
            "name": "Hero Hoodie-L-Green",
            "images": [
              {
                "url": "http://example.com/media/catalog/product/m/h/mh07-green_main_2.jpg",
                "label": "",
                "roles": [
                  "image",
                  "small_image",
                  "thumbnail"
                ]
              }
            ]
          }
        }
      ],
      "cursor": null
    }
  }
}
```

## Input fields

You must specify a SKU value for the query.

| Field | Data type | Description |
| --- | --- | --- |
| `cursor` | String | Manages pagination of variant results. Include the `cursor` value returned in the results from a previous `variants` query to fetch the next set of results. See [Return results by cursor position](#return-results-by-cursor-position) example. |
| `optionIds` | [String!] | A list of IDs assigned to the product options the shopper has selected, such as specific colors and sizes. |
| `pageSize` | Int | Specifies the maximum number of results to return. Default: 100. |
| `sku` | String! |  The SKU of a complex product. |

## Output fields

This query returns a `ProductViewVariantResults` object, which contains the `cursor` field and a list of `ProductViewVariant` objects, one for each variant associated with the product SKU.

| Field     | Data Type          | Description                                 |
|---------------|------------------------|-------------------------------------------------|
| `cursor`      | `String`               | Returns the cursor for the last item in the current page of results. Use this cursor in the `variants` query to fetch the next set of results. If there are no more results, the cursor value is `null`. |
| `variants`    | `[ProductViewVariant]!`| List of product variants. |

### ProductViewVariant type

| Field         | Data Type              | Description                                     |
|---------------|------------------------|-------------------------------------------------|
| `product`     | [`ProductView`](#productview-interface)  | Provides information about the returned variant. |
| `selections`  | `[String!]`            | List of option id values that define the variant. For example, the id value for color and size options for a clothing product.|

### ProductView interface

The `ProductView` return object is an interface that can contain the following fields. It is implemented by the [`SimpleProductView`](#simpleproductview-type) and [`ComplexProductView`](#complexproductview-type) types.

| Field | Data Type | Description |
| --- | --- | --- |
| `addToCartAllowed` | Boolean | Indicates whether the product can be added to the cart. |
| `attributes(roles: [String])` | [`[ProductViewAttribute]`](#productviewattribute-type) | A list of merchant-defined attributes designated for the storefront. |
| `description` | String | The detailed description of the product. |
| `externalId`| String | The external ID of the product. |
| `id` | ID! | The product ID, generated as a composite key, unique per locale. |
| `images(roles: [String])` | [`[ProductViewImage]`](#productviewimage-type) | A list of images defined for the product. |
| `inputOptions` | [`[ProductViewInputOption]`](#productviewinputoption-type) | A list of input options the shopper can supply to customize a product. |
| `inStock` | Boolean | Indicates whether the product is in stock. |
| `lastModifiedAt` | DateTime | Date and time when the product was last updated. |
| `links(linkTypes: [String!])` | [`[ProductViewLink]`](#productviewlink-type) | A list of related, corss-sell, or up-sell products. |
| `lowStock` | Boolean | Indicates whether the product stock is low. |
| `metaDescription` | String | A brief overview of the product for search results listings. |
| `metaKeyword` | String | A comma-separated list of keywords that are visible only to search engines. |
| `metaTitle` | String | A string that is displayed in the title bar and tab of the browser and in search results lists. |
| `name` | String | Product name. |
| `shortDescription` | String | A summary of the product. |
| `sku` | String | Product SKU. |
| `url` | String | Canonical URL of the product. |
| `urlKey` | String | URL key of the product. |

### ComplexProductView type

The `ComplexProductView` type represents bundle, configurable, and group products. Complex product prices are returned as a price range, because price values can vary based on selected options. The type implements `ProductView`.

| Field | Data Type | Description |
| --- | --- | --- |
| `addToCartAllowed` | Boolean | Indicates whether the product can be added to the cart. |
| `attributes(roles: [String])` | [`[ProductViewAttribute]`](#productviewattribute-type) | A list of merchant-defined attributes designated for the storefront. |
| `description` | String | The detailed description of the product. |
| `externalId`| String | The external ID of the product. |
| `id` | ID! | The product ID, generated as a composite key, unique per locale. |
| `images(roles: [String])` | [`[ProductViewImage]`](#productviewimage-type) | A list of images defined for the product. |
| `inputOptions` | [`[ProductViewInputOption]`](#productviewinputoption-type) | A list of input options the shopper can supply to customize a product. |
| `inStock` | Boolean | Indicates whether the product is in stock. |
| `links(linkTypes: [String!])` | [`[ProductViewLink]`](#productviewlink-type) | A list of product links. |
| `lowStock` | Boolean | Indicates whether the product stock is low. |
| `metaDescription` | String | A brief overview of the product for search results listings. |
| `metaKeyword` | String | A comma-separated list of keywords that are visible only to search engines. |
| `metaTitle` | String | A string that is displayed in the title bar and tab of the browser and in search results lists. |
| `name` | String | Product name. |
| `options` | [`[ProductViewOption]`](#productviewoption-type) | A list of selectable options. |
| `priceRange` | [`ProductViewPriceRange`](#productviewpricerange-type) | A range of possible prices for a complex product. |
| `shortDescription` | String | A summary of the product. |
| `sku` | String | Product SKU. |
| `url` | String | Canonical URL of the product. |
| `urlKey` | String | URL key of the product. |
| `videos` | `[ProductViewVideo]`(#productviewvideo-type) | A list of videos linked to the product. |

### Price type

The `Price type` defines the price of a simple product or a part of a price range for a complex product. It can include a list of price adjustments.

| Field | Data Type | Description |
| --- | --- | --- |
| `adjustments` | [`[PriceAdjustment]`](#priceadjustment-type) | A list of price adjustments. |
| `amount` | [`ProductViewMoney`](#productviewmoney-type) | Contains the monetary value and currency code of a product. |

### PriceAdjustment type

The `PriceAdjustment` type specifies the amount and type of a price adjustment. An example code value is `weee`.

| Field | Data Type | Description |
| --- | --- | --- |
| `amount` | Float | The amount of the price adjustment. |
| `code` | String | Identifies the type of price adjustment. |

### ProductViewAttribute type

The `ProductViewAttribute` type is a container for customer-defined attributes that are displayed the storefront.

| Field | Data Type | Description |
| --- | --- | --- |
| `label` | String | Label of the attribute. |
| `name` | String! | Name of an attribute code. |
| `roles` | [String] | Roles designated for an attribute on the storefront, such as "Show on PLP", "Show in PDP", or "Show in Search". |
| `value` | JSON | Attribute value, arbitrary of type. |

### ProductViewImage type

The `ProductViewImage` type contains details about a product image.

| Field | Data Type | Description |
| --- | --- | --- |
| `label` | String | The display label of the product image. |
| `roles` | [String] | A list that describes how the image is used. Can be `image`, `small_image`, or `thumbnail`. |
| `url` | String! | The URL to the product image. |

### ProductViewLink type

The `ProductViewLink` type contains details about product links for related products and cross selling.

| Field | Data Type | Description |
| --- | --- | --- |
| `linkTypes` | [String!]! | Types of links for this product. Can be `crosssell`, `related`, and `upsell`. |
| `product` | `ProductView!` | Details about the product in the link. |

### ProductViewMoney type

The `ProductViewMoney` type defines a monetary value, including a numeric value and a currency code.

| Field | Data Type | Description |
| --- | --- | --- |
| `currency` | ProductViewCurrency | A three-letter currency code, such as USD or EUR. |
| `value` | Float | A number expressing a monetary value. |

### ProductViewInputOption type

Product input options provide details about how a shopper can enter customization details for a product. For example, for product personalization the input options might provide the fields for the shopper to add an image or text for a monogram. The input option can include an associated `markupAmount` that is applied to the product price. For additional information, see [Product settings - Customizable Options](https://experienceleague.adobe.com/en/docs/commerce-admin/catalog/products/settings/settings-advanced-custom-options).

| Field | Data Type | Description |
| -- | -- | -- |
| `fileExtensions` | String | A comma separated list of accepted file types for the input option if it has an associated file, for example `png, jpg`. |
| `id` | ID | The ID of the option value. |
| `imageSize` | [`ProductViewInputOptionImageSize`](#productviewinputoptionimagesize-type) | Dimensions of an image associated with the input option. |
| `markupAmount` | Float | Amount to add or subtract from the product price when the option is configured. |
| `range` |[`ProductViewInputOptionRange`](#productviewinputoptionrange-type)| Value limits associated with an input option, for example allowed characters or file size. |
| `required` | Boolean | Indicates whether the option must be supplied. |
| `sortOrder` | Int | Indicates the order in which the option is displayed if multiple input options are configured. |
| `suffix` | String | SKU suffix added to the customized product. |
| `title` | String | The display name of the option value. |
| `type` | String | The type of control for entering the input option, for example `textfield`, `textarea`, `date`, `date_time`, `time`, `file`. |

### ProductViewInputOptionRange type

Lists the value range associated with a `[ProductViewInputOption]`. For example, if the input option is a text field, the range represents the number of characters.

| Field | Data Type | Description |
| -- | -- | -- |
| `from` | Float | Minimum value accepted for the option input. |
| `to` | Float | Maximum value accepted for the option input. |

### ProductViewInputOptionImageSize type

Lists the image dimensions for an image associated with a `[ProductViewInputOption]`.

| Field | Data Type | Description |
| -- | -- | -- |
| `height` | Int | Height of image provided for an input option. |
| `width` |  Int | Width of image provided for an input option. |

### ProductViewOption type

Product options provide a way to configure products by making selections of particular option values predefined for the product. Selecting one or many options points to a specific simple product.

| Field | Data Type | Description |
| --- | --- | --- |
| `id` | ID | The ID of the option. |
| `multi` | Boolean | Indicates whether the option allows multiple choices. |
| `required` | Boolean | Indicates whether the option must be selected. |
| `title` | String | The display name of the option. |
| `values` | [`[ProductViewOptionValue!]`](#productviewoptionvalue-interface) | List of available option values. |

### ProductViewOptionValue interface

The `ProductViewOptionValue` interface defines the product fields available to the `ProductViewOptionValueProduct` and `ProductViewOptionValueConfiguration` types.

| Field | Data Type | Description |
| --- | --- | --- |
| `id` | ID | The ID of an option value. |
| `inStock` | Boolean | Indicates if the option is in stock. |
| `title` | String | The display name of the option value. |

### ProductViewOptionValueConfiguration type

The `ProductViewOptionValueConfiguration` type is an implementation of `ProductViewOptionValue` for configuration values.

| Field | Data Type | Description |
| --- | --- | --- |
| `id` | ID | The ID of an option value. |
| `inStock` | Boolean | Indicates if the option is in stock. |
| `title` | String | The display name of the option value. |

### ProductViewOptionValueProduct type

The `ProductViewOptionValueProduct` type is an implementation of `ProductViewOptionValue` that adds details about a simple product.

| Field | Data Type | Description |
| --- | --- | --- |
| `id` | ID | The ID of an option value. |
| `inStock` | Boolean | Indicates if the option is in stock. |
| `isDefault` | Boolean | Indicates whether the option is the default. |
| `product` | [`SimpleProductView`](#simpleproductview-type) | Details about a simple product. |
| `quantity` | [`SimpleProductView`](#simpleproductview-type) | Default quantity of an option value. |
| `title` | String | The display name of the option value. |

### ProductViewOptionValueSwatch type

The `ProductViewOptionValueSwatch` type is an implementation of `ProductViewOptionValue` that adds details about a product swatch.

| Field | Data Type | Description |
| --- | --- | --- |
| `id` | ID | The ID of an option value. |
| `inStock` | Boolean | Indicates if the option is in stock. |
| `title` | String | The display name of the option value. |
| `type` | SwatchType | Indicates the type of swatch. Can be `TEXT`, `IMAGE`, `COLOR_HEX`, or `CUSTOM`. |
| `value` | String | The value of the swatch. |

### ProductViewPrice type

The `ProductViewPrice` type provides the base product price view, inherent for simple products.

| Field | Data Type | Description |
| --- | --- | --- |
| `final` | Price | Price value after discounts, excluding personalized promotions. |
| `regular` | Price | Base product price specified by the merchant. |
| `roles` | [String] | Determines if the price should be visible or hidden. |

### ProductViewPriceRange type

The `ProductViewPriceRange` type lists the minimum and maximum price of a complex product.

| Field | Data Type | Description |
| --- | --- | --- |
| `maximum` | ProductViewPrice | Maximum price. |
| `minimum` | ProductViewPrice | Minimum price. |

### ProductViewVideo type

| Field | Data Type | Description |
| --- | --- | --- |
| `url` | String | The URL to link to the product video. |
| `description` | String | Description of the product video. |
| `title` | String | Title of the product video. |

### SimpleProductView type

The `SimpleProductView` type represents all product types, except bundle, configurable, and group. Simple product prices do not contain price ranges. `SimpleProductView` implements `ProductView`.

| Field | Data Type | Description |
| --- | --- | --- |
| `addToCartAllowed` | Boolean | Indicates whether the product can be added to the cart. |
| `attributes(roles: [String])` | [`[ProductViewAttribute]`](#productviewattribute-type) | A list of merchant-defined attributes designated for the storefront. |
| `description` | String | The detailed description of the product. |
| `externalId`| String | The external ID of the product. |
| `id` | ID! | The product ID, generated as a composite key, unique per locale. |
| `images(roles: [String])` | [`[ProductViewImage]`](#productviewimage-type) | A list of images defined for the product. |
| `inputOptions` | [`[ProductViewInputOption]`](#productviewinputoption-type) | A list of input options the shopper can supply to customize a product. |
| `inStock` | Boolean | Indicates whether the product is in stock. |
| `links(linkTypes: [String!])` | [`[ProductViewLink]`](#productviewlink-type) | A list of product links. |
| `lowStock` | Boolean | Indicates whether the product stock is low. |
| `metaDescription` | String | A brief overview of the product for search results listings. |
| `metaKeyword` | String | A comma-separated list of keywords that are visible only to search engines. |
| `metaTitle` | String | A string that is displayed in the title bar and tab of the browser and in search results lists. |
| `name` | String | Product name. |
| `price` | [`ProductViewPrice`](#productviewprice-type) | Base product price view. |
| `shortDescription` | String | A summary of the product. |
| `sku` | String | Product SKU. |
| `url` | String | Canonical URL of the product. |
| `urlKey` | String | URL key of the product. |
