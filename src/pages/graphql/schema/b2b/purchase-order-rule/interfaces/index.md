---
title: PurchaseOrderApprovalRuleConditionInterface
description: PurchaseOrderApprovalRuleConditionInterface provides details about the approval rule conditions.
keywords:
  - B2B
---

| |
|:--|
| ![Adobe Commerce feature](../../../../../images/adobe-logo.svg) **Exclusive feature only in Adobe Commerce** ([Learn more](https://experienceleague.adobe.com/docs/commerce-admin/user-guides/home.html#product-editions)) |

# PurchaseOrderApprovalRuleConditionInterface attributes and implementations

`PurchaseOrderApprovalRuleConditionInterface` provides details about the approval rule conditions.

* [SaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#definition-PurchaseOrderApprovalRuleConditionInterface)

* [PaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-PurchaseOrderApprovalRuleConditionInterface)

It has the following implementations:

*  `PurchaseOrderApprovalRuleConditionAmount`

   * [SaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#definition-PurchaseOrderApprovalRuleConditionAmount)

   * [PaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-PurchaseOrderApprovalRuleConditionAmount)

*  `PurchaseOrderApprovalRuleConditionQuantity`

   * [SaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#definition-PurchaseOrderApprovalRuleConditionQuantity)

   * [PaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-PurchaseOrderApprovalRuleConditionQuantity)

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

