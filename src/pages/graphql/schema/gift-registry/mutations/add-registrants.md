---
title: addGiftRegistryRegistrants mutation
description: The addGiftRegistryRegistrants mutation adds a registrant to the specified gift registry.
---

| |
|:--|
| \<span style="display:inline-block; vertical-align:middle;"\>\<img src="../../../../images/adobe-logo.svg" alt="Adobe Commerce feature" style="height:20px; margin-right:8px; vertical-align:middle;" /\>\</span\>\<span style="display:inline-block; vertical-align:middle;"\>\<strong\>Exclusive feature only in Adobe Commerce\</strong\> (\<a href="https://experienceleague.adobe.com/docs/commerce-admin/user-guides/home.html#product-editions"\>Learn more\</a\>)\</span\> |

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

* [SaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-addGiftRegistryRegistrants)

* [PaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-addGiftRegistryRegistrants)

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

