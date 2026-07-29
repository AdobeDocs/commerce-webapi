---
title: Update a company address
description: Describes the REST endpoint used to update an existing company address.
keywords:
  - B2B
  - REST
---

<Fragment src="../../includes/commerce-only.md"/>

# Update a company address

This endpoint updates an existing company address using the `saveByAddressId` operation of the `companyAddressRepositoryV1` service.

<InlineAlert variant="info" slots="text" />

This endpoint is part of the B2B Storefront Compatibility Package and is only available on [Adobe Commerce as a Cloud Service](https://experienceleague.adobe.com/en/docs/commerce/cloud-service/overview). Requests require an admin or integration token whose role includes the `Magento_CompanyAddressStorefrontCompatibility::edit` ACL resource.

**Service Name:**

`companyAddressRepositoryV1`

**REST Endpoint:**

```text
PUT /V1/company-address/:addressId
```

See [Create a company address](create-address.md) for the full list of `CompanyAddressInterface` parameters.

## Update a company address

The following example updates the contact and street details of an existing address.

**Sample Usage:**

`PUT <host>/rest/<store_code>/V1/company-address/12`

<CodeBlock slots="heading, code" repeat="2" languages="JSON, JSON" />

#### Payload

```json
{
  "companyAddress": {
    "company_id": 2,
    "nickname": "Updated Nickname",
    "firstname": "Jane",
    "lastname": "Smith",
    "company": "Updated Corp",
    "street": [
      "456 Oak Ave"
    ],
    "city": "Dallas",
    "country_id": "US",
    "region_id": 57,
    "postcode": "75201",
    "telephone": "5559876543"
  }
}
```

#### Response

```json
{
  "company_address_id": 12,
  "company_id": 2,
  "type": 1,
  "nickname": "Updated Nickname",
  "firstname": "Jane",
  "lastname": "Smith",
  "company": "Updated Corp",
  "street": [
    "456 Oak Ave"
  ],
  "city": "Dallas",
  "country_id": "US",
  "region_id": 57,
  "region": {
    "region_id": 57,
    "region": "Texas",
    "region_code": "TX"
  },
  "postcode": "75201",
  "telephone": "5559876543",
  "custom_attributes": []
}
```

## Notes

- `type` is omitted from the payload above; when `type` is left out, the address keeps its existing type. Passing a `type` value that differs from the address's current type returns `400 Bad Request`.
- If `company_id` is included in the payload, it must match the company that already owns the address, or the request fails with `400 Bad Request` and the message `The company address does not belong to the specified company.`
- The company address book must be enabled for the company, or the request fails with `400 Bad Request` and the message `Company address book is not enabled for this company.`
- Clearing the default flag on the currently-default address is not handled here; use [Set a company address as default](set-default-address.md) to change which address is default.
