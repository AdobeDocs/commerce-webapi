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

import StorefrontAPIEndpoints from '/src/_includes/graphql/endpoints.md'

<StorefrontAPIEndpoints />

## Required headers

You must specify the following HTTP headers to run this query.

import Docs from '/src/_includes/graphql/catalog-service/headers.md'

<Docs />

###  Find the customer group code

import CustomerGroupCode from '/src/_includes/graphql/customer-group-code.md'

<CustomerGroupCode />

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

import Docs2 from '/src/_includes/graphql/catalog-service/product-view.md'

<Docs2 />
