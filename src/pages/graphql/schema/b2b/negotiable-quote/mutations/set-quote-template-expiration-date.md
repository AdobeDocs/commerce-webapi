---
title: setQuoteTemplateExpirationDate mutation
description: This mutation is part of the B2B Storefront Compatibility Package and is only available on Adobe Commerce as a Cloud Service.
edition: saas
keywords:
  - B2B
---

| |
|:--|
| \<span style="display:inline-block; vertical-align:middle;"\>\<img src="../pages/_images/adobe-logo.svg" alt="Adobe Commerce feature" style="height:20px; margin-right:8px; vertical-align:middle;" /\>\</span\>\<span style="display:inline-block; vertical-align:middle;"\>\<strong\>Exclusive feature only in Adobe Commerce\</strong\> (\<a href="https://experienceleague.adobe.com/docs/commerce-admin/user-guides/home.html#product-editions"\>Learn more\</a\>)\</span\> |

# setQuoteTemplateExpirationDate mutation

<InlineAlert variant="info" slots="text1" />

This mutation is part of the B2B Storefront Compatibility Package and is only available on [Adobe Commerce as a Cloud Service](https://experienceleague.adobe.com/en/docs/commerce/cloud-service/overview).

The `setQuoteTemplateExpirationDate` mutation can be used to set an expiration date for a negotiable quote, as it is not set by default. The mutation requires `template_id` and `expiration_date` as input parameters.

## Syntax

```graphql
{
    setQuoteTemplateExpirationDate(
        input: QuoteTemplateExpirationDateInput!
    ): NegotiableQuoteTemplate
}
```

## Reference

The [`setQuoteTemplateExpirationDate`](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-setQuoteTemplateExpirationDate) reference provides detailed information about the types and fields defined in this mutation.

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

