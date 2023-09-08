---
title: Getting Started with Adobe Commerce Web APIs
description: A high-level overview of Magento web APIs.
keywords:
  - GraphQL
  - REST
---

# Getting started with Adobe Commerce web APIs

The Adobe Commerce and Magento Open Source web API framework provides integrators and developers the means to use web services that communicate with the application. Key features include:

*  Support for [GraphQL](../graphql/), [REST](https://developer.adobe.com/commerce/webapi/rest/) (Representational State Transfer) and [SOAP](soap-web-api-calls.md) (Simple Object Access Protocol).

*  Three types of [authentication](./authentication/index.md):
   *  Third-party applications authenticate with [OAuth 1.0a](./authentication/gs-authentication-oauth.md).
   *  Mobile applications authenticate using [tokens](./authentication/gs-authentication-token.md).
   *  Administrators and customers are authenticated with [login credentials](./authentication/gs-authentication-token.md).

*  All accounts and integrations are assigned resources that they have access to. The API framework checks that any call has the authorization to perform the request.

*  Any native or third-party service can be [configured as a web API](https://developer.adobe.com/commerce/php/development/components/web-api/services/) with a few lines of xml. To configure a web API, you define XML elements and attributes in a `webapi.xml` configuration file. If a service is not defined in a configuration file, it will not be exposed at all.

*  The framework is based on the CRUD (create, read, update, delete) & search model. The system does not currently support webhooks.

*  The framework supports field filtering of web API responses to conserve mobile bandwidth.

*  Integration style web APIs enable a single web API call to run multiple services at once for a more efficient integration.  An example of this behavior can be seen in the Catalog where one web API call can create a product. If your payload includes the `stock_item` and `media_gallery_entries` objects, then the framework will also create the product's inventory & media in that one API call.

## What can I do with the web APIs?

The APIs can be used to perform a wide array of tasks. For example:

*  Create a shopping app. This can be a traditional app that a user downloads on a mobile device. You could also create an app that an employee uses on a showroom floor to help customers make purchases.

*  Integrate with CRM (Customer Relationship Management) or ERP (Enterprise Resource Planning) backend systems, such as Salesforce or Xero.

*  Integrate with a CMS (Content Management System). Currently, content tagging is not supported.

*  Create JavaScript widgets in the storefront or on the Admin panel. The widget makes AJAX calls to access services.

## How do I get started?

You must register a web service on Admin. Use the following general steps to set up Magento to enable web services.

1. If you are using token-based authentication, create a web services user on Admin by selecting **System** > Permission > **All Users** > Add New User. (If you are using session-based or OAuth authentication, you do not need to create the new user in the Admin.)
1. Create a new integration on Admin. To create an integration, click **System** > Extensions > **Integration** > Add New Integration**. Be sure to restrict which resources the integration can access.
1. Use a REST or SOAP client to configure authentication.

See the User Guide for more information.
