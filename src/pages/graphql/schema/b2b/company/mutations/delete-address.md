---
title: deleteCompanyAddress mutation
description: The deleteCompanyAddress mutation allows a company admin or user who is assigned a role that contains the Magento_CompanyAddressStorefrontCompatibility::delete permission to delete an existing company address.
keywords:
  - B2B
---

<Fragment src="../../../../../includes/commerce-only.md"/>

# deleteCompanyAddress mutation

<InlineAlert variant="info" slots="text1" />

This mutation is part of the B2B Storefront Compatibility Package and is only available on [Adobe Commerce as a Cloud Service](https://experienceleague.adobe.com/en/docs/commerce/cloud-service/overview).

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
