---
title: deleteCompareList mutation | Commerce Web APIs
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

# deleteCompareList mutation

The `deleteCompareList` mutation deletes the specified comparison list. Run this mutation in the following circumstances:

*  When the guest or customer clears all entries from the comparison list.
*  After a guest's session expires.

## Syntax

```graphql
mutation {
    deleteCompareList(
        uid: ID!
    ) {
        DeleteCompareListOutput
    }
}
```

## Example usage

The following example deletes the comparison list with a `uid` value of `sssXyGZkTFksdPnxNoK1ut6OiV4bbchD`.

**Request:**

```graphql
mutation {
    deleteCompareList(
        uid: "sssXyGZkTFksdPnxNoK1ut6OiV4bbchD"
    ) {
        result
    }
}
```

**Response:**

```json
{
  "data": {
    "deleteCompareList": {
      "result": true
    }
  }
}
```

## Input attributes

The `deleteCompareList` mutation requires the following input.

Attribute |  Data Type | Description
--- | --- | ---
`uid` | ID! | The unique ID of the compare list to delete

## Output attributes

The `DeleteCompareListOutput` object returns a Boolean value that indicates whether the operation was successful.

Attribute |  Data Type | Description
--- | --- | ---
`result` | Boolean! | A value of `true` indicates the compare list has been deleted successfully. Otherwise, the value is `false`

## Related topics

*  [compareList query](../queries/compare-list.md)
*  [addProductsToCompareList mutation](add-products-to-compare-list.md)
*  [assignCompareListToCustomer mutation](assign-compare-list.md)
*  [createCompareList mutation](create-compare-list.md)
*  [removeProductsFromCompareList mutation](remove-from-compare-list.md)
