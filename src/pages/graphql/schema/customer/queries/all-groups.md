---
title: allCustomerGroups query
edition: ee
---

# allCustomerGroups query

<InlineAlert variant="info" slots="text1" />

This query is part of the [Storefront Compatibility Package](https://experienceleague.adobe.com/developer/commerce/storefront/setup/storefront-compatibility/). It will be added to Adobe Commerce 2.4.8-beta4.

The `allCustomerGroups` query returns a list of available customer groups.

## Syntax

```graphql
{
    allCustomerGroups {
        name
    }
}
```

<!---
## Reference

The [`allCustomerGroups`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-all-customer-groups) reference provides detailed information about the types and fields defined in this query.
-->

## Example usage

### Retrieve all customer groups

The following call returns a list of all customer groups.

**Request:**

```graphql
{
    allCustomerGroups {
        name
    }
}
```

**Response:**

```json
{
  "allCustomerGroups": [
    {
      "name": "Group A"
    },
    {
      "name": "Group B"
    }
  ]
}
```

## Related topics

*  [allCustomerSegments query](all-segments.md)
