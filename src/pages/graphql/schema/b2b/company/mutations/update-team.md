---
title: updateCompanyTeam mutation
contributor_name: Atwix
contributor_link: https://www.atwix.com/
keywords:
  - B2B
---

# updateCompanyTeam mutation

Use the `updateCompanyTeam` mutation to update the company team data.

This mutation requires a valid [customer authentication token](../../../customer/mutations/generate-token.md).

## Syntax

```graphql
mutation {
    updateCompanyTeam(
        input: CompanyTeamUpdateInput!
    ) {
        UpdateCompanyTeamOutput
    }
}
```

## Reference

The [`updateCompanyTeam`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-updateCompanyTeam) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example updates the name and description of a company team.

**Request:**

```graphql
mutation {
  updateCompanyTeam(
    input: {
      name: "My Test Team"
      description: "My Test Team description"
      id: "MQ=="
    }
  ) {
    team {
      id
      name
      description
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "updateCompanyTeam": {
      "team": {
        "id": "MQ==",
        "name": "My Test Team",
        "description": "My Test Team description"
      }
    }
  }
}
```
