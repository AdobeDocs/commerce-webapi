---
title: unsubscribeProductAlertStockAll mutation
description: The unsubscribeProductAlertStockAll mutation removes all of a logged-in customer's back-in-stock alert subscriptions.
---

# unsubscribeProductAlertStockAll mutation

The `unsubscribeProductAlertStockAll` mutation removes all of the logged-in customer's back-in-stock alert subscriptions in a single operation.

This mutation requires a valid [customer authentication token](../../customer/mutations/generate-token.md).

<InlineAlert variant="info" slots="text1" />

This mutation is part of the Storefront Compatibility Package and is only available on [Adobe Commerce as a Cloud Service](https://experienceleague.adobe.com/en/docs/commerce/cloud-service/overview) and [PaaS(With ACO License)](https://experienceleague.adobe.com/en/docs/commerce/optimizer/get-started).

## Syntax

```graphql
mutation {
  unsubscribeProductAlertStockAll {
    success
    message
  }
}
```

## Example usage

The following example removes all back-in-stock alert subscriptions for the logged-in customer.

**Request:**

```graphql
mutation {
  unsubscribeProductAlertStockAll {
    success
    message
  }
}
```

**Response:**

```json
{
  "data": {
    "unsubscribeProductAlertStockAll": {
      "success": true,
      "message": "You will no longer receive stock alerts."
    }
  }
}
```

## Output attributes

The `ProductAlertSubscriptionResult` object contains the following attributes:

| Attribute | Data type | Description |
| --- | --- | --- |
| `success` | Boolean! | Indicates whether the operation was successful. |
| `message` | String | A message describing the result of the operation. |

## Errors

| Error | Description |
| --- | --- |
| `Customer is not logged in.` | The request did not include a valid customer authentication token. |
