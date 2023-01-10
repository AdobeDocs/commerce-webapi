---
title: purchase_order_approval_rules query | Commerce Web APIs
edition: b2b
---

# purchase_order_approval_rules query

The `purchase_order_approval_rules` query returns the list of purchase order approval rules.

## Syntax

```graphql
{
    customer {
        purchase_order_approval_rules(
            currentPage: Int = 1,
            pageSize: Int = 20
        ) {
            PurchaseOrderApprovalRules
        }
    }
}
```

## Example usage

The following example returns the list of purchase order approval rules.

**Request:**

``` graphql
{
    customer {
        purchase_order_approval_rules {
            items {
                name
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
            "name": "Rule 1"
          }
        ],
        "page_info": {
          "page_size": 20,
          "current_page": 1,
          "total_pages": 1
        },
        "total_count": 1
      }
    }
  }
}
```

