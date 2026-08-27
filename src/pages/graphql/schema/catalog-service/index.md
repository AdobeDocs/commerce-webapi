---
title: Catalog Service for Adobe Commerce
description: Learn how Catalog Service implements GraphQL.
keywords:
  - GraphQL
  - Services
---

# Catalog Service GraphQL Schema for Adobe Commerce

The Catalog Service extension for Adobe Commerce contributes to a services-only GraphQL schema that contains queries that return specialized catalog data that is not available in the built-in GraphQL functionality provided in Adobe Commerce and Magento Open Source. The queries in this schema allow Commerce merchants to quickly and fully render product-related content on the storefront, including product detail pages and product list pages.

You can optionally implement [API Mesh for Adobe Developer App Builder](https://developer.adobe.com/graphql-mesh-gateway/) to integrate the core and Catalog Service GraphQL schemas with private and third-party APIs, as well as other software interfaces. The mesh can be configured to ensure that calls routed to each endpoint contain the correct authorization information in the headers.

For instructions on how to install, implement, and use the Catalog Service, see the [Catalog Service Guide](https://experienceleague.adobe.com/en/docs/commerce/catalog-service/overview).

>[!NOTE]
>
>If your Commerce instance uses Live Search or Product Recommendations, the Catalog Service is installed and updated automatically when you onboard or update those services. If you are using Adobe Commerce as a Cloud Service, the latest version of the Catalog Service metapackage is available in your environment. To begin using the service, see [Getting started with the Catalog Service](https://experienceleague.adobe.com/en/docs/commerce/catalog-service/get-started).
