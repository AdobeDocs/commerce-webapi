---
title: Step 5. Reassign products to custom sources
description: In this step of the tutorial you will reassign products to custom sources
edition: paas
keywords:
  - Inventory
  - REST
--- 
 
# Step 5. Reassign products to custom sources

When you install or upgrade Adobe Commerce, the system assigns all existing products to the default source. Commerce also assigns all subsequently-created products to the default source. For this tutorial, we want to unassign three products from the default source and assign them to custom sources.

The following table describes the products we'll use in this tutorial.

Name | Type | SKU | Quantity
--- | --- | --- | ---
Voyage Yoga Bag | Simple | 24-WB01 | 100
Driven Backpack | Simple | 24-WB03 | 100
Yoga Adventure | Downloadable | 240-LV06 | Not applicable

## Unassign products from the default source

Use the `POST V1/inventory/source-items-delete` endpoint to unassign one or more products from the specified source. The `sku` and `source_code` attributes are required for each product.

<InlineAlert variant="warning" slots="text"/>

When you unassign a source from a product, all source data including inventory amounts is removed from that product. This can affect salable quantities and reservations for unprocessed orders. After checkout and before shipment, all product quantities in the order have associated reservations. If you unassign a source, you can cause issues with reservations and processing orders. In a production environment, Commerce strongly recommends completing all orders and shipments for those products prior to removing the source.

**Endpoint:**

`POST <host>/rest/default/V1/inventory/source-items-delete`

**Scope:**

`default` store view

**Headers:**

`Content-Type`: `application/json`

`Authorization`: `Bearer <admin_token>`

**Payload:**

```json
{
  "sourceItems": [{
    "sku": "24-WB01",
    "source_code": "default"
  },
  {
    "sku": "24-WB03",
    "source_code": "default"
  },
  {
    "sku": "240-LV06",
    "source_code": "default"
  }]
}
```

**Response:**

Commerce returnsan empty array.

`[]`

## Assign products to custom sources

Now we can assign each product to one or more sources. The `POST V1/inventory/source-items` endpoint allows you to specify the quantity of each product that is available at each source.

**Endpoint:**

`POST <host>/rest/default/V1/inventory/source-items`

**Scope:**

`default` store view

**Headers:**

`Content-Type`: `application/json`
`Authorization`: `Bearer <admin_token>`

**Payload:**

```json
{
  "sourceItems": [{
    "sku": "24-WB01",
    "source_code": "ne_wh",
    "quantity": 35,
    "status": 1
  },
  {
    "sku": "24-WB01",
    "source_code": "brooklyn",
    "quantity": 10,
    "status": 1
  },
  {
    "sku": "24-WB01",
    "source_code": "huntington",
    "quantity": 10,
    "status": 1
  },
  {
    "sku": "24-WB01",
    "source_code": "manhattan",
    "quantity": 10,
    "status": 1
  },
  {
    "sku": "24-WB01",
    "source_code": "west_wh",
    "quantity": 15,
    "status": 1
  },
  {
    "sku": "24-WB01",
    "source_code": "berkeley",
    "quantity": 10,
    "status": 1
  },
  {
    "sku": "24-WB01",
    "source_code": "sausalito",
    "quantity": 10,
    "status": 1
  },
  {
    "sku": "24-WB03",
    "source_code": "ne_wh",
    "quantity": 50,
    "status": 1
  },
  {
    "sku": "24-WB03",
    "source_code": "brooklyn",
    "quantity": 0,
    "status": 1
  },
  {
    "sku": "24-WB03",
    "source_code": "huntington",
    "quantity": 0,
    "status": 1
  },
  {
    "sku": "24-WB03",
    "source_code": "manhattan",
    "quantity": 0,
    "status": 1
  },
  {
    "sku": "24-WB03",
    "source_code": "west_wh",
    "quantity": 10,
    "status": 1
  },
  {
    "sku": "24-WB03",
    "source_code": "berkeley",
    "quantity": 20,
    "status": 1
  },
  {
    "sku": "24-WB03",
    "source_code": "sausalito",
    "quantity": 20,
    "status": 1
  },
  {
    "sku": "240-LV06",
    "source_code": "hq",
    "quantity": 9999,
    "status": 1
  }]
}
```

**Response:**

Commerce returnsan empty array.

`[]`

## Verify this step

In Admin, click **Catalog** > **Products**.  Products `24-WB01`, `24-WB03`, and `240-LV06` display quantities per assigned source in the **Quantity per Source** column and an aggregated total of products per stock in the **Salable Quantity** column.
