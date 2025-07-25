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

To begin exploring GraphQL, set the GraphQL endpoint by entering `http://<commerce-server>/graphql` in the URL bar of your IDE or extension. You can use the browser in the right column to determine how to set up a query or mutation. Examples are also available throughout the GraphQL documentation.

The following image shows a sample query, its response, and the GraphQL browser:

![GraphiQL browser](../_images/graphql/graphql-browser.png)

## Commerce API playground

The [Commerce API playground](https://experienceleague.adobe.com/developer/commerce/storefront/playgrounds/commerce-services/) enables you to run selected queries against a live instance of Adobe Commerce with Luma sample data. The playground includes example core and Storefront Services queries. You can customize the output of the queries to help you understand the power of our GraphQL APIs.
