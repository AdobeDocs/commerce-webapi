---
title: customer query
---

import CustomAttributeCustomer from '/src/_includes/graphql/examples/custom-attribute-customer.md'
import CustomerS3Download from '/src/_includes/graphql/examples/customer-s3-download.md'

# customer query

The `customer` query returns information about the logged-in customer, store credit history and customer's wishlist.

To retrieve information about a customer, we recommend you use customer tokens in the header of your GraphQL calls. However, you also can use [session authentication](https://developer.adobe.com/commerce/webapi/get-started/authentication/gs-authentication-session).

## Syntax

`{customer: {Customer}}`

## Reference

The [`customer`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-customer) reference provides detailed information about the types and fields defined in this query.

## Example usage

### Retrieve basic information about the logged-in customer

The following call returns information about the logged-in customer. Provide the customer's token in the header section of the query.

**Request:**

```graphql
{
  customer {
    firstname
    lastname
    suffix
    email
    addresses {
      firstname
      lastname
      street
      city
      region {
        region_code
        region
      }
      postcode
      country_code
      telephone
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "customer": {
      "firstname": "John",
      "lastname": "Doe",
      "suffix": null,
      "email": "jdoe@example.com",
      "addresses": [
       {
         "firstname": "John",
         "lastname": "Doe",
         "street": [
           "123 Elm Street"
         ],
         "city": "Anytown",
         "region": {
           "region_code": "MI",
           "region": "Michigan"
         },
         "postcode": "78758",
         "country_code": "US",
         "telephone": "512 555-1212"
        }
      ]
    }
  }
}
```

### Retrieve custom attributes metadata from a customer

<CustomAttributeCustomer />

### Retrieve custom attributes metadata from a customer address

The following call returns the customer address custom attributes for the logged-in customer. Provide the customer's token in the header section of the query.

**Request:**

```graphql
{
  customer {
    email
    addresses {
      city
      custom_attributesV2 {
        code
        ... on AttributeValue {
            value
        }
        ... on AttributeSelectedOptions {
          selected_options {
            label
            value
          }
        }
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "customer": {
      "email": "jdoe@example.com",
      "addresses": [
        {
          "city": "Marseille",
          "custom_attributesV2": [
            {
              "code": "neighbourhood",
              "value": "St Barnabé"
            },
            {
              "code": "services",
              "selected_options": [
                {
                  "label": "hospital",
                  "value": "507"
                },
                {
                  "label": "police",
                  "value": "508"
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
```

### Retrieve custom attributes metadata filtered by `code`

The following call returns the customer and customer address custom attributes for the logged-in customer filtered by `code`. Provide the customer's token in the header section of the query.

**Request:**

```graphql
{
  customer {
    email
    custom_attributes(attributeCodes: ["studies"]) {
      code
      ... on AttributeValue {
        value
      }
      ... on AttributeSelectedOptions {
        selected_options {
          label
          value
        }
      }
    }
    addresses {
      city
      custom_attributesV2(attributeCodes: ["services"]) {
        code
        ... on AttributeValue {
            value
        }
        ... on AttributeSelectedOptions {
          selected_options {
            label
            value
          }
        }
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "customer": {
      "email": "jdoe@example.com",
      "custom_attributes": [
        {
          "code": "studies",
          "selected_options": [
            {
              "label": "BSc",
              "value": "501"
            },
            {
              "label": "MBA",
              "value": "502"
            }
          ]
        }
      ],
      "addresses": [
        {
          "city": "Marseille",
          "custom_attributesV2": [
            {
              "code": "services",
              "selected_options": [
                {
                  "label": "hospital",
                  "value": "507"
                },
                {
                  "label": "police",
                  "value": "508"
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
```

### Retrieve a summary of the customer's order history

The following example returns a summary of the logged-in customer's previous orders.

**Request:**

```graphql
query {
  customer {
    orders(
      pageSize: 20
    ) {
      items {
        id
        order_date
        total {
          grand_total {
            value
            currency
          }
        }
        status
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "customer": {
      "orders": {
        "items": [
          {
            "id": "MQ==",
            "order_date": "2020-03-18 17:25:20",
            "total": {
              "grand_total": {
                "value": 36.39,
                "currency": "USD"
              }
            },
            "status": "Complete"
          },
          {
            "id": "Mg==",
            "order_date": "2020-03-18 17:25:20",
            "total": {
              "grand_total": {
                "value": 39.64,
                "currency": "USD"
              }
            },
            "status": "Closed"
          },
          {
            "id": "Mw==",
            "order_date": "2020-03-21 22:41:38",
            "total": {
              "grand_total": {
                "value": 205.68,
                "currency": "USD"
              }
            },
            "status": "Pending"
          },
          {
            "id": "NA==",
            "order_date": "2020-08-03 02:35:35",
            "total": {
              "grand_total": {
                "value": 159.13,
                "currency": "USD"
              }
            },
            "status": "Complete"
          },
          {
            "id": "NQ==",
            "order_date": "2020-09-08 03:57:11",
            "total": {
              "grand_total": {
                "value": 132.57,
                "currency": "USD"
              }
            },
            "status": "Complete"
          }
        ]
      }
    }
  }
}
```

### Retrieve orders based on scope argument:

The following query returns all customer orders, across all store view codes. The value of GLOBAL in the scope field overrides the store view code specified in the Store header.

**Request:**

```graphql
{
    customer {
        orders(
            pageSize: 20,
            scope: GLOBAL
        ) {
            items {
                id
                order_number
                order_date
                total {
                    grand_total
                    { value currency }
                }
                status
            }
        }
    }
}
```

**Response:**

```json
{
    "data": {
        "customer": {
            "orders": {
                "items": [
                    {
                        "id": "ODg=",
                        "order_number": "48000000001",
                        "order_date": "2022-07-27 18:01:38",
                        "total": {
                            "grand_total": {
                                "value": 15,
                                "currency": "USD"
                            }
                        },
                        "status": "Pending"
                    }
                ]
            }
        }
    }
}
```

### Retrieve detailed information about a specific order

The following example returns details about one of the customer's previous orders.

These topics contain examples with fragments and provide even more details:

*  [CreditMemoItemInterface attributes and implementations](../../orders/interfaces/credit-memo-item.md)
*  [InvoiceItemInterface attributes and implementations](../../orders/interfaces/invoice-item.md)
*  [OrderItemInterface attributes and implementations](../../orders/interfaces/order-item.md)
*  [ShipmentItemInterface attributes and implementations](../../orders/interfaces/shipment-item.md)

**Request:**

```graphql
{
  customer {
    orders(filter: {number: {eq: "000000001"}}) {
      total_count
      items {
        id
        number
        order_date
        status
        items {
          product_name
          product_sku
          product_url_key
          product_sale_price {
            value
            currency
          }
          quantity_ordered
          quantity_invoiced
          quantity_shipped
          eligible_for_return
        }
        carrier
        shipments {
          id
          number
          items {
            product_name
            quantity_shipped
          }
        }
        total {
          base_grand_total {
            value
            currency
          }
          grand_total {
            value
            currency
          }
          total_tax {
            value
          }
          subtotal {
            value
            currency
          }
          taxes {
            amount {
              value
              currency
            }
            title
            rate
          }
          total_shipping {
            value
          }
          shipping_handling {
            amount_including_tax {
              value
            }
            amount_excluding_tax {
              value
            }
            total_amount {
              value
            }
            taxes {
              amount {
                value
              }
              title
              rate
            }
          }
          discounts {
            amount {
              value
              currency
            }
            label
          }
        }
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "customer": {
      "orders": {
        "total_count": 1,
        "items": [
          {
            "id": "MQ==",
            "number": "000000001",
            "order_date": "2020-11-14 22:25:48",
            "status": "Processing",
            "items": [
              {
                "product_name": "Iris Workout Top",
                "product_sku": "WS03-XS-Red",
                "product_url_key": "iris-workout-top",
                "product_sale_price": {
                  "value": 29,
                  "currency": "USD"
                },
                "quantity_ordered": 1,
                "quantity_invoiced": 1,
                "quantity_shipped": 1,
                "eligible_for_return": true
              }
            ],
            "carrier": "Flat Rate",
            "shipments": [
              {
                "id": "MDAwMDAwMDAx",
                "number": "000000001",
                "items": [
                  {
                    "product_name": "Iris Workout Top",
                    "quantity_shipped": 1
                  }
                ]
              }
            ],
            "total": {
              "base_grand_total": {
                "value": 36.39,
                "currency": "USD"
              },
              "grand_total": {
                "value": 36.39,
                "currency": "USD"
              },
              "total_tax": {
                "value": 2.39
              },
              "subtotal": {
                "value": 29,
                "currency": "USD"
              },
              "taxes": [
                {
                  "amount": {
                    "value": 2.39,
                    "currency": "USD"
                  },
                  "title": "US-MI-*-Rate 1",
                  "rate": 8.25
                }
              ],
              "total_shipping": {
                "value": 5
              },
              "shipping_handling": {
                "amount_including_tax": {
                  "value": 5
                },
                "amount_excluding_tax": {
                  "value": 5
                },
                "total_amount": {
                  "value": 5
                },
                "taxes": []
              },
              "discounts": []
            }
          }
        ]
      }
    }
  }
}
```

### Retrieve the store credit history

The following example returns the store credit history for the logged-in user.

**Request:**

```graphql
query {
  customer {
    firstname
    lastname
    store_credit {
      enabled
      balance_history(pageSize: 10) {
        items {
          action
          actual_balance {
            currency
            value
          }
          balance_change {
            currency
            value
          }
          date_time_changed
        }
        page_info {
          page_size
          current_page
          total_pages
        }
        total_count
      }
      current_balance {
        currency
        value
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "customer": {
      "firstname": "John",
      "lastname": "Doe",
      "store_credit": {
        "enabled": true,
        "balance_history": {
          "items": [
            {
              "action": "Updated",
              "actual_balance": {
                "currency": "USD",
                "value": 10
              },
              "balance_change": {
                "currency": "USD",
                "value": -100
              },
              "date_time_changed": "2019-07-15 21:47:59"
            },
            {
              "action": "Updated",
              "actual_balance": {
                "currency": "USD",
                "value": 110
              },
              "balance_change": {
                "currency": "USD",
                "value": 10
              },
              "date_time_changed": "2019-07-15 21:47:18"
            },
            {
              "action": "Created",
              "actual_balance": {
                "currency": "USD",
                "value": 100
              },
              "balance_change": {
                "currency": "USD",
                "value": 100
              },
              "date_time_changed": "2019-07-15 16:31:05"
            }
          ],
          "page_info": {
            "page_size": 10,
            "current_page": 1,
            "total_pages": 1
          },
          "total_count": 3
        },
        "current_balance": {
          "currency": "USD",
          "value": 10
        }
      }
    }
  }
}
```

### Retrieve the customer's wish list

The following query returns the customer's wish lists. Adobe Commerce allows customers to have multiple wish lists.

**Request:**

```graphql
{
  customer {
    wishlists {
      id
      name
      items_count
      items_v2 {
        items {
          id
          product {
            uid
            name
            sku
          }
        }
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "customer": {
      "wishlists": [
        {
          "id": "1",
          "name": "Vacation Wants",
          "items_count": 10,
          "items_v2": {
            "items": [
              {
                "id": "1",
                "product": {
                  "uid": "MTM=",
                  "name": "Overnight Duffle",
                  "sku": "24-WB07"
                }
              },
              {
                "id": "2",
                "product": {
                  "uid": "MTA=",
                  "name": "Savvy Shoulder Tote",
                  "sku": "24-WB05"
                }
              },
              {
                "id": "3",
                "product": {
                  "uid": "MTE=",
                  "name": "Endeavor Daytrip Backpack",
                  "sku": "24-WB06"
                }
              },
              {
                "id": "4",
                "product": {
                  "uid": "MTA5OA==",
                  "name": "Miko Pullover Hoodie",
                  "sku": "WH04"
                }
              },
              {
                "id": "5",
                "product": {
                  "uid": "MTIyNg==",
                  "name": "Stellar Solar Jacket",
                  "sku": "WJ01"
                }
              },
              {
                "id": "6",
                "product": {
                  "uid": "MTcyMg==",
                  "name": "Nora Practice Tank",
                  "sku": "WT03"
                }
              },
              {
                "id": "7",
                "product": {
                  "uid": "MTY5MA==",
                  "name": "Bella Tank",
                  "sku": "WT01"
                }
              },
              {
                "id": "17",
                "product": {
                  "uid": "MTg=",
                  "name": "Pursuit Lumaflex&trade; Tone Band",
                  "sku": "24-UG02"
                }
              },
              {
                "id": "18",
                "product": {
                  "uid": "MQ==",
                  "name": "Joust Duffle Bag",
                  "sku": "24-MB01"
                }
              },
              {
                "id": "20",
                "product": {
                  "uid": "NTI=",
                  "name": "Sprite Yoga Companion Kit",
                  "sku": "24-WG080"
                }
              }
            ]
          }
        },
        {
          "id": "2",
          "name": "Lose the Muffintop",
          "items_count": 5,
          "items_v2": {
            "items": [
              {
                "id": "8",
                "product": {
                  "uid": "NDk=",
                  "name": "Advanced Pilates & Yoga (Strength)",
                  "sku": "240-LV08"
                }
              },
              {
                "id": "10",
                "product": {
                  "uid": "MTQ1MA==",
                  "name": "Layla Tee",
                  "sku": "WS04"
                }
              },
              {
                "id": "11",
                "product": {
                  "uid": "MTU2Mg==",
                  "name": "Radiant Tee",
                  "sku": "WS12"
                }
              },
              {
                "id": "12",
                "product": {
                  "uid": "MTYxMA==",
                  "name": "Electra Bra Top",
                  "sku": "WB01"
                }
              },
              {
                "id": "13",
                "product": {
                  "uid": "MTY0Mg==",
                  "name": "Celeste Sports Bra",
                  "sku": "WB03"
                }
              }
            ]
          }
        }
      ]
    }
  }
}
```

### List a company user's purchase orders

The following example returns information about all purchase orders the company user has made since January 1, 2023.

The [Purchase orders](../../b2b/purchase-order/) topic contains additional examples that query purchase order functionality.

**Request:**

```graphql
{
    customer {
        purchase_orders(
            currentPage: 1,
            pageSize: 20,
            filter: {
                created_date: {
                  from: "2023-01-21 00:00:00"
            }
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

```json
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
            "uid": "MTE=",
            "number": "000000011",
            "order": null,
            "created_at": "2023-02-01 18:01:40",
            "updated_at": "2023-02-01 18:01:40",
            "created_by": {
              "firstname": "John",
              "lastname": "Doe"
            },
            "status": "PENDING"
          },
          {
            "uid": "MTA=",
            "number": "000000010",
            "order": null,
            "created_at": "2023-01-31 20:46:16",
            "updated_at": "2023-01-31 21:10:38",
            "created_by": {
              "firstname": "John",
              "lastname": "Doe"
            },
            "status": "REJECTED"
          }
        ]
      }
    }
  }
}
```

### List purchase order approval rules

The following example returns the list of purchase order approval rules.

The [Purchase order approval rules](../../b2b/purchase-order-rule/) topic contains additional examples that query approval rule functionality.

**Request:**

```graphql
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

```json
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

### Retrieve a file uploaded to Amazon S3

<Edition name="saas" />

< CustomerS3Download />

## Related topics

*  [isEmailAvailable query](../../b2b/company/queries/is-company-email-available.md)
*  [generateCustomerToken mutation](../mutations/generate-token.md)
*  [createCustomerV2 mutation](../mutations/create-v2.md)
*  [createCustomerAddress mutation](../mutations/create-address.md)
