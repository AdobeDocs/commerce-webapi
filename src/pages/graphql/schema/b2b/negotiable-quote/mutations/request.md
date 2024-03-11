---
title: requestNegotiableQuote mutation
edition: b2b
---

# requestNegotiableQuote mutation

The `requestNegotiableQuote` mutation initiates a negotiable quote on behalf of a company user. The company user must add all products to the cart before requesting a negotiable quote. Once the request is submitted, company users cannot add new products to the quote.

If the request is successful, the application assigns the cart ID to the negotiable quote. Therefore, the same cart ID is used throughout the lifecycle of the negotiable quote. The application generates a new cart ID if the company user starts a new order while a negotiable quote is in process. The cart ID must be active. You cannot create a negotiable quote if the quote is cancelled or converted to an order.

If the request is successful, the negotiable quote has the SUBMITTED status.

<InlineAlert variant="info" slots="text" />

If the negotiable quote requires a shipping address (for negotiation or tax calculations), you can use the [`setNegotiableQuoteShippingAddresses` mutation](set-shipping-address.md) to add the address to the standard quote during the negotiable quote process.

This mutation requires a valid [customer authentication token](../../../customer/mutations/generate-token.md).

## Syntax

```graphql
requestNegotiableQuote(
    input: RequestNegotiableQuoteInput!
): RequestNegotiableQuoteOutput
```

## Reference

The [`requestNegotiableQuote`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-requestNegotiableQuote) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example requests a negotiable quote. The cart contains three items.

**Request:**

```graphql
mutation {
  requestNegotiableQuote (
    input: {
      cart_id: "kw6mLEvl6vjjPNsjtJqwpamv5o0iT1bc"
      quote_name: "Discount request"
      comment: {
        comment: "Requesting a 10% discount for being a repeat customer."}
    }
  ){
    quote {
      uid
      created_at
      status
      buyer {
        firstname
        lastname
      }
      comments {
        uid
        created_at
        author {
          firstname
          lastname
        }
        creator_type
        text
      }
      items {
        product {
          uid
          sku
          name
          price_range {
            maximum_price {
              regular_price {
                value
              }
            }
          }
        }
        quantity
      }
      prices {
        subtotal_excluding_tax {
          value
        }
        subtotal_including_tax {
          value
        }
        subtotal_with_discount_excluding_tax {
          value
        }
        grand_total {
          value
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
    "requestNegotiableQuote": {
      "quote": {
        "uid": "kw6mLEvl6vjjPNsjtJqwpamv5o0iT1bc",
        "created_at": "2021-04-20 19:01:38",
        "status": "SUBMITTED",
        "buyer": {
          "firstname": "Taina",
          "lastname": "Garofalo"
        },
        "comments": [
          {
            "uid": "MQ==",
            "created_at": "2021-04-20 19:57:49",
            "author": {
              "firstname": "Taina",
              "lastname": "Garofalo"
            },
            "creator_type": "BUYER",
            "text": "Requesting a 10% discount for being a repeat customer."
          }
        ],
        "items": [
          {
            "product": {
              "uid": "MTY=",
              "sku": "24-UG07",
              "name": "Dual Handle Cardio Ball",
              "price_range": {
                "maximum_price": {
                  "regular_price": {
                    "value": 12
                  }
                }
              }
            },
            "quantity": 1
          },
          {
            "product": {
              "uid": "NTI=",
              "sku": "24-WG080",
              "name": "Sprite Yoga Companion Kit",
              "price_range": {
                "maximum_price": {
                  "regular_price": {
                    "value": 77
                  }
                }
              }
            },
            "quantity": 1
          },
          {
            "product": {
              "uid": "MTc=",
              "sku": "24-UG04",
              "name": "Zing Jump Rope",
              "price_range": {
                "maximum_price": {
                  "regular_price": {
                    "value": 12
                  }
                }
              }
            },
            "quantity": 1
          }
        ],
        "prices": {
          "subtotal_excluding_tax": {
            "value": 101
          },
          "subtotal_including_tax": {
            "value": 101
          },
          "subtotal_with_discount_excluding_tax": {
            "value": 101
          },
          "grand_total": {
            "value": 101
          }
        }
      }
    }
  }
}
```
