---
title: deleteCompanyRole mutation
contributor_name: Atwix
contributor_link: https://www.atwix.com/
edition: b2b
---

# deleteCompanyRole mutation

Use the `deleteCompanyRole` mutation to delete a company role by ID.

You can get the role ID with the [`company`](../queries/company.md) query.

This mutation requires a valid [customer authentication token](../../../customer/mutations/generate-token.md).

## Syntax

```graphql
mutation {
    deleteCompanyRole(
        id: ID!
    ) {
        DeleteCompanyRoleOutput
    }
}
```

## Reference

The [`deleteCompanyRole`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-deleteCompanyRole) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example deletes the specified company role.

**Request:**

```graphql
mutation {
  deleteCompanyRole(
    id: "Mg=="
  ) {
    success
  }
}
```

**Response:**

```json
{
  "data": {
    "deleteCompanyRole": {
      "success": true
    }
  }
}
```
