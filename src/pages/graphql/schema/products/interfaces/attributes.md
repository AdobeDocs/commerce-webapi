---
title: ProductInterface attributes
description: Any type that implements ProductInterface contains all the base attributes necessary for the frontend of the product model.
---

# ProductInterface attributes

Any type that implements [`ProductInterface`](/reference/graphql/latest/types-k-p.md#productinterface) contains all the base attributes necessary for the frontend of the product model.
The `items` that are returned in a `ProductInterface` array can also contain attributes from resources external to the `CatalogGraphQl` module:

-  Custom and extension attributes defined in any attribute set
-  The attribute is defined in the [PhysicalProductInterface](/reference/graphql/latest/types-k-p.md#physicalproductinterface) or [CustomizableOptionInterface](customizable-option.md)
-  Product types that define their own implementation of `ProductInterface` including:
   -  [SimpleProduct](types/simple.md)
   -  [BundleProduct](types/bundle.md)
   -  [ConfigurableProduct](types/configurable.md)
   -  [DownloadableProduct](types/downloadable.md)
   -  [GiftCardProduct](types/gift-card.md)
   -  [GroupedProduct](types/grouped.md)
   -  [VirtualProduct](types/virtual.md)
