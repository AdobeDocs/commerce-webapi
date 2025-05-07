---
title: deleteNegotiableQuotes mutation
keywords:
  - B2B
---

# deleteNegotiableQuotes mutation

The `deleteNegotiableQuotes` mutation causes the specified negotiable quotes to be invisible from the Admin or from the storefront. The quotes are still present in the database.

You can run the `deleteNegotiableQuotes` mutation when negotiable quotes are have the following statuses:

*  SUBMITTED
*  UPDATED
*  OPEN
*  CLOSED
*  DECLINED
*  EXPIRED

This mutation requires a valid [customer authentication token](../../../customer/mutations/generate-token.md).

## Syntax

```graphql
deleteNegotiableQuotes(
    input: DeleteNegotiableQuotesInput!
): DeleteNegotiableQuotesOutput
```

## Reference

The [`deleteNegotiableQuotes`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-deleteNegotiableQuotes) reference provides detailed information about the types and fields defined in this mutation.

The [`DeleteNegotiableQuoteOperationResult` union](../unions/index.md) is an output object that provides details about the result of a request to delete a negotiable quote. To return these details, specify fragments on the `DeleteNegotiableQuoteOperationFailure` and `NegotiableQuoteUidOperationSuccess` objects. Specify the `__typename` attribute to distinguish the object types in the response.

The `DeleteNegotiableQuoteError` union type contains one or more of the following data types, all of which implement `ErrorInterface`.

*  `InternalError`
*  `NegotiableQuoteInvalidStateError`
*  `NoSuchEntityUidError`

## Example usage

The following example deletes the specified negotiable quote.

**Request:**

```graphql
mutation {
  deleteNegotiableQuotes(
    input: {
      quote_uids: ["R1chDMgmh6PXGz2AjXMTBaiE68wTydRH"]
    }
  ) {
    result_status,
    operation_results {
      ...on NegotiableQuoteUidOperationSuccess{
        __typename
        quote_uid
      }
      ...on DeleteNegotiableQuoteOperationFailure{
        __typename
        quote_uid
        errors {
          __typename
          ...on ErrorInterface{
            message
          }
          ...on NoSuchEntityUidError{
            uid
            message
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
    "deleteNegotiableQuotes": {
      "result_status": "SUCCESS",
      "operation_results": [
        {
          "__typename": "NegotiableQuoteUidOperationSuccess",
          "quote_uid": "R1chDMgmh6PXGz2AjXMTBaiE68wTydRH"
        }
      ]
    }
  }
}
```
