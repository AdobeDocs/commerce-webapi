---
title: attributesMetadata query
description: The attributesMetadata query is available only if you have installed the PWA Metapackage for Magento Open Source Extensions. The query has been deprecated....

---

<Edition slots="text" backgroundcolor="blue"/>

[PaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions)

# attributesMetadata query

<InlineAlert variant="warning" slots="text" />

The `attributesMetadata` query is available only if you have installed the PWA Metapackage for Magento Open Source Extensions. The query has been deprecated. Use the [`customAttributeMetadataV2`](custom-attribute-metadata-v2.md) query instead.

The `attributesMetadata` query returns everything available in [`customAttributeMetadata`](custom-attribute-metadata.md) but also includes additional information such as `data_type`, `sort_order`, and `ui_input` data, that can be used for filtering, searching and layered navigation. The information returned in `customAttributeMetadata` is in a different format when returned in `attributesMetadata`.

## Syntax

```graphql
{ attributesMetadata(
      entityType: AttributeEntityTypeEnum!,
      attributeUids:[ID!],
      showSystemAttributes: Boolean):
        AttributesMetadata
}
```

## Example usage

**Request:**

```graphql
{
attributesMetadata(
    entityType: PRODUCT
  ) {
    items {
      attribute_labels {
        label
        store_code
      }
      code
      data_type
      sort_order
      ui_input {
          is_html_allowed
          ui_input_type
        __typename
        ... on SelectableInputTypeInterface {
          attribute_options {
            is_default
            label
            uid
          }
        }
      }
      uid
      __typename
    }
  }
}
```

**Response:**

```json
{"uid": "Y2F0YWxvZ19wcm9kdWN0L2Zhc2hpb25fY29sb3I=",
          "__typename": "ProductAttributeMetadata"
        },
        {
          "attribute_labels": [
            {
              "label": "Fashion Material",
              "store_code": "default"
            }
          ],
          "code": "fashion_material",
          "data_type": "STRING",
          "sort_order": 0,
          "ui_input": {
            "is_html_allowed": true,
            "ui_input_type": "MULTISELECT",
            "__typename": "UiAttributeTypeMultiSelect",
            "attribute_options": [
              {
                "is_default": false,
                "label": "14K Gold",
                "uid": "Y2F0YWxvZ19wcm9kdWN0L2Zhc2hpb25fbWF0ZXJpYWwvNDY="
              },
              {
                "is_default": false,
                "label": "Acrylic",
                "uid": "Y2F0YWxvZ19wcm9kdWN0L2Zhc2hpb25fbWF0ZXJpYWwvMTE4"
              },
              {
                "is_default": false,
                "label": "Cashmere",
                "uid": "Y2F0YWxvZ19wcm9kdWN0L2Zhc2hpb25fbWF0ZXJpYWwvMTIx"
              },
              {
                "is_default": false,
                "label": "Sterling Silver",
                "uid": "Y2F0YWxvZ19wcm9kdWN0L2Zhc2hpb25fbWF0ZXJpYWwvNDk="
              }
            ]
          }
        }
```

## Input attributes

Attribute | Data type | Description
--- | --- | ---
`attributeUids` | [ID!] | An array of attribute IDs to search
`entityType` | AttributeEntityTypeEnum! | The type of entity to search
`showSystemAttributes` | Boolean | Indicates whether to also return matching system attributes

## Output attributes

The `AttributeMetadataInterface` object contains the following attributes:

Attribute | Type | Description
--- | --- | ---
`attribute_labels` | [`StoreLabels`] | An array of attribute labels defined for the current store
`code` | String | The unique identifier for an attribute code. This value should be lowercase, without spaces
`data_type` | ObjectDataTypeEnum | The data type of the attribute
`entity_type` | AttributeEntityTypeEnum | The type of entity that defines the attribute
`is_system` | Boolean | Indicates whether the attribute is a system attribute
`label` | String | The label assigned to the attribute
`sort_order` | Int | The relative position of the attribute
`uid` | ID | The unique ID of an attribute
`ui_input` | UiInputTypeInterface | Frontend UI properties of the attribute

