---
title: isCompanyRoleNameAvailable query
description: The isCompanyRoleNameAvailable query checks whether a company role name is valid for creating into a company.
contributor_name: Atwix
contributor_link: https://www.atwix.com/
keywords:
  - B2B
---

| |
|:--|
| ![Adobe Commerce feature](../../../../../images/adobe-logo.svg) **Exclusive feature only in Adobe Commerce** ([Learn more](https://experienceleague.adobe.com/docs/commerce-admin/user-guides/home.html#product-editions)) |

# isCompanyRoleNameAvailable query

The `isCompanyRoleNameAvailable` query checks whether a company role name is valid for creating into a company.

The query returns a `false` value if the specified role name has already found in a company.

This query requires a valid [customer authentication token](../../../customer/mutations/generate-token.md).

## Syntax

```graphql
{
    isCompanyRoleNameAvailable(
        name: String!
    ) {
        is_role_name_available
    }
}
```

## Reference

The `isCompanyRoleNameAvailable` reference provides detailed information about the types and fields defined in this query.

* [SaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#query-isCompanyRoleNameAvailable)

* [PaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-isCompanyRoleNameAvailable)

## Example usage

The following example checks whether the company role named "Company Admin" can be used to create a new company role.

**Request:**

```graphql
query {
  isCompanyRoleNameAvailable(name: "Company Admin") {
    is_role_name_available
  }
}
```

**Response:**

```json
{
  "data": {
    "isCompanyRoleNameAvailable": {
      "is_role_name_available": false
    }
  }
}
```

<Edition slots="text" backgroundcolor="blue"/>

[Thanks to Atwix for contributing this topic!](https://www.atwix.com/)
