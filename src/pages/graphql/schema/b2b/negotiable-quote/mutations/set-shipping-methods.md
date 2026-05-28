---
title: setNegotiableQuoteShippingMethods mutation
description: The setNegotiableQuoteShippingMethods mutation sets one or more delivery methods on a negotiable quote. By default, the following delivery methods are supp...
keywords:
  - B2B
---

| |
|:--|
| \<span style="display:inline-block; vertical-align:middle;"\>\<img src="../pages/_images/adobe-logo.svg" alt="Adobe Commerce feature" style="height:20px; margin-right:8px; vertical-align:middle;" /\>\</span\>\<span style="display:inline-block; vertical-align:middle;"\>\<strong\>Exclusive feature only in Adobe Commerce\</strong\> (\<a href="https://experienceleague.adobe.com/docs/commerce-admin/user-guides/home.html#product-editions"\>Learn more\</a\>)\</span\> |

# setNegotiableQuoteShippingMethods mutation

The `setNegotiableQuoteShippingMethods` mutation sets one or more delivery methods on a negotiable quote. By default, the following delivery methods are supported:

Label | Carrier code | Method code
--- | --- | ---
DHL | dhl | Varies
Federal Express | fedex | Varies
Flat Rate | flatrate | flatrate
Free Shipping | freeshipping | freeshipping
Best Way | tablerate | bestway
United Parcel Service | ups | Varies
United States Postal Service | usps | Varies

The negotiable quote must be in the UPDATED state to successfully set a shipping address.

This query requires a valid [customer authentication token](../../../customer/mutations/generate-token.md).

## Syntax

```graphql
setNegotiableQuoteShippingMethods(
    input: SetNegotiableQuoteShippingMethodsInput!
): SetNegotiableQuoteShippingMethodsOutput
```

## Reference

The `setNegotiableQuoteShippingMethods` reference provides detailed information about the types and fields defined in this mutation.

* [SaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-setNegotiableQuoteShippingMethods)

* [PaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-setNegotiableQuoteShippingMethods)

## Example usage

The following example sets the shipping method for a negotiable quote.

**Request:**

```graphql

mutation {
  setNegotiableQuoteShippingMethods(
    input: {
      quote_uid: "z13H2xRCqEiyVoPJmSmekvhOo4GdsVSp",
      shipping_methods: [
        {
          carrier_code: "tablerate"
          method_code: "bestway"
        }
      ]
    }
  ) {
    quote {
      uid
      shipping_addresses {
        selected_shipping_method {
          carrier_code
          carrier_title
          method_code
          method_title
          amount {
            value
            currency
          }
        }
      }
    }
  }
}

```

**Response:**

```json
{
  "data": {
    "setNegotiableQuoteShippingMethods": {
      "quote": {
        "uid": "prFSdZyHOpMXeiJ32XlBzd8e1Mte9loS",
        "shipping_addresses": [
          {
            "selected_shipping_method": {
              "carrier_code": "tablerate",
              "carrier_title": "Best Way",
              "method_code": "bestway",
              "method_title": "Table Rate",
              "amount": {
                "value": 29.95,
                "currency": "USD"
              }
            }
          }
        ]
      }
    }
  }
}
```

