---
title: REST tutorials
description: A list of tutorials on the Commerce REST APIs
keywords:
  - REST
---
import * as Vars from '../../../data/vars.js';

# Tutorials

The REST tutorials provide an introduction to Adobe Commerce web APIs. In general, the tutorials guide you through commonly-performed complex tasks:

*  The [**order processing** tutorial](/rest/tutorials/orders/) demonstrates the lifecycle of an order. Major steps include creating a quote, converting it to an order, issuing an invoice, and shipping the order.

*  The [**order processing with Inventory Management**](/rest/tutorials/inventory/index/) tutorial builds upon the original order processing tutorial. It also configures sources and stocks and other Inventory Management features.

*  The [**configurable product** tutorial](/rest/tutorials/configurable-product/) helps you plan then create a configurable product and its component simple products.

*  The [**bulk API configurable product** tutorial](/rest/tutorials/bulk-configurable-product/) demonstrates how to create configurable products using bulk APIs.

*  The [**grouped products** tutorial](/rest/tutorials/grouped-product/) demonstrates how to create and manage grouped products.

## Complete these prerequisites

Before you begin any tutorial, make sure you know the basics about <Vars.sitedatavarce/>

*  Install an Commerce instance with sample data.

  The sample data defines a functional store, called Luma, that sells fitness clothing and accessories. The store does not provide any sandbox accounts for testing credit card payments, so transactions will be simulated using an offline payment method.

*  Install a REST client. You can use any REST client to send calls to Commerce. [Postman](https://www.getpostman.com/) is recommended.

*  Know how to construct a REST call in Commerce. See [Construct a request](/get-started/gs-web-api-request) for details.

*  Find the Commerce REST API documentation. You can view the [static REST API documentation on devdocs](../quick-reference/index.md) or [generate a local API reference](/rest/use-rest/generate-local/).

*  Find the Commerce Merchant documentation. Refer to [Getting Started with <Vars.sitedatavarce/>](https://docs.magento.com/user-guide/getting-started.html) for information about the Luma store that is created when you install Commerce with the sample data.

## Performing steps

Although some steps require that you configure Commerce in some way, you perform most steps by sending one or more REST calls to Commerce. Each step that makes a REST call provides the following information:

**Endpoint:**

This section lists the HTTP verb and full path to the endpoint. The basic structure of a REST call in Commerce is

`<HTTP verb> http://<host>/rest/<scope>/<endpoint>`

where:

Element | Description
--- | ---
`HTTP verb` | One of `GET`, `POST`, `PUT`, or `DELETE`
`host` | The hostname or IP address (and optionally, port) of the Commerce installation.
`scope` | Specifies which store the call affects. In this tutorial, this value is `default`.
`endpoint` | The full URI (Uniform Resource Identifier) to the endpoint. These values always start with `/V1`. For example, `/V1/orders/4`.

**Scope:**

The **Scope:** section is included when the tutorial requires that you send requests to different stores.

**HTTP headers:**

This section indicates which key/value pairs you must specify in the HTTP headers. All calls require one or more HTTP headers.

**Payload:**

This section lists the information that is sent to Commerce. All payload samples are valid and can be copied and pasted into your calls, but you might need to change the `id` values that Commerce returns.

**Response:**

This section lists the information that Commerce sends to the REST client. These values are often referenced in other steps in the tutorial. The values Commerce returns might be different than the values listed in the examples provided in this tutorial.
