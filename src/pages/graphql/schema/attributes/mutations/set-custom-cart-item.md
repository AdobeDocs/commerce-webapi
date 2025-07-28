---
title: setCustomAttributesOnCartItem mutation
---

import CustomAttributesAvailability from '/src/_includes/graphql/custom-attribute-availability.md'

# setCustomAttributesOnCartItem mutation

<CustomAttributesAvailability />

The `setCustomAttributesOnCartItem` mutation sets custom attributes on a cart item. The mutation accepts a cart ID, cart item ID, and an array of custom attribute key/value pairs. It returns the updated cart item.  All ID values are treated as strings.

When the quote is converted to an order, the custom attributes are copied to the order.

To remove a custom attribute, rerun the mutation without the previously applied custom attribute.

## Syntax

```graphql
mutation {
  setCustomAttributesOnCartItem(
    input: CartItemCustomAttributesInput
  ){
    AddCustomAttributesToCartItemOutput
  }
}
```

## Reference

The [`setCustomAttributesOnCartItem`](https://developer.adobe.com/commerce/services/graphql/reference/saas-api/index.html#mutation-setCustomAttributesOnCartItem) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following mutation sets custom attributes on a cart item with the specified cart ID and cart item ID. The custom attributes are provided as an array of key-value pairs.

**Request:**

```graphql
mutation {
  setCustomAttributesOnCartItem(
    input: {
      cart_id: "8k0Q4MpH2IGahWrTRtqM61YV2MtLPApz"
      cart_item_id: "2"
      custom_attributes: [
        { 
          attribute_code: "first_attribute", 
          value: "value_one"
        },
        { 
          attribute_code: "second_attribute", 
          value: "value_twp" 
        }
      ]
    }
  ) {
    cart {
      id
      custom_attributes {
        attribute_code
        value
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "setCustomAttributesOnCartItem": {
      "cart": {
        "id": "8k0Q4MpH2IGahWrTRtqM61YV2MtLPApz",
        "custom_attributes": [
          {
            "attribute_code": "first_attribute",
            "value": "value_one"
          }
          {
            "attribute_code": "second_attribute",
            "value": "value_twp"
          }
        ]
      }
    }
  }
}
```
