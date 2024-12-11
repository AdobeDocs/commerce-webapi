---
title: requestGuestReturn mutation
edition: ee
---

# requestGuestReturn mutation

The `requestGuestReturn` mutation initiates a guest buyer's request to return an item for replacement or refund.
A confirmation email is sent to the guest provided email address with a link to confirm the return request and continue the process.

The following examples illustrate how to retrieve the token and item ID values needed to run the `requestGuestReturn` mutation:

*  [Retrieve details about an order placed by a guest or customer who is not logged in](../queries/guest-order.md)
*  [Retrieve detailed information about a specific guest order](../queries/guest-order-by-token.md)

<InlineAlert variant="info" slots="text" />

Use the [`storeConfig` query](../../store/queries/store-config.md) with the `returns_enabled` attribute to determine whether returned merchandise authorization (RMAs) are enabled.

## Syntax

```graphql
mutation {
  requestGuestReturn(input: RequestGuestReturnInput!): RequestReturnOutput
}
```

## Reference

The [`requestGuestReturn`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-requestGuestReturn) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example requests a product return from a guest customer. Note that the return status after this request is `UNCONFIRMED`, as guest users need to confirm the return request as stated above. 

**Request:**

```graphql
mutation{
  requestGuestReturn(input: {
    token: "0:3:E2uahokr8ud2uV3/z/7ELF0yQGDtT6vHUbLEGCpM3wUfouCNWf7ZGaMUYEhRKnrbGCq9l4zDbpO8JMPqfA=="
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
    "requestGuestReturn": {
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
        "status": "UNCONFIRMED",
        "comments": [
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

* [`confirmReturn` mutation](confirm-return.md)
* [`addReturnComment` mutation](add-return-comment.md)
* [`addReturnTracking` mutation](add-return-tracking.md)
* [`removeReturnTracking` mutation](remove-return-tracking.md)
