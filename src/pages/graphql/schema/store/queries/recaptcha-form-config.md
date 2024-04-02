---
title: recaptchaFormConfig query
edition: pwa
---

# recaptchaFormConfig query

The `recaptchaFormConfig` query returns information about the reCaptcha configuration for the specified form type. You can use the [`recaptchaV3Config` query](recaptcha-v3-config.md) to return a list of form types.

## Syntax

`recaptchaFormConfig(formType: ReCaptchaFormEnum!): ReCaptchaConfigOutput`

## References

The `recaptchaFormConfig` reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following query returns information about the reCaptcha configuration for the CONTACT form:

**Request:**

```graphql
query {
    recaptchaFormConfig(formType:CONTACT)
		{
    	is_enabled
    	configurations {
        re_captcha_type
        badge_position
        website_key
        theme
        language_code
        minimum_score
        validation_failure_message
        technical_failure_message
      }
  }
}
```

**Response:**

If reCaptcha is enabled for the specified form type, the response contains full configuration details.

```json
{
  "data": {
    "recaptchaFormConfig": {
      "is_enabled": true,
      "configurations": {
        "re_captcha_type": "RECAPTCHA_V3",
        "badge_position": "inline",
        "website_key": "testtest",
        "theme": "light",
        "language_code": "en",
        "minimum_score": 0.5,
        "validation_failure_message": "Validation Failure Message",
        "technical_failure_message": "Technical Failure Message"
      }
    }
  }
}
```

Otherwise, the `configurations` object contains a null response:

```json
{
  "data": {
    "recaptchaFormConfig": {
      "is_enabled": false,
      "configurations": null
    }
  }
}
```

