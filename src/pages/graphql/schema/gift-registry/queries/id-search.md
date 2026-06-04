---
title: giftRegistryIdSearch query
description: The giftRegistryIdSearch query returns a list of gift registries that match the specified registry ID. The ID is included in the email the application send...
---

<Fragment src="../../../../includes/commerce-only.md"/>

# giftRegistryIdSearch query

The `giftRegistryIdSearch` query returns a list of gift registries that match the specified registry ID. The ID is included in the email the application sends to invitees on behalf of the registrant.

## Syntax

```graphql
giftRegistryIdSearch(giftRegistryUid: String!): [GiftRegistrySearchResult]
```

## Reference

The `giftRegistryIdSearch` reference provides detailed information about the types and fields defined in this query.

* [Adobe Commerce as a Cloud Service](/reference/graphql/saas/index.md#giftregistryidsearch)

* [On-Premises/Cloud](/reference/graphql/index.md#giftregistryidsearch)

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
