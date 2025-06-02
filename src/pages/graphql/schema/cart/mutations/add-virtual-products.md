---
title: addVirtualProductsToCart mutation
edition: paas
---

# addVirtualProductsToCart mutation

<InlineAlert variant="warning" slots="text" />

We recommend using the [addProductsToCart mutation](add-products.md) to add any type of product to the cart.

A virtual product represents a saleable item that is not physical, such as a membership, service, warranty, or subscription. Virtual products do not need to be shipped or downloaded, nor do they require stock management.

The `addVirtualProductsToCart` mutation allows you to add multiple virtual products to the cart at the same time, but you cannot add other product types with this mutation. To add a virtual product to a cart, you must provide the cart ID, the SKU, and the quantity. You can also optionally provide customizable options.

## Syntax

`mutation: {addVirtualProductsToCart(input: AddVirtualProductsToCartInput): {AddVirtualProductsToCartOutput}}`

## Reference

The [`addVirtualProductsToCart`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-addVirtualProductsToCart) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The Luma sample data does not include any virtual products. The following example requires that you create a virtual product with the `sku` value of `Membership-Gold` with a price of $49.99.

**Request:**

```graphql

mutation {
  addVirtualProductsToCart(
    input: {
      cart_id: "IeTUiU0oCXjm0uRqGCOuhQ2AuQatogjG",
      cart_items: [
        {
          data: {
            quantity: 1
            sku: "Membership-Gold"
          }
        }
       ]
    }
  ) {
    cart {
      itemsV2 {
        items {
          product {
            name
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
      prices {
        grand_total {
          value
          currency
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
    "addVirtualProductsToCart": {
      "cart": {
        "itemsV2": {
          "items": [
            {
              "product": {
                "name": "Gold Membership"
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
        },
        "prices": {
          "grand_total": {
            "value": 49.99,
            "currency": "USD"
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
`Could not find a product with SKU "YYY"` | A virtual product with the SKU specified in the `data`.`sku` argument does not exist.
`Required parameter "cart_id" is missing` | The `cart_id` argument was omitted or contains an empty value.
`Required parameter "cart_items" is missing` | The `cart_items` argument was omitted or contains an empty value.
`The current user cannot perform operations on cart XXX` | An unauthorized user (guest) tried to add the product into a customer's cart, or an authorized user (customer) tried to add the product into the cart of another customer.
`The product's required option(s) weren't entered. Make sure the options are entered and try again.` | A virtual product has customizable options that were not specified in the mutation, but are required for adding the product into the cart.
