---
title: addReturnComment mutation | Commerce Web APIs
---

# addReturnComment mutation

The `addReturnComment` mutation adds a comment to an existing return request.

## Syntax

```graphql
mutation: {
    addReturnComment(input: AddReturnCommentInput!): AddReturnCommentOutput
}
```

## Reference

The [`addReturnComment`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-addReturnComment) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example adds a comment in response to the merchant.

**Request:**

```graphql
mutation{
  addReturnComment(input: {
    return_uid: "Mw=="
    comment_text: "I'd like a refund"})
    {
    return {
      uid
      status
      comments {
        uid
        author_name
        text
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "addReturnComment": {
      "return": {
        "uid": "Mw==",
        "status": "PENDING",
        "comments": [
          {
            "uid": "NQ==",
            "author_name": "Customer Service",
            "text": "We placed your Return request."
          },
          {
            "uid": "Ng==",
            "author_name": "Bob Loblaw",
            "text": "I want to return the shirt because I don't like the texture of the fabric"
          },
          {
            "uid": "Nw==",
            "author_name": "Customer Service",
            "text": "OK. Would you like a refund or store credit?"
          },
          {
            "uid": "OA==",
            "author_name": "Bob Loblaw",
            "text": "I'd like a refund"
          }
        ]
      }
    }
  }
}
```

## Related topics

*  [`requestReturn` mutation](request-return.md)
*  [`addReturnTracking` mutation](add-return-tracking.md)
*  [`removeReturnTracking` mutation](remove-return-tracking.md)
