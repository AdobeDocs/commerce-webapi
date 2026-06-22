---
title: deleteCompanyUser mutation
description: Use the deleteCompanyUser mutation to deactivate the specified company user.
keywords:
  - B2B
---

<Fragment src="../../../../../includes/paas-only.md"/>

<Fragment src="../../../../../includes/commerce-only.md"/>

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

The [`deleteCompanyUser`](/reference/graphql/latest/index.md#deletecompanyuser) reference provides detailed information about the types and fields defined in this mutation.

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

| Error | Description |
| --- | --- |
| `You do not have authorization to perform this action.` | The user with the ID provided in the `input`.`id` argument is not available to your company, or you do not have the necessary permissions to perform this operation. |
| `You cannot delete yourself.` | You must specify a company user other than yourself. |
| `A customer with the same email address already exists in an associated website` | The email provided in the `input`.`email` argument belongs to another user. |
| `The user XXX is the company admin and cannot be set to inactive. You must set another user as the company admin first.` | The company owner cannot be deactivated. You must set another user as the company admin first. |

<Edition slots="text" backgroundcolor="gray"/>

[Thanks to Atwix for contributing this topic!](https://www.atwix.com/)
