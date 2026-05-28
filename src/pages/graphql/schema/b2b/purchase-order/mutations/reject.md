---
title: rejectPurchaseOrders mutation
description: The rejectPurchaseOrders mutation rejects one or more purchase orders. The specified purchase orders must have a status of PENDING.
keywords:
  - B2B
---

| |
|:--|
| \<span style="display:inline-block; vertical-align:middle;"\>\<img src="../../../../../images/adobe-logo.svg" alt="Adobe Commerce feature" style="height:20px; margin-right:8px; vertical-align:middle;" /\>\</span\>\<span style="display:inline-block; vertical-align:middle;"\>\<strong\>Exclusive feature only in Adobe Commerce\</strong\> (\<a href="https://experienceleague.adobe.com/docs/commerce-admin/user-guides/home.html#product-editions"\>Learn more\</a\>)\</span\> |

# rejectPurchaseOrders mutation

The `rejectPurchaseOrders` mutation rejects one or more purchase orders. The specified purchase orders must have a status of PENDING.

## Syntax

```graphql
mutation {
  rejectPurchaseOrders(
    input: PurchaseOrdersActionInput!
  ){
    PurchaseOrdersActionOutput
  }
}
```

## Reference

The `rejectPurchaseOrders` reference provides detailed information about the types and fields defined in this mutation.

* [SaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-rejectPurchaseOrders)

* [PaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-rejectPurchaseOrders)

## Example usage

The following example rejects a purchase order.

**Request:**

``` graphql
mutation {
  rejectPurchaseOrders(
    input: {
      purchase_order_uids: ["MTA="]
    }
  ) {
    purchase_orders {
      number
      uid
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
    "rejectPurchaseOrders": {
      "purchase_orders": [
        {
          "number": "000000010",
          "uid": "MTA=",
          "status": "REJECTED"
        }
      ],
      "errors": []
    }
  }
}
```

