---
title: Adobe Storefront Services GraphQL
description: Learn how Catalog Service, Live Search, and Product Recommendations GraphQL queries relate to each other and to the core Commerce schema.
keywords:
  - GraphQL
  - Services
  - Catalog Service
  - Live Search
  - Product Recommendations
---

# Adobe Storefront Services GraphQL

Adobe Storefront Services—[Catalog Service](../catalog-service/), [Live Search](../live-search/), and [Product Recommendations](../product-recommendations/)—are SaaS extensions for Adobe Commerce that expose their own GraphQL schemas. These schemas are separate from the [core Commerce GraphQL schema](../index.md) and optimized for fast, read-only storefront rendering.

In Adobe Commerce on cloud and on-premises instances (PaaS), the merchant installs and configures the Storefront Services extensions to enable these GraphQL endpoints. In Adobe Commerce as a Cloud Service (SaaS), the services are included in the platform, and the merchant must configure Live Search and Product Recommendations services.

## How the three services relate to each other

Although each service addresses a distinct storefront use case, they share a common technical foundation and are designed to work together:

| Service | Primary purpose |
| --- | --- |
| **Catalog Service** | Renders product detail pages (PDPs) and product compare pages by fetching rich product data by SKU. |
| **Live Search** | Powers product listing pages (PLPs) and on-site search with AI-driven relevance, faceting, and merchandising rules. |
| **Product Recommendations** | Surfaces AI-generated product suggestions ("Customers who viewed this also viewed…") as recommendation units on any storefront page. |

**Shared dependency.** Both Live Search and Product Recommendations require Catalog Service (v2.2.0 or later) to retrieve complete product data for each recommended item. If you are using Live Search 3.0.2 or later and Product Recommendations  3.0.2 or later, the Catalog Service is installed automatically when you install or update the extensions.

**Complementary coverage.** A typical storefront uses all three:

- `products` (Catalog Service) on the PDP
- `productSearch` (Live Search) on the PLP and search results page
- `recommendations` (Product Recommendations) as widgets on the PDP, home page, and cart page
- `variants` and `refineProduct` (Catalog Service) for option selection on the PDP

## How Storefront Services differ from the core GraphQL schema

The core Commerce GraphQL endpoint (`<commerce-url>/graphql`) provides a comprehensive schema for all Commerce operations: catalog browsing, cart management, checkout, customer accounts, orders, and more. The Storefront Services schemas are narrowly scoped for read-only storefront rendering, and they differ from the core schema in the following ways.

### Separate endpoints

Storefront Services queries do **not** use the standard Commerce GraphQL endpoint. They are sent to dedicated Adobe SaaS endpoints:

| Edition | Environment | Endpoint |
| --- | --- | --- |
| PaaS | Testing | `https://catalog-service-sandbox.adobe.io/graphql` |
| PaaS | Production | `https://catalog-service.adobe.io/graphql` |
| SaaS | Testing | `https://{{location}}-sandbox.api.commerce.adobe.com/{{tenant-id}}/graphql` |
| SaaS | Production | `https://{{location}}.api.commerce.adobe.com/{{tenant-id}}/graphql` |

### Different HTTP headers

These services use SaaS context headers instead of the authentication tokens used by core Commerce.

| Header | Required by | Description |
| --- | --- | --- |
| `Magento-Customer-Group` | Catalog Service, Product Recommendations | Customer group for personalized pricing |
| `Magento-Environment-Id` | All three services | The SaaS Data Space ID from the Commerce Admin |
| `Magento-Store-Code` | All three services | Store code |
| `Magento-Store-View-Code` | All three services | Store view code |
| `Magento-Website-Code` | All three services | Website code |
| `X-Api-Key` | All three services | Unique API key for your Commerce environment |

### Different data types

Storefront Services return their own types that are not interchangeable with core types:

- The Catalog Service `products` query returns `ProductView` objects (`SimpleProductView` or `ComplexProductView`), not the core `Products` type. Prices, images, attributes, and options are structured differently.
- The Live Search `productSearch` query returns `ProductSearchResponse` with facets (`Aggregation`) and merchandising metadata. The core `products` query returns layered-navigation data for categories, which is a fundamentally different filtering model.
- Both the Catalog Service and core Commerce expose a `categories` query, but the Catalog Service version is read-optimized and returns only the data needed to render category navigation, not the full administrative category tree.

### No write operations

Storefront Services schemas contain only queries. All mutations (cart, checkout, customer, orders) are in the core schema and must be sent to the core endpoint.

## When to use Storefront Services queries

**Use Storefront Services queries when:**

- Building or customizing a storefront that requires the fastest possible catalog rendering for PDPs, PLPs, search, or recommendations.
- Your storefront frontend (for example, an Edge Delivery Services or headless storefront) needs to fetch catalog data independently from cart and checkout operations.
- You need advanced search features like semantic search, AI merchandising rules, synonyms, or faceted filtering that are not available in the core `products` query.
- You need AI-driven product recommendations that are automatically trained on shopper behavior.

**Do not use Storefront Services queries when:**

