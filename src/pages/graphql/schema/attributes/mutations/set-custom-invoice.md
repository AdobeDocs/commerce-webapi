---
title: setCustomAttributesOnInvoice mutation
---

import CustomAttributesAvailability from '/src/_includes/graphql/custom-attribute-availability.md'

# setCustomAttributesOnInvoice mutation

<CustomAttributesAvailability />

The `setCustomAttributesOnInvoice` mutation sets custom attributes on a credit memo item. The mutation accepts a invoice ID and an array of custom attribute key/value pairs. It returns the updated invoice. All ID values are treated as strings.

To remove a custom attribute, rerun the mutation without the previously applied custom attribute.

## Syntax

```graphql
mutation {
  setCustomAttributesOnInvoice(
    input: InvoiceCustomAttributesInput
  ){    
    InvoiceOutput
  }
}
```

## Reference

The [`setCustomAttributesOnInvoice`](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-setCustomAttributesOnInvoice) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example sets two custom attributes on an invoice.

**Request:**

```graphql
mutation {
  setCustomAttributesOnInvoice(
    input: {
      invoice_id: "MzQ="
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
    invoice {
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
    "setCustomAttributesOnInvoice": {
      "invoice": {
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
