---
title: removeGiftRegistryRegistrants mutation
---

import CommerceOnly from '/src/_includes/commerce-only.md'

<CommerceOnly />

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

* &#8203;<Edition name="saas" /> [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-removeGiftRegistryRegistrants)

* &#8203;<Edition name="paas" /> [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-removeGiftRegistryRegistrants)

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
