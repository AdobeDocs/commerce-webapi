---
title: deleteCompanyRole mutation
description: Use the deleteCompanyRole mutation to delete a company role by ID.
contributor_name: Atwix
contributor_link: https://www.atwix.com/
keywords:
  - B2B
---

| |
|:--|
| ![Adobe Commerce feature](../../../../../images/adobe-logo.svg) **Exclusive feature only in Adobe Commerce** ([Learn more](https://experienceleague.adobe.com/docs/commerce-admin/user-guides/home.html#product-editions)) |

# deleteCompanyRole mutation

Use the `deleteCompanyRole` mutation to delete a company role by ID.

You can get the role ID with the [`company`](../queries/company.md) query.

This mutation requires a valid [customer authentication token](../../../customer/mutations/generate-token.md).

## Syntax

```graphql
mutation {
    deleteCompanyRole(
        id: ID!
    ) {
        DeleteCompanyRoleOutput
    }
}
```

## Reference

The `deleteCompanyRole` reference provides detailed information about the types and fields defined in this mutation.

* [SaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-deleteCompanyRole)

* [PaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-deleteCompanyRole)

## Example usage

The following example deletes the specified company role.

**Request:**

```graphql
mutation {
  deleteCompanyRole(
    id: "Mg=="
  ) {
    success
  }
}
```

**Response:**

```json
{
  "data": {
    "deleteCompanyRole": {
      "success": true
    }
  }
}
```

<Edition slots="text" backgroundcolor="blue"/>

[Thanks to Atwix for contributing this topic!](https://www.atwix.com/)
