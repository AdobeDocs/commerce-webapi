---
title: setCustomAttributesOnNegotiableQuote mutation
description: This mutation is automatically available on Adobe Commerce as a Cloud Service (SaaS) projects. Adobe Commerce on-premises and Cloud infrastructure (PaaS) p...

---

<Fragment src="../../../../includes/saas-only.md"/>

# setCustomAttributesOnNegotiableQuote mutation

<Fragment src="../../../../includes/graphql/custom-attribute-availability.md"/>

The `setCustomAttributesOnNegotiableQuote` mutation sets custom attributes on a negotiable quote. The mutation accepts a negotiable quote ID and an array of custom attribute key/value pairs. It returns the updated negotiable quote. All ID values are treated as strings.

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

The [`setCustomAttributesOnNegotiableQuote`](/reference/graphql/saas/mutations.md#setcustomattributesonnegotiablequote) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example sets two custom attributes on a negotiable quote.

**Request:**

```graphql
mutation {
  setCustomAttributesOnNegotiableQuote(
    input: {
      quote_uid: "xCA4wSZEHsb5QbFiKfoq5k1Dk8vIPBgb"
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
    quote {
      uid
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
      "quote": {
        "uid": "xCA4wSZEHsb5QbFiKfoq5k1Dk8vIPBgb",
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
