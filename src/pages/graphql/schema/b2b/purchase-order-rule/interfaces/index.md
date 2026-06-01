---
title: PurchaseOrderApprovalRuleConditionInterface
description: PurchaseOrderApprovalRuleConditionInterface provides details about the approval rule conditions.
keywords:
  - B2B
---

<Fragment src="../../../../../includes/commerce-only.md"/>

# PurchaseOrderApprovalRuleConditionInterface attributes and implementations

`PurchaseOrderApprovalRuleConditionInterface` provides details about the approval rule conditions.

* [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#definition-PurchaseOrderApprovalRuleConditionInterface)

* [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-PurchaseOrderApprovalRuleConditionInterface)

It has the following implementations:

*  `PurchaseOrderApprovalRuleConditionAmount`

   * [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#definition-PurchaseOrderApprovalRuleConditionAmount)

   * [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-PurchaseOrderApprovalRuleConditionAmount)

*  `PurchaseOrderApprovalRuleConditionQuantity`

   * [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#definition-PurchaseOrderApprovalRuleConditionQuantity)

   * [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-PurchaseOrderApprovalRuleConditionQuantity)

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
