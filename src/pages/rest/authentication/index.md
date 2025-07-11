---
title: Authentication in Adobe Commerce as a Cloud Service
description: Learn about REST API authentication in Adobe Commerce as a Cloud Service.
edition: saas
keywords:
  - REST
  - Integration
--- 
 
# REST Authentication in Adobe Commerce as a Cloud Service

Adobe Commerce as a Cloud Service REST API authentication is handled through Adobe's Identity Management System (IMS), providing secure access to Commerce functionality through standardized OAuth 2.0 protocols. This authentication system supports both interactive user-based workflows and automated server-to-server integrations, ensuring secure and appropriate access for different use cases.

See [Authentication](../../get-started/authentication/index.md) in the _Get Started_ guide for information about the authentication methods available on other versions of Adobe Commerce.

## User authentication with SUSI UI

The [user authentication](./user.md) flow leverages Adobe's Secure User Sign-In (SUSI) interface to authenticate Commerce administrators. This method is ideal when API operations need to be executed within the context of a specific admin user's permissions. The authentication process provides a secure, OAuth-based workflow where users authenticate through Adobe's login interface, ensuring credentials are never directly handled by your application.

Key benefits of this approach include:

- Direct integration with Adobe's secure authentication interface
- Automatic handling of user permissions based on Adobe Commerce Admin role
- Support for interactive workflows in admin applications
- Built-in token refresh capabilities for extended sessions
- Compliance with OAuth 2.0 security standards

## Server-to-server authentication

[Server-to-server authentication](./server-to-server.md) enables automated systems to interact with Commerce APIs without user intervention. This method uses technical account credentials to obtain access tokens directly, making it perfect for background processes, scheduled tasks, and system integrations that need to operate independently.

Key benefits of this approach include:

- Non-interactive authentication for automated processes
- Long-lived access tokens with configurable validity
- Simplified token management without refresh flows
- Ideal for headless and backend integrations
- Support for system-wide permissions and access control

## Common concepts

**Getting started**

- Prerequisites:
  - Adobe Commerce as a Cloud Service license
  - Adobe Developer Console access
  - Understanding of OAuth 2.0
- Environment preparation:
  - Development environment
  - Adobe Developer Console project configuration
  - API testing tools

For detailed implementation guides, see:

- [User Authentication Guide](./user.md)
- [Server-to-Server Authentication Guide](./server-to-server.md)

**Access tokens**

- Use the bearer token type for API authorization
- Include your access token in the Authorization header of REST API requests
- Familiarize yourself with token lifecycle management and renewal processes
- Review security considerations and best practices for token storage

**Scopes**

The following permission scopes are required for Adobe Commerce as a Cloud Service REST API access:

- `AdobeID`
- `openid`
- `email`
- `profile`
- `additional_info.roles`
- `additional_info.projectedProductContext`
- `commerce.accs`

These are provided as a comma-separated list when building your [authorization URL](./user.md#2-authorization-flow).

```bash
AdobeID,openid,email,profile,additional_info.roles,additional_info.projectedProductContext,commerce.accs
```
