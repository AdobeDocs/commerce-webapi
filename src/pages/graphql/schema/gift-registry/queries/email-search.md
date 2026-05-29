---
title: giftRegistryEmailSearch query
description: The giftRegistryEmailSearch query returns a list of gift registries that match the specified registrant email address. The query does not return registries...
---

| |
|:--|
| ![Adobe Commerce feature](../../../../images/adobe-logo.svg) **Exclusive feature only in Adobe Commerce** ([Learn more](https://experienceleague.adobe.com/docs/commerce-admin/user-guides/home.html#product-editions)) |

# giftRegistryEmailSearch query

The `giftRegistryEmailSearch` query returns a list of gift registries that match the specified registrant email address. The query does not return registries based on owner email address.

## Syntax

```graphql
giftRegistryEmailSearch(email: String!): [GiftRegistrySearchResult]
```

## Reference

The `giftRegistryEmailSearch` reference provides detailed information about the types and fields defined in this query.

* [SaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#query-giftRegistryEmailSearch)

* [PaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-giftRegistryEmailSearch)

## Example usage

The following example returns details about gift registries in which `staceyg@example.com` is a registrant.

**Request:**

```graphql
query{
  giftRegistryEmailSearch(email: "staceyg@example.com"){
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
    "giftRegistryEmailSearch": [
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

