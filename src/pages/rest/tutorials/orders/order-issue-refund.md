---
title: Step 10. Issue a partial refund
description: In this step of the tutorial you will issue a partial refund
--- 
 
# Step 10. Issue a partial refund

Adobe Commerce introduced two endpoints that streamline the process of issuing a refund by creating a creditmemo and updating the order or [invoice](https://glossary.magento.com/invoice) in one call.

Endpoint | Description
--- | ---
`POST /V1/order/<order_ID>/refund` | Issues an offline refund
`POST /V1/invoice/<invoice_ID>/refund` | Issue a refund with an online payment system

In this example, the customer did not like the fit of the Radiant T-M-Orange shirt and wants a refund.

Since the customer paid for the order with a bank transfer, we'll call `POST /V1/order/<order ID>/refund`. The `order_item_id` for the Radiant Tee-M-Orange is `3`.

The `arguments` object allows you to adjust the amount of the credit to be refunded. Since the customer used the `tablerate` shipping method, which applied to the whole order, we'll assume that a refund can't be applied to the shipping costs. Therefore, the shipping_amount is set to `0`.

If the customer had selected the `flatrate` shipping method ($5 per item), we would set the value of `shipping_amount` to `5`.

The `return_to_stock_items` array specifies which `order_item_id`s can be returned to stock and be resold.

**Endpoint:**

`POST <host>/rest/<store_code>/V1/order/5/refund`

**Headers:**

`Content-Type: application/json`

`Authorization: Bearer <administrator token>`

**Payload:**

```json
{
  "items": [
    {
      "order_item_id": 3,
      "qty": 1
    }
  ],
  "notify": true,
  "arguments": {
    "shipping_amount": 0,
    "adjustment_positive": 0,
    "adjustment_negative": 0,
    "extension_attributes": {
      "return_to_stock_items": [
        3
      ]
    }
  }
}
```

**Response:**

A [credit memo](https://glossary.magento.com/credit-memo) id, such as `3`.

### Verify this step

Log in to [Admin](https://glossary.magento.com/admin). Click **Sales** > **Credit Memos**. The credit memo is displayed in the grid.

## Congratulations! You've finished.

### Related topics

*  [Getting Started with Adobe Commerce Web APIs](/get-started/)
*  [Create a configurable product Tutorial](/rest/tutorials/configurable-product/)
*  [REST API Reference Overview](/rest/)
*  [REST API documentation](../../quick-reference/index.md)
