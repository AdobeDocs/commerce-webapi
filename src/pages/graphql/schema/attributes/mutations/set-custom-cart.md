---
title: setCustomAttributesOnCart mutation
---

# setCustomAttributesOnCart mutation

<InlineAlert variant="important" slots="text" />

This mutation is automatically available on [Adobe Commerce as a Cloud Service](https://experienceleague.adobe.com/en/docs/commerce/cloud-service/overview) (SaaS) projects. Adobe Commerce on-premises and Cloud infrastructure (PaaS) projects can [install separate modules](./index.md) to provide this functionality.

The `setCustomAttributesOnCart` mutation sets custom attributes on a cart. The mutation accepts a cart ID and an array of custom attribute key/value pairs. It returns the updated cart.  All ID values are treated as strings.

To remove a custom attribute, rerun the mutation without the previously applied custom attribute.

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

The [`setCustomAttributesOnCart`](https://developer.adobe.com/commerce/services/graphql/reference/saas-api/index.html#mutation-setCustomAttributesOnCart) reference provides detailed information about the types and fields defined in this mutation.

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
