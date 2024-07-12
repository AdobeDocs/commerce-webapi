---
title: Session-Based Authentication
description: How to use session-based authentication in the web APIs.
keywords:
  - REST
  - Security
---

# Session-based authentication

As a customer, you log in to the storefront with your customer credentials. As an admin, you log in to the Admin with your admin credentials.

The web API framework uses your logged-in session information to verify your identity and authorize access to the requested resource.

Customers can access resources that are configured with `anonymous` or `self`  permission in the `webapi.xml` configuration file.

Admins can access resources that are assigned to their Admin profile.

<InlineAlert variant="info" slots="text"/>

The web API framework enables guest users to access resources that are configured with `anonymous` permission. Any user that the framework cannot authenticate through existing authentication mechanisms is considered a guest user.

For example, if a customer is logged in to the storefront and the JavaScript widget invokes the `self` API, details for the logged-in customer are fetched:

`GET /rest/V1/customers/me`

Similarly, if an admin is logged in to the Admin and the JavaScript widget invokes the `Magento_Customer::group` API, details for the logged-in admin are fetched. The web API framework establishes the identity of the admin user based on logged-in session information and authorizes access to the `Magento_Customer::group` resource.

<InlineAlert variant="warning" slots="text"/>

Admin session-based authentication is not currently possible for API endpoints.

The session based authentication functionality is restricted to Ajax calls. Direct browser requests cannot be made due to security vulnerabilities. A developer can create a custom storefront widget that can issue requests without additional authentication steps.

## Related topic

[Configure services as web APIs](https://developer.adobe.com/commerce/php/development/components/web-api/services/)
