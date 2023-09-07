---
title: Use REST APIs
description: Overview of basic Magento REST API information.
---

# Using REST APIs

The Magento REST API defines a set of functions that a developer can use to perform requests and receive responses. These interactions are performed using the HTTP protocol.

The caller issues an HTTP request, which contains the following elements:

*  An HTTP header that provides authentication and other instructions
*  A verb, which can be one of GET, POST, PUT, or DELETE.
*  An endpoint, which is a Uniform Resource Indicator (URI) that identifies the server, the web service, and the resource being acted on.
*  The call payload, which is set of input parameters and attributes that you supply with the request.

Magento returns a response payload as well as an HTTP status code.

This guide introduces web API, REST, and cURL command concepts. It shows you how to authenticate and construct and run REST web API calls. You run REST web API calls through <a href="./gs-curl">cURL commands</a> or a REST client.

Read the following sections to get up and running with the Magento web APIs:

<ul>
   <li>
      <p>
         <a href="./authentication/"> Authentication</a>
      </p>
   </li>
   <li>
      <p>
         <a href="./gs-web-api-request">Construct a request</a>
      </p>
   </li>
   <li>
      <p>
         <a href="./gs-curl">Use cURL to run the request</a>
      </p>
   </li>
   <li>
      <p>
         <a href="./gs-web-api-response">Review the response</a>
      </p>
   </li>
</ul>
