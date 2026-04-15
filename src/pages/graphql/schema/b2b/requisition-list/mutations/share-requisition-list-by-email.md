---
title: shareRequisitionListByEmail mutation
edition: saas
keywords:
  - B2B
---

import CommerceOnly from '/src/_includes/commerce-only.md'

<CommerceOnly />

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
