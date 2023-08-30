---
title: attributesForm query | Commerce Web APIs
---

import BetaNote from '/src/_includes/graphql/notes/beta.md'

<BetaNote />

# attributesForm query

The `attributesForm` query retrieves EAV attributes associated with customer and customer address frontend forms.

These forms are visible when using the Admin to create or edit a customer or customer address address (**Stores** > Attributes > **Customer** or **Customer Address**).

<InlineAlert variant="info" slots="text" />

Use the [country](../../store/queries/country.md) and [countries](../../store/queries/countries.md) mutations to retrieve information about the region_id and country_id attributes.

The following table maps the display names of the applicable forms to values that you can specify as a `formCode` value.

| Type | Display name | `formCode` value |
| --- | --- | --- |
| Customer | Customer Account Edit | `customer_account_edit` |
| Customer | Customer Registration | `customer_account_create` |
| Customer address |  Customer Address Registration |  `customer_register_address` |
| Customer address | Customer Account Address | `customer_address_edit` |
<InlineAlert slots="text" />

You cannot query on the Admin Checkout form.

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
`code` | ID! | The unique identifier for an attribute code. This value should be in lowercase letters without spaces
`default_value` | String | Default attribute value
`entity_type` | AttributeEntityTypeEnum! | The type of entity that defines the attribute
`frontend_input` | AttributeFrontendInputEnum | The frontend input type of the attribute
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
