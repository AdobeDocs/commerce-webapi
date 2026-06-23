---
title: deleteCompanyRole mutation
description: Use the deleteCompanyRole mutation to delete a company role by ID.
keywords:
  - B2B
---

<Fragment src="../../../../../includes/commerce-only.md"/>

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

The `deleteCompanyRole` reference provides detailed information about the types and fields defined in this mutation.

* [Adobe Commerce as a Cloud Service](/reference/graphql/saas/mutations.md#deletecompanyrole)

* [On-Premises/Cloud](/reference/graphql/latest/mutations.md#deletecompanyrole)

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

<Edition slots="text" backgroundcolor="gray"/>

[Thanks to Atwix for contributing this topic!](https://www.atwix.com/)
