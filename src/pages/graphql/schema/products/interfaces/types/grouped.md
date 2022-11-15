---
title: Grouped product data types
---

# Grouped product data types

The `GroupedProduct` data type implements [ProductInterface](../index.md) and [PhysicalProductInterface](../index.md#physicalproductinterface). As a result, attributes that are specific to grouped products can be used when performing a [products](../../queries/products.md) query. It also implements [RoutableInterface](../routable.md).

## GroupedProduct

The `GroupedProduct` object contains the `[items]` array:

Attribute | Type | Description
--- | --- | ---
`items` | [GroupedProductItem] | An array containing grouped product items

## GroupedProductItem {#GroupedProductItem}

The `GroupedProductItem` object contains the following attributes:

Attribute | Type | Description
--- | --- | ---
`position` | Int | The relative position of this item compared to the other group items
`product` | [ProductInterface](../index.md) | The ProductInterface contains attributes that are common to all types of products. Note that descriptions may not be available for custom and EAV attributes
`qty` | Float | The quantity of this grouped product item

## Sample Query

The following query returns information about downloadable product `24-WG085_Group`, which is defined in the sample data.

import GroupedProductSample from '/src/pages/_includes/graphql/grouped-product-sample-24.md'

<GroupedProductSample />
