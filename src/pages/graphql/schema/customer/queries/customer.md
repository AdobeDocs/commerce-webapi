---
title: customer query | Commerce Web APIs
---

# customer query

The `customer` query returns information about the logged-in customer, store credit history and customer's wishlist.

To return or modify information about a customer, we recommend you use customer tokens in the header of your GraphQL calls. However, you also can use [session authentication](https://developer.adobe.com/commerce/webapi/get-started/authentication/gs-authentication-session).

## Syntax

`{customer: {Customer}}`

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

## Output attributes

### Customer attributes

The `customer` object can contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`addresses` | [CustomerAddress](#customeraddress-attributes)  | An array containing the customer's shipping and billing addresses
`allow_remote_shopping_assistance` | Boolean! | Indicates whether the customer has enabled remote shopping assistance
`compare_list` | [CompareList](#comparelist-attributes) | The contents of the customer's comparison list
`created_at` | String | Timestamp indicating when the account was created
`date_of_birth` | String | The customer's date of birth. In keeping with current security and privacy best practices, be sure you are aware of any potential legal and security risks associated with the storage of customers' full date of birth (month, day, year) along with other personal identifiers, such as full name, before collecting or processing such data.
`default_billing` | String | The ID assigned to the billing address
`default_shipping` | String | The ID assigned to the shipping address
`dob` | String | Deprecated. Use `date_of_birth` instead. The customer's date of birth
`email` | String | The customer's email address
`firstname` | String | The customer's first name
`gender` | Int | The customer's gender (Male - 1, Female - 2)
`group_id` | Int | Deprecated. This attribute is not applicable for GraphQL. The group assigned to the user. Default values are 0 (Not logged in), 1 (General), 2 (Wholesale), and 3 (Retailer)
`id` | Int | Deprecated. This attribute is not applicable for GraphQL. The ID assigned to the customer
`is_subscribed` | Boolean | Indicates whether the customer is subscribed to the company's newsletter
`lastname` | String | The customer's family name
`middlename` |String | The customer's middle name
`orders(filter CustomerOrdersFilterInput, currentPage = 1 Int, pageSize = 20 Int)` | [CustomerOrders](#orders-input-attributes) | A list of the customer's placed orders. See [`orders` input attributes](#orders-input-attributes) for details'
`prefix` | String | An honorific, such as Dr., Mr., or Mrs.
`return(uid: ID!)` | Return | Gets details about the specified return request
`returns(pageSize: Int = 20 currentPage: Int = 1)` | Returns | Information about the customer's return requests
`reviews(pageSize: Int = 20 currentPage: Int = 1)` | [ProductReviews](#productreviews-object)! | The list of reviews of the product
`reward_points` | [RewardPoints](#rewardpoints-attributes) | Details about the customer's reward points
`suffix` | String | A value such as Sr., Jr., or III
`taxvat` | String | The customer's Tax/VAT number (for corporate customers)
`wishlist` | Wishlist! | Deprecated. Use `wishlist_v2` instead. Contains the contents of the customer's wish lists
`wishlist_v2(id ID!)` | [Wishlist](#wishlist-attributes)! | Retrieve the specified wish list identified by the unique ID for a Wishlist object

For B2B, company administrators and users can have the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`job_title` | String | The job title for a B2B company user
`requisition_lists (pageSize = 20 Int, currentPage = 1 Int, filter RequisitionListFilterInput)` | RequisitionLists | Contains the customer's requisition lists
`role`| CompanyRole | The role name and permissions assigned to the company user
`status` | CompanyUserStatusEnum | Indicates whether the company user is ACTIVE or INACTIVE
`team` | CompanyTeam | The team the company user is assigned to
`telephone` | String | The phone number of the company user

### CompareList attributes

The `CompareList` object can contain the following attributes:

import CompareListOutput from '/src/pages/_includes/graphql/compare-list-output.md'

<CompareListOutput />

### CustomerAddress attributes

The values assigned to attributes such as `firstname` and `lastname` in this object may be different from those defined in the `Customer` object.

The `CustomerAddress` output returns the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`city` | String | The city or town
`company` | String | The customer's company
`country_code` | CountryCodeEnum | The customer's country
`country_id` | String | Deprecated. Use `country_code` instead. The customer's country
`custom_attributes` | [CustomerAddressAttribute](#customeraddressattribute-attributes) | Deprecated. Not applicable for GraphQL
`customer_id` | Int | Deprecated. This attribute is not applicable for GraphQL. The ID assigned to the customer
`default_billing` | Boolean | Indicates whether the address is the default billing address
`default_shipping` | Boolean | Indicates whether the address is the default shipping address
`extension_attributes` | [CustomerAddressAttribute](#customeraddressattribute-attributes) | Address extension attributes
`fax` | String | The fax number
`firstname` | String | The first name of the person associated with the shipping/billing address
`id` | Int | The ID assigned to the address object
`lastname` | String | The family name of the person associated with the shipping/billing address
`middlename` | String | The middle name of the person associated with the shipping/billing address
`postcode` | String | The customer's ZIP or postal code
`prefix` | String | An honorific, such as Dr., Mr., or Mrs.
`region` | [CustomerAddressRegion](#customeraddressregion-attributes) | An object that defines the customer's state or province
`region_id` | Int | The unique ID for a pre-defined region
`street` | [String] | An array of strings that define the street number and name
`suffix` | String | A value such as Sr., Jr., or III
`telephone` | String | The telephone number
`vat_id` | String | The customer's Tax/VAT number (for corporate customers)

#### CustomerAddressAttribute attributes

The `CustomerAddressAttribute` output data type has been deprecated because the contents are not applicable for GraphQL. It can contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`attribute_code` | String | Attribute code
`value` | String | Attribute value

#### CustomerAddressRegion attributes

The `customerAddressRegion` output returns the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`region` | String | The state or province name
`region_code` | String | The address region code
`region_id` | Int | The unique ID for a pre-defined region

### orders input attributes

import CustomerOrdersOutput from '/src/pages/_includes/graphql/customer-orders-output.md'

<CustomerOrdersOutput />

#### ProductReview object

import ProductReview from '/src/pages/_includes/graphql/product-review.md'

<ProductReview />

#### ProductReviews object

`ProductReviews` contains an array of reviews written about the product.

Attribute |  Data Type | Description
--- | --- | ---
`items` | [[ProductReview]](#productreview-object)! | An array of product reviews
`page_info` | [SearchResultPageInfo!](../../products/queries/products.md#searchresultpageinfo-attributes) | Metadata for pagination rendering

### Return attributes

import Return from '/src/pages/_includes/graphql/return.md'

<Return />

### Returns attributes

The Returns object contains an array of [Return](#returns-attributes) objects.

### Store credit attributes

In Adobe Commerce, the merchant can assign store credit to customers. The application maintains the history of all changes to the balance of store credit available to the customer. The customer must be logged in to access the store credit history and balance.

Store credits must be enabled to return store credit attributes. If store credits are disabled after previously being enabled, the query returns the customer's current balance as null.

Attribute |  Data Type | Description
--- | --- | ---
`store_credit` | [CustomerStoreCredit](#customerstorecredit-attributes) | Contains the store credit information for the logged-in customer

#### CustomerStoreCredit attributes

The `store_credit` object contains store credit information, including the balance and history.

Attribute |  Data Type | Description
--- | --- | ---
`balance_history` | [`CustomerStoreCreditHistory`](#customerstorecredithistory-attributes) | Lists changes to the amount of store credit available to the customer. If the history or store credit feature is disabled, then a null value will be returned.<br/><br/>You can specify the following optional parameters to control paging in the output.<br/><br/>`pageSize` - An integer that specifies the maximum number of results to return at once. The default value is 20.<br/><br/>`currentPage` - An integer that specifies which page of the results to return. The default value is 1
`current_balance` | Money | The current store credit balance
`enabled` | Boolean | Indicates whether store credits are enabled. If the feature is disabled, then the balance will not be returned

#### CustomerStoreCreditHistory attributes

The `CustomerStoreCreditHistory` object contains an array of store credit items and paging information. If the store credit or store credit history feature is disabled, then a null value will be returned.

Attribute |  Data Type | Description
--- | --- | ---
`items` | [[`CustomerStoreCreditHistoryItem`](#customerstorecredithistoryitem-attributes)] | An array of products that match the specified search criteria
`page_info` | SearchResultPageInfo | An object that includes the `page_size` and `current_page` values specified in the query
`total_count` | Int | The number of items returned

#### CustomerStoreCreditHistoryItem attributes

The `CustomerStoreCreditHistoryItem` object contains information about a specific change to the customer's store credit.

Attribute |  Data Type | Description
--- | --- | ---
`action` | String | The action taken on the customer's store credit
`actual_balance` | Money | The store credit available to the customer as a result of this action
`balance_change` | Money | The amount added to or subtracted from the store credit as a result of this action
`date_time_changed` | String | Date and time when the store credit change was made

### Wishlist attributes

import Wishlist from '/src/pages/_includes/graphql/wishlist.md'

<Wishlist />

## B2B output attributes

If B2B is installed the `Customer` object can contain additional information.

### RequisitionListFilterInput attributes

The `RequisitionListFilterInput` object defines filters that limit the number of requisition lists returned.

Attribute |  Data Type | Description
--- | --- | ---
`name` | FilterMatchTypeInput | Filter by the display name of the requisition list
`uids` | FilterEqualTypeInput | Filter requisition lists by one or more requisition list IDs

### RequisitionList attributes

import RequisitionList from '/src/pages/_includes/graphql/requisition-list.md'

<RequisitionList />

### RequisitionLists attributes

The RequisitionLists object contains an array of requisition lists.

Attribute |  Data Type | Description
--- | --- | ---
`items` | [[RequisitionList]](#requisitionlist-attributes) | An array of requisition lists
`page_info` | SearchResultPageInfo | Contains pagination metadata
`total_count` | Int | The number of returned requisition lists

## Related topics

*  [isEmailAvailable query](../../b2b/company/queries/is-company-email-available.md)
*  [generateCustomerToken mutation](../../customer/mutations/generate-token.md)
*  [createCustomer mutation](../../customer/mutations/create.md)
*  [createCustomerAddress mutation](../../customer/mutations/create-address.md)
