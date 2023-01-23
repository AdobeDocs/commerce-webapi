---
title: PurchaseOrderApprovalRuleConditionInterface attributes and implementations
edition: b2b
---

# PurchaseOrderApprovalRuleConditionInterface attributes and implementations

`PurchaseOrderApprovalRuleConditionInterface` provides details about the approval rule conditions. It has the following implementations:

*  [`PurchaseOrderApprovalRuleConditionAmount`](#purchaseorderapprovalruleconditionamount-attributes)
*  [`PurchaseOrderApprovalRuleConditionQuantity`](#purchaseorderapprovalruleconditionquantity-attributes)

<InlineAlert variant="info" slots="text" />

## Attributes

The `PurchaseOrderApprovalRuleConditionInterface` defines the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`attribute` | `PurchaseOrderApprovalRuleType` | Enum: GRAND_TOTAL, SHIPPING_INCL_TAX or NUMBER_OF_SKUS
`operator` | `PurchaseOrderApprovalRuleConditionOperator` | Enum: MORE_THAN, LESS_THAN, MORE_THAN_OR_EQUAL_TO or LESS_THAN_OR_EQUAL_TO

## Implementations

### PurchaseOrderApprovalRuleConditionAmount attributes

The `PurchaseOrderApprovalRuleConditionAmount` implementation adds the following attribute.

Attribute |  Data Type | Description
--- | -- | ---
`amount`| `Money!` | An amount used for evaluation of the approval rule condition.

### PurchaseOrderApprovalRuleConditionQuantity attributes

The `PurchaseOrderApprovalRuleConditionQuantity` implementation adds the following attribute.

Attribute |  Data Type | Description
--- | --- | ---
`quantity`| `Int` | The quantity used for evaluation of the approval rule condition.

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

