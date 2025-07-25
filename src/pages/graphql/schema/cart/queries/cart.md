---
title: cart query
---

# cart query

Use the `cart` query to retrieve information about a particular cart.

Cart functionality is defined in the `Quote` module. A Quote represents the contents of a customer's shopping cart. It is responsible for performing tasks such as:

*  Tracking each item in the cart, including the quantity and base cost
*  Determining estimated shipping costs
*  Calculating subtotals, computing additional costs, applying coupons, and determining the payment method

## Syntax

`{cart(cart_id: String!) {Cart}}`

## Reference

The [`cart`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-cart) reference provides detailed information about the types and fields defined in this query.

## Sample queries

The [Commerce API playground](https://experienceleague.adobe.com/developer/commerce/storefront/playgrounds/commerce-services/) provides a sample `cart` query that you can run against a live instance of Adobe Commerce with Luma sample data.

You can convert the hardcoded `cart_id` values in the following sample queries to a [variable](../../../usage/index.md#query-variables) and run them in the API playground. Note that the responses may vary, depending on the configuration of the Commerce instance.

### Cart ready for checkout

The following query shows the status of a cart that is ready to be converted into an order.

**Request:**

```graphql
{
  cart(cart_id: "CYmiiQRjPVc2gJUc5r7IsBmwegVIFO43") {
    email
    billing_address {
      city
      country {
        code
        label
      }
      firstname
      lastname
      postcode
      region {
        code
        label
      }
      street
      telephone
    }
    shipping_addresses {
      firstname
      lastname
      street
      city
      region {
        code
        label
      }
      country {
        code
        label
      }
      telephone
      available_shipping_methods {
        amount {
          currency
          value
        }
        available
        carrier_code
        carrier_title
        error_message
        method_code
        method_title
        price_excl_tax {
          value
          currency
        }
        price_incl_tax {
          value
          currency
        }
      }
      selected_shipping_method {
        amount {
          value
          currency
        }
        carrier_code
        carrier_title
        method_code
        method_title
      }
    }
    itemsV2 {
      total_count
      items {
        id
        product {
          name
          sku
        }
        quantity
      }
      page_info {
        page_size
        current_page
        total_pages
      }
    }      
    available_payment_methods {
      code
      title
    }
    selected_payment_method {
      code
      title
    }
    applied_coupons {
      code
    }
    prices {
      grand_total {
        value
        currency
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "cart": {
      "email": "roni_cost@example.com",
      "billing_address": {
        "city": "Calder",
        "country": {
          "code": "US",
          "label": "US"
        },
        "firstname": "Veronica",
        "lastname": "Costello",
        "postcode": "49628-7978",
        "region": {
          "code": "MI",
          "label": "Michigan"
        },
        "street": [
          "6146 Honey Bluff Parkway"
        ],
        "telephone": "(555) 229-3326"
      },
      "shipping_addresses": [
        {
          "firstname": "Veronica",
          "lastname": "Costello",
          "street": [
            "6146 Honey Bluff Parkway"
          ],
          "city": "Calder",
          "region": {
            "code": "MI",
            "label": "Michigan"
          },
          "country": {
            "code": "US",
            "label": "US"
          },
          "telephone": "(555) 229-3326",
          "available_shipping_methods": [
            {
              "amount": {
                "currency": "USD",
                "value": 10
              },
              "available": true,
              "carrier_code": "tablerate",
              "carrier_title": "Best Way",
              "error_message": "",
              "method_code": "bestway",
              "method_title": "Table Rate",
              "price_excl_tax": {
                "value": 10,
                "currency": "USD"
              },
              "price_incl_tax": {
                "value": 10,
                "currency": "USD"
              }
            },
            {
              "amount": {
                "currency": "USD",
                "value": 15
              },
              "available": true,
              "carrier_code": "flatrate",
              "carrier_title": "Flat Rate",
              "error_message": "",
              "method_code": "flatrate",
              "method_title": "Fixed",
              "price_excl_tax": {
                "value": 15,
                "currency": "USD"
              },
              "price_incl_tax": {
                "value": 15,
                "currency": "USD"
              }
            }
          ],
          "selected_shipping_method": {
            "amount": {
              "value": 10,
              "currency": "USD"
            },
            "carrier_code": "tablerate",
            "carrier_title": "Best Way",
            "method_code": "bestway",
            "method_title": "Table Rate"
          }
        }
      ],
      "itemsV2": {
        "total_count": 2,
        "items": [
          {
            "uid": "Mg==",
            "product": {
              "name": "Strive Shoulder Pack",
              "sku": "24-MB04"
            },
            "quantity": 2
          },
          {
            "uid": "17",
            "product": {
              "name": "Savvy Shoulder Tote",
              "sku": "24-WB05"
            },
            "quantity": 1
          }
        ],
        "page_info": {
          "page_size": 20,
          "current_page": 1,
          "total_pages": 1
        }
      },
      "available_payment_methods": [
        {
          "code": "braintree_cc_vault",
          "title": "Stored Cards (Braintree)"
        },
        {
          "code": "braintree",
          "title": "Credit Card (Braintree)"
        },
        {
          "code": "checkmo",
          "title": "Check / Money order"
        }
      ],
      "selected_payment_method": {
        "code": "checkmo",
        "title": "Check / Money order"
      },
      "applied_coupons": null,
      "prices": {
        "grand_total": {
          "value": 105.26,
          "currency": "USD"
        }
      }
    }
  }
}
```

### Cart discounts

In this query, the **Buy 3 tee shirts and get the 4th free** cart price rule from the sample data is active. This rule was modified slightly to add the label `3T1free`.  (If a cart price rule does not have a label, the application returns a default label of `Discount`.) A custom rule in which the customer saves 10% on the order by applying a discount code is also in effect.

The `3T1free` rule is applied first, and the application returns the price of a single shirt, $29, as the discount. The application then applies a 10% discount to the remaining total of the products in the cart.

If other promotions or price adjustments are applied to the cart through either store credit or gift cards, these are reflected under the `discounts` object with the appropriate label.

**Request:**

```graphql
{
  cart(cart_id: "v7jYJUjvPeHbdMJRcOfZIeQhs2Xc2ZKT") {
    email
    itemsV2 {
      total_count
      items {
        uid
        prices {
          total_item_discount {
            value
          }
          price {
            value
          }
          discounts {
            label
            amount {
              value
            }
          }
        }
        product {
          name
          sku
        }
        quantity
      },
      page_info {
          page_size
          current_page
          total_pages
      }
    }
    applied_coupons {
      code
    }
    prices {
      discounts {
        amount {
          value
        }
        applied_to
        label
      }
      grand_total {
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
    "cart": {
      "email": "roni_cost@example.com",
      "itemsV2": {
        "total_count": 1,
        "items": [
          {
            "uid": "MjY=",
            "prices": {
              "total_item_discount": {
                "value": 37.7
              },
              "price": {
                "value": 29
              },
              "discounts": [
                {
                  "label": "Discount (3T1free, 10% Off for New Customers)",
                  "amount": {
                    "value": 37.7
                  }
                },
                {
                  "label": "Gift Card",
                  "amount": {
                    "value": 0.1
                  }
                },
                {
                  "label": "Store Credit",
                  "amount": {
                    "value": 0.1
                  }
                }
              ]
            },
            "product": {
              "name": "Elisa EverCool&trade; Tee",
              "sku": "WS06"
            },
            "quantity": 4
          }
        ],
        "page_info": {
          "page_size": 20,
          "current_page": 1,
          "total_pages": 1
        }
      },
      "applied_coupons": [
        {
          "code": "NEW"
        }
      ],
      "prices": {
        "discounts": [
          {
            "amount": {
              "value": 29
            },
            "applied_to": "ITEM",
            "label": "3T1free"
          },
          {
            "amount": {
              "value": 8.7
            },
            "applied_to": "ITEM",
            "label": "10% Off for New Customers"
          }
        ],
        "grand_total": {
          "value": 84.76
        }
      }
    }
  }
}
```

### Fixed product tax example

The following query shows how to retrieve fixed product tax (FPT) information for items in a cart. In this example, the cart contains a product that has a base price of $100 and an associated FPT of $20 labeled as "fpt1".

**Request:**

```graphql
{
  cart(cart_id: "YOUR_CART_ID") {
    id
    items {
      uid
      quantity
      product {
        uid
        sku
        name
        __typename
      }
      prices {
        fixed_product_taxes {
          amount {
            value
            currency
            __typename
          }
          label
          __typename
        }
        __typename
      }
      __typename
    }
    shipping_addresses {
      selected_shipping_method {
        amount {
          currency
          value
          __typename
        }
        __typename
      }
      street
      __typename
    }
    prices {
      applied_taxes {
        amount {
          currency
          value
          __typename
        }
        __typename
      }
      discounts {
        amount {
          currency
          value
          __typename
        }
        label
        __typename
      }
      grand_total {
        currency
        value
        __typename
      }
      subtotal_excluding_tax {
        currency
        value
        __typename
      }
      subtotal_including_tax {
        currency
        value
        __typename
      }
      gift_options {
        printed_card {
          value
          currency
          __typename
        }
        __typename
      }
      __typename
    }
    applied_gift_cards {
      code
      applied_balance {
        value
        currency
        __typename
      }
      __typename
    }
    __typename
  }
}
```

**Response:**

```json
{
    "data": {
        "cart": {
            "id": "xxxxxxxxxxxxxxxxxxxxxxxxx",
            "items": [
                {
                    "uid": "xxxx",
                    "quantity": 1,
                    "product": {
                        "uid": "xxxx",
                        "sku": "simple1",
                        "name": "simple1",
                        "__typename": "SimpleProduct"
                    },
                    "prices": {
                        "fixed_product_taxes": [
                            {
                                "amount": {
                                    "value": 20,
                                    "currency": "USD",
                                    "__typename": "Money"
                                },
                                "label": "fpt1",
                                "__typename": "FixedProductTax"
                            }
                        ],
                        "__typename": "CartItemPrices"
                    },
                    "__typename": "SimpleCartItem"
                }
            ],
            "shipping_addresses": [],
            "prices": {
                "applied_taxes": [],
                "discounts": null,
                "grand_total": {
                    "currency": "USD",
                    "value": 125,
                    "__typename": "Money"
                },
                "subtotal_excluding_tax": {
                    "currency": "USD",
                    "value": 100,
                    "__typename": "Money"
                },
                "subtotal_including_tax": {
                    "currency": "USD",
                    "value": 120,
                    "__typename": "Money"
                },
                "gift_options": {
                    "printed_card": {
                        "value": 0,
                        "currency": "USD",
                        "__typename": "Money"
                    },
                    "__typename": "GiftOptionsPrices"
                },
                "__typename": "CartPrices"
            },
            "applied_gift_cards": [],
            "__typename": "Cart"
        }
    }
}
```

Note that fixed product tax information appears under `cart.items.prices.fixed_product_taxes` rather than in the `applied_taxes` section. The FPT amount is included in the `subtotal_including_tax` and `grand_total` values.

For more details about cart item prices and FPT fields in the schema, see the [CartItemPrices](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-CartItemPrices) reference.

### Tier price example

In the following example, tier prices has been established for product `24-UG01` and `24-UG05`, as shown in the following table:

Product | Quantity | Fixed/Discount | Amount
--- | --- | --- | --- |
24-UG01 | 5 | Discount | 5%
24-UG01 | 10 | Discount | 10%
24-UG01 | 15 | Discount | 15%
24-UG05 | 5 | Fixed | $16
24-UG05 | 10 | Fixed | $11

The cart in the example contains 12 units of `24-UG05` and 8 units of `24-UG-01`, so the price of `24-UG05` is $11, and the price of `24-UG01` is $18.05 (5% off).

**Request:**

```graphql
query {
  cart(cart_id: "v7jYJUjvPeHbdMJRcOfZIeQhs2Xc2ZKT"){
    itemsV2 {
      total_count
      items {
        uid
        quantity
        product {
          name
          sku
          price_tiers {
            quantity
            final_price {
              value
            }
            discount {
              amount_off
              percent_off
            }
          }
        }
        prices{
          price{
            value
          }
        }
      }
      page_info {
        page_size
        current_page
        total_pages
      }
    }
    prices {
      discounts {
        label
        applied_to
        amount {
          value
        }
      }
      subtotal_excluding_tax {
        value
      }
      applied_taxes {
        label
        amount {
          value
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
    "cart": {
      "itemsV2": {
        "total_count": 2,
        "items": [
          {
            "uid": "NjU=",
            "quantity": 12,
            "product": {
              "name": "Go-Get'r Pushup Grips",
              "sku": "24-UG05",
              "price_tiers": [
                {
                  "quantity": 5,
                  "final_price": {
                    "value": 16
                  },
                  "discount": {
                    "amount_off": 3,
                    "percent_off": 15.79
                  }
                },
                {
                  "quantity": 10,
                  "final_price": {
                    "value": 11
                  },
                  "discount": {
                    "amount_off": 8,
                    "percent_off": 42.11
                  }
                }
              ]
            },
            "prices": {
              "price": {
                "value": 11
              }
            }
          },
          {
            "uid": "NjY=",
            "quantity": 8,
            "product": {
              "name": "Quest Lumaflex&trade; Band",
              "sku": "24-UG01",
              "price_tiers": [
                {
                  "quantity": 5,
                  "final_price": {
                    "value": 18.05
                  },
                  "discount": {
                    "amount_off": 0.95,
                    "percent_off": 5
                  }
                },
                {
                  "quantity": 10,
                  "final_price": {
                    "value": 17.1
                  },
                  "discount": {
                    "amount_off": 1.9,
                    "percent_off": 10
                  }
                },
                {
                  "quantity": 15,
                  "final_price": {
                    "value": 16.15
                  },
                  "discount": {
                    "amount_off": 2.85,
                    "percent_off": 15
                  }
                }
              ]
            },
            "prices": {
              "price": {
                "value": 18.05
              }
            }
          }
        ],
        "page_info": {
          "page_size": 20,
          "current_page": 1,
          "total_pages": 1
        }
      },
      "prices": {
        "discounts": [
          {
            "label": "200",
            "applied_to": "ITEM",
            "amount": {
              "value": 55.28
            }
          }
        ],
        "subtotal_excluding_tax": {
          "value": 276.4
        },
        "applied_taxes": [
          {
            "label": "US-MI-*-Rate 1",
            "amount": {
              "value": 18.24
            }
          }
        ]
      }
    }
  }
}
```

## Input attributes

Attribute |  Data Type | Description
--- | --- | ---
`cart_id` | String! | A 32-character string that is created when you [create a cart](../mutations/create-empty-cart.md)

## Errors

Error | Description
--- | ---
`Could not find a cart with ID \"xxxxx\"` | The ID provided in the `cart_id` field is invalid or the cart does not exist for the customer.
`The cart isn't active` | The cart with the specified cart ID is unavailable, because the items have been purchased and the cart ID becomes inactive.
`Field cart.cart_id of required type String! was not provided` | The value specified in the `cart.cart_id` argument is empty.

## Related topics

*  [createEmptyCart mutation](../mutations/create-empty-cart.md)
*  [addSimpleProductsToCart mutation](../mutations/add-simple-products.md)
*  [setShippingAddressesOnCart mutation](../mutations/set-shipping-address.md)
*  [setShippingMethodsOnCart mutation](../mutations/set-shipping-method.md)
*  [setBillingAddressOnCart mutation](../mutations/set-billing-address.md)
*  [setPaymentMethodOnCart mutation](../mutations/set-payment-method.md)
