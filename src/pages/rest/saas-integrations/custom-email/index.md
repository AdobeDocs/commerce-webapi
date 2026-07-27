---
title: Email triggering through REST
description: Learn how to trigger transactional emails and manage custom email templates using the REST API for Adobe Commerce as a Cloud Service.
keywords:
  - REST
  - Integration
---

<Fragment src="../../../includes/saas-only.md"/>

# Email triggering through the REST API

Previously, you could only send emails when events were triggered, such as during customer registration or order purchase. In Adobe Commerce as a Cloud Service, you can send emails through the REST API on demand by specifying a template ID, recipient email, and template variables.

<InlineAlert variant="info" slots="text" />

Currently, only newly created, custom templates can be sent. Predefined and system templates are not supported.

The `V1/custom-email/send` endpoint allows **third-party systems**, such as integrations and external services, to send emails on demand by specifying:

-  **Template ID** – Email template ID.
-  **Recipient email** – The target email address for this request.
-  **Variables** – (Optional) Custom defined key-value pairs to inject into the template, such as `customer_name` or `order_id`.
-  **Reply-To email** – (Optional) Email address to set as the `Reply-To` header so that recipient replies are routed to a specific mailbox instead of the template sender.

<InlineAlert variant="info" slots="text" />

Email is sent synchronously using the current store scope and the default **From** email address or the email address defined for templates.

## REST contract

The following section explains how to send transactional emails on demand using the REST API.

### Endpoint

-  **URL** - `POST /rest/V1/custom-email/send`
-  **Authorization** - Only **service-to-service IMS authorization** is supported. The caller must have access to the **Send Custom Email via API** (`Magento_CustomEmailSend::send_custom_email`) resource. Refer to [REST authentication](../../authentication/index.md) for more information.
-  **Async usage** (recommended) - Although this endpoint is implemented synchronously, we recommend calling it using the **asynchronous REST API** so that the request is queued and processed by a consumer, avoiding long-lived HTTP connections. In Adobe Commerce as a Cloud Service, you can use the route with `/async` after `V1`, for example: `POST https://<server>.api.commerce.adobe.com/<tenant-id>/V1/async/custom-email/send`.

   Refer to [Asynchronous web endpoints](../../use-rest/asynchronous-web-endpoints.md) for more information.

### Request body

-  **templateId** (integer, required) – Email template ID as defined in the Admin under **Marketing** > _Communications_ > **Email Templates**.

