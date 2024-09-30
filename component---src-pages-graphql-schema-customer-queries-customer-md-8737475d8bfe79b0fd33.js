"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[4379],{4477:function(n,e,t){t.r(e),t.d(e,{_frontmatter:function(){return l},default:function(){return c}});var a=t(58168),r=t(80045),o=(t(88763),t(15680)),s=t(83407),u=t(89316);const d=["components"],l={},m={_frontmatter:l},i=s.A;function c(n){let{components:e}=n,t=(0,r.A)(n,d);return(0,o.mdx)(i,(0,a.A)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"customer-query"},"customer query"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"customer")," query returns information about the logged-in customer, store credit history and customer's wishlist."),(0,o.mdx)("p",null,"To retrieve information about a customer, we recommend you use customer tokens in the header of your GraphQL calls. However, you also can use ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/get-started/authentication/gs-authentication-session"},"session authentication"),"."),(0,o.mdx)("h2",{id:"syntax"},"Syntax"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"{customer: {Customer}}")),(0,o.mdx)("h2",{id:"reference"},"Reference"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-customer"},(0,o.mdx)("inlineCode",{parentName:"a"},"customer"))," reference provides detailed information about the types and fields defined in this query."),(0,o.mdx)("h2",{id:"example-usage"},"Example usage"),(0,o.mdx)("h3",{id:"retrieve-basic-information-about-the-logged-in-customer"},"Retrieve basic information about the logged-in customer"),(0,o.mdx)("p",null,"The following call returns information about the logged-in customer. Provide the customer's token in the header section of the query."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Request:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},"{\n  customer {\n    firstname\n    lastname\n    suffix\n    email\n    addresses {\n      firstname\n      lastname\n      street\n      city\n      region {\n        region_code\n        region\n      }\n      postcode\n      country_code\n      telephone\n    }\n  }\n}\n")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Response:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "customer": {\n      "firstname": "John",\n      "lastname": "Doe",\n      "suffix": null,\n      "email": "jdoe@example.com",\n      "addresses": [\n       {\n         "firstname": "John",\n         "lastname": "Doe",\n         "street": [\n           "123 Elm Street"\n         ],\n         "city": "Anytown",\n         "region": {\n           "region_code": "MI",\n           "region": "Michigan"\n         },\n         "postcode": "78758",\n         "country_code": "US",\n         "telephone": "512 555-1212"\n        }\n      ]\n    }\n  }\n}\n')),(0,o.mdx)("h3",{id:"retrieve-custom-attributes-metadata-from-a-customer"},"Retrieve custom attributes metadata from a customer"),(0,o.mdx)(u.A,{mdxType:"CustomAttributeCustomer"}),(0,o.mdx)("h3",{id:"retrieve-custom-attributes-metadata-from-a-customer-address"},"Retrieve custom attributes metadata from a customer address"),(0,o.mdx)("p",null,"The following call returns the customer address custom attributes for the logged-in customer. Provide the customer's token in the header section of the query."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Request:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},"{\n  customer {\n    email\n    addresses {\n      city\n      custom_attributesV2 {\n        code\n        ... on AttributeValue {\n            value\n        }\n        ... on AttributeSelectedOptions {\n          selected_options {\n            label\n            value\n          }\n        }\n      }\n    }\n  }\n}\n")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Response:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "customer": {\n      "email": "jdoe@example.com",\n      "addresses": [\n        {\n          "city": "Marseille",\n          "custom_attributesV2": [\n            {\n              "code": "neighbourhood",\n              "value": "St Barnabé"\n            },\n            {\n              "code": "services",\n              "selected_options": [\n                {\n                  "label": "hospital",\n                  "value": "507"\n                },\n                {\n                  "label": "police",\n                  "value": "508"\n                }\n              ]\n            }\n          ]\n        }\n      ]\n    }\n  }\n}\n')),(0,o.mdx)("h3",{id:"retrieve-custom-attributes-metadata-filtered-by-code"},"Retrieve custom attributes metadata filtered by ",(0,o.mdx)("inlineCode",{parentName:"h3"},"code")),(0,o.mdx)("p",null,"The following call returns the customer and customer address custom attributes for the logged-in customer filtered by ",(0,o.mdx)("inlineCode",{parentName:"p"},"code"),". Provide the customer's token in the header section of the query."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Request:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},'{\n  customer {\n    email\n    custom_attributes(attributeCodes: ["studies"]) {\n      code\n      ... on AttributeValue {\n        value\n      }\n      ... on AttributeSelectedOptions {\n        selected_options {\n          label\n          value\n        }\n      }\n    }\n    addresses {\n      city\n      custom_attributesV2(attributeCodes: ["services"]) {\n        code\n        ... on AttributeValue {\n            value\n        }\n        ... on AttributeSelectedOptions {\n          selected_options {\n            label\n            value\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Response:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "customer": {\n      "email": "jdoe@example.com",\n      "custom_attributes": [\n        {\n          "code": "studies",\n          "selected_options": [\n            {\n              "label": "BSc",\n              "value": "501"\n            },\n            {\n              "label": "MBA",\n              "value": "502"\n            }\n          ]\n        }\n      ],\n      "addresses": [\n        {\n          "city": "Marseille",\n          "custom_attributesV2": [\n            {\n              "code": "services",\n              "selected_options": [\n                {\n                  "label": "hospital",\n                  "value": "507"\n                },\n                {\n                  "label": "police",\n                  "value": "508"\n                }\n              ]\n            }\n          ]\n        }\n      ]\n    }\n  }\n}\n')),(0,o.mdx)("h3",{id:"retrieve-a-summary-of-the-customers-order-history"},"Retrieve a summary of the customer's order history"),(0,o.mdx)("p",null,"The following example returns a summary of the logged-in customer's previous orders."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Request:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},"query {\n  customer {\n    orders(\n      pageSize: 20\n    ) {\n      items {\n        id\n        order_date\n        total {\n          grand_total {\n            value\n            currency\n          }\n        }\n        status\n      }\n    }\n  }\n}\n")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Response:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "customer": {\n      "orders": {\n        "items": [\n          {\n            "id": "MQ==",\n            "order_date": "2020-03-18 17:25:20",\n            "total": {\n              "grand_total": {\n                "value": 36.39,\n                "currency": "USD"\n              }\n            },\n            "status": "Complete"\n          },\n          {\n            "id": "Mg==",\n            "order_date": "2020-03-18 17:25:20",\n            "total": {\n              "grand_total": {\n                "value": 39.64,\n                "currency": "USD"\n              }\n            },\n            "status": "Closed"\n          },\n          {\n            "id": "Mw==",\n            "order_date": "2020-03-21 22:41:38",\n            "total": {\n              "grand_total": {\n                "value": 205.68,\n                "currency": "USD"\n              }\n            },\n            "status": "Pending"\n          },\n          {\n            "id": "NA==",\n            "order_date": "2020-08-03 02:35:35",\n            "total": {\n              "grand_total": {\n                "value": 159.13,\n                "currency": "USD"\n              }\n            },\n            "status": "Complete"\n          },\n          {\n            "id": "NQ==",\n            "order_date": "2020-09-08 03:57:11",\n            "total": {\n              "grand_total": {\n                "value": 132.57,\n                "currency": "USD"\n              }\n            },\n            "status": "Complete"\n          }\n        ]\n      }\n    }\n  }\n}\n')),(0,o.mdx)("h3",{id:"retrieve-orders-based-on-scope-argument"},"Retrieve orders based on scope argument:"),(0,o.mdx)("p",null,"The following query returns all customer orders, across all store view codes. The value of GLOBAL in the scope field overrides the store view code specified in the Store header."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Request:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},"{\n    customer {\n        orders(\n            pageSize: 20,\n            scope: GLOBAL\n        ) {\n            items {\n                id\n                order_number\n                order_date\n                total {\n                    grand_total\n                    { value currency }\n                }\n                status\n            }\n        }\n    }\n}\n")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Response:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "data": {\n        "customer": {\n            "orders": {\n                "items": [\n                    {\n                        "id": "ODg=",\n                        "order_number": "48000000001",\n                        "order_date": "2022-07-27 18:01:38",\n                        "total": {\n                            "grand_total": {\n                                "value": 15,\n                                "currency": "USD"\n                            }\n                        },\n                        "status": "Pending"\n                    }\n                ]\n            }\n        }\n    }\n}\n')),(0,o.mdx)("h3",{id:"retrieve-detailed-information-about-a-specific-order"},"Retrieve detailed information about a specific order"),(0,o.mdx)("p",null,"The following example returns details about one of the customer's previous orders."),(0,o.mdx)("p",null,"These topics contain examples with fragments and provide even more details:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"../../orders/interfaces/credit-memo-item.md"},"CreditMemoItemInterface attributes and implementations")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"../../orders/interfaces/invoice-item.md"},"InvoiceItemInterface attributes and implementations")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"../../orders/interfaces/order-item.md"},"OrderItemInterface attributes and implementations")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"../../orders/interfaces/shipment-item.md"},"ShipmentItemInterface attributes and implementations"))),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Request:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},'{\n  customer {\n    orders(filter: {number: {eq: "000000001"}}) {\n      total_count\n      items {\n        id\n        number\n        order_date\n        status\n        items {\n          product_name\n          product_sku\n          product_url_key\n          product_sale_price {\n            value\n            currency\n          }\n          quantity_ordered\n          quantity_invoiced\n          quantity_shipped\n          eligible_for_return\n        }\n        carrier\n        shipments {\n          id\n          number\n          items {\n            product_name\n            quantity_shipped\n          }\n        }\n        total {\n          base_grand_total {\n            value\n            currency\n          }\n          grand_total {\n            value\n            currency\n          }\n          total_tax {\n            value\n          }\n          subtotal {\n            value\n            currency\n          }\n          taxes {\n            amount {\n              value\n              currency\n            }\n            title\n            rate\n          }\n          total_shipping {\n            value\n          }\n          shipping_handling {\n            amount_including_tax {\n              value\n            }\n            amount_excluding_tax {\n              value\n            }\n            total_amount {\n              value\n            }\n            taxes {\n              amount {\n                value\n              }\n              title\n              rate\n            }\n          }\n          discounts {\n            amount {\n              value\n              currency\n            }\n            label\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Response:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "customer": {\n      "orders": {\n        "total_count": 1,\n        "items": [\n          {\n            "id": "MQ==",\n            "number": "000000001",\n            "order_date": "2020-11-14 22:25:48",\n            "status": "Processing",\n            "items": [\n              {\n                "product_name": "Iris Workout Top",\n                "product_sku": "WS03-XS-Red",\n                "product_url_key": "iris-workout-top",\n                "product_sale_price": {\n                  "value": 29,\n                  "currency": "USD"\n                },\n                "quantity_ordered": 1,\n                "quantity_invoiced": 1,\n                "quantity_shipped": 1,\n                "eligible_for_return": true\n              }\n            ],\n            "carrier": "Flat Rate",\n            "shipments": [\n              {\n                "id": "MDAwMDAwMDAx",\n                "number": "000000001",\n                "items": [\n                  {\n                    "product_name": "Iris Workout Top",\n                    "quantity_shipped": 1\n                  }\n                ]\n              }\n            ],\n            "total": {\n              "base_grand_total": {\n                "value": 36.39,\n                "currency": "USD"\n              },\n              "grand_total": {\n                "value": 36.39,\n                "currency": "USD"\n              },\n              "total_tax": {\n                "value": 2.39\n              },\n              "subtotal": {\n                "value": 29,\n                "currency": "USD"\n              },\n              "taxes": [\n                {\n                  "amount": {\n                    "value": 2.39,\n                    "currency": "USD"\n                  },\n                  "title": "US-MI-*-Rate 1",\n                  "rate": 8.25\n                }\n              ],\n              "total_shipping": {\n                "value": 5\n              },\n              "shipping_handling": {\n                "amount_including_tax": {\n                  "value": 5\n                },\n                "amount_excluding_tax": {\n                  "value": 5\n                },\n                "total_amount": {\n                  "value": 5\n                },\n                "taxes": []\n              },\n              "discounts": []\n            }\n          }\n        ]\n      }\n    }\n  }\n}\n')),(0,o.mdx)("h3",{id:"retrieve-the-store-credit-history"},"Retrieve the store credit history"),(0,o.mdx)("p",null,"The following example returns the store credit history for the logged-in user."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Request:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},"query {\n  customer {\n    firstname\n    lastname\n    store_credit {\n      enabled\n      balance_history(pageSize: 10) {\n        items {\n          action\n          actual_balance {\n            currency\n            value\n          }\n          balance_change {\n            currency\n            value\n          }\n          date_time_changed\n        }\n        page_info {\n          page_size\n          current_page\n          total_pages\n        }\n        total_count\n      }\n      current_balance {\n        currency\n        value\n      }\n    }\n  }\n}\n")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Response:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "customer": {\n      "firstname": "John",\n      "lastname": "Doe",\n      "store_credit": {\n        "enabled": true,\n        "balance_history": {\n          "items": [\n            {\n              "action": "Updated",\n              "actual_balance": {\n                "currency": "USD",\n                "value": 10\n              },\n              "balance_change": {\n                "currency": "USD",\n                "value": -100\n              },\n              "date_time_changed": "2019-07-15 21:47:59"\n            },\n            {\n              "action": "Updated",\n              "actual_balance": {\n                "currency": "USD",\n                "value": 110\n              },\n              "balance_change": {\n                "currency": "USD",\n                "value": 10\n              },\n              "date_time_changed": "2019-07-15 21:47:18"\n            },\n            {\n              "action": "Created",\n              "actual_balance": {\n                "currency": "USD",\n                "value": 100\n              },\n              "balance_change": {\n                "currency": "USD",\n                "value": 100\n              },\n              "date_time_changed": "2019-07-15 16:31:05"\n            }\n          ],\n          "page_info": {\n            "page_size": 10,\n            "current_page": 1,\n            "total_pages": 1\n          },\n          "total_count": 3\n        },\n        "current_balance": {\n          "currency": "USD",\n          "value": 10\n        }\n      }\n    }\n  }\n}\n')),(0,o.mdx)("h3",{id:"retrieve-the-customers-wish-list"},"Retrieve the customer's wish list"),(0,o.mdx)("p",null,"The following query returns the customer's wish lists. Adobe Commerce allows customers to have multiple wish lists."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Request:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},"{\n  customer {\n    wishlists {\n      id\n      name\n      items_count\n      items_v2 {\n        items {\n          id\n          product {\n            uid\n            name\n            sku\n          }\n        }\n      }\n    }\n  }\n}\n")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Response:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "customer": {\n      "wishlists": [\n        {\n          "id": "1",\n          "name": "Vacation Wants",\n          "items_count": 10,\n          "items_v2": {\n            "items": [\n              {\n                "id": "1",\n                "product": {\n                  "uid": "MTM=",\n                  "name": "Overnight Duffle",\n                  "sku": "24-WB07"\n                }\n              },\n              {\n                "id": "2",\n                "product": {\n                  "uid": "MTA=",\n                  "name": "Savvy Shoulder Tote",\n                  "sku": "24-WB05"\n                }\n              },\n              {\n                "id": "3",\n                "product": {\n                  "uid": "MTE=",\n                  "name": "Endeavor Daytrip Backpack",\n                  "sku": "24-WB06"\n                }\n              },\n              {\n                "id": "4",\n                "product": {\n                  "uid": "MTA5OA==",\n                  "name": "Miko Pullover Hoodie",\n                  "sku": "WH04"\n                }\n              },\n              {\n                "id": "5",\n                "product": {\n                  "uid": "MTIyNg==",\n                  "name": "Stellar Solar Jacket",\n                  "sku": "WJ01"\n                }\n              },\n              {\n                "id": "6",\n                "product": {\n                  "uid": "MTcyMg==",\n                  "name": "Nora Practice Tank",\n                  "sku": "WT03"\n                }\n              },\n              {\n                "id": "7",\n                "product": {\n                  "uid": "MTY5MA==",\n                  "name": "Bella Tank",\n                  "sku": "WT01"\n                }\n              },\n              {\n                "id": "17",\n                "product": {\n                  "uid": "MTg=",\n                  "name": "Pursuit Lumaflex&trade; Tone Band",\n                  "sku": "24-UG02"\n                }\n              },\n              {\n                "id": "18",\n                "product": {\n                  "uid": "MQ==",\n                  "name": "Joust Duffle Bag",\n                  "sku": "24-MB01"\n                }\n              },\n              {\n                "id": "20",\n                "product": {\n                  "uid": "NTI=",\n                  "name": "Sprite Yoga Companion Kit",\n                  "sku": "24-WG080"\n                }\n              }\n            ]\n          }\n        },\n        {\n          "id": "2",\n          "name": "Lose the Muffintop",\n          "items_count": 5,\n          "items_v2": {\n            "items": [\n              {\n                "id": "8",\n                "product": {\n                  "uid": "NDk=",\n                  "name": "Advanced Pilates & Yoga (Strength)",\n                  "sku": "240-LV08"\n                }\n              },\n              {\n                "id": "10",\n                "product": {\n                  "uid": "MTQ1MA==",\n                  "name": "Layla Tee",\n                  "sku": "WS04"\n                }\n              },\n              {\n                "id": "11",\n                "product": {\n                  "uid": "MTU2Mg==",\n                  "name": "Radiant Tee",\n                  "sku": "WS12"\n                }\n              },\n              {\n                "id": "12",\n                "product": {\n                  "uid": "MTYxMA==",\n                  "name": "Electra Bra Top",\n                  "sku": "WB01"\n                }\n              },\n              {\n                "id": "13",\n                "product": {\n                  "uid": "MTY0Mg==",\n                  "name": "Celeste Sports Bra",\n                  "sku": "WB03"\n                }\n              }\n            ]\n          }\n        }\n      ]\n    }\n  }\n}\n')),(0,o.mdx)("h3",{id:"list-a-company-users-purchase-orders"},"List a company user's purchase orders"),(0,o.mdx)("p",null,"The following example returns information about all purchase orders the company user has made since January 1, 2023."),(0,o.mdx)("p",null,"The ",(0,o.mdx)("a",{parentName:"p",href:"../../b2b/purchase-order/"},"Purchase orders")," topic contains additional examples that query purchase order functionality."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Request:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},'{\n    customer {\n        purchase_orders(\n            currentPage: 1,\n            pageSize: 20,\n            filter: {\n                created_date: {\n                  from: "2023-01-21 00:00:00"\n            }\n      }\n        ) {\n            total_count\n            page_info {\n                current_page\n                page_size\n                total_pages\n            }\n            items {\n                uid\n                number\n              order {\n                id\n              }\n              created_at\n              updated_at\n              created_by {\n                firstname\n                lastname\n              }\n              status\n              order {\n                total {\n                  grand_total {\n                    value\n                    currency\n                  }\n                }\n              }\n            }\n        }\n    }\n}\n')),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Response:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "customer": {\n      "purchase_orders": {\n        "total_count": 2,\n        "page_info": {\n          "current_page": 1,\n          "page_size": 20,\n          "total_pages": 1\n        },\n        "items": [\n          {\n            "uid": "MTE=",\n            "number": "000000011",\n            "order": null,\n            "created_at": "2023-02-01 18:01:40",\n            "updated_at": "2023-02-01 18:01:40",\n            "created_by": {\n              "firstname": "John",\n              "lastname": "Doe"\n            },\n            "status": "PENDING"\n          },\n          {\n            "uid": "MTA=",\n            "number": "000000010",\n            "order": null,\n            "created_at": "2023-01-31 20:46:16",\n            "updated_at": "2023-01-31 21:10:38",\n            "created_by": {\n              "firstname": "John",\n              "lastname": "Doe"\n            },\n            "status": "REJECTED"\n          }\n        ]\n      }\n    }\n  }\n}\n')),(0,o.mdx)("h3",{id:"list-purchase-order-approval-rules"},"List purchase order approval rules"),(0,o.mdx)("p",null,"The following example returns the list of purchase order approval rules."),(0,o.mdx)("p",null,"The ",(0,o.mdx)("a",{parentName:"p",href:"../../b2b/purchase-order-rule/"},"Purchase order approval rules")," topic contains additional examples that query approval rule functionality."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Request:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},"{\n  customer {\n    purchase_order_approval_rules {\n      items {\n        name\n        uid\n      }\n      page_info {\n        page_size\n        current_page\n        total_pages\n      }\n      total_count\n    }\n  }\n}\n")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Response:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "customer": {\n      "purchase_order_approval_rules": {\n        "items": [\n          {\n            "name": "Autoapprove order",\n            "uid": "OQ=="\n          },\n          {\n            "name": "Over 10 SKUs",\n            "uid": "Ng=="\n          },\n          {\n            "name": "Purchase order over $1000",\n            "uid": "NQ=="\n          }\n        ],\n        "page_info": {\n          "page_size": 20,\n          "current_page": 1,\n          "total_pages": 1\n        },\n        "total_count": 3\n      }\n    }\n  }\n}\n')),(0,o.mdx)("h2",{id:"related-topics"},"Related topics"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"../../b2b/company/queries/is-company-email-available.md"},"isEmailAvailable query")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"../mutations/generate-token.md"},"generateCustomerToken mutation")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"../mutations/create-v2.md"},"createCustomerV2 mutation")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"../mutations/create-address.md"},"createCustomerAddress mutation"))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-customer-queries-customer-md-8737475d8bfe79b0fd33.js.map