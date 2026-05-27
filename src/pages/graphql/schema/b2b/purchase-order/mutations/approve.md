---
title: approvePurchaseOrders mutation
description: The approvePurchaseOrders mutation approves one or more purchase orders. The specified purchase orders must have a status of PENDING.
keywords:
  - B2B
---

| |
|:--|
| \<span style="display:inline-block; vertical-align:middle;"\>\<img src="../pages/_images/adobe-logo.svg" alt="Adobe Commerce feature" style="height:20px; margin-right:8px; vertical-align:middle;" /\>\</span\>\<span style="display:inline-block; vertical-align:middle;"\>\<strong\>Exclusive feature only in Adobe Commerce\</strong\> (\<a href="https://experienceleague.adobe.com/docs/commerce-admin/user-guides/home.html#product-editions"\>Learn more\</a\>)\</span\> |

# approvePurchaseOrders mutation

The `approvePurchaseOrders` mutation approves one or more purchase orders. The specified purchase orders must have a status of PENDING.

## Syntax

```graphql
mutation {
    approvePurchaseOrders(
      input: PurchaseOrdersActionInput!
    ) {
      PurchaseOrdersActionOutput
    }
}
```

## Reference

The `approvePurchaseOrders` reference provides detailed information about the types and fields defined in this mutation.

* &#8203;<Edition name="saas" /> [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-approvePurchaseOrders)

* &#8203;<Edition name="paas" /> [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-approvePurchaseOrders)

## Example usage

The following example approves a purchase order.

**Request:**

``` graphql
mutation {
  approvePurchaseOrders(
    input: {
      purchase_order_uids: ["Ng=="]
    }
  ) {
    purchase_orders {
      number
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
    "approvePurchaseOrders": {
      "purchase_orders": [
        {
          "number": "000000006"
        }
      ],
      "errors": []
    }
  }
}
```

