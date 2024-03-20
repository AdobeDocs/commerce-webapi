---
title: getPaymentConfig query
---

# getPaymentConfig query

<InlineAlert variant="info" slots="text" />

This query is available only if you have installed [Payment Services for Adobe Commerce](https://commercemarketplace.adobe.com/magento-payment-services.html) 2.3.0 or higher.

The `getPaymentConfig` query returns the payment configuration details from locations in the storefront and Admin where the payment method can be set.

The query can return details about the following supported payment methods in [Payment Services](https://experienceleague.adobe.com/docs/commerce-merchant-services/payment-services/payments-checkout/payments-options.html): :

* Apple Pay
* Google Pay
* PayPal Hosted Fields
* PayPal Smart Buttons

Each of these payment methods can have a different payment source, for example, `hosted_fields` only works with credit cards.

## Syntax

```graphql
{ 
    getPaymentConfig(
        input: getPaymentConfigInput! 
    ) getPaymentConfigOutput    
}
```

## Example usage

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
            google_pay {
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
                    color
                    height
                    type
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
                "google_pay": {
                    "payment_source": "googlepay",
                    "code": "payment_services_paypal_google_pay",
                    "title": "Google Pay",
                    "payment_intent": "authorize",
                    "sort_order": "20",
                    "sdk_params": [
                        {
                            "name": "src",
                            "value": "https://www.paypal.com/sdk/js?client-id=..."
                        }
                    ],
                    "is_visible": true,
                    "button_styles": {
                        "color": "default",
                        "height": 10,
                        "type": "buy"
                    }
                }
            }
        }
    }
}
```

## Input attributes

The `getPaymentConfig` query requires the following input attribute:

Attribute |  Data Type | Description
--- | --- | ---
`location` | PaymentLocation! | The origin location for that payment request. The possible values are PRODUCT_DETAIL, MINICART, CART, CHECKOUT, ADMIN

## Output attributes

The `PaymentConfigOutput` contains details about each configured payment method:

Attribute |  Data Type | Description
--- | --- | ---
`ApplePayConfig` | String! | Apple Pay payment method configuration
`GooglePayConfig` | String! | Google Pay payment method configuration
`HostedFieldsConfig` | String! | PayPal Hosted fields payment method configuration
`SmartButtonsConfig` | String! | PayPal Smart Buttons payment method configuration

Each of these output attributes implements the `PaymentConfigItem` interface.

## `PaymentConfigItem` interface

The `PaymentConfigItem` interface contains the fields that are common to all the payment methods. This interface contains the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`code` | String | The payment method code as defined in the payment gateway
`is_visible` | Boolean | Indicates whether the payment method is shown
`payment_intent` | String | Defines the payment intent. The possible values are `Authorize` or `Capture`
`sdk_params` | SDKParams | PayPal parameters required to load the PayPal JavaScript SDK
`sort_order` | String | The relative order the payment method is displayed on the checkout page
`title` | String! | The display name of the payment method

This interface also has the following implementations:

* ApplePayConfig
* GooglePayConfig
* HostedFieldsConfig
* SmartButtonsConfig

Each implementation contains objects with specific attributes for each of these payment methods.

### `ApplePayConfig` attributes

The `ApplePayConfig` payment method configuration has a `button_styles` object containing the following attributes:

Attribute | Data Type | Description
--- | --- | ---
`color` | String | The button color
`height` | Int | The button height in pixels
`label` | String | The button label
`layout` | String | The button layout
`shape` | String | The button shape
`tagline` | Boolean | Indicates whether the tagline is displayed
`use_default_height` | Boolean | Defines if button uses default height. If the value is `False`, the value of `height` is used

See [Payment options](https://experienceleague.adobe.com/docs/commerce-merchant-services/payment-services/payments-checkout/payments-options.html) for more information.

### `GooglePayConfig` attributes

The `GooglePayConfig` payment method configuration contains the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`code` | String | The payment method code as defined in the payment gateway
`is_visible` | Boolean | Indicates whether the payment method is shown
`payment_intent` | String | Defines the payment intent. The possible values are `Authorize` or `Capture`.
`payment_source` | String | The identifiable payment source for the payment method
`sdk_params` | SDKParams | PayPal parameters required to load the PayPal JavaScript SDK
`sort_order` | String | The relative order the payment method is displayed on the checkout page
`title` | String! | The display name of the payment method

The possible values for `payment_source` are credit card (cc), PayPal (paypal), Google Pay (googlepay), and Apple Pay (applepay) depending on the payment method.

The `GooglePayConfig` payment method configuration also has a `button_styles` object containing the following attributes:

Attribute | Data Type | Description
--- | --- | ---
`color` | String | The button color
`height` | Int | The button height in pixels
`type` | String | Defines the button type. The possible values are `buy`, `checkout`, `order`, `pay`, and `plain`

See [Google Pay API request object options](https://developers.google.com/pay/api/web/reference/request-objects) documentation for more information.

### `HostedFieldsConfig` attributes

The `HostedFieldsConfig` payment method configuration contains the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`cc_vault_code` | String | The vault payment method code. Hosted fields only works with credit cards (cc)
`is_vault_enabled` | Boolean | Indicates whether card vaulting is enabled
`payment_source` | String | The identifiable payment source for the payment method
`requires_card_details` | Boolean | Indicates whether card and bin details are required. This value is true when the Signifyd integration is enabled for hosted fields
`three_ds` | Boolean | Indicates whether 3DS mode is enabled

### `SmartButtonsConfig` attributes

The `SmartButtonsConfig` payment method configuration contains the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`button_styles` | ButtonStyles | The styles for the PayPal Smart Button configuration
`display_message` | Boolean | Indicates whether the PayPal Pay Later message is shown
`display_venmo` | Boolean | Defines if the Venmo option is shown
`message_styles` | MessageStyles | The message styles for the PayPal Pay Later configuration

See [Payment options](https://experienceleague.adobe.com/docs/commerce-merchant-services/payment-services/payments-checkout/payments-options.html) for more information.

#### `ButtonStyles` object

The `SmartButtonsConfig` payment method configuration has a `ButtonStyles` object containing the following attributes:

Attribute | Data Type | Description
--- | --- | ---
`color` | String | The button color
`height` | Int | The button height in pixels
`label` | String | The button label
`layout` | String | The button layout
`shape` | String | The button shape
`tagline` | Boolean | Indicates whether to display the PayPal tagline
`use_default_height` | Boolean | Defines if button uses default height. If the value is `False`, the value of `height` is used

#### `MessageStyles` object

The `SmartButtonsConfig` payment method configuration has a `MessageStyles` object containing the following attributes:

Attribute | Data Type | Description
--- | --- | ---
`layout` | String | The message layout
`logo` | String | The message logo

#### `SDKParams` attributes

The `SDKParams` object provides details about the SDK parameters:

Attribute |  Data Type | Description
--- | --- | ---
`name` | String | The name of the SDK parameter
`value` | String | The value of the SDK parameter

These values come from [PayPal JavaScript SDK](https://developer.paypal.com/sdk/js/reference/).
