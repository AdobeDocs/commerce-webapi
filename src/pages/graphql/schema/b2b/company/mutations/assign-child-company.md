---
title: assignChildCompany mutation
description: This mutation is part of the B2B Storefront Compatibility Package and is only available on Adobe Commerce as a Cloud Service.
keywords:
  - B2B
---

<Fragment src="/includes/commerce-only.md"/>

# assignChildCompany mutation

<Fragment src="/includes/scp-b2b-mutation.md" />

The `assignChildCompany` mutation allows company administrators to assign a child company to a parent company within the company hierarchy. This mutation requires `parentId` and `childId` as unique IDs of the companies as parameters. This mutation returns a `company_hierarchy` object if successful.

## Syntax

```graphql
{
    assignChildCompany(
        input: AssignChildCompanyInput!
    ): AssignChildCompanyOutput
}
```

## Reference

The [`assignChildCompany`](/reference/graphql/saas/mutations.md#assignchildcompany) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example assigns a child company to a parent company by the company admin.

**Request:**

```graphql
mutation assignChildCompany($parentId: ID!, $childId: ID!) {
    assignChildCompany(
        input: {parent_company_id: "ODM5", child_company_id: "ABCD=="}
    ) {
        company_hierarchy {
            parent {
                name
            }
            children {
                name
            }
        }
    }
}
```

**Response:**

```json
{
  "data": {
    "assignChildCompany": {
      "company_hierarchy": {
        "parent": {
          "name": "ParentCompanyName"
        },
        "children": [
          {
            "name": "ChildCompanyName"
          }
        ]
      }
    }
  }
}
```
