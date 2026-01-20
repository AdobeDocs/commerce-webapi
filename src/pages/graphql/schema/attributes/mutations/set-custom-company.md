---
title: setCustomAttributesOnCompany mutation
edition: saas
---

import CustomAttributesAvailability from '/src/_includes/graphql/custom-attribute-availability.md'

# setCustomAttributesOnCompany mutation

<CustomAttributesAvailability />

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

The [`setCustomAttributesOnCompany`](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-setCustomAttributesOnCompany) reference provides detailed information about the types and fields defined in this mutation.

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
