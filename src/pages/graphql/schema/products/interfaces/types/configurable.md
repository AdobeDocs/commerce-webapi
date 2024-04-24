---
title: Configurable product data types
---

# Configurable product data types

The `ConfigurableProduct` data type implements the following interfaces:

-  [ProductInterface](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-ProductInterface)
-  [PhysicalProductInterface](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-PhysicalProductInterface)
-  [CustomizableProductInterface](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-CustomizableProductInterface)
-  [RoutableInterface](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-RoutableInterface)

Attributes that are specific to configurable products can be used when performing a [`products`](../../queries/products.md) query.

The `ConfigurableProductOptionsSelection` object contains metadata corresponding to the selectable configurable options for a product. Use this object in a `products` query to minimize the number of media gallery items that are displayed as the shopper selects configurable product options. [Limit the number of retrieved media gallery items](#limit-the-number-of-retrieved-media-gallery-items) demonstrates its use.

Swatches allow the shopper to view the color, texture, or other visual aspect of a configurable product. The application displays these options as color, graphic, or text swatches.

The following data types implement `SwatchDataInterface`:

-  `ColorSwatchData`
-  `ImageSwatchData`
-  `TextSwatchData`

## Sample queries

Add the following inline fragment to the output section of your `products` query to return information specific to configurable products:

```text
... on ConfigurableProduct {
  configurable_options {
   <attributes>
  }
}
```

### Extended example

The following `products` query returns `ConfigurableProduct` information about the `WH01` configurable product, which is defined in the sample data.

**Request:**

```graphql
{
  products(filter: { sku: { eq: "WH01" } }) {
    items {
      id
      attribute_set_id
      name
      sku
      __typename
      price_range{
        minimum_price{
          regular_price{
            value
            currency
          }
        }
      }
      categories {
        id
      }
      ... on ConfigurableProduct {
        configurable_options {
          id
          attribute_id_v2
          label
          position
          use_default
          attribute_code
          values {
            value_index
            label
          }
          product_id
        }
        variants {
          product {
            id
            name
            sku
            attribute_set_id
            ... on PhysicalProductInterface {
              weight
            }
            price_range{
              minimum_price{
                regular_price{
                  value
                  currency
                }
              }
            }
          }
          attributes {
            uid
            label
            code
            value_index
          }
        }
      }
    }
  }
}

```

**Response:**

``` json
{
  "data": {
    "products": {
      "items": [
        {
          "uid": "MTA1Mg==",
          "attribute_set_id": 9,
          "name": "Mona Pullover Hoodlie",
          "sku": "WH01",
          "__typename": "ConfigurableProduct",
          "price_range": {
            "minimum_price": {
              "regular_price": {
                "value": 57,
                "currency": "USD"
              }
            }
          },
          "categories": [
            {
              "uid": "OA=="
            },
            {
              "uid": "MjI="
            },
            {
              "uid": "MjU="
            },
            {
              "uid": "MzU="
            }
          ],
          "configurable_options": [
            {
              "uid": "Y29uZmlndXJhYmxlLzEwNTIvOTM=",
              "attribute_uid": "OTM=",
              "label": "Color",
              "position": 1,
              "use_default": false,
              "attribute_code": "color",
              "values": [
                {
                  "uid": "Y29uZmlndXJhYmxlLzkzLzUz",
                  "label": "Green"
                },
                {
                  "uid": "Y29uZmlndXJhYmxlLzkzLzU2",
                  "label": "Orange"
                },
                {
                  "uid": "Y29uZmlndXJhYmxlLzkzLzU3",
                  "label": "Purple"
                }
              ]
            },
            {
              "uid": "Y29uZmlndXJhYmxlLzEwNTIvMTYx",
              "attribute_uid": "MTYx",
              "label": "Size",
              "position": 0,
              "use_default": false,
              "attribute_code": "size",
              "values": [
                {
                  "uid": "Y29uZmlndXJhYmxlLzE2MS8xNjk=",
                  "label": "XS"
                },
                {
                  "uid": "Y29uZmlndXJhYmxlLzE2MS8xNzA=",
                  "label": "S"
                },
                {
                  "uid": "Y29uZmlndXJhYmxlLzE2MS8xNzE=",
                  "label": "M"
                },
                {
                  "uid": "Y29uZmlndXJhYmxlLzE2MS8xNzI=",
                  "label": "L"
                },
                {
                  "uid": "Y29uZmlndXJhYmxlLzE2MS8xNzM=",
                  "label": "XL"
                }
              ]
            }
          ],
          "variants": [
            {
              "product": {
                "uid": "MTAzNw==",
                "name": "Mona Pullover Hoodlie-XS-Green",
                "sku": "WH01-XS-Green",
                "attribute_set_id": 9,
                "weight": 1,
                "price_range": {
                  "minimum_price": {
                    "regular_price": {
                      "value": 57,
                      "currency": "USD"
                    }
                  }
                }
              },
              "attributes": [
                {
                  "uid": "Y29uZmlndXJhYmxlLzkzLzUz",
                  "label": "Green",
                  "code": "color",
                  "value_index": 53
                },
                {
                  "uid": "Y29uZmlndXJhYmxlLzE2MS8xNjk=",
                  "label": "XS",
                  "code": "size",
                  "value_index": 169
                }
              ]
            },
            {
              "product": {
                "uid": "MTAzOA==",
                "name": "Mona Pullover Hoodlie-XS-Orange",
                "sku": "WH01-XS-Orange",
                "attribute_set_id": 9,
                "weight": 1,
                "price_range": {
                  "minimum_price": {
                    "regular_price": {
                      "value": 57,
                      "currency": "USD"
                    }
                  }
                }
              },
              "attributes": [
                {
                  "uid": "Y29uZmlndXJhYmxlLzkzLzU2",
                  "label": "Orange",
                  "code": "color",
                  "value_index": 56
                },
                {
                  "uid": "Y29uZmlndXJhYmxlLzE2MS8xNjk=",
                  "label": "XS",
                  "code": "size",
                  "value_index": 169
                }
              ]
            },
            {
              "product": {
                "uid": "MTAzOQ==",
                "name": "Mona Pullover Hoodlie-XS-Purple",
                "sku": "WH01-XS-Purple",
                "attribute_set_id": 9,
                "weight": 1,
                "price_range": {
                  "minimum_price": {
                    "regular_price": {
                      "value": 57,
                      "currency": "USD"
                    }
                  }
                }
              },
              "attributes": [
                {
                  "uid": "Y29uZmlndXJhYmxlLzkzLzU3",
                  "label": "Purple",
                  "code": "color",
                  "value_index": 57
                },
                {
                  "uid": "Y29uZmlndXJhYmxlLzE2MS8xNjk=",
                  "label": "XS",
                  "code": "size",
                  "value_index": 169
                }
              ]
            },
            {
              "product": {
                "uid": "MTA0MA==",
                "name": "Mona Pullover Hoodlie-S-Green",
                "sku": "WH01-S-Green",
                "attribute_set_id": 9,
                "weight": 1,
                "price_range": {
                  "minimum_price": {
                    "regular_price": {
                      "value": 57,
                      "currency": "USD"
                    }
                  }
                }
              },
              "attributes": [
                {
                  "uid": "Y29uZmlndXJhYmxlLzkzLzUz",
                  "label": "Green",
                  "code": "color",
                  "value_index": 53
                },
                {
                  "uid": "Y29uZmlndXJhYmxlLzE2MS8xNzA=",
                  "label": "S",
                  "code": "size",
                  "value_index": 170
                }
              ]
            },
            {
              "product": {
                "uid": "MTA0MQ==",
                "name": "Mona Pullover Hoodlie-S-Orange",
                "sku": "WH01-S-Orange",
                "attribute_set_id": 9,
                "weight": 1,
                "price_range": {
                  "minimum_price": {
                    "regular_price": {
                      "value": 57,
                      "currency": "USD"
                    }
                  }
                }
              },
              "attributes": [
                {
                  "uid": "Y29uZmlndXJhYmxlLzkzLzU2",
                  "label": "Orange",
                  "code": "color",
                  "value_index": 56
                },
                {
                  "uid": "Y29uZmlndXJhYmxlLzE2MS8xNzA=",
                  "label": "S",
                  "code": "size",
                  "value_index": 170
                }
              ]
            },
            {
              "product": {
                "uid": "MTA0Mg==",
                "name": "Mona Pullover Hoodlie-S-Purple",
                "sku": "WH01-S-Purple",
                "attribute_set_id": 9,
                "weight": 1,
                "price_range": {
                  "minimum_price": {
                    "regular_price": {
                      "value": 57,
                      "currency": "USD"
                    }
                  }
                }
              },
              "attributes": [
                {
                  "uid": "Y29uZmlndXJhYmxlLzkzLzU3",
                  "label": "Purple",
                  "code": "color",
                  "value_index": 57
                },
                {
                  "uid": "Y29uZmlndXJhYmxlLzE2MS8xNzA=",
                  "label": "S",
                  "code": "size",
                  "value_index": 170
                }
              ]
            },
            {
              "product": {
                "uid": "MTA0Mw==",
                "name": "Mona Pullover Hoodlie-M-Green",
                "sku": "WH01-M-Green",
                "attribute_set_id": 9,
                "weight": 1,
                "price_range": {
                  "minimum_price": {
                    "regular_price": {
                      "value": 57,
                      "currency": "USD"
                    }
                  }
                }
              },
              "attributes": [
                {
                  "uid": "Y29uZmlndXJhYmxlLzkzLzUz",
                  "label": "Green",
                  "code": "color",
                  "value_index": 53
                },
                {
                  "uid": "Y29uZmlndXJhYmxlLzE2MS8xNzE=",
                  "label": "M",
                  "code": "size",
                  "value_index": 171
                }
              ]
            },
            {
              "product": {
                "uid": "MTA0NA==",
                "name": "Mona Pullover Hoodlie-M-Orange",
                "sku": "WH01-M-Orange",
                "attribute_set_id": 9,
                "weight": 1,
                "price_range": {
                  "minimum_price": {
                    "regular_price": {
                      "value": 57,
                      "currency": "USD"
                    }
                  }
                }
              },
              "attributes": [
                {
                  "uid": "Y29uZmlndXJhYmxlLzkzLzU2",
                  "label": "Orange",
                  "code": "color",
                  "value_index": 56
                },
                {
                  "uid": "Y29uZmlndXJhYmxlLzE2MS8xNzE=",
                  "label": "M",
                  "code": "size",
                  "value_index": 171
                }
              ]
            },
            {
              "product": {
                "uid": "MTA0NQ==",
                "name": "Mona Pullover Hoodlie-M-Purple",
                "sku": "WH01-M-Purple",
                "attribute_set_id": 9,
                "weight": 1,
                "price_range": {
                  "minimum_price": {
                    "regular_price": {
                      "value": 57,
                      "currency": "USD"
                    }
                  }
                }
              },
              "attributes": [
                {
                  "uid": "Y29uZmlndXJhYmxlLzkzLzU3",
                  "label": "Purple",
                  "code": "color",
                  "value_index": 57
                },
                {
                  "uid": "Y29uZmlndXJhYmxlLzE2MS8xNzE=",
                  "label": "M",
                  "code": "size",
                  "value_index": 171
                }
              ]
            },
            {
              "product": {
                "uid": "MTA0Ng==",
                "name": "Mona Pullover Hoodlie-L-Green",
                "sku": "WH01-L-Green",
                "attribute_set_id": 9,
                "weight": 1,
                "price_range": {
                  "minimum_price": {
                    "regular_price": {
                      "value": 57,
                      "currency": "USD"
                    }
                  }
                }
              },
              "attributes": [
                {
                  "uid": "Y29uZmlndXJhYmxlLzkzLzUz",
                  "label": "Green",
                  "code": "color",
                  "value_index": 53
                },
                {
                  "uid": "Y29uZmlndXJhYmxlLzE2MS8xNzI=",
                  "label": "L",
                  "code": "size",
                  "value_index": 172
                }
              ]
            },
            {
              "product": {
                "uid": "MTA0Nw==",
                "name": "Mona Pullover Hoodlie-L-Orange",
                "sku": "WH01-L-Orange",
                "attribute_set_id": 9,
                "weight": 1,
                "price_range": {
                  "minimum_price": {
                    "regular_price": {
                      "value": 57,
                      "currency": "USD"
                    }
                  }
                }
              },
              "attributes": [
                {
                  "uid": "Y29uZmlndXJhYmxlLzkzLzU2",
                  "label": "Orange",
                  "code": "color",
                  "value_index": 56
                },
                {
                  "uid": "Y29uZmlndXJhYmxlLzE2MS8xNzI=",
                  "label": "L",
                  "code": "size",
                  "value_index": 172
                }
              ]
            },
            {
              "product": {
                "uid": "MTA0OA==",
                "name": "Mona Pullover Hoodlie-L-Purple",
                "sku": "WH01-L-Purple",
                "attribute_set_id": 9,
                "weight": 1,
                "price_range": {
                  "minimum_price": {
                    "regular_price": {
                      "value": 57,
                      "currency": "USD"
                    }
                  }
                }
              },
              "attributes": [
                {
                  "uid": "Y29uZmlndXJhYmxlLzkzLzU3",
                  "label": "Purple",
                  "code": "color",
                  "value_index": 57
                },
                {
                  "uid": "Y29uZmlndXJhYmxlLzE2MS8xNzI=",
                  "label": "L",
                  "code": "size",
                  "value_index": 172
                }
              ]
            },
            {
              "product": {
                "uid": "MTA0OQ==",
                "name": "Mona Pullover Hoodlie-XL-Green",
                "sku": "WH01-XL-Green",
                "attribute_set_id": 9,
                "weight": 1,
                "price_range": {
                  "minimum_price": {
                    "regular_price": {
                      "value": 57,
                      "currency": "USD"
                    }
                  }
                }
              },
              "attributes": [
                {
                  "uid": "Y29uZmlndXJhYmxlLzkzLzUz",
                  "label": "Green",
                  "code": "color",
                  "value_index": 53
                },
                {
                  "uid": "Y29uZmlndXJhYmxlLzE2MS8xNzM=",
                  "label": "XL",
                  "code": "size",
                  "value_index": 173
                }
              ]
            },
            {
              "product": {
                "uid": "MTA1MA==",
                "name": "Mona Pullover Hoodlie-XL-Orange",
                "sku": "WH01-XL-Orange",
                "attribute_set_id": 9,
                "weight": 1,
                "price_range": {
                  "minimum_price": {
                    "regular_price": {
                      "value": 57,
                      "currency": "USD"
                    }
                  }
                }
              },
              "attributes": [
                {
                  "uid": "Y29uZmlndXJhYmxlLzkzLzU2",
                  "label": "Orange",
                  "code": "color",
                  "value_index": 56
                },
                {
                  "uid": "Y29uZmlndXJhYmxlLzE2MS8xNzM=",
                  "label": "XL",
                  "code": "size",
                  "value_index": 173
                }
              ]
            },
            {
              "product": {
                "uid": "MTA1MQ==",
                "name": "Mona Pullover Hoodlie-XL-Purple",
                "sku": "WH01-XL-Purple",
                "attribute_set_id": 9,
                "weight": 1,
                "price_range": {
                  "minimum_price": {
                    "regular_price": {
                      "value": 57,
                      "currency": "USD"
                    }
                  }
                }
              },
              "attributes": [
                {
                  "uid": "Y29uZmlndXJhYmxlLzkzLzU3",
                  "label": "Purple",
                  "code": "color",
                  "value_index": 57
                },
                {
                  "uid": "Y29uZmlndXJhYmxlLzE2MS8xNzM=",
                  "label": "XL",
                  "code": "size",
                  "value_index": 173
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

### Limit the number of retrieved media gallery items

This example shows how the the media gallery items change as a shopper selects configurable options for the product with the SKU `MS10`. The configurable product attributes in the Luma sample data are limited to size and color, and these attributes have a small number of options (five and three, respectively). However, some storefronts will have products with dozens of selectable options. Returning detailed information about all media gallery items in such a storefront would create performance issues.

#### Step 1. Get the images on the parent page

The following query returns media gallery information on the parent configurable product and the `uid` values of each configurable option.

Note that file names of the images are `ms10-blue_main_1.jpg`, `ms10-blue_alt1_1.jpg`, and `ms10-blue_back_1.jpg`.

**Request:**

```graphql
query {
  products(search: "MS10" ) {
    items {
      ... on ConfigurableProduct {
        media_gallery {
          url
          label
          position
        }
        configurable_options {
          attribute_code
          values {
            label
            uid
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
          "media_gallery": [
            {
              "url": "http://<host>/media/catalog/product/cache/816455256c48217ab8c5c822a6039d1a/m/s/ms10-blue_main_1.jpg",
              "label": "",
              "position": 1
            },
            {
              "url": "http://<host>/media/catalog/product/cache/816455256c48217ab8c5c822a6039d1a/m/s/ms10-blue_alt1_1.jpg",
              "label": "",
              "position": 2
            },
            {
              "url": "http://<host>/media/catalog/product/cache/816455256c48217ab8c5c822a6039d1a/m/s/ms10-blue_back_1.jpg",
              "label": "",
              "position": 3
            }
          ],
          "configurable_options": [
            {
              "attribute_code": "color",
              "values": [
                {
                  "label": "Black",
                  "uid": "Y29uZmlndXJhYmxlLzkzLzQ5"
                },
                {
                  "label": "Blue",
                  "uid": "Y29uZmlndXJhYmxlLzkzLzUw"
                },
                {
                  "label": "Red",
                  "uid": "Y29uZmlndXJhYmxlLzkzLzU4"
                }
              ]
            },
            {
              "attribute_code": "size",
              "values": [
                {
                  "label": "XS",
                  "uid": "Y29uZmlndXJhYmxlLzE2MC8xNjY="
                },
                {
                  "label": "S",
                  "uid": "Y29uZmlndXJhYmxlLzE2MC8xNjc="
                },
                {
                  "label": "M",
                  "uid": "Y29uZmlndXJhYmxlLzE2MC8xNjg="
                },
                {
                  "label": "L",
                  "uid": "Y29uZmlndXJhYmxlLzE2MC8xNjk="
                },
                {
                  "label": "XL",
                  "uid": "Y29uZmlndXJhYmxlLzE2MC8xNzA="
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

#### Step 2. Select the color

In this example, the shopper has selected the red variant. The query has been expanded to include the `configurable_product_options_selection` object, which filters on the `uid` of the red variant. Within that object, notice:

-  The `options_available_for_selection` shows that all available `size` attributes with the red variant can be selected.
-  The `media_gallery` object contains the `ms10-red_main_1.jpg` image, which can then be displayed with the parent images.
-  The `variant` object is null, because the shopper has not selected a size. The variant is not fully defined until the shopper makes a selection for all attributes.

**Request:**

```graphql
query {
  products(search: "MS10" ) {
    items {
      ... on ConfigurableProduct {
        media_gallery {
          url
          label
          position
        }
        configurable_options {
          uid
          attribute_code
          values {
            label
            uid
          }
        }
        configurable_product_options_selection(configurableOptionValueUids: ["Y29uZmlndXJhYmxlLzkzLzU4"]) {
          options_available_for_selection {
            attribute_code
            option_value_uids
          }
          media_gallery {
            url
            label
            position
          }
          variant {
            uid
            sku
            name
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
          "media_gallery": [
            {
              "url": "http://<host>/media/catalog/product/cache/816455256c48217ab8c5c822a6039d1a/m/s/ms10-blue_main_1.jpg",
              "label": "",
              "position": 1
            },
            {
              "url": "http://<host>/media/catalog/product/cache/816455256c48217ab8c5c822a6039d1a/m/s/ms10-blue_alt1_1.jpg",
              "label": "",
              "position": 2
            },
            {
              "url": "http://<host>/media/catalog/product/cache/816455256c48217ab8c5c822a6039d1a/m/s/ms10-blue_back_1.jpg",
              "label": "",
              "position": 3
            }
          ],
          "configurable_options": [
            {
              "uid": "Y29uZmlndXJhYmxlLzYwMi85Mw==",
              "attribute_code": "color",
              "values": [
                {
                  "label": "Black",
                  "uid": "Y29uZmlndXJhYmxlLzkzLzQ5"
                },
                {
                  "label": "Blue",
                  "uid": "Y29uZmlndXJhYmxlLzkzLzUw"
                },
                {
                  "label": "Red",
                  "uid": "Y29uZmlndXJhYmxlLzkzLzU4"
                }
              ]
            },
            {
              "uid": "Y29uZmlndXJhYmxlLzYwMi8xNjA=",
              "attribute_code": "size",
              "values": [
                {
                  "label": "XS",
                  "uid": "Y29uZmlndXJhYmxlLzE2MC8xNjY="
                },
                {
                  "label": "S",
                  "uid": "Y29uZmlndXJhYmxlLzE2MC8xNjc="
                },
                {
                  "label": "M",
                  "uid": "Y29uZmlndXJhYmxlLzE2MC8xNjg="
                },
                {
                  "label": "L",
                  "uid": "Y29uZmlndXJhYmxlLzE2MC8xNjk="
                },
                {
                  "label": "XL",
                  "uid": "Y29uZmlndXJhYmxlLzE2MC8xNzA="
                }
              ]
            }
          ],
          "configurable_product_options_selection": {
            "options_available_for_selection": [
              {
                "attribute_code": "size",
                "option_value_uids": [
                  "Y29uZmlndXJhYmxlLzE2MC8xNjY=",
                  "Y29uZmlndXJhYmxlLzE2MC8xNjc=",
                  "Y29uZmlndXJhYmxlLzE2MC8xNjg=",
                  "Y29uZmlndXJhYmxlLzE2MC8xNjk=",
                  "Y29uZmlndXJhYmxlLzE2MC8xNzA="
                ]
              },
              {
                "attribute_code": "color",
                "option_value_uids": [
                  "Y29uZmlndXJhYmxlLzkzLzU4"
                ]
              }
            ],
            "media_gallery": [
              {
                "url": "http://<host>/media/catalog/product/cache/816455256c48217ab8c5c822a6039d1a/m/s/ms10-red_main_1.jpg",
                "label": "",
                "position": 1
              }
            ],
            "variant": null
          }
        }
      ]
    }
  }
}
```

#### Step 3. Select the size

In this example, the shopper has selected the Medium option for the size attribute. Therefore, the query adds the corresponding `uid` to the `configurable_product_options_selection` filter.

-  The `options_available_for_selection` shows that a `size` and a `color` option has been selected.
-  The Luma sample data does not include any images that are specific to a size, so the content of the `media_gallery` object is unchanged.
-  The `variant` object contains a few details about the selected variant.

**Request:**

```graphql
query {
  products(search: "MS10" ) {
    items {
      ... on ConfigurableProduct {
        media_gallery {
          url
          label
          position
        }
        configurable_options {
          uid
          attribute_code
          values {
            label
            uid
          }
        }
        configurable_product_options_selection(configurableOptionValueUids: ["Y29uZmlndXJhYmxlLzkzLzU4", "Y29uZmlndXJhYmxlLzE2MC8xNjg="]) {
          options_available_for_selection {
            attribute_code
            option_value_uids
          }
          media_gallery {
            url
            label
            position
          }
          variant {
            uid
            sku
            name
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
          "media_gallery": [
            {
              "url": "http://<host>/media/catalog/product/cache/816455256c48217ab8c5c822a6039d1a/m/s/ms10-blue_main_1.jpg",
              "label": "",
              "position": 1
            },
            {
              "url": "http://<host>/media/catalog/product/cache/816455256c48217ab8c5c822a6039d1a/m/s/ms10-blue_alt1_1.jpg",
              "label": "",
              "position": 2
            },
            {
              "url": "http://<host>/media/catalog/product/cache/816455256c48217ab8c5c822a6039d1a/m/s/ms10-blue_back_1.jpg",
              "label": "",
              "position": 3
            }
          ],
          "configurable_options": [
            {
              "uid": "Y29uZmlndXJhYmxlLzYwMi85Mw==",
              "attribute_code": "color",
              "values": [
                {
                  "label": "Black",
                  "uid": "Y29uZmlndXJhYmxlLzkzLzQ5"
                },
                {
                  "label": "Blue",
                  "uid": "Y29uZmlndXJhYmxlLzkzLzUw"
                },
                {
                  "label": "Red",
                  "uid": "Y29uZmlndXJhYmxlLzkzLzU4"
                }
              ]
            },
            {
              "uid": "Y29uZmlndXJhYmxlLzYwMi8xNjA=",
              "attribute_code": "size",
              "values": [
                {
                  "label": "XS",
                  "uid": "Y29uZmlndXJhYmxlLzE2MC8xNjY="
                },
                {
                  "label": "S",
                  "uid": "Y29uZmlndXJhYmxlLzE2MC8xNjc="
                },
                {
                  "label": "M",
                  "uid": "Y29uZmlndXJhYmxlLzE2MC8xNjg="
                },
                {
                  "label": "L",
                  "uid": "Y29uZmlndXJhYmxlLzE2MC8xNjk="
                },
                {
                  "label": "XL",
                  "uid": "Y29uZmlndXJhYmxlLzE2MC8xNzA="
                }
              ]
            }
          ],
          "configurable_product_options_selection": {
            "options_available_for_selection": [
              {
                "attribute_code": "size",
                "option_value_uids": [
                  "Y29uZmlndXJhYmxlLzE2MC8xNjg="
                ]
              },
              {
                "attribute_code": "color",
                "option_value_uids": [
                  "Y29uZmlndXJhYmxlLzkzLzU4"
                ]
              }
            ],
            "media_gallery": [
              {
                "url": "http://<host>/media/catalog/product/cache/816455256c48217ab8c5c822a6039d1a/m/s/ms10-red_main_1.jpg",
                "label": "",
                "position": 1
              }
            ],
            "variant": {
              "uid": "NTg5",
              "sku": "MS10-M-Red",
              "name": "Logan  HeatTec&reg; Tee-M-Red"
            }
          }
        }
      ]
    }
  }
}
```

### Return swatch information

The following query returns the color and text swatches assigned to configurable product `MJ06`.

**Request:**

```graphql
{
  products(filter: {sku: {eq: "MJ06"}}) {
    items {
        ... on ConfigurableProduct{
      configurable_options{
          values {
            label
            swatch_data{
              value
            }
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
          "configurable_options": [
            {
              "values": [
                {
                  "label": "Blue",
                  "swatch_data": {
                    "value": "#1857f7"
                  }
                },
                {
                  "label": "Green",
                  "swatch_data": {
                    "value": "#53a828"
                  }
                },
                {
                  "label": "Purple",
                  "swatch_data": {
                    "value": "#ef3dff"
                  }
                }
              ]
            },
            {
              "values": [
                {
                  "label": "XS",
                  "swatch_data": {
                    "value": "XS"
                  }
                },
                {
                  "label": "S",
                  "swatch_data": {
                    "value": "S"
                  }
                },
                {
                  "label": "M",
                  "swatch_data": {
                    "value": "M"
                  }
                },
                {
                  "label": "L",
                  "swatch_data": {
                    "value": "L"
                  }
                },
                {
                  "label": "XL",
                  "swatch_data": {
                    "value": "XL"
                  }
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

## Related topics

-  [addConfigurableProductsToCart mutation](../../../cart/mutations/add-configurable-products.md)
