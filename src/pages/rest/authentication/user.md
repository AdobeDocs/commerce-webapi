---
title: User authentication
description: Learn about User Authentication for REST API in Adobe Commerce as a Cloud Service.
edition: saas
keywords:
  - REST
  - Integration
--- 
 
# User Authentication

**When to use:** Choose this flow when API operations must be performed by an admin user according to their permissions (for example, when actions must be attributed to a specific admin).

User Authentication enables Commerce Administrators to authenticate through Adobe's Identity Management System (IMS). This authentication flow is specifically designed for scenarios where API operations need to be executed with user-specific permissions. When using this method, all API calls are performed within the context of the authenticated admin user's permissions, as defined in the Adobe Admin Console.

Adobe provides three types of OAuth credentials for User Authentication with different application architectures:

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
- `{{scopes}}`: Comma-separated list of required scopes:

  ```bash
  AdobeID,openid,email,profile,additional_info.roles,additional_info.projectedProductContext,commerce.accs
  ```

**Handling authorization response**

Redirect handling:

1. User completes authentication
1. Browser redirects to your `redirect_uri`
1. Authorization code is included in URL parameters

Authorization code extraction:

1. Parse code from URL: `?code={{auth_code}}&state=something`
1. Verify state parameter matches original request

Error handling:

1. Check for error parameters in redirect
1. Implement appropriate error messaging
1. Provide retry mechanisms

### 3. Token exchange

Authorization code to access token:

1. Make a `POST` request to the token endpoint.

   **Request**:
  
   ```http
   POST https://ims-na1.adobelogin.com/ims/token/v3
   Authorization: Basic {{base64(client_id:client_secret)}}
   Content-Type: application/x-www-form-urlencoded
   
   code={{auth_code}}&grant_type=authorization_code
   
   ```
  
   **Response**:
  
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

## Token storage best practices

- Secure storage methods
- Encryption at rest
- Token rotation procedures

## Usage examples

Here is a real-world example of making an authenticated API request after obtaining an access token:

```http
GET /V1/products
Authorization: Bearer <access_token>
```

- Ensure you replace `<access_token>` with the actual token received from the token exchange step.
- Handle token expiration and refresh as described below.

## Troubleshooting

### Error handling

- Token expiration handling: Detect when a token has expired and trigger a refresh.
- Invalid token responses: Handle 401/403 errors by prompting for re-authentication or refreshing the token.
- Scope-related errors: Ensure all required scopes are included in your authorization request.

### Token refresh flow

- Detecting expired tokens: Monitor API responses and token expiry time.
- Automatic refresh implementation: Use the refresh token to obtain a new access token before the current one expires (if refresh tokens are supported).
- Session management: Ensure user sessions are managed securely and tokens are rotated as needed.
