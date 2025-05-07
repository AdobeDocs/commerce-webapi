import CommerceOnly from '/src/_includes/commerce-only.md'

<CommerceOnly />

# giftCardAccount query

The `giftCardAccount` query returns information for a specific gift card.

## Syntax

 `giftCardAccount(code: String!): GiftCardAccount`

## Reference

The [`giftCardAccount`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-giftCardAccount) reference provides detailed information about the types and fields defined in this query.

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
