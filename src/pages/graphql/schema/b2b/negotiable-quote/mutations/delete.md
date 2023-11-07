---
title: deleteNegotiableQuotes mutation
edition: b2b
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

## Input attributes

The `DeleteNegotiableQuotesInput` object contains the following attribute.

Attribute | Data Type | Description
--- | --- | ---
`quote_uids` | [ID!]! | An array of unique IDs indicating which quotes to delete

## Output attributes

The `DeleteNegotiableQuotesOutput` output object contains the following fields.

Attribute | Data Type | Description
--- | --- | ---
`negotiable_quotes(filter NegotiableQuoteFilterInput, pageSize = 20 Int, currentPage = 1 Int)` | NegotiableQuotesOutput | A list of negotiable quotes that the customer can view
`operation_results` | [DeleteNegotiableQuoteOperationResult!]! | An array of deleted negotiable quote UIDs and details about any errors
`result_status` | BatchMutationStatus | The status of the request to delete one or more negotiable quotes. The possible values are SUCCESS, FAILURE, and MIXED_RESULTS

The `negotiable_quotes` field takes the following arguments.

import NegotiableQuotesInput from '/src/_includes/graphql/negotiable-quotes-input.md'

<NegotiableQuotesInput />

### DeleteNegotiableQuoteOperationResult attributes

The [`DeleteNegotiableQuoteOperationResult` union](../unions/index.md) provides details about the result of a request to delete a negotiable quote. To return these details, specify fragments on the `DeleteNegotiableQuoteOperationFailure` and `NegotiableQuoteUidOperationSuccess` objects. Specify the `__typename` attribute to distinguish the object types in the response.

### DeleteNegotiableQuoteOperationFailure attributes

The DeleteNegotiableQuoteOperationFailure type contains details about a failed delete operation on a negotiable quote. It contains the following fields.

Attribute | Data Type | Description
--- | --- | ---
`errors` | [DeleteNegotiableQuoteError!]! | An array of errors encountered while attempting delete the negotiable quote
`quote_uid` | ID! | The unique ID of a `NegotiableQuote` object

### DeleteNegotiableQuoteError attributes

The `DeleteNegotiableQuoteError` union type contains one or more of the following data types, all of which implement `ErrorInterface`.

*  `InternalError`
*  `NegotiableQuoteInvalidStateError`
*  `NoSuchEntityUidError`

#### InternalError attributes

The `InternalError` object contains an error message if an internal error occurred.

Attribute | Data Type | Description
--- | --- | ---
`message` | String! | The returned error message

#### NegotiableQuoteInvalidStateError attributes

The `NegotiableQuoteInvalidStateError` object contains an error message indicating that an operation was attempted on a negotiable quote in an invalid state.

Attribute | Data Type | Description
--- | --- | ---
`message` | String! | The returned error message

#### NoSuchEntityUidError attributes

The `NoSuchEntityUidError` object contains an error message when an invalid UID was specified.

Attribute | Data Type | Description
--- | --- | ---
`message` | String! | The returned error message
`uid` | ID! | The specified invalid unique ID of an object

### NegotiableQuoteUidOperationSuccess attributes

The `NegotiableQuoteUidOperationSuccess` object contains details about a successful operation on a negotiable quote. It implements the `NegotiableQuoteUidNonFatalResultInterface`, which defines the following field

Attribute | Data Type | Description
--- | --- | ---
quote_uid | ID! | The unique ID of a `NegotiableQuote` object

### NegotiableQuote attributes

import NegotiableQuote from '/src/_includes/graphql/negotiable-quote.md'

<NegotiableQuote />
