---
title: Authentication
description: Overview of authentication methods in web APIs.
edition: paas
keywords:
  - REST
  - Security
---

# Authentication

<InlineAlert variant="info" slots="text"/>

This topic is for Platform-as-a-Service (PaaS) customers only. Adobe Commerce as a Cloud Service customers must refer to [REST Authentication](./index.md) for details on authentication.

For practical implementation guides for Adobe Commerce as a Cloud Service (SaaS), see:

* [Create server-to-server integration](./server-to-server.md) - Complete guide for automated system integration
* [Generate the IMS access token](./user.md) - User authentication guide

Adobe Commerce and Magento Open Source allow developers to define web API resources and their permissions in the `webapi.xml` configuration file. See [Services as Web APIs](https://developer.adobe.com/commerce/php/development/components/web-api/services/).

Before you can make web API calls, you must authenticate your identity and have necessary permissions (authorization) to access the API resource. Authentication allows the application to identify the caller's user type. A user's (administrator, integration, customer, or guest) access rights determine an API call's resource accessibility.

## Authentication types

The following sections describe tips about which type of authentication method you should use depending on your use case.

### Token based (Bearer Authentication)

This method is a good choice for authenticating customers and Admin users in third-party applications that need to make authorized API calls to the store.

*  **Customer Token**—Use this token in applications to authorize specific customer and query data related to that customer (for example, customer details, cart, and orders).
*  **Admin Token**—Use this token in applications to authorize an Admin user and access Admin-related APIs.

[Request a token](./gs-authentication-token.md#request-a-token) and then include it in [future requests](./gs-authentication-token.md#use-the-token-in-a-web-api-request).

<InlineAlert variant="info" slots="text"/>

You should use this type of authentication mechanism over HTTPS.

### Integration (Oauth)

This method is a good choice for integrating with a third-party system that supports OAuth 1.0a.

After activating an integration (self activated), you can use the generated consumer key, consumer secret, access token, and access token secret to provide third-party systems access to Commerce Store resources. You do not need to make calls to the `/oauth/token/request` or `/oauth/token/access` endpoints to exchange tokens.

If a third-party system provides endpoints, you can use them to [activate an integration](./gs-authentication-oauth.md#activate-an-integration) and link your account. After completing the activation process, a third-party service can use the consumer key, consumer secret, access token, and access token secret provided by Commerce during activation to make API calls.

#### Related topics

Proceed to the authentication method for your preferred client:

*  Mobile application. [Token-based authentication](./token.md).

*  Third-party application. [OAuth-based authentication](./oauth.md).

*  JavaScript widget on the Admin or storefront. [Session-based authentication](./session.md).

*  [Extension attribute authentication](https://developer.adobe.com/commerce/php/development/components/attributes/)

*  [Configure services as web APIs](https://developer.adobe.com/commerce/php/development/components/web-api/services/)

*  [Create an ACL rule](https://developer.adobe.com/commerce/php/tutorials/backend/create-access-control-list-rule/)
