---
title: products query | Commerce Web APIs
edition: ee
description: Describes how to construct and use the Catalog Service products query.
---

# products query

The Catalog Service for Adobe Commerce `products` query returns details about the SKUs specified as input. Although this query has the same name as  the [`products` query](../../products/queries/products.md) that is provided with core Adobe Commerce and Magento Open Source, there are some differences.

The Catalog Service query requires one or more SKU values as input. The query is primarily designed to retrieve information to render the following types of content:

*  Product detail pages - You can provide full details about the product identified by the specified SKU.

*  Product compare pages - You can retrieve selected information about multiple products, such as the name, price and image.

<InlineAlert variant="info" slots="text"/>

Use the Live Search [`productSearch` query](../../live-search/queries/product-search.md) to return product listing page content.

The `ProductView` output object is significantly different than the core `products` query `Products` output object. Key differences include:

*  Products are either simple or complex. Simple, virtual, downloadable, and gift card products map to `SimpleProductView`. All other product types map to `ComplexProductView`. Simple products have defined prices. Complex products have price ranges. Since complex products are comprised of multiple simple products, they have access to simple product prices.

*  Merchant-defined attributes are exposed in a top-level container and indicate their storefront roles. Roles include Show on PDP, Show on PLP, and Show on Search Results.

*  Images are also accessible as a top-level container and can be filtered by their role. An image can have an `image`, `small_image`, or `thumbnail` role.

## Syntax

```graphql
products (skus [String]) [ProductView]
```

## Required headers

You must specify the following HTTP headers to run this query.

import Docs from '/src/pages/_includes/graphql/catalog-service/headers.md'

<Docs />

## Example usage

### Return details about a simple product

The following query returns details about a simple product.

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
                "url": "http://master-7rqtwti-ima6q5tyxltfe.eu-4.magentosite.cloud/dual-handle-cardio-ball.html",
                "images": [
                    {
                        "url": "http://master-7rqtwti-ima6q5tyxltfe.eu-4.magentosite.cloud/media/catalog/product/u/g/ug07-bk-0.jpg",
                        "label": "Image",
                        "roles": [
                            "image",
                            "small_image",
                            "thumbnail"
                        ]
                    },
                    {
                        "url": "http://master-7rqtwti-ima6q5tyxltfe.eu-4.magentosite.cloud/media/catalog/product/u/g/ug07-bk-0_alt1.jpg",
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

### Return details about a complex product {#complex-product-example}

The following query returns details about a complex product.

**Request:**

```graphql
query {

    products(skus: ["MH07"]) {
        __typename
        id
        sk
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
                "url": "http://master-7rqtwti-ima6q5tyxltfe.eu-4.magentosite.cloud/hero-hoodie.html",
                "images": [
                    {
                        "url": "http://master-7rqtwti-ima6q5tyxltfe.eu-4.magentosite.cloud/media/catalog/product/m/h/mh07-gray_main_2.jpg",
                        "label": "",
                        "roles": [
                            "image",
                            "small_image",
                            "thumbnail"
                        ]
                    },
                    {
                        "url": "http://master-7rqtwti-ima6q5tyxltfe.eu-4.magentosite.cloud/media/catalog/product/m/h/mh07-gray_alt1_2.jpg",
                        "label": "",
                        "roles": []
                    },
                    {
                        "url": "http://master-7rqtwti-ima6q5tyxltfe.eu-4.magentosite.cloud/media/catalog/product/m/h/mh07-gray_back_2.jpg",
                        "label": "",
                        "roles": []
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

import Docs2 from '/src/pages/_includes/graphql/catalog-service/product-view.md'

<Docs2 />
