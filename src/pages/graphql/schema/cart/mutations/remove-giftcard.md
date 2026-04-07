---
title: removeGiftCardFromCart mutation
---

import CommerceOnly from '/src/_includes/commerce-only.md'

<CommerceOnly />

# removeGiftCardFromCart mutation

The `removeGiftCardFromCart` mutation removes a previously-applied gift card from the cart.

## Syntax

 `mutation: removeGiftCardFromCart(input: RemoveGiftCardFromCartInput): RemoveGiftCardFromCartOutput`

## Reference

The `removeGiftCardFromCart` reference provides detailed information about the types and fields defined in this mutation.

* &#8203;<Edition name="saas" /> [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-removeGiftCardFromCart)

* &#8203;<Edition name="paas" /> [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-removeGiftCardFromCart)

## Example usage

 The following example removes a gift card from the cart.

**Request:**

 ``` text
mutation {
  removeGiftCardFromCart(
    input: {
      cart_id: "lOeLKsVkZ1PEvA8A7EaCvmEAk4JRBR7A"
      gift_card_code: "049XDMZ6L81X"
    }
  ) {
    cart {
      applied_gift_cards {
        code
      }
    }
  }
}
```

**Response:**

 ```json
{
  "data": {
    "removeGiftCardFromCart": {
      "cart": {
        "applied_gift_cards": []
      }
    }
  }
}
```

## Errors

Error | Description
--- | ---
`Could not find a cart with ID \"xxxxx\"` | The ID provided in the `cart_id` field is invalid or the cart does not exist for the customer.
`The gift card couldn't be deleted from the quote.` | The value provided in the `gift_card_code` field is invalid or the gift card with that specific ID does not exist in the cart.
