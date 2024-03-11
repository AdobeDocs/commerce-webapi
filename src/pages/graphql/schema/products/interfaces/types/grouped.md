---
title: Grouped product data types
---

# Grouped product data types

The `GroupedProduct` data type implements [ProductInterface](https://developer.adobe.com/commerce/webapi/graphql-api/beta/index.html#definition-ProductInterface) and [PhysicalProductInterface](https://developer.adobe.com/commerce/webapi/graphql-api/beta/index.html#definition-PhysicalProductInterface). As a result, attributes that are specific to grouped products can be used when performing a [products](../../queries/products.md) query. It also implements [RoutableInterface](https://developer.adobe.com/commerce/webapi/graphql-api/beta/index.html#definition-RoutableInterface).

## Sample query

The following query returns information about downloadable product `24-WG085_Group`, which is defined in the sample data.

import GroupedProductSample from '/src/_includes/graphql/examples/grouped-product-sample-24.md'

<GroupedProductSample />
