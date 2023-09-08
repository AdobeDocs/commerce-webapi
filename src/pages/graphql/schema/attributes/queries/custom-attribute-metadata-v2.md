---
title: customAttributeMetadataV2 query
---

import BetaNote from '/src/_includes/graphql/notes/beta.md'

<BetaNote />

# customAttributeMetadataV2 query

The `customAttributeMetadataV2` query retrieves metadata for the specified `entity_type` and `attribute_code` pairs.

This query replaces [`attributesMetadata`](attributes-metadata.md) and [`customAttributeMetadata`](custom-attribute-metadata.md).

This new query has several features that were not available in the deprecated queries:

- All entity types can extend this query.
- The query provides access to all properties of EAV attributes.

## Syntax

`{customAttributeMetadataV2(attributes: [AttributeInput!]): {AttributesMetadataOutput!}}`

## Example usage

### Custom attribute metadata for a `customer` attribute

The following call returns metadata information for the `firstname` attribute of a `customer`.

**Request:**

```graphql
{
    customAttributeMetadataV2(attributes: [{attribute_code: "firstname", entity_type: "customer"}]) {
        items {
            code
            label
            entity_type
            frontend_input
            is_required
            default_value
            is_unique
            options {
                label
                value
            }
        }
        errors {
            type
            message
        }
    }
}
```

**Response:**

```json
{
  "data": {
    "customAttributeMetadataV2": {
      "items": [
        {
          "code": "firstname",
          "label": "First Name",
          "entity_type": "CUSTOMER",
          "frontend_input": "TEXT",
          "is_required": true,
          "default_value": null,
          "is_unique": false,
          "options": []
        }
      ],
      "errors": []
    }
  }
}
```

### Custom attribute metadata for a `rma_item` attribute

The following call returns metadata information for the `resolution` attribute of a `rma_item`.

**Request:**

```graphql
{
  customAttributeMetadataV2(attributes: [{attribute_code: "resolution", entity_type: "rma_item"}]) {
    items {
      code
      default_value
      label
      entity_type
      frontend_input
      is_required
      is_unique
      options {
        label
        value
      }
      ... on ReturnItemAttributeMetadata {
        input_filter
        validate_rules {
          name
          value
        }
      }
    }
    errors {
      type
      message
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "customAttributeMetadataV2": {
      "items": [
        {
          "code": "resolution",
          "default_value": null,
          "label": "Resolution",
          "entity_type": "RMA_ITEM",
          "frontend_input": "SELECT",
          "is_required": true,
          "is_unique": false,
          "options": [
            {
              "label": "Exchange",
              "value": "4"
            },
            {
              "label": "Refund",
              "value": "5"
            },
            {
              "label": "Store Credit",
              "value": "6"
            }
          ],
          "input_filter": "NONE",
          "validate_rules": []
        }
      ],
      "errors": []
    }
  }
}
```

### Custom attribute metadata for `product`

The following call returns metadata information for the `visibility` attribute of a `catalog_product`.

**Request:**

```graphql
{
    customAttributeMetadataV2(attributes: [{attribute_code: "visibility", entity_type: "catalog_product"}]) {
        items {
            code
            label
            entity_type
            frontend_input
            ...on CatalogAttributeMetadata {
                is_filterable
                is_html_allowed_on_front
                is_wysiwyg_enabled
                is_used_for_promo_rules
                used_in_product_listing
            }
        }
        errors {
            type
            message
        }
    }
}
```

**Response:**

```json
{
  "data": {
    "customAttributeMetadataV2": {
      "items": [
        {
          "code": "visibility",
          "label": "Visibility",
          "entity_type": "CATALOG_PRODUCT",
          "frontend_input": "SELECT",
          "is_filterable": false,
          "is_html_allowed_on_front": false,
          "is_wysiwyg_enabled": false,
          "is_used_for_promo_rules": false,
          "used_in_product_listing": false
        }
      ],
      "errors": []
    }
  }
}
```

### Custom attribute metadata for `product` with `swatch options`

The following call returns metadata information for the `color` attribute of a `catalog_product`.

The `swatch options` are the possible values of the attribute.

**Request:**

```graphql
{
    customAttributeMetadataV2(attributes: [{attribute_code: "color", entity_type: "catalog_product"}]) {
        items {
            code
            label
            entity_type
            frontend_input
            ...on CatalogAttributeMetadata {
                update_product_preview_image
                use_product_image_for_swatch
                swatch_input_type
            }
        }
        errors {
            type
            message
        }
    }
}
```

**Response:**

```json
{
  "data": {
    "customAttributeMetadataV2": {
      "items": [
        {
          "code": "color",
          "label": "Color",
          "entity_type": "CATALOG_PRODUCT",
          "frontend_input": "SELECT",
          "update_product_preview_image": true,
          "use_product_image_for_swatch": false,
          "swatch_input_type": "VISUAL"
        }
      ],
      "errors": []
    }
  }
}
```

## Input attributes

The `AttributeInput` object contains the following attributes:

