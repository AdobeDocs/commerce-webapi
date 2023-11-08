---
title: deletePurchaseOrderApprovalRule mutation
edition: b2b
---

# deletePurchaseOrderApprovalRule mutation

The `deletePurchaseOrderApprovalRule` mutation deletes one or more purchase order approval rules.

You can use the [`customer` query](../../customer/queries/customer.md) to retrieve the `uid` value of the approval rule.

If the mutation is successful, it returns null. Otherwise, the response contains details about any errors encountered.

## Syntax

```graphql
mutation {
    deletePurchaseOrderApprovalRule(
        input: DeletePurchaseOrderApprovalRuleInput!
    ) {
        DeletePurchaseOrderApprovalRuleOutput
    }
}
```

## Reference

The [`deletePurchaseOrderApprovalRule`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-deletePurchaseOrderApprovalRule) reference provides detailed information about the types and fields defined in this mutation.

## Headers

A valid [customer authentication token](../../../customer/mutations/generate-token.md) is required.

## Example usage

The following example deletes the purchase order approval rule.

**Request:**

``` graphql
mutation {
  deletePurchaseOrderApprovalRule(
    input: {
        approval_rule_uids: ["Mg=="]
    }
  ) {
    errors {
        message
        type
    }
  }
}
```

**Response:**

``` json
{
  "data": {
    "deletePurchaseOrderApprovalRule": {
      "errors": []
    }
  }
}
```
