---
title: giftRegistryIdSearch query
description: The giftRegistryIdSearch query returns a list of gift registries that match the specified registry ID. The ID is included in the email the application send...
---

| |
|:--|
| \<span style="display:inline-block; vertical-align:middle;"\>\<img src="../../../../images/adobe-logo.svg" alt="Adobe Commerce feature" style="height:20px; margin-right:8px; vertical-align:middle;" /\>\</span\>\<span style="display:inline-block; vertical-align:middle;"\>\<strong\>Exclusive feature only in Adobe Commerce\</strong\> (\<a href="https://experienceleague.adobe.com/docs/commerce-admin/user-guides/home.html#product-editions"\>Learn more\</a\>)\</span\> |

# giftRegistryIdSearch query

The `giftRegistryIdSearch` query returns a list of gift registries that match the specified registry ID. The ID is included in the email the application sends to invitees on behalf of the registrant.

## Syntax

```graphql
giftRegistryIdSearch(giftRegistryUid: String!): [GiftRegistrySearchResult]
```

## Reference

The `giftRegistryIdSearch` reference provides detailed information about the types and fields defined in this query.

* [SaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#query-giftRegistryIdSearch)

* [PaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-giftRegistryIdSearch)

## Example usage

The following example returns details about the specified gift registry.

**Request:**

```graphql
query{
  giftRegistryIdSearch(giftRegistryUid: "W9YcRai9JmzGglqP3p0USodTTM3BmjjY"){
    event_date
    event_title
    gift_registry_uid
    name
    type
  }
}
```

**Response:**

```json
{
  "data": {
    "giftRegistryIdSearch": [
      {
        "event_date": "2021-01-28",
        "event_title": "Theo's 45th Birthday",
        "gift_registry_uid": "W9YcRai9JmzGglqP3p0USodTTM3BmjjY",
        "name": "Stacey Gaines",
        "type": "Birthday"
      }
    ]
  }
}
```

