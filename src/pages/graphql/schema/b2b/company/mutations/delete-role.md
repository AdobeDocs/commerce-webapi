---
title: deleteCompanyRole mutation
contributor_name: Atwix
contributor_link: https://www.atwix.com/
keywords:
  - B2B
---

import CommerceOnly from '/src/_includes/commerce-only.md'

<CommerceOnly />

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

* &#8203;<Edition name="saas" /> [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-deleteCompanyRole)

* &#8203;<Edition name="paas" /> [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-deleteCompanyRole)

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
