---
title: PurchaseOrderApprovalRuleConditionInterface attributes and implementations
edition: b2b
---

# PurchaseOrderApprovalRuleConditionInterface attributes and implementations

[`PurchaseOrderApprovalRuleConditionInterface`](https://developer.adobe.com/commerce/webapi/graphql-api/beta/index.html#definition-PurchaseOrderApprovalRuleConditionInterface) provides details about the approval rule conditions. It has the following implementations:

*  [`PurchaseOrderApprovalRuleConditionAmount`](https://developer.adobe.com/commerce/webapi/graphql-api/beta/index.html#definition-PurchaseOrderApprovalRuleConditionAmount)
*  [`PurchaseOrderApprovalRuleConditionQuantity`](https://developer.adobe.com/commerce/webapi/graphql-api/beta/index.html#definition-PurchaseOrderApprovalRuleConditionQuantity)

## Example usage

The following example returns information about the purchase order approval rule condition.

**Request:**

``` graphql
{
    customer {
        purchase_order_approval_rule(
            uid: "Mg=="
        ) {
            condition {
              attribute
              operator
              ... on PurchaseOrderApprovalRuleConditionAmount {
                amount {
                  value
                  currency
                }
              }
              ... on PurchaseOrderApprovalRuleConditionQuantity {
                quantity
              }
            }
        }
    }
}
```

**Response:**

``` json
{
  "data": {
    "customer": {
      "purchase_order_approval_rule": {
        "condition": {
          "attribute": "GRAND_TOTAL",
          "operator": "MORE_THAN",
          "amount": {
            "value": 5,
            "currency": "USD"
          }
        }
      }
    }
  }
}
```
