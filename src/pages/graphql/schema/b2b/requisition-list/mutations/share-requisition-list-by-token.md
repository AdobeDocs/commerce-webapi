---
title: shareRequisitionListByToken mutation
description: This mutation is part of the B2B Storefront Compatibility Package and is only available on Adobe Commerce as a Cloud Service.
keywords:
  - B2B
---

<Edition slots="text" backgroundcolor="green"/>

[SaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions)

| |
|:--|
| \<span style="display:inline-block; vertical-align:middle;"\>\<img src="../../../../../images/adobe-logo.svg" alt="Adobe Commerce feature" style="height:20px; margin-right:8px; vertical-align:middle;" /\>\</span\>\<span style="display:inline-block; vertical-align:middle;"\>\<strong\>Exclusive feature only in Adobe Commerce\</strong\> (\<a href="https://experienceleague.adobe.com/docs/commerce-admin/user-guides/home.html#product-editions"\>Learn more\</a\>)\</span\> |

# shareRequisitionListByToken mutation

<InlineAlert variant="info" slots="text1" />

This mutation is part of the B2B Storefront Compatibility Package and is only available on [Adobe Commerce as a Cloud Service](https://experienceleague.adobe.com/en/docs/commerce/cloud-service/overview).

The `shareRequisitionListByToken` mutation enables B2B customers to share a requisition list with colleagues within the same company using a shareable link generated on the storefront. The mutation requires `requisitionListUid` as an input parameter. This mutation returns the token assigned to the shared requisition list.

## Syntax

```graphql
{
    shareRequisitionListByToken(
        requisitionListUid: ID!
    ): ShareRequisitionListByTokenOutput
}
```

[//]: # (## Reference)
[//]: # ()
[//]: # (The [`shareRequisitionListByToken`]&#40;https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-shareRequisitionListByToken&#41; reference provides detailed information about the types and fields defined in this mutation.)

## Example usage

The following example provides a token for a shareable requisition list.

**Request:**

```graphql
mutation ShareRequisitionListByToken {
    shareRequisitionListByToken(requisitionListUid: "OTc5") {
        token
    }
}
```

**Response:**

```json
{
  "data": {
    "shareRequisitionListByToken": {
      "token": "qEJD2aUhmYnf1jNoaOtlo7XwBP8BRof5GhF0L5kbdJxYMZ13OlFvy2VFy33NnUCp"
    }
  }
}
```

