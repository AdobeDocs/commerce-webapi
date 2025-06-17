---
title: Generate the IMS access token
description: In this tutorial you will generate the IMS access token for admin user which is necessary for Adobe Commerce as a Cloud Service REST API calls
keywords:
  - REST
  - Authentication
  - IMS
  - OAuth
--- 
 
# Generate the IMS access token

In Adobe Commerce as a Cloud Service (ACCS), you must use Adobe's Identity Management Service (IMS) for admin authentication. The traditional admin token generation method is not supported in ACCS environments. Instead, you must obtain an IMS access token through OAuth authentication.

This authentication method ensures that all API calls are performed within the context of the authenticated admin user's permissions, as defined in the ACCS.

## Authentication Options for Adobe Commerce as a Cloud Service

Adobe Commerce as a Cloud Service (ACCS) supports two primary authentication methods for admin-level API access:

### User Authentication (IMS)
Use this method when you need to authenticate on behalf of a specific admin user with user-specific permissions. This page covers the user authentication flow.

### Server-to-Server Integration
Use this method for automated system-to-system communication without user intervention. For detailed instructions on setting up server-to-server integration, see [Create server-to-server integration](create-accs-integration.md).

---

## Prerequisites

Before implementing IMS authentication, ensure you have:

- An active Adobe Commerce as a Cloud Service license
- Access to Adobe Developer Console for creating OAuth credentials
- A configured redirect URI where users will return after authentication
- A secure environment for token handling

## Step 1: Generate IMS credentials

1. Navigate to [Adobe Developer Console](https://developer.adobe.com/console)
2. Create or select a project that will house your authentication credentials
3. Add the **Adobe Commerce with Adobe ID** API to your project
4. Select your preferred OAuth 2 authentication type:
   - **Web App**: For applications with a backend server that can securely store client secrets
   - **Single-Page App (SPA)**: For browser-based JavaScript applications  
   - **Native App**: For device-native applications (iOS, Android, desktop)
5. Configure the allowed redirect URIs
6. Copy the Client ID and Client Secret
7. Securely save your credentials

## Step 2: Authorization flow

### Build authorization URL

Create an authorization URL to initiate the authentication process:

```
https://ims-na1.adobelogin.com/ims/authorize/v2?client_id={{client_id}}&redirect_uri={{redirect_uri}}&scope={{scopes}}&state=something&response_type=code
```

Replace the placeholders with your values:

- `{{client_id}}`: Your IMS client ID
- `{{redirect_uri}}`: Your configured redirect URI
- `{{scopes}}`: Required scopes (comma-separated):
  ```
  AdobeID,openid,email,profile,additional_info.roles,additional_info.projectedProductContext
  ```

### Handle authorization response

1. User completes authentication through Adobe's login interface
2. Browser redirects to your `redirect_uri`
3. Authorization code is included in URL parameters: `?code={{auth_code}}&state=something`
4. Extract the authorization code and verify the state parameter

## Step 3: Exchange authorization code for access token

Make a POST request to exchange the authorization code for an access token:

**Endpoint:**

`POST https://ims-na1.adobelogin.com/ims/token/v3`

**Headers:**

```
Authorization: Basic {{base64(client_id:client_secret)}}
Content-Type: application/x-www-form-urlencoded
```

**Payload:**

```
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

## Step 4: Use the access token

Use the access token in the Authorization header for all REST API calls:

**Example API Request:**

```
GET /rest/v1/products
Authorization: Bearer {ACCESS_TOKEN}
```

## Token refresh

Access tokens expire after a certain period (typically 24 hours). Use the refresh token to obtain a new access token:

**Endpoint:**

`POST https://ims-na1.adobelogin.com/ims/token/v3`

**Headers:**

```
Authorization: Basic {{base64(client_id:client_secret)}}
Content-Type: application/x-www-form-urlencoded
```

**Payload:**

```
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

## Security best practices

- Store tokens securely using encryption at rest
- Implement proper token rotation procedures
- Monitor token expiration and implement automatic refresh
- Use HTTPS for all authentication requests
- Validate state parameters to prevent CSRF attacks

### Verify this step

To verify your IMS access token is working correctly:

1. Make a test API call to `/rest/v1/store/storeConfigs` using your access token
2. If successful, you should receive store configuration data
3. If you receive a 401 Unauthorized error, verify your token and try refreshin

## Related Authentication Guides

- [User Authentication Guide](https://developer.adobe.com/commerce/services/cloud/guides/rest/authentication/user/) - Official Adobe documentation
- [Create server-to-server integration](create-accs-integration.md) - Complete guide for automated system integration
