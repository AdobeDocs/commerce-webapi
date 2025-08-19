---
title: customerSegments query
---

# customerSegments query

<InlineAlert variant="info" slots="text" />

This query is part of the [Storefront Compatibility Package](https://experienceleague.adobe.com/developer/commerce/storefront/setup/configuration/storefront-compatibility/v248/). It will be added to Adobe Commerce 2.4.9.

The `customerSegments` query provides encoded ID of Customer Segments assigned to the Logged-in Customer or Guest shopper.

To retrieve customer segments for a customer, we recommend you use customer tokens in the header of your GraphQL calls. However, in case of guest information, token should not be passed.

## Syntax

`{ customerSegments(cartId: String!) {[CustomerSegmentStorefront!] } }`

## Example usage

The following call returns encoded ID of customer group for logged-in customer or guest. Provide the customer's token in the header section of the query in case of logged-in customer.

**Request:**

```graphql
{
    customerSegments(cartId: "jkdldskfdjsdkdsljds==") {
        uid
    }
}
```

**Response:**

```json
{
  "data": {
    "customerSegments": [
      {
        "uid": "Nq=="
      }
    ]
  }
}
```
