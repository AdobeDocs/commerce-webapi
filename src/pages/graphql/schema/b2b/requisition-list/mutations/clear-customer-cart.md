---
title: clearCustomerCart mutation
edition: b2b
contributor_name: EY
---

# clearCustomerCart mutation

The `clearCustomerCart` mutation clears the customer's cart.

This mutation requires a valid [customer authentication token](../../../customer/mutations/generate-token.md).

<InlineAlert variant="info" slots="text" />

Use the [storeConfig query](../../../../schema/store/queries/store-config.md) with the `is_requisition_list_active` attribute to determine whether requisition lists are enabled.

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

## Input attributes

The `clearCustomerCart` mutation requires the following input.

Attribute |  Data Type | Description
--- | --- | ---
`cartUid`| String! | The masked ID of the cart.

## Output attributes

The `clearCustomerCart` object returns the status and cart object.

Attribute |  Data Type | Description
--- | --- | ---
`cart` | [Cart](#cart-object) | The cart after clearing items.
`status` | Boolean! | Indicates whether cart was cleared.

### Cart object

The `Cart` object can contain the following attributes.

import CartObject from '/src/pages/_includes/graphql/cart-object-24.md'

<CartObject />
