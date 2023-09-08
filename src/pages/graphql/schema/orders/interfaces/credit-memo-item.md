---
title: CreditMemoItemInterface attributes and implementations
---

# CreditMemoItemInterface attributes and implementations

`CreditMemoItemInterface` provides details about items in a customer's order history that were refunded. It has the following implementations:

*  `BundleCreditMemoItem`
*  `CreditMemoItem`
*  `DownloadableCreditMemoItem`
*  `GiftCardCreditMemoItem`

## Reference

The [`CreditMemoItemInterface`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-CreditMemoItemInterface) reference provides detailed information about the types and fields defined in this interface.

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
