---
title: addPurchaseOrderComment mutation
edition: b2b
---

# addPurchaseOrderComment mutation

The `addPurchaseOrderComment` mutation adds a comment to the specified purchase order. The response contains details about the comment.

## Syntax

```graphql
mutation {
  addPurchaseOrderComment(
    input: AddPurchaseOrderCommentInput!
  ) {
      AddPurchaseOrderCommentOutput
  }
}
```

## Example usage

The following example adds a comment to the purchase order.

**Request:**

``` graphql
mutation {
  addPurchaseOrderComment(
      input: {
        purchase_order_uid: "MQ==",
        comment: "Looks good to me"
      },
    ) {
    comment {
        uid
        author {
            firstname
            lastname
            email
        }
        text
    }
  }
}
```

**Response:**

``` json
{
  "data": {
    "addPurchaseOrderComment": {
      "comment": {
        "uid": "Mw==",
        "author": {
          "firstname": "John",
          "lastname": "Doe",
          "email": "john.doe@example.com"
        },
        "text": "Looks good to me."
      }
    }
  }
}
```
