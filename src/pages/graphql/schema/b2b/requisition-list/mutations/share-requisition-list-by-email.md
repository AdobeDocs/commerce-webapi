---
title: shareRequisitionListByEmail mutation
description: This mutation is part of the B2B Storefront Compatibility Package and is only available on Adobe Commerce as a Cloud Service.
keywords:
  - B2B
---

<Fragment src="../../../../../includes/saas-only.md"/>

<Fragment src="../../../../../includes/commerce-only.md"/>

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
[//]: # (The [`shareRequisitionListByEmail`]&#40;/reference/graphql/saas/mutations.md#sharerequisitionlistbyemail&#41; reference provides detailed information about the types and fields defined in this mutation.)

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
