---
title: recaptchaFormConfigs query
edition: saas
---

# recaptchaFormConfigs query

The `recaptchaFormConfigs` query returns reCAPTCHA configuration details for multiple form types in a single request. Use this query when you need to retrieve and display reCAPTCHA widgets for several forms at once, avoiding multiple round-trips. For a single form type, use the [`recaptchaFormConfig` query](recaptcha-form-config.md).

You can use the [`recaptchaV3Config` query](recaptcha-v3-config.md) to return a list of form types.

## Syntax

`recaptchaFormConfigs(formTypes: [ReCaptchaFormEnum!]!): [ReCaptchaFormConfigItem]`

## Reference

The [`recaptchaFormConfigs`](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#query-recaptchaFormConfigs) reference provides detailed information about the types and fields defined in this query.

## Example usage

The following query returns reCAPTCHA configuration for the `PLACE_ORDER` and `CUSTOMER_LOGIN` form types. When reCAPTCHA is enabled for a form type, the response contains full configuration details. When it is disabled, `configurations` is `null`.

**Request:**

```graphql
query {
  recaptchaFormConfigs(formTypes: [PLACE_ORDER, CUSTOMER_LOGIN]) {
    form_type
    is_enabled
    configurations {
      re_captcha_type
      website_key
      theme
      language_code
      badge_position
      minimum_score
      validation_failure_message
      technical_failure_message
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "recaptchaFormConfigs": [
      {
        "form_type": "PLACE_ORDER",
        "is_enabled": true,
        "configurations": {
          "re_captcha_type": "RECAPTCHA_V3",
          "website_key": "",
          "theme": "light",
          "language_code": "",
          "badge_position": "inline",
          "minimum_score": 0.5,
          "validation_failure_message": "reCAPTCHA verification failed.",
          "technical_failure_message": "Something went wrong with reCAPTCHA. Please contact the store owner."
        }
      },
      {
        "form_type": "CUSTOMER_FORGOT_PASSWORD",
        "is_enabled": false,
        "configurations": null
      }
    ]
  },
  "extensions": {
    "request-id": "e60a92ef-d079-4a57-8645-54eb65e49660"
  }
}
```
