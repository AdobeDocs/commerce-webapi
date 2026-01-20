---
title: setCustomAttributesOnCreditMemo mutation
---

import CustomAttributesAvailability from '/src/_includes/graphql/custom-attribute-availability.md'

# setCustomAttributesOnCreditMemo mutation

<CustomAttributesAvailability />

The `setCustomAttributesOnCreditMemo` mutation sets custom attributes on a credit memo. The mutation accepts a credit memo ID and an array of custom attribute key/value pairs. It returns the updated credit memo. All ID values are treated as strings.

To remove a custom attribute, rerun the mutation without the previously applied custom attribute.

## Syntax

```graphql
mutation {
  setCustomAttributesOnCreditMemo(
    input: CreditMemoCustomAttributesInput
  ){    
    CreditMemoOutput
  }
}
```

## Reference

The [`setCustomAttributesOnCreditMemo`](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-setCustomAttributesOnCreditMemo) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example sets two custom attributes on a credit memo with the ID `MzQ=`.

**Request:**

```graphql
mutation {
  setCustomAttributesOnCreditMemo(
     input: {
       credit_memo_id: "MzQ=",
       custom_attributes: [
        {
          attribute_code: "attribute_one",
          value: "value_one"
        },
        {
          attribute_code: "attribute_two",
          value: "value_two"
        },
      ]
     }
    
  ), {
     credit_memo {
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
    "setCustomAttributesOnCreditMemo": {
      "credit_memo": {
        "id": "MzQ=",
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
