---
title: Gift Card Account REST Endpoints
description: Learn how to use Gift Card Account REST APIs to create, update, delete, and query gift card accounts programmatically in Adobe Commerce as a Cloud Service.
edition: saas
keywords:
  - REST
  - Integration
---

# Gift card account API

The gift card account REST endpoints provide programmatic management of gift card accounts at the account level, not the cart or quote level. Use this API to create, retrieve, update, and delete gift card accounts, or to provision gift card accounts in bulk through the JSON import endpoint.

These endpoints are designed for:

*  Administrators managing gift card programs
*  Third-party integrations provisioning gift cards from external systems, such as ERP, CRM, and marketing platforms
*  Automated workflows for bulk gift card creation

## Authentication

All endpoints require an admin or integration bearer token. The token must be associated with a role that includes the `Magento_GiftCardAccount::giftcardaccount` Access Control List (ACL) resource.

For bulk import operations, the role must also include the `Magento_ImportExport::import_api` ACL resource.

## Website and store context

Website and store view values are resolved from HTTP request headers, not from the request body. Pass one of the following headers with each request:

*  `Store: <store_view_code>`
*  `Magento-Website-Code: <website_code>`

The API resolves the website automatically from these headers. Do not include `website_id` in the REST request payload.

<InlineAlert variant="info" slots="text" />

The bulk import endpoint is an exception. Because import operates in bulk and may target specific websites, each row in the import payload requires an explicit `website_id` value.

## REST API reference

The API exposes the following operations under `/V1/giftcardaccounts`, all secured by the `Magento_GiftCardAccount::giftcardaccount` ACL resource:

| Method | URL | Description |
|--------|-----|-------------|
| POST | `/rest/V1/giftcardaccounts` | Create a gift card account |
| GET | `/rest/V1/giftcardaccounts` | List accounts (supports searchCriteria) |
| GET | `/rest/V1/giftcardaccounts/:id` | Get account by ID |
| GET | `/rest/V1/giftcardaccounts/code/:code` | Get account by code |
| PUT | `/rest/V1/giftcardaccounts/:id` | Update account (merge semantics) |
| DELETE | `/rest/V1/giftcardaccounts/:id` | Delete account |

### Field reference

| Field | Type | Valid values | REST create | Import |
|---|---|---|---|---|
| `code` | string | Max 255 characters | Required | Required |
| `balance` | float | >= 0 | Required | Required |
| `status` | int | `0` (disabled), `1` (enabled) | Optional, defaults to `1` | Optional, defaults to `1` |
| `state` | int | `0` (available), `1` (used), `2` (redeemed), `3` (expired) | Optional, defaults to `0` | Optional, defaults to `0` |
| `is_redeemable` | int | `0` or `1` | Optional, defaults to `1` | Optional, defaults to `1` |
| `date_expires` | string | `YYYY-MM-DD` or null | Optional | Optional |
| `date_created` | string | `YYYY-MM-DD` | Auto-set | Optional, auto-set if omitted |
| `website_id` | int | Valid website ID | Not accepted (auto-resolved from headers) | Required |

### Create a gift card account

Creates a new gift card account with duplicate code detection.

| Item | Value |
|---|---|
| **Method** | `POST` |
| **URL** | `/V1/giftcardaccounts` |

**Request body:**

```json
{
  "giftcardAccount": {
    "code": "GIFT-1234-ABCD",
    "balance": 100.00,
    "status": 1,
    "state": 0,
    "is_redeemable": 1,
    "date_expires": "2027-12-31"
  }
}
```

**Response (200):**

```json
{
  "account_id": 42,
  "code": "GIFT-1234-ABCD",
  "balance": 100,
  "status": 1,
  "state": 0,
  "is_redeemable": 1,
  "date_expires": "2027-12-31",
  "date_created": "2026-03-12"
}
```

### Retrieve a gift card account by ID

| Item | Value |
|---|---|
| **Method** | `GET` |
| **URL** | `/V1/giftcardaccounts/:id` |

**Response (200):**

Returns a single gift card account object.

### Retrieve a gift card account by code

| Item | Value |
|---|---|
| **Method** | `GET` |
| **URL** | `/V1/giftcardaccounts/code/:code` |

