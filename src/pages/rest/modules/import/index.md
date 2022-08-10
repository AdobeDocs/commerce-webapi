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

<!--Review the merchant docs at https://docs.magento.com/user-guide/system/data-import.html and add some of the missing information here. For example, the Admin allows the merchant to set customer field and multiple value separators. Since the endpoint doesn't have those fields, commas must be hard-coded. You need to say that. Likewise, if the endpoint is subject to the same filesize limitation, that needs to be mentioned. -->

You must specify a validation strategy. You can skip rows that have an invalid data format, or
you can stop the import process when the system first encounters an invalid row.

<!-- You need to describe the output when an error is encountered. Is there a single error message, or does the error message give some indication about what went wrong. In the case of skip rows, does the response indicate which rows were bad?-->

The `allowedErrorCount` field defines the maximum number of errors encountered before the
import processing is halted. If an error is encountered during row validation of CSV data, the import process terminates, and the valid rows are not processed either.

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
|`csvData` | Base64 encoded string containing CSV data | string | Required |

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

<!--It would be really helpful if you showed output showing some success and failures. -->

```json
[
  "Entities Processed: 1"
] 
```
