---
title: Place a negotiable quote order
description: An overview of the REST calls needed to place items in a shopping cart, negotiate a quote, and reimburse credit
edition: ee
---

import * as Vars from '../../../data/vars.js';
import BetaNote from '/src/pages/_includes/graphql/notes/beta.md'

# Place a negotiable quote order initiated by seller

This topic describes how REST calls can be used to create negotiable quote in Draft state, add products to quote, update quote data such as name, provide discount.

<BetaNote />

## Prerequisites

-  You have [installed and enabled](https://experienceleague.adobe.com/docs/commerce-admin/b2b/install.html) <Vars.sitedatavarb2b/>.
-  You have [created a company](company-object.md).
-  You have an integration or [admin authorization token](https://developer.adobe.com/commerce/webapi/rest/tutorials/orders/order-admin-token.html) to make calls on behalf of seller


## Create a negotiable quote

The following example shows the API request workflow for a seller to complete the following tasks:
- Initiate a negotiable quote for a company buyer by creating an empty draft quote
- Update the draft quote to add items and modify quote name
- Apply a discount to the quote
- Send the quote to the buyer for review

### Initiate a negotiable quote

The seller initiates a negotiable quote.

Initiating a negotiable quote by seller places it in the `draft_by_admin` state.

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

Seller can now add products and optionally change negotiable quote name

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

The seller provides a 5% discount. The `negotiated_price_type` value of `1` indicates a percentage discount.

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

Prices must be recalculated before sending quote to buyer.

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

Now that the seller has updated the quote, it must be sent to the buyer. The buyer will then be able to either accept the offer and begin the checkout process, or request further negotiations.

This call places the quote in the `submitted_by_admin` state.

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
