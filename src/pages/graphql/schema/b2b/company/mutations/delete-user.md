---
title: deleteCompanyUser mutation
description: Use the deleteCompanyUser mutation to deactivate the specified company user.
keywords:
  - B2B
---

<Edition slots="text" backgroundcolor="blue"/>

[PaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions)

<Edition slots="text"/>

[Thanks to Atwix for contributing this topic!](https://www.atwix.com/)

| |
|:--|
| \<span style="display:inline-block; vertical-align:middle;"\>\<img src="../pages/_images/adobe-logo.svg" alt="Adobe Commerce feature" style="height:20px; margin-right:8px; vertical-align:middle;" /\>\</span\>\<span style="display:inline-block; vertical-align:middle;"\>\<strong\>Exclusive feature only in Adobe Commerce\</strong\> (\<a href="https://experienceleague.adobe.com/docs/commerce-admin/user-guides/home.html#product-editions"\>Learn more\</a\>)\</span\> |

# deleteCompanyUser mutation

Use the `deleteCompanyUser` mutation to deactivate the specified company user.

You can get the user ID with the [`company`](../queries/company.md) query.

This mutation requires a valid [customer authentication token](../../../customer/mutations/generate-token.md).

## Syntax

```graphql
mutation {
    deleteCompanyUser(
        id: ID!
    ) {
        DeleteCompanyUserOutput
    }
}
```

## Reference

The [`deleteCompanyUser`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-deleteCompanyUser) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example deactivates the user specified in the `id` attribute.

**Request:**

```graphql
mutation {
  deleteCompanyUser(
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
    "deleteCompanyUser": {
      "success": true
    }
  }
}
```

## Errors

Error | Description
--- | ---
`You do not have authorization to perform this action.` | The user with the ID provided in the `input`.`id` argument is not available to your company, or you do not have the necessary permissions to perform this operation.
`You cannot delete yourself.` | You must specify a company user other than yourself.
`A customer with the same email address already exists in an associated website` | The email provided in the `input`.`email` argument belongs to another user.
`The user XXX is the company admin and cannot be set to inactive. You must set another user as the company admin first.` | The company owner cannot be deactivated. You must set another user as the company admin first.
