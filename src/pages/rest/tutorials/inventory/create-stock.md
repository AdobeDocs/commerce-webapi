---
title: Step 3. Create stocks
description: In this step of the tutorial you will create stocks
--- 
 
# Step 3. Create stocks

This step guides through the process for creating **stock**. Stock represents a virtual, aggregated inventory of products for sources of your sales channels. Each stock maps sales channels with sources to determine available inventories and salable quantities.

A sales channel can only be assigned to one stock.

The `stock_id` of the default stock is `1`.  You cannot delete or add sources to the default stock, but you can perform these actions with custom stocks.

For more information about stock, see [Inventory Management overview](https://devdocs.magento.com/guides/v2.4/inventory/index.html).

## Create the stock

The `POST V1/inventory/stocks` endpoint creates a stock. The `name`, `type`, and `code` attributes are required. The `code` value cannot be changed.

**Endpoint:**

`POST <host>/rest/default/V1/inventory/stocks`

**Scope:**

`default` store view

**Headers:**

`Content-Type`: `application/json`

`Authorization`: `Bearer <admin_token>`

**Payload:**

The `name` attribute is required.

```json
{
  "stock": {
    "name": "US Stock",
    "extension_attributes": {
      "sales_channels": [
        {
          "type": "website",
          "code": "base"
        }
      ]
    }
  }
}
```

**Response:**

Commerce returnsthe `stock_id`, such as `2`. The value will be used in subsequent steps.

## Verify this step

In Admin, click **Stores** > **Inventory** > **Stocks**.  The new stocks are displayed in the Stock grid.
