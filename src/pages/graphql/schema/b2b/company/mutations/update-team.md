---
title: updateCompanyTeam mutation
description: Use the updateCompanyTeam mutation to update the company team data.
keywords:
  - B2B
---

<Fragment src="../../../../../includes/commerce-only.md"/>

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

The `updateCompanyTeam` reference provides detailed information about the types and fields defined in this mutation.

* [Adobe Commerce as a Cloud Service](/reference/graphql/saas/index.md#updatecompanyteam)

* [On-Premises/Cloud](/reference/graphql/latest/index.md#updatecompanyteam)

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

<Edition slots="text" backgroundcolor="gray"/>

[Thanks to Atwix for contributing this topic!](https://www.atwix.com/)
