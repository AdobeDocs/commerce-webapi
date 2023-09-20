---
title: Order Processing with Inventory Management
description: In this tutorial you will process orders using Inventory Management in the REST API
keywords:
  - Inventory
  - REST
--- 
 
# Order Processing with Inventory Management

This tutorial builds upon the workflow described in the [Order Processing with REST APIs tutorial](/rest/tutorials/orders/). The Order Processing with Inventory Management tutorial provides additional steps that detail how to create stocks and sources, assign products to a custom source, and run the Source Selection Algorithms to recommend shipping options.

For more information about key inventory features, see [Inventory Management overview](https://developer.adobe.com/commerce/webapi/rest/inventory/).

This **14-step tutorial** generally takes **1 hour**.

### Complete these prerequisites

*  Install Adobe Commerce.

*  Install a REST client. You can use any REST client to send calls to Commerce. [Postman](https://www.getpostman.com/) is recommended.

*  Know how to construct a REST call in Commerce. See [Construct a request](/get-started/gs-web-api-request) for details.

*  Obtain an admin authorization token. Multiple calls in this tutorial require administrator privileges. See [Generate the admin token](/rest/tutorials/prerequisite-tasks/) for more information.

### Other resources

*  Commerce uses [Swagger](https://swagger.io) to provide REST API documentation on local instances of Commerce. See [Generate a local API reference](/rest/use-rest/generate-local/) for more information. You can view the [static REST API documentation](../../quick-reference/index.md), which displays reference information using ReDoc.
