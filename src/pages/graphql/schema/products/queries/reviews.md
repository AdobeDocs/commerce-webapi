---
title: reviews query
description: The reviews query returns the approved reviews for a product specified by SKU. It is a standalone root query for the storefront compatibility layer.
---

# reviews query

<Fragment src="/includes/scp-query.md" />

The `reviews` query returns the approved reviews for the product specified by its SKU, along with pagination metadata.

Unlike the native `reviews` field on `ProductInterface`, which requires querying a product first, this is a standalone root query. It allows the storefront to retrieve product reviews directly by SKU without a preceding product lookup.

Use the [`createProductReview` mutation](../mutations/create-review.md) to add a product review, and the [`productReviewRatingsMetadata` query](product-review-ratings-metadata.md) to return the list of rating categories and possible values.

## Syntax

`reviews(sku: String!, pageSize: Int = 20, currentPage: Int = 1): ProductReviews`

## Input attributes

The `reviews` query accepts the following attributes.

Attribute | Data Type | Description
--- | --- | ---
`sku` | String! | The SKU of the product to return reviews for
`pageSize` | Int | The maximum number of results to return at once. The default value is 20
`currentPage` | Int | The page of results to return. The default value is 1

## Output attributes

The query returns a `ProductReviews` object.

Attribute | Data Type | Description
--- | --- | ---
`items` | [ProductReview] | An array of product reviews
`page_info` | SearchResultPageInfo | Metadata that describes the returned page of results

Each `ProductReview` object contains the following commonly requested fields. See the [`createProductReview` mutation](../mutations/create-review.md) for the full type.

Attribute | Data Type | Description
--- | --- | ---
`average_rating` | Float! | The average rating for the product review
`created_at` | String! | The date the review was created
`nickname` | String! | The customer's nickname
`ratings_breakdown` | [ProductReviewRating] | An array of ratings by rating category, such as quality, price, and value
`summary` | String! | The summary (title) of the review
`text` | String! | The review text

<InlineAlert variant="info" slots="text" />

Review text fields (`nickname`, `summary`, and `text`) are stored as untrusted plain text and are not sanitized on write. Clients must render these fields as text or apply context-appropriate output encoding to prevent cross-site scripting (XSS).

## Example usage

The following query returns the approved reviews for the product with the SKU `24-MB01`.

**Request:**

```graphql
query {
  reviews(sku: "24-MB01", pageSize: 20, currentPage: 1) {
    items {
      nickname
      summary
      text
      average_rating
      created_at
      ratings_breakdown {
        name
        value
      }
    }
    page_info {
      current_page
      page_size
      total_pages
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "reviews": {
      "items": [
        {
          "nickname": "Bailey",
          "summary": "Comfortable and durable",
          "text": "I use this bag every day and it has held up well.",
          "average_rating": 80,
          "created_at": "2026-09-17 12:12:00",
          "ratings_breakdown": [
            {
              "name": "Quality",
              "value": "4"
            },
            {
              "name": "Value",
              "value": "4"
            }
          ]
        }
      ],
      "page_info": {
        "current_page": 1,
        "page_size": 20,
        "total_pages": 1
      }
    }
  }
}
```
