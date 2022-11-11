---
title: CreditMemoItemInterface attributes and implementations
---

`CreditMemoItemInterface` provides details about items in a customer's order history that were refunded. It has the following implementations:

*  [`BundleCreditMemoItem`](#BundleCreditMemoItem)
*  [`CreditMemoItem`](#CreditMemoItem)
*  [`DownloadableCreditMemoItem`](#DownloadableCreditMemoItem)
*  [`GiftCardCreditMemoItem`](#GiftCardCreditMemoItem)

## Attributes

The `CreditMemoItemInterface` describes a specific credit memo.

import CreditMemoItemInterface from '/src/pages/_includes/graphql/credit-memo-item-interface.md'

<CreditMemoItemInterface />

## Implementations

### BundleCreditMemoItem attributes {#BundleCreditMemoItem}

The `BundleCreditMemoItem` object defines the following attribute:

Attribute | Data type | Description
--- | --- | ---
`bundle_options` | [[ItemSelectedBundleOption]](#ItemSelectedBundleOption) | A list of bundle options that are assigned to the bundle product

import ItemSelectedBundleOption from '/src/pages/_includes/graphql/item-selected-bundle-option.md'

<ItemSelectedBundleOption />

### CreditMemoItem attributes {#CreditMemoItem}

The `CreditMemoItem` object does not introduce any additional attributes to `CreditMemoItemInterface`.

### DownloadableCreditMemoItem attributes {#DownloadableCreditMemoItem}

The `DownloadableCreditMemoItem` object defines the following attribute:

Attribute | Data type | Description
--- | --- | ---
`downloadable_links` | [[DownloadableItemsLinks]](#DownloadableItemsLinks) | A list of downloadable links that were refunded from the downloadable product

import DownloadableItemsLinks from '/src/pages/_includes/graphql/downloadable-items-links.md'

<DownloadableItemsLinks />

### GiftCardCreditMemoItem attributes {#GiftCardCreditMemoItem}

The `GiftCardCreditMemoItem` object defines the following attribute:

Attribute | Data type | Description
--- | --- | ---
`gift_card` | [GiftCardItem](#GiftCardItem) | Selected gift card properties for an order item

import GiftCardItem from '/src/pages/_includes/graphql/gift-card-item.md'

<GiftCardItem />

## Example usage

The following query returns items that were refunded in order ID `000000005`. The `BundleOrderItem` and `DownloadableOrderItem` fragments can contain item-specific information, but the only refunded item is a configurable product.

**Request:**

```graphql
{
  customer {
    firstname
    lastname
    email
    orders(
      filter: {
        number: {
          match: "000000005"
        }
      }) {
      items {
        id
        credit_memos {
          id
          items {
            id
            product_sku
            product_name
            order_item {
              product_type
            }
            quantity_refunded
            ... on BundleCreditMemoItem {
              bundle_options {
                id
                values {
                  id
                  product_name
                  product_sku
                  quantity
                  price {
                    value
                    currency
                  }
                }
              }
            }
            ... on DownloadableCreditMemoItem {
              downloadable_links {
                uid
                title
              }
            }
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
    "customer": {
      "firstname": "Roni",
      "lastname": "Costello",
      "email": "roni_cost@example.com",
      "orders": {
        "items": [
          {
            "id": "NQ==",
            "credit_memos": [
              {
                "id": "Mg==",
                "items": [
                  {
                    "id": "Mg==",
                    "product_sku": "WS12-XS-Orange",
                    "product_name": "Radiant Tee",
                    "order_item": {
                      "product_type": "configurable"
                    },
                    "quantity_refunded": 1
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  }
}
```
