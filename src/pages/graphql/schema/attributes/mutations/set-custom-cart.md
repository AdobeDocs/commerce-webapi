---
title: setCustomAttributesOnCart mutation
description: This mutation is automatically available on Adobe Commerce as a Cloud Service (SaaS) projects. Adobe Commerce on-premises and Cloud infrastructure (PaaS) p...
---

# setCustomAttributesOnCart mutation

<Fragment src="../../../../includes/graphql/custom-attribute-availability.md"/>

The `setCustomAttributesOnCart` mutation sets custom attributes on a cart. The mutation accepts a cart ID and an array of custom attribute key/value pairs. It returns the updated cart.  All ID values are treated as strings.

When the quote is converted to an order, the custom attributes are copied to the order.

To remove a custom attribute, rerun the mutation without the previously applied custom attribute.

<InlineAlert variant="info" slots="text" />

On Adobe Commerce as a Cloud Service (SaaS) projects, you can use the [`addProductsToCart` mutation](../../cart/mutations/add-products.md) to directly apply custom attributes to items in the cart. To do this, specify an array of custom attribute key/value pairs with the `CartItemInput.custom_attributes` field. On Adobe Commerce on-premises and Cloud infrastructure (PaaS) projects, you can [install version 0.8.0 or higher of the `magento/out-of-process-custom-attributes` module](../mutations/index.md#install-custom-attribute-support) to achieve the same functionality.

## Syntax

```graphql
mutation {
  setCustomAttributesOnCart(
    input: CartCustomAttributesInput
  ){    
    AddCustomAttributesToCartItemOutput
  }
}
```

## Reference

The `setCustomAttributesOnCart` reference provides detailed information about the types and fields defined in this mutation.

* [Adobe Commerce as a Cloud Service](/reference/graphql/saas/mutations.md#setcustomattributesoncart)

## Example usage

The following mutation sets custom attributes on a cart with the specified ID. The custom attributes are provided as an array of key-value pairs.

**Request:**

```graphql
mutation {
  setCustomAttributesOnCart(
    input: {
      cart_id: "8k0Q4MpH2IGahWrTRtqM61YV2MtLPApz"
      custom_attributes: [
        { 
          attribute_code: "custom_attribute_1",
          value: "value1"
        }
        {
          attribute_code: "custom_attribute_2",
          value: "value2"
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
    "setCustomAttributesOnCart": {
      "cart": {
        "id": "8k0Q4MpH2IGahWrTRtqM61YV2MtLPApz",
        "custom_attributes": [
          {
            "attribute_code": "custom_attribute_1",
            "value": "value1"
          },
          {
            "attribute_code": "custom_attribute_2",
            "value": "value2"
          }
        ]
      }
    }
  }
}
```
