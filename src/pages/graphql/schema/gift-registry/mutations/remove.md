---
title: removeGiftRegistry mutation
description: The removeGiftRegistry mutation deletes the specified registry from the customers list of gift registries.
---

<Fragment src="../../../../includes/commerce-only.md"/>

# removeGiftRegistry mutation

The `removeGiftRegistry` mutation deletes the specified registry from the customers list of gift registries.

This mutation requires a valid [customer authentication token](../../customer/mutations/generate-token.md).

## Syntax

```graphql
removeGiftRegistry ( giftRegistryUid ID! ) RemoveGiftRegistryOutput
```

## Reference

The `removeGiftRegistry` reference provides detailed information about the types and fields defined in this mutation.

* [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-removeGiftRegistry)

* [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-removeGiftRegistry)

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