Attribute | Data Type | Description
--- |---| ---
`attribute_code` | String | The unique identifier for an attribute. This value should be in lowercase letters without spaces
`entity_type` | String | The type of entity that defines the attribute

## Output attributes

The `AttributesMetadataOutput` object contains the following attributes:

Attribute | Data Type | Description
--- |---| ---
`errors` | [AttributeMetadataError!]! | Errors of retrieving certain attributes metadata
`items` | [CustomAttributeMetadataInterface!]! | Requested attributes metadata

The `CustomAttributeMetadataInterface` object contains the following attributes:

Attribute | Data Type | Description
--- |---| ---
`code` | ID! | The unique identifier for an attribute. This value should be in lowercase letters without spaces
`default_value` | String | Default attribute value
`entity_type` | AttributeEntityTypeEnum! | The type of entity that defines the attribute. Possible values are CATALOG_CATEGORY and CATALOG_PRODUCT
`frontend_input` | AttributeFrontendInputEnum | The frontend input type of the attribute. Possible values are BOOLEAN, DATE, DATETIME, FILE, GALLERY, HIDDEN, IMAGE, MEDIA_IMAGE, MULTILINE, MULTISELECT, PRICE, SELECT, TEXT, TEXTAREA, WEIGHT and UNDEFINED
`is_comparable` | Boolean | Whether a product or category attribute can be compared against another or not
`is_filterable` | Boolean | Whether a product or category attribute can be filtered or not
`is_filterable_in_search` | Boolean | Whether a product or category attribute can be filtered in search or not
`is_html_allowed_on_front` | Boolean | Whether a product or category attribute can use HTML on front or not
`is_required` | Boolean! | Whether the attribute value is required
`is_searchable` | Boolean | Whether a product or category attribute can be searched or not
`is_unique` | Boolean! | Whether the attribute value must be unique
`is_used_for_price_rules` | Boolean | Whether a product or category attribute can be used for price rules or not
`is_used_for_promo_rules` | Boolean | Whether a product or category attribute is used for promo rules or not
`is_visible_in_advanced_search` | Boolean | Whether a product or category attribute is visible in advanced search or not
`is_visible_on_front` | Boolean | Whether a product or category attribute is visible on front or not
`is_wysiwyg_enabled` | Boolean | Whether a product or category attribute has WYSIWYG enabled or not
`label` | String | The label assigned to the attribute
`options` | [CustomAttributeOptionInterface!]! | Attribute options
`used_in_product_listing` | Boolean | Whether a product or category attribute is used in product listing or not

The `CustomAttributeOptionInterface` object contains the following attributes:

Attribute | Data Type | Description
--- |---| ---
`is_default` | Boolean | Is the option value default
`label` | String! | The label assigned to the attribute option
`value` | String! | The attribute option value

The `AttributeMetadataError` object contains the following attributes:

Attribute | Data Type | Description
--- | --- | ---
`message` | String! | Attribute metadata retrieval error message
`type` | AttributeMetadataErrorType! | Attribute metadata retrieval error type

The `CatalogAttributeMetadata` is an implementation of the `CustomAttributeMetadataInterface`. This object contains the following attributes:

Attribute | Data Type | Description
--- |---| ---
`apply_to` | [CatalogAttributeApplyToEnum] | To which catalog types an attribute can be applied. Possible values are SIMPLE, VIRTUAL, BUNDLE, DOWNLOADABLE, CONFIGURABLE, GROUPED and CATEGORY
`is_comparable` | Boolean! | Whether a product or category attribute can be compared against another or not
`is_filterable` | Boolean! | Whether a product or category attribute can be filtered or not
`is_filterable_in_search` | Boolean! | Whether a product or category attribute can be filtered in search or not
`is_html_allowed_on_front` | Boolean! | Whether a product or category attribute can use HTML on front or not
`is_used_for_price_rules` | Boolean! | Whether a product or category attribute can be used for price rules or not
`is_searchable` | Boolean! | Whether a product or category attribute can be searched or not
`is_used_for_promo_rules` | Boolean! | Whether a product or category attribute is used for promo rules or not
`is_wysiwyg_enabled` | Boolean! | Whether a product or category attribute has WYSIWYG enabled or not
`used_in_product_listing` | Boolean! | Whether a product or category attribute is used in product listing or not

Additionally, if the attribute manages `swatch options` (values of the attribute), this object will contain the following attributes:

Attribute | Data Type | Description
--- |---| ---
`swatch_input_type` | SwatchInputTypeEnum | Input type of the swatch attribute option. Possible values are BOOLEAN, DATE, DATETIME, DROPDOWN, FILE, GALLERY, HIDDEN, IMAGE, MEDIA_IMAGE, MULTILINE, MULTISELECT, PRICE, SELECT, TEXT, TEXTAREA, UNDEFINED, VISUAL and WEIGHT
`update_product_preview_image` | Boolean | Whether update product preview image or not
`use_product_image_for_swatch` | Boolean | Whether use product image for swatch or not
