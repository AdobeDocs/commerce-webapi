---
title: Authentication in Adobe Commerce as a Cloud Service
description: Generate the IMS access token for admin user.
edition: saas
keywords:
  - REST
  - Integration
--- 
 
# Authentication in Adobe Commerce as a Cloud Service

import ACCSEarlyAccess from '/src/_includes/accs/accs-early-access.md'

<ACCSEarlyAccess />

In Adobe Commerce as a Cloud Service (SaaS), you must use Adobe's Identity Management Service (IMS) for admin authentication. The traditional admin token generation method is not supported in SaaS environments. Instead, you must obtain an IMS admin token through OAuth authentication.

This authentication method ensures that all API calls are performed within the context of the authenticated admin user's permissions, as defined in the ACCS.

<InlineAlert variant="note" slots="text"/>

See [Authentication](../../get-started/authentication/index.md) in the _Get Started_ guide for information about the authentication methods available on other versions of Adobe Commerce.

## Authentication Options for Adobe Commerce as a Cloud Service

Adobe Commerce as a Cloud Service (ACCS) supports two primary authentication methods for admin-level API access:

_ **User authentication (IMS)** - Use this method when you need to authenticate on behalf of a specific admin user with user-specific permissions. This page covers the user authentication flow.

- **Server-to-server integration** - Use this method for automated system-to-system communication without user intervention. For detailed instructions on setting up server-to-server integration, see [Create server-to-server integration](server-to-server.md).

## Security best practices

- Store tokens securely using encryption at rest.
- Implement proper token rotation procedures.
- Monitor token expiration and implement automatic refresh.
- Use HTTPS for all authentication requests.
- Validate state parameters to prevent CSRF attacks.

## Generate an IMS access token

Before implementing IMS authentication, ensure you have:

- An active Adobe Commerce as a Cloud Service license.
- Access to Adobe Developer Console for creating OAuth credentials.
- A configured redirect URI where users will return after authentication.
- A secure environment for token handling.

### Step 1: Generate IMS credentials

1. Navigate to Adobe Developer Console.
1. Create or select a project that will house your authentication credentials.
1. Add the **Adobe Commerce with Adobe ID** API to your project.
1. Select your preferred OAuth 2 authentication type:
   - **Web App**: For applications with a backend server that can securely store client secrets
   - **Single-Page App (SPA)**: For browser-based JavaScript applications
   - **Native App**: For device-native applications (iOS, Android, desktop)
1. Configure the allowed redirect URIs.
1. Copy the client ID and client secret.
1. Securely save your credentials.

### Step 2: Implement the authorization flow and response

To authenticate a user and obtain an authorization code, follow these steps:

1. Create an authorization URL to initiate the authentication process. The URL has the following format:

   ```http
   https://ims-na1.adobelogin.com/ims/authorize/v2?client_id={{client_id}}&redirect_uri={{redirect_uri}}&scope={{scopes}}&state=something&response_type=code
   ```

  Replace the placeholders with your values:
  
  - `{{client_id}}`: Your IMS client ID
  - `{{redirect_uri}}`: Your configured redirect URI
  - `{{scopes}}`: A comma-separated list of required scopes, such as `AdobeID,openid,email,profile,additional_info.roles,additional_info.projectedProductContext`

1. Handle the authorization response. When the user completes authentication through Adobe's login interface, the browser redirects to your `redirect_uri`. The authorization code is included in URL parameters:

  `?code={{auth_code}}&state=something`
  
  Extract the authorization code and verify the state parameter

### Step 3: Exchange the authorization code for an access token

Make a POST request to exchange the authorization code for an access token:

**Endpoint:**

`POST https://ims-na1.adobelogin.com/ims/token/v3`

**Headers:**

```text
Authorization: Basic {{base64(client_id:client_secret)}}
Content-Type: application/x-www-form-urlencoded
```

**Payload:**

```text
code={{auth_code}}&grant_type=authorization_code
```

**Response:**

```json
{
    "access_token": "{ACCESS_TOKEN}",
    "refresh_token": "{REFRESH_TOKEN}",
    "sub": "A0BC123D4CD449CA0A494133@a12b34cd5b5b7e0e0a494004",
    "id_token": "{ID_TOKEN}",
    "token_type": "bearer",
    "expires_in": 86399
}
```

### Step 4: Use the access token

Use the access token in the Authorization header for all Commerce REST API calls, such as retrieving a list of products.

**Endpoint:**

`GET https://<server>.api.commerce.adobe.com/<tenant-id>/v1/products`

**Headers:**

```text
Authorization: Bearer {ACCESS_TOKEN}
```

## Token refresh

Access tokens expire after a certain period (typically 24 hours). Use the refresh token to obtain a new access token:

**Endpoint:**

`POST https://ims-na1.adobelogin.com/ims/token/v3`

**Headers:**

```text
Authorization: Basic {{base64(client_id:client_secret)}}
Content-Type: application/x-www-form-urlencoded
```

**Payload:**

```json
grant_type=refresh_token&refresh_token={{refresh_token}}
```

**Response:**

```json
{
    "access_token": "{ACCESS_TOKEN}",
    "refresh_token": "{REFRESH_TOKEN}",
    "expires_in": 86399,
    "token_type": "bearer"
}
```
