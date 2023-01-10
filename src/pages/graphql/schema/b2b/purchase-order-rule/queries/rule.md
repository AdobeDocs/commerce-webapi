---
title: purchase_order_approval_rule query | Commerce Web APIs
edition: b2b
---

# purchase_order_approval_rule query

The `purchase_order_approval_rule` query returns information about the purchase order approval rule.

## Syntax

```graphql
{
    customer {
        purchase_order_approval_rule(
            uid: ID!
        ) {
            PurchaseOrderApprovalRule
        }
    }
}
```

## Example usage

The following example returns information about the purchase order approval rule.

**Request:**

``` graphql
{
    customer {
        purchase_order_approval_rule(
            uid: "MQ=="
        ) {
            uid
            name
            description
            status
            created_at
            updated_at
            created_by
            applies_to_roles {
                name
            }
            approver_roles {
                name
            }
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
        "uid": "MQ==",
        "name": "Rule 1",
        "description": "Rule 1 description",
        "status": "ENABLED",
        "created_at": "2023-01-10 19:00:30",
        "updated_at": "2023-01-10 19:00:30",
        "created_by": "Sergii Ivashchenko",
        "applies_to_roles": [],
        "approver_roles": [
          {
            "name": "Purchaser's Manager"
          },
          {
            "name": "Company Administrator"
          }
        ],
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

