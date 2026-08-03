---
title: unsubscribeProductAlertPriceAll mutation
description: The unsubscribeProductAlertPriceAll mutation removes all of a logged-in customer's price-drop alert subscriptions.
---

# unsubscribeProductAlertPriceAll mutation

The `unsubscribeProductAlertPriceAll` mutation removes all of the logged-in customer's price-drop alert subscriptions in a single operation.

This mutation requires a valid [customer authentication token](../../customer/mutations/generate-token.md).

## Syntax

```graphql
mutation {
  unsubscribeProductAlertPriceAll {
    success
    message
  }
}
```

## Example usage

The following example removes all price-drop alert subscriptions for the logged-in customer.

**Request:**

```graphql
mutation {
  unsubscribeProductAlertPriceAll {
    success
    message
  }
}
```

**Response:**

```json
{
  "data": {
    "unsubscribeProductAlertPriceAll": {
      "success": true,
      "message": "You will no longer receive price alerts."
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
