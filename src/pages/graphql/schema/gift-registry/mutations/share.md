---
title: shareGiftRegistry mutation
description: The shareGiftRegistry mutation sends an invitation to a list email addresses to shop from the customer's gift registry.
---

<Fragment src="../../../../includes/commerce-only.md"/>

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

The `shareGiftRegistry` reference provides detailed information about the types and fields defined in this mutation.

* [Adobe Commerce as a Cloud Service](/reference/graphql/saas/index.md#sharegiftregistry)

* [On-Premises/Cloud](/reference/graphql/index.md#sharegiftregistry)

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

<Edition slots="text" backgroundcolor="gray"/>

Thanks to EY for contributing this topic!
