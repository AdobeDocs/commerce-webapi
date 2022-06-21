---
title: Order Processing with Inventory Management
description: In this tutorial you will process orders using Inventory Management in the REST API
--- 
 
# Order Processing with Inventory Management

### Before you begin

This tutorial builds upon the workflow described in the [Order Processing with REST APIs tutorial](/rest/tutorials/orders/). The Order Processing with Inventory Management tutorial provides additional steps that detail how to create stocks and sources, assign products to a custom source, and run the Source Selection Algorithms to recommend shipping options.

For more information about key inventory features, see [Inventory Management overview](https://devdocs.magento.com/guides/v2.4/inventory/index.html).

This **14-step tutorial** generally takes **1 hour**.

### Complete these prerequisites

*  Install Magento 2.4.0 or later.

*  Install a REST client. You can use any REST client to send calls to Magento. [Postman](https://www.getpostman.com/) is recommended.

*  Know how to construct a REST call in Magento. See [Construct a request](/get-started/gs-web-api-request) for details.

*  Obtain an admin authorization token. Multiple calls in this tutorial require administrator privileges. See [Generate the admin token](/rest/tutorials/prerequisite-tasks/) for more information.

### Other resources

*  Magento uses [Swagger](https://swagger.io) to provide REST API documentation on local instances of Magento. See [Generate a local API reference](/rest/generate-local/) for more information. You can view the [static REST API documentation](https://magento.redoc.ly/), which displays reference information using ReDoc.
