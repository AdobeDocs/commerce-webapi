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

Currently, only customer-created custom templates can be sent. Predefined and system templates are not supported.

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

Use the following endpoints to list, retrieve, create, update, and delete custom email templates from the REST API.

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/V1/custom-email/templates` | List custom email templates, returning each template's ID, code, subject, and type. |
| `GET` | `/V1/custom-email/templates/{id}` | Retrieve a single template, including its body and styles. |
| `POST` | `/V1/custom-email/templates` | Create a custom email template and return its server-assigned ID. |
| `PUT` | `/V1/custom-email/templates/{id}` | Update an existing custom email template. |
| `DELETE` | `/V1/custom-email/templates/{id}` | Delete a custom email template. |

<InlineAlert variant="info" slots="text" />

Use the `template_id` returned by these endpoints with `POST /V1/custom-email/send` instead of looking up the ID manually.

### Template object

The `template` object represents a custom email template. Create and update requests wrap these fields in a `template` object, while list and retrieve responses return the same fields at the top level of the response.

| Field | Type | Description |
| --- | --- | --- |
| `template_id` | integer | Server-assigned identifier. Use it as-is with `POST /V1/custom-email/send`. Read-only, and ignored if supplied in a request body. |
| `template_code` | string | Unique template name. Maximum 150 characters. |
| `template_subject` | string | Template subject, stored as raw, unrendered directive source. Maximum 200 characters. Supports the directive syntax described in [Supported template scenarios](#supported-template-scenarios). |
| `template_text` | string | Raw, unrendered template body. Directives such as `{{var}}` and `{{trans}}` are stored as-is and preserved verbatim. Not returned by the list endpoint. |
| `template_type` | string | `html` or `text`. Defaults to `html` on create. Switching to `text` forces `template_styles` to an empty string. |
| `template_styles` | string | CSS for the template. Empty string for text templates. Not returned by the list endpoint. |
| `added_at` | string | Creation timestamp. Read-only. |
| `modified_at` | string | Last-modified timestamp. Read-only. |

### List custom email templates

Use the following endpoint to list all custom email templates.

#### Endpoint

-  **URL** - `GET /rest/V1/custom-email/templates`

The endpoint accepts standard `searchCriteria` parameters for pagination, sorting, and filtering. When filtering on `template_type`, filter against the raw numeric column (`1` for text, `2` for HTML) rather than the label in the response.

#### Response fields

The response includes the [template object](#template-object) fields, except `template_text` and `template_styles`.

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

Use the following endpoint to retrieve a single custom email template by its ID.

#### Endpoint

-  **URL** - `GET /rest/V1/custom-email/templates/{id}`

The response includes all [template object](#template-object) fields, including `template_text` and `template_styles`.

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

Use the following endpoint to create a new custom email template.

#### Endpoint

-  **URL** - `POST /rest/V1/custom-email/templates`

<InlineAlert variant="info" slots="text" />

Commerce returns HTTP 200 (not 201) on success, consistent with other Commerce REST endpoints.

#### Request body

Wrap the template fields in a `template` object. See [Template object](#template-object) for the full field definitions.

-  **Required** - `template_code`, `template_subject`, and `template_text`
-  **Optional** - `template_type` and `template_styles`
-  **Read-only** - `template_id`, `added_at`, and `modified_at`
   -  Commerce assigns these automatically and ignores any supplied values.

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

### Update a custom email template

Use the following endpoint to update an existing custom email template by its ID.

#### Endpoint

-  **URL** - `PUT /rest/V1/custom-email/templates/{id}`

The `{id}` in the URL identifies the template to update. A `template_id` supplied in the request body is ignored.

#### Request body

Wrap the fields to change in a `template` object. The request accepts the same [template object](#template-object) fields as create, with these differences:

-  All fields are **optional**. This is a **partial update**, so only the fields present in the request body are changed. Fields that are not included keep their previous value.
-  `template_code` is excluded from its own uniqueness check, so keeping the existing code is allowed.

<InlineAlert variant="info" slots="text" />

Included fields cannot contain empty values. Sending an empty `template_code`, `template_subject`, or `template_text` returns an **HTTP 400** error. To leave a field unchanged, do not include it.

#### Example request

```json
{
  "template": {
    "template_subject": "You *still* left something behind",
    "template_text": "<p>Hi {{var customer.name}}, your cart really misses you.</p>"
  }
}
```

#### Success response (HTTP 200)

The response returns the updated template in the same shape as [Retrieve a custom email template](#retrieve-a-custom-email-template).

#### Error responses

-  **HTTP 400 – Validation error**

   Returned for an over-length value, an invalid `template_type`, or a required field that was supplied as an empty value.

-  **HTTP 404 – Template not found**

   Returned when no custom template matches the given `id`.

-  **HTTP 409 – Duplicate template code**

   Returned when the new `template_code` collides with another existing template.

   Example: `"message": "A custom email template with code \"my_code\" already exists."`

### Delete a custom email template

Use the following endpoint to delete a custom email template by its ID.

#### Endpoint

-  **URL** - `DELETE /rest/V1/custom-email/templates/{id}`

#### Success response (HTTP 200)

The API returns `true` in the response body on successful deletion.

#### Error responses

-  **HTTP 404 – Template not found**

   Returned when no custom template matches the given `id`.

-  **HTTP 409 – Template in use**

   Returned when the template is currently referenced by store configuration, for example assigned as the template for a Sales Email under **Stores** > _Configuration_ > **Sales** > **Sales Emails**. Clear or reassign the configuration, then try the delete call again.

   Example: `"message": "The custom email template with id \"5\" is currently in use and cannot be deleted."`

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
