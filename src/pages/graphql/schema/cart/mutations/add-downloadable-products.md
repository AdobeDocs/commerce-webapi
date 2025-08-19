---
title: addDownloadableProductsToCart mutation
contributor_name: Atwix
contributor_link: https://www.atwix.com/
edition: paas
---

# addDownloadableProductsToCart mutation

<InlineAlert variant="warning" slots="text" />

We recommend using the [addProductsToCart mutation](add-products.md) to add any type of product to the cart.

A downloadable product can be anything that you can deliver as a file, such as an eBook, music, video, software application, or an update. To add a downloadable product to a cart, you must provide the cart ID, the SKU, and the quantity. In some cases, you must include the IDs for downloadable product links. You can also optionally specify customizable options.

## Syntax

```graphql
mutation: {
    addDownloadableProductsToCart(
        input: AddDownloadableProductsToCartInput
    ): {
        AddDownloadableProductsToCartOutput
    }
}
```

## Reference

The [`addDownloadableProductsToCart`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-addDownloadableProductsToCart) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following examples show how to add a downloadable product to a shopping cart , depending on whether the **Links can be purchased separately** option is selected on the **Downloadable Information** section of the product page.

### Add a downloadable product to a cart with `Links can be purchased separately` enabled

The following example shows how to add a downloadable product in which the **Links can be purchased separately** option is enabled. The payload includes custom downloadable links `Episode 2` and `Episode 3`.

**Request:**

```graphql
mutation {
  addDownloadableProductsToCart(
    input: {
      cart_id: "gMV2BFQuNGiQmTnepQlMGko7Xc4P3X1w"
      cart_items: {
        data: {
          sku: "240-LV09"
          quantity: 1
        }
        downloadable_product_links: [
          {
            link_id: 7                 # Episode 2
          }
          {
            link_id: 8                 # Episode 3
          }
        ]
      }
    }
  ) {
    cart {
      itemsV2 {
        items {
          product {
            sku
          }
          quantity
          ... on DownloadableCartItem {
            links {
              title
              price
            }
            samples {
              title
              sample_url
            }
          }
        }
        total_count
        page_info {
          page_size
          current_page
          total_pages
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
    "addDownloadableProductsToCart": {
      "cart": {
        "itemsV2": {
          "items": [
            {
              "product": {
                "sku": "240-LV09"
              },
              "quantity": 1,
              "links": [
                {
                  "title": "Episode 2",
                  "price": 9
                },
                {
                  "title": "Episode 3",
                  "price": 9
                }
              ],
              "samples": [
                {
                  "title": "Trailer #1",
                  "sample_url": "https://<M2_INSTANCE>/downloadable/download/sample/sample_id/16/"
                },
                {
                  "title": "Trailer #2",
                  "sample_url": "https://<M2_INSTANCE>/downloadable/download/sample/sample_id/17/"
                },
                {
                  "title": "Trailer #3",
                  "sample_url": "https://<M2_INSTANCE>/downloadable/download/sample/sample_id/18/"
                }
              ]
            }
          ],
          "total_count": 1,
          "page_info": {
            "page_size": 20,
            "current_page": 1,
            "total_pages": 1
          }
        }
      }
    }
  }
}
```

### Add a downloadable product to a cart with disabled `Links can be purchased separately`

The following example shows how to add a downloadable product in which the **Links can be purchased separately** option is disabled. All downloadable links are added to the cart automatically.

**Request:**

```graphql
mutation {
  addDownloadableProductsToCart(
    input: {
      cart_id: "gMV2BFQuNGiQmTnepQlMGko7Xc4P3X1w"
      cart_items: {
        data: {
          sku: "240-LV07"
          quantity: 1
        }
      }
    }
  ) {
    cart {
      itemsV2 {
        items {
          product {
            sku
          }
          quantity
          ... on DownloadableCartItem {
            links {
              title
              price
            }
            samples {
              title
              sample_url
            }
          }
        }
        total_count
        page_info {
          page_size
          current_page
          total_pages
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
    "addDownloadableProductsToCart": {
      "cart": {
        "itemsV2": {
          "items": [
            {
              "product": {
                "sku": "240-LV07"
              },
              "quantity": 2,
              "links": [
                {
                  "title": "Solo Power Circuit",
                  "price": 14
                }
              ],
              "samples": [
                {
                  "title": "Trailer #1",
                  "sample_url": "https://<M2_INSTANCE>/downloadable/download/sample/sample_id/10/"
                },
                {
                  "title": "Trailer #2",
                  "sample_url": "https://<M2_INSTANCE>/downloadable/download/sample/sample_id/11/"
                },
                {
                  "title": "Trailer #3",
                  "sample_url": "https://<M2_INSTANCE>/downloadable/download/sample/sample_id/12/"
                }
              ]
            }
          ],
          "total_count": 1,
          "page_info": {
            "page_size": 20,
            "current_page": 1,
            "total_pages": 1
          }          
        }
      }
    }
  }
}
```

## Errors

Error | Description
--- | ---
`Could not find a cart with ID "XXX"` | The specified `cart_id` value does not exist in the `quote_id_mask` database table.
`Could not find a product with SKU "YYY"` | A product with the SKU specified in the `data`.`sku` argument does not exist.
`Required parameter "cart_id" is missing` | The mutation does not contain a `cart_id` argument.
`Required parameter "cart_items" is missing` | The `cart_items` argument is empty or is not of type `array`.
`Please specify product link(s).` | You tried to add a downloadable product in which the `Links can be purchased separately` option is enabled, but you did not specify individual product links.
