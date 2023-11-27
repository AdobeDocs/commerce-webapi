---
title: Place a negotiable quote order
description: An overview of the REST calls needed to place items in a shopping cart, negotiate a quote, and reimburse credit
edition: ee
keywords:
  - B2B
  - REST
---

import * as Vars from '../../../data/vars.js';
import BetaNote from '/src/_includes/graphql/notes/beta.md'

# Initiate a negotiable quote order by seller

This topic describes how a seller can use REST calls to create a negotiable quote for a specific buyer in Draft state, add products to the quote, update quote data such as name and expiration date, and apply a discount.

<BetaNote />

## Prerequisites

-  You have [installed and enabled](https://experienceleague.adobe.com/docs/commerce-admin/b2b/install.html) <Vars.sitedatavarb2b/>.
-  You have [created a company](company-object.md).
-  You have an integration or [admin authorization token](../tutorials/orders/order-admin-token.md) to make calls on behalf of seller.

## Create a negotiable quote

The following example shows the API request workflow for a seller to complete the following tasks:

- Initiate a negotiable quote for a company buyer by creating an empty draft quote
- Update the draft quote to add items and modify the quote name
- Apply a discount to the quote
- Send the quote to the buyer for review

### Initiate a negotiable quote

The seller initiates a negotiable quote by creating a quote for a company buyer.

The new quote is empty with a `draft_by_admin` system state. In the interface, the quote has a `Draft` status and is visible only to the seller.

**Endpoint:**

`POST <host>/rest/default/V1/negotiableQuote/draft`

**Headers:**

```txt
Content-Type application/json
Authorization Bearer <admin token>
```

<CodeBlock slots="heading, code" repeat="2" languages="JSON, JSON" />

#### Payload

```json
{
  "customerId": 5
}
```

#### Response

```json
`31` // An integer indicating the new quoteId
```

### Update negotiable quote

The seller can now update the quote to add products, and optionally change the negotiable quote name.

**Headers:**

```txt
Content-Type application/json
Authorization Bearer <admin token>
```

**Endpoint:**

`PUT /V1/negotiableQuote/31`

<CodeBlock slots="heading, code" repeat="2" languages="JSON, JSON" />

#### Payload

```json
{
  "quote": {
    "id": 31,
    "items": [
      {
        "sku": "24-UG02",
        "qty": 1
      },
      {
        "sku": "24-MB01",
        "qty": 100
      }
    ],
    "extension_attributes": {
      "negotiable_quote": {
        "quote_name": "5% for bags"
      }
    }
  }
}
```

#### Response

```json
// an empty array
```

### Adjust the negotiable quote

The seller updates the quote to provide a 5% discount that applies to the entire quote. The `negotiated_price_type` value of `1` indicates a percentage discount.

**Headers:**

```txt
Content-Type application/json
Authorization Bearer <admin token>
```

**Endpoint:**

`PUT /V1/negotiableQuote/31`

<CodeBlock slots="heading, code" repeat="2" languages="JSON, JSON" />

#### Payload

```json
{
  "quote": {
      "id": 31,
      "extension_attributes": {
        "negotiable_quote": {
         "negotiated_price_type": 1,
          "negotiated_price_value": 5
        }
      }
    }
}
```

#### Response

```json
// an empty array
```

### Recalculate prices

Before sending the quote to the buyer, the seller recalculates the prices to reflect the discount.

**Headers:**

```txt
Content-Type application/json
Authorization Bearer <admin token>
```

**Endpoint:**

`POST /V1/negotiableQuote/pricesUpdated`

<CodeBlock slots="heading, code" repeat="2" languages="JSON, JSON" />

#### Payload

```json
{
  "quoteIds": [31]
}
```

#### Response

```json
`true` // indicating the request was successful
```

### Send the negotiable quote to the buyer

After completing updates to the quote, the seller can submit the quote to the buyer for review, including any relevant comments. Then, the buyer can either accept the offer and begin the checkout process, or request further negotiations.

This call places the quote in the `submitted_by_admin` state. In the interface, the buyer quote status is `Updated`. The seller quote status is `Submitted`. At this point, the quote is locked and can be updated only by the buyer.

**Headers:**

```txt
Content-Type application/json
Authorization Bearer <admin token>
```

**Endpoint:**

`POST /V1/negotiableQuote/submitToCustomer`

<CodeBlock slots="heading, code" repeat="2" languages="JSON, JSON" />

#### Payload

```json
{
  "quoteId": 31,
  "comment": "We have provided a 5% discount to your order."
}
```

#### Response

```json
`true` // indicating the request was successful
```

## Related information

-  [Negotiable quote order](negotiable-order-workflow.md)
-  [Order processing tutorial](../tutorials/orders/index.md)
