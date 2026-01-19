---
title: setQuoteTemplateExpirationDate mutation
edition: saas
keywords:
  - B2B
---

import CommerceOnly from '/src/_includes/commerce-only.md'

<CommerceOnly />

# setQuoteTemplateExpirationDate mutation

This mutation is part of the Storefront Compatibility Package / B2B Storefront Compatibility Package and is only available on [Adobe Commerce as a Cloud Service](https://experienceleague.adobe.com/en/docs/commerce/cloud-service/overview)

The `setQuoteTemplateExpirationDate` mutation can be used to set an expiration date for a negotiable quote, as it is not set by default. The mutation requires `template_id` and `expiration_date` as input parameters.

## Syntax

```graphql
{
    setQuoteTemplateExpirationDate(
        input: QuoteTemplateExpirationDateInput!
    ): NegotiableQuoteTemplate
}
```

## Example usage

The following example sets the expiration date for a negotiable quote.

**Request:**

```graphql
mutation {
    setQuoteTemplateExpirationDate(
    input: {
      template_id: "10"
      expiration_date: "2030-13-01"
    }
  ) {
      template_id
      expiration_date
  }
}
```

**Response:**

```json
{
  "data": {
    "setQuoteTemplateExpirationDate": {
      "template_id": "10",
      "expiration_date": "2030-13-01"
    }
  }
}
```
