---
title: User authentication
description: Learn about User Authentication for REST API in Adobe Commerce as a Cloud Service.
edition: saas
keywords:
  - REST
  - Integration
--- 
 
# User Authentication

Adobe Commerce as a Cloud Service (ACCS) supports user authentication for REST API access using the OAuth Authorization Code Grant flow. This method is intended for scenarios where API operations need to be executed with user-specific permissions (for example, admin users authenticating via browser login).

For most automated integrations and scripts, use the [server-to-server authentication flow](server-to-server.md) instead.

## How to obtain credentials (Adobe Developer Console)

To use user authentication, you first need to obtain OAuth credentials by adding the **Adobe Commerce with Adobe ID** API to your project in the Adobe Developer Console:

1. Navigate to the [Adobe Developer Console](https://developer.adobe.com/developer-console/docs/guides/getting-started).
2. Create or select a project for your integration.
3. Add the **Adobe Commerce with Adobe ID** API to your project.
4. Select your preferred OAuth 2 authentication type:
   - **Web App**: For applications with a backend server that can securely store client secrets
   - **Single-Page App (SPA)**: For browser-based JavaScript applications
   - **Native App**: For device-native applications (iOS, Android, desktop)
5. Configure the allowed redirect URIs.
6. Copy the client ID and client secret.
7. Securely save your credentials.

## How it works

1. **Redirect the user to Adobe login** using an authorization URL with your client ID, redirect URI, and required scopes.
2. **User logs in and authorizes** the application. Adobe redirects back to your redirect URI with an authorization code.
3. **Exchange the authorization code for an access token** using your client credentials.
4. **Use the access token** in the `Authorization: Bearer` header for REST API calls.

For step-by-step instructions and code samples, see the [main authentication guide](index.md).

> **Note:** For automated system-to-system integrations, use the [server-to-server authentication flow](server-to-server.md) instead.
