---
title: closeNegotiableQuotes mutation
keywords:
  - B2B
---

import CommerceOnly from '/src/_includes/commerce-only.md'

<CommerceOnly />

# closeNegotiableQuotes mutation

The `closeNegotiableQuotes` mutation closes an active negotiable quote. Once a quote is closed, it cannot be re-opened. Closed negotiable quotes can be viewed by the merchant and company users.

The [`CloseNegotiableQuoteOperationResult` union](../unions/index.md) is an output object that provides details about the result of a request to close a negotiable quote. To return these details, specify fragments on the `CloseNegotiableQuoteOperationFailure` and `NegotiableQuoteUidOperationSuccess` objects. Specify the `__typename` attribute to distinguish the object types in the response.

The `CloseNegotiableQuoteError` union type contains one or more of the following data types, all of which implement `ErrorInterface`.

*  `InternalError`
*  `NegotiableQuoteInvalidStateError`
*  `NoSuchEntityUidError`

This mutation requires a valid [customer authentication token](../../../customer/mutations/generate-token.md).

## Syntax

```graphql
    closeNegotiableQuotes(
        input: CloseNegotiableQuotesInput!
    ): CloseNegotiableQuotesOutput
```

## Reference

The [`closeNegotiableQuotes`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-closeNegotiableQuotes) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example contains an invalid `quote_uids` value, causing a FAILURE status.

**Request:**

```graphql
mutation {
  closeNegotiableQuotes(
    input: {
      quote_uids: ["xyz"]
    }
  ) {
    result_status,
    operation_results {
      ...on NegotiableQuoteUidOperationSuccess{
        __typename
        quote_uid
      }
      ...on CloseNegotiableQuoteOperationFailure{
        __typename
        quote_uid
        errors {
          __typename
          ...on ErrorInterface{
            message
          }
          ...on NoSuchEntityUidError{
            uid
          }
          ...on NegotiableQuoteInvalidStateError {
            message
          }
        }
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "closeNegotiableQuotes": {
      "result_status": "FAILURE",
      "operation_results": [
        {
          "__typename": "CloseNegotiableQuoteOperationFailure",
          "quote_uid": "xyz",
          "errors": [
            {
              "__typename": "NoSuchEntityUidError",
              "message": "Could not find a quote with the specified UID.",
              "uid": "xyz"
            }
          ]
        }
      ]
    }
  }
}
```
