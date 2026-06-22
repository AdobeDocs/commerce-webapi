---
title: removeGiftRegistryRegistrants mutation
description: The removeGiftRegistryRegistrants mutation removes one or more registrants from the specified gift registry.
---

<Fragment src="../../../../includes/commerce-only.md"/>

# removeGiftRegistryRegistrants mutation

The `removeGiftRegistryRegistrants` mutation removes one or more registrants from the specified gift registry.

This mutation requires a valid [customer authentication token](../../customer/mutations/generate-token.md).

## Syntax

```graphql
mutation {
  removeGiftRegistryRegistrants(
    giftRegistryUid: ID!,
    registrantsUid: [ID!]!
  ) {
    RemoveGiftRegistryRegistrantsOutput
  }
}
```

## Reference

The `removeGiftRegistryRegistrants` reference provides detailed information about the types and fields defined in this mutation.

* [Adobe Commerce as a Cloud Service](/reference/graphql/saas/index.md#removegiftregistryregistrants)

* [On-Premises/Cloud](/reference/graphql/latest/index.md#removegiftregistryregistrants)

## Example usage

The following example removes a registrant from the specified gift registry.

**Request:**

```graphql
mutation{
  removeGiftRegistryRegistrants(
      giftRegistryUid: "W9YcRai9JmzGglqP3p0USodTTM3BmjjY",
      registrantsUid: "OA=="
    ){
    gift_registry {
      uid
      registrants {
        uid
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
    "removeGiftRegistryRegistrants": {
      "gift_registry": {
        "uid": "W9YcRai9JmzGglqP3p0USodTTM3BmjjY",
        "registrants": [
          {
            "uid": "Mg==",
            "firstname": "Stacey",
            "lastname": "Gaines",
            "email": "staceyg@example.com"
          }
        ]
      }
    }
  }
}
```
