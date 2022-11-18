---
title: addConfigurableProductsToCart mutation | Commerce Web APIs
---

# addConfigurableProductsToCart mutation

<InlineAlert variant="warning" slots="text" />

We recommend using the [addProductsToCart mutation](add-products.md) to add any type of product to the cart.

Use the `addConfigurableProductsToCart` mutation to add configurable products to a specific cart.

## Syntax

`mutation: {addConfigurableProductsToCart(input: AddConfigurableProductsToCartInput) {AddConfigurableProductsToCartOutput}}`

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
        ]
      }
    }
  }
}
```

## Input attributes

### AddConfigurableProductsToCartInput object

The `AddConfigurableProductsToCartInput` object contains the following attributes:

Attribute | Type | Description
--- | --- | ---
`cart_id` | String! | The unique ID that identifies the customer's cart
`cart_items` | [[ConfigurableProductCartItemInput]](#configurableproductcartiteminput-object) | An array of configurable items to add to the cart

### ConfigurableProductCartItemInput object

The `ConfigurableProductCartItemInput` object contains the following attributes:

Attribute | Type | Description
--- | --- | ---
`customizable_options` | [CustomizableOptionInput](#customizableoptioninput-object) | An object that contains the ID and value of the product
`data` | [CartItemInput!](#cartiteminput-object) | An object that contains the quantity and SKU of the configurable product
`parent_sku` | String | The SKU of the simple product's parent configurable product. If you do not specify this attribute, the application treats the product being added to the cart as a simple product
`variant_sku` | String | Deprecated. Use `CartItemInput.sku` instead. The SKU of the simple product

### CustomizableOptionInput object

The `CustomizableOptionInput` object contains the following attributes:

import CustomizableOptionInput from '/src/pages/_includes/graphql/customizable-option-input-24.md'

<CustomizableOptionInput />

### CartItemInput object

The `CartItemInput` object must contain the following attributes:

import CartItemInput from '/src/pages/_includes/graphql/cart-item-input-24.md'

<CartItemInput />

## Output attributes

The `AddConfigurableProductsToCartOutput` object contains the `Cart` object.

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
`Could not add the product with SKU configurable to the shopping cart: The product that was requested doesn't exist. Verify the product and try again.` | The simple product with the SKU specified in the `data`.`sku` attribute does not exist.
`Could not find a product with SKU "XXX"` | The configurable product with SKU specified in the `parent_sku` argument does not exist.
`Could not find specified product.` | The simple product specified in the `data`.`sku` argument is not assigned to the configurable product provided in the `parent_sku` attribute.
`Required parameter "cart_id" is missing` | The `cart_id` argument was omitted or contains an empty value.
`Required parameter "cart_items" is missing` | The `cart_items` argument was omitted or contains an empty array.
`Required parameter "email" is missing` | The `email` argument was omitted or contains an empty value.
`The requested qty is not available` | The requested quantity specified `data`.`quantity` is not available.

## Related topics

-  [Configurable product data types](../../products/interfaces/types/configurable.md)
