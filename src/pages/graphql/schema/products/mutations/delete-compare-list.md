---
title: deleteCompareList mutation
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

## Reference

The [`deleteCompareList`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-deleteCompareList) reference provides detailed information about the types and fields defined in this mutation.

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

## Related topics

*  [compareList query](../queries/compare-list.md)
*  [addProductsToCompareList mutation](add-products-to-compare-list.md)
*  [assignCompareListToCustomer mutation](assign-compare-list.md)
*  [createCompareList mutation](create-compare-list.md)
*  [removeProductsFromCompareList mutation](remove-from-compare-list.md)
