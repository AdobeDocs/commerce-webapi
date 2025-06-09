---
title: setCustomAttributesOnNegotiableQuote mutation
edition: saas
---

# setCustomAttributesOnNegotiableQuote mutation

<InlineAlert variant="important" slots="text" />

This mutation is automatically available on [Adobe Commerce as a Cloud Service](https://experienceleague.adobe.com/en/docs/commerce/cloud-service/overview) (SaaS) projects. Adobe Commerce on-premises and Cloud infrastructure (PaaS) projects can [install separate modules](./index.md) to provide this functionality.

The `setCustomAttributesOnNegotiableQuote` mutation sets custom attributes on a credit memo item. The mutation accepts a negotiable quote ID and an array of custom attribute key/value pairs. It returns the updated negotiable quote. All ID values are treated as strings.

To remove a custom attribute, rerun the mutation without the previously applied custom attribute.

## Syntax

```graphql
mutation {
  setCustomAttributesOnNegotiableQuote(
    input: SetCustomAttributesOnNegotiableQuoteInput
  ){    
    SetCustomAttributesOnNegotiableQuoteOutput
  }
}
```

## Reference

The [`setCustomAttributesOnNegotiableQuote`](https://developer.adobe.com/commerce/services/graphql/reference/saas-api/index.html#mutation-setCustomAttributesOnNegotiableQuote) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example sets two custom attributes on a negotiable quote.

**Request:**

```graphql
mutation {
  setCustomAttributesOnNegotiableQuote(
    input: {
      negotiable_quote_id: "xCA4wSZEHsb5QbFiKfoq5k1Dk8vIPBgb"
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
    negotiable_quote {
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
    "setCustomAttributesOnNegotiableQuote": {
      "negotiable_quote": {
        "id": "xCA4wSZEHsb5QbFiKfoq5k1Dk8vIPBgb",
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
