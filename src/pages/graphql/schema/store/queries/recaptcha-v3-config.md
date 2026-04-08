---
title: recaptchaV3Config query
---

# recaptchaV3Config query

The `recaptchaV3Config` query returns information about the reCaptcha V3 configuration.

## Syntax

`{recaptchaV3Config {ReCaptchaConfigurationV3}}`

## Reference

The `recaptchaV3Config` reference provides detailed information about the types and fields defined in this query.

* &#8203;<Edition name="saas" /> [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#query-recaptchaV3Config)

* &#8203;<Edition name="paas" /> [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-recaptchaV3Config)

## Example usage

The following query returns information about the reCaptchaV3 configuration:

**Request:**

```graphql
query {
  recaptchaV3Config {
    minimum_score
    website_key
    badge_position
    failure_message
    forms
  }
}
```

**Response:**

```json
{
  "data": {
    "recaptchaV3Config": {
      "minimum_score": 0.5,
      "website_key": "<key-value>",
      "badge_position": "inline",
      "failure_message": "reCAPTCHA verification failed.",
      "forms": [
        "PLACE_ORDER",
        "CUSTOMER_FORGOT_PASSWORD",
        "CUSTOMER_EDIT",
        "CUSTOMER_LOGIN",
        "CUSTOMER_CREATE",
        "BRAINTREE"
      ]
    }
  }
}
```
