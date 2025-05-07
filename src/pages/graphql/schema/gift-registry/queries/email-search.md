---
title: giftRegistryEmailSearch query
---

import CommerceOnly from '/src/_includes/commerce-only.md'

<CommerceOnly />

# giftRegistryEmailSearch query

The `giftRegistryEmailSearch` query returns a list of gift registries that match the specified registrant email address. The query does not return registries based on owner email address.

## Syntax

```graphql
giftRegistryEmailSearch(email: String!): [GiftRegistrySearchResult]
```

## Reference

The [`giftRegistryEmailSearch`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-giftRegistryEmailSearch) reference provides detailed information about the types and fields defined in this query.

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
