---
title: attributeMetadata query
description: Describes how to construct and use the Live Search attributeMetadata query.
keywords:
  - GraphQL
  - Services
  - Search
---

# attributeMetadata query

The `attributeMetadata` query returns a list of product attribute codes that can be used for sorting or filtering in a [`productSearch` query](product-search.md). The query response can include the attribute name, display label, and a Boolean value that indicates if the attribute has a numeric value that can be used for numeric operations, such as range filters or sorting.

## Syntax

`attributeMetadata: AttributeMetadataResponse!`

## Endpoints

<Edition slots="text" backgroundcolor="blue"/>

[PaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions)

| Environment | Endpoint    |
|------------ | ----------: |
| **Testing**    | `https://catalog-service-sandbox.adobe.io/graphql` |
| **Production** | `https://catalog-service.adobe.io/graphql` |

<Edition slots="text" backgroundcolor="green"/>

[SaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions)

|  Environment | Endpoint |
| ------------ | --------:|
| Testing | `https://{{region}}-{{environment}}.api.commerce.adobe.com/{{tenant-id}}/graphql` |
| Production | `https://{{region}}.api.commerce.adobe.com/{{tenant-id}}/graphql` |

**URL structure for SaaS endpoints:**

- `region` is the cloud region where your instance is deployed.
- `environment` is the environment type, such as `sandbox`. If the environment is production, this value is omitted.
- `tenantId` is the unique identifier for your organization's specific instance within the Adobe Experience Cloud.

## Required headers

You must specify the following HTTP headers to run this query.

| Header name| Description |
| --- | --- |
| `Magento-Environment-Id` | This value is displayed at **Stores** > **Configuration** > **Services** > **Magento Services** > **SaaS Environment** or can be obtained by running the `bin/magento config:show services_connector/services_id/environment_id` command. |
| `Magento-Store-Code` | The code assigned to the store associated with the active store view. For example, `main_website_store`. |
| `Magento-Store-View-Code` | The code assigned to the active store view. For example, `default`. |
| `Magento-Website-Code` | The code assigned to the website associated with the active store view. For example, `base`. |

<Edition slots="text" backgroundcolor="blue"/>

[PaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions)

`X-Api-Key` | Set this value to the [unique API key](https://experienceleague.adobe.com/en/docs/commerce-merchant-services/user-guides/integration-services/saas#genapikey) generated for your Commerce environment.

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

| Field | Data Type | Description |
| --- | --- | --- |
| `filterableInSearch` | [FilterableInSearchAttribute](#filterableinsearchattribute-data-type) | An array of product attributes that can be used for filtering in a `productSearch` query |
| `sortable` | [SortableAttribute](#sortableattribute-data-type) | An array of product attributes that can be used for sorting in a `productSearch` query |

### FilterableInSearchAttribute data type

The `FilterableInSearchAttribute` data type can contain the following fields:

| Field | Data Type | Description |
| --- | --- | --- |
| `attribute` | String! | The unique identifier for an attribute code. This value should be in lowercase letters and without spaces |
| `label` | String | The display name assigned to the attribute |
| `numeric` | Boolean | Indicates whether this attribute has a numeric value, such as a price or integer that can be used for numeric operations, such as range filters or sorting. |

### SortableAttribute data type

The `SortableAttribute` data type can contain the following fields:

| Field | Data Type | Description |
| --- | --- | --- |
| `attribute` | String! | The unique identifier for an attribute code. This value should be in lowercase letters and without spaces |
| `label` | String | The display name assigned to the attribute |
| `numeric` | Boolean | Indicates whether this attribute has a numeric value, such as a price or integer that can be used for numeric operations, such as range filters or sorting. |
