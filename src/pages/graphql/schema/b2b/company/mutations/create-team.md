---
title: createCompanyTeam mutation
description: Use the createCompanyTeam mutation to create a new team for your company.
keywords:
  - B2B
---

<Edition slots="text"/>

[Thanks to Atwix for contributing this topic!](https://www.atwix.com/)

| |
|:--|
| \<span style="display:inline-block; vertical-align:middle;"\>\<img src="../pages/_images/adobe-logo.svg" alt="Adobe Commerce feature" style="height:20px; margin-right:8px; vertical-align:middle;" /\>\</span\>\<span style="display:inline-block; vertical-align:middle;"\>\<strong\>Exclusive feature only in Adobe Commerce\</strong\> (\<a href="https://experienceleague.adobe.com/docs/commerce-admin/user-guides/home.html#product-editions"\>Learn more\</a\>)\</span\> |

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

The `createCompanyTeam` reference provides detailed information about the types and fields defined in this mutation.

* [SaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-createCompanyTeam)

* [PaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-createCompanyTeam)

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

