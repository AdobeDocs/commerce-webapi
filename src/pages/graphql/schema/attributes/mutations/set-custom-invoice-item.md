---
title: setCustomAttributesOnInvoiceItem mutation
---

import CustomAttributesAvailability from '/src/_includes/graphql/custom-attribute-availability.md'

# setCustomAttributesOnInvoiceItem mutation

<CustomAttributesAvailability />

The `setCustomAttributesOnInvoiceItem` mutation sets custom attributes on an invoice item. The mutation accepts a invoice ID, invoice item ID, and an array of custom attribute key/value pairs. It returns the updated invoice.

To remove a custom attribute, rerun the mutation without the previously applied custom attribute.

## Syntax

```graphql
mutation {
  setCustomAttributesOnInvoiceItem(
    input: InvoiceItemCustomAttributesInput
  ){
    InvoiceOutput
  }
}
```

## Reference

The [`setCustomAttributesOnInvoiceItem`](https://developer.adobe.com/commerce/services/graphql/reference/saas-api/index.html#mutation-setCustomAttributesOnInvoiceItem) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example sets two custom attributes on an invoice item.

**Request:**

```graphql
mutation {
  setCustomAttributesOnInvoiceItem(
    input: {
      invoice_id: "MzQ="
      invoice_item_id: "1"
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
    "setCustomAttributesOnInvoiceItem": {
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
