---
title: addGiftRegistryRegistrants mutation | Commerce Web APIs
edition: ee
---

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

## Input attributes

The `addGiftRegistryRegistrants` mutation requires the following input.

Attribute |  Data Type | Description
--- | --- | ---
`dynamic_attributes` | [[GiftRegistryDynamicAttributeInput](#giftregistrydynamicattributeinput-attributes)] | An array of attributes that define elements of the gift registry. Each attribute is specified as a code-value pair
`email` | String! | The email address of the registrant
`firstname` | String! | The first name of the registrant
`lastname` | String! | The last name of the registrant

### GiftRegistryDynamicAttributeInput attributes

The `GiftRegistryDynamicAttributeInput` object contains the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`code` | ID! | A unique key for an additional attribute of the event
`value` | String! | A corresponding value for the code

## Output attributes

The `AddGiftRegistryRegistrantsOutput` output object contains the following attribute.

Attribute |  Data Type | Description
--- | --- | ---
`gift_registry` | [GiftRegistry](#giftregistry-attributes) | The gift registry after adding registrants

### GiftRegistry attributes

import GiftRegistry from '/src/pages/_includes/graphql/gift-registry.md'

<GiftRegistry />
