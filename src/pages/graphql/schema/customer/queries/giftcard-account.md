---
title: giftCardAccount query
description: The giftCardAccount query returns information for a specific gift card.
---

| |
|:--|
| \<span style="display:inline-block; vertical-align:middle;"\>\<img src="../../../../images/adobe-logo.svg" alt="Adobe Commerce feature" style="height:20px; margin-right:8px; vertical-align:middle;" /\>\</span\>\<span style="display:inline-block; vertical-align:middle;"\>\<strong\>Exclusive feature only in Adobe Commerce\</strong\> (\<a href="https://experienceleague.adobe.com/docs/commerce-admin/user-guides/home.html#product-editions"\>Learn more\</a\>)\</span\> |

# giftCardAccount query

The `giftCardAccount` query returns information for a specific gift card.

## Syntax

 `giftCardAccount(code: String!): GiftCardAccount`

## Reference

The `giftCardAccount` reference provides detailed information about the types and fields defined in this query.

* [SaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#query-giftCardAccount)

* [PaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-giftCardAccount)

## Example usage

The following example returns information about the `01PNC9L76H4H` gift card code.

**Request:**

```graphql
query {
  giftCardAccount(input: {gift_card_code: "01PNC9L76H4H"}){
    code
    balance {
      currency
      value
    }
    expiration_date
  }
}
```

**Response:**

```json
{
  "data": {
    "giftCardAccount": {
      "code": "01PNC9L76H4H",
      "balance": {
        "currency": "USD",
        "value": 25
      },
      "expiration_date": null
    }
  }
}
```

## Errors

Error | Description
--- | ---
`Gift card not found` | The specified `gift_card_code` value does not exist in the `giftcardaccount` table, or the full amount has already been redeemed.
`Field GiftCardAccountInput.gift_card_code of required type String! was not provided` | The value specified in the `GiftCardAccountInput.gift_card_code` argument is empty.
