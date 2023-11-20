---
title: attributesList query
---

import BetaNote from '/src/_includes/graphql/notes/beta.md'

<BetaNote />

# attributesList query

The `attributesList` query retrieves a list of attributes metadata for a given `entity_type`.

The possible values for this attribute are populated by the modules introducing EAV entities, which currently are `CUSTOMER`, `CUSTOMER_ADDRESS`, `CATALOG_PRODUCT` and `RMA_ITEM`.

## Syntax

`{attributesList(entityType: AttributeEntityTypeEnum!): {AttributesMetadataOutput}}`

## Reference

The [`attributesList`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-attributesList) reference provides detailed information about the types and fields defined in this query.

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
