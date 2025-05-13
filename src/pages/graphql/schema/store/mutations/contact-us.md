---
title: contactUs mutation
edition: paas
---

# contactUs mutation

The `contactUs` mutation submits the contents of the Contact Us form.

## Syntax

`mutation: contactUs(input: ContactUsInput!): ContactUsOutput`

## Reference

The [`contactUs`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-contactUs) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example adds a Contact Us form to the site.

**Request:**

```graphql
mutation {
  contactUs(
    input: {
      comment: "My comment",
      email: "bobloblaw@example.com",
      telephone: "(555)-CALL-BOB",
      name: "Bob Loblaw" }
      ) {
    status
  }
}
```

**Response:**

```json
{
  "data": {
    "contactUs": {
      "status": true
    }
  }
}
```
