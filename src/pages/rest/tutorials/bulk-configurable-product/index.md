---
title: Create a configurable product using bulk APIs
description: A tutorial that describes how to create a configurable product using bulk API calls
contributor_name: comwrap GmbH
contributor_link: http://comwrap.com/
keywords:
  - REST
--- 
 
# Create a configurable product using bulk APIs

A system integrator can use Adobe Commerce REST bulk APIs to perform actions on a large scale; such as, creating multiple customers and products, changing prices across an inventory, and assigning large groups of products to a specific warehouse, all within a single call.

 To demonstrate how to use the REST bulk APIs, this tutorial will start with a _configurable product_. A configurable product is a parent product of multiple simple products. You define a configurable product so that the buyer must make one or more choices to select a product. For example, most clothing comes in a variety of colors and sizes. If you are offering a skirt in black, red, and blue colorways in sizes small, medium, and large, then you would create a configurable product with nine simple products, one for each combination of color and size.

 In this tutorial, we will create a gray t-shirt that comes in three sizes (small, medium, and large). The configurable product defines basic characteristics of the t-shirt. Then, we will create a simple product for each size and link each of them to the configurable product. Finally, we will add an option that allows the customer to specify text that can be added to the shirt.

 This **4-step tutorial** generally takes **45 minutes**.

### Before you begin

*  Install a Commerce instance with sample data. The sample data defines a functional store, called Luma, that sells fitness clothing and accessories.
*  Install a REST client. You can use any REST client to send calls to Commerce. [Postman](https://www.getpostman.com/) is recommended.
*  Obtain an admin authorization token. All calls in this tutorial require administrator privileges. See [Generate the admin token](/rest/tutorials/prerequisite-tasks/) for more information.
*  Use the `bin/magento queue:consumers:start async.operations.all` command to enable bulk endpoint processing.

### Other resources

*  [REST Tutorials](../index.md) provides additional information about completing any Commerce REST tutorial.
*  [Asynchronous web endpoints](/rest/use-rest/asynchronous-web-endpoints/) provides information about how to use the Commerce Asynchronous API
*  [Bulk endpoints](/rest/use-rest/bulk-endpoints/) provides information about how to use the Commerce Bulk API
