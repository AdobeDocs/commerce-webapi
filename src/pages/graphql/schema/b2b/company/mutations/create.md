---
title: createCompany mutation
keywords:
  - B2B
---

# createCompany mutation

The `createCompany` mutation creates a company at the request of either a customer or a guest. The company definition includes the first name, last name, and email address of the company administrator. The email address assigned to the account cannot already exist in the system. Therefore, a customer attempting to create a company cannot use the same email address they used to log in to the storefront.

The company administrator cannot log in or perform additional company-related tasks until an administrator approves the request to create a company.

## Syntax

```graphql
mutation {
  createCompany(
    input: CompanyCreateInput!
  ) {
    CreateCompanyOutput
  }
}
```

## Reference

The [`createCompany`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-createCompany) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following call creates a company on behalf of a guest.

**Request:**

```graphql
mutation {
  createCompany(input: {
    company_name: "TestCo"
    company_email: "tgarofalo@example.com"
    company_admin: {
      email: "tgarofalo@example.com"
      firstname: "Taina"
      lastname:"Garofalo"
    }
    legal_name: "TestCo Inc."
    legal_address: {
      street: [
        "100 Big Oak Tree Dr"
      ]
      city: "San Francisco"
      region: {
        region_code: "CA"
      }
      postcode: "99999"
      country_id: US
      telephone: "555 867-5309"
    }
  }){
    company {
      id
      name
      company_admin {
        email
        firstname
        lastname
      }
      legal_address {
        street
        city
        region {
          region_code
          region_id
        }
        postcode
        telephone
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "createCompany": {
      "company": {
        "id": "MQ==",
        "name": "TestCo",
        "company_admin": {
          "email": "tgarofalo@example.com",
          "firstname": "Taina",
          "lastname": "Garofalo"
        },
        "legal_address": {
          "street": [
            "100 Big Oak Tree Dr"
          ],
          "city": "San Francisco",
          "region": {
            "region_code": "CA",
            "region_id": 12
          },
          "postcode": "99999",
          "telephone": "555 867-5309"
        }
      }
    }
  }
}
```

## Related topics

*  [updateCompany mutation](update.md)
