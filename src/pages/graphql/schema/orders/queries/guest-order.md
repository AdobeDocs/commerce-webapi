---
title: guestOrder query
---

# guestOrder query

Use the `guestOrder` query to retrieve details about an order placed by a guest or customer who is not logged in. To retrieve this information, the guest must supply the order number, email, and postal code used to create the order.

## Syntax

`{guestOrder(input: OrderInformationInput!) {CustomerOrder!}}`

## Reference

The `guestOrder` reference provides detailed information about the types and fields defined in this query.

## Example usage

**Request:**

```graphql
{
  guestOrder(
    input: {
      number: "000000001",
      email: "test@test.com",
      postcode: "12345-6789"
    }
  ) {
      status
      order_date
      number
      token
      billing_address {
          firstname
          lastname
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
    "guestOrder": {
      "status": "Pending",
      "order_date": "2024-03-18 08:40:14",
      "number": "000000001",
      "token": "0:3:OSScWU6PKLn3kFyMhNWyskG0opgVvFBnJmtuaFHKGwDFT83S6Kv9U39iYwixuU+vhwDz2AF4pCs3GtLhHbQ=",
      "billing_address": {
        "firstname": "Guest",
        "lastname": "User"
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
