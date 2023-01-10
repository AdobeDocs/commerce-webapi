---
title: deletePurchaseOrderApprovalRule mutation | Commerce Web APIs
edition: b2b
---

# deletePurchaseOrderApprovalRule mutation

The `deletePurchaseOrderApprovalRule` mutation deletes the purchase order approval rule.

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

