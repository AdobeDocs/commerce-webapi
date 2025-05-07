---
title: clearCustomerCart mutation
contributor_name: EY
keywords:
  - B2B
---

# clearCustomerCart mutation

The `clearCustomerCart` mutation clears the customer's cart. B2B requisition lists must be enabled to execute this mutation.

<InlineAlert variant="info" slots="text" />

Use the [storeConfig query](../../../../schema/store/queries/store-config.md) with the `is_requisition_list_active` attribute to determine whether requisition lists are enabled.

This mutation requires a valid [customer authentication token](../../../customer/mutations/generate-token.md).

## Syntax

```graphql
mutation {
  clearCustomerCart(
    cartUid: String!
  ) {
    ClearCustomerCartOutput
  }
}
```

## Reference

The [`clearCustomerCart`](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-clearCustomerCart) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example clears the customer's cart.

**Request:**

``` graphql
mutation {
  clearCustomerCart(
      cartUid: "8k0Q4MpH2IGahWrTRtqM61YV2MtLPApz"
    ) {
        status
    }
}
```

**Response:**

``` json
{
  "data": {
    "clearCustomerCart": {
        "status": "true"
    }
  }
}
```
