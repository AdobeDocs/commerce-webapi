---
title: shareGiftRegistry mutation | Commerce Web APIs
edition: ee
contributor_name: EY
---

# shareGiftRegistry mutation

The `shareGiftRegistry` mutation sends an invitation to a list email addresses to shop from the customer's gift registry.

This mutation requires a valid [customer authentication token](../../customer/mutations/generate-token.md).

## Syntax

```graphql
mutation {
  shareGiftRegistry(
    giftRegistryUid: ID!
    sender: ShareGiftRegistrySenderInput!
    invitees: [ShareGiftRegistryInviteeInput!]!
  ) {
    ShareGiftRegistryOutput
  }
}
```

## Example usage

The following example creates a gift registry.

**Request:**

```graphql
mutation{
  shareGiftRegistry(
    giftRegistryUid: "W9YcRai9JmzGglqP3p0USodTTM3BmjjY",
    sender: {
      name: "Roni Costello"
      message: "Help us celebrate Theo's 45th Birthday"
    }
    invitees: [
      {
        name: "Brenda Vazquez"
        email: "brenda@example.com"
      }
      {
        name: "Alex Brunner"
        email: "alex1@example.com"
      }
    ]){
    is_shared
  }
}
```

**Response:**

```json
{
  "data": {
    "shareGiftRegistry": {
     "is_shared": true
     }
  }
}
```

## Input attributes

The `shareGiftRegistry` mutation requires the following input attributes.

Attribute |  Data Type | Description
--- | --- | ---
`giftRegistryUid`| ID! | The unique ID of the gift registry to be shared
`invitees`| [[ShareGiftRegistryInviteeInput!](#sharegiftregistryinviteeinput-attributes)]! | A list of people invited to participate in the event
`sender`| [ShareGiftRegistrySenderInput!](#sharegiftregistrysenderinput-attributes) | Information about the invitation sender

### ShareGiftRegistrySenderInput attributes

The `ShareGiftRegistrySenderInput` object contains the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`message` | String! | A brief message from the sender
`name`| String! | The name of the sender

### ShareGiftRegistryInviteeInput attributes

The `ShareGiftRegistryInviteeInput` object contains the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`email` | String! | The email address of the invitee
`name`| String! | Name of the invitee

## Output attributes

The `ShareGiftRegistryOutput` object contains the following attribute.

Attribute |  Data Type | Description
--- | --- | ---
`is_shared` | Boolean! | Indicates whether the gift registry was successfully shared
