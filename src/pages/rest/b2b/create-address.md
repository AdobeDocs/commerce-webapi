---
title: Create a company address
description: Describes the REST endpoint used to create a company address.
keywords:
  - B2B
  - REST
---

<Fragment src="../../includes/commerce-only.md"/>

# Create a company address

This endpoint creates a new billing or shipping address for a company using the `saveForCompany` operation of the `companyAddressRepositoryV1` service.

<InlineAlert variant="info" slots="text" />

This endpoint is part of the B2B Storefront Compatibility Package and is only available on [Adobe Commerce as a Cloud Service](https://experienceleague.adobe.com/en/docs/commerce/cloud-service/overview). Requests require an admin or integration token whose role includes the `Magento_CompanyAddressStorefrontCompatibility::add` ACL resource.

**Service Name:**

`companyAddressRepositoryV1`

**REST Endpoint:**

```text
POST /V1/company/:companyId/address
```

**CompanyAddressInterface Parameters:**

The following table lists the parameters defined in `CompanyAddressInterface`.

| Name | Description | Format | Requirements |
| --- | --- | --- | --- |
| `company_address_id` | System-generated address ID | integer | Read only. Omit on create. |
| `company_id` | The ID of the company the address belongs to | integer | Optional. Derived from the `:companyId` path parameter. |
| `type` | `1` - Billing\<br/\>`2` - Shipping | integer | Required to create an address. |
| `nickname` | A friendly label for the address | string | Optional |
| `firstname` | Contact first name | string | Required |
| `lastname` | Contact last name | string | Required |
| `middlename` | Contact middle name | string | Optional |
| `prefix` | Name prefix (e.g. `Mr.`) | string | Optional |
| `suffix` | Name suffix (e.g. `Jr.`) | string | Optional |
| `company` | Company name shown on the address | string | Required only if configured as a required attribute. |
| `street` | Street address lines | Array[string] | Required. The first line must not be empty. |
| `city` | City | string | Required |
| `country_id` | Two-letter ISO country code | string | Required. Must be an allowed country for the store. |
| `region_id` | Directory region ID | integer | Optional. When provided, `region` is resolved automatically. |
| `region` | Resolved region information | Object | Read only in the response. Contains `region_id`, `region`, and `region_code`. |
| `postcode` | ZIP or postal code | string | Required unless the country has an optional ZIP code. |
| `telephone` | Contact phone number | string | Required only if configured as a required attribute. |
| `fax` | Contact fax number | string | Required only if configured as a required attribute. |
| `vat_id` | VAT identification number | string | Optional |
| `custom_attributes` | Custom EAV attributes for company addresses | Array[Object] | Optional |

## Create a company billing address

The following example creates a billing address for company `2`.

**Sample Usage:**

`POST <host>/rest/<store_code>/V1/company/2/address`

<CodeBlock slots="heading, code" repeat="2" languages="JSON, JSON" />

#### Payload

```json
{
  "companyAddress": {
    "type": 1,
    "nickname": "HQ Billing",
    "firstname": "John",
    "lastname": "Doe",
    "company": "Acme Corp",
    "street": [
      "123 Main St"
    ],
    "city": "Austin",
    "country_id": "US",
    "region_id": 57,
    "postcode": "78701",
    "telephone": "5551234567"
  }
}
```

#### Response

```json
{
  "company_address_id": 12,
  "company_id": 2,
  "type": 1,
  "nickname": "HQ Billing",
  "firstname": "John",
  "lastname": "Doe",
  "company": "Acme Corp",
  "street": [
    "123 Main St"
  ],
  "city": "Austin",
  "country_id": "US",
  "region_id": 57,
  "region": {
    "region_id": 57,
    "region": "Texas",
    "region_code": "TX"
  },
  "postcode": "78701",
  "telephone": "5551234567",
  "custom_attributes": []
}
```

## Create a company shipping address

The following example creates a shipping address for the same company.

**Sample Usage:**

`POST <host>/rest/<store_code>/V1/company/2/address`

<CodeBlock slots="heading, code" repeat="2" languages="JSON, JSON" />

#### Payload

```json
{
  "companyAddress": {
    "type": 2,
    "nickname": "Warehouse",
    "firstname": "John",
    "lastname": "Doe",
    "company": "Acme Corp",
    "street": [
      "500 Distribution Way"
    ],
    "city": "Austin",
    "country_id": "US",
    "region_id": 57,
    "postcode": "78702",
    "telephone": "5551234567"
  }
}
```

#### Response

```json
{
  "company_address_id": 13,
  "company_id": 2,
  "type": 2,
  "nickname": "Warehouse",
  "firstname": "John",
  "lastname": "Doe",
  "company": "Acme Corp",
  "street": [
    "500 Distribution Way"
  ],
  "city": "Austin",
  "country_id": "US",
  "region_id": 57,
  "region": {
    "region_id": 57,
    "region": "Texas",
    "region_code": "TX"
  },
  "postcode": "78702",
  "telephone": "5551234567",
  "custom_attributes": []
}
```

## Notes

- `type` is required when creating an address and cannot be changed afterward.
- The company address book must be enabled for the company (`is_company_address_book_enabled`), or the request fails with `400 Bad Request` and the message `Company address book is not enabled for this company.`
- Missing required fields (e.g. `firstname`) return `400 Bad Request` with a message identifying the missing field.