- You need to perform a write operation (add to cart, place an order, update a customer profile). These operations always use the core schema.
- You need real-time inventory or pricing that must be guaranteed up to the millisecond; Storefront Services data is indexed asynchronously.
- You are working on a server-side admin workflow or integration that reads data from Commerce for non-storefront purposes. In this case, use the core REST or GraphQL APIs instead.
- The Storefront Services extensions are not installed or your Commerce instance is not connected to Adobe's SaaS platform.

## How Storefront Services differ from Adobe Commerce Optimizer

Adobe Commerce Optimizer is a standalone SaaS platform that is not installed as an extension on an existing Commerce instance. It provides the **Merchandising GraphQL API**, which covers a similar set of storefront use cases but with a different architecture, different query signatures, and different headers.

### Architectural difference

| Aspect | Storefront Services | Commerce Optimizer |
| --- | --- | --- |
| **Deployment model** | Extensions installed on an existing Adobe Commerce (PaaS or SaaS) instance | Standalone SaaS platform; catalog data is ingested via a separate Data Ingestion API |
| **Data source** | Commerce catalog, indexed into the Adobe SaaS data space | Data ingested independently into the Commerce Optimizer instance |
| **Context model** | Store view and website codes from Commerce | Catalog views and policies defined in Commerce Optimizer |
| **Authentication** | `X-Api-Key` tied to your Commerce environment | No API key required; context is provided through `AC-View-Id` |

Commerce projects deployed on Adobe Commerce on cloud or on-premises can use the [Commerce Optimizer Connector](https://experienceleague.adobe.com/en/docs/commerce/aco-optimizer-connector/overview) to synchronize Commerce catalog data to an Adobe Commerce Optimizer instance.  When the connector is installed and enabled, customers use the Merchandising Services GraphQL queries to retrieve product and catalog data instead of using the Catalog Service, Live Search, and Product Recommendations queries.

Commerce projects deployed on Commerce as a Cloud Service must use Catalog Service, Live Search, and Product Recommendations queries to retrieve catalog data for product listing, product discovery, and product recommendations.

### Different headers

Commerce Optimizer uses a different set of context headers that reflect its catalog-view model:

| Header | Description |
| --- | --- |
| `AC-View-Id` | Required. Identifies the catalog view (replaces `Magento-Store-View-Code` / `Magento-Environment-Id`) |
| `AC-Price-Book-ID` | Optional. Specifies the price book for pricing context |
| `AC-Policy-{*}` | Optional. Restricts product access based on request attributes (for example, brand or channel policies) |

### Query-level differences

The Merchandising GraphQL API provides queries that are similar in name to some Merchant Services queries but are not identical in structure or behavior:

| Query | Storefront Services | Commerce Optimizer |
| --- | --- | --- |
| `products` | Catalog Service — fetch by SKU, returns `ProductView` | Same name, same general purpose, but uses `AC-View-Id` context. Commerce Optimizer also supports an additional `CategoryProductView` interface that returns category information associated with a product, including hierarchical parent relationships and images. |
| `productSearch` | Live Search / Catalog Service — full search with `phrase`, `filter`, `sort`, optional `context` | Similar structure, but context is provided through headers rather than a `context` input object |
| `attributeMetadata` | Live Search — returns filterable and sortable attributes | Same name and purpose; independent implementation |
| `refineProduct` | Catalog Service — narrow complex product options by selection | Equivalent query available |
| `variants` | Catalog Service — return all variant combinations | Equivalent query available |
| `categories` | Catalog Service — return category hierarchy | Commerce Optimizer uses `categoryTree` with `family` and `slugs` arguments |
| `recommendations` | Product Recommendations — returns units by recommendation type | Commerce Optimizer supports an equivalent `recommendations` query. Additionally,  Optimizer provides a `recommendationsByUnitIds`query, which returns specific recommendation units based on pre-configured unit IDs |
| `navigation` | Not available in Storefront Services | Returns category-based navigation structure for a given product family. |
|`

### When to use Commerce Optimizer

Use the Commerce Optimizer Merchandising GraphQL API instead of Storefront Services queries when:

- Building on Adobe Commerce Optimizer as a standalone SaaS platform rather than on an Adobe Commerce (PaaS/SaaS) instance.
- Your storefront needs to serve multiple catalog views or channel-specific product catalogs controlled by Commerce Optimizer policies.
- Your Commerce on cloud infrastructure or on premises project has been configured to use the [Adobe Commerce Optimizer Connector](https://experienceleague.adobe.com/en/docs/commerce/aco-optimizer-connector/overview), which syncs data from your Commerce project to Adobe Commerce Optimizer.

If you are running Adobe Commerce (PaaS or SaaS) with the Storefront Services extensions installed, use the Storefront Services queries described in this section. The two API surfaces are not interchangeable—switching endpoints without also migrating your catalog data and context configuration will result in errors.

## Combining schemas with API Mesh

Because Storefront Services and Commerce Optimizer both use separate endpoints from the core Commerce GraphQL endpoint, a storefront often needs to make requests to multiple endpoints. You can use [API Mesh for Adobe Developer App Builder](https://developer.adobe.com/graphql-mesh-gateway/) to unify multiple GraphQL schemas—including the core Commerce schema, Catalog Service, Live Search, and third-party APIs—into a single endpoint. API Mesh also handles the context headers for each upstream service automatically, simplifying storefront development.
