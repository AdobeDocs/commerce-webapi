---
title: attributesForm query | Commerce Web APIs
---

# attributesForm query

The `attributesForm` query retrieves EAV attributes associated to `customer` and `customer_address` frontend forms.

These are the ones available in the "Forms to Use In" configuration setting, when creating or editing a custom attribute through the Admin site.
With the only exception of the `admin forms` which is not possible to query on.

You can easily find them checking the following pages `Stores` > `Attributes` > `Customer` and `Customer Address` when adding or editing an attibute.

## Syntax

`{attributesForm(formCode: String!): {AttributesFormOutput!}}`

## Example usage

The following query returns the list of attributes metadata associated to the form `customer_register_address`.

**Request:**

```graphql
{
  attributesForm(formCode: "customer_register_address") {
    items {
      label
      entity_type
      frontend_input
      is_required
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
    "attributesForm": {
      "items": [
        {
          "label": "First Name",
          "entity_type": "CUSTOMER_ADDRESS",
          "frontend_input": "TEXT",
          "is_required": true
        },
        {
          "label": "Last Name",
          "entity_type": "CUSTOMER_ADDRESS",
          "frontend_input": "TEXT",
          "is_required": true
        },
        {
          "label": "Company",
          "entity_type": "CUSTOMER_ADDRESS",
          "frontend_input": "TEXT",
          "is_required": false
        },
        {
          "label": "Street Address",
          "entity_type": "CUSTOMER_ADDRESS",
          "frontend_input": "MULTILINE",
          "is_required": true
        },
        {
          "label": "City",
          "entity_type": "CUSTOMER_ADDRESS",
          "frontend_input": "TEXT",
          "is_required": true
        },
        {
          "label": "Country",
          "entity_type": "CUSTOMER_ADDRESS",
          "frontend_input": "SELECT",
          "is_required": true
        },
        {
          "label": "State/Province",
          "entity_type": "CUSTOMER_ADDRESS",
          "frontend_input": "TEXT",
          "is_required": false
        },
        {
          "label": "State/Province",
          "entity_type": "CUSTOMER_ADDRESS",
          "frontend_input": "HIDDEN",
          "is_required": false
        },
        {
          "label": "Zip/Postal Code",
          "entity_type": "CUSTOMER_ADDRESS",
          "frontend_input": "TEXT",
          "is_required": false
        },
        {
          "label": "Phone Number",
          "entity_type": "CUSTOMER_ADDRESS",
          "frontend_input": "TEXT",
          "is_required": true
        },
        {
          "label": "VAT Number",
          "entity_type": "CUSTOMER_ADDRESS",
          "frontend_input": "TEXT",
          "is_required": false
        }
      ],
      "errors": [
        {
          "type": "ATTRIBUTE_NOT_FOUND",
          "message": "Attribute code \"middlename\" could not be found."
        }
      ]
    }
  }
}
```

## Input attributes

Attribute | Data Type | Description
--- |-----------| ---
`formCode` | String!   | Form code

## Output attributes

The `AttributesFormOutput` object contains the following attributes:

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
