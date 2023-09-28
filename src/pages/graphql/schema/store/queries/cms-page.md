---
title: cmsPage query
---

# cmsPage query

The `cmsPage` query returns information about content pages that were developed with the Adobe Commerce or Magento Open Source Content Management System (CMS).

## Syntax

Return the contents of a CMS page:

`cmsPage(identifier: String): CmsPage`

## Reference

The [`cmsPage`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-cmsPage) reference provides detailed information about the types and fields defined in this query.

## Example usage

You must include the CMS page identifier value to retrieve the content of a specific CMS page. The following query returns information about the "404 Not Found" CMS page:

**Request:**

```graphql
{
  cmsPage(identifier: "no-route") {
    identifier
    url_key
    title
    content
    content_heading
    page_layout
    meta_title
    meta_description
    meta_keywords
  }
}
```

**Response:**

```json
{
  "data": {
    "cmsPage": {
      "identifier": "no-route"
      "url_key": "no-route",
      "title": "404 Not Found",
      "content": "<dl>\r\n<dt>The page you requested was not found, and we have a fine guess why.</dt>\r\n<dd>\r\n<ul class=\"disc\">\r\n<li>If you typed the URL directly, please make sure the spelling is correct.</li>\r\n<li>If you clicked on a link to get here, the link is outdated.</li>\r\n</ul></dd>\r\n</dl>\r\n<dl>\r\n<dt>What can you do?</dt>\r\n<dd>Have no fear, help is near! There are many ways you can get back on track with the Store.</dd>\r\n<dd>\r\n<ul class=\"disc\">\r\n<li><a href=\"#\" onclick=\"history.go(-1); return false;\">Go back</a> to the previous page.</li>\r\n<li>Use the search bar at the top of the page to search for your products.</li>\r\n<li>Follow these links to get you back on track!<br /><a href=\"http://magento2.vagrant193/\">Store Home</a> <span class=\"separator\">|</span> <a href=\"http://magento2.vagrant193/customer/account/\">My Account</a></li></ul></dd></dl>\r\n",
      "content_heading": "Whoops, our bad...",
      "page_layout": "2columns-right",
      "meta_title": null,
      "meta_description": "Page description",
      "meta_keywords": "Page keywords"
    }
  }
}
```

<InlineAlert variant="info" slots="text" />

Note that the `content` field may contain HTML markup and CSS styles. Hidden and system elements may be included in the response.

## Errors

Error | Description
--- | ---
`The CMS page with the "XXXX" ID doesn't exist` | The specified CMS page ID is invalid.
`Page id/identifier should be specified"` | The `identifier` parameter is required for identifying the CMS page.

## Related topics

[cmsBlocks query](cms-blocks.md)
