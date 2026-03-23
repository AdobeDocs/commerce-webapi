---
title: Email triggering through REST
description: Learn how to trigger transactional emails on demand using the REST API by specifying a template ID, recipient email, and template variables for Adobe Commerce as a Cloud Service.
edition: saas
keywords:
  - REST
  - Integration
---

# Email triggering through the REST API

Previously, you could only send emails when events were triggered, such as during customer registration or order purchase. In Adobe Commerce as a Cloud Service, you can send emails through the REST API on demand by specifying a template ID, recipient email, and template variables.

<InlineAlert variant="info" slots="text" />

Currently, only newly created, custom templates can be sent. Predefined and system templates are not supported.

The `V1/custom-email/send` endpoint allows **third-party systems**, such as integrations and external services, to send emails on demand by specifying:

-  **Template ID** – Email template ID.
-  **Recipient email** – The target email address for this request.
-  **Variables** – (Optional) Custom defined key-value pairs to inject into the template, such as `customer_name` or `order_id`.

<InlineAlert variant="info" slots="text" />

Email is sent synchronously using the current store scope and the default **From** email address or the email address defined for templates.

## REST contract

The following section explains how to send transactional emails on demand using the REST API.

### Endpoint

-  **URL** - `POST /rest/V1/custom-email/send`
-  **Authorization** - Only **service-to-service IMS authorization** is supported. The caller must have access to the **Send Custom Email via API** (`Magento_CustomEmailSend::send_custom_email`) resource. Refer to [REST authentication](../authentication/) for more information.
-  **Async usage** (recommended) - Although this endpoint is implemented synchronously, we recommend calling it using the **asynchronous REST API** so that the request is queued and processed by a consumer, avoiding long-lived HTTP connections. In Adobe Commerce as a Cloud Service, you can use the route with `/async` after `V1`, for example: `POST https://<server>.api.commerce.adobe.com/<tenant-id>/V1/async/custom-email/send`.

   Refer to [Asynchronous web endpoints](../../use-rest/asynchronous-web-endpoints.md) for more information.

### Request body

-  **templateId** (integer, required) – Email template ID as defined in the Admin under **Marketing** > _Communications_ > **Email Templates**.

-  **recipientEmail** (string, required) – The target email address. Must be a valid email format. Missing or empty values trigger a validation error.
-  **variables** (object, optional) – Key-value map injected into the template as an `UnstructuredArray`.

   If you are not using variables, pass an empty object or omit it. In the email template body and subject, use the variable syntax to reference a variable, for example `var order_id`. The subject also supports the same custom variables and syntax described in [Supported template scenarios](#supported-template-scenarios).

### Success response (HTTP 200)

The API returns HTTP 200 on successful send.

### Error responses

-  **HTTP 400 – Validation error**

   The integration must supply a valid `templateId` and `recipientEmail` for each request.

   -  `"message": "Invalid recipient email format"` – invalid or malformed recipient address
   -  `"message": "Recipient email is required."` – missing or empty `recipientEmail`
   -  `"message": "Template ID must be a positive integer."` – missing, zero, or invalid `templateId`

-  **HTTP 404 – Template not found**

   Example: `"message": "Email template with ID \"999\" does not exist."`

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
