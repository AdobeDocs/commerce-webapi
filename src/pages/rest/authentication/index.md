---
title: Authentication in Adobe Commerce as a Cloud Service
description: Learn about REST API authentication in Adobe Commerce as a Cloud Service.
edition: saas
keywords:
  - REST
  - Integration
---

# REST Authentication in Adobe Commerce as a Cloud Service

Adobe Commerce as a Cloud Service REST API authentication is handled through Adobe's Identity Management System (IMS), providing secure access to Commerce functionality through standardized OAuth 2 protocols. This authentication system supports both interactive user-based workflows and automated server-to-server integrations, ensuring secure and appropriate access for different use cases.

See [Authentication](../../get-started/authentication/index.md) in the _Get Started_ guide for information about the authentication methods available on other versions of Adobe Commerce.

## Server-to-Server authentication

**When to use:** Choose this flow for automated, system-to-system integrations that do not require user interaction (e.g., background jobs, integrations, or scripts).

Server-to-Server authentication enables automated systems to interact with Commerce APIs without user intervention. This method uses technical account credentials to obtain access tokens directly, making it perfect for background processes, scheduled tasks, and system integrations that need to operate independently.

Key benefits of this approach include:

- Non-interactive authentication for automated processes
- Obtain a new access token as needed using client credentials
- Ideal for headless and backend integrations
- Support for system-wide permissions and access control

For detailed steps, see the [Server-to-Server Authentication Guide](./server-to-server.md).

## User authentication

**When to use:** Choose this flow when API operations must be performed by an admin user according to their permissions (for example, when actions must be attributed to a specific admin).

The User Authentication flow leverages Adobe's Secure User Sign-In (SUSI) interface to authenticate Commerce administrators. This method provides a secure, OAuth-based workflow where users authenticate through Adobe's login interface, ensuring credentials are never directly handled by your application.

Key benefits of this approach include:

- Direct integration with Adobe's secure authentication interface
- Automatic handling of user permissions based on Adobe Commerce Admin role
- Support for interactive workflows in admin applications
- Token refresh capabilities for extended sessions
- Compliance with OAuth 2 security standards

For detailed steps, see the [User Authentication Guide](./user.md).

---

The following concepts apply to both authentication flows and are important for successful integration:

## Getting started

- Prerequisites:
  - Adobe Commerce as a Cloud Service license
  - Adobe Developer Console access
  - Understanding of OAuth 2
- Environment preparation:
  - Development environment
  - Adobe Developer Console project configuration
  - API testing tools

## Access tokens

- Use the bearer token type for API authorization
- Include your access token in the Authorization header of REST API requests
- Familiarize yourself with token lifecycle management and renewal processes
- Review security considerations and best practices for token storage

## Scopes

The following permission scopes are required for Adobe Commerce as a Cloud Service REST API access:

- `AdobeID`
- `openid`
- `email`
- `profile`
- `additional_info.roles`
- `additional_info.projectedProductContext`
- `commerce.accs`
