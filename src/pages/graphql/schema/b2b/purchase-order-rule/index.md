---
title: Purchase order approval rules (B2B)   
keywords:
  - B2B
---

import CommerceOnly from '/src/_includes/commerce-only.md'

<CommerceOnly />

# Purchase order approval rules (B2B)

In a typical implementation of purchase orders, a company admin or manager with sufficient permissions sets up approval rules that enforce company policies. These approval rules establish who the rule applies to, when the rule is triggered, and who must approve the affected purchase order.

Adobe Commerce provides multiple mutations that define and validate approval rules. However, there are no top-level queries to return lists of rules or purchase orders awaiting approval.
The [`customer` query](../../customer/queries/customer.md) now returns details about purchase orders and approval rules.

The [Purchase order approval rules](https://experienceleague.adobe.com/docs/commerce-admin/b2b/purchase-orders/account-dashboard-approval-rules.html) topic in the _B2B for Adobe Commerce Guide_ provides additional information about setting up approval rules.

The following examples demonstrate `customer` queries that return information about approval rules.

<InlineAlert variant="warning" slots="text" />

All examples require a valid [customer authentication token](../../customer/mutations/generate-token.md).

## Return a list of approval rules

The `purchase_order_approval_rules` query returns the list of purchase order approval rules. Use the value of the `items.uid` field to get details about a specific approval rule.

The following example returns the list of purchase order approval rules.

**Request:**

``` graphql
{
  customer {
    purchase_order_approval_rules {
      items {
        name
        uid
      }
      page_info {
        page_size
        current_page
        total_pages
      }
      total_count
    }
  }
}
```

**Response:**

``` json
{
  "data": {
    "customer": {
      "purchase_order_approval_rules": {
        "items": [
          {
            "name": "Autoapprove order",
            "uid": "OQ=="
          },
          {
            "name": "Over 10 SKUs",
            "uid": "Ng=="
          },
          {
            "name": "Purchase order over $1000",
            "uid": "NQ=="
          }
        ],
        "page_info": {
          "page_size": 20,
          "current_page": 1,
          "total_pages": 1
        },
        "total_count": 3
      }
    }
  }
}
```

## Get approval rule details

The `purchase_order_approval_rule` query returns information about the specified approval rule. To retrieve details about the amount or quantity required to trigger an approval rule, you must specify the implementations of the [`PurchaseOrderApprovalRuleConditionInterface`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-PurchaseOrderApprovalRuleConditionInterface).

The following example returns information about the purchase order approval rule.

**Request:**

``` graphql
{
  customer {
    purchase_order_approval_rule(uid: "Ng==") {
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
        "uid": "Ng==",
        "name": "Over 10 SKUs",
        "description": null,
        "status": "ENABLED",
        "created_at": "2023-01-25 20:05:25",
        "updated_at": "2023-01-25 20:05:25",
        "created_by": "Melanie Shaw",
        "applies_to_roles": [
          {
            "name": "Default User"
          }
        ],
        "approver_roles": [
          {
            "name": "Manager"
          }
        ],
        "condition": {
          "attribute": "NUMBER_OF_SKUS",
          "operator": "MORE_THAN_OR_EQUAL_TO",
          "quantity": 10
        }
      }
    }
  }
}
```

## Approval flow

Company users that are enabled to create or review purchase orders and are designated as an approver can view purchase orders in the **My Purchase Orders** dashboard page.

The following example returns the approval history of purchase orders made by the company user's subordinates.

**Request:**

``` graphql
{
  customer {
    purchase_orders(filter: { company_purchase_orders: true }) {
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

## Return approval rule metadata

The following example returns the metadata necessary to render the form for [creating or editing an approval rule](https://experienceleague.adobe.com/docs/commerce-admin/b2b/purchase-orders/account-dashboard-approval-rules.html#approval-rule-setup).

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
          },
          {
            "name": "Manager"
          },
          {
            "name": "Director"
          },
          {
            "name": "Admin"
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
          },
          {
            "name": "Manager"
          },
          {
            "name": "Director"
          },
          {
            "name": "Admin"
          }
        ]
      }
    }
  }
}
```
