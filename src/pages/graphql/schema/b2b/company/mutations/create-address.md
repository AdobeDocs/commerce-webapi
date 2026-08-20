---
title: createCompanyAddress mutation
description: The createCompanyAddress mutation allows a company admin or user who is assigned a role that contains the Magento_CompanyAddressStorefrontCompatibility::add permission to create a new company address.
keywords:
  - B2B
---

<Fragment src="/includes/commerce-only.md"/>

# createCompanyAddress mutation

<Fragment src="/includes/scp-b2b-mutation.md" />

The `createCompanyAddress` mutation allows a company admin or user who is assigned a role that contains the `Magento_CompanyAddressStorefrontCompatibility::add` permission to create a new company address.

This mutation requires a valid [customer authentication token](../../../customer/mutations/generate-token.md).

## Syntax

```graphql
mutation {
    createCompanyAddress(
        input: CompanyAddressInput!
    ) {
        CompanyAddress
    }
}
```

## Example usage

### Create a company address (type: billing)

The following example creates a company billing address.

**Request:**

```graphql
mutation CreateCompanyAddress {
    createCompanyAddress(
        input: {
            nickname: "HQ Billing"
            address_type: BILLING
            is_default: true
            firstname: "John"
            lastname: "Doe"
            middlename: "Q"
            prefix: "Mr."
            suffix: "Jr."
            company: "Company name"
            street: ["123 Main St"]
            city: "Austin"
            country_code: US
            region: {
                region_id: 57
                region: "Texas"
                region_code: "TX"
            }
            postcode: "78701"
            telephone: "5551234567"
            fax: "5551234568"
            vat_id: "US123456789"
            custom_attributes: [
                { attribute_code: "my_custom_attr", value: "custom value" }
            ]
        }
    ) {
        id
        nickname
        company_id
        address_type
        is_default
        firstname
        lastname
        middlename
        prefix
        suffix
        company
        street
        city
        country_code
        region_id
        region {
            region_id
            region
            region_code
        }
        postcode
        telephone
        fax
        vat_id
        custom_attributes {
            code
            ... on AttributeValue {
                value
            }
        }
    }
}
```

**Response:**

```json
{
  "data": {
    "createCompanyAddress": {
      "id": "MTI=",
      "nickname": "HQ Billing",
      "company_id": "Mw==",
      "address_type": "BILLING",
      "is_default": true,
      "firstname": "John",
      "lastname": "Doe",
      "middlename": "Q",
      "prefix": "Mr.",
      "suffix": "Jr.",
      "company": "Company name",
      "street": ["123 Main St"],
      "city": "Austin",
      "country_code": "US",
      "region_id": 57,
      "region": {
        "region_id": 57,
        "region": "Texas",
        "region_code": "TX"
      },
      "postcode": "78701",
      "telephone": "5551234567",
      "fax": "5551234568",
      "vat_id": "US123456789",
      "custom_attributes": []
    }
  }
}
```

### Create a company address (type: shipping)

The following example creates a company billing address.

**Request:**

```graphql
mutation CreateCompanyAddress {
    createCompanyAddress(
        input: {
            nickname: "HQ Shipping"
            address_type: SHIPPING
            is_default: true
            firstname: "John"
            lastname: "Doe"
            middlename: "Q"
            prefix: "Mr."
            suffix: "Jr."
            company: "Company name"
            street: ["123 Main St"]
            city: "Austin"
            country_code: US
            region: {
                region_id: 57
                region: "Texas"
                region_code: "TX"
            }
            postcode: "78701"
            telephone: "5551234567"
            fax: "5551234568"
            vat_id: "US123456789"
            custom_attributes: [
                { attribute_code: "my_custom_attr", value: "custom value" }
            ]
        }
    ) {
        id
        nickname
        company_id
        address_type
        is_default
        firstname
        lastname
        middlename
        prefix
        suffix
        company
        street
        city
        country_code
        region_id
        region {
            region_id
            region
            region_code
        }
        postcode
        telephone
        fax
        vat_id
        custom_attributes {
            code
            ... on AttributeValue {
                value
            }
        }
    }
}
```

**Response:**

```json
{
  "data": {
    "createCompanyAddress": {
      "id": "MTM=",
      "nickname": "HQ Shipping",
      "company_id": "Mw==",
      "address_type": "SHIPPING",
      "is_default": true,
      "firstname": "John",
      "lastname": "Doe",
      "middlename": "Q",
      "prefix": "Mr.",
      "suffix": "Jr.",
      "company": "Company name",
      "street": ["123 Main St"],
      "city": "Austin",
      "country_code": "US",
      "region_id": 57,
      "region": {
        "region_id": 57,
        "region": "Texas",
        "region_code": "TX"
      },
      "postcode": "78701",
      "telephone": "5551234567",
      "fax": "5551234568",
      "vat_id": "US123456789",
      "custom_attributes": []
    }
  }
}
```

## Errors

| Error | Description |
| --- | --- |
| `Customer is not a company user.` | Not authenticated or not a company user |
| `Company context is required.` | Missing `X-Adobe-Company` header |
| `Company address book is not enabled for this company.` | Address book disabled for company |
| `You do not have authorization to perform this action.` | Missing add or set-default ACL |
