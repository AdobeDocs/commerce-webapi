---
title: addSimpleProductsToCart mutation | Commerce Web APIs
---

# addSimpleProductsToCart mutation

<InlineAlert variant="warning" slots="text" />

We recommend using the [addProductsToCart mutation](add-products.md) to add any type of product to the cart.

The `addSimpleProductsToCart` mutation allows you to add any number of simple and group products to the cart at the same time.

Simple products are physical products that do not have variations, such as color, size, or price. Group products are a set of simple standalone products that are assigned a unique SKU and are presented as a group. Each product in the group is purchased as a separate item.

To add a simple or grouped product to a cart, you must provide the cart ID, the SKU, and the quantity. You can also optionally provide customizable options.

## Syntax

`mutation: {addSimpleProductsToCart(input: AddSimpleProductsToCartInput): {AddSimpleProductsToCartOutput}}`

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
      items {
        id
        product {
          name
          sku
        }
        quantity
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
        "items": [
          {
            "id": "13",
            "product": {
              "name": "Strive Shoulder Pack",
              "sku": "24-MB04"
            },
            "quantity": 1
          }
        ]
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
    }
  }
}
```

**Response:**

```text
{
  "data": {
    "addSimpleProductsToCart": {
      "cart": {
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
        ]
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
      items {
        uid
        product {
          name
          sku
        }
        quantity
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
        "items": [
          {
            "uid": "NDA=",
            "product": {
              "name": "Voyage Yoga Bag",
              "sku": "24-WB01"
            },
            "quantity": 1
          }
        ]
      }
    }
  }
}
```

## Input attributes

The top-level `AddSimpleProductsToCartInput` object is listed first. All child objects are listed in alphabetical order.

### AddSimpleProductsToCartInput object

The `AddSimpleProductsToCartInput` object must contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`cart_id` | String! | The unique ID that identifies the customer's cart
`cart_items` | [SimpleProductCartItemInput!](#simpleproductcartiteminput-object) | Contains the cart item IDs and quantity of each item

### CartItemInput object

The `CartItemInput` object must contain the following attributes:

import CartItemInput from '/src/pages/_includes/graphql/cart-item-input-24.md'

<CartItemInput />

### CustomizableOptionInput object

The `CustomizableOptionInput` object can contain the following attributes:

import CustomizableOptionInput from '/src/pages/_includes/graphql/customizable-option-input-24.md'

<CustomizableOptionInput />

### SimpleProductCartItemInput object

The `SimpleProductCartItemInput` object must contain the following attributes:

`customizable_options` |[[CustomizableOptionInputSimple]](#customizableoptioninput-object) | An array that defines customizable options for the product
`data` | [CartItemInput!](#cartiteminput-object) | An object containing the `sku` and `quantity` of the product.

## Output attributes

The `AddSimpleProductsToCartOutput` object contains the `Cart` object.

Attribute |  Data Type | Description
--- | --- | ---
`cart` |[Cart!](#cart-object) | Describes the contents of the specified shopping cart

### Cart object

import CartObject from '/src/pages/_includes/graphql/cart-object-24.md'

<CartObject />

[Cart query output](../../cart/queries/cart.md#output-attributes) provides more information about the `Cart` object.

## Errors

Error | Description
--- | ---
`Could not find a cart with ID "XXX"` | The specified `cart_id` value does not exist in the `quote_id_mask` table.
`Could not find a product with SKU "YYY"` | A simple product with the SKU specified in the `data`.`sku` argument does not exist.
`Required parameter "cart_id" is missing` | The `cart_id` argument was omitted or contains an empty value.
`Required parameter "cart_items" is missing` | The `cart_items` argument was omitted or contains an empty value.
`The current user cannot perform operations on cart XXX` | An unauthorized user (guest) tried to add the product into a customer's cart, or an authorized user (customer) tried to add the product into the cart of another customer.
`The product's required option(s) weren't entered. Make sure the options are entered and try again.` | A simple product has customizable options that were not specified in the mutation, but are required for adding the product into the cart.
