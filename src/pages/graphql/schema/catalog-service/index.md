---
title: Catalog Service for Adobe Commerce
description: Learn how Catalog Service implements GraphQL.
keywords:
  - GraphQL
  - Services
---

# Catalog Service for Adobe Commerce

The Catalog Service for Adobe Commerce extension contributes to a services-only GraphQL schema that contains queries that return specialized catalog data that is not available in the [core GraphQL schema](../index.md). The queries in this schema allow Commerce merchants to quickly and fully render product-related content on the storefront, including product detail pages and product list pages.

You can optionally implement [API Mesh for Adobe Developer App Builder](https://developer.adobe.com/graphql-mesh-gateway/) to integrate the core and Catalog Service GraphQL schemas with private and third-party APIs, as well as other software interfaces. The mesh can be configured to ensure that calls routed to each endpoint contain the correct authorization information in the headers.

The [Catalog Service Guide](https://experienceleague.adobe.com/docs/commerce-merchant-services/catalog-service/overview.html) describes the architecture and implementation of this product.
