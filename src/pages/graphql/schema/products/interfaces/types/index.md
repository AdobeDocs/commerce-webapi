---
title: Product interface implementations
---

# Product interface implementations

Adobe Commerce and Magento Open Source provides multiple product types, and most of these product types have specialized attributes that are not defined in the [`ProductInterface`(https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-ProductInterface)].

Product type | Implements | Has product-specific attributes?
--- | --- | ---
[BundleProduct](bundle.md) | ProductInterface, [PhysicalProductInterface](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-ProductInterface), [CustomizableProductInterface](../customizable-option.md), [RoutableInterface](../routable.md) | Yes
[ConfigurableProduct](configurable.md) | [ProductInterface](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-ProductInterface), [PhysicalProductInterface](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-ProductInterface), [CustomizableProductInterface](../customizable-option.md), [RoutableInterface](../routable.md) | Yes
[DownloadableProduct](downloadable.md) | [ProductInterface](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-ProductInterface),  [CustomizableProductInterface](../customizable-option.md), [RoutableInterface](../routable.md)  | Yes
[GiftCardProduct](gift-card.md) | [ProductInterface](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-ProductInterface),  [PhysicalProductInterface](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-ProductInterface), [CustomizableProductInterface](../customizable-option.md), [RoutableInterface](../routable.md)| Yes
[GroupedProduct](grouped.md) | [ProductInterface](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-ProductInterface), [PhysicalProductInterface](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-ProductInterface), [CustomizableProductInterface](../customizable-option.md), [RoutableInterface](../routable.md) | Yes
[SimpleProduct](simple.md) | [ProductInterface](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-ProductInterface), [PhysicalProductInterface](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-ProductInterface), [CustomizableProductInterface](../customizable-option.md), [RoutableInterface](../routable.md) | No
[VirtualProduct](virtual.md) | [ProductInterface](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-ProductInterface),  [CustomizableProductInterface](../customizable-option.md), [RoutableInterface](../routable.md) | No

## Query for product-specific attributes

To return attributes that are specific to a product type, append a structure similar to the following to the end of the `Products` output object:

```text
... on <ProductType> {
  items{
    <ProductType-attribute1>
    <ProductType-attribute2>
    ...
    }
  }
```

For example, to return `GroupedProduct` attributes, construct your query like this:

import GroupedProductSample from '/src/_includes/graphql/examples/grouped-product-sample-24.md'

<GroupedProductSample />
