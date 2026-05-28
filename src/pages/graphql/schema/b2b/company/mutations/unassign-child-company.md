---
title: unassignChildCompany mutation
description: This mutation is part of the B2B Storefront Compatibility Package and is only available on Adobe Commerce as a Cloud Service.
keywords:
  - B2B
---

<Edition slots="text" backgroundcolor="green"/>

[SaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions)

| |
|:--|
| \<span style="display:inline-block; vertical-align:middle;"\>\<img src="../pages/_images/adobe-logo.svg" alt="Adobe Commerce feature" style="height:20px; margin-right:8px; vertical-align:middle;" /\>\</span\>\<span style="display:inline-block; vertical-align:middle;"\>\<strong\>Exclusive feature only in Adobe Commerce\</strong\> (\<a href="https://experienceleague.adobe.com/docs/commerce-admin/user-guides/home.html#product-editions"\>Learn more\</a\>)\</span\> |

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
[//]: # (The [`unassignChildCompany`]&#40;https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-unassignChildCompany&#41; reference provides detailed information about the types and fields defined in this mutation.)

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

