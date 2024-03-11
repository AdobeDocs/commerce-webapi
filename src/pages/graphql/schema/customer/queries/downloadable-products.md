---
title: customerDownloadableProducts query
---

# customerDownloadableProducts query

Use the `customerDownloadableProducts` query to retrieve the list of purchased downloadable products for the logged-in customer.

## Syntax

`{customerDownloadableProducts: {CustomerDownloadableProducts}}`

## Reference

The [`customerDownloadableProducts`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-customerDownloadableProducts) reference provides detailed information about the types and fields defined in this query.

## Example usage

The following example returns the list of purchased downloadable products for the logged-in customer.

**Request:**

```graphql
{
  customerDownloadableProducts {
    items {
      date
      download_url
      order_increment_id
      remaining_downloads
      status
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "customerDownloadableProducts": {
      "items": [
        {
          "date": "2019-03-04 20:48:32",
          "download_url": "https://<M2_INSTANCE>/downloadable/download/link/id/MC44NTcwMTEwMCAxNTUxNzMyNTEyMTExNTE%2C/",
          "order_increment_id": "000000004",
          "remaining_downloads": "Unlimited",
          "status": "pending"
        },
        {
          "date": "2019-03-04 20:48:32",
          "download_url": "https://<M2_INSTANCE>/downloadable/download/link/id/MC44NzM0OTkwMCAxNTUxNzMyNTEyMjEyNTA%2C/",
          "order_increment_id": "000000004",
          "remaining_downloads": "Unlimited",
          "status": "pending"
        }
      ]
    }
  }
}
```

## Errors

Error | Description
--- | ---
`The current customer isn't authorized.` | The current customer is not currently logged in, or the customer's token does not exist in the `oauth_token` table.
