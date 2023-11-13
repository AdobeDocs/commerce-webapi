---
title: Payment Services as payment method
description: Learn how to use the GraphQL API mutation for the Payment Services solution.
keywords:
  - GraphQL
  - Payments
---

# Payment services as payment method

Payment Services for Adobe Commerce and Magento Open Source is your turnkey self-service solution, including sandbox testing and a simple setup, for providing robust and secure payment processing for your Commerce websites.

## Payment services checkout workflow

![Payment Services sequence diagram](../../_images/graphql/payment-services.svg)

These steps describe the additional flow of calls required to complete a typical [Checkout](../tutorials/checkout/index.md) authorization with the `Payment Services` functionality enabled.

1. Fetch the payment configuration with `GetPaymentConfig` in order to render payment methods, or PayPal components.

1. PayPal returns the available payment configuration.

1. Use the `setPaymentMethodOnCart` mutation to [set the payment method](../tutorials/checkout/set-payment-method.md) for the order.

1. `Cart_id` is provided with the available payment method for the order.

1. Create the order needed with the `CreatePaymentOrder` mutation to set payment source.

1. PayPal returns `order_id`.

1. Get order information with query `GetPaymentOrder`. PayPal order details for the user cart are needed for hosted fields if the Signifyd integration is enabled.

1. [Place the order](../tutorials/checkout/place-order.md) with the additional data previously sent with the `SetPaymentAndPlaceOrder` call.

## Example usage

### `GetPaymentConfig`

The following example shows the `GetPaymentConfig` mutation constructed for the Payment Services payment method.

**Request:**

```text
query {
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

### `createPaymentOrder`

The following example shows the `createPaymentOrder` mutation constructed for the Payment Services payment method.

**Request:**

```text
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

### `getPaymentOrder`

The following example shows the `getPaymentOrder` mutation constructed for the Payment Services payment method.

**Request:**

```text
query {
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
  }
}
```
