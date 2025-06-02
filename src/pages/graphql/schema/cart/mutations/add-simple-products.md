---
title: addSimpleProductsToCart mutation
edition: paas
---

# addSimpleProductsToCart mutation

<InlineAlert variant="warning" slots="text" />

We recommend using the [addProductsToCart mutation](add-products.md) to add any type of product to the cart.

The `addSimpleProductsToCart` mutation allows you to add any number of simple and group products to the cart at the same time.

Simple products are physical products that do not have variations, such as color, size, or price. Group products are a set of simple standalone products that are assigned a unique SKU and are presented as a group. Each product in the group is purchased as a separate item.

To add a simple or grouped product to a cart, you must provide the cart ID, the SKU, and the quantity. You can also optionally provide customizable options.

## Syntax

`mutation: {addSimpleProductsToCart(input: AddSimpleProductsToCartInput): {AddSimpleProductsToCartOutput}}`

## Reference

The [`addSimpleProductsToCart`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-addSimpleProductsToCart) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

These examples show the minimal payload and a payload that includes customizable options.

### Add a simple product to a cart

The following example adds a simple product to a cart. The response contains the entire contents of the customer's cart.

**Request:**

```graphql
mutation {
  addSimpleProductsToCart(
    input: {
      cart_id: "IeTUiU0oCXjm0uRqGCOuhQ2AuQatogjG"
      cart_items: [
        {
          data: {
            quantity: 1
            sku: "24-MB04"
          }
        }
      ]
    }
  ) {
    cart {
      itemsV2 {
        items {
          id
          product {
            name
            sku
          }
          quantity
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
    "addSimpleProductsToCart": {
      "cart": {
        "itemsV2": {
          "items": [
            {
              "id": "13",
              "product": {
                "name": "Strive Shoulder Pack",
                "sku": "24-MB04"
              },
              "quantity": 1
            }
          ],
          "total_items": 1,
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

### Add a simple product with customizable options to a cart

If a product has a customizable option, you can specify the option's value in the `addSimpleProductsToCart` request.

**Request:**

```graphql
mutation {
  addSimpleProductsToCart (input: {
    cart_id: "IeTUiU0oCXjm0uRqGCOuhQ2AuQatogjG",
    cart_items: {
      data: {
        sku: "simple"
        quantity: 1
      },
      customizable_options: [
        {
          id: 121
          value_string: "field value"
        }
      ]
    }
  }) {
    cart {
      itemsV2 {
        items {
          product {
            name
          }
          quantity
          ... on SimpleCartItem {
            customizable_options {
              label
              values {
                value
              }
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
    "addSimpleProductsToCart": {
      "cart": {
        "itemsV2": {
          "items": [
            {
              "product": {
                "name": "simple"
              },
              "quantity": 1,
              "customizable_options": [
                {
                  "label": "Field Option",
                  "values": [
                    {
                      "value": "field value"
                    }
                  ]
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

### Add a grouped product to a cart

The following example adds a grouped product (`Workout-Kit`) to a cart. The grouped product contains three simple products.

**Request:**

```graphql
mutation {
  addSimpleProductsToCart(
    input: {
      cart_id: "2m3Wpue1L3bNARhErAKbZ8Lb7czvgq6R"
      cart_items: [
        {
          data: {
            quantity: 1
            sku: "24-WB01"
          }
        }
      ]
    }
  ) {
    cart {
      itemsV2 {
        items {
          uid
          product {
            name
            sku
          }
          quantity
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
    "addSimpleProductsToCart": {
      "cart": {
        "itemsV2": {
          "items": [
            {
              "uid": "NDA=",
              "product": {
                "name": "Voyage Yoga Bag",
                "sku": "24-WB01"
              },
              "quantity": 1
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
`Could not find a product with SKU "YYY"` | A simple product with the SKU specified in the `data`.`sku` argument does not exist.
`Required parameter "cart_id" is missing` | The `cart_id` argument was omitted or contains an empty value.
`Required parameter "cart_items" is missing` | The `cart_items` argument was omitted or contains an empty value.
`The current user cannot perform operations on cart XXX` | An unauthorized user (guest) tried to add the product into a customer's cart, or an authorized user (customer) tried to add the product into the cart of another customer.
`The product's required option(s) weren't entered. Make sure the options are entered and try again.` | A simple product has customizable options that were not specified in the mutation, but are required for adding the product into the cart.
