---
title: attributeMetadata query | Commerce Web APIs
edition: ee
description: Describes how to construct and use the Live Search attributeMetadata query.
---

# attributeMetadata query

The `attributeMetadata` query returns a list of product attribute codes that can be used for sorting or filtering in a [`productSearch` query](./product-search.md). The query response can include the attribute name, display label, and a Boolean value that indicates if the attribute has a numeric value.

## Syntax

`attributeMetadata: AttributeMetadataResponse!`

## Required headers

You must specify the following HTTP headers to run this query.

import Docs from '/src/pages/_includes/graphql/live-search-headers.md'

<Docs />

## Example usage

The following query returns details about all product attributes that can be used to define the sorting order or as a filter in a `productSearch` query.

**Request:**

```graphql
{
  attributeMetadata{
    sortable {
      attribute
      label
      numeric
    }
    filterableInSearch  {
      attribute
      label
      numeric
    }
  }
}
```

**Response:**

```json
{
  "extensions": {
    "request-id": "5Kd6pzYc02PlHIbbmNDTff3VaXF0EnYf"
  },
  "data": {
    "attributeMetadata": {
      "sortable": [
        {
          "attribute": "name",
          "label": "Product Name",
          "numeric": false
        },
        {
          "attribute": "price",
          "label": "Price",
          "numeric": true
        },
        {
          "attribute": "position",
          "label": "position",
          "numeric": true
        }
      ],
      "filterableInSearch": [
        {
          "attribute": "categoryIds",
          "label": "categoryIds",
          "numeric": false
        },
        {
          "attribute": "collar",
          "label": "Collar",
          "numeric": false
        },
        {
          "attribute": "visibility",
          "label": "visibility",
          "numeric": false
        },
        {
          "attribute": "activity",
          "label": "Activity",
          "numeric": false
        },
        {
          "attribute": "gender",
          "label": "Gender",
          "numeric": false
        },
        {
          "attribute": "size",
          "label": "Size",
          "numeric": false
        },
        {
          "attribute": "price",
          "label": "price",
          "numeric": true
        },
        {
          "attribute": "sleeve",
          "label": "Sleeve",
          "numeric": false
        },
        {
          "attribute": "eco_collection",
          "label": "Eco Collection",
          "numeric": false
        },
        {
          "attribute": "categories",
          "label": "categories",
          "numeric": false
        },
        {
          "attribute": "climate",
          "label": "Climate",
          "numeric": false
        },
        {
          "attribute": "sku",
          "label": "sku",
          "numeric": false
        }
      ]
    }
  }
}
```

## Output fields

The `AttributeMetadataResponse` return object can contain the following fields:

Field | Data Type | Description
--- | --- | ---
`filterableInSearch` | [FilterableInSearchAttribute](#FilterableInSearchAttribute) | An array of product attributes that can be used for filtering in a `productSearch` query
`sortable` | [SortableAttribute](#SortableAttribute) | An array of product attributes that can be used for sorting in a `productSearch` query

### FilterableInSearchAttribute data type {#FilterableInSearchAttribute}

The `FilterableInSearchAttribute` data type can contain the following fields:

Field | Data Type | Description
--- | --- | ---
`attribute` | String! | The unique identifier for an attribute code. This value should be in lowercase letters and without spaces
`label` | String | The display name assigned to the attribute
`numeric` | Boolean | Indicates whether this attribute has a numeric value, such as a price or integer

### SortableAttribute data type {#SortableAttribute}

The `SortableAttribute` data type can contain the following fields:

Field | Data Type | Description
--- | --- | ---
`attribute` | String! | The unique identifier for an attribute code. This value should be in lowercase letters and without spaces
`label` | String | The display name assigned to the attribute
`numeric` | Boolean | Indicates whether this attribute has a numeric value, such as a price or integer
