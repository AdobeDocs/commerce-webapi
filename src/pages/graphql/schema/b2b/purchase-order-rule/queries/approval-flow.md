---
title: approval_flow query | Commerce Web APIs
edition: b2b
---

# approval_flow query

The `approval_flow` query returns the approval history of the purchase order.

## Syntax

```graphql
{
    customer {
        purchase_orders {
            approval_flow {
                [PurchaseOrderRuleApprovalFlow]!
            }
        }
    }
}
```

## Example usage

The following example returns the approval history of the purchase order.

**Request:**

``` graphql
{
	customer {
    purchase_orders(filter: {company_purchase_orders: true}) {
      items {
        approval_flow {
            rule_name
            events {
                name
                role
                status
                message
            }
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
      "purchase_orders": {
        "items": [
          {
            "approval_flow": [
              {
                "rule_name": "Rule 1",
                "events": [
                  {
                    "name": "Unknown Customer",
                    "role": "Company Administrator",
                    "status": "PENDING",
                    "message": "Pending Approval from Company Administrator"
                  },
                  {
                    "name": "Unknown Customer",
                    "role": "Purchaser's Manager",
                    "status": "PENDING",
                    "message": "Pending Approval from Purchaser's Manager"
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  }
}
```

