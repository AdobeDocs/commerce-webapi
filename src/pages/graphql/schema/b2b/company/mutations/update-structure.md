---
title: updateCompanyStructure mutation
description: Use the updateCompanyStructure mutation to change the parent node of a company team.
contributor_name: Atwix
contributor_link: https://www.atwix.com/
keywords:
  - B2B
---

<Fragment src="../../../../../includes/commerce-only.md"/>

# updateCompanyStructure mutation

Use the `updateCompanyStructure` mutation to change the parent node of a company team.

This mutation requires a valid [customer authentication token](../../../customer/mutations/generate-token.md).

## Syntax

```graphql
mutation {
    updateCompanyStructure(
        input: CompanyStructureUpdateInput!
    ) {
        UpdateCompanyStructureOutput
    }
}
```

## Reference

The `updateCompanyStructure` reference provides detailed information about the types and fields defined in this mutation.

* [Adobe Commerce as a Cloud Service](/reference/graphql/saas/index.md#updatecompanystructure)

* [On-Premises/Cloud](/reference/graphql/index.md#updatecompanystructure)

## Example usage

The following example shows how to update the customer's company structure.

**Request:**

```graphql
mutation {
  updateCompanyStructure(
    input: {
      tree_id: "Mw=="
      parent_tree_id: "MQ=="
    }
  ) {
    company {
      structure(
        rootId: "MQ=="
      ) {
        items {
          id
          parent_id
          entity {
            ... on CompanyTeam {
              name
              id
              description
            }
          }
        }
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "updateCompanyStructure": {
      "company": {
        "structure": {
          "items": [
            {
              "id": "MQ==",
              "parent_id": "MA==",
              "entity": {}
            },
            {
              "id": "Mg==",
              "parent_id": "MQ==",
              "entity": {
                "name": "Test Team",
                "id": "MQ==",
                "description": "Test Team description"
              }
            },
            {
              "id": "Mw==",
              "parent_id": "Mg==",
              "entity": {
                "name": "Test Child Team",
                "id": "Mg==",
                "description": "Test Child Team dexription"
              }
            }
          ]
        }
      }
    }
  }
}
```

<Edition slots="text" backgroundcolor="blue"/>

[Thanks to Atwix for contributing this topic!](https://www.atwix.com/)
