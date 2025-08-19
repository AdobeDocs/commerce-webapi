---
title: GraphQL staging queries
description: Learn how to preview scheduled campaign information.
edition: paas
keywords:
  - GraphQL
---

# Staging queries

GraphQL allows you to use certain queries to return preview information for staged content. Staging, a Adobe Commerce feature, allows merchants to schedule a set of changes to the storefront that run for a prescribed time in the future. These changes, also known as a _campaign_, are defined within the Admin. Customers do not have access to staged content, and as a result, staging queries have requirements that do not apply to traditional queries and mutations.

[Content Staging](https://experienceleague.adobe.com/en/docs/commerce-admin/content-design/staging/content-staging) in the _Merchant User Guide_ describes how to create a campaign.

You can use the following queries to return staged preview information.

*  `categoryList`
*  `products`

<InlineAlert variant="info" slots="text" />

The `products` query does not support full text search in the context of staging, because staged content is not indexed. Therefore, omit the `search` input attribute in your staging `products` queries.

A staging query requires two specialized headers:

Header name | Description
--- | ---
`Authorization Bearer: <authorization_token>` | An admin token. Use a 2FA REST endpoint such as  `POST /V1/tfa/provider/google/authenticate` to generate this token.
`Preview-Version` | A timestamp (seconds since January 1, 1970) that is inside the range of dates of the campaign you are querying.

The application returns an authorization error if you specify an invalid token or do not include both headers. If the specified timestamp does not correspond to a date in a scheduled campaign, the query results reflect the current storefront settings.

The application also returns an error if you specify these headers with any other query or any mutation.

## Example campaign

The example staging queries in this section are based on a simple campaign that creates a custom category and catalog sales rule using the Luma sample data. By default, the custom category and sales rule are disabled but become enabled when the campaign takes effect.

The following steps describe how to create this example campaign.

1. Create a subcategory of **Sale** named **End of Year Sale**. Set the **Enable Category** field to **No**.
1. Add several products to the subcategory.
1. Schedule an update named **End of Year Sale Update** for the subcategory that takes effect at a later date. Configure the update so that the **Enable Category** field is set to **Yes**.
1. Create a catalog sales rule with the following properties:
   *  Set the **Active** switch to **No**.
   *  In the **Conditions** section, define the condition as **Category is <Subcategory_ID>**.
   *  In the **Actions** section, set the **Apply** field to **Apply a percentage of original** and the **Discount Amount** field to **25**.
1. Schedule an update for the catalog sales rule and assign it to the **End of Year Sale Update**. In this update, set the **Active** switch to **Yes**.

### Staging `products` query

The following query returns information about a product (`24-UG05`) in the **End of Year Sale** campaign. The `Preview-Version` header contains the timestamp for a date that is within the duration of the campaign. When you include the proper headers, the query returns prices with applied discounts. Without the headers, the query returns only default prices.

**Headers:**

```text
Authorization: Bearer hoyz7k697ubv5hcpq92yrtx39i7x10um
Preview-Version: 1576389600
```

**Request:**

```graphql
{
  products(filter: {sku: {eq: "24-UG05"}}) {
    items {
      name
      sku
      price_range {
        minimum_price {
          discount {
            percent_off
            amount_off
          }
          final_price {
            value
            currency
          }
          regular_price {
            value
          }
        }
      }
    }
  }
}
```

**Response with headers:**

```json
{
  "data": {
    "products": {
      "items": [
        {
          "name": "Go-Get'r Pushup Grips",
          "sku": "24-UG05",
          "price_range": {
            "minimum_price": {
              "discount": {
                "percent_off": 25,
                "amount_off": 4.75
              },
              "final_price": {
                "value": 14.25,
                "currency": "USD"
              },
              "regular_price": {
                "value": 19
              }
            }
          }
        }
      ]
    }
  }
}
```

**Response without headers:**

```json
{
  "data": {
    "products": {
      "items": [
        {
          "name": "Go-Get'r Pushup Grips",
          "sku": "24-UG05",
          "price_range": {
            "minimum_price": {
              "discount": {
                "percent_off": 0,
                "amount_off": 0
              },
              "final_price": {
                "value": 19,
                "currency": "USD"
              },
              "regular_price": {
                "value": 19
              }
            }
          }
        }
      ]
    }
  }
}
```

### Staging `categoryList` query

In this example campaign, the **End of Year Sale** subcategory and a catalog price rule are disabled when the campaign is not in effect. When you specify valid headers, the `categoryList`query returns full details about the custom category. Otherwise, the query returns an empty array.

**Headers:**

```text
Authorization: Bearer hoyz7k697ubv5hcpq92yrtx39i7x10um
Preview-Version: 1576389600
```

**Request:**

```graphql
{
  categoryList(filters: {ids: {eq: "43"}}) {
    name
    level
    products(
      sort: {
        price: ASC
      }
      pageSize: 20
      currentPage: 1
    ) {
      total_count
      items {
        name
        sku
        price_range {
          minimum_price {
            discount {
              amount_off
              percent_off
            }
            final_price {
              value
            }
            regular_price {
              value
            }
          }
        }
      }
    }
  }
}
```

**Response with headers:**

```json
{
  "data": {
    "categoryList": [
      {
        "name": "End of Year Sale",
        "level": 3,
        "products": {
          "total_count": 4,
          "items": [
            {
              "name": "Solo Power Circuit",
              "sku": "240-LV07",
              "price_range": {
                "minimum_price": {
                  "discount": {
                    "amount_off": 3.5,
                    "percent_off": 25
                  },
                  "final_price": {
                    "value": 10.5
                  },
                  "regular_price": {
                    "value": 14
                  }
                }
              }
            },
            {
              "name": "Quest Lumaflex&trade; Band",
              "sku": "24-UG01",
              "price_range": {
                "minimum_price": {
                  "discount": {
                    "amount_off": 4.75,
                    "percent_off": 25
                  },
                  "final_price": {
                    "value": 14.25
                  },
                  "regular_price": {
                    "value": 19
                  }
                }
              }
            },
            {
              "name": "Go-Get'r Pushup Grips",
              "sku": "24-UG05",
              "price_range": {
                "minimum_price": {
                  "discount": {
                    "amount_off": 4.75,
                    "percent_off": 25
                  },
                  "final_price": {
                    "value": 14.25
                  },
                  "regular_price": {
                    "value": 19
                  }
                }
              }
            },
            {
              "name": "Gabrielle Micro Sleeve Top",
              "sku": "WS02",
              "price_range": {
                "minimum_price": {
                  "discount": {
                    "amount_off": 7.00,
                    "percent_off": 25
                  },
                  "final_price": {
                    "value": 21
                  },
                  "regular_price": {
                    "value": 28
                  }
                }
              }
            }
          ]
        }
      }
    ]
  }
}
```

**Response without headers:**

```json
{
  "data": {
    "categoryList": []
  }
}
```
