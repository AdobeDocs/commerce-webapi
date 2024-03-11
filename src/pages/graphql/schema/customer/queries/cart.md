---
title: customerCart query
---

# customerCart query

The `customerCart` query returns the active cart for the logged-in customer. If the cart does not exist, the query creates one. The customer's authorization token must be specified in the headers.

The `customerCart` query differs from the `cart` query in the following ways:

-  The `customerCart` query must be run on behalf of a logged-in customer. If you run this query on behalf of a guest, an exception will be thrown.
-  The `cart` query requires a `cart_id` value as input. The `customerCart` query does not take any input parameters.

You can define the query to return the `id` attribute. You can use the value of this attribute as the `destination_cart_id` input parameter in the [`mergeCarts` mutation](../../cart/mutations/merge.md). (The `mergeCarts` mutation provides the ability to merge a guest cart with the logged-in customer's cart.)

<InlineAlert variant="info" slots="text" />

If you know the value of the logged-in customer's cart ID, you can allow the customer to start an order on one device and complete it on another.

## Syntax

`customerCart: Cart!`

## Reference

The [`customerCart`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-customerCart) reference provides detailed information about the types and fields defined in this query.

## Example usage

The following query lists the products in the logged-in customer's cart:

**Request:**

```graphql
{
  customerCart {
    id
    items {
      id
      product {
        name
        sku
      }
      quantity
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "customerCart": {
      "id": "CYmiiQRjPVc2gJUc5r7IsBmwegVIFO43",
      "items": [
        {
           "uid": "MjI=",
          "product": {
            "name": "Strive Shoulder Pack",
            "sku": "24-MB04"
          },
          "quantity": 1
        },
        {
          "uid": "MjQ=",
          "product": {
            "name": "Radiant Tee",
            "sku": "WS12"
          },
          "quantity": 1
        }
      ]
    }
  }
}
```
