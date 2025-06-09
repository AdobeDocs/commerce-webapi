---
title: setCustomAttributesOnCompany mutation
edition: saas
---

# setCustomAttributesOnCompany mutation

<InlineAlert variant="important" slots="text" />

This mutation is automatically available on [Adobe Commerce as a Cloud Service](https://experienceleague.adobe.com/en/docs/commerce/cloud-service/overview) (SaaS) projects. Adobe Commerce on-premises and Cloud infrastructure (PaaS) projects can [install separate modules](./index.md) to provide this functionality.

The `setCustomAttributesOnCompany` mutation sets custom attributes on a company. The mutation accepts a company ID and an array of custom attribute key/value pairs. It returns the updated `Company` object.  All ID values are treated as strings.

To remove a custom attribute, rerun the mutation without the previously applied custom attribute.

## Syntax

```graphql
mutation {
  setCustomAttributesOnCompany(
    input: SetCustomAttributesOnCompanyInput
  ){    
    SetCustomAttributesOnCompanyOutput
  }
}
```

## Reference

The [`setCustomAttributesOnCompany`](https://developer.adobe.com/commerce/services/graphql/reference/saas-api/index.html#mutation-setCustomAttributesOnCompany) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example sets two custom attributes on a company.

**Request:**

```graphql
mutation {
  setCustomAttributesOnCompany(
    input: {
      company_id: "MQ=="
      custom_attributes: [
        {
          attribute_code: "attribute_one"
          value: "value_one"
        },
        {
          attribute_code: "attribute_two"
          value: "value_two"
        }
      ]
    }
  ) {
    company {
      id
      custom_attributes {
        attribute_code
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
    "setCustomAttributesOnCompany": {
      "company": {
        "id": "MQ==",
        "custom_attributes": [
          {
            "attribute_code": "attribute_one",
            "value": "value_one"
          },
          {
            "attribute_code": "attribute_two",
            "value": "value_two"
          }
        ]
      }
    }
  }
}
```
