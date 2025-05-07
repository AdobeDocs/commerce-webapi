---
title: updateCompanyStructure mutation
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

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

The [`updateCompanyStructure`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-updateCompanyStructure) reference provides detailed information about the types and fields defined in this mutation.

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
