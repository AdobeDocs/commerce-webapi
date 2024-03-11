---
title: customAttributeMetadata query
---

# customAttributeMetadata query

<InlineAlert variant="warning" slots="text" />

The `customAttributeMetadata` query has been deprecated. Use the [`customAttributeMetadataV2`](../../attributes/queries/custom-attribute-metadata-v2.md) query instead.

The `customAttributeMetadata` query returns the attribute type, given an attribute code and entity type. All entity attributes can be added to an equivalent GraphQL type, including custom, extension, and EAV (which have precedence set in that order for collisions). The GraphQL query consumer does not have the ability to know a field's attribute type.

The `StorefrontProperties` output object returns information about a product attribute. Storefront properties are configured in the Admin at **Stores** > Attributes > **Product** > `Attribute Name` > **Storefront Properties**.

## Syntax

`customAttributeMetadata(attributes: [AttributeInput!]!): CustomAttributeMetadata`

## Reference

The [`customAttributeMetadata`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-customAttributeMetadata) reference provides detailed information about the types and fields defined in this query.

## Example usage

The following query returns the attribute type for various custom and EAV attributes.

**Request:**

```graphql
{
  customAttributeMetadata(
    attributes: [
      {
        attribute_code: "size"
        entity_type: "catalog_product"
      }
      {
        attribute_code: "color"
        entity_type: "catalog_product"
      }
    ]
  ) {
    items {
      attribute_code
      attribute_type
      entity_type
      input_type
      attribute_options {
       value
       label
     }
      storefront_properties {
        use_in_product_listing
        use_in_layered_navigation
        use_in_search_results_layered_navigation
        visible_on_catalog_pages
        position
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "customAttributeMetadata": {
      "items": [
        {
          "attribute_code": "size",
          "attribute_type": "Int",
          "entity_type": "catalog_product",
          "input_type": "select",
          "attribute_options": [
            {
              "value": "91",
              "label": "55 cm"
            },
            {
              "value": "166",
              "label": "XS"
            },
            {
              "value": "92",
              "label": "65 cm"
            },
            {
              "value": "167",
              "label": "S"
            },
            {
              "value": "93",
              "label": "75 cm"
            },
            {
              "value": "168",
              "label": "M"
            },
            {
              "value": "94",
              "label": "6 foot"
            },
            {
              "value": "169",
              "label": "L"
            },
            {
              "value": "95",
              "label": "8 foot"
            },
            {
              "value": "170",
              "label": "XL"
            },
            {
              "value": "96",
              "label": "10 foot"
            },
            {
              "value": "171",
              "label": "28"
            },
            {
              "value": "172",
              "label": "29"
            },
            {
              "value": "173",
              "label": "30"
            },
            {
              "value": "174",
              "label": "31"
            },
            {
              "value": "175",
              "label": "32"
            },
            {
              "value": "176",
              "label": "33"
            },
            {
              "value": "177",
              "label": "34"
            },
            {
              "value": "178",
              "label": "36"
            },
            {
              "value": "179",
              "label": "38"
            }
          ],
          "storefront_properties": {
            "use_in_product_listing": true,
            "use_in_layered_navigation": "FILTERABLE_WITH_RESULTS",
            "use_in_search_results_layered_navigation": false,
            "visible_on_catalog_pages": false,
            "position": 0
          }
        },
        {
          "attribute_code": "color",
          "attribute_type": "Int",
          "entity_type": "catalog_product",
          "input_type": "select",
          "attribute_options": [
            {
              "value": "49",
              "label": "Black"
            },
            {
              "value": "50",
              "label": "Blue"
            },
            {
              "value": "51",
              "label": "Brown"
            },
            {
              "value": "52",
              "label": "Gray"
            },
            {
              "value": "53",
              "label": "Green"
            },
            {
              "value": "54",
              "label": "Lavender"
            },
            {
              "value": "55",
              "label": "Multi"
            },
            {
              "value": "56",
              "label": "Orange"
            },
            {
              "value": "57",
              "label": "Purple"
            },
            {
              "value": "58",
              "label": "Red"
            },
            {
              "value": "59",
              "label": "White"
            },
            {
              "value": "60",
              "label": "Yellow"
            }
          ],
          "storefront_properties": {
            "use_in_product_listing": true,
            "use_in_layered_navigation": "FILTERABLE_WITH_RESULTS",
            "use_in_search_results_layered_navigation": false,
            "visible_on_catalog_pages": false,
            "position": 0
          }
        }
      ]
    }
  }
}
```

## Errors

Error | Description
--- | ---
`Field "customAttributeMetadata" argument "attributes" of type "[AttributeInput!]!" is required but not provided` | The `attributes` array parameter is required.
`The attribute with a "xxxx" attributeCode doesn't exist. Verify the attribute and try again` | The given `attribute_code` parameter is invalid.
`Invalid entity_type specified: "xxxx"` | The given `entity_type` is invalid.
`Missing attribute_code for the input entity_type: "xxxx"`| There is no value passed for the `attribute_code` parameter for the given `entity_type` parameter.
`Missing entity_type for the input attribute_code: "xxxx"` | There is no value passed for the `entity_type` parameter for the given `attribute_code` parameter.
`Missing attribute_code/entity_type for the input Empty AttributeInput` | There are no values passed for both `attribute_code` and `entity_type` parameters.
