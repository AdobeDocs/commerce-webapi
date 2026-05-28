---
title: updateGiftRegistryRegistrants mutation
description: The updateGiftRegistryRegistrants mutation updates properties of one or more registrants of the specified gify registry.
---

| |
|:--|
| \<span style="display:inline-block; vertical-align:middle;"\>\<img src="../../../../images/adobe-logo.svg" alt="Adobe Commerce feature" style="height:20px; margin-right:8px; vertical-align:middle;" /\>\</span\>\<span style="display:inline-block; vertical-align:middle;"\>\<strong\>Exclusive feature only in Adobe Commerce\</strong\> (\<a href="https://experienceleague.adobe.com/docs/commerce-admin/user-guides/home.html#product-editions"\>Learn more\</a\>)\</span\> |

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

* [SaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-updateGiftRegistryRegistrants)

* [PaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-updateGiftRegistryRegistrants)

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

