---
title: getPaymentConfig query
---

# getPaymentConfig query

The `getPaymentConfig` query returns the payment configuration for the available payment methods for a specific `PaymentLocation`:

* CHECKOUT
* MINICART
* CART
* PRODUCT_DETAIL
* ADMIN

These payment methods for the `getPaymentConfig` query are the ones supported in [Payment Services](https://experienceleague.adobe.com/docs/commerce-merchant-services/payment-services/payments-checkout/payments-options.html):

* PayPal Hosted Fields
* Apple Pay
* PayPal Smart Buttons

## getPaymentConfig object

The `getPaymentConfig` object will differ on which attributes must contain depending on the payment method.

### Payment method `hosted_fields`

Attribute |  Data Type | Description
--- | --- | ---
`code` | String! | The code for the payment method used in the order. Required field for sale transactions
`title` | String! | The displayed name for the payment method
`payment_intent` | String | Defines the payment intent (Authorize or Capture)
`sort_order` | String | Defines the preference for the sorting order of the payment method
`sdk_params` | String | PayPal parameters required to load JS SDK
`is_visible` | String | Defines if the payment method is shown
`payment_source` | String! | Optional. The identifiable payment source for the payment method.
`three_ds` | String | Defines if 3DS mode is enabled
`is_commerce_vault_enabled` | String | Defines if card vaulting is enabled
`cc_vault_code` | String | The vault payment method code
`requires_card_details` | String | Required card and bin details if Signifyd integration is enabled for hosted fields

### Payment method `smart_buttons`

Attribute |  Data Type | Description
--- | --- | ---
`code` | String! | The code for the payment method used in the order. Required field for sale transactions
`title` | String! | The displayed name for the payment method
`payment_intent` | String | Defines the payment intent (Authorize or Capture)
`sort_order` | String | Defines the preference for the sorting order of the payment method
`sdk_params` | String | PayPal parameters required to load JS SDK
`is_visible` | String | Defines if the payment method is shown
`display_venmo` | String | Defines if the Venmo option is shown
`message_styles` | String | The message styles for the PayPal Pay Later configuration
`display_message` | String | Defines if PayPal Pay Later message is shown
`button_styles` | String | The styles for the PayPal Smart Button configuration

### Payment method `apple_pay`

Attribute |  Data Type | Description
--- | --- | ---
`code` | String! | The code for the payment method used in the order. Required field for sale transactions
`title` | String! | The displayed name for the payment method
`payment_intent` | String | Defines the payment intent (Authorize or Capture)
`sort_order` | String | Defines the preference for the sorting order of the payment method
`sdk_params` | String | PayPal parameters required to load JS SDK
`is_visible` | String | Defines if the payment method is shown
`button_styles` | String | The styles for the ApplePay Smart Button configuration

## Example usage

### `getPaymentConfig`

The following example shows the `getPaymentConfig` query:

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
                requires_card_details
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
                    "requires_card_details": false
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
