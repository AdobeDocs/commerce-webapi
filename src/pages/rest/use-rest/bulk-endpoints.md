---
title: Bulk endpoints
description: Learn how to combine multiple API calls of the same type into a single request
contributor_name: comwrap GmbH
contributor_link: http://comwrap.com/
keywords:
  - REST
--- 
 
# Bulk endpoints

Bulk API endpoints differ from other REST endpoints in that they combine multiple calls of the same type into an array and execute them as a single request. The endpoint handler splits the array into individual entities and writes them as separate messages to the message queue.

&#8203;<Edition name="saas" /> In Adobe Commerce as a Cloud Service, message queues run automatically. There is no need to manage queues or install a message broker.

&#8203;<Edition name="paas" /> Cron jobs are the default mechanism for [managing message queues](https://experienceleague.adobe.com/en/docs/commerce-operations/configuration-guide/message-queues/manage-message-queues) and starting message queue [consumers](https://experienceleague.adobe.com/en/docs/commerce-operations/configuration-guide/message-queues/consumers), but you can also use external process control systems (like [Supervisor](https://supervisord.readthedocs.io/en/latest/)) to monitor process management. You can use the [`bin/magento queue:consumers:start async.operations.all`](https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cli/start-message-queues.html) command to manually start the `async.operations.all` consumer that handles asynchronous and bulk API messages. However, manually starting consumers is not recommended because it requires you to keep your terminal session connected.

<InlineAlert variant="info" slots="text"/>

