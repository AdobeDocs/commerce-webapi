---
title: getPaymentConfig query
description: This query returns the payment configuration details from locations in the storefront and Admin where the payment method can be set.
---

# getPaymentConfig query

<InlineAlert variant="info" slots="text" />

This query is available automatically on Adobe Commerce as a Cloud Service. On Adobe Commerce on Cloud and on-premises instances, you must install [Payment Services for Adobe Commerce](https://commercemarketplace.adobe.com/magento-payment-services.html) 2.10.0 or higher to use this query.

The `getPaymentConfig` query returns the payment configuration details from locations in the storefront and Admin where the payment method can be set.

The query can return details about the following supported payment methods in [Payment Services](https://experienceleague.adobe.com/en/docs/commerce/payment-services/payments-checkout/payments-options):

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

## Reference

The [`getPaymentConfig`](/reference/graphql/saas/index.md#getpaymentconfig) reference provides detailed information about the types and fields defined in this query.

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
                three_ds_mode
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
                    "three_ds_mode": false,
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

## Related information

[Payment options](https://experienceleague.adobe.com/en/docs/commerce/payment-services/payments-checkout/payments-options)

[Google Pay API request object options](https://developers.google.com/pay/api/web/reference/request-objects)

[PayPal JavaScript SDK](https://developer.paypal.com/sdk/js/reference/)
