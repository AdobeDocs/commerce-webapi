---
title: revokeCustomerToken mutation
description: The revokeCustomerToken mutation revokes the customer's token. It returns true if the token was successfully revoked.
---

# revokeCustomerToken mutation

The `revokeCustomerToken` mutation revokes the customer's token. It returns `true` if the token was successfully revoked.

We recommend you specify a customer token in the header of your call. However, you also can use [session authentication](/get-started/authentication/gs-authentication-session.md).

## Syntax

```graphql
mutation {
  revokeCustomerToken {
    RevokeCustomerTokenOutput
  }
}
```

## Reference

The `revokeCustomerToken` reference provides detailed information about the types and fields defined in this mutation.

* [Adobe Commerce as a Cloud Service](/reference/graphql/saas/index.md#revokecustomertoken)

* [On-Premises/Cloud](/reference/graphql/latest/index.md#revokecustomertoken)

## Example usage

The following call revokes the customer's token.

**Request:**

```graphql
mutation {
  revokeCustomerToken {
    result
  }
}
```

**Response:**

```json
{
  "data": {
    "revokeCustomerToken": {
      "result": true
    }
  }
}
```

## Errors

| Error | Description |
| --- | --- |
| `The current customer isn't authorized.` | The current customer is not currently logged in, or the customer's token does not exist in the `oauth_token` table. |

## Related topics

*  [customer query](../queries/customer.md)
*  [generateCustomerToken mutation](generate-token.md)
