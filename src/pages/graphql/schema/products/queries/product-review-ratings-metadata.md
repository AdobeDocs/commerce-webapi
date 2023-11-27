---
title: productReviewRatingsMetadata query
---

# productReviewRatingsMetadata query

The `productReviewRatingsMetadata` query returns the active ratings attributes and the values each rating can have. In Luma, these values are one star through five stars.

Use the [`createProductReview` mutation](../mutations/create-review.md) to add a product review.

## Syntax

`productReviewRatingsMetadata: ProductReviewRatingsMetadata!`

## Reference

The [`productReviewRatingsMetadata`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-productReviewRatingsMetadata) reference provides detailed information about the types and fields defined in this query.

## Example usage

The following query returns the metadata for all active ratings attributes. In this example, the default `Rating` attribute has been renamed to `Overall`, and the `Quality` and `Value` attributes have been enabled.

**Request:**

```graphql
query {
  productReviewRatingsMetadata {
    items {
      id
      name
      values {
        value_id
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
    "productReviewRatingsMetadata": {
      "items": [
        {
          "id": "NA==",
          "name": "Overall",
          "values": [
            {
              "value_id": "MTY=",
              "value": "1"
            },
            {
              "value_id": "MTc=",
              "value": "2"
            },
            {
              "value_id": "MTg=",
              "value": "3"
            },
            {
              "value_id": "MTk=",
              "value": "4"
            },
            {
              "value_id": "MjA=",
              "value": "5"
            }
          ]
        },
        {
          "id": "MQ==",
          "name": "Quality",
          "values": [
            {
              "value_id": "MQ==",
              "value": "1"
            },
            {
              "value_id": "Mg==",
              "value": "2"
            },
            {
              "value_id": "Mw==",
              "value": "3"
            },
            {
              "value_id": "NA==",
              "value": "4"
            },
            {
              "value_id": "NQ==",
              "value": "5"
            }
          ]
        },
        {
          "id": "Mg==",
          "name": "Value",
          "values": [
            {
              "value_id": "Ng==",
              "value": "1"
            },
            {
              "value_id": "Nw==",
              "value": "2"
            },
            {
              "value_id": "OA==",
              "value": "3"
            },
            {
              "value_id": "OQ==",
              "value": "4"
            },
            {
              "value_id": "MTA=",
              "value": "5"
            }
          ]
        }
      ]
    }
  }
}
```
