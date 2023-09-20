---
title: updatePurchaseOrderApprovalRule mutation
edition: b2b
---

# updatePurchaseOrderApprovalRule mutation

The `updatePurchaseOrderApprovalRule` mutation updates the specified purchase order approval rule.

You can use the [`customer` query](../../customer/queries/customer.md) to retrieve the `uid` value of the approval rule.

The [`createPurchaseOrderApprovalRule` mutation](create.md) describes the requirements of the `condition` and `approvers` fields.

## Syntax

```graphql
mutation {
    updatePurchaseOrderApprovalRule(
        input: UpdatePurchaseOrderApprovalRuleInput!
    ) {
        PurchaseOrderApprovalRule
    }
}
```

## Headers

A valid [customer authentication token](../../../customer/mutations/generate-token.md) is required.

## Example usage

The following example updates the purchase order approval rule.

**Request:**

``` graphql
mutation {
  updatePurchaseOrderApprovalRule(
    input: {
        uid: "Mg==",
        name: "Rule name updated",
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
        }
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
    "updatePurchaseOrderApprovalRule": {
      "uid": "Mg==",
      "name": "Rule name updated"
    }
  }
}
```
