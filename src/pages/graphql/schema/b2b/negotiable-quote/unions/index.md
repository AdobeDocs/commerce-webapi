---
title: Unions
description: A GraphQL union represents an object that could be one of several data types, but there is no guarantee that the data types contain fields in common. Use a...
keywords:
  - B2B
---

<Fragment src="../../../../../includes/commerce-only.md"/>

# Unions

A GraphQL union represents an object that could be one of several data types, but there is no guarantee that the data types contain fields in common. Use an inline fragment to return details about each possible data type.

See the GraphQL specification for more details about [unions](https://graphql.org/learn/schema/#union-types).

## CloseNegotiableQuoteError union

The `CloseNegotiableQuoteError` union provides details about failed attempts to close one or more negotiable quotes.

* [Adobe Commerce as a Cloud Service](/reference/graphql/saas/types-c-e.md#closenegotiablequoteerror)

* [On-Premises/Cloud](/reference/graphql/latest/types-c-e.md#closenegotiablequoteerror)

**Possible types:**

*  `InternalError`
*  `NegotiableQuoteInvalidStateError`
*  `NoSuchEntityUidError`

**Fields with this union:**

`CloseNegotiableQuoteOperationFailure.errors`

## CloseNegotiableQuoteOperationResult union

The `CloseNegotiableQuoteOperationResult` union provides details about the result of a request to close a negotiable quote.

* [Adobe Commerce as a Cloud Service](/reference/graphql/saas/types-c-e.md#closenegotiablequoteoperationresult)

* [On-Premises/Cloud](/reference/graphql/latest/types-c-e.md#closenegotiablequoteoperationresult)

**Possible types:**

*  `CloseNegotiableQuoteOperationFailure`
*  `NegotiableQuoteUidOperationSuccess`

**Fields with this union:**

`CloseNegotiableQuotesOutput.operation_results`

## CompanyStructureEntity union

The `CompanyStructureEntity` union provides details about a node in a company structure.

* [Adobe Commerce as a Cloud Service](/reference/graphql/saas/types-c-e.md#companystructureentity)

* [On-Premises/Cloud](/reference/graphql/latest/types-c-e.md#companystructureentity)

**Possible types:**

*  `CompanyTeam`
*  `Customer`

**Fields with this union:**

*  `CompanyStructureItem.entity`

## DeleteNegotiableQuoteError union

The `DeleteNegotiableQuoteError` union provides details about failed attempts to delete one or more negotiable quotes.

* [Adobe Commerce as a Cloud Service](/reference/graphql/saas/types-c-e.md#deletenegotiablequoteerror)

* [On-Premises/Cloud](/reference/graphql/latest/types-c-e.md#deletenegotiablequoteerror)

**Possible types:**

*  `InternalError`
*  `NegotiableQuoteInvalidStateError`
*  `NoSuchEntityUidError`

**Fields with this union:**

`DeleteNegotiableQuoteOperationFailure.errors`

## DeleteNegotiableQuoteOperationResult union

The `DeleteNegotiableQuoteOperationResult` union provides details about the result of a request to delete a negotiable quote.

* [Adobe Commerce as a Cloud Service](/reference/graphql/saas/types-c-e.md#deletenegotiablequoteoperationresult)

* [On-Premises/Cloud](/reference/graphql/latest/types-c-e.md#deletenegotiablequoteoperationresult)

**Possible types:**

*  DeleteNegotiableQuoteOperationFailure
*  NegotiableQuoteUidOperationSuccess

**Fields with this union:**

`DeleteNegotiableQuotesOutput.operation_results`
