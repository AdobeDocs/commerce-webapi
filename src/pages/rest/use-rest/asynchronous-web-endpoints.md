---
title: Asynchronous web endpoints
description: Learn about asynchronous web points, how they are used and how to define store scopes
contributor_name: comwrap GmbH
contributor_link: http://comwrap.com/
keywords:
  - REST
--- 
import * as Vars from '../../../data/vars.js';

# Asynchronous web endpoints

An asynchronous web endpoint intercepts messages to a Web API and writes them to the message queue. Each time the system accepts such an API request, it generates a UUID identifier. Adobe Commerce includes this UUID when it adds the message to the queue. Then, a consumer reads the messages from the queue and executes them one-by-one.

<InlineAlert variant="success" slots="text"/>

&#8203;<Edition name="paas" /> Use the `bin/magento queue:consumers:start async.operations.all` command to start the consumer that handles asynchronous and bulk API messages.

Commerce supports the following types of asynchronous requests:

*  POST
*  PUT
*  DELETE
*  PATCH

<InlineAlert variant="info" slots="text"/>

GET requests are not supported. Although Commerce does not currently implement any PATCH requests, they are supported in custom extensions.

The route to all asynchronous calls varies between platforms:

&#8203;<Edition name="paas" /> In Adobe Commerce on Cloud and on-premises projects, the route contains the prefix `/async`, added before `/V1` of a standard synchronous endpoint. For example:

```http
POST https://<host>/rest/<store-view-code>/async/V1/products
PUT https://<host>/rest/<store-view-code>/async/V1/products/:sku
```

&#8203;<Edition name="saas" /> In Adobe Commerce as a Cloud Service,  the `/async` segment occurs after the `V1` segment of the route. For example:

```http
POST https://<server>.api.commerce.adobe.com/<tenant-id>/V1/async/products
PUT https://<server>.api.commerce.adobe.com/<tenant-id>/V1/async/products/:sku
```

The response of an asynchronous request contains the following fields:

Field name | Data type | Description
--- | --- | ---
`bulk_uuid` | String | A generated universally unique identifier.
`request_items` | Object | An array containing information about the status of the asynchronous request.
`id` | Integer | A generated ID that identifies the request.
`data_hash` | String | SHA256 encoded content of incoming message.
`status` | String | Reserved for future use. Currently, the value is always `accepted`.
`errors` | Boolean | Reserved for future use. Currently, the value is always `false`. If an error occurs, the system provides all error-related information as a standard `webapi` exception.

## Sample usage

The following call asynchronously changes the price of the product that has a `sku` of `24-MB01`:

&#8203;<Edition name="paas" /> `PUT https://<host>/rest/<store-view-code>/async/V1/products/24-MB01`
&#8203;<Edition name="saas" /> `PUT https://<server>.api.commerce.adobe.com/<tenant-id>/V1/async/products/24-MB01`

### Payload

```json
{
  "product": {
    "price": 29
  }
}
```

### Response

Commerce generates a `bulk_uuid` for each asynchronous request. Use the `bulk_uuid` to determine the [operation status](/rest/use-rest/operation-status-endpoints/) of your request.

```json
{
    "bulk_uuid": "fbfca270-7a90-4c4e-9f32-d6cf3728cdc7",
    "request_items": [
        {
            "id": 0,
            "data_hash": "9c1bd4bfd8defcc856ddf129cc01d172625d139d5f7dcf53b6cb09a0e9a843a3",
            "status": "accepted"
        }
    ],
    "errors": false
}
```

## Store scopes

<Edition name="paas" />

You can specify a store code (which is labeled in the Admin as store view code) in the route of an asynchronous endpoint so that it operates on a specific store, as shown below:

```http
POST /<store_code>/async/V1/products
PUT /<store_code>/async/V1/products/:sku
```

As a result, the asynchronous calls update the products on the specific store, instead of the default store.

You can specify the `all` store code to perform operations on all existing stores:

```http
POST /all/async/V1/products
PUT /all/async/V1/products/:sku
```

### Fallback and creating/updating objects when setting store scopes

The following rules apply when you create or update an object, such as a product.

*  If you do not set the store code while creating a new product, Commerce creates a new object with all values set globally for each scope.
*  If you do not set the store code while updating a product, then by fallback, Commerce updates values for the default store only.
*  If you include the `all` parameter, then Commerce updates values for all store scopes (in case a particular store doesn't yet have its own value set).
*  If `<store_code>` parameter is set, then values for only defined store will be updated.
