---
title: customAttributeMetadataV2 query
---

# customAttributeMetadataV2 query

The `customAttributeMetadataV2` query retrieves metadata for the specified `entity_type` and `attribute_code` pairs.

This query replaces [`attributesMetadata`](attributes-metadata.md) and [`customAttributeMetadata`](custom-attribute-metadata.md).

This new query has several features that were not available in the deprecated queries:

- All entity types can extend this query.
- The query provides access to all properties of EAV attributes.

## Syntax

`{customAttributeMetadataV2(attributes: [AttributeInput!]): {AttributesMetadataOutput!}}`

## Reference

The [`customAttributeMetadataV2`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-customAttributeMetadataV2) reference provides detailed information about the types and fields defined in this query.

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
