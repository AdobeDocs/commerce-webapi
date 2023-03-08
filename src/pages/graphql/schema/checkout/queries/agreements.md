---
title: checkoutAgreements query | Commerce Web APIs
contributor_name: Something Digital
contributor_link: https://www.somethingdigital.com/
---

# checkoutAgreements query

The `checkoutAgreements` query retrieves checkout agreements. The query will always return an empty array when the **Enable Terms and Conditions** option is set to **No**.  (The config path is `checkout/options/enable_agreements`.)

The `content` field can contain HTML or plain text. Use the `is_html` field determine the text type.

## Syntax

`{checkoutAgreements [CheckoutAgreement]}`

## Reference

The [`checkoutAgreements`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-checkoutAgreements) reference provides detailed information about the types and fields defined in this query.

## Example usage

The following query returns enabled checkout agreements.

**Request:**

```graphql
{
  checkoutAgreements {
    agreement_id
    checkbox_text
    content
    content_height
    is_html
    mode
    name
  }
}
```

**Response:**

```json
{
  "data": {
    "checkoutAgreements": [
      {
        "agreement_id": 1,
        "checkbox_text": "I agree to the terms of sale",
        "content": "<p><strong>Agreement Contents</strong></p>\r\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>",
        "content_height": "22px",
        "is_html": true,
        "mode": "AUTO",
        "name": "My Agreement"
      }
    ]
  }
}
```
