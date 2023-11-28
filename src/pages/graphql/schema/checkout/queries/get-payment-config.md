---
title: getPaymentConfig query
---

# getPaymentConfig query

The `getPaymentConfig` query returns the payment configuration details from locations in the storefront and Admin where the payment method can be set.

The query can return details about the following supported payment methods in [Payment Services](https://experienceleague.adobe.com/docs/commerce-merchant-services/payment-services/payments-checkout/payments-options.html): :

* Apple Pay
* PayPal Hosted Fields
* PayPal Smart Buttons

Each of these payment methods can have a different payment source, for example, `hosted_fields` only works with credit cards.

## Syntax

```graphql
{ 
    getPaymentConfig(
        input: getPaymentConfigInput! 
    ): getPaymentConfigOutput    
}
```

## Input attributes

The `getPaymentConfig` object will differ on which attributes must contain depending on the payment method.

Attribute |  Data Type | Description
--- | --- | ---
`location` | PaymentLocation! | The origin location for that payment request. The possible values are
PRODUCT_DETAIL, MINICART, CART, CHECKOUT, ADMIN
`methodCode` | String! | Optiona. The code for the selected payment method. The possible values are Apple Pay, Hosted Fields, Smart Buttons

## Output attributes

The `PaymentConfigOutput` contains details about each configured payment method:

Attribute |  Data Type | Description
--- | --- | ---
`ApplePayConfig` | String! | ApplePay payment method configuration
`HostedFieldsConfig` | String! | PayPal Hosted fields payment method configuration
`SmartButtonsConfig` | String! | PayPal Smart Buttons payment method configuration

## `PaymentConfigItem` interface

The `PaymentConfigItem` interface contains the fields that are common to all thepayment methods. This interface contains the following elements:

Attribute |  Data Type | Description
--- | --- | ---
`code` | String! | The payment method code as defined in the payment gateway
`is_visible` | Boolean | Indicates whether the payment method is shown. The possible values are `True` or `False`
`sdk_params` | SDKParams | PayPal parameters required to load JS SDK
`sort_order` | String | Defines the preference for the sorting order of the payment method
`payment_intent` | String | Defines the payment intent. The possible values are `Authorize` or `Capture`
`title` | String! | The display name of the payment method

This interface also has the following implementations:

* ApplePayConfig
* HostedFieldsConfig
* SmartButtonsConfig

Each implementation contains objects with specific attributes for each of tthese payment methods.

### `ApplePayConfig` attributes

The `ApplePayConfig` payment method configuration has a `button_styles` object containing the following attributes:

Attribute | Data Type | Description
--- | --- | ---
`color` | String | The button color
`height` | Int | The button height
`label` | String | The button label
`layout` | String | The button layout
`shape` | String | The button shape
`tagline` | Boolean | Displays tagline. The possible values are `True` or `False`
`use_default_height` | Boolean | Defines if button uses default height. The possible values are `True` or `False`. If value is `False`, `height` is used

### `HostedFieldsConfig` attributes

The `HostedFieldsConfig` payment method configuration contains the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`cc_vault_code` | String | The vault payment method code. `hosted_fields` only works with credit cards (cc)
`is_vault_enabled` | Boolean | Indicates whether card vaulting is enabled. The possible values are `True` or `False`
`payment_source` | String! | Optional. The identifiable payment source for the payment method.
`requires_card_details` | Boolean | Indicates whether card and bin details are required. This value is true when the Signifyd integration is enabled for `hosted_fields`. The possible values are `True` or `False`
`three_ds` | Boolean | Indicates whether 3DS mode is enabled. The possible values are `True` or `False`

### `SmartButtonsConfig` attributes

The `SmartButtonsConfig` payment method configuration contains the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`button_styles` | String | The styles for the PayPal Smart Button configuration
`display_message` | Boolean | Defines if PayPal Pay Later message is shown. The possible values are `True` or `False`
`display_venmo` | Boolean | Defines if the Venmo option is shown. The possible values are `True` or `False`
`message_styles` | String | The message styles for the PayPal Pay Later configuration

#### `button_styles` object

The `SmartButtonsConfig` payment method configuration has a `button_styles` object containing the following attributes:

Attribute | Data Type | Description
--- | --- | ---
`color` | String | The button color
`height` | Int | The button height
`label` | String | The button label
`layout` | String | The button layout
`shape` | String | The button shape
`tagline` | Boolean | Displays tagline. The possible values are `True` or `False`
`use_default_height` | Boolean | Defines if button uses default height. The possible values are `True` or `False`. If value is `False`, `height` is used

#### `message_styles` object

The `SmartButtonsConfig` payment method configuration has a `message_styles` object containing the following attributes:

Attribute | Data Type | Description
--- | --- | ---
`layout` | String | The message layout
`logo` | String | The message logo

#### `SDK_Params` attributes

The `sdk_params` object provides details about the SDK parameters:

Attribute |  Data Type | Description
--- | --- | ---
`name` | String! | The name of the SDK parameter
`value` | String! | The value of the SDK parameter

## `getPaymentConfig` query example

The following example runs the `getPaymentConfig` query for a `location: CHECKOUT`. This query provides all available payment methods for that location:

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
