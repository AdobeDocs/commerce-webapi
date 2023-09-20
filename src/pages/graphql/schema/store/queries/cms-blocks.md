---
title: cmsBlocks query
---

# cmsBlocks query

The `cmsBlocks` query returns information about blocks that were developed with the Adobe Commerce or Magento Open Source Content Management System (CMS).

## Syntax

Return the contents of one or more CMS blocks:

`cmsBlocks(identifiers: [String]): CmsBlocks`

## Reference

The [`cmsBlocks`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-cmsBlocks) reference provides detailed information about the types and fields defined in this query.

## Example usage

The following query returns information about the `login-data` block:

**Request:**

```graphql
{
  cmsBlocks(identifiers: "login-data") {
    items {
      identifier
      title
      content
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "cmsBlocks": {
      "items": [
        {
          "identifier": "login-data",
          "title": "Login Info Block",
          "content": "<div class=\"message info\" style=\"margin-top: 50px;\">\n    <p><strong>Try Demo Customer Access</strong></p>\n    <p><span style=\"display:inline-block; width: 80px; padding-right: 10px;\">Email:</span>roni_cost@example.com</p>\n    <p><span style=\"display:inline-block; width: 80px; padding-right: 10px;\">Password:</span>roni_cost3@example.com</p>\n</div>"
        }
      ]
    }
  }
}
```

<InlineAlert variant="info" slots="text" />

Note that the `content` field may contain HTML markup and CSS styles. Hidden and system elements will be included in the response.

## Errors

Error | Description
--- | ---
`The CMS block with the "XXXX" ID doesn't exist` | The specified CMS block ID is invalid.
`"identifiers" of CMS blocks should be specified"` | The `identifiers` array parameter is required for identifying the CMS blocks.
