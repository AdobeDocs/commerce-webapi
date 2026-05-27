---
title: Product interface implementations
description: Adobe Commerce and Magento Open Source provides multiple product types, and most of these product types have specialized attributes that are not defined in...
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

```graphql
{
  products(filter:
    {sku: {eq: "24-WG085_Group"}}
  )
  {
    items {
      uid
      name
      sku
      __typename
      ... on GroupedProduct {
        items{
          qty
          position
          product{
            sku
            name
            __typename
            url_key
          }
        }
      }
    }
  }
}
```

```json
{
  "data": {
    "products": {
      "items": [
        {
          "uid": "NDU=",
          "name": "Set of Sprite Yoga Straps",
          "sku": "24-WG085_Group",
          "__typename": "GroupedProduct",
          "items": [
            {
              "qty": 0,
              "position": 0,
              "product": {
                "sku": "24-WG085",
                "name": "Sprite Yoga Strap 6 foot",
                "__typename": "SimpleProduct",
                "url_key": "sprite-yoga-strap-6-foot"
              }
            },
            {
              "qty": 0,
              "position": 1,
              "product": {
                "sku": "24-WG086",
                "name": "Sprite Yoga Strap 8 foot",
                "__typename": "SimpleProduct",
                "url_key": "sprite-yoga-strap-8-foot"
              }
            },
            {
              "qty": 0,
              "position": 2,
              "product": {
                "sku": "24-WG087",
                "name": "Sprite Yoga Strap 10 foot",
                "__typename": "SimpleProduct",
                "url_key": "sprite-yoga-strap-10-foot"
              }
            }
          ]
        }
      ]
    }
  }
}
```

