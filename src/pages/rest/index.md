---
title: REST API Overview
description: Overview of the Adobe Commerce and Magento Open Source REST API documentation.
keywords:
  - REST
--- 
 
# REST API Overview

The REST API documentation describes the REST APIs that are available in Adobe Commerce (PaaS) and Adobe Commerce as a Cloud Service (SaaS).

The APIs can be used to perform a wide array of tasks. For example:

*  Create a shopping app. This can be a traditional app that a user downloads on a mobile device. You could also create an app that an employee uses on a showroom floor to help customers make purchases.

*  Integrate with CRM (Customer Relationship Management) or ERP (Enterprise Resource Planning) backend systems, such as Salesforce or Xero.

*  Integrate with a CMS (Content Management System). Currently, content tagging is not supported.

## Adobe Commerce

<Edition name="paas" />

[Adobe Commerce on Cloud](https://experienceleague.adobe.com/en/docs/commerce-on-cloud/user-guide/overview?lang=en), Adobe Commerce on-premises, and [Magento Open Source](https://experienceleague.adobe.com/docs/magento-open-source/user-guide/overview/overview.html?lang=en) all use the same REST API framework. The REST API documentation describes the REST APIs that are available in these versions of Adobe Commerce and Magento Open Source.

### Endpoints

Adobe Commerce provides a wide range of REST API endpoints that allow you to perform actions on behalf of Commerce administrators, customers, and guest shoppers. Integrations are also supported.

### Authentication

Adobe Commerce REST APIs support multiple [authentication methods](../get-started/authentication/index.md), including:

*  Third-party applications authenticate with [OAuth 1.0a](../get-started/authentication/gs-authentication-oauth.md).
*  Mobile applications authenticate using [tokens](../get-started/authentication/gs-authentication-token.md).
*  Administrators and customers are authenticated with [login credentials](../get-started/authentication/gs-authentication-token.md).

### URL structure

The URL for Adobe Commerce REST endpoints is structured as follows:

`https://<host>/rest/<store-view-code>/<endpoint>`

## Adobe Commerce as a Cloud Service

<Edition name="saas" />

The Adobe Commerce as a Cloud Service REST API serves as a critical tool for extending and integrating commerce functionalities, but the endpoints available differ significantly from the REST APIs for Adobe Commerce on Cloud and on-premises deployments.

The following key differences are important to consider when planning your REST API integrations with Adobe Commerce as a Cloud Service:

### Endpoints

Primarily the Cloud Service REST API differs in that it includes a smaller subset of endpoints. Specifically, the customer and guest REST APIs that are available in Adobe Commerce on Cloud and on-premises deployments are not available in Adobe Commerce as a Cloud Service. However, access to similar functionality remains available with the [GraphQL APIs](../graphql/index.md).

The [API reference](../reference/rest/saas.md) lists the available endpoints. -->

### Authentication

In previous versions of Adobe Commerce, you would use authentication tokens to authorize your requests to the REST API. In Adobe Commerce as a Cloud Service, you must use Adobe Identity Management Service (IMS) to [authenticate your requests](./authentication/index.md).

The authentication system supports both [interactive user-based workflows](./authentication/user.md) and automated [server-to-server integrations](./authentication/server-to-server.md), ensuring secure and appropriate access for different use cases. Both of these authentication methods require every request to be signed with an IMS Access Token.

### URL structure

In Adobe Commerce as a Cloud Service, REST endpoint URLs do not include `/rest` or the store view code. The store scope is specified via the `Store` HTTP header.

* Base format:

  `https://<server>.api.commerce.adobe.com/<tenant-id>/<endpoint>`

* Set the scope with the `Store` header:

  * Predefined values:

    * `Store: all` — Execute in the global scope
    * `Store: default` — Target the default store view (or use your specific store view code)

  * You can also pass any specific store view code: `Store: <store_view_code>`

The following `curl` command shows the request pattern:

```bash
curl --location 'https://<server>.api.commerce.adobe.com/<tenant-id>/<endpoint>' \
  --header 'Authorization: Bearer <token>' \
  --header 'Content-Type: application/json' \
  --header 'Store: <all | default | <store_view_code>>'
  ....
```
