---
title: Generate a local REST reference
description: Generate a local schema for testing and return relevant information
--- 
import * as Vars from '../../data/vars.js';

# Generate a local REST reference

The REST documentation on the Adobe Commerce devdocs [website](https://glossary.magento.com/website) is generated with [Swagger UI](http://swagger.io) using a schema derived from the latest build of Commerce. However, the REST [API](https://glossary.magento.com/api) documentation on devdocs is static in that the Commerce Developers website is not running an instance of Commerce, and there is no live data.

Commerce provides two ways to get detailed information about the structure of the REST endpoints, as described below.

## Generate a full REST reference locally

<InlineAlert variant="info" slots="text"/>

For improved application security, starting from Commerce 2.4.4, Swagger UI does not function if the operation mode is set to Production. It only functions in Developer mode.
See how to switch operation mode [here](https://devdocs.magento.com/guides/v2.4/config-guide/cli/config-cli-subcommands-mode.html#change-to-developer-mode).

The Swagger UI is installed automatically on your server. As a result, you can generate live REST API documentation that can include <Vars.sitedatavaree/> modules, third-party modules, and [extension](https://glossary.magento.com/extension) attributes that have been installed on your system. To view this documentation, go to:

`http://<commerce_host>/swagger`

To view the Swagger documentation for a specific store view, use this URL:

 `http://<commerce_host>/swagger?store=<store_code>`

 The value of `store_code` must be one of the following:

-  `default`
-  The assigned store code
-  `all`. This value only applies to the [CMS](https://glossary.magento.com/cms) and Product modules. If this value is specified, the API call affects all the merchant's stores.

By default, Commerce returns documentation for resources available to anonymous users across all stores. If you specify a valid customer or admin token in the `api_key` text box in the upper right corner, Swagger returns documentation for all the endpoints the user has access to. To generate an API key, call the `POST /V1/integration/customer/token` endpoint or a 2FA endpoint such as `POST /V1/tfa/provider/google/authenticate` with the appropriate payload, as directed in [Token-based authentication](/get-started/authentication/gs-authentication-token).

The generated Swagger documentation provides the capability to test REST requests. A user can enter a sample request, then press the **Try it out!** button, and Swagger returns information such as a `curl` command, a request URL, a response body, a response code, and the response header. The **Try it out!** button will not work unless a bearer [authorization](https://glossary.magento.com/authorization) token has been specified.

### REST reference for Asynchronous API

You can also use Swagger to generate live asynchronous API REST documentation. To create this documentation, add the `?type=async` parameter to the standard Swagger URL:

`http://<commerce_host>/swagger?type=async`

Swagger returns information about all resources available for asynchronous REST APIs.

## Return the JSON schema for one or more services

You can use a REST client to generate the JSON schema for one or more services. In the client, set the method to `GET` and the [URL](https://glossary.magento.com/url) to

`http://<commerce_host>/rest/<store_code>/schema?services=<serviceName1,serviceName2,..>`

For example:

`http://<commerce_host>/rest/default/schema?services=catalogProductRepositoryV1`

To return information about all services:

`http://<commerce_host>/rest/<store_code>/schema`

<InlineAlert variant="info" slots="text"/>

You must specify an authorization token for an [admin](/get-started/authentication/gs-authentication-token) for more information.

## Return the complete JSON schema

To return the complete JSON schema, specify the `?services=all` parameter in the URL. The default `store_code` is `all`, but you can also specify `default` or a store code defined on the system. For example: `http://<commerce_host>/rest/default/schema?services=all`

The base URL for returning the asynchronous schema is `http://<commerce_host>/rest/<store_code>/async/schema`.

## Security

By default, the `/swagger` endpoint is open on Commerce instances. Leaving it open on a public instance could potentially expose system information that should not be readable.

To close off the `/swagger` endpoint, disable the following modules:

-  Swagger
-  SwaggerWebapi
-  SwaggerWebapiAsync

To ensure proper functionality, always test Commerce instances after disabling modules.

You may also use web server rewrite rules to redirect users trying to access the endpoint:

-  [nginx rewrite module](http://nginx.org/en/docs/http/ngx_http_rewrite_module.html#rewrite)
-  [apache mod_rewrite](https://httpd.apache.org/docs/2.4/rewrite/)

### Related topics

[Restricting access to anonymous web APIs](/rest/anonymous-api-security/)
[Token-based authentication](/get-started/authentication/gs-authentication-token)
