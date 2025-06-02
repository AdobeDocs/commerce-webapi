---
title: addConfigurableProductsToCart mutation
edition: paas
---

# addConfigurableProductsToCart mutation

<InlineAlert variant="warning" slots="text" />

We recommend using the [addProductsToCart mutation](add-products.md) to add any type of product to the cart.

Use the `addConfigurableProductsToCart` mutation to add configurable products to a specific cart.

## Syntax

`mutation: {addConfigurableProductsToCart(input: AddConfigurableProductsToCartInput) {AddConfigurableProductsToCartOutput}}`

## Reference

The [`addConfigurableProductsToCart`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-addConfigurableProductsToCart) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example adds two black Teton Pullover Hoodies size extra-small to the specified shopping cart. The `cart_id` used in this example was [generated](create-empty-cart.md) by creating an empty cart.

**Request:**

```graphql
mutation {
  addConfigurableProductsToCart(
    input: {
      cart_id: "4JQaNVJokOpFxrykGVvYrjhiNv9qt31C"
      cart_items: [
        {
          parent_sku: "MH02"
          data: {
            quantity: 2
            sku: "MH02-XS-Black"
          }
        }
      ]
    }
  ) {
    cart {
      itemsV2 {
        items {
          uid
          quantity
          product {
            name
            sku
          }
          ... on ConfigurableCartItem {
            configurable_options {
              option_label
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
    "addConfigurableProductsToCart": {
      "cart": {
        "itemsV2": {
          "items": [
            {
              "uid": "Mzc=",
              "quantity": 2,
              "product": {
                "name": "Teton Pullover Hoodie",
                "sku": "MH02"
              },
              "configurable_options": [
                {
                  "option_label": "Color"
                },
                {
                  "option_label": "Size"
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
`Could not find a cart with ID "XXX"` | The specified `cart_id` value does not exist in the `quote_id_mask` table.
`Could not add the product with SKU configurable to the shopping cart: The product that was requested doesn't exist. Verify the product and try again.` | The simple product with the SKU specified in the `data`.`sku` attribute does not exist.
`Could not find a product with SKU "XXX"` | The configurable product with SKU specified in the `parent_sku` argument does not exist.
`Could not find specified product.` | The simple product specified in the `data`.`sku` argument is not assigned to the configurable product provided in the `parent_sku` attribute.
`Required parameter "cart_id" is missing` | The `cart_id` argument was omitted or contains an empty value.
`Required parameter "cart_items" is missing` | The `cart_items` argument was omitted or contains an empty array.
`Required parameter "email" is missing` | The `email` argument was omitted or contains an empty value.
`The requested qty is not available` | The requested quantity specified `data`.`quantity` is not available.

## Related topics

-  [Configurable product data types](../../products/interfaces/types/configurable.md)
