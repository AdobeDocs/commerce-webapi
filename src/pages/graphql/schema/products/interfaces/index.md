---
title: Product interfaces and attributes
---

# Product interfaces and attributes

Any type that implements [`ProductInterface`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-ProductInterface) contains all the base attributes necessary for the frontend of the product model.
The `items` that are returned in a `ProductInterface` array can also contain attributes from resources external to the `CatalogGraphQl` module:

-  Custom and extension attributes defined in any attribute set
-  The attribute is defined in the [PhysicalProductInterface](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-PhysicalProductInterface) or [CustomizableOptionInterface](customizable-option.md)
-  Product types that define their own implementation of `ProductInterface` including:
   -  [`SimpleProduct`](types/simple.md)
   -  [`BundleProduct`](types/bundle.md)
   -  [`ConfigurableProduct`](types/configurable.md)
   -  [`DownloadableProduct`](types/downloadable.md)
   -  [`GiftCardProduct`](types/gift-card.md)
   -  [`GroupedProduct`](types/grouped.md)
   -  [`VirtualProduct`](types/virtual.md)

## Deprecated interfaces

The following interfaces are available only if you have installed the PWA Metapackage for Magento Open Source Extensions. This metapackage has been deprecated.

- [`AttributeMetadataInterface`](attribute-metadata.md)
- [`AttributeOptionsInterface`, `SelectableInputTypeInterface`, `UiInputTypeInterface`](pwa-implementations.md)

## Sample query

The `custom_attributesV2` attribute is defined in `ProductInterface`. In this example, the attribute's `filters` object determines which custom attributes will be used to narrow the results when using `products` query. It contains at least one attribute and the value that is being searched for. The following example searches for custom attributes of a product where `is_comparable` is `true`.

```graphql
{
    products(filter: {sku: {eq: "24-MB02"}})
    {
        items
        {
            custom_attributesV2(filters: {is_comparable: true})                                 {
                items {
                    code
                }
                errors {
                    type
                    message
                }
            }
        }
    }
}
```
