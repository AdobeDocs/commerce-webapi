---
title: addVirtualProductsToCart mutation | Commerce Web APIs
---

# addVirtualProductsToCart mutation

<InlineAlert variant="warning" slots="text" />

We recommend using the [addProductsToCart mutation](add-products.md) to add any type of product to the cart.

A virtual product represents a saleable item that is not physical, such as a membership, service, warranty, or subscription. Virtual products do not need to be shipped or downloaded, nor do they require stock management.

The `addVirtualProductsToCart` mutation allows you to add multiple virtual products to the cart at the same time, but you cannot add other product types with this mutation. To add a virtual product to a cart, you must provide the cart ID, the SKU, and the quantity. You can also optionally provide customizable options.

## Syntax

`mutation: {addVirtualProductsToCart(input: AddVirtualProductsToCartInput): {AddVirtualProductsToCartOutput}}`

## Example usage

The Luma sample data does not include any virtual products. The following example requires that you create a virtual product with the `sku` value of `Membership-Gold` with a price of $49.99.

**Request:**

```text

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
      items {
        product {
          name
        }
        quantity
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
        "items": [
          {
            "product": {
              "name": "Gold Membership"
            },
            "quantity": 1
          }
        ],
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

## Input attributes

The top-level `AddVirtualProductsToCartInput` object is listed first. All child objects are listed in alphabetical order.

### AddVirtualProductsToCartInput object

The `AddVirtualProductsToCartInput` object must contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`cart_id` | String! | The unique ID that identifies the customer's cart
`cart_items` | [VirtualProductCartItemInput!](#virtualproductcartiteminput-object) | Contains the cart item IDs and quantity of each item

### CartItemInput object

The `CartItemInput` object must contain the following attributes:

import CartItemInput from '/src/pages/_includes/graphql/cart-item-input-24.md'

<CartItemInput />

### CustomizableOptionInput object

The `CustomizableOptionInput` object can contain the following attributes:

import CustomizableOptionInput from '/src/pages/_includes/graphql/customizable-option-input-24.md'

<CustomizableOptionInput />

### VirtualProductCartItemInput object

The `VirtualProductCartItemInput` object must contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`customizable_options` |[[CustomizableOptionInput]](#customizableoptioninput-object) | An array that defines customizable options for the product
`data` | [CartItemInput!](#cartiteminput-object) | An object containing the `sku` and `quantity` of the product

## Output attributes

The `AddVirtualProductsToCartOutput` object contains the `Cart` object.

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
`Could not find a product with SKU "YYY"` | A virtual product with the SKU specified in the `data`.`sku` argument does not exist.
`Required parameter "cart_id" is missing` | The `cart_id` argument was omitted or contains an empty value.
`Required parameter "cart_items" is missing` | The `cart_items` argument was omitted or contains an empty value.
`The current user cannot perform operations on cart XXX` | An unauthorized user (guest) tried to add the product into a customer's cart, or an authorized user (customer) tried to add the product into the cart of another customer.
`The product's required option(s) weren't entered. Make sure the options are entered and try again.` | A virtual product has customizable options that were not specified in the mutation, but are required for adding the product into the cart.
