---
title: Step 4. Get store specific bundle product 
description: In this step of the tutorial you will retrieve store specific(or all store optional)
bundle product.
keywords:
  - REST
--- 
 
# Step 4. Get store specific bundle product

The following example retrieves store-specific bundle product details for a multi-store configuration by using the `GET V1/products/{sku}` call. For store specific
bundle product details add the `store_code` to the API request. For example, `GET {store_code}/V1/products/{sku}`

**Endpoint:**

```html
GET http://domain.com/rest/default/V1/products/Desktop-Computer
```

<CodeBlock slots="heading, code" repeat="2" languages="JSON, JSON" />

#### Response

```json
{
    "id": 25,
    "sku": "Desktop-Computer",
    "name": "Desktop Computer",
    "attribute_set_id": 4,
    "price": 0,
    "status": 1,
    "visibility": 4,
    "type_id": "bundle",
    "created_at": "2022-04-15 18:04:04",
    "updated_at": "2022-04-15 18:04:04",
    "weight": 0,
    "extension_attributes": {
        "website_ids": [
            1
        ],
        "category_links": [
            {
                "position": 0,
                "category_id": "32"
            }
        ],
        "stock_item": {
            "item_id": 25,
            "product_id": 25,
            "stock_id": 1,
            "qty": 0,
            "is_in_stock": true,
            "is_qty_decimal": false,
            "show_default_notification_message": false,
            "use_config_min_qty": true,
            "min_qty": 0,
            "use_config_min_sale_qty": 1,
            "min_sale_qty": 1,
            "use_config_max_sale_qty": true,
            "max_sale_qty": 10000,
            "use_config_backorders": true,
            "backorders": 0,
            "use_config_notify_stock_qty": true,
            "notify_stock_qty": 1,
            "use_config_qty_increments": true,
            "qty_increments": 0,
            "use_config_enable_qty_inc": true,
            "enable_qty_increments": false,
            "use_config_manage_stock": true,
            "manage_stock": true,
            "low_stock_date": null,
            "is_decimal_divided": false,
            "stock_status_changed_auto": 0
        },
        "bundle_product_options": [
            {
                "option_id": 14,
                "title": "RAM",
                "required": true,
                "type": "select",
                "position": 1,
                "sku": "Desktop-Computer",
                "product_links": [
                    {
                        "id": "19",
                        "sku": "RAM-12GB",
                        "option_id": 14,
                        "qty": 1,
                        "position": 1,
                        "is_default": false,
                        "price": 25,
                        "price_type": null,
                        "can_change_quantity": 0
                    },
                    {
                        "id": "20",
                        "sku": "RAM-24GB",
                        "option_id": 14,
                        "qty": 1,
                        "position": 2,
                        "is_default": false,
                        "price": 50,
                        "price_type": null,
                        "can_change_quantity": 0
                    }
                ]
            },
            {
                "option_id": 15,
                "title": "Monitor",
                "required": true,
                "type": "select",
                "position": 2,
                "sku": "Desktop-Computer",
                "product_links": [
                    {
                        "id": "21",
                        "sku": "Monitor-15",
                        "option_id": 15,
                        "qty": 1,
                        "position": 1,
                        "is_default": false,
                        "price": 100,
                        "price_type": null,
                        "can_change_quantity": 0
                    },
                    {
                        "id": "22",
                        "sku": "Monitor-17",
                        "option_id": 15,
                        "qty": 1,
                        "position": 2,
                        "is_default": false,
                        "price": 150,
                        "price_type": null,
                        "can_change_quantity": 0
                    }
                ]
            }
        ]
    },
    "options": [],
    "media_gallery_entries": [],
    "custom_attributes": [
        {
            "attribute_code": "shipment_type",
            "value": "0"
        },
        {
            "attribute_code": "options_container",
            "value": "container2"
        },
        {
            "attribute_code": "msrp_display_actual_price_type",
            "value": "0"
        },
        {
            "attribute_code": "url_key",
            "value": "desktop-computer"
        },
        {
            "attribute_code": "price_view",
            "value": "0"
        },
        {
            "attribute_code": "required_options",
            "value": "0"
        },
        {
            "attribute_code": "has_options",
            "value": "0"
        },
        {
            "attribute_code": "sku_type",
            "value": "0"
        },
        {
            "attribute_code": "price_type",
            "value": "0"
        },
        {
            "attribute_code": "tax_class_id",
            "value": "2"
        },
        {
            "attribute_code": "weight_type",
            "value": "0"
        },
        {
            "attribute_code": "category_ids",
            "value": [
                "32"
            ]
        }
    ]
}
```

Retrieve the `option_id` from the bundle product options section of the response and use it to update the bundle product option.
Retrieve the `selection_id` from the bundle product option `product_links` section of the response and use it to update the bundle product option selection link.