---
title: shareRequisitionListByEmail mutation
description: This mutation is part of the B2B Storefront Compatibility Package and is only available on Adobe Commerce as a Cloud Service.
keywords:
  - B2B
---

<Edition slots="text" backgroundcolor="green"/>

[SaaS only](https://experienceleague.adobe.com/en/docs/commerce/user-guides/product-solutions)

| |
|:--|
| \<span style="display:inline-block; vertical-align:middle;"\>\<img src="../pages/_images/adobe-logo.svg" alt="Adobe Commerce feature" style="height:20px; margin-right:8px; vertical-align:middle;" /\>\</span\>\<span style="display:inline-block; vertical-align:middle;"\>\<strong\>Exclusive feature only in Adobe Commerce\</strong\> (\<a href="https://experienceleague.adobe.com/docs/commerce-admin/user-guides/home.html#product-editions"\>Learn more\</a\>)\</span\> |

# shareRequisitionListByEmail mutation

<InlineAlert variant="info" slots="text1" />

This mutation is part of the B2B Storefront Compatibility Package and is only available on [Adobe Commerce as a Cloud Service](https://experienceleague.adobe.com/en/docs/commerce/cloud-service/overview).

The `shareRequisitionListByEmail` mutation enables B2B customers to share a requisition list with colleagues within the same company in an email. The mutation requires `requisitionListUid` and an array of `customerUids` as input parameters. This mutation returns a `sent_count` which shows the count of emails the list has been shared to, and `user_errors`, if any.

## Syntax

```graphql
{
    shareRequisitionListByEmail(
        input: ShareRequisitionListByEmailInput!
    ): ShareRequisitionListByEmailOutput
}
```

[//]: # (## Reference)
[//]: # ()
[//]: # (The [`shareRequisitionListByEmail`]&#40;https://developer.adobe.com/commerce/webapi/graphql-api/saas/index.html#mutation-shareRequisitionListByEmail&#41; reference provides detailed information about the types and fields defined in this mutation.)

## Example usage

The following example shares a requisition list to the specified customer UIDs.

**Request:**

```graphql
mutation ShareRequisitionListByEmail {
    shareRequisitionListByEmail(
        input: { customerUids: ["MQ==", "Mg=="], requisitionListUid: "OTc5" }
    ) {
        sent_count
        user_errors {
            code
            message
        }
    }
}
```

**Response:**

```json
{
  "data": {
    "shareRequisitionListByEmail": {
      "sent_count": 2,
      "user_errors": []
    }
  }
}
```

