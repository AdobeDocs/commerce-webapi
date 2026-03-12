---
title: Purchase orders (B2B)   
keywords:
  - B2B
---

import CommerceOnly from '/src/_includes/commerce-only.md'

<CommerceOnly />

# Purchase orders (B2B)

When B2B for Adobe Commerce is installed and purchase orders are activated for a company account, all orders are automatically created as purchase orders. Company users with the required permissions can create, edit, and delete their own purchase orders as well as those created by subordinate users.

Adobe Commerce provides multiple mutations that define and manage purchase orders. However, there are no top-level queries that return lists of purchase orders or purchase order details.
The [`customer` query](../../customer/queries/customer.md) now returns details about purchase orders.

See [Purchase Orders for Companies](https://experienceleague.adobe.com/docs/commerce-admin/b2b/purchase-orders/purchase-order-flow.html) in the _B2B for Adobe Commerce Guide_ for information about enabling the B2B purchase order capabilities and the different workflows for online and offline payment methods.

The following examples demonstrate `customer` queries that return information about purchase orders.

<InlineAlert variant="warning" slots="text" />

All examples require a valid [customer authentication token](../../customer/mutations/generate-token.md).

## Return a list of purchase orders

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
              order {
                id
              }
              created_at
              updated_at
              created_by {
                firstname
                lastname
              }
              status
              order {
                total {
                  grand_total {
                    value
                    currency
                  }
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
        "total_count": 2,
        "page_info": {
          "current_page": 1,
          "page_size": 20,
          "total_pages": 1
        },
        "items": [
          {
            "uid": "Nw==",
            "number": "000000007",
            "order": null,
            "created_at": "2023-01-25 20:59:05",
            "updated_at": "2023-01-25 21:10:31",
            "created_by": {
              "firstname": "Melanie",
              "lastname": "Shaw"
            },
            "status": "APPROVED"
          },
          {
            "uid": "Ng==",
            "number": "000000006",
            "order": {
              "id": "NQ==",
              "total": {
                "grand_total": {
                  "value": 375,
                  "currency": "USD"
                }
              }
            },
            "created_at": "2023-01-25 20:35:56",
            "updated_at": "2023-01-31 19:45:09",
            "created_by": {
              "firstname": "Kevin",
              "lastname": "Harper"
            },
            "status": "ORDER_PLACED"
          }
        ]
      }
    }
  }
}
```

## Return details about one purchase order

The following example returns the purchase order information.

**Request:**

``` graphql
{
    customer {
        purchase_order(uid: "MQ==") {
            uid
            number
            created_at
            updated_at
            status
            available_actions
            created_by {
                firstname
                lastname
                email
            }
            order {
                number
            }
            comments {
                created_at
                text
                author {
                    firstname
                    lastname
                    email
                }
            }
            history_log {
                activity
                created_at
            }
            quote {
                items {
                    product {
                        sku
                    }
                }
                prices {
                    grand_total {
                        value
                        currency
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
      "purchase_order": {
        "uid": "MQ==",
        "number": "000000001",
        "created_at": "2023-01-10 18:32:13",
        "updated_at": "2023-01-10 18:32:13",
        "status": "APPROVED",
        "available_actions": [
          "PLACE_ORDER"
        ],
        "created_by": {
          "firstname": "John",
          "lastname": "Doe",
          "email": "john.doe@example.com"
        },
        "order": null,
        "comments": [],
        "history_log": [],
        "quote": {
          "items": [
            {
              "product": {
                "sku": "Simple-product"
              }
            }
          ],
          "prices": {
            "grand_total": {
              "value": 14,
              "currency": "USD"
            }
          }
        }
      }
    }
  }
}
```

## Check if the customer is enabled for purchase orders

The following example returns `true` if the customer has the purchase order functionality enabled.

**Request:**

``` graphql
{
    customer {
        purchase_orders_enabled
    }
}
```

**Response:**

``` json
{
  "data": {
    "customer": {
      "purchase_orders_enabled": true
    }
  }
}
```
