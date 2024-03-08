---
title: RoutableInterface attributes
---

# RoutableInterface attributes

Some entities are "routable", meaning that they have URLs and can serve as the model for a rendered page. The following implementations of the `RoutableInterface` allow you to return details in the [`route` query](../queries/route.md). `RoutableUrl` is returned when the URL is not linked to an entity.

*  [BundleProduct](types/bundle.md)
*  [CategoryTree](../queries/category-list.md#output-attributes)
*  [CmsPage](../../store/queries/cms-page.md)
*  [ConfigurableProduct](types/configurable.md)
*  [DownloadableProduct](types/downloadable.md)
*  [GiftCardProduct](types/gift-card.md)
*  [GroupedProduct](types/grouped.md)
*  [SimpleProduct](types/simple.md)
*  [VirtualProduct](types/virtual.md)
*  [RoutableUrl](#routable-url) (2.4.7-beta only)

## RoutableInterface attributes

import RoutableInterface from '/src/_includes/graphql/routable-interface.md'

<RoutableInterface />

## Sample Query

The following query returns information about the specified URL key. The query contains multiple fragments so that it can be used for categories, CMS pages, and multiple product types.

**Request:**

```graphql
{
  route(url: "teton-pullover-hoodie.html") {
    __typename
    relative_url
    redirect_code
    type
    ... on SimpleProduct {
      sku
      url_key
      uid
      url_rewrites {
        url
        parameters {
          name
          value
        }
      }
    }
    ... on ConfigurableProduct {
      sku
      image {
        label
      }
      uid
      url_key
      url_suffix
      url_rewrites {
        parameters {
          name
          value
        }
      }
      media_gallery {
        url
      }
    }
    ... on CategoryTree {
      uid
      product_count
      canonical_url
      products {
        total_count
        items {
          sku
          uid
        }
      }
    }
    ... on CmsPage {
      content
      content_heading
      meta_title
      meta_keywords
      meta_description
      page_layout
      identifier
      title
      url_key
    }
    ... on GroupedProduct {
      canonical_url
      sku
      items {
        product {
          uid
          url_key
        }
      }
    }
    ... on BundleProduct {
      items {
        sku
        required
        type
        title
        options {
          uid
          is_default
          can_change_quantity
          price_type
          quantity
        }
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "route": {
      "__typename": "ConfigurableProduct",
      "relative_url": "teton-pullover-hoodie.html",
      "redirect_code": 0,
      "type": "PRODUCT",
      "sku": "MH02",
      "image": {
        "label": "Teton Pullover Hoodie"
      },
      "uid": "ODY=",
      "url_key": "teton-pullover-hoodie",
      "url_suffix": ".html",
      "url_rewrites": [
        {
          "parameters": [
            {
              "name": "id",
              "value": "86"
            }
          ]
        },
        {
          "parameters": [
            {
              "name": "id",
              "value": "86"
            },
            {
              "name": "category",
              "value": "16"
            }
          ]
        },
        {
          "parameters": [
            {
              "name": "id",
              "value": "86"
            },
            {
              "name": "category",
              "value": "13"
            }
          ]
        }
      ],
      "media_gallery": [
        {
          "url": "http://example.com/media/catalog/product/cache/3103a735c131a485a1ff51c24439c39b/m/h/mh02-black_main_1.jpg"
        },
        {
          "url": "http://example.com/media/catalog/product/cache/3103a735c131a485a1ff51c24439c39b/m/h/mh02-black_alt1_1.jpg"
        },
        {
          "url": "http://example.com/media/catalog/product/cache/3103a735c131a485a1ff51c24439c39b/m/h/mh02-black_back_1.jpg"
        }
      ]
    }
  }
}
```

## Routable URL

import BetaNote from '/src/_includes/graphql/notes/beta.md'

<BetaNote />

`RoutableUrl` is the default implementation of RoutableInterface. This type is returned when the URL is not linked to a product or CMS page or to a category. As a result, the `RoutableUrl.type` field always returns `null`.

### Example

In the following example, an internal URL `support.html` is configured to redirect to an external URL `https://support.example.com/` using URL Rewrite.

**Request:**

```graphql
{
  route(url: "support.html") {
    __typename
    relative_url
    redirect_code
    type
  }
}
```

**Response:**

```json
{
  "data": {
    "route": {
      "__typename": "RoutableUrl",
      "relative_url": "https://support.example.com/",
      "redirect_code": 302,
      "type": null
    }
  }
}
```
