---
title: updateCompany mutation
keywords:
  - B2B
---

import CommerceOnly from '/src/_includes/commerce-only.md'

<CommerceOnly />

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

The [`updateCompany`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-updateCompany) reference provides detailed information about the types and fields defined in this mutation.

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
