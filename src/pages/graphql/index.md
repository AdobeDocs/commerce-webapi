---
title: GraphQL overview
description: Review high-level concepts about the Adobe Commerce and Magento Open Source GraphQL API.
keywords:
  - GraphQL
---

# GraphQL overview

[GraphQL](https://graphql.org/) is a data query language and runtime that revolutionizes how you build and consume APIs. Originally developed by Facebook in 2012 and open-sourced in 2015, GraphQL has become the preferred choice for modern applications that need efficient, flexible, and performant data fetching.

Adobe Commerce provides two comprehensive GraphQL implementations that serve as the ideal foundation for building next-generation commerce experiences, including [headless storefronts](https://experienceleague.adobe.com/developer/commerce/storefront/get-started/) and sophisticated mobile applications.

-  Adobe Commerce on Cloud and on-premises (PaaS) projects can implement the GraphQL schemas that have long been available to Adobe Commerce and Magento Open Source projects. Separate schemas are available for [core and B2B Commerce](../reference/graphql/2.4.8/index.md) functionality and service-based features, including [Catalog Service](./schema/catalog-service/index.md), [Live Search](./schema/live-search/index.md), and [Recommendations](./schema/product-recommendations/index.md). These schemas do not natively interact, but can be integrated with [API Mesh](https://developer.adobe.com/graphql-mesh-gateway/).

- [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/reference/graphql/saas/) (SaaS) projects can connect to a supergraph that not only combines and streamlines the schemas available to PaaS projects, but provides instant access to the latest features added in the [Storefront Compatability Package](https://experienceleague.adobe.com/developer/commerce/storefront/setup/configuration/storefront-compatibility/v248/) and other sources. Therefore, SaaS projects can take advantage of the latest GraphQL features without needing to wait for a new release.

<InlineAlert variant="info" slots="text"/>

If you are migrating from PaaS to SaaS, be aware that the SaaS schema removes all deprecated queries, mutations, and fields, so you can build new applications without worrying about future deprecations. It also replaces the core `products` and `categories` queries with their service-based equivalents, also named [`products`](./schema/catalog-service/queries/products.md) and [`categories`](./schema/catalog-service/queries/categories.md). The service-based queries are not backward compatible with the core queries, so you must update your applications to use the new queries. For more information, see [Migrate to Adobe Commerce as a Cloud Service](https://experienceleague.adobe.com/en/docs/commerce/cloud-service/migration/overview) for general guidelines.

## Why use GraphQL?

-  **Get exactly what you need.** Unlike traditional REST APIs that return fixed data structures, GraphQL lets you request exactly the fields you need in a single query. This means faster load times, reduced bandwidth usage, and better user experiences.

-  **Superior performance.** GraphQL minimizes over-fetching and under-fetching of data, allowing you to optimize performance by fetching only the necessary information in a single request. In addition, minimized data transfer is ideal for mobile and low-bandwidth environments.

-  **Enhanced developer experience.** GraphQL's strongly typed schema and introspection capabilities provide powerful tools for developers. You can explore the API, get real-time feedback, and leverage auto-completion in modern IDEs, making development faster and more efficient.

## Getting started with GraphQL

Ready to experience the power of Adobe Commerce GraphQL? Here's how to get started:

1. Choose Your GraphQL client. Select a GraphQL IDE or browser extension to explore and test queries and mutations. Some popular options include:

   - [GraphiQL](https://github.com/graphql/graphiql)
   - [Altair GraphQL client](https://altairgraphql.dev/)
   - [Altair Chrome extension](https://chrome.google.com/webstore/detail/altair-graphql-client/flnheeellpciglgpaodhkhmapeljopja)
   - [Apollo Studio](https://studio.apollographql.com/)

1. Access your GraphQL endpoint. Your Adobe Commerce GraphQL endpoint is available at:

   &#8203;<Edition name="paas" /> `https://<commerce-server>/graphql`

   &#8203;<Edition name="saas" /> `https://<region>-<environment>.api.commerce.adobe.com/<tenantId>/graphql`

1. Explore the schema. Use the schema browser in your GraphQL IDE or extension to explore the available queries, mutations, and types. This will help you understand the structure of the API and how to construct your requests. You can also use introspection queries to discover the schema programmatically.

   ```graphql
   query IntrospectionQuery {
    __schema {
      mutationType {
        name
        fields {
          name
          description
        }
      }
      queryType {
        name
        fields {
          name
          description
        }
      }
    }
   }
   ```

1. Run your first query. Try this simple product query to get started:

  ```graphql
  {
    storeConfig {
     store_code
     store_name
     is_default_store
     store_group_code
     is_default_store_group
     locale
     base_currency_code
     default_display_currency_code
     timezone
    }
  }
  ```

  The response will provide you with basic information about your store configuration, such as the store code, name, locale, and currency settings.

  ```graphql
  {
    data {
      storeConfig {
        store_code: "default"
        store_name: "Default Store View"
        is_default_store: true
        store_group_code: "main_website_store"
        is_default_store_group: true
        locale: "en_US"
        base_currency_code: "USD"
        default_display_currency_code: "USD"
        timezone: "America/Los_Angeles"
      }
    }
  }
  ```

## Commerce API playground

The [Commerce API playground](https://experienceleague.adobe.com/developer/commerce/storefront/playgrounds/commerce-services/) enables you to run selected queries against a live instance of Adobe Commerce with Luma sample data. The playground includes example core and Storefront Services queries. You can customize the output of the queries to help you understand the power of our GraphQL APIs.
