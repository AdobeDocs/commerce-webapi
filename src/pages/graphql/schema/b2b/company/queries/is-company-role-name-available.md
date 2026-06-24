---
title: isCompanyRoleNameAvailable query
description: The isCompanyRoleNameAvailable query checks whether a company role name is valid for creating into a company.
keywords:
  - B2B
---

<Fragment src="../../../../../includes/commerce-only.md"/>

# isCompanyRoleNameAvailable query

The `isCompanyRoleNameAvailable` query checks whether a company role name is valid for creating into a company.

The query returns a `false` value if the specified role name has already found in a company.

This query requires a valid [customer authentication token](../../../customer/mutations/generate-token.md).

## Syntax

```graphql
{
    isCompanyRoleNameAvailable(
        name: String!
    ) {
        is_role_name_available
    }
}
```

## Reference

The `isCompanyRoleNameAvailable` reference provides detailed information about the types and fields defined in this query.

* [Adobe Commerce as a Cloud Service](/reference/graphql/saas/index.md#iscompanyrolenameavailable)

* [On-Premises/Cloud](/reference/graphql/latest/index.md#iscompanyrolenameavailable)

## Example usage

The following example checks whether the company role named "Company Admin" can be used to create a new company role.

**Request:**

```graphql
query {
  isCompanyRoleNameAvailable(name: "Company Admin") {
    is_role_name_available
  }
}
```

**Response:**

```json
{
  "data": {
    "isCompanyRoleNameAvailable": {
      "is_role_name_available": false
    }
  }
}
```

<Edition slots="text" backgroundcolor="gray"/>

[Thanks to Atwix for contributing this topic!](https://www.atwix.com/)
