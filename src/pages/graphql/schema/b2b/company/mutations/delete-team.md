---
title: deleteCompanyTeam mutation
contributor_name: Atwix
contributor_link: https://www.atwix.com/
keywords:
  - B2B
---

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

The [`deleteCompanyTeam`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-deleteCompanyTeam) reference provides detailed information about the types and fields defined in this mutation.

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
