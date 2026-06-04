---
title: giftRegistryTypes query
description: The giftRegistryTypes query returns a list of available gift registry types.
---

<Fragment src="../../../../includes/commerce-only.md"/>

# giftRegistryTypes query

The `giftRegistryTypes` query returns a list of available gift registry types.

## Syntax

```graphql
giftRegistryTypes: [GiftRegistryType]
```

## Reference

The `giftRegistryTypes` reference provides detailed information about the types and fields defined in this query.

* [Adobe Commerce as a Cloud Service](/reference/graphql/saas/index.md#giftregistrytypes)

* [On-Premises/Cloud](/reference/graphql/index.md#giftregistrytypes)

## Example usage

The following example returns information about the list of available gift registry types.

**Request:**

```graphql
query{
  giftRegistryTypes{
    label
    uid
    dynamic_attributes_metadata {
      label
      input_type
      is_required
      code
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "giftRegistryTypes": [
      {
        "label": "Birthday",
        "uid": "MQ==",
        "dynamic_attributes_metadata": [
          {
            "label": "Country",
            "input_type": "country",
            "is_required": true,
            "code": "event_country"
          },
          {
            "label": "Event Date",
            "input_type": "date",
            "is_required": true,
            "code": "event_date"
          }
        ]
      },
      {
        "label": "Baby Registry",
        "uid": "Mg==",
        "dynamic_attributes_metadata": [
          {
            "label": "Role",
            "input_type": "select",
            "is_required": true,
            "code": "role"
          },
          {
            "label": "Country",
            "input_type": "country",
            "is_required": true,
            "code": "event_country"
          },
          {
            "label": "Baby Gender",
            "input_type": "select",
            "is_required": true,
            "code": "baby_gender"
          }
        ]
      },
      {
        "label": "Wedding",
        "uid": "Mw==",
        "dynamic_attributes_metadata": [
          {
            "label": "Role",
            "input_type": "select",
            "is_required": true,
            "code": "role"
          },
          {
            "label": "Country",
            "input_type": "country",
            "is_required": true,
            "code": "event_country"
          },
          {
            "label": "Wedding Date",
            "input_type": "date",
            "is_required": true,
            "code": "event_date"
          },
          {
            "label": "Location",
            "input_type": "text",
            "is_required": true,
            "code": "event_location"
          },
          {
            "label": "Number of Guests",
            "input_type": "text",
            "is_required": true,
            "code": "number_of_guests"
          }
        ]
      }
    ]
  }
}
```

<Edition slots="text" backgroundcolor="gray"/>

Thanks to Zilker Technology for contributing this topic!
