---
title: ImportCsv API

description: Import entities into Adobe Commerce using Rest API

--- 
## Import API

The  `StartImportInteface` service provides the means to efficiently import entities in Magento using a single API call. 

The `POST /rest/default/V1/import/csv` call allows import of the following entities:

* Advanced Pricing
* Products (Simple & Configurable)
* Customers
* Customer Finances
* Customer Addresses


**Service Name:**

`StartImportInterface`

**REST Endpoint:**

```http
POST /rest/default/V1/import/csv
```

**StartImportInterface Parameters:**


|Name | Description  | Format | Requirements|
|-----|--------------|--------|---------------------------------------------------------------------------------|
|`entity`|Type of entity to be imported| string | Required for determining type of entity being imported|
|`behavior` | Import Behavior | string | Required for determining if entities are being added/updated,replaced or deleted |
|`validationStrategy` | Strategy to use when entities are invalid | string | Required for determining validation strategy|
|`allowedErrorCount` | No. of errors before import is canceled | string | Required for canceling import after certain number of invalid rows|
|`csvData` | Base64 encoded string containing csv data | string | Csv data is encoded in base64 format|

**Sample Usage:**

`POST <host>/rest/default/V1/import/csv`

<CodeBlock slots="heading, code" repeat="2" languages="JSON, JSON" />

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

#### Response

```json
[
  "Entities Processed: 1"
] 
```
