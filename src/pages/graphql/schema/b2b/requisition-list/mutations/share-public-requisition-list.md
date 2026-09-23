---
title: sharePublicRequisitionList mutation
description: This mutation is part of the B2B Storefront Compatibility Package and is only available on Adobe Commerce as a Cloud Service.
keywords:
  - B2B
---

<Fragment src="/includes/commerce-only.md"/>

# sharePublicRequisitionList mutation

<Fragment src="/includes/scp-b2b-mutation.md" />

The `sharePublicRequisitionList` mutation emails the share link for a public requisition list to one or more recipients. Recipients are not limited to registered customers or members of the owner's company. The mutation requires `requisition_list_uid` and an array of `emails` as input parameters. This mutation returns a `sent_count` which shows the number of emails successfully sent, and `user_errors`, if any.

<InlineAlert variant="info" slots="text" />

This mutation requires a valid [customer authentication token](../../../customer/mutations/generate-token.md), and only the owner of the requisition list can call it. The list must already be marked public. Use the [`createRequisitionList`](create.md) or [`updateRequisitionList`](update.md) mutation with `is_public: true` to mark a list public before sharing it.

## Syntax

```graphql
{
    sharePublicRequisitionList(
        input: SharePublicRequisitionListInput!
    ): SharePublicRequisitionListOutput
}
```

## Reference

The [`sharePublicRequisitionList`](/reference/graphql/saas/mutations.md#sharepublicrequisitionlist) reference provides detailed information about the types and fields defined in this mutation.

## Example usage

The following example shares a public requisition list with the specified email addresses.

**Request:**

```graphql
mutation SharePublicRequisitionList {
    sharePublicRequisitionList(
        input: {
            requisition_list_uid: "OTc5"
            emails: ["buyer1@example.com", "buyer2@example.com"]
        }
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
    "sharePublicRequisitionList": {
      "sent_count": 2,
      "user_errors": []
    }
  }
}
```
