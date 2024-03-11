---
title: createProductReview mutation
---

# createProductReview mutation

The `createProductReview` mutation adds a review for the specified product. Use the [`productReviewRatingsMetadata` query](../queries/product-review-ratings-metadata.md) to return a list of rating categories and possible values.

## Syntax

`createProductReview(input: CreateProductReviewInput!): CreateProductReviewOutput!`

## Reference

The [`createProductReview`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-createProductReview) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

In the following example, Roni gives product `WH08` four stars overall, three stars for value, and four stars for quality.

**Request:**

```graphql
mutation {
  createProductReview(
    input: {
      sku: "WH08",
      nickname: "Roni",
      summary: "Great looking sweatshirt",
      text: "This sweatshirt looks and feels great. The zipper sometimes sticks a bit.",
      ratings: [
        {
          id: "NA==",
          value_id: "MTk="
        }, {
          id: "MQ==",
          value_id: "NA=="
        }, {
          id: "Mg==",
          value_id: "OA=="
        }
      ]
    }
) {
    review {
      nickname
      summary
      text
      average_rating
      ratings_breakdown {
        name
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
    "createProductReview": {
      "review": {
        "nickname": "Roni",
        "summary": "Great looking sweatshirt",
        "text": "This sweatshirt looks and feels great. The zipper sometimes sticks a bit.",
        "average_rating": 73.33,
        "ratings_breakdown": [
          {
            "name": "Quality",
            "value": "4"
          },
          {
            "name": "Value",
            "value": "3"
          },
          {
            "name": "Overall",
            "value": "4"
          }
        ]
      }
    }
  }
}
```

## Errors

Error | Description
--- | ---
`Field nickname of required type String! was not provided.` | The required attribute `nickname` is missing.
`Field sku of required type String! was not provided.` | The required attribute `sku` is missing.
`Field summary of required type String! was not provided.` | The required attribute `summary` is missing.
`Field text of required type String! was not provided.` | The required attribute `text` is missing.
`Field ratings of required type ProductReviewRatingInput! was not provided.` | The required attribute `ratings` is missing.
