---
title: validatePurchaseOrders mutation
description: By default, Adobe Commerce validates purchase orders automatically. However, purchase orders can become stuck in certain circumstances, such as when the me...
keywords:
  - B2B
---

| |
|:--|
| \<span style="display:inline-block; vertical-align:middle;"\>\<img src="../../../../../images/adobe-logo.svg" alt="Adobe Commerce feature" style="height:20px; margin-right:8px; vertical-align:middle;" /\>\</span\>\<span style="display:inline-block; vertical-align:middle;"\>\<strong\>Exclusive feature only in Adobe Commerce\</strong\> (\<a href="https://experienceleague.adobe.com/docs/commerce-admin/user-guides/home.html#product-editions"\>Learn more\</a\>)\</span\> |

# validatePurchaseOrders mutation

By default, Adobe Commerce validates purchase orders automatically. However, purchase orders can become stuck in certain circumstances, such as when the message queue system is down and the purchase order is in the PENDING state. You might need to run the `validatePurchaseOrders` mutation to manually validate purchase orders.

You must specify one or more purchase order UIDs as input.

## Syntax

```graphql
mutation {
    validatePurchaseOrders(
        input: ValidatePurchaseOrdersInput!
    ) {
        ValidatePurchaseOrdersOutput
    }
}
```

## Reference

The `validatePurchaseOrders` reference provides detailed information about the types and fields defined in this mutation.

* [SaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-validatePurchaseOrders)

* [PaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-validatePurchaseOrders)

## Headers

A valid [customer authentication token](../../../customer/mutations/generate-token.md) is required.

## Example usage

The following example validates purchase orders.

**Request:**

``` graphql
mutation {
  validatePurchaseOrders(
    input: {
        purchase_order_uids: ["Nw==", "OA=="]
    }
  ) {
    purchase_orders {
        number
        status
    }
    errors {
        message
        type
    }
  }
}
```

**Response:**

``` json
{
  "data": {
    "validatePurchaseOrders": {
      "purchase_orders": [
        {
          "number": "000000007",
          "status": "APPROVAL_REQUIRED"
        },
        {
          "number": "000000008",
          "status": "APPROVAL_REQUIRED"
        }
      ],
      "errors": []
    }
  }
}
```

