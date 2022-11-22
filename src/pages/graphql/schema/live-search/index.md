---
title: Live Search | Commerce Web APIs
edition: ee
description: Learn how Live Search implements GraphQL.
---

# Live Search

Live Search is a set of standalone packages for Adobe Commerce that replaces the standard search capabilities. It provides GraphQL functionality that is currently separate from the built-in GraphQL functionality provided in Adobe Commerce and Magento Open Source. Live Search GraphQL requires connecting to a different endpoint and specifying a different set of HTTP headers.

You can connect to the Live Search GraphQL endpoint to test sample queries using an Integrated Development Environment (IDE) in two ways:

-  Through the GraphQL Playground IDE embedded in the Commerce Admin. The embedded IDE manages the endpoint URL and required HTTP headers. To access this IDE, go to **Marketing** > SEO & Search > **Live Search**.

-  Through a standalone version of GraphQL Playground, or any other IDE, such as GraphiQL or Postman. In these applications you must specify the endpoint URL and provide a set of HTTP headers for each call.

For instructions on how to install and implement this product, see [Introduction to Live Search](https://experienceleague.adobe.com/docs/commerce-merchant-services/live-search/overview.html).

## Error Codes

The Live Search queries can return the following error codes when a query encounters an error.

|**Error Code**|**Description**|
|---|---|
|1000 |Catches any other error that is not recognized by the service.|
|1001 |`index_not_found_exception`<br />Live Search exception message.|
|1002 |`search_phase_execution_exception`<br />Live Search exception message.|
|1003 |`mapper_parsing_exception`<br />Live Search exception message.|
|1004 |`invalid_argument_exception`<br /> The request has an invalid argument.|
