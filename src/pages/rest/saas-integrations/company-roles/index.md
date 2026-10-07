---
title: Company Roles REST Endpoint
description: Learn how to use the companyRoles REST endpoint to retrieve the roles and permissions a customer holds across all assigned companies.
keywords:
  - B2B
  - REST
  - Integration
---

<Fragment src="../../../includes/saas-only.md"/>

# `companyRoles` API

The `GET /V1/customers/:customerId/companyRoles` REST endpoint returns every role a single customer holds, across all companies the customer is assigned to. Each returned role includes the permissions for that role. This allows you to retrieve all of a customer's permissions with one request, instead of querying each company assignment separately.

For more information on company permissions, see [Manage company roles](../../b2b/roles.md).

## Authentication

All requests require an admin or integration [bearer token](../../authentication/index.md). The token must belong to a role that includes the **View Customer Company Roles** (`Magento_CustomerCompany::company_roles_view`) permission under the existing company resources.

Requests are tenant-scoped. The endpoint resolves companies and roles from the active tenant only.

## REST API reference

| Method | URL | Description |
|--------|-----|-------------|
| GET | `/V1/customers/:customerId/companyRoles` | Retrieve the company roles assigned to a customer |

### Retrieve company roles for a customer

Returns one entry for each company assignment the customer has a role in.

| Item | Value |
|---|---|
| **Method** | `GET` |
| **URL** | `/V1/customers/:customerId/companyRoles` |

The endpoint returns an empty `items` array in the following cases:

-  The customer is not a member of any company.
-  The customer is a member of a company but does not have a role.
-  No company or role matches the search criteria.

If the customer holds a role in some companies but not others, the companies where the customer does not have a role are not included.

Company Administrator roles return an empty `permissions` array.

<InlineAlert variant="info" slots="text" />

The `searchCriteria` parameter is required, all of its subfields are optional.

To retrieve every role without paging, use `searchCriteria[pageSize]=0`.

#### Path parameters

| Parameter | Type | Description |
|---|---|---|
| `customerId` | integer | The ID of the customer whose roles you want to retrieve. |

#### Query parameters

Pass search criteria as query parameters to manage the results. For general search criteria syntax, see [Search using REST endpoints](../../use-rest/performing-searches.md).

