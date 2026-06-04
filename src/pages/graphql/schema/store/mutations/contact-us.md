---
title: contactUs mutation
description: The contactUs mutation submits the contents of the Contact Us form.
---

# contactUs mutation

The `contactUs` mutation submits the contents of the Contact Us form.

## Syntax

`mutation: contactUs(input: ContactUsInput!): ContactUsOutput`

## Reference

The `contactUs` reference provides detailed information about the types and fields defined in this mutation.

* [Adobe Commerce as a Cloud Service](/reference/graphql/saas/index.md#contactus)

* [On-Premises/Cloud](/reference/graphql/index.md#contactus)

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
