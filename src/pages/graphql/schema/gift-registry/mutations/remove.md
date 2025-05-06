---
title: removeGiftRegistry mutation
edition: paas
---

# removeGiftRegistry mutation

The `removeGiftRegistry` mutation deletes the specified registry from the customers list of gift registries.

This mutation requires a valid [customer authentication token](../../customer/mutations/generate-token.md).

## Syntax

```graphql
removeGiftRegistry ( giftRegistryUid ID! ) RemoveGiftRegistryOutput
```

## Reference

The [`removeGiftRegistry`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-removeGiftRegistry) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example deletes the specified gift registry.

**Request:**

```graphql
mutation{
  removeGiftRegistry(giftRegistryUid: "lobehNsInxfDeTt290DO5vH6DVltN74S"){
    success
  }
}
```

**Response:**

```json
{
  "data": {
    "removeGiftRegistry": {
      "success": true
    }
  }
}
```
