---
title: Delete a company address
description: Describes the REST endpoint used to delete an existing company address.
keywords:
  - B2B
  - REST
---

<Fragment src="../../includes/commerce-only.md"/>

# Delete a company address

<InlineAlert variant="info" slots="text" />

This endpoint is part of the B2B Storefront Compatibility Package and is only available on [Adobe Commerce as a Cloud Service](https://experienceleague.adobe.com/en/docs/commerce/cloud-service/overview). Requests require an admin or integration token whose role includes the `Magento_CompanyAddressStorefrontCompatibility::delete` ACL resource.

This endpoint deletes an existing company address using the `deleteById` operation of the `companyAddressRepositoryV1` service.

**Service Name:**

`companyAddressRepositoryV1`

**REST Endpoint:**

```text
DELETE /V1/company-address/:addressId
```

## Delete a company address

The following example deletes company address `12`.

**Sample Usage:**

`DELETE <host>/rest/<store_code>/V1/company-address/12`

<CodeBlock slots="heading, code" repeat="2" languages="JSON, JSON" />

#### Payload

```json
// none
```

#### Response

```json
// `true`, indicating the request was successful
```

## Notes

- A subsequent `GET /V1/company-address/12` returns `404 Not Found` after the address is deleted.
- Deleting an address that does not exist returns `404 Not Found`.
