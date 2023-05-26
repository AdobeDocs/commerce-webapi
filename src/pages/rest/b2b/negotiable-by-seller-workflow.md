---
title: Place a negotiable quote order
description: An overview of the REST calls needed to place items in a shopping cart, negotiate a quote, and reimburse credit
edition: ee
---

import * as Vars from '../../../data/vars.js';

# Place a negotiable quote order initiated by seller

This topic describes how REST calls can be used to create negotiable quote in Draft state, add products to quote, update quote data such as name, provide discount and convert to order as buyer.

## Prerequisites

-  You have [installed and enabled](https://experienceleague.adobe.com/docs/commerce-admin/b2b/install.html) <Vars.sitedatavarb2b/>.
-  You have [created a company](company-object.md).
-  You have an integration or [admin authorization token](https://developer.adobe.com/commerce/webapi/rest/tutorials/orders/order-admin-token.html) to make calls on behalf of seller, and a [customer token](https://developer.adobe.com/commerce/webapi/rest/tutorials/orders/order-create-customer.html#get-token) to make calls on behalf of the company user.


## Create a negotiable quote

In this example, the seller initiates a negotiable quote. The seller applies a discount to the quote and sends the quote to the buyer.


### Initiate a negotiable quote

The seller initiates a negotiable quote.

Initiating a negotiable quote by seller places it in the `draft_by_admin` state.

**Endpoint:**

`POST <host>/rest/default/V1/negotiableQuote/draft`

**Headers:**

```terminal
Content-Type application/json
Authorization Bearer <admin token>
```

<CodeBlock slots="heading, code" repeat="2" languages="JSON, JSON" />

#### Payload

```json
{
  "customerId": 5
}
```

#### Response

```json
`31` // An integer indicating the new quoteId
```

### Update negotiable quote

Seller can now add products and optionally change negotiable quote name

**Headers:**

```terminal
Content-Type application/json
Authorization Bearer <admin token>
```

**Endpoint:**

`PUT /V1/negotiableQuote/31`

<CodeBlock slots="heading, code" repeat="2" languages="JSON, JSON" />

#### Payload

```json
{
  "quote": {
    "id": 31,
    "items": [
      {
        "sku": "24-UG02",
        "qty": 1
      },
      {
        "sku": "24-MB01",
        "qty": 100
      }
    ],
    "extension_attributes": {
      "negotiable_quote": {
        "quote_name": "5% for bags"
      }
    }
  }
}
```

#### Response

```json
// an empty array
```

### Adjust the negotiable quote

The seller provides a 5% discount. The `negotiated_price_type` value of `1` indicates a percentage discount.

**Headers:**

```terminal
Content-Type application/json
Authorization Bearer <admin token>
```

**Endpoint:**

`PUT /V1/negotiableQuote/31`

<CodeBlock slots="heading, code" repeat="2" languages="JSON, JSON" />

#### Payload

```json
{
  "quote": {
      "id": 31,
      "extension_attributes": {
        "negotiable_quote": {
         "negotiated_price_type": 1,
          "negotiated_price_value": 5
        }
      }
    }
}
```

#### Response

```json
// an empty array
```

### Recalculate prices

Prices must be recalculated before sending quote to buyer.

**Headers:**

```terminal
Content-Type application/json
Authorization Bearer <admin token>
```

**Endpoint:**

`POST /V1/negotiableQuote/pricesUpdated`

<CodeBlock slots="heading, code" repeat="2" languages="JSON, JSON" />

#### Payload

```json
{
  "quoteIds": [31]
}
```

#### Response

```json
`true` // indicating the request was successful
```

### Send the negotiable quote to the buyer

Now that the seller has updated the quote, it must be sent to the buyer. The buyer will then be able to either accept the offer and begin the checkout process, or request further negotiations.

This call places the quote in the `submitted_by_admin` state.

**Headers:**

```terminal
Content-Type application/json
Authorization Bearer <admin token>
```

**Endpoint:**

`POST /V1/negotiableQuote/submitToCustomer`

<CodeBlock slots="heading, code" repeat="2" languages="JSON, JSON" />

#### Payload

```json
{
  "quoteId": 31,
  "comment": "We have provided a 5% discount to your order."
}
```

#### Response

```json
`true` // indicating the request was successful
```
## Complete a negotiable quote

The buyer accepts the discount and completes the order.

### Set the shipping address

Buyer can set shipping address and shipping method for the quote

**Headers:**

```terminal
Content-Type application/json
Authorization Bearer <customer token>
```

**Endpoint:**

`POST` /V1/negotiable-carts/31/shipping-information

<CodeBlock slots="heading, code" repeat="2" languages="JSON, JSON" />

#### payload

```json

{
  "addressInformation": {
    "shipping_address": {
      "region": "California",
      "region_id": 12,
      "region_code": "CA",
      "country_id": "US",
      "street": [
        "100 Big Tree Avenue"
      ],
      "postcode": "99999",
      "city": "San Francisco",
      "firstname": "Melanie",
      "lastname": "Shaw",
      "email": "mshaw@example.com",
      "telephone": "415-555-1212"
    },
    "shipping_carrier_code": "tablerate",
    "shipping_method_code": "bestway"
  }
}
```

#### Response

```json
{
  "payment_methods": [
    {
      "code": "checkmo",
      "title": "Check \/ Money order"
    }
  ],
  "totals": {
    "grand_total": 2601.16,
    "base_grand_total": 2601.16,
    "subtotal": 2596.16,
    "base_subtotal": 2596.16,
    "discount_amount": 0,
    "base_discount_amount": 0,
    "subtotal_with_discount": 2596.16,
    "base_subtotal_with_discount": 2596.16,
    "shipping_amount": 5,
    "base_shipping_amount": 5,
    "shipping_discount_amount": 0,
    "base_shipping_discount_amount": 0,
    "tax_amount": 0,
    "base_tax_amount": 0,
    "weee_tax_applied_amount": null,
    "shipping_tax_amount": 0,
    "base_shipping_tax_amount": 0,
    "subtotal_incl_tax": 2596.16,
    "shipping_incl_tax": 5,
    "base_shipping_incl_tax": 5,
    "base_currency_code": "USD",
    "quote_currency_code": "USD",
    "items_qty": 101,
    "items": [
      {
        "item_id": 12,
        "price": 12.16,
        "base_price": 12.16,
        "qty": 1,
        "row_total": 12.16,
        "base_row_total": 12.16,
        "row_total_with_discount": 0,
        "tax_amount": 0,
        "base_tax_amount": 0,
        "tax_percent": 0,
        "discount_amount": 0,
        "base_discount_amount": 0,
        "discount_percent": 0,
        "price_incl_tax": 12.16,
        "base_price_incl_tax": 12.16,
        "row_total_incl_tax": 12.16,
        "base_row_total_incl_tax": 12.16,
        "options": "[]",
        "weee_tax_applied_amount": null,
        "weee_tax_applied": null,
        "extension_attributes": {
          "negotiable_quote_item_totals": {
            "cost": 0,
            "catalog_price": 16,
            "base_catalog_price": 16,
            "catalog_price_incl_tax": 16,
            "base_catalog_price_incl_tax": 16,
            "cart_price": 12.8,
            "base_cart_price": 12.8,
            "cart_tax": 0,
            "base_cart_tax": 0,
            "cart_price_incl_tax": 12.8,
            "base_cart_price_incl_tax": 12.8
          }
        },
        "name": "Pursuit Lumaflex&trade; Tone Band"
      },
      {
        "item_id": 13,
        "price": 25.84,
        "base_price": 25.84,
        "qty": 100,
        "row_total": 2584,
        "base_row_total": 2584,
        "row_total_with_discount": 0,
        "tax_amount": 0,
        "base_tax_amount": 0,
        "tax_percent": 0,
        "discount_amount": 0,
        "base_discount_amount": 0,
        "discount_percent": 0,
        "price_incl_tax": 25.84,
        "base_price_incl_tax": 25.84,
        "row_total_incl_tax": 2584,
        "base_row_total_incl_tax": 2584,
        "options": "[]",
        "weee_tax_applied_amount": null,
        "weee_tax_applied": null,
        "extension_attributes": {
          "negotiable_quote_item_totals": {
            "cost": 0,
            "catalog_price": 34,
            "base_catalog_price": 34,
            "catalog_price_incl_tax": 34,
            "base_catalog_price_incl_tax": 34,
            "cart_price": 27.2,
            "base_cart_price": 27.2,
            "cart_tax": 0,
            "base_cart_tax": 0,
            "cart_price_incl_tax": 27.2,
            "base_cart_price_incl_tax": 27.2
          }
        },
        "name": "Joust Duffle Bag"
      }
    ],
    "total_segments": [
      {
        "code": "subtotal",
        "title": "Subtotal",
        "value": 2596.16
      },
      {
        "code": "giftwrapping",
        "title": "Gift Wrapping",
        "value": null,
        "extension_attributes": {
          "gw_item_ids": [],
          "gw_price": "0.0000",
          "gw_base_price": "0.0000",
          "gw_items_price": "0.0000",
          "gw_items_base_price": "0.0000",
          "gw_card_price": "0.0000",
          "gw_card_base_price": "0.0000"
        }
      },
      {
        "code": "shipping",
        "title": "Shipping & Handling (Best Way - Table Rate)",
        "value": 5
      },
      {
        "code": "tax",
        "title": "Tax",
        "value": 0,
        "extension_attributes": {
          "tax_grandtotal_details": []
        }
      },
      {
        "code": "grand_total",
        "title": "Grand Total",
        "value": 2601.16,
        "area": "footer"
      },
      {
        "code": "customerbalance",
        "title": "Store Credit",
        "value": -0
      },
      {
        "code": "reward",
        "title": "0 Reward points",
        "value": -0
      }
    ],
    "extension_attributes": {
      "negotiable_quote_totals": {
        "items_count": 2,
        "quote_status": "submitted_by_admin",
        "created_at": "2023-05-26 18:52:46",
        "updated_at": "2023-05-26 20:24:58",
        "customer_group": 1,
        "base_to_quote_rate": 1,
        "cost_total": 0,
        "base_cost_total": 0,
        "original_total": 2732.8,
        "base_original_total": 2732.8,
        "original_tax": 0,
        "base_original_tax": 0,
        "original_price_incl_tax": 3416,
        "base_original_price_incl_tax": 3416,
        "negotiated_price_type": 1,
        "negotiated_price_value": 5
      },
      "reward_points_balance": 0,
      "reward_currency_amount": 0,
      "base_reward_currency_amount": 0
    }
  }
}
```

### Set the payment information and place the order

The buyer is now ready to complete the purchase.

<InlineAlert variant="info" slots="text"/>

The `/V1/negotiable-carts/:cartId/payment-information` endpoint runs asynchronously if the `AsyncOrder` module has been enabled. By default, the mutation runs synchronously. [Asynchronous order placement](https://experienceleague.adobe.com/docs/commerce-operations/performance-best-practices/high-throughput-order-processing.html) describes the benefits of enabling the module.

**Headers:**

```terminal
Content-Type application/json
Authorization Bearer <customer token>
```

**Endpoint:**

`/V1/negotiable-carts/31/payment-information`

<CodeBlock slots="heading, code" repeat="2" languages="JSON, JSON" />

#### Payload

```json
{  
  "paymentMethod": {
    "method": "checkmo"
  },
  "billing_address": {
    "region": "California",
    "region_id": 12,
    "region_code": "CA",
    "country_id": "US",
    "street": [
      "100 Big Tree Avenue"
    ],
    "postcode": "99999",
    "city": "San Francisco",
    "firstname": "Melanie",
    "lastname": "Shaw",
    "email": "mshaw@example.com",
    "telephone": "415-555-1212"
  }
}
```

#### Response

```json
`4` // The response is the order `id`
```

## Related information

-  [Negotiable quote order](negotiable-order-workflow.md)
-  [Order processing tutorial](../tutorials/orders/index.md)
