---
title: attributesList query | Commerce Web APIs
---

# attributesList query

The `attributesList` query retrieves a list of attributes metadata for a given `entity_type`.

The possible values for this attribute are populated by the modules introducing EAV entities, which currently are `CUSTOMER`, `CUSTOMER_ADDRESS` and `CATALOG_PRODUCT`.

## Syntax

`{attributesList(entityType: AttributeEntityTypeEnum!): {AttributesMetadataOutput}}`

## Example usage

The following call returns the list of attributes metadata for a `customer`.

**Request:**

```graphql
{
  attributesList(entityType: CUSTOMER) {
    items {
      uid
      code
      label
      # other attribute metadata
    }
    errors {
      message
    }
  }
} 

```

**Response:**

```json
{
  "data": {
    "attributesList": {
      "items": [
        {
          "uid": "Y3VzdG9tZXIvd2Vic2l0ZV9pZA==",
          "code": "website_id",
          "label": "Associate to Website"
        },
        {
          "uid": "Y3VzdG9tZXIvY3JlYXRlZF9pbg==",
          "code": "created_in",
          "label": "Created From"
        },
        {
          "uid": "Y3VzdG9tZXIvZmlyc3RuYW1l",
          "code": "firstname",
          "label": "First Name"
        },
        {
          "uid": "Y3VzdG9tZXIvbGFzdG5hbWU=",
          "code": "lastname",
          "label": "Last Name"
        },
        {
          "uid": "Y3VzdG9tZXIvZW1haWw=",
          "code": "email",
          "label": "Email"
        },
        {
          "uid": "Y3VzdG9tZXIvZ3JvdXBfaWQ=",
          "code": "group_id",
          "label": "Group"
        },
        {
          "uid": "Y3VzdG9tZXIvZGlzYWJsZV9hdXRvX2dyb3VwX2NoYW5nZQ==",
          "code": "disable_auto_group_change",
          "label": "Disable Automatic Group Change Based on VAT ID"
        }
      ],
      "errors": []
    }
  }
}
```

## Input attributes

The `AttributeEntityTypeEnum` object contains the following attributes:

Attribute | Data Type | Description
--- |---| ---
`entityType` | String | The type of entity that defines the attribute.

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
