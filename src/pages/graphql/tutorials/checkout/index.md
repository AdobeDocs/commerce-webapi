---
title: GraphQL checkout tutorial
description: Learn how to place an order with the GraphQL API.
contributor_name: Atwix
contributor_link: https://www.atwix.com/
keywords:
  - GraphQL
  - Checkout
---

# GraphQL checkout tutorial

This tutorial describes how to place an order through GraphQL. Customers can make purchases in two ways:

-  As a logged-in user
-  As a guest user who does not create an account

The **10-step tutorial** generally takes **30 minutes**.

Adobe Commerce and Magento Open Source GraphQL is designed to run queries and perform actions on behalf of a customer. Adobe Commerce and Magento Open Source GraphQL does not perform back-end tasks, such as manage invoices or shipments.

### Before you begin

Complete the following prerequisites:

-  Install an Adobe Commerce or Magento Open Source instance with sample data.
   The sample data defines a functional store, called Luma, that sells fitness clothing and accessories. The store does not provide any sandbox accounts for testing credit card payments, so transactions will be simulated using an offline payment method.

-  Install a GraphQL client. You can use any GraphQL client to send calls to Magento. [Altair](https://altair.sirmuel.design/) is a good example.

-  Learn about GraphQL, how it works, and how to use it. See [Introduction to GraphQL](https://graphql.org/learn/) for details.

-  Know how to generate a customer token. See [Authorization tokens](../../usage/authorization-tokens.md) for details.

-  In the Admin, create a [coupon](https://docs.magento.com/user-guide/marketing/price-rules-cart-coupon-code-configure.html) that will be used in [Step 7. Apply a coupon](../../tutorials/checkout/apply-coupon.md).

### Other resources

-  [Order processing tutorial](https://developer.adobe.com/commerce/webapi/rest/tutorials/orders/) shows a system integrator how REST APIs are used in the lifecycle of an order, including configuring a store and creating a customer; creating quotes, orders, invoices, and shipments; preparing for checkout; and more order-related tasks.

-  [REST Tutorials](https://developer.adobe.com/commerce/webapi/rest/tutorials/) provides additional information about completing any REST tutorial.
