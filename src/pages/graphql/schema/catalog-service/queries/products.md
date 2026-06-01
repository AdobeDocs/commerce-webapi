---
title: products query
description: Describes how to construct and use the Catalog Service products query.
keywords:
  - GraphQL
  - Services
---

# products query

The Catalog Service for Adobe Commerce `products` query returns details about the SKUs specified as input. Although this query has the same name as the [`products` query](https://developer.adobe.com/commerce/webapi/graphql/schema/products/queries/products/) that is provided with core Adobe Commerce and Magento Open Source, there are some differences.

The Catalog Service query requires one or more SKU values as input. The query is primarily designed to retrieve information to render the following types of content:

*  Product detail pages - You can provide full details about the product identified by the specified SKU.

*  Product compare pages - You can retrieve selected information about multiple products, such as the name, price and image.

<InlineAlert variant="info" slots="text"/>

Use the Live Search [`productSearch` query](../../live-search/queries/product-search.md) to return product listing page content.

The `ProductView` output object is significantly different than the core `products` query `Products` output object. Key differences include:

* Products are either simple or complex. Simple, virtual, downloadable, and gift card products map to `SimpleProductView`. All other product types map to `ComplexProductView`.

  * Simple products have defined prices.
  * Complex products have price ranges. Since complex products are comprised of multiple simple products, they have access to simple product prices.

* Both simple and complex products can have merchant-defined input options that allow shoppers to customize a product by adding text, date, an image, or a file, for example adding text for engraving. These options can have an associated markup that is applied to the product price. These options are exposed in a top-level `inputOptions` container `[ProductViewInputOption]`.

*  Merchant-defined attributes are exposed in a top-level `attributes` container `[ProductViewAttribute]` and indicate their storefront roles. Roles include Show on PDP, Show on PLP, and Show on Search Results.

*  Images are also accessible as a top-level container and can be filtered by their role. An image can have an `image`, `small_image`, or `thumbnail` role.

## Syntax

```graphql
products(skus: [String]): [ProductView]
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

**URL structure for SaaS endpoints**

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

The [Commerce API playground](https://experienceleague.adobe.com/developer/commerce/storefront/playgrounds/commerce-services/) provides a sample `products` query that you can run against a live instance of Adobe Commerce with Luma sample data. Note that the responses may vary, depending on the configuration of the Commerce instance.

### Return details about a simple product

The following query returns details about a simple product.

<CodeBlock slots="heading, code" repeat="2" languages="JSON" />

**Request:**

```graphql
query {

    products(skus: ["24-UG07"]) {
        __typename
        id
        sku
        name
        description
        shortDescription
        addToCartAllowed
        url
        images(roles: []) {
            url
            label
            roles
        }
        attributes(roles: []) {
            name
            label
            value
            roles
        }
        inputOptions {
            id
            title
            required
            type
            markupAmount
            suffix
            sortOrder
            range {
                from
                to
            }
            imageSize {
                width
                height
            }
            fileExtensions
        }
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
                roles
            }
        }
        links {
            product {
                sku

            }
            linkTypes
        }
    }
}
```

**Response:**

```json
{
    "data": {
        "products": [
            {
                "__typename": "SimpleProductView",
                "id": "TWpRdFZVY3dOdwBaR1ZtWVhWc2RBAFlqVTFPRFEyTVdRdE4yWXhaaTAwTWpOaExXRTRabVV0TVRnd1pXRTVOV0V3TWpGaQBiV0ZwYmw5M1pXSnphWFJsWDNOMGIzSmwAWW1GelpRAFRVRkhVMVJITURBMU5UZ3dNakF3",
                "sku": "24-UG07",
                "name": "Dual Handle Cardio Ball",
                "description": "<p>Make the most of your limited workout window with our Dual-Handle Cardio Ball. The 15-lb ball maximizes the effort-impact to your abdominal, upper arm and lower-body muscles. It features a handle on each side for a firm, secure grip.</p>\r\n<ul>\r\n<li>Durable plastic shell with sand fill.\r\n<li>Two handles.\r\n<li>15 lbs.\r\n</ul>",
                "shortDescription": "",
                "addToCartAllowed": true,
                "url": "http://example.com/dual-handle-cardio-ball.html",
                "images": [
                    {
                        "url": "http://example.com/media/catalog/product/u/g/ug07-bk-0.jpg",
                        "label": "Image",
                        "roles": [
                            "image",
                            "small_image",
                            "thumbnail"
                        ]
                    },
                    {
                        "url": "http://example.com/media/catalog/product/u/g/ug07-bk-0_alt1.jpg",
                        "label": "Image",
                        "roles": []
                    }
                ],
                "attributes": [
                    {
                        "name": "activity",
                        "label": "Activity",
                        "value": [
                            "Athletic",
                            "Sports",
                            "Gym"
                        ],
                        "roles": [
                            "visible_in_pdp",
                            "visible_in_compare_list",
                            "visible_in_search"
                        ]
                    },
                    {
                        "name": "category_gear",
                        "label": "Category",
                        "value": [
                            "Cardio",
                            "Exercise"
                        ],
                        "roles": [
                            "visible_in_pdp",
                            "visible_in_search"
                        ]
                    },
                    {
                        "name": "color",
                        "label": "Color",
                        "value": "Black",
                        "roles": [
                            "visible_in_pdp",
                            "visible_in_plp"
                        ]
                    },
                    {
                        "name": "eco_collection",
                        "label": "Eco Collection",
                        "value": "no",
                        "roles": [
                            "visible_in_pdp"
                        ]
                    },
                    {
                        "name": "erin_recommends",
                        "label": "Erin Recommends",
                        "value": "yes",
                        "roles": [
                            "visible_in_pdp"
                        ]
                    },
                    {
                        "name": "gender",
                        "label": "Gender",
                        "value": [
                            "Men",
                            "Women",
                            "Unisex"
                        ],
                        "roles": [
                            "visible_in_pdp",
                            "visible_in_search"
                        ]
                    },
                    {
                        "name": "material",
                        "label": "Material",
                        "value": "Plastic",
                        "roles": [
                            "visible_in_pdp",
                            "visible_in_search"
                        ]
                    },
                    {
                        "name": "new",
                        "label": "New",
                        "value": "no",
                        "roles": [
                            "visible_in_pdp"
                        ]
                    },
                    {
                        "name": "performance_fabric",
                        "label": "Performance Fabric",
                        "value": "no",
                        "roles": [
                            "visible_in_pdp"
                        ]
                    },
                    {
                        "name": "sale",
                        "label": "Sale",
                        "value": "yes",
                        "roles": [
                            "visible_in_pdp"
                        ]
                    }
                ],
                "inputOptions": [
                    {
                        "required": false,
                        "id": "Y3VzdG9tLW9wdGlvbi8xOQ==",
                        "title": "Customizable Option - area",
                        "type": "area",
                        "range": {
                            "from": 0.0,
                            "to": 255.0
                        },
                        "fileExtensions": "",
                        "sortOrder": 1,
                        "suffix": "test-e2e-configurable-smoke138330433-opt-area",
                        "markupAmount": 126.0
                    },
                    {
                        "required": false,
                        "id": "Y3VzdG9tLW9wdGlvbi8yMA==",
                        "title": "Customizable Option - field",
                        "type": "field",
                        "range": {
                            "from": 0.0,
                            "to": 255.0
                        },
                        "fileExtensions": "",
                        "sortOrder": 2,
                        "suffix": "test-e2e-configurable-smoke138330433-opt-field",
                        "markupAmount": 126.0
                    },
                    {
                        "required": false,
                        "id": "Y3VzdG9tLW9wdGlvbi8yMQ==",
                        "title": "Customizable Option - file",
                        "type": "file",
                        "range": {
                            "from": 0.0,
                            "to": 0.0
                        },
                        "fileExtensions": "jpg, png",
                        "sortOrder": 3,
                        "suffix": "test-e2e-configurable-smoke138330433-opt-file",
                        "markupAmount": 126.0
                    },
                    {
                        "required": false,
                        "id": "Y3VzdG9tLW9wdGlvbi8yMg==",
                        "title": "Customizable Option - date",
                        "type": "date",
                        "range": {
                            "from": 0.0,
                            "to": 0.0
                        },
                        "fileExtensions": "",
                        "sortOrder": 4,
                        "suffix": "test-e2e-configurable-smoke138330433-opt-date",
                        "markupAmount": 126.0
                    },
                ],
                "price": {
                    "final": {
                        "amount": {
                            "value": 12,
                            "currency": "USD"
                        }
                    },
                    "regular": {
                        "amount": {
                            "value": 12,
                            "currency": "USD"
                        }
                    },
                    "roles": [
                        "visible"
                    ]
                },
                "links": [
                    {
                        "product": {
                            "sku": "24-UG06"
                        },
                        "linkTypes": [
                            "related"
                        ]
                    },
                    {
                        "product": {
                            "sku": "MH07"
                        },
                        "linkTypes": [
                            "related"
                        ]
                    },
                    {
                        "product": {
                            "sku": "24-WG088"
                        },
                        "linkTypes": [
                            "crosssell"
                        ]
                    },
                    {
                        "product": {
                            "sku": "24-WG085_Group"
                        },
                        "linkTypes": [
                            "related"
                        ]
                    },
                    {
                        "product": {
                            "sku": "24-UG02"
                        },
                        "linkTypes": [
                            "related"
                        ]
                    }
                ]
            }
        ]
    }
}
```

### Return details about a complex product

The following query returns details about a complex product.

<CodeBlock slots="heading, code" repeat="2" languages="JSON" />

**Request:**

```graphql
query {

    products(skus: ["MH07"]) {
        __typename
        id
        sku
        name
        description
        shortDescription
        addToCartAllowed
        url
        images(roles: []) {
            url
            label
            roles
        }
        attributes(roles: []) {
            name
            label
            value
            roles
        }
        ... on ComplexProductView {
        inputOptions {
            id
            title
            required
            type
            markupAmount
            suffix
            sortOrder
            range {
                from
                to
            }
            imageSize {
                width
                height
            }
            fileExtensions
            }
            options {
                id
                title
                required
                values {
                    id
                    title
                    ... on ProductViewOptionValueProduct {
                        title,
                        quantity,
                        isDefault,
                        product {
                            sku
                            shortDescription
                            name
                            links {
                                product {
                                    sku
                                }
                                linkTypes
                            }
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
                                roles
                            }
                        }
                    }
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
                    roles
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
                    roles
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
        "products": [
            {
                "__typename": "ComplexProductView",
                "id": "VFVnd053AFpHVm1ZWFZzZEEAWWpVMU9EUTJNV1F0TjJZeFppMDBNak5oTFdFNFptVXRNVGd3WldFNU5XRXdNakZpAGJXRnBibDkzWldKemFYUmxYM04wYjNKbABZbUZ6WlEAVFVGSFUxUkhNREExTlRnd01qQXc",
                "sku": "MH07",
                "name": "Hero Hoodie",
                "description": "<p>Gray and black color blocking sets you apart as the Hero Hoodie keeps you warm on the bus, campus or cold mean streets. Slanted outsize front pockets keep your style real . . . convenient.</p>\r\n<p>&bull; Full-zip gray and black hoodie.<br />&bull; Ribbed hem.<br />&bull; Standard fit.<br />&bull; Drawcord hood cinch.<br />&bull; Water-resistant coating.</p>",
                "shortDescription": "",
                "addToCartAllowed": true,
                "url": "http://example.com/hero-hoodie.html",
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
                ],
              "inputOptions": [
                    {
                        "required": false,
                        "id": "Y3VzdG9tLW9wdGlvbi8xOQ==",
                        "title": "Customizable Option - area",
                        "type": "area",
                        "range": {
                            "from": 0.0,
                            "to": 255.0
                        },
                        "fileExtensions": "",
                        "sortOrder": 1,
                        "suffix": "test-e2e-configurable-smoke138330433-opt-area",
                        "markupAmount": 126.0
                    },
                    {
                        "required": false,
                        "id": "Y3VzdG9tLW9wdGlvbi8yMA==",
                        "title": "Customizable Option - field",
                        "type": "field",
                        "range": {
                            "from": 0.0,
                            "to": 255.0
                        },
                        "fileExtensions": "",
                        "sortOrder": 2,
                        "suffix": "test-e2e-configurable-smoke138330433-opt-field",
                        "markupAmount": 126.0
                    },
                    {
                        "required": false,
                        "id": "Y3VzdG9tLW9wdGlvbi8yMQ==",
                        "title": "Customizable Option - file",
                        "type": "file",
                        "range": {
                            "from": 0.0,
                            "to": 0.0
                        },
                        "fileExtensions": "jpg, png",
                        "sortOrder": 3,
                        "suffix": "test-e2e-configurable-smoke138330433-opt-file",
                        "markupAmount": 126.0
                    },
                    {
                        "required": false,
                        "id": "Y3VzdG9tLW9wdGlvbi8yMg==",
                        "title": "Customizable Option - date",
                        "type": "date",
                        "range": {
                            "from": 0.0,
                            "to": 0.0
                        },
                        "fileExtensions": "",
                        "sortOrder": 4,
                        "suffix": "test-e2e-configurable-smoke138330433-opt-date",
                        "markupAmount": 126.0
                    },
                    {
                        "required": false,
                        "id": "Y3VzdG9tLW9wdGlvbi8yMw==",
                        "title": "Customizable Option - date_time",
                        "type": "date_time",
                        "range": {
                            "from": 0.0,
                            "to": 0.0
                        },
                        "fileExtensions": "",
                        "sortOrder": 5,
                        "suffix": "test-e2e-configurable-smoke138330433-opt-date_time",
                        "markupAmount": 126.0
                    },
                    {
                        "required": false,
                        "id": "Y3VzdG9tLW9wdGlvbi8yNA==",
                        "title": "Customizable Option - time",
                        "type": "time",
                        "range": {
                            "from": 0.0,
                            "to": 0.0
                        },
                        "fileExtensions": "",
                        "sortOrder": 6,
                        "suffix": "test-e2e-configurable-smoke138330433-opt-time",
                        "markupAmount": 126.0
                    }
                ],
                "attributes": [
                    {
                        "name": "climate",
                        "label": "Climate",
                        "value": "Spring",
                        "roles": [
                            "visible_in_pdp",
                            "visible_in_search"
                        ]
                    },
                    {
                        "name": "eco_collection",
                        "label": "Eco Collection",
                        "value": "no",
                        "roles": [
                            "visible_in_pdp"
                        ]
                    },
                    {
                        "name": "erin_recommends",
                        "label": "Erin Recommends",
                        "value": "no",
                        "roles": [
                            "visible_in_pdp"
                        ]
                    },
                    {
                        "name": "material",
                        "label": "Material",
                        "value": [
                            "Fleece",
                            "Hemp",
                            "Polyester"
                        ],
                        "roles": [
                            "visible_in_pdp",
                            "visible_in_search"
                        ]
                    },
                    {
                        "name": "new",
                        "label": "New",
                        "value": "yes",
                        "roles": [
                            "visible_in_pdp"
                        ]
                    },
                    {
                        "name": "pattern",
                        "label": "Pattern",
                        "value": "Color-Blocked",
                        "roles": [
                            "visible_in_pdp",
                            "visible_in_search"
                        ]
                    },
                    {
                        "name": "performance_fabric",
                        "label": "Performance Fabric",
                        "value": "no",
                        "roles": [
                            "visible_in_pdp"
                        ]
                    },
                    {
                        "name": "sale",
                        "label": "Sale",
                        "value": "no",
                        "roles": [
                            "visible_in_pdp"
                        ]
                    }
                ],
                "links": [
                    {
                        "product": {
                            "sku": "24-UG07"
                        },
                        "linkTypes": [
                            "crosssell"
                        ]
                    },
                    {
                        "product": {
                            "sku": "24-UG06"
                        },
                        "linkTypes": [
                            "related",
                            "crosssell"
                        ]
                    },
                    {
                        "product": {
                            "sku": "24-WG088"
                        },
                        "linkTypes": [
                            "crosssell"
                        ]
                    },
                    {
                        "product": {
                            "sku": "24-WG080"
                        },
                        "linkTypes": [
                            "crosssell"
                        ]
                    }
                ],
                "options": [
                    {
                        "id": "size",
                        "title": "Size",
                        "required": false,
                        "values": [
                            {
                                "id": "Y29uZmlndXJhYmxlLzE1OS8xNjY=",
                                "title": "XS"
                            },
                            {
                                "id": "Y29uZmlndXJhYmxlLzE1OS8xNjc=",
                                "title": "S"
                            },
                            {
                                "id": "Y29uZmlndXJhYmxlLzE1OS8xNjg=",
                                "title": "M"
                            },
                            {
                                "id": "Y29uZmlndXJhYmxlLzE1OS8xNjk=",
                                "title": "L"
                            },
                            {
                                "id": "Y29uZmlndXJhYmxlLzE1OS8xNzA=",
                                "title": "XL"
                            }
                        ]
                    },
                    {
                        "id": "color",
                        "title": "Color",
                        "required": false,
                        "values": [
                            {
                                "id": "Y29uZmlndXJhYmxlLzkzLzQ5",
                                "title": "Black"
                            },
                            {
                                "id": "Y29uZmlndXJhYmxlLzkzLzUy",
                                "title": "Gray"
                            },
                            {
                                "id": "Y29uZmlndXJhYmxlLzkzLzUz",
                                "title": "Green"
                            }
                        ]
                    }
                ],
                "priceRange": {
                    "maximum": {
                        "final": {
                            "amount": {
                                "value": 54,
                                "currency": "USD"
                            }
                        },
                        "regular": {
                            "amount": {
                                "value": 54,
                                "currency": "USD"
                            }
                        },
                        "roles": [
                            "visible"
                        ]
                    },
                    "minimum": {
                        "final": {
                            "amount": {
                                "value": 54,
                                "currency": "USD"
                            }
                        },
                        "regular": {
                            "amount": {
                                "value": 54,
                                "currency": "USD"
                            }
                        },
                        "roles": [
                            "visible"
                        ]
                    }
                }
            }
        ]
    }
}
```

## Output fields

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
