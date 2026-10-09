---
title: updateCompanyAddress mutation
description: The updateCompanyAddress mutation allows a company admin or user who is assigned a role that contains the Magento_CompanyAddressStorefrontCompatibility::edit permission to update an existing company address.
keywords:
  - B2B
---

<Fragment src="/includes/commerce-only.md"/>

# updateCompanyAddress mutation

<Fragment src="/includes/scp-b2b-mutation.md" />

The `updateCompanyAddress` mutation allows a company admin or user who is assigned a role that contains the `Magento_CompanyAddressStorefrontCompatibility::edit` permission to update an existing company address.

This mutation requires a valid [customer authentication token](../../../customer/mutations/generate-token.md).

## Syntax

```graphql
mutation {
    updateCompanyAddress(
        id: ID!
        input: CompanyAddressInput!
    ) {
        CompanyAddress
    }
}
```

## Reference

The [`updateCompanyAddress`](/reference/graphql/saas/mutations.md#updatecompanyaddress) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

### Update a company address

The following example updates an existing company address.

**Request:**

```graphql
mutation UpdateCompanyAddress {
    updateCompanyAddress(
        id: "MTI="
        input: {
            nickname: "Updated Nickname"
            address_type: BILLING
            is_default: false
            firstname: "Jane"
            lastname: "Smith"
            company: "Updated Corp"
            street: ["456 Oak Ave"]
            city: "Dallas"
            country_code: US
            region: {
                region_id: 57
                region: "Texas"
                region_code: "TX"
            }
            postcode: "75201"
            telephone: "5559876543"
        }
    ) {
        id
        nickname
        address_type
        is_default
        firstname
        lastname
        company
        city
        street
        country_code
        postcode
        telephone
    }
}
```

**Response:**

```json
{
  "data": {
    "updateCompanyAddress": {
      "id": "MTI=",
      "nickname": "Updated Nickname",
      "address_type": "BILLING",
      "is_default": false,
      "firstname": "Jane",
      "lastname": "Smith",
      "company": "Updated Corp",
      "city": "Dallas",
      "street": ["456 Oak Ave"],
      "country_code": "US",
      "postcode": "75201",
      "telephone": "5559876543"
    }
  }
}
```

Clearing default via `is_default`: false on an address that is currently default requires set-default ACL (same as setDefaultCompanyAddress).
