---
title: updatePurchaseOrderApprovalRule mutation
keywords:
  - B2B
---

import CommerceOnly from '/src/_includes/commerce-only.md'

<CommerceOnly />

# updatePurchaseOrderApprovalRule mutation

The `updatePurchaseOrderApprovalRule` mutation updates the specified purchase order approval rule.

You can use the [`customer` query](../../../customer/queries/customer.md) to retrieve the `uid` value of the approval rule.

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

## Reference

The [`updatePurchaseOrderApprovalRule`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-updatePurchaseOrderApprovalRule) reference provides detailed information about the types and fields defined in this mutation.

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
