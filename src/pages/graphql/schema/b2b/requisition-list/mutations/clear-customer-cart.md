---
title: clearCustomerCart mutation
description: The clearCustomerCart mutation clears the customer's cart. B2B requisition lists must be enabled to execute this mutation.
contributor_name: EY
keywords:
  - B2B
---

| |
|:--|
| ![Adobe Commerce feature](../../../../../images/adobe-logo.svg) **Exclusive feature only in Adobe Commerce** ([Learn more](https://experienceleague.adobe.com/docs/commerce-admin/user-guides/home.html#product-editions)) |

# clearCustomerCart mutation

The `clearCustomerCart` mutation clears the customer's cart. B2B requisition lists must be enabled to execute this mutation.

<InlineAlert variant="info" slots="text" />

Use the [storeConfig query](../../../store/queries/store-config.md) with the `is_requisition_list_active` attribute to determine whether requisition lists are enabled.

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

The `clearCustomerCart` reference provides detailed information about the types and fields defined in this mutation.

* [SaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-clearCustomerCart)

* [PaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-clearCustomerCart)

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

<Edition slots="text" backgroundcolor="blue"/>

Thanks to EY for contributing this topic!
