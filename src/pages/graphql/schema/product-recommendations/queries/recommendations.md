---
title: recommendations query | GraphQL Developer Guide
edition: ee
description: Describes how to construct and use the Product Recommendations recommendations query.
---

# recommendations query

The `recommendations` query returns information about product recommendation blocks and product data.

## Syntax

```graphql
type Query {
    recommendations(
        currentSku: String,
        userPurchaseHistory: [PurchaseHistory],
        userViewHistory: [ViewHistory],
        cartSkus: [String],
        category: String,
        pageType: PageType
    ): Recommendations
}
```

## Required headers

Specify the following HTTP headers to run this query.

import Headers from '/src/pages/_includes/graphql/catalog-service/headers.md'

<Headers />

## Example usage

The following query returns product recommendations for a related SKU.

**Request:**

```graphql

```

**Response:**

```json

```

## Input fields

Field | Data type | Description
--- | --- | ---
`cartSKUs` | [String] | SKUs of the products in the cart.
`category` | String | The category currently being viewed.
`currentSKU` | String |  SKU of the product currently being viewed on the product detail page.
`pageType` | PageType | Type of page on which recommendations are requested.
`userPurchaseHistory` | [PurchaseHistory] | User purchase history with timestamp.
`userViewHistory` | [ViewHistory] | User view history with timestamp.

### PurchasedHistory

Field | Data type | Description
--- | --- | ---
`date` | DateTime | XXX
`items` | [String]! | XXX

### ViewHistory

Field | Data type | Description
--- | --- | ---
`date` | DateTime | XXX
`sku` | [String]! | CCC

## Output fields

import Output from '/src/pages/_includes/graphql/catalog-service/categories.md'

<Output />
