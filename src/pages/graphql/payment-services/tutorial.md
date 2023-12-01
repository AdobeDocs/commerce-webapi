---
title: Payment Services checkout tutorial
description: Learn how to place an order with the Payment Services GraphQL API.
keywords:
  - GraphQL
  - Payments
---

# Payment Services checkout tutorial

This tutorial describes describe the steps to complete a checkout authorization with [Payment Services](https://experienceleague.adobe.com/docs/commerce-merchant-services/payment-services/guide-overview.html) enabled.

## Before you begin

Complete the following prerequisites:

*  Install an Adobe Commerce or Magento Open Source instance with sample data.
   The sample data defines a functional store, called Luma, that sells fitness clothing and accessories. The store does not provide any sandbox accounts for testing credit card payments, so transactions will be simulated using an offline payment method.

*  Install a GraphQl client. You can use any GraphQl client to send calls to Magento. [Altair](https://altair.sirmuel.design/) is a good example.

*  Learn about GraphQL, how it works, and how to use it. See [Introduction to GraphQL](https://graphql.org/learn/) for details.

*  Know how to generate a customer token. See [Authorization tokens](../usage/authorization-tokens.md) for details.

## Checkout tutorial

### Step 1. Fetch the payment configuration

Use the [`getPaymentConfig`](../schema/checkout/queries/get-payment-config.md) query to fetch the payment configuration needed to render details about PayPal components, such as hosted fields, smart buttons, and Apple Pay.

The `getPaymentConfig` query returns the payment configuration details from locations in the storefront and Admin where the payment method can be set.

**Request:**

```graphql
{
    getPaymentConfig( location: CHECKOUT ) {
            hosted_fields {
                code
                title
                payment_intent
                sort_order
                sdk_params {
                    name
                    value
                }
                is_visible
                payment_source
                three_ds
                is_vault_enabled
                cc_vault_code
            }
            smart_buttons {
                code
                title
                payment_intent
                sort_order
                sdk_params {
                    name
                    value
                }
                is_visible
                message_styles {
                    layout
                    logo {
                        type
                    }
                }
                display_message
                display_venmo
                  button_styles {
                    layout
                    color
                    shape
                    label
                    tagline
                    height
                    use_default_height
                }
            }
            apple_pay {
                payment_source
                code
                title
                payment_intent
                sort_order
                sdk_params {
                    name
                    value
                }
                is_visible
                button_styles {
                    layout
                    color
                    shape
                    label
                    tagline
                    height
                    use_default_height
                }
            }
        }
}
```

**Response:**

```json
{
    "data": {
        "getPaymentConfig": {
            "config": {
                "hosted_fields": {
                    "code": "payment_services_paypal_hosted_fields",
                    "title": "Credit Card",
                    "payment_intent": "capture",
                    "sort_order": "1",
                    "sdk_params": [
                        {
                            "name": "src",
                            "value": "https:\/\/www.paypal.com\/sdk\/js?client-id=..."
                        },
                        {
                            "name": "data-partner-attribution-id",
                            "value": "MagentoPayments_SP_PCP_Int"
                        },
                        {
                            "name": "data-client-token",
                            "value": "..."
                        },
                        {
                            "name": "data-expires-in",
                            "value": "3600"
                        }
                    ],
                    "is_visible": true,
                    "payment_source": "cc",
                    "three_ds": false,
                    "is_commerce_vault_enabled": true,
                    "cc_vault_code": "payment_services_paypal_vault"
                },
                "smart_buttons": {
                    "code": "payment_services_paypal_smart_buttons",
                    "title": "PayPal",
                    "payment_intent": "capture",
                    "sort_order": "10",
                    "sdk_params": [
                        {
                            "name": "src",
                            "value": "https:\/\/www.paypal.com\/sdk\/js?client-id=..."
                        },
                        {
                            "name": "data-partner-attribution-id",
                            "value": "MagentoPayments_SP_PCP_Int"
                        },
                        {
                            "name": "data-client-token",
                            "value": "..."
                        },
                        {
                            "name": "data-expires-in",
                            "value": "3600"
                        }
                    ],
                    "is_visible": true,
                    "display_venmo": true,
                    "message_styles": {
                        "layout": "text",
                        "logo": {
                            "type": "inline"
                        }
                    },
                    "display_message": true,
                    "button_styles": {
                        "layout": "vertical",
                        "color": "gold",
                        "shape": "rect",
                        "height": null,
                        "label": "paypal",
                        "tagline": false
                    }
                },
                "apple_pay": {
                    "code": "payment_services_paypal_apple_pay",
                    "title": "Apple Pay",
                    "payment_intent": "authorize",
                    "sort_order": "10",
                    "sdk_params": [
                        {
                            "name": "src",
                            "value": "https:\/\/www.paypal.com\/sdk\/js?client-id=..."
                        }
                    ],
                    "is_visible": true,
                    "button_styles": {
                        "layout": "vertical",
                        "color": "gold",
                        "shape": "rect",
                        "height": null,
                        "label": "paypal",
                        "tagline": false
                    }
                }
            }
        }
    }
}
```

### Step 2. Set the payment method

Run the [`setPaymentMethodOnCart`](../schema/cart/mutations/set-payment-method.md) mutation to set the payment method for your order.

**Request:**

```graphql
mutation {
    setPaymentMethodOnCart ( input: {
      cart_id: "uocGxUi5H97XFAMhY3s66q4aFYG3Bmdr",
      payment_method: {
        code: "payment_services_paypal_hosted_fields",
        payment_services_paypal_hosted_fields: {
          payment_source: "cc",
          payments_order_id: "mp-order-a4babd34-13d3-4ac0-b1b0-109bb7be1574",
          paypal_order_id: "9R90936863877801D",
          is_active_payment_token_enabler: true,
          location: PRODUCT_DETAIL
        }
      }
    }
    ) {
       cart {
         id
         selected_payment_method {
           code
         }
       }
    }
  } 
```

**Response:**

```json
{
  "data": {
    "setPaymentMethodOnCart": {
      "cart": {
        "id": "r8TKHa58b7Y8VaZHLyABNxrEdS8hJJTZ",
        "selected_payment_method": {
          "code": "payment_services_paypal_hosted_fields"
        }
      }
    }
  }
}
```

### Step 3. Create a payment order

Use the [`createPaymentOrder`](../schema/checkout/mutations/create-payment-order.md) mutation to create a payment order to begin the authorization process.

**Request:**

```graphql
mutation {
  createPaymentOrder(input: {
    cartId: "AJCY8dhIfuch9LcDHAxEkw7oG3DjGdKt"
    methodCode: "payment_services_paypal_hosted_fields"
    paymentSource: "cc"
    vaultIntent: false
  }) {
    id
    mp_order_id
    status
  }
}
```

**Response:**

```json
{
  "data": {
    "createPaymentOrder": {
      "id": "9SA28234K9340625D",
      "mp_order_id": "mp-order-8b0488f9-46c5-4640-b577-c5f7d90cf224",
      "status": "CREATED"
    }
  }
}
```

### Step 4. Retrieve the payment details for the order

Use the [`getPaymentOrder`](../schema/checkout/queries/get-payment-order.md) query to retrieve the payment details for the order. You must run this query  when the Signifyd integration and Hosted fields are enabled in [Payment Services](https://experienceleague.adobe.com/docs/commerce-merchant-services/payment-services/payments-checkout/payments-options.html).

**Request:**

```graphql
{
    getPaymentOrder (
      cartId: "rPG5SFUQN6ePsfNNDnhrmmr9SNWqpPSS"
      id: "9XD295279E1088104"
    ) {
      mp_order_id
      id
      status
      payment_source_details {
        card {
          name
          last_digits
          card_expiry_month
          card_expiry_year
          bin_details {
            bin
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
    "getPaymentOrder": {
      "mp_order_id": "mp-order-972b389e-690c-4deb-b68a-f83c9076a6e7",
      "id": "9XD295279E1088104",
      "status": "APPROVED",
      "payment_source_details": {
        "card": {
          "name": "Testf Testl",
          "last_digits": "7763",
          "card_expiry_month": "12",
          "card_expiry_year": "2026",
          "bin_details": {
            "bin": "455676"
          }
        }
      }
    }
```

### Step 5. Place the order

Run the [`placeOrder`](../schema/cart/mutations/place-order.md) mutation to create an order.

**Request:**

```graphql
mutation {
  placeOrder(input: {cart_id: "{ CART_ID }"}) {
    order {
      order_number
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "placeOrder": {
      "order": {
        "order_number": "000000001"
      }
    }
  }
}
```

Make sure you have a cart ID before you create the order. See [create empty cart](../tutorials/checkout/add-product-to-cart.md) for more information.

## Verify this step

1. Sign in as a customer to the website using the email `john.doe@example.com` and password `b1b2b3l@w+`.

1. Go to **My Account** > **My Orders**. The order you created is displayed.  The order is also displayed on the Orders grid (**Sales** > **Orders**) in the Admin.
