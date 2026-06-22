---
title: Gift card product data types
description: The GiftCardProduct data type defines properties of a gift card, including the minimum and maximum values and an array that contains the current and past v...
---

<Fragment src="../../../../../includes/commerce-only.md"/>

# Gift card product data types

The `GiftCardProduct` data type defines properties of a gift card, including the minimum and maximum values and an array that contains the current and past values on the specific gift card

It implements the following interfaces:

-  [ProductInterface](/reference/graphql/latest/index.md#productinterface)
-  [PhysicalProductInterface](/reference/graphql/latest/index.md#physicalproductinterface)
-  [CustomizableProductInterface](/reference/graphql/latest/index.md#customizableproductinterface)
-  [RoutableInterface](/reference/graphql/latest/index.md#routableinterface)

## Sample query

The following query returns information about gift card product `GiftCard25`. (It is not defined in the sample data.)

**Request:**

```graphql
{
  products(filter: { sku: { eq: "GiftCard25" } }) {
    items {
      uid
      __typename
      name
      sku
      ... on GiftCardProduct {
        allow_message
        message_max_length
        allow_open_amount
        open_amount_min
        open_amount_max
        is_returnable
        is_redeemable
        giftcard_type
        giftcard_amounts {
          uid
          website_id
          value
          attribute_id
          website_value
        }
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "products": {
      "items": [
        {
          "uid": "MjA0OQ==",
          "__typename": "GiftCardProduct",
          "name": "GiftCard25",
          "sku": "GiftCard25",
          "allow_message": true,
          "message_max_length": 255,
          "allow_open_amount": false,
          "open_amount_min": null,
          "open_amount_max": null,
          "is_returnable": "2",
          "is_redeemable": true,
          "giftcard_type": "VIRTUAL",
          "giftcard_amounts": [
            {
              "value_id": "Mg==",
              "website_id": 0,
              "value": 25,
              "attribute_id": 129,
              "website_value": 25
            }
          ]
        }
      ]
    }
  }
}
```

## Related topics

-  [applyGiftCardToCart mutation](../../../cart/mutations/apply-giftcard.md)
-  [redeemGiftCardBalanceAsStoreCredit mutation](../../../cart/mutations/redeem-giftcard-balance.md)
-  [removeGiftCardFromCart mutation](../../../cart/mutations/remove-giftcard.md)
