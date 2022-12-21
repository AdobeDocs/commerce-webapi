---
title: ImportCsv API
description: Import entities into Adobe Commerce using REST.
--- 

The `POST /rest/<store_view_code>/V1/import/csv` endpoint allows you to use REST to import data into Adobe Commerce. It works much like the import functionality provided in the Admin at **System** > Data Transfer > **Import**. You can use the endpoint to import the following entities:

*  `advanced_pricing`
*  `catalog_product`
*  `customer`
*  `customer_address`
*  `customer_composite`
*  `customer_finance`

Your source data must be in the order and format Commerce expects. To understand the requirements of each import entity, go to the Import page in the Admin, select an entity type from the drop-down menu, then click **Download Sample File**. The endpoint accepts CSV data in base64 encoded format. Because you control the conversion of a file or data into base64, you do not need to escape special characters before the import.

Before encoding the data in base64, you can optionally use [gzip](https://www.gzip.org) to compress your data. This is useful when importing large CSV files that may otherwise run into HTTP request size limitations of HTTP server or PHP configuration.

Since the API is used for importing base64 encoded CSV data, the endpoint expects the data to use commas for the field and multiple value separators. 
Import fails if CSV uses any other special character as separators.

You must specify a validation strategy. You can skip rows that have an invalid data format, or
you can stop the import process when the system first encounters an invalid row.
Depending on the validation strategy chosen, the API will complete or cancel the Import Process.

*  When Validation Strategy is set as `validation-stop-on-errors` and a single row data is invalid, the API cancels the Import and returns a message describing the error encountered in the first invalid row along with its corresponding row number.

*  When Validation Strategy is set as `validation-skip-errors`, the API imports the valid rows as long as the total number of errors in the CSV data do not exceed the value set in `allowedErrorCount` field.

If the number of errors exceed the field value of `allowedErrorCount`, the import is canceled (valid rows aren't processed either) and the first encountered error along with its row number is returned in response.

The `allowedErrorCount` field defines the maximum number of errors encountered before the import processing is halted.

## Import API

The  `StartImportInterface` service provides the means to efficiently import entities into Adobe Commerce using a single API call.

**Service Name:**

`StartImportInterface`

**REST Endpoint:**

```http
POST /rest/<store_view_code>/V1/import/csv
```

**StartImportInterface Parameters:**

|Name | Description  | Format | Requirements |
|-----|-----|-----|-----|
|`entity` | The type of entity to be imported | string | Required. One of `advanced_pricing`, `catalog_product`, `customer`, `customer_address`, `customer_composite`, or `customer_finance` |
|`behavior` | The action  to perform | string | Required. One of `append`, `replace`, `delete`|
|`validationStrategy` | Strategy to use when entities are invalid | string | Required. Either `validation_stop_on_errors` or `validation-skip-errors` |
|`allowedErrorCount` | The maximum number of errors that can occur until import is canceled | string | Required |
|`csvData` | Base64 encoded string containing CSV data (optionally gzip compressed before base64) | string | Required |

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
    "behavior":"append",
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
  "behavior":"append",
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
