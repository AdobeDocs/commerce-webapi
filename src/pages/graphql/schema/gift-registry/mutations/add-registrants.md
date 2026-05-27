---
title: addGiftRegistryRegistrants mutation
---

import CommerceOnly from '/src/_includes/commerce-only.md'

<CommerceOnly />

# addGiftRegistryRegistrants mutation

The `addGiftRegistryRegistrants` mutation adds a registrant to the specified gift registry.

This mutation requires a valid [customer authentication token](../../customer/mutations/generate-token.md).

## Syntax

```graphql
mutation {
  addGiftRegistryRegistrants(
    giftRegistryUid: ID!,
    registrants: [AddGiftRegistryRegistrantInput!]!
  ) {
    AddGiftRegistryRegistrantsOutput
  }
}
```

## Reference

The `addGiftRegistryRegistrants` reference provides detailed information about the types and fields defined in this mutation.

* &#8203;<Edition name="saas" /> [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-addGiftRegistryRegistrants)

* &#8203;<Edition name="paas" /> [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-addGiftRegistryRegistrants)

## Example usage

The following example adds a registrant to the specified gift registry.

**Request:**

```graphql
mutation {
  addGiftRegistryRegistrants (
    giftRegistryUid: "W9YcRai9JmzGglqP3p0USodTTM3BmjjY",
    registrants: {
        firstname: "Monica"
        lastname: "Resendez"
        email: "monica@example.com"
    }
  ){
    gift_registry {
      uid
      event_name
      registrants {
        uid
        firstname
        lastname
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "addGiftRegistryRegistrants": {
      "gift_registry": {
        "uid": "W9YcRai9JmzGglqP3p0USodTTM3BmjjY",
        "event_name": "Theo's 45th Birthday",
        "registrants": [
          {
            "uid": "Mg==",
            "firstname": "Stacey",
            "lastname": "Gaines"
          },
          {
            "uid": "OA==",
            "firstname": "Monica",
            "lastname": "Resendez"
          }
        ]
      }
    }
  }
}
```
