---
title: requestReturn mutation
edition: ee
---

# requestReturn mutation

The `requestReturn` mutation initiates a buyer's request to return an item for replacement or refund. The merchant subsequently decides whether to accept or reject the request.

The following examples illustrate how to retrieve the order ID and item ID values needed to run the `requestReturn` mutation:

*  [Retrieve a summary of the customer's order history](../../customer/queries/customer.md#retrieve-a-summary-of-the-customers-order-history)
*  [Retrieve detailed information about a specific order](../../customer/queries/customer.md#retrieve-detailed-information-about-a-specific-order)

<InlineAlert variant="info" slots="text" />

Use the [`storeConfig` query](../../store/queries/store-config.md) with the `returns_enabled` attribute to determine whether returned merchandise authorization (RMAs) are enabled.

## Syntax

```graphql
mutation {
  requestReturn(input: RequestReturnInput!): RequestReturnOutput
}
```

## Reference

The [`requestReturn`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-requestReturn) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example requests a product return. At this point, the merchant hasn't taken action, but the response acknowledges the request was received.

**Request:**

```graphql
mutation{
  requestReturn(input: {
    order_uid: "NQ=="
    contact_email: "test1@example.com"
    comment_text: "I want to return the shirt because I don't like the texture of the fabric"
    items: {
      order_item_uid: "MTE="
      quantity_to_return: 1
    }
  }){
    return {
      uid
      items {
        uid
        status
        request_quantity
        quantity
        order_item {
          id
          eligible_for_return
          product_sku
          product_sku
          product_type
          quantity_returned
          status
        }
      }
      number
      status
      comments {
        uid
        author_name
        text
        created_at
      }
      customer {
        firstname
        lastname
        email
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "requestReturn": {
      "return": {
        "uid": "Mw==",
        "items": [
          {
            "uid": "Mw==",
            "status": "PENDING",
            "request_quantity": 1,
            "quantity": 0,
            "order_item": {
              "id": "MTE=",
              "eligible_for_return": true,
              "product_sku": "MS09-M-Red",
              "product_type": "configurable",
              "quantity_returned": 0,
              "status": "Shipped"
            }
          }
        ],
        "number": "000000003",
        "status": "PENDING",
        "comments": [
          {
            "uid": "NQ==",
            "author_name": "Customer Service",
            "text": "We placed your Return request.",
            "created_at": "2020-11-19 18:20:28"
          },
          {
            "uid": "Ng==",
            "author_name": "Bob Loblaw",
            "text": "I want to return the shirt because I don't like the texture of the fabric",
            "created_at": "2020-11-19 18:20:28"
          }
        ],
        "customer": {
          "firstname": "Bob",
          "lastname": "Loblaw",
          "email": "test1@example.com"
        }
      }
    }
  }
}
```

### Returns attributes

The `Returns` object contains an array of `Return` objects and pagination information.

Attribute |  Data Type | Description
--- | --- | ---
`items` | [Return] | A list of return requests
`page_info` SearchResultPageInfo | Pagination metadata
`total_count` | Int | The total number of return requests

## Related topics

*  [`addReturnComment` mutation](add-return-comment.md)
*  [`addReturnTracking` mutation](add-return-tracking.md)
*  [`removeReturnTracking` mutation](remove-return-tracking.md)
