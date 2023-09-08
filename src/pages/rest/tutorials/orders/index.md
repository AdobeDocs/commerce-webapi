---
title: Order processing tutorial
description: In this tutorial you will configure a store, create a customer, quotes, orders and more using the REST API
keywords:
  - REST
--- 
import * as Vars from '../../../../data/vars.js';

# Order processing tutorial

This tutorial shows a system integrator how REST APIs are used in the lifecycle of an order, including configuring a store and creating a customer; creating quotes, orders, invoices, and shipments; preparing for checkout; and more order-related tasks.

The **10-step tutorial** generally takes **30 minutes**.

### Before you begin

Complete the following prerequisites:

*  Install an Adobe Commerce instance with sample data.

  The sample data defines a functional store, called Luma, that sells fitness clothing and accessories. The store does not provide any sandbox accounts for testing credit card payments, so transactions will be simulated using an offline payment method.

*  Install a REST client. You can use any REST client to send calls to Commerce. [Postman](https://www.getpostman.com/) is recommended.

*  Set up [two-factor authentication](https://developer.adobe.com/commerce/testing/functional-testing-framework/two-factor-authentication/). This tutorial assumes Google Authenticator is your 2FA solution.

*  Know how to construct a REST call in Commerce. See [Construct a request](/get-started/gs-web-api-request) for details.

*  Find the Commerce REST API documentation. You can view the [static REST API documentation on devdocs](../../quick-reference/index.md) or [generate a local API reference](/rest/use-rest/generate-local/).

*  Find the Commerce Merchant documentation. Refer to [Getting Started with <Vars.sitedatavarce/> 2.1](https://docs.magento.com/user-guide/getting-started.html) for information about the Luma store that is created when you install Commerce with the sample data.

### Other resources

*  [REST Tutorials](/rest/tutorials/index/) provides additional information about completing any Commerce REST tutorial.
