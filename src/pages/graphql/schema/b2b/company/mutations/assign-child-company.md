---
title: assignChildCompany mutation
description: This mutation is part of the B2B Storefront Compatibility Package and is only available on Adobe Commerce as a Cloud Service.
edition: saas
keywords:
  - B2B
---

| |
|:--|
| \<span style="display:inline-block; vertical-align:middle;"\>\<img src="../pages/_images/adobe-logo.svg" alt="Adobe Commerce feature" style="height:20px; margin-right:8px; vertical-align:middle;" /\>\</span\>\<span style="display:inline-block; vertical-align:middle;"\>\<strong\>Exclusive feature only in Adobe Commerce\</strong\> (\<a href="https://experienceleague.adobe.com/docs/commerce-admin/user-guides/home.html#product-editions"\>Learn more\</a\>)\</span\> |

# assignChildCompany mutation

<InlineAlert variant="info" slots="text1" />

This mutation is part of the B2B Storefront Compatibility Package and is only available on [Adobe Commerce as a Cloud Service](https://experienceleague.adobe.com/en/docs/commerce/cloud-service/overview).

The `assignChildCompany` mutation allows company administrators to assign a child company to a parent company within the company hierarchy. This mutation requires `parentId` and `childId` as unique IDs of the companies as parameters. This mutation returns a `company_hierarchy` object if successful.

## Syntax

```graphql
{
    assignChildCompany(
        input: AssignChildCompanyInput!
    ): AssignChildCompanyOutput
}
```

[//]: # (## Reference)
[//]: # ()
[//]: # (The [`assignChildCompany`]&#40;https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-assignChildCompany&#41; reference provides detailed information about the types and fields defined in this mutation.)

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

