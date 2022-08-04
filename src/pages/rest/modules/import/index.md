---

title: ImportCsv API <br/>
description: Import entities into Adobe Commerce using Rest API. This API allows you to execute append, replace, update and delete behaviors on entities. 
The endpoint accepts CSV data in base64 encoded format. You can also choose the validation strategy with option to skip rows with invalid data format or
to stop the import process altogether when first invalid row is encountered. There is also a field to define the maximum no. of errors encountered before the 
import processing is halted. In case an error is encountered during row validation of CSV data, the import process is terminated and the valid rows are not 
processed either. 
--- 
## Import API

The  `StartImportInteface` service provides the means to efficiently import entities into Adobe Commerce using a single API call. 

The `POST /rest/<store_view_code>/V1/import/csv` call allows you to import the following entities:

* `advanced_pricing`
* `catalog_product`
* `customer`
* `customer_address`
* `customer_composite`
* `customer_finance`


**Service Name:**

`StartImportInterface`

**REST Endpoint:**

```http
POST /rest/<store_view_code>/V1/import/csv
```

**StartImportInterface Parameters:**


|Name | Description  | Format | Requirements                                                                                                         |
|-----|--------------|--------|----------------------------------------------------------------------------------------------------------------------|
|`entity` | The type of entity to be imported| string | Required. One of `advanced_pricing`, `catalog_product`, `customer`, `customer_address`, `customer_composite`, `customer_finance` |
|`behavior` | The action  to perform | string | Required. One of `append`, `replace`, `delete`                                                                             |
|`validationStrategy` | Strategy to use when entities are invalid | string | Required. One of `validation_stop_on_errors`, `validation-skip-errors`                                                                    |
|`allowedErrorCount` | The maximum number of errors that can occur until import is canceled | string | Required                                                                                                             |
|`csvData` | Base64 encoded string containing CSV data | string | Required                                                                                                             |

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

```json
[
  "Entities Processed: 1"
] 
```
