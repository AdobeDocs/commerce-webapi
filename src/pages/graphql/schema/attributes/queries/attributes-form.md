---
title: attributesForm query
---

import BetaNote from '/src/_includes/graphql/notes/beta.md'

<BetaNote />

# attributesForm query

The `attributesForm` query retrieves EAV attributes associated with customer and customer address frontend forms.

These forms are visible when using the Admin to create or edit a customer or customer address (**Stores** > Attributes > **Customer** or **Customer Address**).

<InlineAlert variant="info" slots="text" />

Use the [country](../../store/queries/country.md) and [countries](../../store/queries/countries.md) mutations to retrieve information about the `region_id` and `country_id` attribute options.

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

## Reference

The [`attributesForm`](https://developer.adobe.com/commerce/webapi/graphql-api/beta/index.html#query-attributesForm) reference provides detailed information about the types and fields defined in this query.

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
