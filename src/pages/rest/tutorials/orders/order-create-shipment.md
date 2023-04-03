---
title: Step 9. Create a shipment
description: In this step of the tutorial you will create a shipment
---

# Step 9. Create a shipment

To create a shipment, you need the `order_item_id` of each item to be shipped. Since the Sprite Yoga Companion Kit is a bundle item, you only need to include the top-level `order_item_id` (`5`). The `order_item_id` for the Radiant Tee-M-Orange is `3`.

To create a partial shipment, specify only those `order_item_id`s that are to be shipped now.

If the call is successful on a full shipment, Adobe Commerce changes the status of an order to Complete.

**Endpoint:**

`POST <host>/rest/<store_code>/V1/order/3/ship`

where `3` is the order id.

**Headers:**

`Content-Type: application/json`

`Authorization: Bearer <administrator token>`

**Payload:**

The `notify` field is used to trigger Commerce to send the shipment email. The `tracks` array optionally allows you to include one or more tracking numbers for the shipment.

```json
{
  "items": [
    {
      "order_item_id": 3,
      "qty": 1
    },
    {
      "order_item_id": 5,
      "qty": 1
    },
    {
      "order_item_id": 11,
      "qty": 1
    }
  ],
  "notify": true,
  "tracks": [
    {
      "track_number": "1Y-9876543210",
      "title": "United Parcel Service",
      "carrier_code": "ups"
    }
  ]
}
```

**Response:**

A shipment ID, such as `3`.

## Verify this step

Log in to Admin. Click **Sales** > **Shipments**. The shipment is displayed in the grid. Then click **Sales** > **Orders**. The order status is Complete.
