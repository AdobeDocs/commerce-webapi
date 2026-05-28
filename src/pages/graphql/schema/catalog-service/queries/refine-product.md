---
title: refineProduct query | GraphQL Developer Guide
description: Describes how to construct and use the Catalog Service refineProduct query.
keywords:
  - GraphQL
  - Services
---

# refineProduct query

The `refineProduct` query helps narrow down the results of a `products` query that was run against a complex product. To use this query effectively, first run the `products` query and ensure that the response includes a list of options within a `ComplexProductView` inline fragment. When a shopper selects a product option (such as size or color) on the storefront, you can then run the `refineProduct query` by specifying the SKU and the selected option value IDs as input. Depending on the number of product options available for the complex product, you might need to run the `refineProduct` query multiple times until the shopper has selected a specific variant.

Ensure that your query response includes both the `ComplexProductView` and `SimpleProductView` inline fragments. If the shopper has not selected all required options, the query returns the IDs of unselected options along with the minimum and maximum price of the product, based on the selected options and possible remaining options. If all required options are selected, the query returns details about a simple product, including its set price.

## Syntax

```graphql
refineProduct(sku: String!, optionIds: [String!]!): ProductView
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

###  Find the customer group code

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

## Example usage

### Return details about a partially selected complex product

The following query returns details about the color options available for a medium-sized variant of product `MH12`. The value of the `optionIDs` input parameter is taken from the `products` query's [Return details about a complex product](products.md#return-details-about-a-complex-product) example.

<CodeBlock slots="heading, code" repeat="2" languages="JSON" />

**Request:**

```graphql
query {
    refineProduct(optionIds: ["Y29uZmlndXJhYmxlLzE4Ni8xNzc="], sku: "MH12") {
        __typename
        id
        sku
        name
        url
        ... on SimpleProductView {
            price {
                final {
                    amount {
                        value
                    }
                }
                regular {
                    amount {
                        value
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
                        }
                    }
                    regular {
                        amount {
                            value
                        }
                    }
                }
                minimum {
                    final {
                        amount {
                            value
                        }
                    }
                    regular {
                        amount {
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
    "refineProduct": {
      "__typename": "ComplexProductView",
      "id": "VFVneE1nAFpHVm1ZWFZzZEEATXpSbE1qYzBNR0V0TnpRM015MDBZemc1TFRnM016QXROVGMwTURObVkyVXlOMkZsAGJXRnBibDkzWldKemFYUmxYM04wYjNKbABZbUZ6WlEAVFVGSFUxUkhNREExTlRjNU1ETTQ",
      "sku": "MH12",
      "name": "Ajax Full-Zip Sweatshirt 2",
      "url": "http://example.com/ajax-full-zip-sweatshirt.html",
      "options": [
        {
          "id": "color",
          "title": "Color",
          "required": false,
          "values": [
            {
              "id": "Y29uZmlndXJhYmxlLzkzLzU5",
              "title": "Blue"
            },
            {
              "id": "Y29uZmlndXJhYmxlLzkzLzY3",
              "title": "Red"
            },
            {
              "id": "Y29uZmlndXJhYmxlLzkzLzYy",
              "title": "Green"
            }
          ]
        }
      ],
      "priceRange": {
        "maximum": {
          "final": {
            "amount": {
              "value": 69
            }
          },
          "regular": {
            "amount": {
              "value": 69
            }
          }
        },
        "minimum": {
          "final": {
            "amount": {
              "value": 69
            }
          },
          "regular": {
            "amount": {
              "value": 69
            }
          }
        }
      }
    }
  }
}
```

### Return details about a fully selected complex product

In the following query, the shopper has selected options for both size and color. The response contains details about the corresponding simple product.

<CodeBlock slots="heading, code" repeat="3" languages="JSON" />

**Request:**

```graphql
query {
    refineProduct(optionIds: ["Y29uZmlndXJhYmxlLzE4Ni8xNzc=", "Y29uZmlndXJhYmxlLzkzLzU5"], sku: "MH12") {
        __typename
        id
        sku
        name
        url
        ... on SimpleProductView {
            price {
                final {
                    amount {
                        value
                    }
                }
                regular {
                    amount {
                        value
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
                        }
                    }
                    regular {
                        amount {
                            value
                        }
                    }
                }
                minimum {
                    final {
                        amount {
                            value
                        }
                    }
                    regular {
                        amount {
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
    "refineProduct": {
      "__typename": "SimpleProductView",
      "id": "VFVneE1pMU5MVUpzZFdVAFpHVm1ZWFZzZEEATXpSbE1qYzBNR0V0TnpRM015MDBZemc1TFRnM016QXROVGMwTURObVkyVXlOMkZsAGJXRnBibDkzWldKemFYUmxYM04wYjNKbABZbUZ6WlEAVFVGSFUxUkhNREExTlRjNU1ETTQ",
      "sku": "MH12-M-Blue",
      "name": "Ajax Full-Zip Sweatshirt -M-Blue",
      "url": "http://example.com/catalog/product/view/id/235/s/ajax-full-zip-sweatshirt-m-blue/",
      "price": {
        "final": {
          "amount": {
            "value": 69
          }
        },
        "regular": {
          "amount": {
            "value": 69
          }
        }
      }
    }
  }
}
```

## Input fields

You must specify a SKU value and at least one option ID as input.

Field | Data type | Description
--- | --- | ---
`optionIds` | [String!]! | A list of IDs assigned to the product options the shopper has selected, such as specific colors and sizes.
`sku` | String! |  The SKU of a complex product.

## Output fields

The `ProductView` return object is an interface that can contain the following fields. It is implemented by the [`SimpleProductView`](#simpleproductview-type) and [`ComplexProductView`](#complexproductview-type) types.

Field | Data Type | Description
--- | --- | ---
`addToCartAllowed` | Boolean | Indicates whether the product can be added to the cart.
`attributes(roles: [String])` | [`[ProductViewAttribute]`](#productviewattribute-type) | A list of merchant-defined attributes designated for the storefront.
`description` | String | The detailed description of the product.
`externalId`| String | The external ID of the product.
`id` | ID! | The product ID, generated as a composite key, unique per locale.
`images(roles: [String])` | [`[ProductViewImage]`](#productviewimage-type) | A list of images defined for the product.
`inputOptions` | [`[ProductViewInputOption]`](#productviewinputoption-type) | A list of input options the shopper can supply to customize a product.
`inStock` | Boolean | Indicates whether the product is in stock.
`lastModifiedAt` | DateTime | Date and time when the product was last updated.
`links(linkTypes: [String!])` | [`[ProductViewLink]`](#productviewlink-type) | A list of related, corss-sell, or up-sell products.
`lowStock` | Boolean | Indicates whether the product stock is low.
`metaDescription` | String | A brief overview of the product for search results listings.
`metaKeyword` | String | A comma-separated list of keywords that are visible only to search engines.
`metaTitle` | String | A string that is displayed in the title bar and tab of the browser and in search results lists.
`name` | String | Product name.
`shortDescription` | String | A summary of the product.
`sku` | String | Product SKU.
`url` | String | Canonical URL of the product.
`urlKey` | String | URL key of the product.

### ComplexProductView type

The `ComplexProductView` type represents bundle, configurable, and group products. Complex product prices are returned as a price range, because price values can vary based on selected options. The type implements `ProductView`.

Field | Data Type | Description
--- | --- | ---
`addToCartAllowed` | Boolean | Indicates whether the product can be added to the cart.
`attributes(roles: [String])` | [`[ProductViewAttribute]`](#productviewattribute-type) | A list of merchant-defined attributes designated for the storefront.
`description` | String | The detailed description of the product.
`externalId`| String | The external ID of the product.
`id` | ID! | The product ID, generated as a composite key, unique per locale.
`images(roles: [String])` | [`[ProductViewImage]`](#productviewimage-type) | A list of images defined for the product.
`inputOptions` | [`[ProductViewInputOption]`](#productviewinputoption-type) | A list of input options the shopper can supply to customize a product.
`inStock` | Boolean | Indicates whether the product is in stock.
`links(linkTypes: [String!])` | [`[ProductViewLink]`](#productviewlink-type) | A list of product links.
`lowStock` | Boolean | Indicates whether the product stock is low.
`metaDescription` | String | A brief overview of the product for search results listings.
`metaKeyword` | String | A comma-separated list of keywords that are visible only to search engines.
`metaTitle` | String | A string that is displayed in the title bar and tab of the browser and in search results lists.
`name` | String | Product name.
`options` | [`[ProductViewOption]`](#productviewoption-type) | A list of selectable options.
`priceRange` | [`ProductViewPriceRange`](#productviewpricerange-type) | A range of possible prices for a complex product.
`shortDescription` | String | A summary of the product.
`sku` | String | Product SKU.
`url` | String | Canonical URL of the product.
`urlKey` | String | URL key of the product.
`videos` | `[ProductViewVideo]`(#productviewvideo-type) | A list of videos linked to the product.

### Price type

The `Price type` defines the price of a simple product or a part of a price range for a complex product. It can include a list of price adjustments.

Field | Data Type | Description
--- | --- | ---
`adjustments` | [`[PriceAdjustment]`](#priceadjustment-type) | A list of price adjustments.
`amount` | [`ProductViewMoney`](#productviewmoney-type) | Contains the monetary value and currency code of a product.

### PriceAdjustment type

The `PriceAdjustment` type specifies the amount and type of a price adjustment. An example code value is `weee`.

Field | Data Type | Description
--- | --- | ---
`amount` | Float | The amount of the price adjustment.
`code` | String | Identifies the type of price adjustment.

### ProductViewAttribute type

The `ProductViewAttribute` type is a container for customer-defined attributes that are displayed the storefront.

Field | Data Type | Description
--- | --- | ---
`label` | String | Label of the attribute.
`name` | String! | Name of an attribute code.
`roles` | [String] | Roles designated for an attribute on the storefront, such as "Show on PLP", "Show in PDP", or "Show in Search".
`value` | JSON | Attribute value, arbitrary of type.

### ProductViewImage type

The `ProductViewImage` type contains details about a product image.

Field | Data Type | Description
--- | --- | ---
`label` | String | The display label of the product image.
`roles` | [String] | A list that describes how the image is used. Can be `image`, `small_image`, or `thumbnail`.
`url` | String! | The URL to the product image.

### ProductViewLink type

The `ProductViewLink` type contains details about product links for related products and cross selling.

Field | Data Type | Description
--- | --- | ---
`linkTypes` | [String!]! | Types of links for this product. Can be `crosssell`, `related`, and `upsell`.
`product` | `ProductView!` | Details about the product in the link.

### ProductViewMoney type

The `ProductViewMoney` type defines a monetary value, including a numeric value and a currency code.

Field | Data Type | Description
--- | --- | ---
`currency` | ProductViewCurrency | A three-letter currency code, such as USD or EUR.
`value` | Float | A number expressing a monetary value.

### ProductViewInputOption type

Product input options provide details about how a shopper can enter customization details for a product. For example, for product personalization the input options might provide the fields for the shopper to add an image or text for a monogram. The input option can include an associated `markupAmount` that is applied to the product price. For additional information, see [Product settings - Customizable Options](https://experienceleague.adobe.com/en/docs/commerce-admin/catalog/products/settings/settings-advanced-custom-options).

Field | Data Type | Description
-- | -- | --
`fileExtensions` | String | A comma separated list of accepted file types for the input option if it has an associated file, for example `png, jpg`.
`id` | ID | The ID of the option value.
`imageSize` | [`ProductViewInputOptionImageSize`](#productviewinputoptionimagesize-type) | Dimensions of an image associated with the input option.
`markupAmount` | Float | Amount to add or subtract from the product price when the option is configured.
`range` |[`ProductViewInputOptionRange`](#productviewinputoptionrange-type)| Value limits associated with an input option, for example allowed characters or file size.
`required` | Boolean | Indicates whether the option must be supplied.
`sortOrder` | Int | Indicates the order in which the option is displayed if multiple input options are configured.
`suffix` | String | SKU suffix added to the customized product.
`title` | String | The display name of the option value.
`type` | String | The type of control for entering the input option, for example `textfield`, `textarea`, `date`, `date_time`, `time`, `file`.

### ProductViewInputOptionRange type

Lists the value range associated with a `[ProductViewInputOption]`. For example, if the input option is a text field, the range represents the number of characters.

Field | Data Type | Description
-- | -- | --
`from` | Float | Minimum value accepted for the option input.
`to` | Float | Maximum value accepted for the option input.

### ProductViewInputOptionImageSize type

Lists the image dimensions for an image associated with a `[ProductViewInputOption]`.

Field | Data Type | Description
-- | -- | --
`height` | Int | Height of image provided for an input option.
`width` |  Int | Width of image provided for an input option.

### ProductViewOption type

Product options provide a way to configure products by making selections of particular option values predefined for the product. Selecting one or many options points to a specific simple product.

Field | Data Type | Description
--- | --- | ---
`id` | ID | The ID of the option.
`multi` | Boolean | Indicates whether the option allows multiple choices.
`required` | Boolean | Indicates whether the option must be selected.
`title` | String | The display name of the option.
`values` | [`[ProductViewOptionValue!]`](#productviewoptionvalue-Interface) | List of available option values.

### ProductViewOptionValue interface

The `ProductViewOptionValue` interface defines the product fields available to the `ProductViewOptionValueProduct` and `ProductViewOptionValueConfiguration` types.

Field | Data Type | Description
--- | --- | ---
`id` | ID | The ID of an option value.
`inStock` | Boolean | Indicates if the option is in stock.
`title` | String | The display name of the option value.

### ProductViewOptionValueConfiguration type

The `ProductViewOptionValueConfiguration` type is an implementation of `ProductViewOptionValue` for configuration values.

Field | Data Type | Description
--- | --- | ---
`id` | ID | The ID of an option value.
`inStock` | Boolean | Indicates if the option is in stock.
`title` | String | The display name of the option value.

### ProductViewOptionValueProduct type

The `ProductViewOptionValueProduct` type is an implementation of `ProductViewOptionValue` that adds details about a simple product.

Field | Data Type | Description
--- | --- | ---
`id` | ID | The ID of an option value.
`inStock` | Boolean | Indicates if the option is in stock.
`isDefault` | Boolean | Indicates whether the option is the default.
`product` | [`SimpleProductView`](#simpleproductview-type) | Details about a simple product.
`quantity` | [`SimpleProductView`](#simpleproductview-type) | Default quantity of an option value.
`title` | String | The display name of the option value.

### ProductViewOptionValueSwatch type

The `ProductViewOptionValueSwatch` type is an implementation of `ProductViewOptionValue` that adds details about a product swatch.

Field | Data Type | Description
--- | --- | ---
`id` | ID | The ID of an option value.
`inStock` | Boolean | Indicates if the option is in stock.
`title` | String | The display name of the option value.
`type` | SwatchType | Indicates the type of swatch. Can be `TEXT`, `IMAGE`, `COLOR_HEX`, or `CUSTOM`.
`value` | String | The value of the swatch.

### ProductViewPrice type

The `ProductViewPrice` type provides the base product price view, inherent for simple products.

Field | Data Type | Description
--- | --- | ---
`final` | Price | Price value after discounts, excluding personalized promotions.
`regular` | Price | Base product price specified by the merchant.
`roles` | [String] | Determines if the price should be visible or hidden.

### ProductViewPriceRange type

The `ProductViewPriceRange` type lists the minimum and maximum price of a complex product.

Field | Data Type | Description
--- | --- | ---
`maximum` | ProductViewPrice | Maximum price.
`minimum` | ProductViewPrice | Minimum price.

### ProductViewVideo type

Field | Data Type | Description
--- | --- | ---
`url` | String | The URL to link to the product video.
`description` | String | Description of the product video.
`title` | String | Title of the product video.

### SimpleProductView type

The `SimpleProductView` type represents all product types, except bundle, configurable, and group. Simple product prices do not contain price ranges. `SimpleProductView` implements `ProductView`.

Field | Data Type | Description
--- | --- | ---
`addToCartAllowed` | Boolean | Indicates whether the product can be added to the cart.
`attributes(roles: [String])` | [`[ProductViewAttribute]`](#productviewattribute-type) | A list of merchant-defined attributes designated for the storefront.
`description` | String | The detailed description of the product.
`externalId`| String | The external ID of the product.
`id` | ID! | The product ID, generated as a composite key, unique per locale.
`images(roles: [String])` | [`[ProductViewImage]`](#productviewimage-type) | A list of images defined for the product.
`inputOptions` | [`[ProductViewInputOption]`](#productviewinputoption-type) | A list of input options the shopper can supply to customize a product.
`inStock` | Boolean | Indicates whether the product is in stock.
`links(linkTypes: [String!])` | [`[ProductViewLink]`](#productviewlink-type) | A list of product links.
`lowStock` | Boolean | Indicates whether the product stock is low.
`metaDescription` | String | A brief overview of the product for search results listings.
`metaKeyword` | String | A comma-separated list of keywords that are visible only to search engines.
`metaTitle` | String | A string that is displayed in the title bar and tab of the browser and in search results lists.
`name` | String | Product name.
`price` | [`ProductViewPrice`](#productviewprice-type) | Base product price view.
`shortDescription` | String | A summary of the product.
`sku` | String | Product SKU.
`url` | String | Canonical URL of the product.
`urlKey` | String | URL key of the product.

