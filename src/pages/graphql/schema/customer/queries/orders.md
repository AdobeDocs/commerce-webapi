---
title: customerOrders query
---

# customerOrders query

<InlineAlert variant="warning" slots="text" />

The `customerOrders` query has been deprecated. Specify the `orders` object in the [`customer`](../../customer/queries/customer.md) query instead.

The Sales module performs a wide variety of functions, including order, invoice, and shipment management. However, most of these functions are performed on the back end, and the customer does not have access to this information. By returning a list of customer orders, the `customerOrders` query allows a customer to retrieve their order histories.

We recommend you use customer tokens in the header of your GraphQL calls. However, you also can use [session authentication](https://developer.adobe.com/commerce/webapi/get-started/authentication/gs-authentication-session).

## Syntax

`{customerOrders {CustomerOrders}}`

## Reference

The [`customerOrders`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-customerOrders) reference provides detailed information about the types and fields defined in this query.

## Example usage

The following query returns the order history of the logged in customer.

**Request:**

```graphql
{
  customerOrders {
    items {
      order_number
      id
      created_at
      grand_total
      status
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "customerOrders": {
      "items": [
        {
          "order_number": "000000001",
          "id": 1,
          "created_at": "2019-02-21 00:24:34",
          "grand_total": 36.39,
          "status": "processing"
        },
        {
          "order_number": "000000002",
          "id": 2,
          "created_at": "2019-02-21 00:24:35",
          "grand_total": 39.64,
          "status": "closed"
        }
      ]
    }
  }
}
```

## Errors

Error | Description
--- | ---
`The current customer isn't authorized.` | The current customer is not currently logged in, or the customer's token does not exist in the `oauth_token` table.
