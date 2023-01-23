---
title: createPurchaseOrderApprovalRule mutation | Commerce Web APIs
edition: b2b
---

# createPurchaseOrderApprovalRule mutation

The `createPurchaseOrderApprovalRule` mutation creates a purchase order approval rule.

## Syntax

```graphql
mutation {
    createPurchaseOrderApprovalRule(
        input: PurchaseOrderApprovalRuleInput!
    ) {
        PurchaseOrderApprovalRule
    }
}
```

## Example usage

The following example creates a purchase order approval rule.

**Request:**

``` graphql
mutation {
  createPurchaseOrderApprovalRule(
    input: {
        name: "Rule name",
        description: "Rule description",
        applies_to: [],
        status: ENABLED,
        condition: {
            attribute: GRAND_TOTAL,
            operator: MORE_THAN,
            amount: {
                value: 100.00,
                currency: EUR
            }
        },
        approvers: ["MQ=="]
    }
  ) {
    uid
    name
  }
}

```

**Response:**

``` json
{
  "data": {
    "createPurchaseOrderApprovalRule": {
      "uid": "Mg==",
      "name": "Rule name"
    }
  }
}
```

