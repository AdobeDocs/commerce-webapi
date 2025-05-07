---
title: createCompanyTeam mutation
contributor_name: Atwix
contributor_link: https://www.atwix.com/
keywords:
  - B2B
---

# createCompanyTeam mutation

Use the `createCompanyTeam` mutation to create a new team for your company.

The `target_id` input attribute allows you to specify which node in the company structure will be the parent node of the company team. If you do not specify a value, the team will be assigned to the top-level (root) node of the company structure.

You can get the `target_id` with the [`company`](../queries/company.md) query.

This mutation requires a valid [customer authentication token](../../../customer/mutations/generate-token.md).

## Syntax

```graphql
mutation {
    createCompanyTeam(
        input: CompanyTeamCreateInput!
    ) {
        CreateCompanyTeamOutput
    }
}
```

## Reference

The [`createCompanyTeam`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-createCompanyTeam) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example shows the minimal payload for adding a new team to a customer's company.

**Request:**

```graphql
mutation {
  createCompanyTeam(
    input: {
      name: "Test Team"
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
    "createCompanyTeam": {
      "team": {
        "id": "MQ==",
        "name": "Test Team",
        "description": null
      }
    }
  }
}
```

This example creates a child team of the parent team specified in the `target_id` field.

**Request:**

```graphql
mutation {
  createCompanyTeam(
    input: {
      name: "Test Child Team"
      description: "Test Child Team description"
      target_id: "MQ=="
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
    "createCompanyTeam": {
      "team": {
        "id": "Mg==",
        "name": "Test Child Team",
        "description": "Test Child Team description"
      }
    }
  }
}
```
