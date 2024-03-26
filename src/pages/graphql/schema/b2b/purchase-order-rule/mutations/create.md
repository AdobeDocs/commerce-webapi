---
title: createPurchaseOrderApprovalRule mutation
edition: b2b
---

# createPurchaseOrderApprovalRule mutation

The `createPurchaseOrderApprovalRule` mutation creates a purchase order approval rule.

A request to create an approval rule must include the following fields and objects:

*  `name`
*  `condition`
*  `approvers`

The `condition` object must contain an `attribute` field, an `operator`, and either an `amount` or a `quantity`. The `attribute` field determines if the rule checks the order total (`GRAND_TOTAL`), the number of SKUs in the order (`NUMBER_OF_SKUS`), or the shipping expense (`SHIPPING_INCL_TAX`). The operator must be one of `MORE_THAN`, `LESS_THAN`, `MORE_THAN_OR_EQUAL_TO`, or `LESS_THAN_OR_EQUAL_TO`.

The `applies_to` field can contain an array of company user role IDs. When an empty array is provided, the rule is applied to all user roles in the system, including those created in the future.

The default value of the `status` field is `ENABLED`.

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

## Reference

The [`createPurchaseOrderApprovalRule`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-createPurchaseOrderApprovalRule) reference provides detailed information about the types and fields defined in this mutation.

## Headers

A valid [customer authentication token](../../../customer/mutations/generate-token.md) is required.

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
    name
    uid
    applies_to_roles
    condition
  }
}
```

**Response:**

``` json
{
  "data": {
    "createPurchaseOrderApprovalRule": {
      "name": "Rule name",
      "uid": "MTA=",
      "applies_to_roles": [],
      "condition": {
        "attribute": "GRAND_TOTAL",
        "operator": "MORE_THAN"
      }
    }
  }
}
```
