---
title: Unions
keywords:
  - B2B
---

import CommerceOnly from '/src/_includes/commerce-only.md'

<CommerceOnly />

# Unions

A GraphQL union represents an object that could be one of several data types, but there is no guarantee that the data types contain fields in common. Use an inline fragment to return details about each possible data type.

See the GraphQL specification for more details about [unions](https://graphql.org/learn/schema/#union-types).

## CloseNegotiableQuoteError union

The `CloseNegotiableQuoteError` union provides details about failed attempts to close one or more negotiable quotes.

* &#8203;<Edition name="saas" /> [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#definition-CloseNegotiableQuoteError)

* &#8203;<Edition name="paas" /> [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-CloseNegotiableQuoteError)

**Possible types:**

*  `InternalError`
*  `NegotiableQuoteInvalidStateError`
*  `NoSuchEntityUidError`

**Fields with this union:**

`CloseNegotiableQuoteOperationFailure.errors`

## CloseNegotiableQuoteOperationResult union

The `CloseNegotiableQuoteOperationResult` union provides details about the result of a request to close a negotiable quote.

* &#8203;<Edition name="saas" /> [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#definition-CloseNegotiableQuoteOperationResult)

* &#8203;<Edition name="paas" /> [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-CloseNegotiableQuoteOperationResult)

**Possible types:**

*  `CloseNegotiableQuoteOperationFailure`
*  `NegotiableQuoteUidOperationSuccess`

**Fields with this union:**

`CloseNegotiableQuotesOutput.operation_results`

## CompanyStructureEntity union

The `CompanyStructureEntity` union provides details about a node in a company structure.

* &#8203;<Edition name="saas" /> [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#definition-CompanyStructureEntity)

* &#8203;<Edition name="paas" /> [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-CompanyStructureEntity)

**Possible types:**

*  `CompanyTeam`
*  `Customer`

**Fields with this union:**

*  `CompanyStructureItem.entity`

## DeleteNegotiableQuoteError union

The `DeleteNegotiableQuoteError` union provides details about failed attempts to delete one or more negotiable quotes.

* &#8203;<Edition name="saas" /> [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#definition-DeleteNegotiableQuoteError)

* &#8203;<Edition name="paas" /> [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-DeleteNegotiableQuoteError)

**Possible types:**

*  `InternalError`
*  `NegotiableQuoteInvalidStateError`
*  `NoSuchEntityUidError`

**Fields with this union:**

`DeleteNegotiableQuoteOperationFailure.errors`

## DeleteNegotiableQuoteOperationResult union

The `DeleteNegotiableQuoteOperationResult` union provides details about the result of a request to delete a negotiable quote.

* &#8203;<Edition name="saas" /> [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#definition-DeleteNegotiableQuoteOperationResult)

* &#8203;<Edition name="paas" /> [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#definition-DeleteNegotiableQuoteOperationResult)

**Possible types:**

*  DeleteNegotiableQuoteOperationFailure
*  NegotiableQuoteUidOperationSuccess

**Fields with this union:**

`DeleteNegotiableQuotesOutput.operation_results`
