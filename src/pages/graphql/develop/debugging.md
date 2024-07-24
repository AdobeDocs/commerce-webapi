---
title: Debugging GraphQL queries
description: Learn how to use PhpStorm and Xdebug to debug GraphQL API queries.
contributor_name: Atwix
contributor_link: https://www.atwix.com/
keywords:
  - GraphQL
---

# Debugging GraphQL queries

This topic provides recommendations on how to debug GraphQL requests.

## Debugging with PhpStorm and Xdebug

When [using GraphiQL](../index.md#how-to-access-graphql) or any other client for testing GraphQL queries, you might need to debug the request processing.
You can use Xdebug for debugging the PHP execution of a GraphQL query just as you would for other HTTP requests.
To start debugging, add the `?XDEBUG_SESSION_START=PHPSTORM` parameter to the endpoint URL.
The following example shows how to establish a connection between Xdebug and PhpStorm IDE.

```http
http://<magento2-3-server>/graphql?XDEBUG_SESSION_START=PHPSTORM
```

You can also enable an Xdebug connection for a particular request by setting the corresponding header parameter.

```text
Cookie: XDEBUG_SESSION=PHPSTORM
```

As a result, Xdebug within the PHP execution attempts to make a connection to an IDE. If the IDE is listening, it will give the instructions to Xdebug about breakpoints and other relevant information.

## Related Topics

*  [GraphQL request headers](../usage/headers.md)
*  [Exception handling](exceptions.md)
