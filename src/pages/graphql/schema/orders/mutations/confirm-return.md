---
title: confirmReturn mutation
edition: ee
---

# confirmReturn mutation

The `confirmReturn` mutation confirms a return request from a guest customer. The merchant subsequently decides whether to accept or reject the request.

## Syntax

```graphql
mutation {
  confirmReturn(input: ConfirmReturnInput!): RequestReturnOutput
}
```

## Reference

The [`confirmReturn`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-confirmReturn) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example confirms a return request previously issued by a guest customer. At this point, the merchant hasn't taken action, but the response acknowledges the request was received.

**Request:**

```graphql
mutation{
  confirmReturn(input: {
    order_id: "NQ=="
    confirmation_key: "abcde"
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
    "confirmReturn": {
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

*  [`requestGuestReturn` mutation](request-guest-return.md)
*  [`addReturnComment` mutation](add-return-comment.md)
*  [`addReturnTracking` mutation](add-return-tracking.md)
*  [`removeReturnTracking` mutation](remove-return-tracking.md)
