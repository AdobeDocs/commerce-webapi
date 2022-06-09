---
title: Authentication | Getting Started with Web APIs
description: Overview of authentication methods in web APIs.
---

# Authentication

Adobe Commerce and Magento Open Source allow developers to define web [API](https://glossary.magento.com/api) resources and their permissions in the `webapi.xml` configuration file. See [Services as Web APIs](https://developer.adobe.com/commerce/php/development/components/web-api/services/).

Before you can make [web API](https://glossary.magento.com/web-api) calls, you must authenticate your identity and have necessary permissions (authorization) to access the API resource. Authentication allows the application to identify the caller's user type. A user's (administrator, integration, customer, or guest) access rights determine an API call's resource accessibility.

## Accessible resources

The list of resources that you can access depends on your user type. All customers have the same permissions, and as a result the same resources accessible. The preceding statement is true for guest users as well.
Each administrator or integration user can have a unique set of permissions which is configured in the [Admin](https://glossary.magento.com/magento-admin).
Permissions required to access particular resource are configured in the `webapi.xml` file. This table lists the resources that each user type can access:

User type | Accessible resources (defined in webapi.xml)
--- | ---
Administrator or Integration | Resources for which administrators or integrators are authorized. For example, if administrators are authorized for the `Magento_Customer::group` resource, they can make a `GET /V1/customerGroups/:id` call.
Customer | Resources with `anonymous` or `self` permission
Guest user | Resources with `anonymous` permission

## Relationship between acl.xml and webapi.xml

The `acl.xml` file defines the access control list (ACL) for a given [module](https://glossary.magento.com/module). It defines the available set of permissions to access resources.

All `acl.xml` files across all modules are consolidated to build an ACL tree, which is used to select allowed [Admin](https://glossary.magento.com/admin) role resources or third-party integration access (**System** > **Extension** > **Integration** > **Add New Integration** > **Available APIs**).

### Sample customer acl.xml

For example, account management, customer configuration, and customer group resource permissions are defined in the Customer module's [`acl.xml`](https://github.com/magento/magento2/tree/2.4/app/code/Magento/Customer/etc/acl.xml).

When a developer creates the Web API configuration file (`webapi.xml`), the permissions defined in acl.xml are referenced to create access rights for each API resource.

### Sample (truncated) customer webapi.xml

```xml
<routes xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Webapi:etc/webapi.xsd">
    <!-- Customer Group -->
    <route url="/V1/customerGroups/:id" method="GET">
        <service class="Magento\Customer\Api\GroupRepositoryInterface" method="getById"/>
        <resources>
            <resource ref="Magento_Customer::group"/>
        </resources>
    </route>
............
.......
.....
    <!-- Customer Account -->
    <route url="/V1/customers/:customerId" method="GET">
        <service class="Magento\Customer\Api\CustomerRepositoryInterface" method="getById"/>
        <resources>
            <resource ref="Magento_Customer::customer"/>
        </resources>
    </route>
    <route url="/V1/customers" method="POST">
        <service class="Magento\Customer\Api\AccountManagementInterface" method="createAccount"/>
        <resources>
            <resource ref="anonymous"/>
        </resources>
    </route>
    <route url="/V1/customers/:customerId" method="PUT">
        <service class="Magento\Customer\Api\CustomerRepositoryInterface" method="save"/>
        <resources>
            <resource ref="Magento_Customer::manage"/>
        </resources>
    </route>
    <route url="/V1/customers/me" method="PUT">
        <service class="Magento\Customer\Api\CustomerRepositoryInterface" method="save"/>
        <resources>
            <resource ref="self"/>
        </resources>
        <data>
            <parameter name="customer.id" force="true">%customer_id%</parameter>
        </data>
    </route>
..........
.....
...
```

For example, in the preceding `webapi.xml` for the customerGroups resource, only a user with `Magento_Customer::group` authorization can `GET /V1/customerGroups/:id`. On the other hand, you can create a customer using `POST /V1/customers` anonymously (or by a guest).

[Authorization](https://glossary.magento.com/authorization) is granted to either an administrator (or an integration) defined in the Admin with the customer group selected as one of the resources in the ACL tree.

<InlineAlert variant="info" slots="text"/>

<div>

A guest or anonymous is a special permission that doesn't need to be defined in `acl.xml` (and will not show up in the permissions tree in the Admin). It just indicates that the current resource in `webapi.xml` can be accessed without the need for authentication.

<br></br>

Similarly, self is a special access used if you already have an authenticated session with the system. Self access enables a user to access resources they own. For example, `GET /V1/customers/me` fetches the logged-in customer's details. This is typically useful for JavaScript-based widgets.

</div>

## Web API clients and authentication methods

You must use a client, such as a mobile application or an external batch job, to access services using web APIs.

Each type of client has a preferred authentication method. To authenticate, use the authentication method for your preferred client:

### Mobile application authentication

Registered users use [token-based authentication](./authentication/gs-authentication-token) to make web API calls using a mobile application. The token acts like an electronic key that provides access to the API(s).

1. As a registered account user, you request a token from the Magento token service at the endpoint that is defined for your user type.

1. The token service returns a unique authentication token in exchange for a username and password for an admin or customer account.

1. To prove your identity, specify this token in the `Authorization` request header on web API calls.

### Third-party application authentication

Third-party applications use [OAuth-based authentication](./authentication/gs-authentication-oauth/) to access the web APIs.

1. The third-party Integration registers with Adobe Commerce.

1. Merchants authorize extensions and applications to access or update store data.

### JavaScript widget authentication (storefront or Admin)

Registered users use [session-based authentication](./authentication/gs-authentication-session) to log in to the storefront or Admin.

A session is identified by a cookie and time out after a period of inactivity. Additionally, you can have a session as a guest user without logging in.

1. As a customer, you log in to the storefront with your customer credentials. As an administrator, you log in to the Admin with your administrator credentials.

1. The web API framework identifies you and controls access to the requested resource.

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

*  Mobile application. [Token-based authentication](./gs-authentication-token.md).

*  Third-party application. [OAuth-based authentication](./gs-authentication-oauth.md).

*  JavaScript [widget](https://glossary.magento.com/widget) on the Admin or [storefront](https://glossary.magento.com/storefront). [Session-based authentication](./gs-authentication-session.md).

*  [Extension attribute authentication](https://developer.adobe.com/commerce/php/development/components/attributes/)

*  [Configure services as web APIs](https://developer.adobe.com/commerce/php/development/components/web-api/services/)

*  [Create an ACL rule](https://devdocs.magento.com/guides/v2.4/ext-best-practices/tutorials/create-access-control-list-rule.html)
