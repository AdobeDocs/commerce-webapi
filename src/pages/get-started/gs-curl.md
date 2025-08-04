---
title: Use cURL to Run the Request
description: Explains how to use cURL.
edition: paas
keywords:
  - REST
---

# Using cURL to run requests

['cURL'](https://curl.haxx.se/) is a command-line tool that lets you transmit HTTP requests and receive responses from the command line or a shell script. It is available for Linux distributions, Mac OS X, and Windows.

To use cURL to run your REST web API call, use the cURL command syntax to construct the command.

To create the endpoint in the call, append the REST URI that you constructed in [Construct a request](./gs-web-api-request.md) to this URL:

`https://<HOST_OR_IP>/<BASE_INSTALL_DIR>/rest/`

To pass the customer data object in the POST call payload, specify a JSON or XML request body on the call.

For a complete list of cURL command options, see [curl.1 the man page](http://curl.haxx.se/docs/manpage.html).

The cURL examples in this guide use the following command-line options:

Option | Description
--- | ---
`-d` `-data` | Sends the specified data in a POST request to the HTTP server. Use this option to send a JSON or XML request body to the server.
`-H` `-header` | Specifies an extra HTTP header in the request. Precede each header with the `-H` option. You can specify any number of extra headers. For a list of common headers used in web API requests, see [HTTP headers](./gs-web-api-request.md#http-headers)
`-i` `-input` | Includes the HTTP header in the output.
`-s` `-silent` | Specifies silent or quiet mode, which makes cURL mute. Progress and error messages are suppressed.
`-T` `-upload-file` | Transfers the specified local file to the remote URL.
`-X` `-request` | Specifies the request method to use when communicating with the HTTP server. The specified request method is used instead of the default GET method.
