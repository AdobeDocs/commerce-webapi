---
title: shareGiftRegistry mutation
edition: paas
contributor_name: EY
---

# shareGiftRegistry mutation

The `shareGiftRegistry` mutation sends an invitation to a list email addresses to shop from the customer's gift registry.

This mutation requires a valid [customer authentication token](../../customer/mutations/generate-token.md).

## Syntax

```graphql
mutation {
  shareGiftRegistry(
    giftRegistryUid: ID!
    sender: ShareGiftRegistrySenderInput!
    invitees: [ShareGiftRegistryInviteeInput!]!
  ) {
    ShareGiftRegistryOutput
  }
}
```

## Reference

The [`shareGiftRegistry`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-shareGiftRegistry) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example creates a gift registry.

**Request:**

```graphql
mutation{
  shareGiftRegistry(
    giftRegistryUid: "W9YcRai9JmzGglqP3p0USodTTM3BmjjY",
    sender: {
      name: "Roni Costello"
      message: "Help us celebrate Theo's 45th Birthday"
    }
    invitees: [
      {
        name: "Brenda Vazquez"
        email: "brenda@example.com"
      }
      {
        name: "Alex Brunner"
        email: "alex1@example.com"
      }
    ]){
    is_shared
  }
}
```

**Response:**

```json
{
  "data": {
    "shareGiftRegistry": {
     "is_shared": true
     }
  }
}
```
