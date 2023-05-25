---
title: customAttributeMetadataV2 query | Commerce Web APIs
---

import BetaNote from '/src/pages/_includes/graphql/notes/beta.md'

<BetaNote />

# customAttributeMetadataV2 query

The `customAttributeMetadataV2` query retrieves metadata for the specified `entity_type` and `attribute_code` pairs.

This query replaces [`attributesMetadata`](attributes-metadata.md) and [`customAttributeMetadata`](custom-attribute-metadata.md).

This new query has several features that were not available in the deprecated queries:

- All entity types can extend this query.
- The query provides access to all properties of EAV attributes.
- `uid` values are now available.

## Syntax

`{customAttributeMetadataV2(attributes: [AttributeInput!]): {AttributesMetadataOutput!}}`

## Example usage

### Retrieve EAV attribute metadata

The following call returns information about the `customer firstname` attribute metadata.

**Request:**

```graphql
{
    customAttributeMetadataV2(
        attributes: [{entity_type: "customer", attribute_code: "firstname"}]
    ) {
        items {
            uid
            code
            label
            entity_type
            frontend_input
            is_required
            default_value
            is_unique
            options {
                uid
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
          "uid": "Y3VzdG9tZXIvZmlyc3RuYW1l",
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

## Input attributes

The `AttributeInput` object contains the following attributes:

Attribute | Data Type | Description
--- |---| ---
`attribute_code` | String | The unique identifier for an attribute code. This value should be in lowercase letters without spaces
`entity_type` | String | The type of entity that defines the attribute

## Output attributes

The `AttributesMetadataOutput` object contains the following attributes:

Attribute | Data Type | Description
--- |---| ---
`items` | [CustomAttributeMetadataInterface!]! | Requested attributes metadata
`errors` | [AttributeMetadataError!]! | Errors of retrieving certain attributes metadata

The `CustomAttributeMetadataInterface` object contains the following attributes:

Attribute | Data Type | Description
--- |---| ---
`uid` | ID! | The unique ID of an attribute. Based on entity type and attribute code
`code` | String! | The unique identifier for an attribute code. This value should be in lowercase letters without spaces
`label` | String | The label assigned to the attribute
`entity_type` | AttributeEntityTypeEnum! | The type of entity that defines the attribute
`frontend_input` | AttributeFrontendInputEnum | The frontend input type of the attribute
`is_required` | Boolean! | Whether the attribute value is required
`default_value` | String | Default attribute value
`is_unique` | Boolean! | Whether the attribute value must be unique
`options` | [CustomAttributeOptionInterface!]! | Attribute options

The `CustomAttributeOptionInterface` object contains the following attributes:

Attribute | Data Type | Description
--- |---| ---
`uid` | ID! | The unique ID of an attribute option
`label` | String! | The label assigned to the attribute option
`value` | String! | The attribute option value
`is_default` | Boolean | Is the option value default

The `AttributeMetadataError` object contains the following attributes:

Attribute | Data Type | Description
--- | --- | ---
`type` | AttributeMetadataErrorType! | Attribute metadata retrieval error type
`message` | String! | Attribute metadata retrieval error message
