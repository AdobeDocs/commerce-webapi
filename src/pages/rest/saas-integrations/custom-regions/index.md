---
title: Custom Regions
description: Learn how to use the country regions REST endpoints to create, list, update, and delete custom states or provinces for countries without default region data.
keywords:
  - REST
  - Integration
---

<Fragment src="../../../includes/saas-only.md"/>

# Custom regions

The custom regions REST endpoints let's you manage a country's regions, such as states or provinces, for countries that are not covered by the default region data. Use this API to add the regions a country needs, so customers can select a region from a list.

Each custom region receives a `region_id`, so you can use it in customer addresses, checkout, shipping, and tax rules.

These endpoints are designed for:

*  Administrators who sell in countries that are missing state or province data
*  Third-party integrations that load region lists from external systems, such as ERP and address-validation services
*  Automated workflows that create every region for a country in a single request

## Authentication

All endpoints require an admin or integration [bearer token](../../authentication/index.md). The token must belong to a role that includes the **Manage Country Regions** (`Magento_DirectoryRegionRestApi::country_region`) permission.

## System and custom regions

The `system` field in each response indicates if this is a system region or a custom region.

| Region type | `system` value | Description |
|---|---|---|
| System | `true` | Default regions that ship with Adobe Commerce. You cannot update or delete them. |
| Custom | `false` | Regions that you can manage with this API. |

The following rules apply to all regions:

*  Region codes must be unique (case-insensitive) within each country.
*  Regions are global. They are not scoped to a website or store view.
*  When the store locale matches an entry in `locale_names`, Commerce displays that name. Otherwise, it displays `default_name`.

## REST API reference

The API exposes the following operations, which are all secured by the `Magento_DirectoryRegionRestApi::country_region` permission resource:

| Method | URL | Description |
|--------|-----|-------------|
| GET | `/V1/directory/countries/:countryId/regions` | List and search the regions for a country |
| POST | `/V1/directory/countries/:countryId/regions` | Create regions for a country |
| PUT | `/V1/directory/countries/:countryId/regions/:regionId` | Update a custom region |
| DELETE | `/V1/directory/countries/:countryId/regions/:regionId` | Delete a custom region |

### Path parameters

| Parameter | Type | Description |
|---|---|---|
| `countryId` | string | The two-letter [ISO 3166-1](https://www.iso.org/iso-3166-country-codes.html) alpha-2 country code, such as `DO` for the Dominican Republic. |
| `regionId` | integer | The ID of the region to update or delete. The region must belong to the country in `countryId`. |

### Field reference

The create and update endpoints accept the following fields for each region.

| Field | Type | Required | Description |
|---|---|---|---|
| `code` | string | Yes | The region code. Maximum 32 characters. Must be unique within the country. |
| `default_name` | string | Yes | The region name that displays when no locale-specific name applies. Maximum 255 characters. |
| `locale_names` | array | No | Locale-specific names for the region. Each object contains a `locale`, such as `en_US`, and a `name`. |

<InlineAlert variant="info" slots="text"/>

Do not include `region_id`, `country_id`, or `system` in a request body. The API sets these values and rejects any request that includes them with a 400 error.

Each response returns region objects with the following fields.

| Field | Type | Description |
|---|---|---|
| `region_id` | integer | The region ID. |
| `country_id` | string | The two-letter country code. |
| `code` | string | The region code. |
| `default_name` | string | The default region name. |
| `locale_names` | array | Locale-specific names for the region. Returns an empty array when the region has none. |
| `system` | boolean | `true` for a system region, `false` for a custom region. |

### List regions for a country

Returns the system and custom regions for the country in the path. The results are always limited to that country, in addition to any search criteria you pass.

| Item | Value |
|---|---|
| **Method** | `GET` |
| **URL** | `/V1/directory/countries/:countryId/regions` |

There is no endpoint that retrieves a single region by ID. Filter on `region_id` instead. The following example returns the region with the code `25` for the Dominican Republic:

```text
GET /V1/directory/countries/DO/regions
    ?searchCriteria[filter_groups][0][filters][0][field]=code
    &searchCriteria[filter_groups][0][filters][0][value]=25
    &searchCriteria[filter_groups][0][filters][0][condition_type]=eq
```

**Response (200):**

```json
{
  "items": [
    {
      "region_id": 1187,
      "country_id": "DO",
      "code": "25",
      "default_name": "Santiago",
      "locale_names": [],
      "system": false
    }
  ],
  "search_criteria": {
    "filter_groups": [
      {
        "filters": [
          {
            "field": "code",
            "value": "25",
            "condition_type": "eq"
          }
        ]
      }
    ]
  },
  "total_count": 1
}
```

### Create custom regions

Creates one or more custom regions for the country in the path. A request can contain 1 to 500 regions.

| Item | Value |
|---|---|
| **Method** | `POST` |
| **URL** | `/V1/directory/countries/:countryId/regions` |

If any region fails validation, no regions are created.

**Request body:**

```json
{
  "regions": [
    {
      "code": "01",
      "default_name": "Distrito Nacional",
      "locale_names": [
        {
          "locale": "en_US",
          "name": "National District"
        }
      ]
    },
    {
      "code": "25",
      "default_name": "Santiago"
    },
    {
      "code": "32",
      "default_name": "Santo Domingo"
    }
  ]
}
```

**Response (200):**

Returns the created regions in the same order as the request.

```json
[
  {
    "region_id": 1186,
    "country_id": "DO",
    "code": "01",
    "default_name": "Distrito Nacional",
    "locale_names": [
      {
        "locale": "en_US",
        "name": "National District"
      }
    ],
    "system": false
  },
  {
    "region_id": 1187,
    "country_id": "DO",
    "code": "25",
    "default_name": "Santiago",
    "locale_names": [],
    "system": false
  },
  {
    "region_id": 1188,
    "country_id": "DO",
    "code": "32",
    "default_name": "Santo Domingo",
    "locale_names": [],
    "system": false
  }
]
```

### Update a custom region

Updates the code, default name, and locale-specific names of a custom region.

| Item | Value |
|---|---|
| **Method** | `PUT` |
| **URL** | `/V1/directory/countries/:countryId/regions/:regionId` |

The request requires both `code` and `default_name`.

<InlineAlert variant="warning" slots="text" />

If you omit `locale_names` from an update request, the API removes all existing locale-specific names for the region. To keep them, include them in the request.

**Request body:**

```json
{
  "region": {
    "code": "25",
    "default_name": "Santiago de los Caballeros",
    "locale_names": [
      {
        "locale": "en_US",
        "name": "Santiago"
      }
    ]
  }
}
```

**Response (200):**

```json
{
  "region_id": 1187,
  "country_id": "DO",
  "code": "25",
  "default_name": "Santiago de los Caballeros",
  "locale_names": [
    {
      "locale": "en_US",
      "name": "Santiago"
    }
  ],
  "system": false
}
```

### Delete a custom region

Deletes a custom region and its locale-specific names.

| Item | Value |
|---|---|
| **Method** | `DELETE` |
| **URL** | `/V1/directory/countries/:countryId/regions/:regionId` |

**Response (200):**

```json
true
```

## Error handling

The API returns standard HTTP status codes:

| Status code | Condition |
|---|---|
| `400` | Validation error. Missing required fields, duplicate codes, an empty or oversized batch, an unknown country on create, an unsupported field in the request body, or an attempt to update or delete a system region. |
| `401` | Missing or invalid bearer token, or the token lacks the `Magento_DirectoryRegionRestApi::country_region` permission. |
| `404` | The region does not exist, or it belongs to a different country than the one in the path. |
