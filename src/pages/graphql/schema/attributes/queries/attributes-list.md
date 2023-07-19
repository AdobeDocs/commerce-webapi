---
title: attributesList query | Commerce Web APIs
---

import BetaNote from '/src/pages/_includes/graphql/notes/beta.md'

<BetaNote />

# attributesList query

The `attributesList` query retrieves a list of attributes metadata for a given `entity_type`.

The possible values for this attribute are populated by the modules introducing EAV entities, which currently are `CUSTOMER`, `CUSTOMER_ADDRESS`, `CATALOG_PRODUCT` and `RMA_ITEM`.

## Syntax

`{attributesList(entityType: AttributeEntityTypeEnum!): {AttributesMetadataOutput}}`

## Example usage

### Attributes list for `customer`

The following call returns the list of attributes metadata for a `customer`.

**Request:**

```graphql
{
  attributesList(entityType: CUSTOMER) {
    items {
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
          "code": "website_id",
          "label": "Associate to Website"
        },
        {
          "code": "created_in",
          "label": "Created From"
        },
        {
          "code": "firstname",
          "label": "First Name"
        },
        {
          "code": "lastname",
          "label": "Last Name"
        },
        {
          "code": "email",
          "label": "Email"
        },
        {
          "code": "group_id",
          "label": "Group"
        },
        {
          "code": "disable_auto_group_change",
          "label": "Disable Automatic Group Change Based on VAT ID"
        }
      ],
      "errors": []
    }
  }
}
```

### Attributes list for `rma_item`

The following call returns the list of attributes metadata for a `rma_item`.

**Request:**

```graphql
{
  attributesList(entityType: RMA_ITEM) {
    items {
      code
      label
      default_value
      frontend_input
      is_unique
      is_required
      options {
        is_default
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
    "attributesList": {
      "items": [
        {
          "code": "resolution",
          "label": "Resolution",
          "default_value": null,
          "frontend_input": "SELECT",
          "is_unique": false,
          "is_required": true,
          "options": [
            {
              "is_default": null,
              "label": "Exchange",
              "value": "4"
            },
            {
              "is_default": null,
              "label": "Refund",
              "value": "5"
            },
            {
              "is_default": null,
              "label": "Store Credit",
              "value": "6"
            }
          ]
        },
        {
          "code": "condition",
          "label": "Item Condition",
          "default_value": null,
          "frontend_input": "SELECT",
          "is_unique": false,
          "is_required": true,
          "options": [
            {
              "is_default": null,
              "label": "Unopened",
              "value": "7"
            },
            {
              "is_default": null,
              "label": "Opened",
              "value": "8"
            },
            {
              "is_default": null,
              "label": "Damaged",
              "value": "9"
            }
          ]
        },
        {
          "code": "reason",
          "label": "Reason to Return",
          "default_value": null,
          "frontend_input": "SELECT",
          "is_unique": false,
          "is_required": true,
          "options": [
            {
              "is_default": null,
              "label": "Wrong Color",
              "value": "10"
            },
            {
              "is_default": null,
              "label": "Wrong Size",
              "value": "11"
            },
            {
              "is_default": null,
              "label": "Out of Service",
              "value": "12"
            }
          ]
        },
        {
          "code": "reason_other",
          "label": "Other",
          "default_value": null,
          "frontend_input": "TEXT",
          "is_unique": false,
          "is_required": true,
          "options": []
        }
      ],
      "errors": []
    }
  }
}
```

### Apply a filter to the attributes list query

The following call returns the list of attributes metadata for a `catalog_product` filtered by `is_visible_on_front` and `is_comparable`.

**Request:**

```graphql
{
    attributesList(entityType: CATALOG_PRODUCT, filters: {is_visible_on_front:true, is_comparable: true}) {
        items {
            uid
            code
            label
            default_value
            is_required
            frontend_class
            is_unique
            options {
                value
                label
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
    "attributesList": {
      "items": [
        {
          "uid": "Y2F0YWxvZ19wcm9kdWN0L2FjdGl2aXR5",
          "code": "activity",
          "label": "Activity",
          "default_value": "",
          "is_required": false,
          "frontend_class": null,
          "is_unique": false,
          "options": [
            {
              "value": "13",
              "label": "Hike"
            },
            {
              "value": "14",
              "label": "Outdoor"
            },
            {
              "value": "15",
              "label": "Running"
            },
            {
              "value": "16",
              "label": "Warmup"
            },
            {
              "value": "17",
              "label": "Yoga"
            },
            {
              "value": "18",
              "label": "Recreation"
            },
            {
              "value": "19",
              "label": "Lounge"
            },
            {
              "value": "20",
              "label": "Gym"
            },
            {
              "value": "21",
              "label": "Climbing"
            },
            {
              "value": "22",
              "label": "Crosstraining"
            },
            {
              "value": "23",
              "label": "Post-workout"
            },
            {
              "value": "24",
              "label": "Cycling"
            },
            {
              "value": "25",
              "label": "Athletic"
            },
            {
              "value": "26",
              "label": "Sports"
            },
            {
              "value": "27",
              "label": "Hiking"
            },
            {
              "value": "28",
              "label": "Overnight"
            },
            {
              "value": "29",
              "label": "School"
            },
            {
              "value": "30",
              "label": "Trail"
            },
            {
              "value": "31",
              "label": "Travel"
            },
            {
              "value": "32",
              "label": "Urban"
            }
          ]
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
`entityType` | String | The type of entity that defines the attribute
`filters` | AttributeFilterInput | Identifies which filter inputs to search for and return

## Attribute Filter Input

The `AttributeFilterInput` object specifies the filters used for attributes. It contains the following attributes:

Attribute | Data Type | Description
--- |---| ---
`is_filterable_in_search` | Boolean | Whether a product or category attribute can be filtered in search or not
`used_in_product_listing` | Boolean | Whether a product or category attribute is used in product listing or not
`is_comparable` | Boolean | Whether a product or category attribute can be compared against another or not
`is_searchable` | Boolean | Whether a product or category attribute can be searched or not
`is_filterable` | Boolean | Whether a product or category attribute can be filtered or not
`is_html_allowed_on_front` | Boolean | Whether a product or category attribute can use HTML on front or not
`is_used_for_price_rules` | Boolean | Whether a product or category attribute can be used for price rules or not
`is_wysiwyg_enabled` | Boolean | Whether a product or category attribute has WYSIWYG enabled or not
`is_used_for_promo_rules` | Boolean | Whether a product or category attribute is used for promo rules or not
`is_visible_in_advanced_search` | Boolean | Whether a product or category attribute is visible in advanced search or not
`is_visible_on_front` | Boolean | Whether a product or category attribute is visible on front or not

## Output attributes

The `AttributesMetadataOutput` object contains the following attributes:

Attribute | Data Type | Description
--- |---| ---
`items` | [CustomAttributeMetadataInterface!]! | Requested attributes metadata
`errors` | [AttributeMetadataError!]! | Errors of retrieving certain attributes metadata

The `CustomAttributeMetadataInterface` object contains the following attributes:

Attribute | Data Type | Description
--- |---| ---
`code` | ID! | The unique identifier for an attribute code. This value should be in lowercase letters without spaces
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
`label` | String! | The label assigned to the attribute option
`value` | String! | The attribute option value
`is_default` | Boolean | Is the option value default

The `AttributeMetadataError` object contains the following attributes:

Attribute | Data Type | Description
--- | --- | ---
`type` | AttributeMetadataErrorType! | Attribute metadata retrieval error type
`message` | String! | Attribute metadata retrieval error message
