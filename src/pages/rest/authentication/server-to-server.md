---
title: Server-to-Server authentication
description: Learn about Server-to-Server Authentication in Adobe Commerce as a Cloud Service.
keywords:
  - REST
edition: saas
---

# Server-to-server authentication

Server-to-Server Authentication provides a secure way for automated systems to interact with the Adobe Commerce as a Cloud Service REST API without user intervention. This authentication method is essential for background processes, scheduled tasks, and system integrations that need to operate independently of user sessions. Unlike user authentication, server-to-server authentication uses technical account credentials to obtain access tokens directly, making it ideal for headless commerce implementations and automated workflows.

## Prerequisites

Before implementing server-to-server authentication, you must have the following:

- An active Adobe Commerce as a Cloud Service license with API access enabled
- Access to Adobe Developer Console for creating I/O Management API credentials
- A properly configured service with appropriate security settings

## Authentication steps

### 1. Generate service credentials

To begin, create dedicated server-to-server credentials through the Adobe Developer Console. These credentials represent your service's identity and determine its access levels within the Adobe Commerce as a Cloud Service.

To obtain your credentials:

**Create server-to-Server credentials**

  1. Access the Adobe Developer Console and navigate to your project.
  1. Create a new project or use an existing one for your integration.
  1. Add the I/O Management API, which enables server-to-server authentication capabilities.

### 2. Token request flow

**Access token request**:

```http
POST https://ims-na1.adobelogin.com/ims/token/v3
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials
&client_id={{client_id}}
&client_secret={{client_secret}}
&scope=AdobeID,openid,email,profile,additional_info.roles,additional_info.projectedProductContext
```

### 3. Usage examples

**API request format**:

  ```http
  GET /rest/v1/products
  Authorization: Bearer <access_token>
  ```

### 4. Token management

- Token lifecycle
  1. Understand token expiration
  1. Plan the token renewal strategy
  1. Implement token rotation
- Automatic renewal
  1. Set up monitoring
  1. Implement renewal logic
  1. Handle failed renewals
- Error handling
  1. Network issues
  1. Authentication failures
  1. Rate limiting

## Next steps

Once you've configured authentication, see [Server-to-Server integration](../integration/index.md)for a practical step-by-step guide with code examples on how to implement this type of integration with the Adobe Commerce as a Cloud Service Rest API.

## Security considerations

- Credential storage
  1. Secure storage solutions
  1. Encryption requirements
  1. Access control
- Token management
  1. Token validation
  1. Token revocation
  1. Audit logging
- Access control
  1. IP restrictions
  1. Scope limitations
  1. Activity monitoring
