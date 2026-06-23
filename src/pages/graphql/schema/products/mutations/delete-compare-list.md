---
title: deleteCompareList mutation
description: The deleteCompareList mutation deletes the specified comparison list. Run this mutation in the following circumstances:
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

The `deleteCompareList` reference provides detailed information about the types and fields defined in this mutation.

* [Adobe Commerce as a Cloud Service](/reference/graphql/saas/mutations.md#deletecomparelist)

* [On-Premises/Cloud](/reference/graphql/latest/mutations.md#deletecomparelist)

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

<Edition slots="text" backgroundcolor="gray"/>

[Thanks to Atwix for contributing this topic!](https://www.atwix.com/)
