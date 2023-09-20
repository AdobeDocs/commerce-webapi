---
title: Step 7. Create an order
description: In this step of the tutorial you will create an order
keywords:
  - REST
--- 
 
# Step 7. Create an order

The shopping cart contains three items totaling $108. The shipping charges are $10, making the grand total $118. We're now ready to convert the quote to an order.

### Send payment information

When you submit payment information, Adobe Commerce creates an order and sends an order confirmation to the customer. Since we are using an offline payment method in this tutorial, we do not need to provide detailed payment information. The endpoint used in this example requires only the payment method and billing address information.

<InlineAlert variant="info" slots="text"/>

Use the `V1/guest-carts/<cartId>/payment-information` endpoint to set the payment information on behalf of a guest. Do not include an authorization token.
You must include the `email` attribute in the payload at the same level as `paymentMethod` and `billing_address`.

**Endpoint:**

`POST <host>/rest/<store_code>/V1/carts/mine/payment-information`

**Headers:**

`Content-Type: application/json`

`Authorization: Bearer <customer token>`

**Payload:**

```json
{
  "paymentMethod": {
    "method": "banktransfer"
  },
  "billing_address": {
    "email": "jdoe@example.com",
    "region": "New York",
    "region_id": 43,
    "region_code": "NY",
    "country_id": "US",
    "street": [
      "123 Oak Ave"
    ],
    "postcode": "10577",
    "city": "Purchase",
    "telephone": "512-555-1111",
    "firstname": "Jane",
    "lastname": "Doe"
  }
}
```

**Response:**

An `orderID`, such as `3`.

### Review the order as an admin

When you request an order object, the response contains full details about the order, including customer information, payment details, as well as totals and subtotals for the order and each individual item.

**Endpoint:**

`GET <host>/rest/<store_code>/V1/orders/3`

where `3` is the `orderid`

**Headers:**

`Content-Type: application/json`

`Authorization: Bearer <administrator token>`

**Payload:**

Not applicable

**Response:**

<details>
      <summary><b>Show code sample</b></summary>

