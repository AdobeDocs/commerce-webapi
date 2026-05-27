---
title: giftRegistryTypeSearch query
description: The giftRegistryTypeSearch query returns a list of gift registries that match the specified registrant name and, optionally, registry type ID. Use the gift...
---

| |
|:--|
| \<span style="display:inline-block; vertical-align:middle;"\>\<img src="../pages/_images/adobe-logo.svg" alt="Adobe Commerce feature" style="height:20px; margin-right:8px; vertical-align:middle;" /\>\</span\>\<span style="display:inline-block; vertical-align:middle;"\>\<strong\>Exclusive feature only in Adobe Commerce\</strong\> (\<a href="https://experienceleague.adobe.com/docs/commerce-admin/user-guides/home.html#product-editions"\>Learn more\</a\>)\</span\> |

# giftRegistryTypeSearch query

The `giftRegistryTypeSearch` query returns a list of gift registries that match the specified registrant name and, optionally, registry type ID. Use the [`giftRegistryTypes` query](types.md) to return list of registry type IDs.

## Syntax

```graphql
giftRegistryTypeSearch(
    firstName: String!
    lastName: String!
    giftRegistryTypeUid: String
): [GiftRegistrySearchResult]
```

## Reference

The `giftRegistryTypeSearch` reference provides detailed information about the types and fields defined in this query.

* &#8203;<Edition name="saas" /> [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#query-giftRegistryTypeSearch)

* &#8203;<Edition name="paas" /> [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-giftRegistryTypeSearch)

## Example usage

The following example returns all gift registries in which the specified person is a registrant.

**Request:**

```graphql
query{
  giftRegistryTypeSearch(firstName: "Stacey", lastName: "Gaines"){
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
    "giftRegistryTypeSearch": [
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

