---
title: recaptchaFormConfig query
edition: pwa
---

# recaptchaFormConfig query

The `recaptchaFormConfig` query returns information about the reCaptcha configuration for the specified form type. You can use the [`recaptchaV3Config` query](recaptcha-v3-config.md) to return a list of form types.

## Syntax

`recaptchaFormConfig(formType: ReCaptchaFormEnum!): ReCaptchaConfigOutput`

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


## Input attributes

Field | Type | Description
--- | --- | ---
`formType` field | ReCaptchaFormEnum | The type of the form for reCaptcha configuration to be returned.

## Output attributes

Attribute | Data Type | Description
--- | --- | ---
`re_captcha_type` | ReCaptchaTypeEmum! | reCaptcha type configured for the requested form 
`badge_position` | String | The position of the invisible reCAPTCHA badge on each page
`theme` | String | The theme used to render reCaptcha (`dark` or `light`)
`validation_failure_message` | String! | The message that appears to the user if validation fails
`technical_failure_message` | String! | The message that appears to the user if there is some technical fails
`language_code` | String | A two-character code that specifies the language that is used for Google reCAPTCHA text and messaging
`minimum_score` | Float | The minimum score that identifies a user interaction as a potential risk (reCaptchaV3 only)
`website_key` | String! | The website key generated when the Google reCAPTCHA account was registered