```json
{
  "applied_rule_ids": "1",
  "base_currency_code": "USD",
  "base_discount_amount": 0,
  "base_grand_total": 165,
  "base_discount_tax_compensation_amount": 0,
  "base_shipping_amount": 5,
  "base_shipping_discount_amount": 0,
  "base_shipping_incl_tax": 5,
  "base_shipping_tax_amount": 0,
  "base_subtotal": 160,
  "base_subtotal_incl_tax": 160,
  "base_tax_amount": 0,
  "base_total_due": 165,
  "base_to_global_rate": 1,
  "base_to_order_rate": 1,
  "billing_address_id": 6,
  "created_at": "2017-08-21 22:22:19",
  "customer_email": "jdoe@example.com",
  "customer_firstname": "Jane",
  "customer_group_id": 1,
  "customer_id": 3,
  "customer_is_guest": 0,
  "customer_lastname": "Doe",
  "customer_note_notify": 1,
  "discount_amount": 0,
  "email_sent": 1,
  "entity_id": 3,
  "global_currency_code": "USD",
  "grand_total": 165,
  "discount_tax_compensation_amount": 0,
  "increment_id": "000000003",
  "is_virtual": 0,
  "order_currency_code": "USD",
  "protect_code": "61f76d",
  "quote_id": 4,
  "shipping_amount": 5,
  "shipping_description": "Best Way - Table Rate",
  "shipping_discount_amount": 0,
  "shipping_discount_tax_compensation_amount": 0,
  "shipping_incl_tax": 5,
  "shipping_tax_amount": 0,
  "state": "new",
  "status": "pending",
  "store_currency_code": "USD",
  "store_id": 1,
  "store_name": "Main Website\nMain Website Store\n",
  "store_to_base_rate": 0,
  "store_to_order_rate": 0,
  "subtotal": 160,
  "subtotal_incl_tax": 160,
  "tax_amount": 0,
  "total_due": 165,
  "total_item_count": 7,
  "total_qty_ordered": 4,
  "updated_at": "2017-08-21 22:22:20",
  "weight": 2,
  "items": [
    {
      "amount_refunded": 0,
      "applied_rule_ids": "1",
      "base_amount_refunded": 0,
      "base_discount_amount": 0,
      "base_discount_invoiced": 0,
      "base_discount_tax_compensation_amount": 0,
      "base_original_price": 22,
      "base_price": 22,
      "base_price_incl_tax": 22,
      "base_row_invoiced": 0,
      "base_row_total": 22,
      "base_row_total_incl_tax": 22,
      "base_tax_amount": 0,
      "base_tax_invoiced": 0,
      "created_at": "2017-08-21 22:22:19",
      "discount_amount": 0,
      "discount_invoiced": 0,
      "discount_percent": 0,
      "free_shipping": 0,
      "discount_tax_compensation_amount": 0,
      "is_qty_decimal": 0,
      "is_virtual": 0,
      "item_id": 3,
      "name": "Radiant Tee-M-Orange",
      "no_discount": 0,
      "order_id": 3,
      "original_price": 22,
      "price": 22,
      "price_incl_tax": 22,
      "product_id": 1553,
      "product_type": "simple",
      "qty_canceled": 0,
      "qty_invoiced": 0,
      "qty_ordered": 1,
      "qty_refunded": 0,
      "qty_shipped": 0,
      "quote_item_id": 6,
      "row_invoiced": 0,
      "row_total": 22,
      "row_total_incl_tax": 22,
      "row_weight": 1,
      "sku": "WS12-M-Orange",
      "store_id": 1,
      "tax_amount": 0,
      "tax_invoiced": 0,
      "tax_percent": 0,
      "updated_at": "2017-08-21 22:22:19",
      "weight": 1
    },
    ...
  ],
  "billing_address": {
    "address_type": "billing",
    "city": "Purchase",
    "country_id": "US",
    "email": "jdoe@example.com",
    "entity_id": 6,
    "firstname": "Jane",
    "lastname": "Doe",
    "parent_id": 3,
    "postcode": "10577",
    "region": "New York",
    "region_code": "NY",
    "region_id": 43,
    "street": [
      "123 Oak Ave"
    ],
    "telephone": "512-555-1111"
  },
  "payment": {
    "account_status": null,
    "additional_information": [
      "Bank Transfer Payment",
      ""
    ],
    "amount_ordered": 165,
    "base_amount_ordered": 165,
    "base_shipping_amount": 5,
    "cc_last4": null,
    "entity_id": 3,
    "method": "banktransfer",
    "parent_id": 3,
    "shipping_amount": 5
  },
  "status_histories": [],
  "extension_attributes": {
    "shipping_assignments": [
      {
        "shipping": {
          "address": {
            "address_type": "shipping",
            "city": "Purchase",
            "country_id": "US",
            "email": "jdoe@example.com",
            "entity_id": 5,
            "firstname": "Jane",
            "lastname": "Doe",
            "parent_id": 3,
            "postcode": "10577",
            "region": "New York",
            "region_code": "NY",
            "region_id": 43,
            "street": [
              "123 Oak Ave"
            ],
            "telephone": "512-555-1111"
          },
          "method": "tablerate_bestway",
          "total": {
            "base_shipping_amount": 5,
            "base_shipping_discount_amount": 0,
            "base_shipping_incl_tax": 5,
            "base_shipping_tax_amount": 0,
            "shipping_amount": 5,
            "shipping_discount_amount": 0,
            "shipping_discount_tax_compensation_amount": 0,
            "shipping_incl_tax": 5,
            "shipping_tax_amount": 0
          }
        },
        "items": [
          {
            "amount_refunded": 0,
            "applied_rule_ids": "1",
            "base_amount_refunded": 0,
            "base_discount_amount": 0,
            "base_discount_invoiced": 0,
            "base_discount_tax_compensation_amount": 0,
            "base_original_price": 22,
            "base_price": 22,
            "base_price_incl_tax": 22,
            "base_row_invoiced": 0,
            "base_row_total": 22,
            "base_row_total_incl_tax": 22,
            "base_tax_amount": 0,
            "base_tax_invoiced": 0,
            "created_at": "2017-08-21 22:22:19",
            "discount_amount": 0,
            "discount_invoiced": 0,
            "discount_percent": 0,
            "free_shipping": 0,
            "discount_tax_compensation_amount": 0,
            "is_qty_decimal": 0,
            "is_virtual": 0,
            "item_id": 3,
            "name": "Radiant Tee-M-Orange",
            "no_discount": 0,
            "order_id": 3,
            "original_price": 22,
            "price": 22,
            "price_incl_tax": 22,
            "product_id": 1553,
            "product_type": "simple",
            "qty_canceled": 0,
            "qty_invoiced": 0,
            "qty_ordered": 1,
            "qty_refunded": 0,
            "qty_shipped": 0,
            "quote_item_id": 6,
            "row_invoiced": 0,
            "row_total": 22,
            "row_total_incl_tax": 22,
            "row_weight": 1,
            "sku": "WS12-M-Orange",
            "store_id": 1,
            "tax_amount": 0,
            "tax_invoiced": 0,
            "tax_percent": 0,
            "updated_at": "2017-08-21 22:22:19",
            "weight": 1
          },
          ...
        ]
      }
    ]
  }
}
```

</details>

### Verify this step

1. Log in to the Luma store as the customer. The dashboard shows the order.
1. Log in to Admin. Click **Sales** > **Orders**. The order is displayed in the grid. Its status is Pending.
