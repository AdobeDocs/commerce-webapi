---
title: giftRegistryTypeSearch query
edition: ee   
---

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

The [`giftRegistryTypeSearch`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-giftRegistryTypeSearch) reference provides detailed information about the types and fields defined in this query.

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
