---
title: PurchaseOrderApprovalRuleConditionInterface attributes and implementations
keywords:
  - B2B
---

import CommerceOnly from '/src/_includes/commerce-only.md'

<CommerceOnly />

# PurchaseOrderApprovalRuleConditionInterface attributes and implementations

`PurchaseOrderApprovalRuleConditionInterface` provides details about the approval rule conditions.

* &#8203;<Edition name="saas" /> [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#definition-PurchaseOrderApprovalRuleConditionInterface)

* &#8203;<Edition name="paas" /> [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-PurchaseOrderApprovalRuleConditionInterface)

It has the following implementations:

*  `PurchaseOrderApprovalRuleConditionAmount`

   * &#8203;<Edition name="saas" /> [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#definition-PurchaseOrderApprovalRuleConditionAmount)

   * &#8203;<Edition name="paas" /> [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-PurchaseOrderApprovalRuleConditionAmount)

*  `PurchaseOrderApprovalRuleConditionQuantity`

   * &#8203;<Edition name="saas" /> [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#definition-PurchaseOrderApprovalRuleConditionQuantity)

   * &#8203;<Edition name="paas" /> [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-PurchaseOrderApprovalRuleConditionQuantity)

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
