---
title: setCustomAttributesOnInvoiceItem mutation
description: This mutation is automatically available on Adobe Commerce as a Cloud Service (SaaS) projects. Adobe Commerce on-premises and Cloud infrastructure (PaaS) p...
---

# setCustomAttributesOnInvoiceItem mutation

<Fragment src="../../../../includes/graphql/custom-attribute-availability.md"/>

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

The `setCustomAttributesOnInvoiceItem` reference provides detailed information about the types and fields defined in this mutation.

* [Adobe Commerce as a Cloud Service](/reference/graphql/saas/index.md#setcustomattributesoninvoiceitem)

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
