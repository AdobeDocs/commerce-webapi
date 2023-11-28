---
title: ProductInterface attributes
---

# ProductInterface attributes

Any type that implements [`ProductInterface`](https://developer.adobe.com/commerce/webapi/graphql-api/beta/index.html#definition-ProductInterface) contains all the base attributes necessary for the frontend of the product model.
The `items` that are returned in a `ProductInterface` array can also contain attributes from resources external to the `CatalogGraphQl` module:

-  Custom and extension attributes defined in any attribute set
-  The attribute is defined in the [PhysicalProductInterface](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-PhysicalProductInterface) or [CustomizableOptionInterface](customizable-option.md)
-  Product types that define their own implementation of `ProductInterface` including:
   -  [SimpleProduct](types/simple.md)
   -  [BundleProduct](types/bundle.md)
   -  [ConfigurableProduct](types/configurable.md)
   -  [DownloadableProduct](types/downloadable.md)
   -  [GiftCardProduct](types/gift-card.md)
   -  [GroupedProduct](types/grouped.md)
   -  [VirtualProduct](types/virtual.md)
