---
title: negotiableQuotes query   
keywords:
  - B2B
---

import CommerceOnly from '/src/_includes/commerce-only.md'

<CommerceOnly />

# negotiableQuoteTemplates query

The `negotiableQuoteTemplates` query returns a list of negotiable quote templates that can be viewed by the logged-in customer, including quote templates created by the customer or by subordinates in the company hierarchy.

This query requires a valid [customer authentication token](../../../customer/mutations/generate-token.md).

## Syntax

```graphql
{
    negotiableQuoteTemplates(
        filter: NegotiableQuoteTemplateFilterInput,
        pageSize: Int = 20,
        currentPage: Int = 1
        sort: NegotiableQuoteTemplateSortInput
    ): NegotiableQuoteTemplatesOutput
}
```

## Example usage

### Find quote templates that contain a specific string

The following example returns general information about the negotiable quote templates containing the string `request` that are accessible to the company user. The results are sorted by negotiable quote name, listed in ascending order.

**Request:**

```graphql
query {
    negotiableQuoteTemplates(filter: { name:
    { match: "request" }
    })
    {
    items {
      uid
      name
      created_at
      status
    }
    total_count
    page_info {
        page_size
        current_page
        total_pages
    }
    sort_fields {
        default
        options {
            label
            value
        }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "negotiableQuoteTemplates": {
      "items": [
        {
          "uid": "MTU0",
          "name": "Last request Template",
          "created_at": "2021-04-28 15:43:09",
          "status": "Active"
        },
        {
          "uid": "MTUz",
          "name": "Latest request Template",
          "created_at": "2021-04-26 16:35:48",
          "status": "Active"
        },
        {
          "uid": "MTUy",
          "name": "April 22 request",
          "created_at": "2021-04-22 15:59:47",
          "status": "Active"
        },
        {
          "uid": "MTUx",
          "name": "Discount request",
          "created_at": "2021-04-20 19:01:38",
          "status": "Active"
        }
      ],
      "total_count": 4,
      "page_info": {
        "page_size": 20,
        "current_page": 1,
        "total_pages": 1
      },
      "sort_fields": {
        "default": "TEMPLATE_ID",
        "options": [
          {
            "label": "Last Shared",
            "value": "LAST_SHARED_AT"
          }
        ]
      }
    }
  }
}
```
