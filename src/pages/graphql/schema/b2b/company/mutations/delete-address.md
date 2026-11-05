---
title: deleteCompanyAddress mutation
description: Delete a company address with the deleteCompanyAddress GraphQL mutation in Adobe Commerce. Learn about required permissions, input fields, and error responses.
keywords:
  - B2B
---

<Fragment src="/_includes/commerce-only.md"/>

# deleteCompanyAddress mutation

<Fragment src="/_includes/scp-b2b-mutation.md" />

The `deleteCompanyAddress` mutation allows a company admin or user who is assigned a role that contains the `Magento_CompanyAddressStorefrontCompatibility::delete` permission to delete an existing company address using a provided company UID.

This mutation requires a valid [customer authentication token](../../../customer/mutations/generate-token.md).

## Syntax

```graphql
mutation {
    deleteCompanyAddress(
        id: ID!
    ) {
        Boolean
    }
}
```

## Reference

The [`deleteCompanyAddress`](/reference/graphql/saas/mutations.md#deletecompanyaddress) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

### Delete a company address

The following example deletes an existing company address.

**Request:**

```graphql
mutation DeleteCompanyAddress {
    deleteCompanyAddress(id: "MTI=")
}
```

**Response:**

```json
{
  "data": {
    "deleteCompanyAddress": true
  }
}
```
