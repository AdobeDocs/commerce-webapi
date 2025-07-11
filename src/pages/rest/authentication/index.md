---
title: Authentication in Adobe Commerce as a Cloud Service
description: Learn about REST API authentication in Adobe Commerce as a Cloud Service.
edition: saas
keywords:
  - REST
  - Integration
---

# REST Authentication in Adobe Commerce as a Cloud Service

Adobe Commerce as a Cloud Service REST API authentication is handled through Adobe's Identity Management System (IMS) through standardized OAuth 2 protocols. This authentication system supports both interactive user-based workflows and automated server-to-server integrations, ensuring secure and appropriate access for different use cases. The traditional admin and integration token generation methods is not supported in SaaS environments. Instead, you must obtain an IMS admin token through OAuth authentication.

The following types of authentication are available for Adobe Commerce as a Cloud Service REST APIs:

- [Server-to-server authentication](#server-to-server-authentication) - Choose this flow for automated, system-to-system integrations that do not require user interaction, such as background jobs, integrations, and scripts.

- [User authentication](#user-authentication) - Choose this flow when API operations must be performed by an admin user according to their permissions, such as when actions must be attributed to a specific admin user.

See [Authentication](../../get-started/authentication/index.md) in the _Get Started_ guide for information about the authentication methods available on other versions of Adobe Commerce.

## Server-to-server authentication

Server-to-server authentication enables automated systems to interact with Commerce APIs without user intervention. This method uses technical account credentials to obtain access tokens directly, making it perfect for background processes, scheduled tasks, and system integrations that need to operate independently.

Key benefits of this approach include:

- Non-interactive authentication for automated processes
- Obtain a new access token as needed using client credentials
- Ideal for headless and backend integrations
- Support for system-wide permissions and access control

For detailed steps, see the [server-to-server Authentication Guide](./server-to-server.md).

## User authentication

The user authentication flow provides a secure, OAuth-based workflow where users authenticate through Adobe IMS, ensuring credentials are never directly handled by your application.

Key benefits of this approach include:

- Direct integration with Adobe's secure authentication interface
- Automatic handling of user permissions based on Adobe Commerce Admin role
- Support for interactive workflows in admin applications
- Token refresh capabilities for extended sessions
- Compliance with OAuth 2 security standards

For detailed steps, see the [User Authentication Guide](./user.md).

## Getting started

The following concepts apply to both authentication flows and are important for successful integration:

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
