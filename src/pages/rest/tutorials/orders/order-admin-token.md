---
title: Step 2. Get the admin token
description: In this step of the tutorial you will get the admin token
--- 
 
# Step 2. Get the admin token

Each step in this tutorial provides the following information:

**Endpoint:**

This section lists the HTTP verb and full path to the endpoint. The basic structure of a REST call in Adobe Commerce is

`<HTTP verb> http://<host>/rest/<scope>/<endpoint>`

where:

Element | Description
--- | ---
`HTTP verb` | One of `GET`, `POST`, `PUT`, or `DELETE`
`host` | The hostname or IP address (and optionally, port) of the Commerce installation.
`scope` | Specifies which store the call affects. In this tutorial, this value is `default`.
`endpoint` | The full URI (Uniform Resource Identifier) to the endpoint. These values always start with `/V1`. For example, `/V1/orders/4`.

**HTTP headers:**

This section indicates which key/value pairs you must specify in the HTTP headers. All calls require one or more HTTP headers.

**Payload:**

This section lists the information that is sent to Commerce. All payload samples are valid and can be copied and pasted into your calls, but you might need to change the `id` values that Commerce returns.

**Response:**

This section lists the information that Commerce sends to the REST client. These values are often referenced in other steps in the tutorial. The values Commerce returnsmight be different than the values listed in the examples provided in this tutorial.

### Get the admin authorization token

In a production environment, you would typically [create an integration](/get-started/create-integration) and supply the integration token with any REST call that requires admin privileges. The token allows Commerce to verify that the caller is authorized to access a system resource.

Here, we will supply an admin token instead. To get a token, you must have 2FA configured. This tutorial assumes that you are using Google Authenticator as your 2FA solution. The endpoint and payload will be different for other 2FA solutions. See [Two-Factor Authentication](https://developer.adobe.com/commerce/testing/functional-testing-framework/two-factor-authentication/) for more information.

Your request must specify the admin user's `username`, `password` and `otp` (one time password). The `otp` value is the six-digit authorization code that Google Authenticator generates.

By default, an admin token is valid for 4 hours. To change this value, log in to Admin and go to **Stores** > **Settings** > **Configuration** > **Services** > **OAuth** > **Access Token Expiration** > **Admin Token Lifetime (hours)**.

See [Token-based authentication](/get-started/authentication/gs-authentication-token) for more information about authorization tokens.

**Endpoint:**

`POST <host>/rest/<store_code>/V1/tfa/provider/google/authenticate`

**Headers:**

`Content-Type: application/json`

**Payload:**

```json
{
  "username": "admin",
  "password": "<admin-password>",
  "otp": "<otp-value>"
}
```

**Response:**

Commerce returnsthe admin's access token.

`5r8cvmpr11j6gmau8990rcj2qk7unh8i`

This token must be specified in the authorization header of every call that requires admin permissions.

### Verify this step

There are no additional verification steps. Tokens are not displayed in Admin.
