---
title: placePurchaseOrder mutation | Commerce Web APIs
edition: b2b
---

# placePurchaseOrder mutation

The `placePurchaseOrder` mutation places a purchase order.

## Syntax

```graphql
mutation {
    placePurchaseOrder(
        input: PlacePurchaseOrderInput!
    ) {
        PlacePurchaseOrderOutput
    }
}
```

## Example usage

The following example places a purchase order.

**Request:**

``` graphql
mutation {
  placePurchaseOrder(
    input: {
        cart_id: "hJUrIcPm77uCyYkSTBRGyjSvS40mw1Qd"
    }
  ) {
    purchase_order {
        number
    }
  }
}
```

**Response:**

``` json
{
  "data": {
    "placePurchaseOrder": {
      "purchase_order": {
        "number": "000000002"
      }
    }
  }
}
```