| Parameter | Type | Description |
|---|---|---|
| `searchCriteria[filterGroups][0][filters][0][field]` | string | Field to filter on. See [Filter fields](#filter-fields). |
| `searchCriteria[filterGroups][0][filters][0][value]` | string | Value to match. When `conditionType` is `in`, pass a comma-separated list. |
| `searchCriteria[filterGroups][0][filters][0][conditionType]` | string | Condition type: `eq`, `in`, or `like`. |
| `searchCriteria[sortOrders][0][field]` | string | Field to sort on: `id`, `company_id`, or `role_name`. |
| `searchCriteria[sortOrders][0][direction]` | string | Sort direction: `ASC` or `DESC`. |
| `searchCriteria[pageSize]` | integer | Number of items per page. Defaults to no paging, which returns every matching role. Cannot be negative. |
| `searchCriteria[currentPage]` | integer | Page number to return. Defaults to `1`, and must be at least `1` when set explicitly. |

Sorting applies to the returned roles after filtering and before paging. The `permissions` array has no sortable field.

#### Filter fields

The endpoint supports two categories of filter fields. Company fields restrict which companies are considered. Permission fields narrow the `permissions` array of each matching role.

| Field | Category | Type | Supported condition types | Description |
|---|---|---|---|---|
| `company_id` | Company | integer | `eq`, `in` | The company ID. |
| `company_name` | Company | string | `eq`, `in`, `like` | The company name. Matching is case-insensitive. |
| `resource_id` | Permission | string | `eq`, `in` | An ACL resource ID within a role's permissions. |
| `permission` | Permission | string | `eq`, `in` | Either `allow` or `deny`. Any other value returns an error. |

<InlineAlert variant="warning" slots="text" />

A single filter group cannot mix company fields with permission fields. A request that combines them, such as `company_id` and `resource_id` in filter group `0`, returns a 400 error. Place each category in its own filter group.

#### Response fields

The response is a search results object with the following fields.

| Field | Type | Description |
|---|---|---|
| `items` | array | The company roles that match the search criteria. |
| `search_criteria` | object | The search criteria applied to the request. |
| `total_count` | integer | The number of roles that match the search criteria before paging is applied. |

Each object in the `items` array contains the following fields.

| Field | Type | Description |
|---|---|---|
| `id` | integer | The role ID. |
| `company_id` | integer | The ID of the company that the role belongs to. |
| `role_name` | string | The role name. |
| `permissions` | array | The permissions granted by the role. |

Each object in the `permissions` array contains the following fields.

| Field | Type | Description |
|---|---|---|
| `resource_id` | string | The resource the permission applies to, such as `Magento_Sales::place_order`. |
| `permission` | string | The permission value: `allow` or `deny`. |

#### Error responses

| Status | Description |
|---|---|
| 400 | Invalid input. Returned when a filter group mixes company fields with permission fields, a filter uses an unsupported field or condition type, a `permission` filter value is not `allow` or `deny`, a sort order uses an unsupported field, `pageSize` is negative, or `currentPage` is less than `1`. |
| 401 | Unauthorized. The request is missing a valid bearer token, or the token lacks the `Magento_CustomerCompany::company_roles_view` resource. |
| 404 | The `customerId` does not match an existing customer. |

### Example: retrieve all roles for a customer

```text
GET /V1/customers/5/companyRoles?searchCriteria[pageSize]=0
```

**Response (200):**

```json
{
  "items": [
    {
      "id": 2,
      "company_id": 1,
      "role_name": "Purchasing Agent",
      "permissions": [
        {
          "resource_id": "Magento_Company::view",
          "permission": "allow"
        }
      ]
    },
    {
      "id": 5,
      "company_id": 3,
      "role_name": "Approver",
      "permissions": []
    }
  ],
  "search_criteria": {
    "filter_groups": []
  },
  "total_count": 2
}
```

The `Approver` role grants no permissions, so its `permissions` array is empty.

### Example: filter by company

The following request returns the roles the customer holds in companies `1` and `3`, sorted by company ID:

```text
GET /V1/customers/5/companyRoles
    ?searchCriteria[filterGroups][0][filters][0][field]=company_id
    &searchCriteria[filterGroups][0][filters][0][value]=1,3
    &searchCriteria[filterGroups][0][filters][0][conditionType]=in
    &searchCriteria[sortOrders][0][field]=company_id
    &searchCriteria[sortOrders][0][direction]=ASC
```

### Example: filter by company name

The following request returns the roles the customer holds in companies whose name starts with `Adobe`:

```text
GET /V1/customers/5/companyRoles
    ?searchCriteria[filterGroups][0][filters][0][field]=company_name
    &searchCriteria[filterGroups][0][filters][0][value]=Adobe%25
    &searchCriteria[filterGroups][0][filters][0][conditionType]=like
```

### Example: filter by permission

Company fields and permission fields must occupy separate filter groups. The following request returns only the roles that grant the `Magento_Company::view` permission, and each returned role lists only that permission:

```text
GET /V1/customers/5/companyRoles
    ?searchCriteria[filterGroups][0][filters][0][field]=resource_id
    &searchCriteria[filterGroups][0][filters][0][value]=Magento_Company::view
    &searchCriteria[filterGroups][0][filters][0][conditionType]=eq
    &searchCriteria[filterGroups][1][filters][0][field]=permission
    &searchCriteria[filterGroups][1][filters][0][value]=allow
    &searchCriteria[filterGroups][1][filters][0][conditionType]=eq
```

**Response (200):**

```json
{
  "items": [
    {
      "id": 2,
      "company_id": 1,
      "role_name": "Purchasing Agent",
      "permissions": [
        {
          "resource_id": "Magento_Company::view",
          "permission": "allow"
        }
      ]
    }
  ],
  "search_criteria": {
    "filter_groups": [
      {
        "filters": [
          {
            "field": "resource_id",
            "value": "Magento_Company::view",
            "condition_type": "eq"
          }
        ]
      },
      {
        "filters": [
          {
            "field": "permission",
            "value": "allow",
            "condition_type": "eq"
          }
        ]
      }
    ]
  },
  "total_count": 1
}
```
