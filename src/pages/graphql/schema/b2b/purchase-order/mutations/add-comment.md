---
title: addPurchaseOrderComment mutation
description: The addPurchaseOrderComment mutation adds a comment to the specified purchase order. The response contains details about the comment.
keywords:
  - B2B
---

| |
|:--|
| \<span style="display:inline-block; vertical-align:middle;"\>\<img src="../pages/_images/adobe-logo.svg" alt="Adobe Commerce feature" style="height:20px; margin-right:8px; vertical-align:middle;" /\>\</span\>\<span style="display:inline-block; vertical-align:middle;"\>\<strong\>Exclusive feature only in Adobe Commerce\</strong\> (\<a href="https://experienceleague.adobe.com/docs/commerce-admin/user-guides/home.html#product-editions"\>Learn more\</a\>)\</span\> |

# addPurchaseOrderComment mutation

The `addPurchaseOrderComment` mutation adds a comment to the specified purchase order. The response contains details about the comment.

## Syntax

```graphql
mutation {
  addPurchaseOrderComment(
    input: AddPurchaseOrderCommentInput!
  ) {
      AddPurchaseOrderCommentOutput
  }
}
```

## Reference

The `addPurchaseOrderComment` reference provides detailed information about the types and fields defined in this mutation.

* [SaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [Adobe Commerce as a Cloud Service](https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-addPurchaseOrderComment)

* [PaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions) [On-Premises/Cloud](https://developer.adobe.com/commerce/webapi/graphql-api/index.html#mutation-addPurchaseOrderComment)

## Example usage

The following example adds a comment to the purchase order.

**Request:**

``` graphql
mutation {
  addPurchaseOrderComment(
      input: {
        purchase_order_uid: "MQ==",
        comment: "Looks good to me"
      },
    ) {
    comment {
        uid
        author {
            firstname
            lastname
            email
        }
        text
    }
  }
}
```

**Response:**

``` json
{
  "data": {
    "addPurchaseOrderComment": {
      "comment": {
        "uid": "Mw==",
        "author": {
          "firstname": "John",
          "lastname": "Doe",
          "email": "john.doe@example.com"
        },
        "text": "Looks good to me."
      }
    }
  }
}
```

