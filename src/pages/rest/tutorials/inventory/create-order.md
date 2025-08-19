---
title: Step 9. Create an order
description: In this step of the tutorial you will create an order
edition: paas
keywords:
  - Inventory
  - REST
--- 
 
# Step 9. Create an order

The shopping cart contains 71 items totaling $2462. The shipping charges are $350, making the grand total $2812. We're now ready to convert the quote to an order.

When you create an order, Adobe Commerce enters reservations for the total amount of products. These reservations place a hold on that amount of inventory per stock, temporarily deducting the amount from the salable quantity. On the Products page of Admin, the **Salable Quantity** column accounts for reservations. When an order is shipped, Commerce updates the quantities in the **Quantity per Source** column.

## Send payment information

When you submit payment information, Commerce creates an order and sends an order confirmation to the customer. Since we are using an offline payment method in this tutorial, we do not need to provide detailed payment information. The endpoint used in this example requires only the payment method and billing address information.

**Endpoint:**

`POST <host>/rest/default/V1/carts/mine/payment-information`

**Scope:**

`default` store view

**Headers:**

`Content-Type`: `application/json`

`Authorization`: `Bearer <customer token>`

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
    "street": ["160 1st St."],
    "postcode": "11501",
    "city": "Mineola",
    "telephone": "516-555-1111",
    "firstname": "Jane",
    "lastname": "Doe"
  }
}
```

**Response:**

An `orderID`, such as `3`

## Verify this step

1. Log in to the US store as the customer. The dashboard shows the order.
1. Log in to Admin. Click **Sales** > **Orders**. The order is displayed in the grid. Its status is Pending.
1. Click **Catalog** > **Products**. The **Salable Quantity** column shows that fewer items of the ordered products are available. The values in the **Quantity per Source** are not affected until shipment.
