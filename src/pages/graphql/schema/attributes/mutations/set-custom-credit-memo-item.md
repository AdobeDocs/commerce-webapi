---
title: setCustomAttributesOnCreditMemoItem mutation
---

import CustomAttributesAvailability from '/src/_includes/graphql/custom-attribute-availability.md'

# setCustomAttributesOnCreditMemoItem mutation

<CustomAttributesAvailability />

The `setCustomAttributesOnCreditMemoItem` mutation sets custom attributes on a credit memo item. The mutation accepts a credit memo ID, a credit memo item ID, and an array of custom attribute key/value pairs. It returns the updated credit memo item.  All ID values are treated as strings.

To remove a custom attribute, rerun the mutation without the previously applied custom attribute.

## Syntax

```graphql
mutation {
  setCustomAttributesOnCreditMemoItem(
    input: CreditMemoItemCustomAttributesInput
  ){
    CreditMemoOutput
  }
}
```

## Reference

The [`setCustomAttributesOnCreditMemoItem`](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-setCustomAttributesOnCreditMemoItem) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example sets two custom attributes on a credit memo item.

**Request:**

```graphql
mutation {
  setCustomAttributesOnCreditMemoItem(
    input: {
      credit_memo_id: "MzQ="
      credit_memo_item_id: "1"
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
    "setCustomAttributesOnCreditMemoItem": {
      "credit_memo": {
        "id": "MzQ=",
        "custom_attributes": [
          {
            "attribute_code": "attribute_one",
            "value": "value_one"
          }
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
