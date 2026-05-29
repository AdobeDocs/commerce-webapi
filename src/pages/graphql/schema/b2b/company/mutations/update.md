---
title: updateCompany mutation
description: The updateCompany mutation allows you to update a company's address as well as top-level string attributes such as the name, legal name, and email. You can...
keywords:
  - B2B
---

| |
|:--|
| ![Adobe Commerce feature](../../../../../images/adobe-logo.svg) **Exclusive feature only in Adobe Commerce** ([Learn more](https://experienceleague.adobe.com/docs/commerce-admin/user-guides/home.html#product-editions)) |

# updateCompany mutation

The `updateCompany` mutation allows you to update a company's address as well as top-level string attributes such as the name, legal name, and email. You cannot update the administrator or other objects such as teams, roles, or resources with this mutation.

This mutation requires a valid [customer authentication token](../../../customer/mutations/generate-token.md).

## Syntax

```graphql
mutation {
  updateCompany(
    input: CompanyUpdateInput!
  ) {
    UpdateCompanyOutput
  }
}
```

## Reference

The `updateCompany` reference provides detailed information about the types and fields defined in this mutation.

* [SaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-updateCompany)

* [PaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-updateCompany)

## Example usage

The following call updates the legal address of a company

**Request:**

```graphql
mutation {
  updateCompany(
    input: {
      legal_address: {
        street: ["265 Cambridge Ave"]
        city: "Palo Alto"
        region: {
          region_code:"CA"
          region_id: 12
        }
        postcode: "94306"
      }
    }
  ) {
    company {
      legal_address {
        street
        city
        region {
          region_code
        }
        postcode
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "updateCompany": {
      "company": {
        "legal_address": {
          "street": [
            "265 Cambridge Ave"
          ],
          "city": "Palo Alto",
          "region": {
            "region_code": "CA"
          },
          "postcode": "94306"
        }
      }
    }
  }
}
```

## Related topics

*  [createCompany mutation](create.md)
