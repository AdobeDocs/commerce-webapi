---
title: dynamicBlocks query | Commerce Web APIs
---

# dynamicBlocks query

The `dynamicBlocks` query returns a list of dynamic blocks that have been placed in a Dynamic Blocks Rotator inline widget and meet the specified criteria.

<InlineAlert variant="info" slots="text" />

The Banner functionality was removed from Adobe Commerce and Magento Open Source 2.4.0 and replaced with dynamic blocks.

When a [Dynamic Blocks Rotator inline widget is created](https://docs.magento.com/user-guide/cms/dynamic-blocks-rotate.html), the administrator can select the following options:

*  **Specified Dynamic Blocks**
*  **Cart Price Rule Related**
*  **Catalog Price Rule Related**

Widgets defined with the **Specified Dynamic Blocks** option affect CMS page rendering. The other two options are used for rendering cart, product, and catalog pages and are not applicable for PWA applications. Therefore, in most cases for a CMS page, your query should assign the value of `SPECIFIED` to the `type` input attribute.

<InlineAlert variant="info" slots="text" />

Adobe Commerce and Magento Open Source GraphQL supports the **Display all instead of rotating** rotation mode only.

The following input fields are available only if specialized modules have been installed:

Field | Type | Description
--- | --- | ---
`audience_id` field | FilterEqualTypeInput | Audience ID for this block. Available in the `magento/audiences` module only.
`cart_id` | String | The unique ID that identifies the customer's cart. Available in the `magento2-pwa-commerce` module only.
`product_uid` | ID | The unique ID of the product currently viewed. Available in the `magento2-pwa-commerce` module only.


If the `magento/audiences` module is installed, the following field can be returned:

Field | Type | Description
--- | --- | ---
`DynamicBlocks.audience_id` | [ID] | An array of of Audience IDs for this block. Available in the `magento/audiences` module only.

## Syntax

```graphql
dynamicBlocks(
    input: DynamicBlocksFilterInput
    pageSize: Int
    currentPage: Int
    ): DynamicBlocks!
```

## Reference

The [`dynamic_blocks`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-dynamicBlocks) reference provides detailed information about the types and fields defined in this query.

## Example usage

The following query returns all dynamic blocks of type `SPECIFIED`. The returned item is a dynamic block containing only text. The second item contains a PNG file.

**Request:**

```graphql
{
  dynamicBlocks(input:
  {
    type: SPECIFIED
  })
  {
    items {
      uid
      content {
        html
      }
    }
    page_info {
      current_page
      page_size
      total_pages
    }
    total_count
  }
}
```

**Response:**

```json
{
  "data": {
    "dynamicBlocks": {
      "items": [
        {
          "uid": "MQ==",
          "content": {
            "html": "<h2><strong>SAVE 20%</strong></h2>\r\n<p>(some restrictions apply)</p>\r\n<p>&nbsp;</p>"
          }
        },
        {
          "uid": "Mg==",
          "content": {
            "html": "<p><img src=\"{{media url=&quot;wysiwyg/save20.png&quot;}}\" alt=\"save 20% red\"></p>"
          }
        }
      ],
      "page_info": {
        "current_page": 1,
        "page_size": 20,
        "total_pages": 1
      },
      "total_count": 2
    }
  }
}
```

**cmsPage query response:**

The following code illustrates the definition of the dynamic block with the `uid` of `MQ==`, as returned by the [`cmsPage` query](../../store/queries/cms-page.md). The response has been reformatted for readability.

```html
<div class=\"widget block block-banners\"
  data-bind=\"scope: 'banner'\"
  data-banner-id=\"833e4819d6c46ab41e9910f17dc04f72329cb84f1b0dc3aa76d43bcb11d605a6\"
  data-types=\"\"
  data-display-mode=\"fixed\"
  data-ids=\"1\"
  data-rotate=\"\"
  data-store-id=\"1\"
  data-uids=\"MQ==\">\n

  <ul class=\"banner-items\"
    data-bind=\"afterRender: registerBanner\">\n

    <!-- ko foreach: getItems833e4819d6c46ab41e9910f17dc04f72329cb84f1b0dc3aa76d43bcb11d605a6() -->\n

    <li class=\"banner-item\"
      data-bind=\"attr: {'data-banner-id': $data.bannerId}\">\n

      <div class=\"banner-item-content\" data-bind=\"bindHtml: $data.html\"></div>\n
    </li>\n

    <!-- /ko -->\n
  </ul>\n
</div>
```
