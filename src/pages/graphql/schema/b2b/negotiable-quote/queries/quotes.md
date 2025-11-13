---
title: negotiableQuotes query   
keywords:
  - B2B
---

import CommerceOnly from '/src/_includes/commerce-only.md'

<CommerceOnly />

# negotiableQuotes query

The `negotiableQuotes` query returns a list of negotiable quotes that can be viewed by the logged-in customer, including quotes created by the customer or by subordinates in the company hierarchy.

This query requires a valid [customer authentication token](../../../customer/mutations/generate-token.md).

## Syntax

```graphql
{
    negotiableQuotes(
        filter: NegotiableQuoteFilterInput,
        pageSize: Int = 20,
        currentPage: Int = 1
    ): NegotiableQuotesOutput
}
```

## Reference

The [`negotiableQuotes`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-negotiableQuotes) reference provides detailed information about the types and fields defined in this query.

## Example usage

### Find quotes that contain a specific string

The following example returns general information about the negotiable quotes containing the string `request` that are accessible to the company user. The results are sorted by negotiable quote name, listed in ascending order.

**Request:**

```graphql
query {
  negotiableQuotes(filter: { name:
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
  }
}
```

**Response:**

```json
{
  "data": {
    "negotiableQuotes": {
      "items": [
        {
          "uid": "BfYWqXwmUpL2Ra1igfrv6xyOMx89sFDu",
          "name": "Last request",
          "created_at": "2021-04-28 15:43:09",
          "status": "PENDING"
        },
        {
          "uid": "eywCZkG8avwW1eivuahc7oukY0ZFDC3H",
          "name": "Latest request",
          "created_at": "2021-04-26 16:35:48",
          "status": "OPEN"
        },
        {
          "uid": "xCA4wSZEHsb5QbFiKfoq5k1Dk8vIPBgb",
          "name": "April 22 request",
          "created_at": "2021-04-22 15:59:47",
          "status": "PENDING"
        },
        {
          "uid": "kw6mLEvl6vjjPNsjtJqwpamv5o0iT1bc",
          "name": "Discount request",
          "created_at": "2021-04-20 19:01:38",
          "status": "ORDERED"
        }
      ],
      "total_count": 4
    }
  }
}
```

### Retrieve attachments associated with comments on quotes

<Edition name="saas" />

The following example returns detailed information about all negotiable quotes that are accessible to the company user, including any attachments associated with comments on the quotes.

**Request:**

```graphql
{
  negotiableQuotes {
    total_count
    items {
      uid
      name
      status
      created_at
      updated_at
      comments {
        attachments {
          name
          url
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
    "negotiableQuotes": {
      "total_count": 2,
      "items": [
        {
          "uid": "SAIanv9ZcoVbQwAFRWq6XzQbU1jK1dUT",
          "name": "Test NQ",
          "status": "SUBMITTED",
          "created_at": "2025-09-09 16:59:10",
          "updated_at": "2025-09-09 16:59:37",
          "comments": [
            {
              "attachments": [
                {
                  "name": "test-document1.txt",
                  "url": "http://bucket1.s3mock:9000/bucket1/tenant1/negotiable_quotes_attachment/test-document1_32cb1fe50dab390be841461e.txt?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIOSFODNN7EXAMPLE%2F20250909%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250909T170138Z&X-Amz-SignedHeaders=host&X-Amz-Expires=6600&X-Amz-Signature=a4fa238e4f4f88d4819f0b80fe2699ec6374e81cd88e70fd281a7fc8fae232ec"
                }
              ]
            }
          ]
        },
        {
          "uid": "NYw9JKZW1BCQ8ZtsYyUKrGkGLlrJ34Kr",
          "name": "Test NQ",
          "status": "SUBMITTED",
          "created_at": "2025-09-09 16:54:28",
          "updated_at": "2025-09-09 16:57:58",
          "comments": [
            {
              "attachments": []
            }
          ]
        }
      ]
    }
  }
}
```
