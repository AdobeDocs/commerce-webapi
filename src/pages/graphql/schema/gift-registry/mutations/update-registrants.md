---
title: updateGiftRegistryRegistrants mutation
description: The updateGiftRegistryRegistrants mutation updates properties of one or more registrants of the specified gify registry.
---

<Fragment src="../../../../includes/commerce-only.md"/>

# updateGiftRegistryRegistrants mutation

The `updateGiftRegistryRegistrants` mutation updates properties of one or more registrants of the specified gify registry.

This mutation requires a valid [customer authentication token](../../customer/mutations/generate-token.md).

## Syntax

```graphql
mutation {
  updateGiftRegistryRegistrants(
    giftRegistryUid: ID!,
    registrants: [UpdateGiftRegistryRegistrantInput!]!
  ) {
    UpdateGiftRegistryRegistrantsOutput
  }
}
```

## Reference

The `updateGiftRegistryRegistrants` reference provides detailed information about the types and fields defined in this mutation.

* [Adobe Commerce as a Cloud Service](/reference/graphql/saas/index.md#updategiftregistryregistrants)

* [On-Premises/Cloud](/reference/graphql/index.md#updategiftregistryregistrants)

## Example usage

The following example updates a registrant's email address.

**Request:**

```graphql
mutation{
  updateGiftRegistryRegistrants(
      giftRegistryUid: "W9YcRai9JmzGglqP3p0USodTTM3BmjjY",
      registrants: {
          giftRegistryRegistrantUid: "OA=="
          email: "new-email@example.com"
        }
    )
    {
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
    "updateGiftRegistryRegistrants": {
      "gift_registry": {
        "uid": "W9YcRai9JmzGglqP3p0USodTTM3BmjjY",
        "registrants": [
          {
            "uid": "Mg==",
            "firstname": "Stacey",
            "lastname": "Gaines",
            "email": "staceyg@example.com"
          },
          {
            "uid": "OA==",
            "firstname": "Monica",
            "lastname": "Resendez",
            "email": "new-email@example.com"
          }
        ]
      }
    }
  }
}
```
