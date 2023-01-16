---
title: purchase_order query | Commerce Web APIs
edition: b2b   
---

# purchase_order query

The `purchase_order` query returns the purchase order information.

## Syntax

```graphql
{
    customer {
        purchase_order(
            uid: ID!
        ) {
            PurchaseOrder
        }
    }
}
```

## Example usage

The following example returns the purchase order information.

**Request:**

``` graphql
{
    customer {
        purchase_order(uid: "MQ==") {
            uid
            number
            created_at
            updated_at
            status
            available_actions
            created_by {
                firstname
                lastname
                email
            }
            order {
                number
            }
            comments {
                created_at
                text
                author {
                    firstname
                    lastname
                    email
                }
            }
            history_log {
                activity
                created_at
            }
            quote {
                items {
                    product {
                        sku
                    }
                }
                prices {
                    grand_total {
                        value
                        currency
                    }
                }
            }
        }
    }
}
```

**Response:**

``` json
{
  "data": {
    "customer": {
      "purchase_order": {
        "uid": "MQ==",
        "number": "000000001",
        "created_at": "2023-01-10 18:32:13",
        "updated_at": "2023-01-10 18:32:13",
        "status": "APPROVED",
        "available_actions": [
          "PLACE_ORDER"
        ],
        "created_by": {
          "firstname": "John",
          "lastname": "Doe",
          "email": "john.doe@example.com"
        },
        "order": null,
        "comments": [],
        "history_log": [],
        "quote": {
          "items": [
            {
              "product": {
                "sku": "Simple product"
              }
            }
          ],
          "prices": {
            "grand_total": {
              "value": 14,
              "currency": "USD"
            }
          }
        }
      }
    }
  }
}
```
