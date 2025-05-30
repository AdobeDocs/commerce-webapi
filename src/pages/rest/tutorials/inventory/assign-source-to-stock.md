---
title: Step 4. Link stocks and sources
description: In this step of the tutorial you will link stocks and sources together
edition: paas
keywords:
  - Inventory
  - REST
---
 
# Step 4. Link stocks and sources

This step links the sources we created in [Step 2. Create sources](/rest/tutorials/inventory/create-sources) with the stocks we created in [Step 3. Create stocks](/rest/tutorials/inventory/create-stock/).

Each stock can be assigned one or more sources. Adobe Commerce uses these associations to calculate the virtual aggregated inventory per product.

<InlineAlert variant="success" slots="text"/>

You must reindex and flush cache after performing this step.

## Assign the source

To link a source to a stock, you must specify the `source_code`, `stock_id`, and `priority` attributes. The `priority` value indicates where the source ranks in descending order. The Source Selection Algorithm uses this priority order when recommending order fulfillment. All added sources display in prioritized order in the Admin.

The `POST V1/inventory/stock-source-links` endpoint accepts an array of links, so we can link all the stocks and sources we created in the previous steps with a single call. The `stock_id` of "North America Stock" is `2`, and the `stock_id` of "Europe Stock" is `3`. The HQ source is assigned to both stocks.

In this example, we configure the Northeast warehouse to be the primary source for North America orders. The stores located in the New York City area are other available sources in North America. In Europe, the Leipzig warehouse is preferred, followed by the Berlin and Frankfurt stores. HQ is the last choice for both stocks.

**Endpoint:**

`POST <host>/rest/default/V1/inventory/stock-source-links`

**Scope:**

`default` store views

**Headers:**

`Content-Type`: `application/json`

`Authorization`: `Bearer <admin_token>`

**Payload:**

```json
{
   "links" : [
      {
         "source_code" : "ne_wh",
         "stock_id" : 2,
         "priority" : 1
      },
      {
        "source_code" : "west_wh",
        "stock_id" : 2,
        "priority" : 2
      },
      {
        "source_code" : "brooklyn",
        "stock_id" : 2,
        "priority" : 3
      },
      {
        "source_code" : "manhattan",
        "stock_id" : 2,
        "priority" : 4
      },
      {
        "source_code" : "huntington",
        "stock_id" : 2,
        "priority": 5
      },
      {
        "source_code" : "berkeley",
        "stock_id" : 2,
        "priority" : 6
      },
      {
         "source_code" : "sausalito",
         "stock_id" : 2,
         "priority" : 7
      },
      {
        "source_code" : "hq",
        "stock_id" : 2,
        "priority" : 8
      }
   ]
}
```

**Response:**

Commerce returns empty array.

[]

## Reindex and flush cache

**Required:** After you have assigned a source to stock, use the following command to perform a full reindex and flush the cache. This is required!

```bash
bin/magento indexer:reindex && bin/magento cache:flush
```

### Verify this step

In Admin, click **Stores** > Inventory > **Stocks**. The **Assign Sources** column lists the linked sources for each stock.
