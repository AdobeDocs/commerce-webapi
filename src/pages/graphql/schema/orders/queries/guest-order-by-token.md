---
title: guestOrder query
---

# guestOrder query

Use the `guestOrderByToken` query to retrieve guest order details based on token.

## Syntax

`{guestOrderByToken(input: OrderTokenInput!) {CustomerOrder!}}`

## Reference

The `guestOrderByToken` reference provides detailed information about the types and fields defined in this query.

## Example usage

**Request:**

```graphql
{
  guestOrderByToken(
    input: {
      token: "0:3:OSScWU6PKLn3kFyMhNWyskG0opgVvFBnJmtuaFHKGwDFT83S6Kv9U39iYwixuU+vhwDz2AF4pCs3GtLhHbQ=",
    }
  ) {
      status
      order_date
      number
      billing_address {
          firstname
          lastname
          postcode
      }
      items {
          product_sku
      }
  }
}
```

**Response:**

```json
{
  "data": {
    "guestOrderByToken": {
      "status": "Pending",
      "order_date": "2024-03-18 08:40:14",
      "number": "000000001",
      "billing_address": {
        "firstname": "Guest",
        "lastname": "User",
        "postcode": "12345-6789"
      },
      "items": [
        {
          "product_sku": "24-WB07"
        }
      ]
    }
  }
}
```