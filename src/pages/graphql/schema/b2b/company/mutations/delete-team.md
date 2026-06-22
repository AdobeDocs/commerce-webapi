---
title: deleteCompanyTeam mutation
description: Use the deleteCompanyTeam mutation to delete a company team by ID. You can get the team ID with the company query.
keywords:
  - B2B
---

<Fragment src="../../../../../includes/commerce-only.md"/>

# deleteCompanyTeam mutation

Use the `deleteCompanyTeam` mutation to delete a company team by ID. You can get the team ID with the [`company`](../queries/company.md) query.

This mutation requires a valid [customer authentication token](../../../customer/mutations/generate-token.md).

## Syntax

```graphql
mutation {
    deleteCompanyTeam(
        id: ID!
    ) {
        DeleteCompanyTeamOutput
    }
}
```

## Reference

The `deleteCompanyTeam` reference provides detailed information about the types and fields defined in this mutation.

* [Adobe Commerce as a Cloud Service](/reference/graphql/saas/index.md#deletecompanyteam)

* [On-Premises/Cloud](/reference/graphql/latest/index.md#deletecompanyteam)

## Example usage

The following example deletes the specified team.

**Request:**

```graphql
mutation {
  deleteCompanyTeam(
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
    "deleteCompanyTeam": {
      "success": true
    }
  }
}
```

<Edition slots="text" backgroundcolor="gray"/>

[Thanks to Atwix for contributing this topic!](https://www.atwix.com/)
