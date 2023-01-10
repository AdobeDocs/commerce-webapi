---
title: purchase_order_approval_rule_metadata query | Commerce Web APIs
edition: b2b
---

# purchase_order_approval_rule_metadata query

The `purchase_order_approval_rule_metadata` query returns metadata necessary to render purchase order approval rule create or edit form.

## Syntax

```graphql
{
    customer {
        purchase_order_approval_rule_metadata {
            PurchaseOrderApprovalRuleMetadata
        }
    }
}
```

## Example usage

The following example returns metadata necessary to render purchase order approval rule create or edit form.

**Request:**

``` graphql
{
    customer {
        purchase_order_approval_rule_metadata {
            available_applies_to {
                name
            }
            available_condition_currencies {
                code
                symbol
            }
            available_requires_approval_from {
                name
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
      "purchase_order_approval_rule_metadata": {
        "available_applies_to": [
          {
            "name": "Default User"
          }
        ],
        "available_condition_currencies": [
          {
            "code": "USD",
            "symbol": "$"
          }
        ],
        "available_requires_approval_from": [
          {
            "name": "Company Administrator"
          },
          {
            "name": "Purchaser's Manager"
          },
          {
            "name": "Default User"
          }
        ]
      }
    }
  }
}
```