<InlineAlert variant="warning" slots="text" />

If a gift card code is purely numeric (for example, `12345`), a request to `/V1/giftcardaccounts/12345` matches the ID route, not the code route. Always use `/V1/giftcardaccounts/code/12345` for code-based lookups when the code could be numeric.

**Response (200):**

Returns a single gift card account object.

### List gift card accounts with search criteria

| Item | Value |
|---|---|
| **Method** | `GET` |
| **URL** | `/V1/giftcardaccounts` |

Pass search criteria as query parameters. The following example returns gift card accounts where `status` equals `1` (enabled):

```text
GET /V1/giftcardaccounts?searchCriteria[filterGroups][0][filters][0][field]=status&searchCriteria[filterGroups][0][filters][0][value]=1&searchCriteria[pageSize]=10&searchCriteria[currentPage]=1
```

**Response (200):**

```json
{
  "items": [
    {
      "account_id": 42,
      "code": "GIFT-1234-ABCD",
      "balance": 100,
      "status": 1,
      "state": 0,
      "is_redeemable": 1,
      "date_expires": "2027-12-31",
      "date_created": "2026-03-12"
    }
  ],
  "search_criteria": { },
  "total_count": 1
}
```

### Update a gift card account

Updates an existing gift card account using merge semantics. Only non-null fields in the request are applied. The `code` field is immutable. Passing a different code returns a validation error.

| Item | Value |
|---|---|
| **Method** | `PUT` |
| **URL** | `/V1/giftcardaccounts/:id` |

**Request body:**

```json
{
  "giftcardAccount": {
    "balance": 75.00,
    "status": 1
  }
}
```

**Response (200):**

Returns the updated gift card account object.

### Delete a gift card account

| Item | Value |
|---|---|
| **Method** | `DELETE` |
| **URL** | `/V1/giftcardaccounts/:id` |

**Response (200):**

```json
true
```

## Bulk import via JSON

Gift card accounts can be provisioned in bulk using `POST /V1/import/json` with entity type `giftcardaccount`. This endpoint requires the `Magento_ImportJsonApi::import_api` Access Control List (ACL) resource in addition to the gift card account ACL.

### Supported behaviors

| Behavior | Description |
|---|---|
| `append` | Creates new gift card accounts. If a code already exists, that row fails and the import continues with the remaining rows. |
| `replace` | Updates and inserts the gift card accounts by code. Creates the account if the code does not exist and replaces it if it does. |
| `delete` | Removes gift card accounts by code. |

### Request example

```json
{
  "source": {
    "entity": "giftcardaccount",
    "behavior": "append",
    "validation_strategy": "validation-stop-on-errors",
    "allowed_error_count": "10",
    "items": [
      {
        "code": "BULK-001",
        "balance": 50.00,
        "website_id": 1,
        "status": 1,
        "state": 0,
        "is_redeemable": 1,
        "date_expires": "2027-06-30"
      },
      {
        "code": "BULK-002",
        "balance": 25.00,
        "website_id": 1
      }
    ]
  }
}
```

### Import behavior details

*  Each row in the import payload requires an explicit `website_id`, unlike REST endpoints which infer the website from request headers.
*  Each row is validated independently. Invalid rows produce per-row errors without affecting valid rows in the same batch.
*  Duplicate codes within the same batch are detected and reported as per-row errors rather than causing a transaction rollback.
*  Import writes directly to the database for performance and bypasses the vendor model's save lifecycle. Balance-change history entries are not created during import.
*  REST create operations reject past expiration dates. Import accepts past expiration dates by design, to support historical data migration.

## Error handling

The API returns standard HTTP status codes:

| Status code | Condition |
|---|---|
| `400` | Validation error. Missing required fields, invalid values, or past expiration date on REST create. |
| `401` | Missing or invalid bearer token. |
| `403` | Token lacks the required ACL resource. |
| `404` | Gift card account not found. |
| `409` | Duplicate gift card code. |

Input validation covers required fields, value ranges (status must be `0` or `1`, state must be `0`-`3`, balance must be non-negative), date format, and type safety. Non-numeric values for numeric fields are rejected.
