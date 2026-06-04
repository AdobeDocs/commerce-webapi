---
title: updateGiftRegistry mutation
description: The updateGiftRegistry mutation modifies properties of specified gift registry. It does not update the items in a gift registry or registrants. Use the upd...
---

<Fragment src="../../../../includes/commerce-only.md"/>

# updateGiftRegistry mutation

The `updateGiftRegistry` mutation modifies properties of specified gift registry. It does not update the items in a gift registry or registrants. Use the `updateGiftRegistryItems` or `updateGiftRegistryRegistrants` mutation to modify gift registry items or registrants.

This mutation requires a valid [customer authentication token](../../customer/mutations/generate-token.md).

The `dynamic_attributes` input field contains an array of attributes that define elements of the gift registry. Each attribute is specified as a code-value pair

## Syntax

```graphql
mutation {
  updateGiftRegistry(
    giftRegistryUid: ID!
    giftRegistry: UpdateGiftRegistryInput!
  ) {
    UpdateGiftRegistryOutput
  }
}
```

## Reference

The `updateGiftRegistry` reference provides detailed information about the types and fields defined in this mutation.

* [Adobe Commerce as a Cloud Service](/reference/graphql/saas/index.md#updategiftregistry)

* [On-Premises/Cloud](/reference/graphql/index.md#updategiftregistry)

## Example usage

The following example changes the privacy, the message, and the event date for a gift registry.

**Request:**

```graphql
mutation{
  updateGiftRegistry(
    giftRegistryUid: "D0R6d2B7aZWOQuuWftHZ0iwuexQPgaei",
    giftRegistry: {
      privacy_settings: PUBLIC
      message: "Help us celebrate Bill and Julie's wedding, which will be held on May 8, 2021"
      dynamic_attributes: {
        code: "event_date"
        value: "2021-05-08"
      }
    })
  {
    gift_registry {
      uid
      event_name
      message
      status
      privacy_settings
      dynamic_attributes {
        code
        label
        value
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "updateGiftRegistry": {
      "gift_registry": {
        "uid": "D0R6d2B7aZWOQuuWftHZ0iwuexQPgaei",
        "event_name": "Bill and Julie's wedding",
        "message": "Help us celebrate Bill and Julie's wedding, which will be held on May 8, 2021",
        "status": "ACTIVE",
        "privacy_settings": "PUBLIC",
        "dynamic_attributes": [
          {
            "code": "event_country",
            "label": "Country",
            "value": "US"
          },
          {
            "code": "event_date",
            "label": "Wedding Date",
            "value": "2021-05-08"
          },
          {
            "code": "event_location",
            "label": "Location",
            "value": "Ann Arbor, MI"
          },
          {
            "code": "number_of_guests",
            "label": "Number of Guests",
            "value": "101"
          }
        ]
      }
    }
  }
}
```
