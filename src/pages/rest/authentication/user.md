---
title: User authentication
description: Learn about REST API authentication in Adobe Commerce as a Cloud Service.
keywords:
  - REST
edition: saas
noIndex: true
---

# User authentication

import ACCSEarlyAccess from '/src/_includes/accs/accs-early-access.md'

<ACCSEarlyAccess />

User Authentication with Adobe's Secure User Sign-In (SUSI) interface enables Commerce administrators to authenticate through Adobe's Identity Management Service (IMS). This authentication flow is specifically designed for scenarios where API operations need to be executed with user-specific permissions. When using this method, all API calls are performed within the context of the authenticated admin user's permissions, as defined in the Adobe Admin Console.

Adobe provides three types of OAuth credentials for User Authentication with a different application architectures:

1. **OAuth Web App**:  For applications with a backend server that can securely store client secrets
1. **OAuth Single Page App (SPA)**: For browser-based JavaScript applications
1. **OAuth Native App**: For device-native applications (iOS, Android, desktop)

Each credential type has specific security considerations and implementation requirements. For detailed implementation guidance, see the [User Authentication Guide](https://developer.adobe.com/developer-console/docs/guides/authentication/UserAuthentication/implementation/).

## Prerequisites

Before implementing user authentication, ensure you have:

- An active Adobe Commerce as a Cloud Service license with access to the Admin Console
- Access to Adobe Developer Console for creating OAuth credentials using Adobe Commerce with Adobe ID API
- A configured redirect URI where users will return after authentication
- A secure environment for token handling

## Implementation steps

### 1. Generate IMS credentials

To begin the implementation, you need to obtain IMS client credentials through the Adobe Developer Console. This process involves creating a new project and configuring OAuth authentication specifically for Adobe Commerce with Adobe ID integration.

The Adobe Developer Console provides a straightforward workflow:

- Accessing Adobe Developer Console:

  1. Navigate to [Adobe Developer Console](https://developer.adobe.com/console).
  1. Create or select a project that will house your authentication credentials.
  1. Add the **Adobe Commerce with Adobe ID** API to your project to enable Commerce-specific authentication.

- Creating an OAuth User authentication project:

  1. Select the preferred OAuth 2 authentication type: **Web App/Single-Page App/Native App**.
  1. Configure the allowed redirect URIs.
  1. Copy the Client ID and Client Secret.
  1. Make a note of the authorized redirect URIs.
  1. Securely save your credentials.

### 2. Authorization flow

**Building authorization URL**

The authorization URL is used to initiate the authentication process. It includes the client ID, redirect URI, scopes, and a state parameter for security. Here is the example for a web app:

```html
https://ims-na1.adobelogin.com/ims/authorize/v2?client_id={{client_id}}&redirect_uri={{redirect_uri}}&scope={{scopes}}&state=something&response_type=code
```

Replace the following placeholders with your values:

- `{{client_id}}`: IMS client ID
- `{{redirect_uri}}`: Configured redirect URI
- `{{scopes}}`: Coma-separated list of required scopes:

  ```bash
  AdobeID,openid,email,profile,additional_info.roles,additional_info.projectedProductContext`
  ```

**Handling authorization response**

- Redirect handling:
  1. User completes authentication
  1. Browser redirects to your `redirect_uri`
  1. Authorization code is included in URL parameters
- Authorization code extraction:
  1. Parse code from URL: `?code={{auth_code}}&state=something`
  1. Verify state parameter matches original request
- Error handling:
  1. Check for error parameters in redirect
  1. Implement appropriate error messaging
  1. Provide retry mechanisms

### 3. Token exchange

- Authorization code to access token:
  1. Make a `POST` request to the token endpoint.

<CodeBlock slots="heading, code" repeat="2" languages="HTTP, JSON" />

#### Request

```http
POST https://ims-na1.adobelogin.com/ims/token/v3
Authorization: Basic {{base64(client_id:client_secret)}}
Content-Type: application/x-www-form-urlencoded

code={{auth_code}}&grant_type=authorization_code
```

#### Response:

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

- Token refresh process:
  1. Monitor token expiration.
  1. Use refresh token to obtain new access token.

<CodeBlock slots="heading, code" repeat="2" languages="HTTP, JSON" />

#### Request

```http
POST https://ims-na1.adobelogin.com/ims/token/v3
Authorization: Basic {{base64(client_id:client_secret)}}
Content-Type: application/x-www-form-urlencoded

grant_type=refresh_token&refresh_token={{refresh_token}}
```

#### Response

```json
{
"access_token": "{ACCESS_TOKEN}",
"refresh_token": "{REFRESH_TOKEN}",
"expires_in": 86399,
"token_type": "bearer"
}
```

  1. Update the stored tokens.

- Token storage best practices:

  1. Secure storage methods
  1. Encryption at rest
  1. Token rotation procedures

## Usage examples

- API request format

  ```http
  GET /rest/v1/products
  Authorization: Bearer <access_token>
  ```

- Error handling
  1. Token expiration handling
  1. Invalid token responses
  1. Scope-related errors
- Token refresh flow
  1. Detecting expired tokens
  1. Automatic refresh implementation
  1. Session management
