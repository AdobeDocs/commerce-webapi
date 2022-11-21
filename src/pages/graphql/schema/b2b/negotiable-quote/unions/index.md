---
title: Unions | Commerce Web APIs
---

# Unions

A GraphQL union represents an object that could be one of several data types, but there is no guarantee that the data types contain fields in common. Use an inline fragment to return details about each possible data type.

See the GraphQL specification for more details about [unions](https://graphql.org/learn/schema/#union-types).

## CloseNegotiableQuoteError union

The [`CloseNegotiableQuoteError` union](../mutations/close.md#closenegotiablequoteerror-attributes) provides details about failed attempts to close one or more negotiable quotes.

**Possible types:**

*  `InternalError`
*  `NegotiableQuoteInvalidStateError`
*  `NoSuchEntityUidError`

**Fields with this union:**

`CloseNegotiableQuoteOperationFailure.errors`

## CloseNegotiableQuoteOperationResult union

The [`CloseNegotiableQuoteOperationResult` union](../mutations/close.md#closenegotiablequoteoperationresult-attributes) provides details about the result of a request to close a negotiable quote.

**Possible types:**

*  `CloseNegotiableQuoteOperationFailure`
*  `NegotiableQuoteUidOperationSuccess`

**Fields with this union:**

`CloseNegotiableQuotesOutput.operation_results`

## CompanyStructureEntity union

The [`CompanyStructureEntity` union](../../company/unions/structure-entity.md) provides details about a node in a company structure.

**Possible types:**

*  `CompanyTeam`
*  `Customer`

**Fields with this union:**

*  `CompanyStructureItem.entity`

## DeleteNegotiableQuoteError union

The [`DeleteNegotiableQuoteError` union](../mutations/delete.md#deletenegotiablequoteerror-attributes) provides details about failed attempts to delete one or more negotiable quotes.

**Possible types:**

*  `InternalError`
*  `NegotiableQuoteInvalidStateError`
*  `NoSuchEntityUidError`

**Fields with this union:**

`DeleteNegotiableQuoteOperationFailure.errors`

## DeleteNegotiableQuoteOperationResult union

The [`DeleteNegotiableQuoteOperationResult` union](../mutations/delete.md#deletenegotiablequoteoperationresult-attributes) provides details about the result of a request to delete a negotiable quote.

**Possible types:**

*  DeleteNegotiableQuoteOperationFailure
*  NegotiableQuoteUidOperationSuccess

**Fields with this union:**

`DeleteNegotiableQuotesOutput.operation_results`
