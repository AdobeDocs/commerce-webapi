---
title: selectFreeGiftForCart mutation
description: The selectFreeGiftForCart mutation defines the product that a shopper has selected as a free gift.
---

# selectFreeGiftForCart mutation

<InlineAlert variant="info" slots="text1" />
This mutation is part of the Storefront Compatibility Package and is only available on [Adobe Commerce as a Cloud Service](https://experienceleague.adobe.com/en/docs/commerce/cloud-service/overview).

The `selectFreeGiftForCart` mutation defines the product that a shopper has selected as a free gift. This mutation is applicable only when a Free Gift cart price rule has been applied to the cart and the rule requires the shopper to choose a gift SKU before placing the order.

Some Free Gift rules add a gift to the cart automatically. Other rules offer multiple SKUs, or a product with configurable or bundle options, and require the shopper to make a selection. Use the following [`Cart`](../queries/cart.md) fields to determine whether a selection is needed and which products are eligible:

*  `has_available_free_gifts` is `true` when at least one applied Free Gift rule is still waiting for the shopper to select a SKU.
*  `available_free_gifts` lists each rule that requires a selection, along with its `rule_id`, `gift_qty`, `available_skus`, and the corresponding `products`.

After the shopper selects a gift, the mutation adds the product to the cart as a free-gift line item. Line items added by a Free Gift rule return `true` for the `is_free_gift` field on the [`CartItemInterface`](../interfaces/index.md). After the order is placed, the corresponding order item returns the rule label in the `free_gift_label` field on the `OrderItemInterface`.

## Syntax

`mutation: {selectFreeGiftForCart(input: SelectFreeGiftForCartInput!): SelectFreeGiftForCartOutput}`

## Reference

The `selectFreeGiftForCart` reference provides detailed information about the types and fields defined in this mutation.

* [Adobe Commerce as a Cloud Service](/reference/graphql/saas/mutations.md#selectfreegiftforcart)

* [On-Premises/Cloud](/reference/graphql/latest/mutations.md#selectfreegiftforcart)

## Example usage

### Determine which free gifts require a selection

The following query returns the Free Gift rules that are applied to the cart but still need the shopper to choose a gift SKU.

**Request:**

```graphql
{
  cart(cart_id: "8k0Q4MpH2IGahWrTRtqM61YV2MtLPApz") {
    has_available_free_gifts
    available_free_gifts {
      rule_id
      rule_label
      gift_qty
      available_skus
      products {
        sku
        name
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "cart": {
      "has_available_free_gifts": true,
      "available_free_gifts": [
        {
          "rule_id": 5,
          "rule_label": "Free gift with orders over $50",
          "gift_qty": 1,
          "available_skus": [
            "24-MB01",
            "24-MB04"
          ],
          "products": [
            {
              "sku": "24-MB01",
              "name": "Joust Duffle Bag"
            },
            {
              "sku": "24-MB04",
              "name": "Strive Shoulder Pack"
            }
          ]
        }
      ]
    }
  }
}
```

### Select a free gift

The following example selects the `24-MB01` gift product for rule `5` and adds it to the cart. The response confirms that the item was added as a free gift.

**Request:**

```graphql
mutation {
  selectFreeGiftForCart(
    input: {
      cart_id: "8k0Q4MpH2IGahWrTRtqM61YV2MtLPApz"
      rule_id: 5
      sku: "24-MB01"
      quantity: 1
    }
  ) {
    cart {
      has_available_free_gifts
      itemsV2 {
        items {
          uid
          quantity
          is_free_gift
          product {
            sku
            name
          }
          prices {
            price {
              value
              currency
            }
          }
        }
        total_count
        page_info {
          page_size
          current_page
          total_pages
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
    "selectFreeGiftForCart": {
      "cart": {
        "has_available_free_gifts": false,
        "itemsV2": {
          "items": [
            {
              "uid": "Mg==",
              "quantity": 1,
              "is_free_gift": false,
              "product": {
                "sku": "24-WB05",
                "name": "Savvy Shoulder Tote"
              },
              "prices": {
                "price": {
                  "value": 32,
                  "currency": "USD"
                }
              }
            },
            {
              "uid": "Mjc=",
              "quantity": 1,
              "is_free_gift": true,
              "product": {
                "sku": "24-MB01",
                "name": "Joust Duffle Bag"
              },
              "prices": {
                "price": {
                  "value": 0,
                  "currency": "USD"
                }
              }
            }
          ],
          "total_count": 2,
          "page_info": {
            "page_size": 20,
            "current_page": 1,
            "total_pages": 1
          }
        }
      }
    }
  }
}
```

### Select a gift with product options

If the gift SKU is a configurable or bundle product, provide the `selected_options` (and, when applicable, `entered_options`) values, in the same way you would when calling the [`addProductsToCart` mutation](add-products.md).

```graphql
mutation {
  selectFreeGiftForCart(
    input: {
      cart_id: "8k0Q4MpH2IGahWrTRtqM61YV2MtLPApz"
      rule_id: 5
      sku: "WSH12"
      quantity: 1
      selected_options: [
        "Y29uZmlndXJhYmxlLzkzLzUz"
        "Y29uZmlndXJhYmxlLzE2MS8xNzQ="
      ]
    }
  ) {
    cart {
      itemsV2 {
        items {
          uid
          is_free_gift
          product {
            sku
            name
          }
        }
        total_count
      }
    }
  }
}
```

## Input attributes

The `SelectFreeGiftForCartInput` object must contain the following attributes.

| Attribute | Data Type | Description |
| --- | --- | --- |
| `cart_id` | String! | The masked ID of the shopper's cart. |
| `rule_id` | Int! | The identifier of the Free Gift rule the selection is for. Must be a rule that is currently applied to the cart and pending selection. |
| `sku` | String! | The SKU of the gift product to add. Must be one of the rule's configured SKUs. |
| `quantity` | Int | Overrides the rule's configured gift quantity. Must be a positive integer no greater than the rule's `gift_qty`. Defaults to the rule's `gift_qty`. |
| `entered_options` | [[EnteredOptionInput!]](../../products/interfaces/index.md) | An array of custom option values entered by the shopper, such as text inputs. |
| `selected_options` | [ID!] | An array of UIDs that identify selected option values, such as configurable variants or bundle selections. |

## Output attributes

The `SelectFreeGiftForCartOutput` object contains the `Cart` object.

| Attribute | Data Type | Description |
| --- | --- | --- |
| `cart` | [Cart!](../queries/cart.md) | The cart after adding the selected free-gift product. |

## Errors

| Error | Description |
| --- | --- |
| `Could not find a cart with ID "XXX"` | The specified `cart_id` value does not exist in the `quote_id_mask` table. |
| `Required parameter "cart_id" is missing` | The mutation does not contain a `cart_id` argument. |
| `The rule ID "XXX" is not currently pending a free gift selection for this cart.` | The specified `rule_id` is not applied to the cart, or it does not require a gift selection. |
| `The SKU "XXX" is not a valid free gift for rule ID "YYY".` | The specified `sku` is not one of the SKUs configured on the rule. |
| `The requested quantity exceeds the free gift quantity allowed by the rule.` | The specified `quantity` is greater than the rule's `gift_qty`. |

## Related topics

*  [cart query](../queries/cart.md)
*  [addProductsToCart mutation](add-products.md)
*  [CartItemInterface attributes and implementations](../interfaces/index.md)
