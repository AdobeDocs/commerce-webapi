---
title: Import API
description: Import entities into Adobe Commerce using REST.
---

# Import data

The `POST /rest/<store_view_code>/V1/import/csv` and `POST /rest/<store_view_code>/V1/import/json` endpoints provide a RESTful way to import data into Adobe Commerce. They mirror the import capabilities found in the Admin at **System** > Data Transfer > **Import**. These endpoints support the import of the following entities:

*  `advanced_pricing`
*  `catalog_product`
*  `customer`
*  `customer_address`
*  `customer_composite`
*  `customer_finance`
*  `stock_sources`

### Source Data Format and Requirements

Ensure your source data conforms to the sequence and format expected by Commerce. To acquaint yourself with each import entity's requirements, visit the Import page in the Admin, select an entity from the dropdown, and click **Download Sample File**.

### CSV Import

The `import/csv` endpoint expects data in base64 encoded format:

*  **Encoding**: Before submitting, your CSV data must be base64 encoded, which means there is no need to escape special characters.
*  **Compression**: You can use [gzip](https://www.gzip.org) to compress your data before encoding. This is especially useful when handling larger CSV files that might exceed server or PHP request size limits.
*  **Delimiter**: This API is tailored for CSV files that use commas as field and multi-value separators. Any other delimiters will cause the import to fail.

### JSON Import

The `import/json` endpoint is designed for JSON data:

*  Convert your CSV into JSON using any trustworthy online converter.
*  When converting CSV to JSON using standard tools or libraries, special characters within the data are typically escaped automatically. Ensure that any manual edits or custom conversion processes handle this escaping appropriately.

### Validation Strategy

A validation strategy is mandatory. Depending on your chosen strategy, the API will either proceed with the import or abort it upon encountering invalid rows.

*  `validation-stop-on-errors`: The API halts the import upon finding the first error. It will return an error message describing the issue and its row number.
*  `validation-skip-errors`: The API imports valid rows unless the total number of errors surpasses the `allowedErrorCount`. If errors go beyond this count, the import is halted (even valid rows will not be processed). The response will contain details of the first error found and its row number.

The `allowedErrorCount` field specifies the maximum allowable error count before terminating the import process.

## Import CSV API

The  `StartImportInterface` service provides the means to efficiently import entities into Adobe Commerce using a single API call.

**Service Name:**

`StartImportInterface`

**REST Endpoint:**

```http
POST /rest/<store_view_code>/V1/import/csv
```

**StartImportInterface Parameters:**

| Name                                | Description  | Format | Requirements                                                                                                                                                                                                                          |
|-------------------------------------|-----|-----|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `locale`                            | The language and country combination for the data being imported | string | Optional                                                                                                                                                                                                                              |
| `entity`                            | The type of entity to be imported | string | Required. One of `advanced_pricing`, `catalog_product`, `customer`, `customer_address`, `customer_composite`, `customer_finance` or `stock_sources`                                                                                   |
| `behavior`                          | The action to perform | string | Required. One of `append`, `replace`, `delete` for `advanced_pricing`, `catalog_product`, `customer_composite` or `stock_sources`. One of `add_update`, `delete` or `custom` for `customer`, `customer_address` or `customer_finance` |
| `validationStrategy`                | Strategy to use when entities are invalid | string | Required. Either `validation-stop-on-errors` or `validation-skip-errors`                                                                                                                                                              |
| `allowedErrorCount`                 | The maximum number of errors that can occur until import is canceled | string | Required                                                                                                                                                                                                                              |
| `csvData`                           | Base64 encoded string containing CSV data (optionally gzip compressed before base64) | string | Required                                                                                                                                                                                                                              |
| `importFieldSeparator`              | Separator used in CSV.  Default is ',' | string | Optional                                                                                                                                                                                                                              |
| `importMultipleValueSeparator`      | Separator used in columns with multiple values such as categories.  Default is ',' | string | Optional                                                                                                                                                                                                                              |
| `importEmptyAttributeValueConstant` | Constant to be replaced with an empty attribute | string | Optional                                                                                                                                                                                                                              |
| `importImagesFileDir`               | Path to images relative to &lt;Magento root directory&gt;/var/import/images | string | Optional                                                                                                                                                                                                                              |

**Sample Usage:**

`POST <host>/<store_view_code>/default/V1/import/csv`

**Headers:**

`Content-Type: application/json`

`Authorization: Bearer <administrator token>`

**Payload:**

```json
{
  "source":{
    "entity":"advanced_pricing",
    "behavior":"add_update",
    "validationStrategy": "validation-stop-on-errors",
    "allowedErrorCount":"10",
    "csvData":"c2t1LHRpZXJfcHJpY2Vfd2Vic2l0ZSx0aWVyX3ByaWNlX2N1c3RvbWVyX2dyb3VwLHRpZXJfcHJpY2VfcXR5LHRpZXJfcHJpY2UsdGllcl9wcmljZV92YWx1ZV90eXBlClNpbXBsZTEsIkFsbCBXZWJzaXRlcyBbVVNEXSIsIk5PVCBMT0dHRUQgSU4iLDEuMDAwMCwyNTAuMDAwMDAwLEZpeGVk"
  }
}
```

**Response:**

When Import is successful, the API response will contain the number of entities that were successfully imported.

```json
[
  "Entities Processed: 1"
] 
```

**Payload 2:**

This sample payload contains encoded CSV data with two valid rows and one invalid row.

```json
{
  "source": {
    "entity":"customer",
    "behavior":"add_update",
    "validationStrategy": "validation-stop-on-errors",
    "allowedErrorCount":"10",
    "csvData":"ZW1haWwsX3dlYnNpdGUsX3N0b3JlLHdlYnNpdGVfaWQsc3RvcmVfaWQsY3JlYXRlZF9pbixwcmVmaXgsZmlyc3RuYW1lLG1pZGRsZW5hbWUsbGFzdG5hbWUsc3VmZml4LGdyb3VwX2lkLGRvYixwYXNzd29yZF9oYXNoLHJwX3Rva2VuLHJwX3Rva2VuX2NyZWF0ZWRfYXQsdGF4dmF0LGNvbmZpcm1hdGlvbixjcmVhdGVkX2F0LGdlbmRlcixkaXNhYmxlX2F1dG9fZ3JvdXBfY2hhbmdlLHVwZGF0ZWRfYXQsZmFpbHVyZXNfbnVtLGZpcnN0X2ZhaWx1cmUsbG9ja19leHBpcmVzLHJld2FyZF91cGRhdGVfbm90aWZpY2F0aW9uLHJld2FyZF93YXJuaW5nX25vdGlmaWNhdGlvbixwYXNzd29yZApjQDEuY29tLGJhc2UsZGVmYXVsdCwxLDEsIkRlZmF1bHQgU3RvcmUgVmlldyIsLEMxLCxDMUwsLDEsLCwwOjM6T2Rob245RTRWa3RWWi9Ra2I3VGxmQ3ZZWmFRZ0NUTStMelN1UFA0b3grKzdqME5lNHM1MmdRTUszNXZjY1d1REJvc1p4bXJBOTZhbUpCenQsIjIwMjItMDYtMjEgMTg6NDQ6MTgiLCwsIjIwMjItMDYtMjEgMTg6NDQ6MTgiLDAsMCwiMjAyMi0wNi0yMSAxODo0NDoxOCIsMCwsLDAsMCwKY0AyLmNvbSxiYXNlLGRlZmF1bHQsMSwxLCJEZWZhdWx0IFN0b3JlIFZpZXciLCxDMiwsQzJMLCwxLCwsMDozOkFkYzJtazNKaHpScHBpYVdabFNhM05IUTMwTnpoejBMdEtwL1A3Nm5raXovRkFsbG15Z3V4KzF4dkhQcm5MbnBNSWJSVlg2dGk4WUdsdXpPLCIyMDIyLTA2LTIxIDE4OjQ0OjQyIiwsLCIyMDIyLTA2LTIxIDE4OjQ0OjQyIiwwLDAsIjIwMjItMDYtMjEgMTg6NDQ6NDIiLDAsLCwwLDAsCkNAMy5jb20sYmFzZSxkZWZhdWx0LDEsMSwiRGVmYXVsdCBTdG9yZSBWaWV3IiwsQzMsLEMzTCwsMSwsLDA6MzpoM3g2UWg2RHNNdUxRaUZDWkNhUXZDUitDTkdFcXpFcWc1ZzRtamVjREVsSGRRdGJVVXg1ZFYrQ0lzc0h2YWgxZndZNlRIeEprUmlxSERDZywiMjAyMi0wNi0yMSAxODo0NTowOCIsLCwiMjAyMi0wNi0yMSAxODo0NTowOCIsMCwwLCIyMDIyLTA2LTIxIDE4OjQ1OjA4IiwwLCwsMCwwLDAK"
  }
}
```

When Import fails, the response contains the row number and a message describing cause of failure for first invalid row encountered.

**Response:**

```json
[
  "Row 3: Please enter a password with a valid length."
]
```

**Payload 3:**

In this example, the CSV payload contains three rows of data, and one of them is invalid. Due to the selected validation strategy and `allowedErrorCount` value, only the valid rows are imported.

```json
{
  "source": {
  "entity":"catalog_product",
  "behavior":"add_update",
  "validationStrategy": "validation-skip-errors",
  "allowedErrorCount":"1",
  "csvData":"c2t1LHN0b3JlX3ZpZXdfY29kZSxhdHRyaWJ1dGVfc2V0X2NvZGUscHJvZHVjdF90eXBlLGNhdGVnb3JpZXMscHJvZHVjdF93ZWJzaXRlcyxuYW1lLGRlc2NyaXB0aW9uLHNob3J0X2Rlc2NyaXB0aW9uLHdlaWdodCxwcm9kdWN0X29ubGluZSx0YXhfY2xhc3NfbmFtZSx2aXNpYmlsaXR5LHByaWNlLHNwZWNpYWxfcHJpY2Usc3BlY2lhbF9wcmljZV9mcm9tX2RhdGUsc3BlY2lhbF9wcmljZV90b19kYXRlLHVybF9rZXksbWV0YV90aXRsZSxtZXRhX2tleXdvcmRzLG1ldGFfZGVzY3JpcHRpb24sYmFzZV9pbWFnZSxiYXNlX2ltYWdlX2xhYmVsLHNtYWxsX2ltYWdlLHNtYWxsX2ltYWdlX2xhYmVsLHRodW1ibmFpbF9pbWFnZSx0aHVtYm5haWxfaW1hZ2VfbGFiZWwsc3dhdGNoX2ltYWdlLHN3YXRjaF9pbWFnZV9sYWJlbCxjcmVhdGVkX2F0LHVwZGF0ZWRfYXQsbmV3X2Zyb21fZGF0ZSxuZXdfdG9fZGF0ZSxkaXNwbGF5X3Byb2R1Y3Rfb3B0aW9uc19pbixtYXBfcHJpY2UsbXNycF9wcmljZSxtYXBfZW5hYmxlZCxnaWZ0X21lc3NhZ2VfYXZhaWxhYmxlLGN1c3RvbV9kZXNpZ24sY3VzdG9tX2Rlc2lnbl9mcm9tLGN1c3RvbV9kZXNpZ25fdG8sY3VzdG9tX2xheW91dF91cGRhdGUscGFnZV9sYXlvdXQscHJvZHVjdF9vcHRpb25zX2NvbnRhaW5lcixtc3JwX2Rpc3BsYXlfYWN0dWFsX3ByaWNlX3R5cGUsY291bnRyeV9vZl9tYW51ZmFjdHVyZSxhZGRpdGlvbmFsX2F0dHJpYnV0ZXMscXR5LG91dF9vZl9zdG9ja19xdHksdXNlX2NvbmZpZ19taW5fcXR5LGlzX3F0eV9kZWNpbWFsLGFsbG93X2JhY2tvcmRlcnMsdXNlX2NvbmZpZ19iYWNrb3JkZXJzLG1pbl9jYXJ0X3F0eSx1c2VfY29uZmlnX21pbl9zYWxlX3F0eSxtYXhfY2FydF9xdHksdXNlX2NvbmZpZ19tYXhfc2FsZV9xdHksaXNfaW5fc3RvY2ssbm90aWZ5X29uX3N0b2NrX2JlbG93LHVzZV9jb25maWdfbm90aWZ5X3N0b2NrX3F0eSxtYW5hZ2Vfc3RvY2ssdXNlX2NvbmZpZ19tYW5hZ2Vfc3RvY2ssdXNlX2NvbmZpZ19xdHlfaW5jcmVtZW50cyxxdHlfaW5jcmVtZW50cyx1c2VfY29uZmlnX2VuYWJsZV9xdHlfaW5jLGVuYWJsZV9xdHlfaW5jcmVtZW50cyxpc19kZWNpbWFsX2RpdmlkZWQsd2Vic2l0ZV9pZCxyZWxhdGVkX3NrdXMscmVsYXRlZF9wb3NpdGlvbixjcm9zc3NlbGxfc2t1cyxjcm9zc3NlbGxfcG9zaXRpb24sdXBzZWxsX3NrdXMsdXBzZWxsX3Bvc2l0aW9uLGFkZGl0aW9uYWxfaW1hZ2VzLGFkZGl0aW9uYWxfaW1hZ2VfbGFiZWxzLGhpZGVfZnJvbV9wcm9kdWN0X3BhZ2UsY3VzdG9tX29wdGlvbnMsYnVuZGxlX3ByaWNlX3R5cGUsYnVuZGxlX3NrdV90eXBlLGJ1bmRsZV9wcmljZV92aWV3LGJ1bmRsZV93ZWlnaHRfdHlwZSxidW5kbGVfdmFsdWVzLGJ1bmRsZV9zaGlwbWVudF90eXBlLGFzc29jaWF0ZWRfc2t1cyxkb3dubG9hZGFibGVfbGlua3MsZG93bmxvYWRhYmxlX3NhbXBsZXMsY29uZmlndXJhYmxlX3ZhcmlhdGlvbnMsY29uZmlndXJhYmxlX3ZhcmlhdGlvbl9sYWJlbHMKU2ltcGxlMSwsRGVmYXVsdCxzaW1wbGUsIkRlZmF1bHQgQ2F0ZWdvcnkiLGJhc2UsU2ltcGxlMSwsLDEuMDAwMDAwLDEsIlRheGFibGUgR29vZHMiLCJDYXRhbG9nLCBTZWFyY2giLDEwLjAwMDAwMCwsLCxzaW1wbGUxLFNpbXBsZTEsU2ltcGxlMSwiU2ltcGxlMSAiLCwsLCwsLCwsIjYvNy8yMiwgMzoxNSBQTSIsIjYvNy8yMiwgMzoxNSBQTSIsLCwiQmxvY2sgYWZ0ZXIgSW5mbyBDb2x1bW4iLCwsLCJVc2UgY29uZmlnIiwsLCwsLCwiVXNlIGNvbmZpZyIsIlVuaXRlZCBTdGF0ZXMiLCwxMDAwLjAwMDAsMC4wMDAwLDEsMCwwLDEsMS4wMDAwLDEsMTAwMDAuMDAwMCwxLDEsMS4wMDAwLDEsMSwxLDEsMS4wMDAwLDEsMCwwLDAsLCwsLCwsLCwsLCwsLCwsLCwsLCwKU2ltcGxlMiwsRGVmYXVsdCxzaW1wbGUsIkRlZmF1bHQgQ2F0ZWdvcnkiYmFzZSxTaW1wbGUyLCwsMS4wMDAwMDAsMSwiVGF4YWJsZSBHb29kcyIsIkNhdGFsb2csIFNlYXJjaCIsMjAwLjAwMDAwMCwsLCxzaW1wbGUyLFNpbXBsZTIsU2ltcGxlMiwiU2ltcGxlMiAiLCwsLCwsLCwsIjYvNy8yMiwgMzoxNiBQTSIsIjYvNy8yMiwgMzoxNiBQTSIsLCwiQmxvY2sgYWZ0ZXIgSW5mbyBDb2x1bW4iLCwsLCJVc2UgY29uZmlnIiwsLCwsLCwiVXNlIGNvbmZpZyIsIlVuaXRlZCBTdGF0ZXMiLCwxMDAwLjAwMDAsMC4wMDAwLDEsMCwwLDEsMS4wMDAwLDEsMTAwMDAuMDAwMCwxLDEsMS4wMDAwLDEsMSwxLDEsMS4wMDAwLDEsMCwwLDAsLCwsLCwsLCwsLCwsLCwsLCwsLCwKU2ltcGxlMywsRGVmYXVsdCxzaW1wbGUsIkRlZmF1bHQgQ2F0ZWdvcnkiLGJhc2UsU2ltcGxlMywsLDEuMDAwMDAwLDEsIlRheGFibGUgR29vZHMiLCJDYXRhbG9nLCBTZWFyY2giLDMwMC4wMDAwMDAsLCwsc2ltcGxlMyxTaW1wbGUzLFNpbXBsZTMsIlNpbXBsZTMgIiwsLCwsLCwsLCI2LzcvMjIsIDM6MTYgUE0iLCI2LzcvMjIsIDM6MTYgUE0iLCwsIkJsb2NrIGFmdGVyIEluZm8gQ29sdW1uIiwsLCwiVXNlIGNvbmZpZyIsLCwsLCwsIlVzZSBjb25maWciLCJVbml0ZWQgU3RhdGVzIiwsMTAwMC4wMDAwLDAuMDAwMCwxLDAsMCwxLDEuMDAwMCwxLDEwMDAwLjAwMDAsMSwxLDEuMDAwMCwxLDEsMSwxLDEuMDAwMCwxLDAsMCwwLCwsLCwsLCwsLCwsLCwsLCwsLCwsCg=="
  }
}
```

**Response:**

```json
[
  "Entities Processed: 2"
] 
```

## Import JSON API

The  `StartImportInterface` service provides the means to efficiently import entities into Adobe Commerce using a single API call.

**Service Name:**

`StartImportInterface`

**REST Endpoint:**

```http
POST /rest/<store_view_code>/V1/import/json
```

**StartImportInterface Parameters:**

| Name                  | Description                                                                                                                                     | Format                | Requirements                                                                                                                                                                                                                         |
|-----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `locale`              | The language and country combination for the data being imported                                                                                | string                | Optional                                                                                 |
| `entity`              | The type of entity to be imported                                                                                                               | string                | Required. One of `advanced_pricing`, `catalog_product`, `customer`, `customer_address`, `customer_composite`, `customer_finance` or `stock_sources`                                                                                  |
| `behavior`            | The action to perform                                                                                                                           | string                | Required. One of `append`, `replace`, `delete` for `advanced_pricing`, `catalog_product`, `customer_composite` or `stock_sources`. One of `add_update`, `delete` or `custom` for `customer`, `customer_address` or `customer_finance`|
| `validationStrategy`  | Strategy to use when entities are invalid                                                                                                       | string                | Required. Either `validation-stop-on-errors` or `validation-skip-errors`                                                                                                                                                             |
| `allowedErrorCount`   | The maximum number of errors that can occur until import is canceled                                                                            | string                | Required                                                                                                                                                                                                                             |
| `items`               | An array of entities to be imported. Each entity, represented as a JSON object, contains details specific to its type (e.g., products, customers)| array of JSON objects | Required                                                                                                                                                                                                                             |
| `importImagesFileDir` | Path to images relative to &lt;Magento root directory&gt;/var/import/images                                                                     | string                | Optional                                                                                                                                                                                                                             |

**Sample Usage:**

`POST <host>/<store_view_code>/default/V1/import/json`

**Headers:**

`Content-Type: application/json`

`Authorization: Bearer <administrator token>`

**Payload 1 (Simple Product):**

```json
{
    "source": {
        "locale": "en_EN",
        "entity": "catalog_product",
        "behavior": "append",
        "validation_strategy": "validation-stop-on-errors",
        "allowed_error_count": 0,
        "items":	[
            {
                "sku": "Simple Product 1",
                "store_view_code": "",
                "attribute_set_code": "Default",
                "product_type": "simple",
                "categories": [
                    "Default Category/Category 1",
                    "Default Category/Category 2"
                ],
                "product_websites": [
                    "base",
                    "french"
                ],
                "name": "Simple Product 1",
                "description": "",
                "short_description": "",
                "weight": 12,
                "product_online": 1,
                "tax_class_name": "Taxable Goods",
                "visibility": "Catalog, Search",
                "price": 9.99,
                "special_price": 8.99,
                "special_price_from_date": "7/20/23",
                "special_price_to_date": "",
                "url_key": "simple-product-1",
                "meta_title": "Simple Product 1",
                "meta_keywords": "Simple Product 1",
                "meta_description": "Simple Product 1 ",
                "base_image": "/1/_/1.png",
                "base_image_label": "one",
                "small_image": "/1/_/1.png",
                "small_image_label": "one",
                "thumbnail_image": "/1/_/1.png",
                "thumbnail_image_label": "one",
                "swatch_image": "/2/_/2.png",
                "swatch_image_label": "two",
                "created_at": "7/20/23, 11:36 AM",
                "updated_at": "7/21/23, 12:20 PM",
                "new_from_date": "7/21/23",
                "new_to_date": "",
                "display_product_options_in": "Block after Info Column",
                "map_price": "",
                "msrp_price": "",
                "map_enabled": "",
                "gift_message_available": "Yes",
                "custom_design": "",
                "custom_design_from": "",
                "custom_design_to": "",
                "custom_layout_update": "",
                "page_layout": "",
                "product_options_container": "",
                "msrp_display_actual_price_type": "Use config",
                "country_of_manufacture": "China",
                "additional_attributes": {
                    "date_time": "7/21/23",
                    "gift_wrapping_available": "Use config",
                    "gift_wrapping_price": 1.99,
                    "instructions": "Here instruction go how to use this product indoors, outdoors.",
                    "material": "cotton",
                    "size": "large",
                    "usage": [
                        "Travel",
                        "Sports",
                        "Office",
                        "Casual"
                    ]
                },
                "qty": 1000,
                "out_of_stock_qty": 0,
                "use_config_min_qty": 1,
                "is_qty_decimal": 0,
                "allow_backorders": 0,
                "use_config_backorders": 1,
                "min_cart_qty": 1,
                "use_config_min_sale_qty": 1,
                "max_cart_qty": 10000,
                "use_config_max_sale_qty": 1,
                "is_in_stock": 1,
                "notify_on_stock_below": 1,
                "use_config_notify_stock_qty": 1,
                "manage_stock": 1,
                "use_config_manage_stock": 1,
                "use_config_qty_increments": 1,
                "qty_increments": 1,
                "use_config_enable_qty_inc": 1,
                "enable_qty_increments": 0,
                "is_decimal_divided": 0,
                "website_id": 0,
                "deferred_stock_update": 0,
                "use_config_deferred_stock_update": 1,
                "related_skus": "",
                "related_position": "",
                "crosssell_skus": "",
                "crosssell_position": "",
                "upsell_skus": "",
                "upsell_position": "",
                "additional_images": [
                    "/3/_/3.png",
                    "/4/_/4.png"
                ],
                "additional_image_labels": [
                    "three",
                    "four"
                ],
                "hide_from_product_page": "",
                "custom_options":
                [
                    {
                        "name": "Option 1",
                        "type": "drop_down",
                        "required": 0,
                        "price": 25,
                        "sku": "",
                        "max_characters": 0,
                        "file_extension": "",
                        "image_size_x": 0,
                        "image_size_y": 0,
                        "price_type": "percent",
                        "option_title": "A"
                    },
                    {
                        "name": "Option 2",
                        "type": "multiple",
                        "required": 1,
                        "price": 1.99,
                        "sku": "",
                        "max_characters": 0,
                        "file_extension": "",
                        "image_size_x": 0,
                        "image_size_y": 0,
                        "price_type": "fixed",
                        "option_title": "B"
                    },
                    {
                        "name": "Option 2",
                        "type": "multiple",
                        "required": 1,
                        "price": 4.00,
                        "sku": "",
                        "max_characters": 0,
                        "file_extension": "",
                        "image_size_x": 0,
                        "image_size_y": 0,
                        "price_type": "fixed",
                        "option_title": "C"
                    }
                ],
                "giftcard_type": "",
                "giftcard_allow_open_amount": "",
                "giftcard_open_amount_min": "",
                "giftcard_open_amount_max": "",
                "giftcard_amount": "",
                "use_config_is_redeemable": "",
                "giftcard_is_redeemable": "",
                "use_config_lifetime": "",
                "giftcard_lifetime": "",
                "use_config_allow_message": "",
                "giftcard_allow_message": "",
                "use_config_email_template": "",
                "giftcard_email_template": "",
                "bundle_price_type": "",
                "bundle_sku_type": "",
                "bundle_price_view": "",
                "bundle_weight_type": "",
                "bundle_values": "",
                "bundle_shipment_type": "",
                "downloadable_links": "",
                "downloadable_samples": "",
                "associated_skus": "",
                "configurable_variations": "",
                "configurable_variation_labels": ""
            },
            {
                "sku": "Simple Product 2",
                "_comment": "additional information for Simple Product 2"
            }
        ],
        "import_images_file_dir": "var/import/images/product_images"
    }
}
```

**Response:**

When Import is successful, the API response will contain the number of entities that were successfully imported.

```json
[
  "Entities Processed: 2"
] 
```

Arguments that support multiple values, such as `categories`, `product_websites`, `additional_attributes`, `additional_images`, `additional_image_labels`, and `custom_options`, can accept inputs in the form of an array, an array of JSON objects, or a singular JSON object.

Additionally, these arguments can also accept string values, similar to the import CSV API.

```json
{
    "categories": "Default Category/Category 1,Default Category/Category 2",
    "product_websites": "base,french",
    "additional_attributes": "date_time=7/21/23,gift_wrapping_available=Use config,gift_wrapping_price=1.990000,instructions=Here instruction go how to use this product indoors, outdoors.,material=cotton,size=large,usage=Travel|Sports|Office|Casual",
    "additional_images": "/3/_/3.png,/4/_/4.png",
    "additional_image_labels": "three,four",
    "custom_options": "name=Option 1,type=drop_down,required=1,price=25,sku=,max_characters=0,file_extension=,image_size_x=0,image_size_y=0,price_type=percent,option_title=A|name=Option 2,type=multiple,required=1,price=1.99,sku=,max_characters=0,file_extension=,image_size_x=0,image_size_y=0,price_type=fixed,option_title=B|name=Option 2,type=multiple,required=1,price=4,sku=,max_characters=0,file_extension=,image_size_x=0,image_size_y=0,price_type=fixed,option_title=C"
}
```

Although the string format shown above provides compatibility with the import CSV API, using a structured JSON format is recommended for better readability and precision.

**Payload 2 (Configurable product):**

For a configurable product:

*  The `configurable_variations` attribute accepts an array of JSON objects that describe variations. Each object represents a product variation, denoted by SKU, with associated attributes (e.g., color, size).
*  The `configurable_variation_labels` attribute accepts a JSON object that assigns human-readable labels to the variation attributes.

```json
{
    "configurable_variations":
    [
        {
            "sku": "Configurable 1-Red-small",
            "color_swatch": "Red",
            "size": "small"
        },
        {
            "sku": "Configurable 1-Red-large",
            "color_swatch": "Red",
            "size": "large"
        },
        {
            "sku": "Configurable 1-Green-small",
            "color_swatch": "Green",
            "size": "small"
        },
        {
            "sku": "Configurable 1-Green-large",
            "color_swatch": "Green",
            "size": "large"
        }
    ],
    "configurable_variation_labels":
    {
        "color_swatch": "Color Swatch",
        "size": "Size"
    }
}
```

This structure can be found nested within individual product items in the full payload.

**Payload 3 (Bundle product):**

For a bundle product:

*  The `bundle_values` attribute accepts an array of JSON objects that describe bundle items.

```json
{
    "bundle_values": [
        {
            "name": "Stasis Ball",
            "type": "select",
            "required": 1,
            "sku": "Sprite Statis Ball 55mm",
            "price": 7.99,
            "default": 0,
            "default_qty": 1,
            "price_type": "fixed",
            "can_change_qty": 1
        },
        {
            "name": "Stasis Ball",
            "type": "select",
            "required": 1,
            "sku": "Sprite Statis Ball 65mm",
            "price": 9.99,
            "default": 0,
            "default_qty": 1,
            "price_type": "fixed",
            "can_change_qty": 1
        },
        {
            "name": "Yoga Brick",
            "type": "checkbox",
            "required": 0,
            "sku": "Sprite Foam Yoga Brick",
            "price": 25,
            "default": 0,
            "default_qty": 1,
            "price_type": "percent",
            "can_change_qty": 0
        }
    ]
}
```

This structure can be found nested within individual product items in the full payload.

**Payload 4 (Downloadable product):**

For a downloadable product:

*  The `downloadable_links` attribute accepts an array of JSON objects that describe downloadable product links.
*  The `downloadable_samples` attribute accepts an array of JSON objects that describe downloadable product samples.

```json
{
    "downloadable_links":
    [
        {
            "link_id": 1,
            "id": 1,
            "title": "Part 1",
            "sort_order": 1,
            "sample_type": "file",
            "sample_file": "/test/1.png",
            "price": 4.99,
            "number_of_downloads": 100,
            "is_shareable": 1,
            "link_type": "file",
            "link_file": "/test/red.png"
        },
        {
            "link_id": 2,
            "id": 2,
            "title": "Part 2",
            "sort_order": 2,
            "sample_type": "file",
            "sample_file": "/test/2.png",
            "price": 4.49,
            "is_shareable": 1,
            "link_type": "file",
            "link_file": "/test/green.png"
        }
    ],
    "downloadable_samples":
    [
        {
            "sample_id": 1,
            "id": 1,
            "title": "Sample A",
            "sort_order": 1,
            "sample_type": "url",
            "sample_url": "http://example.com/pub/media/lemon.jpeg"
        },
        {
            "sample_id": 2,
            "id": 2,
            "title": "Sample B",
            "sort_order": 2,
            "sample_type": "file",
            "sample_file": "/test/pumpkin.png"
        }
    ]
}
```

This structure can be found nested within individual product items in the full payload.

**Payload 5 (Grouped product):**

For a grouped product:

*  The `associated_skus` attribute accepts a JSON object where keys are SKUs of products that the grouped product consists of, and values are the quantities of each SKU in the grouped product.

```json
{
    "associated_skus": {
        "Sprite Statis Ball 55mm": 1,
        "Sprite Foam Yoga Brick": 1,
        "Sprite Yoga Strap 6 foot": 1
    }
}
```

This structure can be found nested within individual product items in the full payload.

**Payload 6 (Gift card product):**

For a gift card product:

*  The `giftcard_amount` attribute accepts an array of amounts that can be used to purchase the gift card.

```json
{
    "giftcard_open_amount_min": 5,
    "giftcard_open_amount_max": 500,
    "giftcard_amount": [
        25,
        50,
        75,
        100
    ]
}
```

This structure can be found nested within individual product items in the full payload.

**Payload 7 (Multiple select attributes):**

Product multiple select attribute is represented as an array of strings.

```json
{
    "additional_attributes": {
        "usage": [
            "Travel",
            "Sports",
            "Office",
            "Casual"
        ]
    }
}
```

Customer and customer address multiple select attributes are represented as an array of strings.

```json
{
    "interests": [
        "Electronics",
        "Sports",
        "Automotive"
    ],
    "delivery_preferences": [
        "Hand directly to resident",
        "Leave in the mailbox"
    ]
}
```

Import JSON API does not create attributes automatically. You need to create attributes manually before importing data. For more information, see [Create attributes](https://devdocs.magento.com/guides/v2.4/extension-dev-guide/attributes.html#create-attributes).

**Payload (Advanced Pricing):**

Advanced pricing is represented as an array of JSON objects.

```json
{
    "source": {
        "entity": "advanced_pricing",
        "behavior": "append",
        "validation_strategy": "validation-stop-on-errors",
        "allowed_error_count": 10,
        "items":	[
            {
                "sku": "Simple Product 1",
                "tier_price_website": "All Websites [USD]",
                "tier_price_customer_group": "ALL GROUPS",
                "tier_price_qty": 1,
                "tier_price": 7.99,
                "tier_price_value_type": "Fixed"
            },
            {
                "sku": "Simple Product 1",
                "tier_price_website": "base",
                "tier_price_customer_group": "NOT LOGGED IN",
                "tier_price_qty": 2,
                "tier_price": 40,
                "tier_price_value_type": "Discount"
            },
            {
                "sku": "Simple Product 1",
                "tier_price_website": "french",
                "tier_price_customer_group": "General",
                "tier_price_qty": 5,
                "tier_price": 60,
                "tier_price_value_type": "Discount"
            }
        ]
    }
}
```

**Payload (Customer Finances):**

Customer finances is represented as an array of JSON objects.

```json
{
    "source": {
        "entity": "customer_finance",
        "behavior": "add_update",
        "validation_strategy": "validation-stop-on-errors",
        "allowed_error_count": 0,
        "items":	[
            {
                "_email": "johndoe@example.com",
                "_website": "base",
                "_finance_website": "base",
                "store_credit": 99.99,
                "reward_points": "100"
            },
            {
                "_email": "johndoe@example.com",
                "_website": "base",
                "_finance_website": "french",
                "store_credit": 50,
                "reward_points": 200
            }
        ]
    }
}
```

**Payload (Customers and Addresses):**

Customers and Addresses information is represented as an array of JSON objects.

```json
{
    "source": {
        "entity": "customer_composite",
        "behavior": "append",
        "validation_strategy": "validation-stop-on-errors",
        "allowed_error_count": 0,
        "items":	[
            {
                "email": "johndoe@example.com",
                "_website": "base",
                "_store": "admin",
                "confirmation": "",
                "created_at": "4/19/23 12:55",
                "created_in": "Admin",
                "disable_auto_group_change": 0,
                "dob": "4/19/16 0:00",
                "firstname": "John",
                "gender": "Male",
                "group_id": 1,
                "lastname": "Doe",
                "middlename": "",
                "password_hash": "<password hash here>",
                "prefix": "",
                "rp_token": "",
                "rp_token_created_at": "",
                "store_id": 0,
                "suffix": "",
                "taxvat": "",
                "website_id": 1,
                "password": "",
                "_address_city": "Los Angeles",
                "_address_company": "",
                "_address_country_id": "US",
                "_address_fax": "",
                "_address_firstname": "John",
                "_address_lastname": "Doe",
                "_address_middlename": "",
                "_address_postcode": 90017,
                "_address_prefix": "",
                "_address_region": "California",
                "_address_street": "Main Street 100\nSuite 200",
                "_address_suffix": "",
                "_address_telephone": 3233361267,
                "_address_vat_id": "",
                "_address_default_billing_": 1,
                "_address_default_shipping_": 1,
                "delivery_preferences": [
                    "Hand directly to resident",
                    "Leave in the mailbox"
                ],
                "interests": [
                    "Electronics",
                    "Sports",
                    "Automotive"
                ]
            }
        ]
    }
}
```

`delivery_preferences` and `interests` are multiple select attributes for addresses and customers. They are represented as an array of strings.

**Response:**

When the import is successful, the API response will contain the number of entities that were successfully imported.

```json
[
  "Entities Processed: 2"
] 
```

The `"entity": "customer_composite"` represents a composite entity that includes both a customer and an associated address. While the payload contains one item in the `items` array, it results in two entities (customer and address) being processed. Therefore, the response indicates "Entities Processed: 2".

<InlineAlert variant="info" slots="text"/>

The Import JSON API is exclusively available via REST and does not support SOAP. This is because the payload consists of complex JSON objects with nested arrays, which are inherently challenging to represent with the XML structure that SOAP relies upon.

### Performance

The Import JSON API is designed for high performance and scalability and tailored to handle large-scale data imports. In our testing environment, the API demonstrated the capability to efficiently process up to 100,000 products per minute in parallel mode, using multiple threads.
