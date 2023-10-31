---
title: GraphQL overview
description: Review high-level concepts about the Adobe Commerce and Magento Open Source GraphQL API.
keywords:
  - GraphQL
---

# GraphQL overview

[GraphQL](https://graphql.org/) is a data query language developed internally by Facebook in 2012 before being publicly released in 2015. Adobe Commerce and Magento Open Source implement GraphQL to provide an alternative to REST and SOAP web APIs for frontend development.

## How to access GraphQL

Use a GraphQL IDE such as [GraphiQL](https://github.com/graphql/graphiql) or a browser extension to run the code samples and tutorials. If you install a browser extension, make sure it has the ability to set request headers. On Google Chrome, [Altair GraphQL Client](https://chrome.google.com/webstore/detail/altair-graphql-client/flnheeellpciglgpaodhkhmapeljopja) is one extension that can do the job.

To begin exploring GraphQL, set the GraphQL endpoint by entering `http://<magento2-server>/graphql` in the URL bar of your IDE or extension. You can use the browser in the right column to determine how to set up a query or mutation. Examples are also available throughout the GraphQL documentation.

The following image shows a sample query, its response, and the GraphQL browser:

![GraphiQL browser](../_images/graphql/graphql-browser.png)

<InlineAlert variant="info" slots="text" />

The Catalog Service, Live Search, and Product Recommendations services have schemas that are independent from the core schema for Adobe Commerce and Magento Open Source. You can find the schema reference documentation and examples for these services in [Storefront Services GraphQL](https://developer.adobe.com/commerce/services/graphql/).
