---
title: Retrieve filtered responses for REST endpoints
description: How to filter your REST responses
keywords:
  - REST
--- 
import * as Vars from '../../../data/vars.js';

# Retrieve filtered responses for REST endpoints

Some REST calls return dozens or even hundreds of parameters, and parsing through all this data can be unwieldy. In addition, mobile app developers might find the bandwidth needed to process a request to be excessive. To resolve these problems, Adobe Commerce provides a query parameter-based syntax for REST requests that return partial responses.

You can append `?fields=<field_or_object1>,<field_or_object2>,...` to any GET, POST, or PUT operation to filter unimportant information from the response. `<field_or_object>` can be any of the following:

*  Simple top-level field
*  Top-level object that includes all fields
*  Top-level object with selected fields
*  Nested objects

Separate each field or object with a comma.

On POST and PUT requests, Commerce ignores the `fields` parameter as input, but the response includes only the requested fields and objects.

The following examples use Luma sample data, which is available in PaaS environments only. The examples are applicable in Adobe Commerce as a Cloud Service, but must be modified to return your sample data.

## Simple fields

The following example returns only the `sku`, `price`, and `name` for the specified product:

&#8203;<Edition name="paas" /> `GET https://<host>/rest/<store_code>/V1/products/24-MB01?fields=sku,price,name`
&#8203;<Edition name="saas" /> `GET https://<server>.api.commerce.adobe.com/<tenant-id>/V1/products/24-MB01?fields=sku,price,name`

```json
{
  "sku": "24-MB01"
  "name": "Joust Duffle Bag"
  "price": 24.99
}
```

## Simple fields and top-level objects with all fields

The following example returns only the customer first name, last name, and the entire `billing_address` object from a specified order. Do not include brackets `[]` after an object name when you want to return all of the object's contents.

&#8203;<Edition name="paas" /> `GET https://<host>/rest/<store_code>/V1/orders/2?fields=billing_address,customer_firstname,customer_lastname`
&#8203;<Edition name="saas" /> `GET https://<server>.api.commerce.adobe.com/<tenant-id>/V1/orders/2?fields=billing_address,customer_firstname,customer_lastname`

```json
{
"customer_firstname": "Veronica"
"customer_lastname": "Costello"
"billing_address": {
  "address_type": "billing"
  "city": "Calder"
  "country_id": "US"
  "customer_address_id": 1
  "email": "roni_cost@example.com"
  "entity_id": 4
  "firstname": "Veronica"
  "lastname": "Costello"
  "parent_id": 2
  "postcode": "49628-7978"
  "region": "Michigan"
  "region_code": "MI"
  "region_id": 33
  "street": "6146 Honey Bluff Parkway"
  "telephone": "(555) 229-3326"
  }
}
```

## Top-level object with selected fields

The following example returns only the `name`, `qty`, and `sku` fields defined in an `items` object from a specified shipment:

&#8203;<Edition name="paas" /> `GET https://<host>/rest/<store_code>/V1/shipment/2?fields=items[name,qty,sku]`
&#8203;<Edition name="saas" /> `GET https://<server>.api.commerce.adobe.com/<tenant-id>/V1/shipment/2?fields=items[name,qty,sku]`

```json
"items": [
   {
     "name": "Minerva LumaTech&trade; V-Tee-XS-Blue",
     "qty": 1,
     "sku": "WS08-XS-Blue",
   }
]
```

## Nested objects

This example returns only the following:

*  The product's `sku` and `name`
*  The entire `category_links` object, which is defined in `extension_attributes`
*  The `item_id` and `qty` fields of the `stock_item` object, which is also defined in `extension_attributes`

&#8203;<Edition name="paas" /> `GET https://<host>/rest/<store_code>/V1/products/MT12?fields=name,sku,extension_attributes[category_links,stock_item[item_id,qty]]`
&#8203;<Edition name="saas" /> `GET https://<server>.api.commerce.adobe.com/<tenant-id>/V1/products/MT12?fields=name,sku,extension_attributes[category_links,stock_item[item_id,qty]]`

```json
{
  "sku": "MT12"
  "name": "Cassius Sparring Tank"
  "extension_attributes": {
    "category_links": {
      "position": 1
      "category_id": "18"
    }
    "stock_item": {
      "item_id": 732
      "qty": 0
      }
  }
}
```

## POST operation

The following POST operation and payload creates a catalog category named `New Category`. Commerce returns only the `id`, `parent_id`, and `name` attributes

&#8203;<Edition name="paas" /> `POST https://<host>/rest/<store_code>/V1/categories?fields=id,parent_id,name`
&#8203;<Edition name="saas" /> `POST https://<server>.api.commerce.adobe.com/<tenant-id>/V1/categories?fields=id,parent_id,name`

**Payload:**

```json
{
  "category": {
    "name": "New Category",
    "is_active": true
  }
}
```

**Response:**

```json
{
"id": 43
"parent_id": 2
"name": "New Category"
}
```

## Using with searchCriteria

The [`searchCriteria` query parameter](./performing-searches.md) allows you to search across multiple objects in a collection. You can use the `fields` query parameter in conjunction with `searchCriteria` to limit the output. The question mark (?) that precedes `fields` in all the other examples in this document is replaced with an ampersand (&amp;).

The following query returns only the `sku` and `name` parameters for product items whose `category_gear` attribute includes the value `86`.

&#8203;<Edition name="paas" /> `GET https://<host>/rest/<store_code>/V1/products/?searchCriteria[filter_groups][0][filters][0][field]=category_gear&searchCriteria[filter_groups][0][filters][0][value]=86&searchCriteria[filter_groups][0][filters][0][condition_type]=finset&fields=items[sku,name]`
&#8203;<Edition name="saas" /> `GET https://<server>.api.commerce.adobe.com/<tenant-id>//V1/products/?searchCriteria[filter_groups][0][filters][0][field]=category_gear&searchCriteria[filter_groups][0][filters][0][value]=86&searchCriteria[filter_groups][0][filters][0][condition_type]=finset&fields=items[sku,name]`

```json
{
"items":
  {
    "sku": "24-MG04"
    "name": "Aim Analog Watch"
  }
  {
    "sku": "24-MG01"
    "name": "Endurance Watch"
  }
  {
    "sku": "24-MG03"
    "name": "Summit Watch"
  }
  {
    "sku": "24-MG05"
    "name": "Cruise Dual Analog Watch"
  }
  {
    "sku": "24-MG02"
    "name": "Dash Digital Watch"
  }
  {
    "sku": "24-WG09"
    "name": "Luma Analog Watch"
  }
  {
    "sku": "24-WG01"
    "name": "Bolo Sport Watch"
  }
  {
    "sku": "24-WG03"
      "name": "Clamber Watch"
  }
  {
    "sku": "24-WG02"
    "name": "Didi Sport Watch"
  }
}
```

### Related topics

*  [Search using REST APIs](./performing-searches.md)
