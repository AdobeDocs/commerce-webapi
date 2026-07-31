---
title: Set a company address as default
description: Describes the REST endpoint used to set a company address as the default billing or shipping address.
keywords:
  - B2B
  - REST
---

<Fragment src="../../includes/commerce-only.md"/>

# Set a company address as default

<InlineAlert variant="info" slots="text" />

This endpoint is part of the B2B Storefront Compatibility Package and is only available on [Adobe Commerce as a Cloud Service](https://experienceleague.adobe.com/en/docs/commerce/cloud-service/overview). Requests require an admin or integration token whose role includes the `Magento_CompanyAddressStorefrontCompatibility::default` ACL resource.

This endpoint sets a company address as the default billing or shipping address for its company, using the `setDefaultByAddressId` operation of the `companyDefaultAddressManagementV1` service. The address type (billing or shipping) is determined by the address itself, so the same endpoint is used for both.

**Service Name:**

`companyDefaultAddressManagementV1`

**REST Endpoint:**

```text
PUT /V1/company-addresses/:addressId/default
```

## Set a billing address as default

The following example sets billing address `12` as the default billing address for its company.

**Sample Usage:**

`PUT <host>/rest/<store_code>/V1/company-addresses/12/default`

<CodeBlock slots="heading, code" repeat="2" languages="JSON, JSON" />

#### Payload

```json
// none
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

## Set a shipping address as default

The following example sets shipping address `13` as the default shipping address for its company.

**Sample Usage:**

`PUT <host>/rest/<store_code>/V1/company-addresses/13/default`

<CodeBlock slots="heading, code" repeat="2" languages="JSON, JSON" />

#### Payload

```json
// none
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

## Read the default addresses for a company

After setting defaults, you can read them from the company's default billing and shipping endpoints:

```text
GET /V1/companies/:companyId/billingAddress
GET /V1/companies/:companyId/shippingAddress
```

## Notes

- The company address book must be enabled for the company, or the request fails with `400 Bad Request` and the message `Company address book is not enabled for this company.`
- Requesting the default billing or shipping address for a company that has none configured returns `404 Not Found` with the message `Default company address not found`.
