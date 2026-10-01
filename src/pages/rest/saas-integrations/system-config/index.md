---
title: System Configuration REST Endpoints
description: Learn how to use the GET and PUT V1/system/config REST endpoints to sync store, shipping, tax, payment, and B2B settings between sandbox and production.
keywords:
  - REST
  - Integration
---

<Fragment src="../../../includes/saas-only.md"/>

# System configuration API

The system configuration REST endpoints provide programmatic access to Adobe Commerce as a Cloud Service system configuration values, including store information, shipping and tax settings, payment method settings, and B2B and company settings. Use this endpoint to read configuration from one environment and apply it to another.

These endpoints are designed for:

*  Developers and administrators who want to sync configuration across Adobe Commerce as a Cloud Service environments as part of a deployment or CI pipeline
*  Administrators who copy verified settings from a sandbox environment to production
*  Automated workflows that back up or restore configuration values

## Sync configuration from sandbox to production

This section provides a generalized overview of how you could copy values that you were testing in your sandbox environment to production. For details about these endpoints, see:

- [Retrieve configuration values](#retrieve-configuration-values)
- [Update configuration values](#update-configuration-values)

1. Call `GET /V1/system/config` on the sandbox environment to retrieve the configuration items you want to sync. Filter by `path` to limit the response to the sections you plan to move. For example, you could [retrieve a single value](#example-retrieve-a-single-configuration-path).

1. Review the returned `items` array and remove any values that you do not want to update on production. Environment-specific values, such as base URLs, API credentials, and payment gateway keys, typically need different values in production.

1. Call `PUT /V1/system/config` on the production environment, passing the reviewed items in the request body.

1. Check the response `errors` array for any rejected items.

<InlineAlert variant="warning" slots="text" />

Review every item before syncing from sandbox to production. Copying environment-specific values, such as base URLs or payment credentials, can break the production store.

## Authentication

All endpoints require a [bearer token](../../authentication/index.md) for authentication. The API only exposes paths that are visible in the Commerce Admin UI and allowed by your [user role](https://experienceleague.adobe.com/en/docs/commerce/cloud-service/user-management#role-resources).

## REST API reference

| Method | URL | Description |
|--------|-----|-------------|
| GET | `/V1/system/config` | Retrieve configuration values that match a search criteria |
| PUT | `/V1/system/config` | Update one or more configuration values |

### Retrieve configuration values

Returns configuration items that match the given search criteria. Only paths visible in the Commerce Admin UI and allowed by your user role are returned.

| Item | Value |
|---|---|
| **Method** | `GET` |
| **URL** | `/V1/system/config` |

#### Query parameters

| Parameter | Type | Description |
|---|---|---|
| `searchCriteria[filterGroups][0][filters][0][field]` | string | Field to filter on. Use `path` to filter by configuration path. |
| `searchCriteria[filterGroups][0][filters][0][value]` | string | Value to match. For a `path` filter, pass a single path, or a comma-separated list of paths when `conditionType` is `in`. |
| `searchCriteria[filterGroups][0][filters][0][conditionType]` | string | Condition type, such as `eq` for a single path or `in` for a comma-separated list of paths. |
| `searchCriteria[pageSize]` | integer | Number of items per page. If omitted or `0`, the API returns up to 500 paths without pagination. Ignored when a `path` filter is present. |
| `searchCriteria[currentPage]` | integer | Page number to return. Ignored when a `path` filter is present. |
| `scope` | string | Scope to read from: `default`, `website`, or `store`. |
| `scopeCode` | string | Website code or store view code. Omit for the default scope. |

<InlineAlert variant="info" slots="text" />

A `path` filter returns exactly the paths you request, so `pageSize` and `currentPage` are ignored. Without a `path` filter, the endpoint returns all available configuration paths.

#### Example: retrieve a single configuration path

```text
GET /V1/system/config
    ?searchCriteria[filterGroups][0][filters][0][field]=path
    &searchCriteria[filterGroups][0][filters][0][value]=sales/totals_sort/tax
    &searchCriteria[filterGroups][0][filters][0][conditionType]=eq
    &scope=default
```

**Response (200):**

```json
{
  "items": [
    {
      "path": "sales/totals_sort/tax",
      "value": "40",
      "scope": "default"
    }
  ],
  "search_criteria": {
    "filter_groups": [
      {
        "filters": [
          {
            "field": "path",
            "value": "sales/totals_sort/tax",
            "condition_type": "eq"
          }
        ]
      }
    ],
    "page_size": 1,
    "current_page": 1
  },
  "total_count": 1
}
```

#### Example: retrieve multiple configuration paths

Use `conditionType=in` with a comma-separated list of paths to retrieve several values in one request:

```text
GET /V1/system/config
    ?searchCriteria[filterGroups][0][filters][0][field]=path
    &searchCriteria[filterGroups][0][filters][0][value]=general/locale/code,currency/options/base,payment/checkmo/active
    &searchCriteria[filterGroups][0][filters][0][conditionType]=in
    &scope=default
```

**Response (200):**

```json
{
  "items": [
    {
      "path": "general/locale/code",
      "value": "en_US",
      "scope": "default"
    },
    {
      "path": "currency/options/base",
      "value": "USD",
      "scope": "default"
    },
    {
      "path": "payment/checkmo/active",
      "value": "1",
      "scope": "default"
    }
  ],
  "search_criteria": {
    "filter_groups": [
      {
        "filters": [
          {
            "field": "path",
            "value": "general/locale/code,currency/options/base,payment/checkmo/active",
            "condition_type": "in"
          }
        ]
      }
    ],
    "page_size": 3,
    "current_page": 1
  },
  "total_count": 3
}
```

A path that exists in `system.xml` but has no stored value returns `null`. For example, a fresh environment with no store information configured yet returns `{"path": "general/store_information/name", "value": null, "scope": "default"}`.

### Update configuration values

Saves one or more configuration items similar to manually changing the value in the Commerce Admin. If an item fails to save, it does not prevent other items in the same request from being saved.

| Item | Value |
|---|---|
| **Method** | `PUT` |
| **URL** | `/V1/system/config` |

#### Request body

| Field | Type | Required | Description |
|---|---|---|---|
| `items` | array | Yes | Configuration items to save |
| `items[].path` | string | Yes | Configuration path, for example `general/locale/code` |
| `items[].value` | string | Yes | Value to save. Multi-value fields use a delimited string. |
| `items[].scope` | string | Yes | Scope to write to: `default`, `website`, or `store` |
| `items[].scope_code` | string | No | Website code or store view code. Omit for the default scope. |

**Request body:**

```json
{
  "items": [
    {
      "path": "carriers/flatrate/price",
      "value": "6.00",
      "scope": "website",
      "scope_code": "base"
    }
  ]
}
```

**Response (200):**

```json
{
  "items": [
    {
      "path": "carriers/flatrate/price",
      "value": "6.00",
      "scope": "website",
      "scope_code": "base"
    }
  ],
  "errors": []
}
```

#### Example: a request with a rejected item

Submitting a path that does not exist, is not visible for the given scope, or is not available due to user permissions, does not fail the whole request. The valid items in the same request are still saved:

```json
{
  "items": [
    {
      "path": "carriers/flatrate/price",
      "value": "6.00",
      "scope": "website",
      "scope_code": "base"
    },
    {
      "path": "fictional/path",
      "value": "x",
      "scope": "default"
    }
  ]
}
```

**Response (200):**

```json
{
  "items": [
    {
      "path": "carriers/flatrate/price",
      "value": "6.00",
      "scope": "website",
      "scope_code": "base"
    }
  ],
  "errors": [
    {
      "path": "fictional/path",
      "scope": "default",
      "message": "Configuration path \"fictional/path\" was not found, is not visible for this scope, or is not allowed."
    }
  ]
}
```

The `errors` message does not include the value you submitted, so review the `path` and `scope` of each rejected item and confirm it is visible to the requesting user at that scope before retrying.

## Error handling

The API returns standard HTTP status codes:

| Status code | Condition |
|---|---|
| `200` | Request succeeded. For `PUT`, individual items can still appear in the response `errors` array. |
| `401` | Missing or invalid bearer token. |
| `500` | Internal server error. |

Rejected items in a `PUT` request are not reported as HTTP errors. Check the response body's `errors` array for the path, scope, and reason for each rejected item.
