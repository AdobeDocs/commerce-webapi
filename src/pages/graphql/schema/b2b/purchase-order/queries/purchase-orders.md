---
title: purchase_orders query | Commerce Web APIs
edition: b2b   
---

# purchase_orders query

The `purchase_orders` query returns the list of purchase orders.

## Syntax

```graphql
{
    customer {
        purchase_orders(
            filter: PurchaseOrdersFilterInput,
            currentPage: Int = 1,
            pageSize: Int = 20
        ) {
            PurchaseOrders
        }
    }
}
```

## Example usage

The following example returns the list of purchase orders.

**Request:**

``` graphql
{
    customer {
        purchase_orders(
            currentPage: 1,
            pageSize: 20,
            filter: {
                company_purchase_orders: true,
                created_date: {
                    from: "2022-02-24 04:00:00"
                    to: "2023-02-24 04:00:00"
                },
                status: PENDING
            }
        ) {
            total_count
            page_info {
                current_page
                page_size
                total_pages
            }
            items {
                uid
                number
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
        "total_count": 1,
        "page_info": {
          "current_page": 1,
          "page_size": 20,
          "total_pages": 1
        },
        "items": [
          {
            "uid": "MQ==",
            "number": "000000001"
          }
        ]
      }
    }
  }
}
```