Before using the Bulk API to process messages, you must install and configure RabbitMQ, which is the default message broker. See [Setup RabbitMQ service](https://experienceleague.adobe.com/en/docs/commerce-cloud-service/user-guide/configure/service/rabbitmq) for cloud infrastructure projects and [Message broker](https://experienceleague.adobe.com/docs/commerce-operations/installation-guide/prerequisites/rabbitmq.html) for on-premises projects.

## Routes

The route to bulk calls varies between platforms:

&#8203;<Edition name="paas" /> In Adobe Commerce on Cloud and on-premises projects, the route contains the prefix `/async/bulk`, added before `/V1` of a standard synchronous endpoint. For example:

```http
POST https://<host>/rest/<store-view-code>/async/bulk/V1/products
PUT https://<host>/rest/<store-view-code>/async/bulk/V1/products/:sku
```

&#8203;<Edition name="saas" /> In Adobe Commerce as a Cloud Service, the `/async/bulk` segment occurs after the `V1` segment of the route. For example:

```http
POST https://<server>.api.commerce.adobe.com/<tenant-id>/V1/async/bulk/products
PUT https://<server>.api.commerce.adobe.com/<tenant-id>/V1/async/bulk/products/:sku
```

Endpoint routes that contain input parameters require additional changes. For example, `PUT /V1/products/:sku/media/:entryId` contains the `:sku` and `:entryId` input parameters. The route of a bulk request cannot contain input parameters, so you must change the route so that it does not contain any. To do this, replace the colon (`:`) with `by` and change the first letter of the parameter to uppercase.

The following table provides several examples:

Platform | Synchronous route | Bulk route
--- | --- | ---
PaaS | `PUT <path>/V1/products/:sku/media/:entryId` | `PUT <path>/async/bulk/V1/products/bySku/media/byEntryId`
PaaS | `POST <path>/V1/carts/:quoteId/items` | `POST <path>/async/bulk/V1/carts/byQuoteId/items`
SaaS | `PUT <path>/V1/products/:sku/media/:entryId` | `PUT <path>/V1/async/bulk/products/bySku/media/byEntryId`
SaaS | `POST <path>/V1/carts/:quoteId/items` | `POST <path>/V1/async/bulk/carts/byQuoteId/items`

<InlineAlert variant="info" slots="text"/>

GET requests are not supported.

## Payloads

<InlineAlert variant="info" slots="text"/>

The following example is PaaS-specific. Adobe Commerce as a Cloud Service does not support the `POST V1/customers` endpoint. However, the payload of any bulk requests can contain an array of objects.

The payload of a bulk request contains an array of request bodies. For example, the minimal payload for creating four customers with `POST <path>/async/bulk/V1/customers` would be structured as follows:

```json
[{
    "customer": {
        "email": "mshaw@example.com",
        "firstname": "Melanie Shaw",
        "lastname": "Doe"
    },
    "password": "Strong-Password"
},
{
    "customer": {
        "email": "bmartin@example.com",
        "firstname": "Bryce",
        "lastname": "Martin"
    },
    "password": "Strong-Password"
},
{
    "customer": {
        "email": "bmartin@example.com",
        "firstname": "Bryce",
        "lastname": "Martin"
    },
    "password": "Strong-Password"
},
{
    "customer": {
        "email": "tgomez@example.com",
        "firstname": "Teresa",
        "lastname": "Gomez"
    },
    "password": "Strong-Password"
}
]
```

<InlineAlert variant="success" slots="text"/>

The second and third requests are duplicates.

## Responses

The response contains an array that indicates whether the call successfully added each request to the message queue. Although the duplicated request to create a customer will fail, Commerce added it to the message queue successfully.

```json
{
    "bulk_uuid": "799a59c0-09ca-4d60-b432-2953986c1c38",
    "request_items": [
        {
            "id": 0,
            "data_hash": "3d3d853839dd442d0b99a1badea756a03f19ffb0fb7aab672c05f83d5a914181",
            "status": "accepted"
        },
        {
            "id": 1,
            "data_hash": "bf8859d03545f0fa80084a47348a629cdf571fc064b952e7396c338d5cf3bf6e",
            "status": "accepted"
        },
        {
            "id": 2,
            "data_hash": "876f3f2e4b226d54dcbf3f5ce752a9f748a45310261d2dd5cc7a7c9ef74b4369",
            "status": "accepted"
        },
        {
            "id": 3,
            "data_hash": "9c1bd4bfd8defcc856ddf129cc01d172625d139d5f7dcf53b6cb09a0e9a843a3",
            "status": "accepted"
        }
    ],
    "errors": false
}
```

## DELETE requests

<InlineAlert variant="info" slots="text"/>

The following example is PaaS-specific. Adobe Commerce as a Cloud Service does not support the `DELETE V1/cmsPage` endpoint or its bulk and asynchronous counterparts.

The following call asynchronously deletes CMS blocks with IDs `1` and `2`:

```http
DELETE <server-path>/async/bulk/V1/cmsPage/byPageId
```

### DELETE request payload

```json
[
    {
        "pageId": "1"
    },
    {
        "pageId": "2"
    }
]
```

## Store scopes

<Edition name="paas" />

You can specify a store code (which is labeled in the Admin as store view code) in the route of an asynchronous endpoint so that it operates on a specific store, as shown below:

```http
POST /<store_code>/async/bulk/V1/products
PUT /<store_code>/async/bulk/V1/products/bySku
```

As a result, the asynchronous calls update the products on the specific store, instead of the default store.

You can specify the `all` store code to perform operations on all existing stores:

```http
POST /all/async/bulk/V1/products
PUT /all/async/bulk/V1/products/bySku
```

## Fallback and creating/updating objects when setting store scopes

<Edition name="paas" />

When you create or update an object, such as a product, you can specify the store code in the request. If you do not specify a store code, Commerce uses the default store scope.
The following rules apply when you create or update an object, such as a product.

*  If you do not set the store code while creating a new product, Commerce creates a new object with all values set globally for each scope.
*  If you do not set the store code while updating a product, then by fallback, Commerce updates values for the default store only.
*  If you include the `all` parameter, then Commerce updates values for all store scopes (in case a particular store doesn't yet have its own value set).
*  If `<store_code>` parameter is set, then values for only defined store will be updated.
