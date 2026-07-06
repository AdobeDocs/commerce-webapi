---
title: setDefaultCompanyAddress mutation
description: The setDefaultCompanyAddress mutation allows a company admin or user who is assigned a role that contains the Magento_CompanyAddressStorefrontCompatibility::default permission to set a company address based on the provided address UID as the default billing or shipping address for the company.
keywords:
  - B2B
---

<Fragment src="../../../../../includes/commerce-only.md"/>

# setDefaultCompanyAddress mutation

<InlineAlert variant="info" slots="text1" />

This mutation is part of the B2B Storefront Compatibility Package and is only available on [Adobe Commerce as a Cloud Service](https://experienceleague.adobe.com/en/docs/commerce/cloud-service/overview).

The `setDefaultCompanyAddress` mutation allows a company admin or user who is assigned a role that contains the `Magento_CompanyAddressStorefrontCompatibility::default` permission to set a company address based on the provided address UID as the default billing or shipping address for the company.

This mutation requires a valid [customer authentication token](../../../customer/mutations/generate-token.md).

## Syntax

```graphql
mutation {
    setDefaultCompanyAddress(
        id: ID!
    ) {
        CompanyAddress
    }
}
```

## Example usage

### Set a company address as default (BILLING/SHIPPING)

The following example sets an existing company address as default.

**Request:**

```graphql
mutation SetDefaultCompanyAddress {
    setDefaultCompanyAddress(id: "MTI=") {
        id
        address_type
        is_default
        nickname
        city
        country_code
    }
}
```

**Response (Billing):**

```json
{
  "data": {
    "setDefaultCompanyAddress": {
      "id": "MTI=",
      "address_type": "BILLING",
      "is_default": true,
      "nickname": "HQ Billing",
      "city": "Austin",
      "country_code": "US"
    }
  }
}
```
**Response (Shipping):**

```json
{
  "data": {
    "setDefaultCompanyAddress": {
      "id": "MTM=",
      "address_type": "SHIPPING",
      "is_default": true,
      "nickname": "Warehouse",
      "city": "Austin",
      "country_code": "US"
    }
  }
}
```

After setting defaults, you can read them from the Company type:

```graphql
{
    company {
        default_billing_address { id address_type is_default }
        default_shipping_address { id address_type is_default }
    }
}
```