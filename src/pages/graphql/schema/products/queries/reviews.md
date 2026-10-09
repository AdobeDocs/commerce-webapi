---
title: reviews query
description: The reviews query returns the approved reviews for a product specified by SKU. It is a standalone root query for the storefront compatibility layer.
---

# reviews query

<Fragment src="/includes/scp-query.md" />

The `reviews` query returns the approved reviews for the product specified by its SKU, along with pagination metadata.

Unlike the native `reviews` field on `ProductInterface`, which requires querying a product first, this is a standalone root query. It allows the storefront to retrieve product reviews directly by SKU without a preceding product lookup.

Use the [`createProductReview` mutation](../mutations/create-review.md) to add a product review, and the [`productReviewRatingsMetadata` query](product-review-ratings-metadata.md) to return the list of rating categories and possible values.

<InlineAlert variant="info" slots="text" />

Review text fields (`nickname`, `summary`, and `text`) are stored as untrusted plain text and are not sanitized on write. Clients must render these fields as text or apply context-appropriate output encoding to prevent cross-site scripting (XSS).

## Syntax

`reviews(sku: String!, pageSize: Int = 20, currentPage: Int = 1): ProductReviews`

[//]: # (## Reference)
[//]: # ()
[//]: # (The [`reviews`]&#40;/reference/graphql/saas/index.md#reviews&#41; reference provides detailed information about the types and fields defined in this query.)

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
