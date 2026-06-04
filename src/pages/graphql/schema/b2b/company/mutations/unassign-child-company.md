---
title: unassignChildCompany mutation
description: This mutation is part of the B2B Storefront Compatibility Package and is only available on Adobe Commerce as a Cloud Service.
keywords:
  - B2B
---

<Fragment src="../../../../../includes/saas-only.md"/>

<Fragment src="../../../../../includes/commerce-only.md"/>

# unassignChildCompany mutation

<InlineAlert variant="info" slots="text1" />

This mutation is part of the B2B Storefront Compatibility Package and is only available on [Adobe Commerce as a Cloud Service](https://experienceleague.adobe.com/en/docs/commerce/cloud-service/overview).

The `unassignChildCompany` mutation allows company administrators to unassign a child company from a parent company within the company hierarchy. This mutation requires `child_company_id` as unique IDs of the child company as parameters. This mutation returns a `company_hierarchy` object if successful.

## Syntax

```graphql
{
    unassignChildCompany(
        input: UnassignChildCompanyInput!
    ): UnassignChildCompanyOutput
}
```

[//]: # (## Reference)
[//]: # ()
[//]: # (The [`unassignChildCompany`]&#40;/reference/graphql/saas/index.md#unassignchildcompany&#41; reference provides detailed information about the types and fields defined in this mutation.)

## Example usage

The following example unassigns a child company from a parent company by the company admin.

**Request:**

```graphql
mutation {
    unassignChildCompany(
        input: {
            child_company_id: "ABCD=="
        }
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
    "unassignChildCompany": {
      "company_hierarchy": {
        "parent": null,
        "children": []
      }
    }
  }
}
```
