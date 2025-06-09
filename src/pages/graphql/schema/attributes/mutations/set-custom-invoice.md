---
title: setCustomAttributesOnInvoice mutation
---

# setCustomAttributesOnInvoice mutation

<InlineAlert variant="important" slots="text" />

This mutation is automatically available on [Adobe Commerce as a Cloud Service](https://experienceleague.adobe.com/en/docs/commerce/cloud-service/overview) (SaaS) projects. Adobe Commerce on-premises and Cloud infrastructure (PaaS) projects can [install separate modules](./index.md) to provide this functionality.

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

The [`setCustomAttributesOnInvoice`](https://developer.adobe.com/commerce/services/graphql/reference/saas-api/index.html#mutation-setCustomAttributesOnInvoice) reference provides detailed information about the types and fields defined in this mutation.

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
