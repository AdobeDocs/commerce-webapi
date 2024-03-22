---
title: Status Codes and Responses
description: A list of status codes and HTTP responses that can be returned from the GraphQl API.
keywords:
  - GraphQL
---

# Status codes and GraphQl responses

Each GraphQl API call returns a HTTP status code and a response payload. When an error occurs, the response payload returns an error message.

### HTTP status codes

Each GraphQl API call returns an HTTP status code that reflects the result of a request:

HTTP code | Meaning | Description
--- | --- | ---
200 | Success | The framework returns HTTP 200 to the caller upon success.
401 | Unauthorized | The caller was not authorized to perform the request. For example, the request included an invalid token, or a user with customer permissions attempted to access an object that requires administrator permissions.
403 | Forbidden | Access is not allowed for reasons that are not covered by error code 401.
500 | System Errors | If service implementation throws any other exception, such as a network error or database communication failure, the framework returns HTTP 500.

### Error format

When an error occurs, the response body contains an error message and data related to the executed query or mutation.

Part | Description
--- | --- | ---
`message` | The message explaining the error.
`locations` | The starting position in the incoming query or mutation that caused the issue.
`path` | The query or mutation being executed.
`extensions` | Module that throws the error.

As an example, the application returns a `code` of `401` and the following payload when trying to get customer email without passing a [valid token](authorization-tokens.md):

**Request:**

```graphql
{
  customer {
    email
  }
}
```

**Response:**

```json
{
  "errors": [
    {
      "message": "The current customer isn't authorized.",
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "path": [
        "customer"
      ],
      "extensions": {
        "category": "graphql-authorization"
      }
    }
  ],
  "data": {
    "customer": null
  }
}
```
