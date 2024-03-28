---
title: isCompanyRoleNameAvailable query
contributor_name: Atwix
contributor_link: https://www.atwix.com/
edition: b2b
---

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

The [`isCompanyRoleNameAvailable`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-isCompanyRoleNameAvailable) reference provides detailed information about the types and fields defined in this query.

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