-  **recipientEmail** (string, required) – The target email address. Must be a valid email format. Missing or empty values trigger a validation error.
-  **variables** (object, optional) – Key-value map injected into the template as an `UnstructuredArray`.

   If you are not using variables, pass an empty object or omit it. In the email template body and subject, use the variable syntax to reference a variable, for example `var order_id`. The subject also supports the same custom variables and syntax described in [Supported template scenarios](#supported-template-scenarios).

-  **replyToEmail** (string, optional) – Email address to use for the `Reply-To` header of the outgoing email. When set, replies from the recipient are directed to this address instead of the template sender. Must be a valid email format and no longer than 255 characters. If provided, it must not be an empty string. Omit the field (or pass `null`) to use the template sender.

### Example request

```json
{
  "templateId": 5,
  "recipientEmail": "john@example.com",
  "replyToEmail": "support@example.com",
  "variables": {
    "customer_name": "John",
    "order_id": "100000123",
    "delivery_date": "Feb 15"
  }
}
```

### Success response (HTTP 200)

The API returns HTTP 200 on successful send. The `reply_to_email` field is only present in the response when a `replyToEmail` value was supplied in the request.

```json
{
  "message": "Email accepted for delivery",
  "reference_id": "a1b2c3d4e5f6-1707571800",
  "recipient_email": "john@example.com",
  "reply_to_email": "support@example.com",
  "template_id": 5,
  "template_code": "order_update_notification"
}
```

### Error responses

-  **HTTP 400 – Validation error**

   The integration must supply a valid `templateId` and `recipientEmail` for each request.

   -  `"message": "Invalid recipient email format"` – invalid or malformed recipient address
   -  `"message": "Recipient email is required."` – missing or empty `recipientEmail`
   -  `"message": "Template ID must be a positive integer."` – missing, zero, or invalid `templateId`
   -  `"message": "replyToEmail must not be empty when provided."` – `replyToEmail` was supplied as an empty string
   -  `"message": "Invalid replyToEmail format."` – invalid or malformed `replyToEmail` address
   -  `"message": "replyToEmail must not exceed 255 characters."` – `replyToEmail` exceeds the 255-character limit

-  **HTTP 404 – Template not found**

   Example: `"message": "Email template with ID \"999\" does not exist."`

## Manage custom email templates

Use the following endpoints to list, retrieve, and create custom email templates from the REST API.

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/V1/custom-email/templates` | List custom email templates, returning each template's ID, code, subject, and type. |
| `GET` | `/V1/custom-email/templates/{id}` | Retrieve a single template, including its body and styles. |
| `POST` | `/V1/custom-email/templates` | Create a custom email template and return its server-assigned ID. |

<InlineAlert variant="info" slots="text" />

Use the `template_id` returned by these endpoints with `POST /V1/custom-email/send` instead of looking up the ID manually.

### List custom email templates

#### Endpoint

-  **URL** - `GET /rest/V1/custom-email/templates`

The endpoint accepts standard `searchCriteria` parameters for pagination, sorting, and filtering. When filtering on `template_type`, filter against the raw numeric column (`1` for text, `2` for HTML) rather than the label in the response.

#### Response fields

| Field | Type | Description |
| --- | --- | --- |
| `template_id` | integer | Usable as-is with `POST /V1/custom-email/send`. |
| `template_code` | string | Template name. |
| `template_subject` | string | Template subject, as raw, unrendered directive source. |
| `template_type` | string | `html` or `text`. |
| `added_at` | string | Creation timestamp. |
| `modified_at` | string | Last-modified timestamp. |

#### Example request

```http
GET /rest/V1/custom-email/templates?searchCriteria[pageSize]=20&searchCriteria[currentPage]=1
```

#### Example response (HTTP 200)

```json
{
  "items": [
    {
      "template_id": 5,
      "template_code": "Abandoned Cart Reminder",
      "template_subject": "You left something behind",
      "template_type": "html",
      "added_at": "2026-06-01 12:34:56",
      "modified_at": "2026-06-02 09:10:11"
    }
  ],
  "search_criteria": {
    "page_size": 20,
    "current_page": 1
  },
  "total_count": 1
}
```

### Retrieve a custom email template

#### Endpoint

-  **URL** - `GET /rest/V1/custom-email/templates/{id}`

The response includes every field from the list response, plus:

| Field | Type | Description |
| --- | --- | --- |
| `template_text` | string | Raw, unrendered template body. Directives such as `{{var}}` and `{{trans}}` are preserved, so the value can be sent back verbatim when creating another template. |
| `template_styles` | string | CSS for the template. Empty string for text templates. |

#### Example request

```http
GET /rest/V1/custom-email/templates/5
```

#### Example response (HTTP 200)

```json
{
  "template_id": 5,
  "template_code": "Abandoned Cart Reminder",
  "template_subject": "{{trans \"You left something behind\"}}",
  "template_type": "html",
  "template_text": "{{template config_path=\"design/email/header_template\"}}...",
  "template_styles": "",
  "added_at": "2026-06-01 12:34:56",
  "modified_at": "2026-06-02 09:10:11"
}
```

#### Error responses

-  **HTTP 404 – Template not found**

   Returned when no custom template matches the given `id`.

### Create a custom email template

#### Endpoint

-  **URL** - `POST /rest/V1/custom-email/templates`

<InlineAlert variant="info" slots="text" />

Commerce returns HTTP 200 (not 201) on success, consistent with other Commerce REST endpoints.

#### Request body

Wrap the template fields in a `template` object.

-  **template_code** (string, required) – Unique template name. Maximum 150 characters.
-  **template_subject** (string, required) – Maximum 200 characters. May contain directive syntax, as described in [Supported template scenarios](#supported-template-scenarios).
-  **template_text** (string, required) – Raw template body. Directives are stored as-is and are not rendered at creation time.
-  **template_type** (string, optional) – `html` (default) or `text`.
-  **template_styles** (string, optional) – CSS for the template. Ignored, and forced to an empty string, when `template_type` is `text`.

The API ignores any value supplied for `template_id`, `added_at`, or `modified_at`, Commerce assigns these automatically.

<InlineAlert variant="info" slots="text" />

The API does not accept `template_sender_name`, `template_sender_email`, `orig_template_code`, or `orig_template_variables`. These fields are either inert for email templates or used only by the Admin template editor.

#### Example request

```json
{
  "template": {
    "template_code": "Abandoned Cart Reminder",
    "template_subject": "You left something behind",
    "template_text": "<p>Hi {{var customer.name}}, your cart misses you.</p>",
    "template_styles": ".greeting { color: #333; }",
    "template_type": "html"
  }
}
```

#### Success response (HTTP 200)

The response returns the created template in the same shape as [Retrieve a custom email template](#retrieve-a-custom-email-template), including the server-assigned `template_id`.

#### Error responses

-  **HTTP 400 – Validation error**

   Returned for a missing required field, a value that exceeds its length limit, or an invalid `template_type`.

-  **HTTP 409 – Duplicate template code**

   Returned when a custom template with the same `template_code` already exists. Commerce does not create a duplicate row.

   Example: `"message": "A custom email template with code \"my_code\" already exists."`

## Supported template scenarios

The following template features are supported in both the **email body** and the **template subject**:

<InlineAlert variant="info" slots="text" />

The template subject also supports custom variables. Use `var variableName` and other syntax as described in the following section.

-  **Include directive** – to include other design templates, such as an email header.

   ```html
   {{template config_path="design/email/header_template"}}
   ```

-  **Simple variables** – use `var variableName`, for example `var order_id` or `var g`.

   ```html
   {{var order.test}}
   {{var g}}
   {{var order_id}}
   ```

-  **Nested/dot notation** – for nested keys passed in the request `variables`, in translations use dollar-prefixed names, such as `$order_data.customer_name`, `$order.increment_id`, or `$order_data.frontend_status_label`.

   ```html
   {{trans "%name," name=$order_data.customer_name}}
   {{trans "Your order #%increment_id has been updated with a status of **%order_status**." increment_id=$order.increment_id order_status=$order_data.frontend_status_label |raw}}
   ```

-  **Translation (trans)** – parameterized text, multi-line translations with multiple placeholders and HTML tags.

   ```html
   {{trans "%name," name=$order_data.customer_name}}
   {{trans "Your order #%increment_id has been updated with a status of **%order_status**." increment_id=$order.increment_id order_status=$order_data.frontend_status_label |raw}}
   ```

-  **Raw output** – use the `|raw` filter when the translated or variable content contains HTML (for example, `<strong>` or `<a>`).

   ```html
   {{trans "Your order #%increment_id has been updated with a status of **%order_status**." increment_id=$order.increment_id order_status=$order_data.frontend_status_label |raw}}
   ```

-  **URL helper** – for store URLs inside translations.

   ```html
   {{trans 'You can check the status of your order by [logging into your account](%account_url).' account_url=$this.getUrl($store,'customer/account/',[_nosid:1]) |raw}}
   ```
