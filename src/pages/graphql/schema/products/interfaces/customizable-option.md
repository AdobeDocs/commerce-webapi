---
title: CustomizableOptionInterface
---

# CustomizableOptionInterface

Customizable options for a product provide a way to offer customers a selection of options with a variety of text, selection, and date input types. All product types can contain customizable options.

[`CustomizableOptionInterface`](https://developer.adobe.com/commerce/webapi/graphql-api/beta/index.html#definition-CustomizableOptionInterface) is defined in the `CatalogGraphQl` module, and its attributes can be used in any `products` query. This interface returns basic information about a customizable option and can be implemented by several types of configurable options:

*  Text area
*  Checkbox
*  Date picker
*  Drop-down menu
*  Text field
*  File picker
*  Multiple select box
*  Radio buttons

<InlineAlert variant="info" slots="text" />

Adobe has not implemented all possible customizable product options for GraphQL. For example, the `CustomizableFileOption` and `CustomizableFileValue` objects are currently not supported.

## Example usage

The following query returns information about the customizable options configured for the product with a `sku` of `xyz`.

**Request:**

```graphql
{
  products(filter: {sku: {eq: "xyz"}}) {
    items {
      uid
      name
      sku
      __typename
      ... on CustomizableProductInterface {
        options {
          title
          required
          sort_order
          uid
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
          "uid": "Mw==",
          "name": "T-shirt",
          "sku": "xyz",
          "__typename": "SimpleProduct",
          "options": [
            {
              "title": "Image",
              "required": false,
              "sort_order": 1,
              "uid": "Mx=="
            }
          ]
        }
      ]
    }
  }
}
```

The following query returns information about the customizable options configured for the product with a `sku` of `xyz` with Custom Option type Text Field.

*  Custom option Option Type is text field with required field.
*  Option Title is `Favorite Color`.
*  Price is `$5`, Price Type is `Fixed`, Option SKU is `favoriteColorSku` and Max. Characters is `20`.

**Request:**

```graphql
{
  products(filter: { sku: { eq: "xyz" } }) {
    items {
      id
      name
      sku
      __typename
      ... on CustomizableProductInterface {
        options {
          title
          required
          sort_order
          option_id
          ... on CustomizableFieldOption {
            value {
              uid
              sku
              price
              price_type
              max_characters
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
          "id": 10,
          "name": "Savvy Shoulder Tote",
          "sku": "24-WB05",
          "__typename": "SimpleProduct",
          "options": [
            {
              "title": "Favorite Color",
              "required": true,
              "sort_order": 2,
              "option_id": 2,
              "value": {
                "uid": "Y3VzdG9tLW9wdGlvbi8y",
                "sku": "favoriteColorSku",
                "price": 5,
                "price_type": "FIXED",
                "max_characters": 20
              }
            }
          ]
        }
      ]
    }
  }
}
```
