---
title: addProductsToWishlist mutation
---

# addProductsToWishlist mutation

The `addProductsToWishlist` mutation adds one or more products to the specified wish list. This mutation supports all product types.

In Magento Open Source, customers can have only one wish list. In Adobe Commerce, customers can have multiple wish lists.

<InlineAlert variant="info" slots="text" />

In Magento Open Source, the [createCustomerV2 mutation](../../customer/mutations/create-v2.md) does not create a default wish list for the customer. To add items to the wish list for the first time, specify a `wishlistId` value of 0. The application creates the customer's default wish list and returns the wish list ID in the `id` attribute. (Customers created by any other means or in Adobe Commerce do not have this limitation.)

This mutation requires a valid [customer authentication token](../../customer/mutations/generate-token.md).

<InlineAlert variant="success" slots="text" />

To determine whether wish lists are enabled, specify the `magento_wishlist_general_is_enabled` attribute in the [`storeConfig` query](../../store/queries/store-config.md).

## Syntax

```graphql
`mutation {
  addProductsToWishlist(
    wishlistId: ID!,
    wishlistItems: [WishlistItemInput!]!
  ){
  AddProductsToWishlistOutput
  }
}
```

## Reference

The [`addProductsToWishlist`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-addProductsToWishlist) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example adds a simple product (`24-MB01`), a configurable product (`WJ01-M-Red`), and a bundle product (`24-WG080`) to the customer's wish list. The SKU `WG-09` is invalid, and error information is returned in the `user_errors` object.

To determine the value of the `wishlistId` attribute, run the `customer` query and check the value of `wishlist.id` in the response.

**Request:**

``` graphql
mutation {
  addProductsToWishlist(
    wishlistId: 4
    wishlistItems: [
      {
        sku: "24-MB01"
        quantity: 1
      }
      {
        sku: "WG-09"
        quantity: 1
        }
      {
        parent_sku: "WJ01"
        sku: "WJ01-M-Red"
        quantity: 1
      }
      {
        sku: "24-WG080"
        quantity: 1
        selected_options: [
          "YnVuZGxlLzEvMS8x"
          "YnVuZGxlLzIvNC8x"
          "YnVuZGxlLzMvNy8x"
          "YnVuZGxlLzQvOC8x"
        ]
      }
    ]
  ) {
    wishlist {
      id
      items_count
      items_v2 (currentPage: 1, pageSize: 8 ) {
        items {
          id
          quantity
          ... on BundleWishlistItem {
            bundle_options {
              values {
                id
                label
                quantity
              }
            }
          }
          product {
            uid
            name
            sku
            price_range {
              minimum_price {
                regular_price {
                  currency
                  value
                }
              }
              maximum_price {
                regular_price {
                  currency
                  value
                }
              }
            }
          }
        }
      }
    }
    user_errors {
      code
      message
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "addProductsToWishlist": {
      "wishlist": {
        "id": "4",
        "items_count": 3,
        "items_v2": {
          "items": [
            {
              "id": "20",
              "quantity": 1,
              "product": {
                "uid": "MQ==",
                "name": "Joust Duffle Bag",
                "sku": "24-MB01",
                "price_range": {
                  "minimum_price": {
                    "regular_price": {
                      "currency": "USD",
                      "value": 34
                    }
                  },
                  "maximum_price": {
                    "regular_price": {
                      "currency": "USD",
                      "value": 34
                    }
                  }
                }
              }
            },
            {
              "id": "21",
              "quantity": 1,
              "product": {
                "uid": "MTIyNg==",
                "name": "Stellar Solar Jacket",
                "sku": "WJ01",
                "price_range": {
                  "minimum_price": {
                    "regular_price": {
                      "currency": "USD",
                      "value": 75
                    }
                  },
                  "maximum_price": {
                    "regular_price": {
                      "currency": "USD",
                      "value": 75
                    }
                  }
                }
              }
            },
            {
              "id": "22",
              "quantity": 1,
              "bundle_options": [
                {
                  "values": [
                    {
                      "id": 1,
                      "label": "Sprite Stasis Ball 55 cm",
                      "quantity": 1
                    }
                  ]
                },
                {
                  "values": [
                    {
                      "id": 4,
                      "label": "Sprite Foam Yoga Brick",
                      "quantity": 1
                    }
                  ]
                },
                {
                  "values": [
                    {
                      "id": 7,
                      "label": "Sprite Yoga Strap 10 foot",
                      "quantity": 1
                    }
                  ]
                },
                {
                  "values": [
                    {
                      "id": 8,
                      "label": "Sprite Foam Roller",
                      "quantity": 1
                    }
                  ]
                }
              ],
              "product": {
                "uid": "NTI=",
                "name": "Sprite Yoga Companion Kit",
                "sku": "24-WG080",
                "price_range": {
                  "minimum_price": {
                    "regular_price": {
                      "currency": "USD",
                      "value": 61
                    }
                  },
                  "maximum_price": {
                    "regular_price": {
                      "currency": "USD",
                      "value": 77
                    }
                  }
                }
              }
            }
          ]
        }
      },
      "user_errors": [
        {
          "code": "PRODUCT_NOT_FOUND",
          "message": "Could not find a product with SKU \"WG-09\""
        }
      ]
    }
  }
}
```

## Errors

Error | Description
--- | ---
`The current user cannot perform operations on wishlist` | An unauthorized user (guest) tried to add an item to a wishlist, or an authorized user (customer) tried to add an item to a wishlist belonging to another customer.
`The wishlist was not found.` | The value provided in the  `wishlistId` field is invalid or does not exist for the customer.
