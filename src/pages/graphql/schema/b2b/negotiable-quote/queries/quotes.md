---
title: negotiableQuotes query
edition: b2b   
---

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

## Example usage

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

## Input attributes

The `negotiableQuotes` query can take the following arguments.

import NegotiableQuotesInput from '/src/pages/_includes/graphql/negotiable-quotes-input.md'

<NegotiableQuotesInput />

## Output attributes

The `NegotiableQuotesOutput` object contains the following attributes.

Attribute | Data Type | Description
--- | --- | ---
`items` | [[NegotiableQuote]!](#NegotiableQuote) | A list of negotiable quotes
`page_info` | SearchResultPageInfo! | Contains pagination metadata
`sort_fields` | [SortFields](../../../products/queries/products.md#sortfields-attributes) | Contains the default sort field and all available sort fields.
`total_count` | Int! | The number of negotiable quotes returned

### NegotiableQuote attributes {#NegotiableQuote}

import NegotiableQuote from '/src/pages/_includes/graphql/negotiable-quote.md'

<NegotiableQuote />
