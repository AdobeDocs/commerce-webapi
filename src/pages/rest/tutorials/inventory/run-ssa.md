---
title: Step 11. Run the Source Selection Algorithms
description: In this step of the tutorial you will run the source selection algorithms
edition: paas
keywords:
  - Inventory
  - REST
--- 
 
# Step 11. Run the Source Selection Algorithms

One of the most significant parts of Inventory Management is the Source Selection Algorithm (SSA). The Source Priority SSA analyzes and determines the best match for sources and shipping based on the priorities you specified in [Step 4. Link stocks and sources](/rest/tutorials/inventory/assign-source-to-stock/). The Distance Priority SSA calculates the distance between the sources and the shipping address. Both algorithms also provide a list of source items with quantities to deduct per each source item.

For more information about shipping and SSAs, see [About Source Selection Algorithm and Reservations](https://experienceleague.adobe.com/docs/commerce-admin/inventory/basics/selection-reservations.html) in the Adobe Commerce user guide.

## Get the list of algorithms

Currently, Commerce supports SSAs based on priority and on distance. Third-party developers and future releases may add support for additional algorithms.

**Endpoint:**

`GET <host>/rest/default/V1/inventory/source-selection-algorithm-list`

**Scope:**

`default` store view

**Headers:**

`Content-Type` `application/json`

`Authorization` `Bearer <admin token>`

**Payload:**

Not applicable

**Response:**

```json
[
    {
        "code": "distance",
        "title": "Distance Priority",
        "description": "Algorithm which provides Source Selections based on shipping address distance from the source"
    },
    {
        "code": "priority",
        "title": "Source Priority",
        "description": "Algorithm which provides Source Selections based on predefined priority of Source"
    }
]
```

## Run an SSA

The `POST V1/inventory/source-selection-algorithm-result` endpoint uses the algorithm defined by the `algorithmCode` attribute to calculate the recommended sources and quantities for each item defined in the `items` array. In this example, we'll select the `priority` SSA. [Manage source selection algorithms](/rest/inventory/manage-source-selection/) includes an example using the `distance` priority.

This tutorial does not consider complications, such as selling out of products or back ordering. We can ask the SSA to determine the best way to immediately ship all the items ordered (40 items of product `24-WB01` and 20 items of product `24-WB03`). If the `shippable` attribute in the response is `false`, there are not enough salable items to complete a full shipment, but the merchant can still perform a partial shipment.

In [Step 4. Link stocks and sources](/rest/tutorials/inventory/assign-source-to-stock/), we assigned the `priority` value of the Northeast warehouse and West warehouse to be `1` and `2`, respectively. Thus, the `priority` SSA attempts to fulfill the order from the Northeast warehouse first. If the primary source does not have enough of a product in stock, the SSA goes down the prioritized list of sources until the ordered quantity can be found.

**Endpoint:**

`POST <host>/rest/default/V1/inventory/source-selection-algorithm-result`

**Scope:**

`default` store view

**Headers:**

`Content-Type`: `application/json`

`Authorization`: `Bearer <admin token>`

**Payload:**

```json
{
    "inventoryRequest": {
        "stockId": 2,
        "items": [{
            "sku": "24-WB01",
            "qty": 40
        },
        {
            "sku": "24-WB03",
            "qty": 20
        }]
    },
    "algorithmCode": "priority"
}
```

**Response:**

The SSA recommends shipping from the following sources:

Product | Source | Quantity
--- | --- | ---
`24-WB01` | Northeast warehouse | 35
`24-WB01` | West warehouse | 5
`24-WB03` | Northeast warehouse | 20

```json
{
    "source_selection_items": [
        {
            "source_code": "ne_wh",
            "sku": "24-WB01",
            "qty_to_deduct": 35,
            "qty_available": 35
        },
        {
            "source_code": "ne_wh",
            "sku": "24-WB03",
            "qty_to_deduct": 20,
            "qty_available": 50
        },
        {
            "source_code": "west_wh",
            "sku": "24-WB01",
            "qty_to_deduct": 5,
            "qty_available": 15
        },
        {
            "source_code": "west_wh",
            "sku": "24-WB03",
            "qty_to_deduct": 0,
            "qty_available": 10
        },
        {
            "source_code": "brooklyn",
            "sku": "24-WB01",
            "qty_to_deduct": 0,
            "qty_available": 10
        },
        {
            "source_code": "brooklyn",
            "sku": "24-WB03",
            "qty_to_deduct": 0,
            "qty_available": 0
        },
        {
            "source_code": "manhattan",
            "sku": "24-WB01",
            "qty_to_deduct": 0,
            "qty_available": 10
        },
        {
            "source_code": "manhattan",
            "sku": "24-WB03",
            "qty_to_deduct": 0,
            "qty_available": 0
        },
        {
            "source_code": "huntington",
            "sku": "24-WB01",
            "qty_to_deduct": 0,
            "qty_available": 10
        },
        {
            "source_code": "huntington",
            "sku": "24-WB03",
            "qty_to_deduct": 0,
            "qty_available": 0
        },
        {
            "source_code": "berkeley",
            "sku": "24-WB01",
            "qty_to_deduct": 0,
            "qty_available": 10
        },
        {
            "source_code": "berkeley",
            "sku": "24-WB03",
            "qty_to_deduct": 0,
            "qty_available": 20
        },
        {
            "source_code": "sausalito",
            "sku": "24-WB01",
            "qty_to_deduct": 0,
            "qty_available": 10
        },
        {
            "source_code": "sausalito",
            "sku": "24-WB03",
            "qty_to_deduct": 0,
            "qty_available": 20
        }
    ],
    "shippable": true
}
```

## Verify this step

1. Click **Sales** > **Orders**.
1. Click the **View** link in the Action column for the order.
1. Click **Ship**.
1. Select different sources from the **Sources** menu.
