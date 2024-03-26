---
title: updateNegotiableQuoteQuantities mutation
edition: b2b
---

# updateNegotiableQuoteQuantities mutation

The `updateNegotiableQuoteQuantities` mutation changes the quantity of one or more products in an active negotiable quote.

<InlineAlert variant="info" slots="text" />

Use the `removeNegotiableQuoteItems` mutation to completely remove a product from a negotiable quote.

This query requires a valid [customer authentication token](../../../customer/mutations/generate-token.md).

## Syntax

```graphql
updateNegotiableQuoteQuantities(
    input: UpdateNegotiableQuoteQuantitiesInput!
): UpdateNegotiableQuoteItemsQuantityOutput
```

## Reference

The [`updateNegotiableQuoteQuantities`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-updateNegotiableQuoteQuantities) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example changes the quantity of two products in a negotiable quote.

**Request:**

```graphql
mutation {
  updateNegotiableQuoteQuantities(
    input: {
      quote_uid: "xCA4wSZEHsb5QbFiKfoq5k1Dk8vIPBgb"
      items: [
        { quote_item_uid: "MTU=", quantity: 7 }
        { quote_item_uid: "MTY=", quantity: 8 }
      ]
    }
  ) {
    quote {
      uid
      name
      updated_at
      items {
        uid
        product {
          uid
          sku
          name
        }
        quantity
        prices {
          price {
            value
          }
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
    "updateNegotiableQuoteQuantities": {
      "quote": {
        "uid": "xCA4wSZEHsb5QbFiKfoq5k1Dk8vIPBgb",
        "name": "April 22 request",
        "updated_at": "2021-04-23 14:43:42",
        "items": [
          {
            "uid": "MTU=",
            "product": {
              "uid": "MjA=",
              "sku": "24-UG01",
              "name": "Quest Lumaflex&trade; Band"
            },
            "quantity": 7,
            "prices": {
              "price": {
                "value": 19
              }
            }
          },
          {
            "uid": "MTY=",
            "product": {
              "uid": "MTg=",
              "sku": "24-UG02",
              "name": "Pursuit Lumaflex&trade; Tone Band"
            },
            "quantity": 8,
            "prices": {
              "price": {
                "value": 16
              }
            }
          },
          {
            "uid": "MTc=",
            "product": {
              "uid": "MTc=",
              "sku": "24-UG04",
              "name": "Zing Jump Rope"
            },
            "quantity": 10,
            "prices": {
              "price": {
                "value": 12
              }
            }
          }
        ]
      }
    }
}
```
