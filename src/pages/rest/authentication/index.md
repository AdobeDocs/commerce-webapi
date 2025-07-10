---
title: Authentication in Adobe Commerce as a Cloud Service
description: Generate the IMS access token for admin user.
edition: saas
keywords:
  - REST
  - Integration
--- 
 
# Authentication in Adobe Commerce as a Cloud Service

In Adobe Commerce as a Cloud Service (SaaS), all REST API access requires authentication using Adobe's Identity Management Service (IMS). The legacy admin token method is not supported. Instead, you must use OAuth-based authentication.

This page provides an overview of the two supported authentication methods for admin-level API access:

## Authentication Options

- **User authentication (IMS)**
  - **When to use:** For scenarios where API operations must be performed with user-specific permissions, such as admin users logging in via a browser.
  - **How it works:** Uses the OAuth Authorization Code Grant flow, requiring user login and consent. The resulting access token reflects the permissions of the authenticated user.
  - [See the user authentication flow.](./user.md)

- **Server-to-server integration**
  - **When to use:** For automated, system-to-system integrations that do not require user interaction (e.g., background jobs, integrations, or scripts).
  - **How it works:** Uses the OAuth Client Credentials Grant flow, allowing secure, automated access to the API with the permissions granted to the integration.
  - For detailed instructions on setting up server-to-server integration, see [Create server-to-server integration](server-to-server.md).

## Security best practices

- Store tokens securely using encryption at rest.
- Implement proper token rotation procedures.
- Monitor token expiration and implement automatic refresh.
- Use HTTPS for all authentication requests.
- Validate state parameters to prevent CSRF attacks.
