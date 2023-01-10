---
title: purchase_orders_enabled query | Commerce Web APIs
edition: b2b   
---

# purchase_orders_enabled query

The `purchase_orders_enabled` query returns information whether the purchase order functionality is enabled for the customer.

## Syntax

```graphql
{
    customer {
        purchase_orders_enabled {
            Boolean!
        }
    }
}
```

## Example usage

The following example returns information whether the purchase order functionality is enabled for the customer.

**Request:**

``` graphql
{
    customer {
        purchase_orders_enabled
    }
}
```

**Response:**

``` json
{
  "data": {
    "customer": {
      "purchase_orders_enabled": true
    }
  }
}
```
